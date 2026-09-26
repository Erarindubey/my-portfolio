"use client";

import React, { useEffect, useState, useRef } from "react";
import { Container } from "@/components/layout";
import { Eyebrow, BodyText } from "@/components/typography";
import { MagneticButton } from "@/components/ui";
import { usePrefersReducedMotion } from "@/hooks";
import { useSmoothScroll } from "@/providers";
import { ArrowDownRight, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  experienceDuration: string;
}

const EVOLVING_STAGES = [
  {
    prefix: "I don't just build",
    word: "software.",
    desc: "Architecting resilient, scalable platforms from database schema to fluid interfaces.",
    tag: "01 / Development",
  },
  {
    prefix: "I design",
    word: "digital products.",
    desc: "Shaping intuitive UX, editorial typography, and high-impact design systems.",
    tag: "02 / Product & Design",
  },
  {
    prefix: "I automate",
    word: "what slows teams down.",
    desc: "Integrating intelligent pipelines, AI agent tooling, and autonomous developer workflows.",
    tag: "03 / AI & Automation",
  },
  {
    prefix: "I take products",
    word: "to production.",
    desc: "Leading release delivery, store distribution, and App Store & Google Play launches.",
    tag: "04 / Release & Launch",
  },
];

const CYCLE_DURATION_MS = 4500;

export function Hero({ experienceDuration }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollTo } = useSmoothScroll();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    scrollTo(target, { offset: -80 });
  };

  useEffect(() => {
    if (prefersReducedMotion) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % EVOLVING_STAGES.length);
    }, CYCLE_DURATION_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [prefersReducedMotion]);

  const currentStage = EVOLVING_STAGES[currentIndex];

  // Harmonized smooth ease curve and matched duration for synchronous scroll effect
  const transitionConfig = {
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <div className="relative w-full min-h-[92dvh] sm:min-h-[100dvh] flex flex-col justify-center pt-24 sm:pt-28 pb-8 sm:pb-12 bg-background">
      <Container size="default" className="relative z-10">
        {/* PRIMARY H1: Synchronized Auto-evolving Animated Headline */}
        <div className="pb-8 sm:pb-12 md:pb-16 pt-0 sm:pt-4 max-w-6xl">
          <h1 className="font-sans text-[2.75rem] leading-[1.03] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] tracking-[-0.04em] font-medium text-foreground">
            {/* Auto-evolving Prefix (Upper Text) */}
            <span className="block h-[1.15em] overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={`prefix-${currentIndex}`}
                  initial={{ opacity: 0, y: "65%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, y: "-65%" }}
                  transition={transitionConfig}
                  className="block text-foreground will-change-transform"
                >
                  {currentStage.prefix}
                </motion.span>
              </AnimatePresence>
            </span>

            {/* Dynamic Auto-Scrolling Word Track (Lower Text) - 100% Synchronous */}
            <span className="relative block h-[1.15em] overflow-hidden mt-1 sm:mt-2 text-accent-light">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={`word-${currentIndex}`}
                  initial={{ opacity: 0, y: "65%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, y: "-65%" }}
                  transition={transitionConfig}
                  className="block underline decoration-accent/60 decoration-2 underline-offset-8 sm:underline-offset-12 will-change-transform"
                >
                  {currentStage.word}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </div>

        {/* Lower Asymmetric Region: Synchronized Scope Statement & Actions */}
        <div className="flex flex-col gap-6 pt-4 border-t border-border/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Scope & Capability Statement evolving automatically with matched timing */}
            <div className="lg:col-span-7 flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <span className="w-1 h-3 bg-accent rounded-full" />
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={`tag-${currentIndex}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.1em] text-accent-light font-semibold"
                  >
                    {currentStage.tag}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="min-h-[3.25rem]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`desc-${currentIndex}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <BodyText
                      size="large"
                      className="text-foreground/90 max-w-xl text-sm sm:text-base md:text-lg"
                    >
                      {currentStage.desc}
                    </BodyText>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* CTAs and Scroll cue */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-row items-start sm:items-center justify-start lg:justify-end gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="#work"
                  onClick={(e) => handleScrollClick(e, "#work")}
                  aria-label="View selected work"
                >
                  <MagneticButton variant="primary" size="default">
                    View Work
                  </MagneticButton>
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleScrollClick(e, "#about")}
                  aria-label="Scroll to introduction"
                >
                  <MagneticButton variant="secondary" size="default">
                    Introduction
                  </MagneticButton>
                </a>
              </div>

              <a
                href="#about"
                onClick={(e) => handleScrollClick(e, "#about")}
                className="group inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer pt-1 sm:pt-0"
              >
                <span>Explore thesis</span>
                <ArrowDownRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5 text-accent-light"
                />
              </a>
            </div>
          </div>

          {/* Automatic Progress Indicator & Chapter Marker */}
          <div className="w-full flex items-center justify-between pt-2 text-[10px] font-mono text-subtle">
            <span className="tabular-nums">0{currentIndex + 1} / 04 AUTO CYCLE</span>
            <div className="flex-1 mx-4 h-[2px] bg-border/40 relative overflow-hidden rounded-full">
              <motion.div
                key={currentIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: CYCLE_DURATION_MS / 1000,
                  ease: "linear",
                }}
                className="absolute inset-y-0 left-0 bg-accent will-change-[width] rounded-full"
              />
            </div>
            <span>CHAPTER 01</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
