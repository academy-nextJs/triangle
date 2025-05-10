"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";

export function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // Simulate dynamic loading (e.g., wait for critical assets)
    const loadResources = async () => {
      // Example: await critical asset loading
      await new Promise((resolve) => setTimeout(resolve, 500)); // Replace with real asset check
      setInitialLoadComplete(true);
    };
    loadResources();

    return () => setInitialLoadComplete(false); // Reset on unmount
  }, []);

  if (!hasMounted || !initialLoadComplete) {
    return <LoadingScreen />;
  }

  // Respect reduced motion preference
  const shouldReduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const animationVariants = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
      };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          variants={animationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
