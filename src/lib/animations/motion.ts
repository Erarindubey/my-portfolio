import { type Transition } from "motion/react";

/**
 * Editorial Motion Curve & Presets
 * Handcrafted cubic-beziers for fluid, confident, intentional pacing.
 * Non-bouncy, non-generic, high editorial quality.
 */

export const easings = {
  // Ultra-refined editorial ease-out for entrances & reveals
  editorial: [0.19, 1, 0.22, 1] as const,
  // Snappy response for user interactions & magnetic buttons
  interaction: [0.25, 1, 0.5, 1] as const,
  // Controlled glide for page transitions & layout morphs
  glide: [0.76, 0, 0.24, 1] as const,
};

export const transitions = {
  quick: {
    duration: 0.25,
    ease: easings.interaction,
  } satisfies Transition,
  default: {
    duration: 0.55,
    ease: easings.editorial,
  } satisfies Transition,
  slow: {
    duration: 0.85,
    ease: easings.editorial,
  } satisfies Transition,
  page: {
    duration: 0.5,
    ease: easings.glide,
  } satisfies Transition,
};

export const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.default,
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: transitions.quick,
  },
};

export const maskRevealVariants = {
  initial: { y: "100%", opacity: 0 },
  animate: {
    y: "0%",
    opacity: 1,
    transition: transitions.slow,
  },
  exit: {
    y: "-50%",
    opacity: 0,
    transition: transitions.quick,
  },
};

export const staggerContainerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const pageTransitionVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.page,
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: transitions.quick,
  },
};
