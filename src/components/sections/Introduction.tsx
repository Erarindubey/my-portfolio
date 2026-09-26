"use client";

import React from "react";
import { Container, Section } from "@/components/layout";
import { BodyText, Eyebrow } from "@/components/typography";
import { Reveal } from "@/components/animations";
import { ArrowDownRight, Layers, Workflow, ShieldCheck } from "lucide-react";
import { useSmoothScroll } from "@/providers";

export function Introduction() {
  const { scrollTo } = useSmoothScroll();

  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    scrollTo(target, { offset: -80 });
  };

  const getExperienceString = () => {
    const start = new Date("2026-02-21");
    const now = new Date();
    let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    if (now.getDate() < start.getDate()) {
      months--;
    }
    months = Math.max(0, months);
    
    if (months < 12) {
      return `${months}+ months`;
    }
    const years = Math.floor(months / 12);
    return `${years}+ year${years > 1 ? 's' : ''}`;
  };

  const disciplines = [
    {
      icon: Layers,
      title: "System & Architecture",
      desc: "Engineering robust, maintainable full-stack platforms from schema design to frontend state.",
    },
    {
      icon: Workflow,
      title: "Automation & AI",
      desc: "Integrating intelligent tooling, automated test pipelines, and autonomous developer workflows.",
    },
    {
      icon: ShieldCheck,
      title: "Release & Management",
      desc: "Managing delivery, stakeholder alignment, and mobile distribution across App Store and Google Play.",
    },
  ];

  return (
    <Section spacing="default" className="relative border-t border-border/60 overflow-hidden">
      {/* Chapter Lead Accent Indicator */}
      {/* <div className="absolute top-0 left-0 w-36 h-[2px] bg-gradient-to-r from-accent via-accent-light to-transparent" /> */}

      <Container size="default" className="relative z-10">
        {/* Chapter marker */}
        {/* <Reveal>
          {/* <div className="flex items-center justify-between pb-6 sm:pb-10 border-b border-border/40">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <Eyebrow className="text-accent-light tracking-[0.14em]">01 / Introduction</Eyebrow>
            </div>
            <span className="font-mono text-xs text-subtle">Core Thesis</span>
          </div> */}
        {/* </Reveal> */}

        {/* Secondary Editorial Anchor Statement (Distinctly smaller than Hero H1) */}
        <div className="py-8 sm:py-12 md:py-14 max-w-4xl">
          <Reveal delay={0.1}>
            <h2 className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-[-0.025em] leading-[1.25] text-foreground">
              I move between{" "}
              <span className="text-foreground font-semibold">designing the idea</span>,{" "}
              <span className="text-foreground font-semibold">building the system</span>, and getting the product into{" "}
              <span className="text-accent-light font-medium underline decoration-accent/40 decoration-1 underline-offset-6">
                people&apos;s hands
              </span>
              .
            </h2>
          </Reveal>
        </div>

        {/* Supporting Explanation + Three Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 pt-6 border-t border-border/40">
          {/* Left Column: Narrative description */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Reveal delay={0.2}>
              <Eyebrow className="text-foreground">The Artistic Managerial Stance</Eyebrow>
              <BodyText size="default" className="text-foreground/90 mt-1">
                Writing clean code is only half the equation. What distinguishes true product execution is understanding business requirements, obsessing over user touchpoints, and steering releases through to stable production.
              </BodyText>
            </Reveal>

            <Reveal delay={0.3}>
              <BodyText size="small" className="text-muted-foreground">
                Operating at the intersection of creative technical direction, autonomous automation, and delivery ownership.
              </BodyText>
            </Reveal>

            <Reveal delay={0.35}>
              <BodyText size="small" className="text-foreground font-medium bg-surface/50 p-3 rounded-lg border border-border/50 inline-block w-fit">
                Currently working at <span className="text-accent-light">Relu Consultancy</span> with {getExperienceString()} of experience.
              </BodyText>
            </Reveal>

            {/* Continuation cue to Selected Work */}
            <Reveal delay={0.4} className="pt-2">
              <a
                href="#work"
                onClick={(e) => handleScrollClick(e, "#work")}
                className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent-light hover:text-foreground transition-colors"
              >
                <span>Continue to Selected Work</span>
                <span className="p-1 rounded-full bg-accent-subtle group-hover:bg-accent transition-colors">
                  <ArrowDownRight size={14} className="text-foreground" />
                </span>
              </a>
            </Reveal>
          </div>

          {/* Right Column: Three discipline cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {disciplines.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={0.2 + index * 0.1}>
                  <div className="p-5 rounded-2xl bg-muted/40 border border-border flex flex-col justify-between h-full group hover:border-border-strong transition-colors">
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-surface-elevated border border-border flex items-center justify-center text-accent-light mb-4 group-hover:scale-110 transition-transform shadow-2xs">
                        <Icon size={16} />
                      </div>
                      <h3 className="font-mono text-xs uppercase tracking-wider font-semibold text-foreground mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-subtle pt-5">
                      0{index + 1}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
