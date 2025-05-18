"use client";

import "./globals.css";
import { ThemeProviderWrapper } from "@/components/theme-provider-wrapper";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProviderWrapper>
          <AnimatePresence mode="wait">
            {isMounted && (
              <motion.div
                key={pathname}
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1], // Ease-out curve (iOS-like)
                }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
