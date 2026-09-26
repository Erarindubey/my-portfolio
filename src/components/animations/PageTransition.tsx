"use client";

import React from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { pageTransitionVariants } from "@/lib/animations/motion";
import { usePrefersReducedMotion } from "@/hooks";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
      className="flex flex-1 flex-col w-full"
    >
      {children}
    </motion.div>
  );
}
