"use client";

import React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks";
import { maskRevealVariants, transitions } from "@/lib/animations/motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "none";
}

/**
 * Reveal: Component that gracefully reveals elements when they enter the viewport
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: RevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    initial: {
      opacity: 0,
      y: direction === "up" ? 24 : 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ...transitions.default,
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * AnimatedText: Masked line/word reveal for editorial titles
 */
interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export function AnimatedText({ text, className, as: Component = "span" }: AnimatedTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  const words = text.split(" ");

  return (
    <Component className={cn("inline-flex flex-wrap overflow-hidden", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <motion.span
            className="inline-block"
            variants={maskRevealVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{
              ...transitions.slow,
              delay: i * 0.04,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
