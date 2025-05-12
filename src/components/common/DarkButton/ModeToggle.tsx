"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [pendingTheme, setPendingTheme] = React.useState<"light" | "dark">();

  const handleClick = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setIsAnimating(true);
    setPendingTheme(nextTheme);

    setTimeout(() => {
      setTheme(nextTheme);
      setIsAnimating(false);
      setPendingTheme(undefined);
    }, 200);
  };

  const showDark = (pendingTheme ?? resolvedTheme) === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleClick}
      aria-label="Toggle theme"
      className="relative overflow-hidden"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] absolute transition-none
          ${showDark ? "hidden" : "block animate-[spin_0.2s_linear]"}`}
      />

      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-none
          ${showDark ? "block animate-[spin_0.2s_linear]" : "hidden"}`}
      />
    </Button>
  );
}
