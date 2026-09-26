"use client";

import React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/animations/Magnetic";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

export function MagneticButton({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const variantStyles = {
    primary:
      "bg-foreground text-background hover:bg-[#2A2A2A] border border-transparent shadow-2xs",
    secondary:
      "bg-muted/70 text-foreground hover:bg-[#E2E1DA] border border-border hover:border-border-strong",
    ghost:
      "bg-transparent text-muted-foreground hover:text-foreground border border-transparent",
  };

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-mono tracking-wide",
    default: "px-5 py-2.5 text-xs font-mono uppercase tracking-[0.08em]",
    lg: "px-7 py-3 text-sm font-mono uppercase tracking-[0.08em]",
  };

  return (
    <Magnetic strength={0.25}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative inline-flex items-center justify-center font-medium rounded-full transition-colors cursor-pointer select-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    </Magnetic>
  );
}
