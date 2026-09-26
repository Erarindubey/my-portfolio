"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks";

/**
 * CustomCursor: Subtle editorial follower dot on desktop
 * Rules:
 * - Hidden on touch devices (pointer: coarse)
 * - Hidden when prefers-reduced-motion is true
 * - Non-intrusive (pointer-events-none)
 */
export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on non-touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (prefersReducedMotion || !isVisible) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 rounded-full bg-accent/60 backdrop-blur-xs pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    />
  );
}
