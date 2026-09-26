"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Shield,
  Activity,
  Globe,
  Smartphone,
  Banknote,
  Terminal,
  CheckCircle2,
  Apple,
  Play,
} from "lucide-react";
import { Container } from "@/components/layout";
import { Eyebrow } from "@/components/typography";
import { MagneticButton } from "@/components/ui";
import { ProjectEditorialArtifact } from "@/components/projects";
import { Project } from "@/types";
import { CapabilityItem } from "@/data/projects";
import { registerGsapPlugins, gsap, ScrollTrigger } from "@/lib/animations/gsap";
import { usePrefersReducedMotion } from "@/hooks";

interface SelectedWorkProps {
  projects: Project[];
  capability: CapabilityItem;
}

// 8 Generic Creative Product Archetypes that emerge from the center statement (closer orbit)
const ECOSYSTEM_ARTIFACTS = [
  {
    id: "artifact-web",
    category: "01 / Web Platform",
    title: "Interface Architecture",
    detail: "Fluid layouts & headless design systems",
    positionClass: "top-[16%] left-[16%]",
    direction: { x: -180, y: -130, r: -3 },
  },
  {
    id: "artifact-mobile",
    category: "02 / Mobile App",
    title: "Native Client Flow",
    detail: "Cross-platform touch interactions & offline state",
    positionClass: "top-[18%] right-[16%]",
    direction: { x: 180, y: -120, r: 4 },
  },
  {
    id: "artifact-ai",
    category: "03 / AI & Agents",
    title: "Vector Knowledge",
    detail: "Autonomous RAG retrieval & prompt pipelines",
    positionClass: "top-[46%] left-[10%]",
    direction: { x: -210, y: -10, r: -3 },
  },
  {
    id: "artifact-dashboard",
    category: "04 / Dashboard",
    title: "Operational Control",
    detail: "Real-time metrics & data telemetry consoles",
    positionClass: "top-[44%] right-[10%]",
    direction: { x: 210, y: 10, r: 3 },
  },
  {
    id: "artifact-automation",
    category: "05 / Automation",
    title: "Workflow Engine",
    detail: "Triggered webhooks & headless browser clusters",
    positionClass: "bottom-[18%] left-[16%]",
    direction: { x: -170, y: 130, r: -2 },
  },
  {
    id: "artifact-data",
    category: "06 / Data & ETL",
    title: "Structured Extraction",
    detail: "Resilient web scrapers & automated pipelines",
    positionClass: "bottom-[16%] right-[16%]",
    direction: { x: 170, y: 140, r: 3 },
  },
  {
    id: "artifact-security",
    category: "07 / Security Core",
    title: "RBAC Scoped Access",
    detail: "Role-based policy kernels & audit trails",
    positionClass: "top-[10%] left-[38%]",
    direction: { x: -15, y: -160, r: -1 },
  },
  {
    id: "artifact-systems",
    category: "08 / Systems & Cloud",
    title: "Production Release",
    detail: "Continuous delivery & store distribution",
    positionClass: "bottom-[10%] left-[36%]",
    direction: { x: 15, y: 160, r: 2 },
  },
];

export function SelectedWork({ projects, capability }: SelectedWorkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinSceneRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const reluAi = projects.find((p) => p.slug === "relu-ai");
  const securityHrms = projects.find((p) => p.slug === "security-hrms");
  const treadmill = projects.find((p) => p.slug === "treadmill-tracker");
  const fursa = projects.find((p) => p.slug === "fursa-live");
  const pivotGuard = projects.find((p) => p.slug === "pivot-guard");
  const kreditCall = projects.find((p) => p.slug === "kreditcall-loan-lending");

  useEffect(() => {
    if (prefersReducedMotion) return;
    registerGsapPlugins();

    const container = containerRef.current;
    const pinScene = pinSceneRef.current;
    const horizontalTrack = horizontalTrackRef.current;
    if (!container || !pinScene || !horizontalTrack) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP & TABLET CINEMATIC TIMELINE (1024px and up)
      mm.add("(min-width: 1024px)", () => {
        const phraseIntro = pinScene.querySelector(".phrase-intro");
        const phrase1 = pinScene.querySelector(".phrase-1");
        const phrase2 = pinScene.querySelector(".phrase-2");
        const phrase3 = pinScene.querySelector(".phrase-3");
        const artifacts = pinScene.querySelectorAll(".ecosystem-artifact");
        const appStoreBadge = pinScene.querySelector(".app-store-badge");
        const googlePlayBadge = pinScene.querySelector(".google-play-badge");
        const artifactExplosionLayer = pinScene.querySelector(".artifact-explosion-layer");
        const horizontalShowcaseLayer = pinScene.querySelector(".horizontal-showcase-layer");
        const scrollProgressFill = pinScene.querySelector(".scroll-progress-fill");
        const projectCards = Array.from(horizontalTrack.querySelectorAll<HTMLElement>(".project-card-item"));

        // Set initial states
        gsap.set(phrase1, { autoAlpha: 0, y: 60, scale: 0.95 });
        gsap.set(phrase2, { autoAlpha: 0, y: 60, scale: 0.95 });
        gsap.set(phrase3, { autoAlpha: 0, y: 60, scale: 0.95 });
        gsap.set(artifacts, { autoAlpha: 0, scale: 0.2, x: 0, y: 0 });
        gsap.set(appStoreBadge, { autoAlpha: 0, scale: 0.8, y: 140, x: -100, width: 180, height: 52 });
        gsap.set(googlePlayBadge, { autoAlpha: 0, scale: 0.8, y: 140, x: 100, width: 180, height: 52 });
        gsap.set(horizontalShowcaseLayer, { autoAlpha: 0, y: 60 });
        // Calculate horizontal translation distance
        const getHorizontalScrollLength = () => {
          return horizontalTrack.scrollWidth - window.innerWidth + 140;
        };

        const masterTl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=7000",
            pin: pinScene,
            scrub: 1.2,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (scrollProgressFill) {
                gsap.set(scrollProgressFill, { width: `${self.progress * 100}%` });
              }
            },
          },
        });

        // 1. INTRO STATEMENT -> TRANSITION TO "I don't just build."
        masterTl
          .to(phraseIntro, {
            autoAlpha: 0,
            y: -50,
            duration: 1.2,
            ease: "power2.inOut",
          })
          .to(
            phrase1,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 1.4,
              ease: "power3.out",
            },
            "-=0.4"
          )

          // 2. 8 VISUAL CARDS EMERGE CLOSE AROUND TYPOGRAPHY
          .to(
            artifacts,
            {
              autoAlpha: 1,
              scale: 1,
              stagger: {
                each: 0.08,
                from: "center",
              },
              duration: 2.2,
              ease: "power3.out",
            },
            "-=0.6"
          );

        // Directional explosion close to center
        ECOSYSTEM_ARTIFACTS.forEach((art) => {
          const el = pinScene.querySelector(`#${art.id}`);
          if (el) {
            masterTl.to(
              el,
              {
                x: art.direction.x,
                y: art.direction.y,
                rotation: art.direction.r,
                duration: 2.4,
                ease: "power2.out",
              },
              "-=2.2"
            );
          }
        });

        // 3. MIDDLE TRANSITION: "I bring them to life." + INTRODUCE APP STORE & GOOGLE PLAY
        masterTl
          .to(phrase1, {
            autoAlpha: 0,
            y: -40,
            duration: 1.2,
            ease: "power2.inOut",
          })
          .to(
            phrase2,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 1.4,
              ease: "power3.out",
            },
            "-=0.4"
          )
          // App Store and Google Play enter AFTER phrase2 is fully shown
          .to(
            [appStoreBadge, googlePlayBadge],
            {
              autoAlpha: 1,
              scale: 1,
              y: 100, // Show below the sentence
              duration: 1.5,
              stagger: 0.15,
              ease: "back.out(1.4)",
            },
            "+=0.2"
          )

          // 4. CHOREOGRAPHED INWARD MOVEMENT: Outer artifacts move toward center and collapse
          .to(
            artifacts,
            {
              x: 0,
              y: 0,
              scale: 0.25,
              autoAlpha: 0,
              stagger: 0.05,
              duration: 2.0,
              ease: "power3.inOut",
            },
            "+=0.3"
          )

          // 5. NEXT STATEMENT: "From nothing to production." + BADGES MOVE TO EXTREME CORNERS & EXPAND
          .to(phrase2, {
            autoAlpha: 0,
            y: -40,
            duration: 1.0,
            ease: "power2.inOut",
          })
          .addLabel("phrase3_in", "-=0.3")
          .to(
            phrase3,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 1.4,
              ease: "power3.out",
            },
            "phrase3_in"
          )
          // App Store moves toward upper-left anchor AND expands
          .to(
            appStoreBadge,
            {
              x: -320,
              y: -140,
              width: 260,
              height: 300,
              scale: 1,
              duration: 1.5,
              ease: "power3.inOut",
            },
            "phrase3_in+=1.6"
          )
          // Google Play moves toward upper-right anchor AND expands
          .to(
            googlePlayBadge,
            {
              x: 320,
              y: -140,
              width: 260,
              height: 300,
              scale: 1,
              duration: 1.5,
              ease: "power3.inOut",
            },
            "phrase3_in+=1.6"
          )
          .to(
            [".app-store-home", ".google-play-home"],
            {
              autoAlpha: 1,
              duration: 0.8,
            },
            "phrase3_in+=2.1"
          )

          // 6. PHRASE 3 DISSOLVES & REAL PROJECTS EMERGE & SETTLE INTO HORIZONTAL LINE
          .to(
            phrase3,
            {
              autoAlpha: 0,
              y: -50,
              duration: 1.2,
              ease: "power2.in",
            },
            "+=0.4"
          )
          .to(
            artifactExplosionLayer,
            {
              autoAlpha: 0,
              duration: 0.6,
              ease: "none",
            },
            "-=0.6"
          )
          .to(
            horizontalShowcaseLayer,
            {
              autoAlpha: 1,
              y: 0,
              duration: 1.8,
              ease: "power3.out",
            },
            "-=0.2"
          )

          // 7. VERTICAL SCROLL DRIVES HORIZONTAL PROJECT MOVEMENT
          .to(horizontalTrack, {
            x: () => -getHorizontalScrollLength(),
            ease: "none",
            duration: 6.5,
          });
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  // Reduced motion alternative: Return clean accessible editorial presentation
  if (prefersReducedMotion) {
    return (
      <div className="relative w-full bg-background py-16">
        <Container size="default">
          <div className="border-b border-border pb-8 mb-12">
            <Eyebrow className="text-foreground">02 / Selected Work</Eyebrow>
            <h2 className="font-sans text-3xl font-semibold text-foreground mt-2">
              A few things I&apos;ve built, shaped, and shipped.
            </h2>
          </div>

          <div className="space-y-16">
            {projects.map((p, idx) => (
              <div key={p.slug} className="border-b border-border pb-12">
                <div className="flex justify-between font-mono text-xs text-subtle mb-3">
                  <span>0{idx + 1} // {p.category}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="text-2xl font-sans font-semibold text-foreground mb-3">
                  <Link href={`/work/${p.slug}`} className="hover:text-accent">
                    {p.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm mb-6 max-w-2xl">{p.description}</p>
                <div className="mb-6">
                  <ProjectEditorialArtifact slug={p.slug} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-xs px-2.5 py-1 bg-muted/60 border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="p-8 border border-border bg-white">
              <span className="font-mono text-xs uppercase text-accent font-semibold">07 // Capability</span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-3">{capability.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{capability.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capability.highlights.map((h, i) => (
                  <div key={i} className="p-3 bg-[#FAF9F5] border border-border text-xs font-mono flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-background"
      style={{ minHeight: "100vh" }}
    >
      {/* ========================================================
          DESKTOP & TABLET CINEMATIC PINNED SCENE (Hidden on Mobile)
          ======================================================== */}
      <div
        ref={pinSceneRef}
        className="hidden lg:flex relative w-full h-[100dvh] overflow-hidden flex-col justify-between pt-20 pb-8 bg-[#F7F6F2]"
      >
        {/* Top Floating Editorial Section Header Strip */}
        {/* <div className="w-full px-12 xl:px-16 flex items-center justify-between z-30 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="uppercase tracking-[0.18em] font-semibold text-foreground">
              02 / SELECTED WORK // CONTINUOUS EXPERIENCE
            </span>
          </div>

        </div> */}

        {/* ========================================================
            LAYER 1: CENTRAL TYPOGRAPHY, EXPLODING ARTIFACTS, APP STORE & GOOGLE PLAY
            ======================================================== */}
        <div className="artifact-explosion-layer absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          {/* Centered Typography Evolution Engine */}
          <div className="relative text-center px-6 max-w-4xl z-20">
            {/* Phase 0: Intro Statement */}
            <div className="phrase-intro">
              {/* <span className="block font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4 font-semibold">
                CHAPTER 02 — THE MANIFESTO
              </span> */}
              <h2 className="font-sans text-4xl xl:text-6xl font-normal tracking-[-0.035em] leading-[1.12] text-foreground">
                A few things I&apos;ve built,{" "}
                <span className="font-serif italic text-foreground font-medium underline decoration-accent/40 decoration-1 underline-offset-8">
                  shaped
                </span>
                , and shipped.
              </h2>
              <p className="mt-4 text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
                Work spanning product design, resilient backend architecture, autonomous AI agents, and production delivery.
              </p>
              <div className="mt-8 font-mono text-xs text-subtle animate-bounce">
                ↓ Scroll to transform
              </div>
            </div>

            {/* Phase 1: "I don't just build." */}
            <div className="phrase-1 absolute inset-0 flex items-center justify-center">
              <h2 className="font-sans text-5xl xl:text-7xl font-bold tracking-[-0.04em] text-foreground">
                I don&apos;t just{" "}
                <span className="text-accent underline decoration-accent/50 decoration-2 underline-offset-8">
                  build
                </span>
                .
              </h2>
            </div>

            {/* Phase 2: "I bring them to life." */}
            <div className="phrase-2 absolute inset-0 flex items-center justify-center">
              <h2 className="font-sans text-5xl xl:text-7xl font-bold tracking-[-0.04em] text-foreground">
                I bring them to{" "}
                <span className="font-serif italic font-normal text-foreground">
                  life
                </span>
                .
              </h2>
            </div>

            {/* Phase 3: "From nothing to production." */}
            <div className="phrase-3 absolute inset-0 flex items-center justify-center">
              <h2 className="font-sans text-5xl xl:text-7xl font-bold tracking-[-0.04em] text-foreground">
                From{" "}
                <span className="text-subtle font-light">nothing</span> to{" "}
                <span className="text-accent underline decoration-accent decoration-2 underline-offset-8">
                  production
                </span>
                .
              </h2>
            </div>

            {/* Official Platform Anchors: App Store and Google Play */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* App Store Mark */}
              <div className="app-store-badge absolute flex flex-col px-4 py-2.5 bg-white/95 backdrop-blur-md border border-border shadow-xs rounded-xl font-sans overflow-hidden w-[180px] h-[52px]">
                <div className="flex items-center gap-3 w-full shrink-0 h-[32px]">
                  <div className="w-7 h-7 shrink-0 rounded-lg bg-black text-white flex items-center justify-center">
                    <Apple size={16} />
                  </div>
                  <div className="text-left font-mono whitespace-nowrap">
                    <span className="block text-[9px] uppercase tracking-wider text-subtle leading-tight">OFFICIAL RELEASE</span>
                    <span className="block text-xs font-bold text-foreground leading-tight">App Store</span>
                  </div>
                </div>
                
                {/* Expanded Home Page Content */}
                <div className="app-store-home opacity-0 flex flex-col mt-4 pt-4 border-t border-border w-full shrink-0">
                  <div className="flex justify-between items-end mb-3">
                    <div className="text-xl font-bold tracking-tight">Today</div>
                    <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                  </div>
                  <div className="w-full h-28 bg-gray-100 rounded-lg overflow-hidden relative mb-3">
                    <div className="absolute bottom-2 left-2 text-white font-bold text-lg drop-shadow-md">FEATURED</div>
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <div className="w-10 h-10 bg-black rounded-lg"></div>
                    <div className="flex-1 text-left">
                      <div className="h-2.5 w-20 bg-gray-200 rounded mb-1"></div>
                      <div className="h-2 w-12 bg-gray-100 rounded"></div>
                    </div>
                    <div className="bg-gray-100 px-3 py-1 rounded-full text-[10px] font-bold text-blue-600">GET</div>
                  </div>
                </div>
              </div>

              {/* Google Play Mark */}
              <div className="google-play-badge absolute flex flex-col px-4 py-2.5 bg-white/95 backdrop-blur-md border border-border shadow-xs rounded-xl font-sans overflow-hidden w-[180px] h-[52px]">
                <div className="flex items-center gap-3 w-full shrink-0 h-[32px]">
                  <div className="w-7 h-7 shrink-0 rounded-lg bg-white border border-border text-emerald-600 flex items-center justify-center">
                    <Play size={14} className="fill-emerald-600 ml-0.5" />
                  </div>
                  <div className="text-left font-mono whitespace-nowrap">
                    <span className="block text-[9px] uppercase tracking-wider text-subtle leading-tight">STORE DISTRIBUTION</span>
                    <span className="block text-xs font-bold text-foreground leading-tight">Google Play</span>
                  </div>
                </div>
                
                {/* Expanded Home Page Content */}
                <div className="google-play-home opacity-0 flex flex-col mt-4 pt-3 border-t border-border w-full shrink-0">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-4 text-xs font-bold text-gray-500">
                      <span className="text-emerald-600 border-b-2 border-emerald-600 pb-1">For you</span>
                      <span>Top charts</span>
                    </div>
                  </div>
                  <div className="w-full h-20 bg-emerald-50 rounded-lg border border-emerald-100 mb-3 relative overflow-hidden flex items-center justify-center">
                     <span className="text-emerald-700 font-bold text-base">Recommended</span>
                  </div>
                  <div className="flex gap-3 mt-2">
                     <div className="flex flex-col gap-1 w-12">
                       <div className="w-12 h-12 bg-gray-100 rounded-xl"></div>
                       <div className="w-full h-2 bg-gray-200 rounded"></div>
                     </div>
                     <div className="flex flex-col gap-1 w-12">
                       <div className="w-12 h-12 bg-gray-100 rounded-xl"></div>
                       <div className="w-full h-2 bg-gray-200 rounded"></div>
                     </div>
                     <div className="flex flex-col gap-1 w-12">
                       <div className="w-12 h-12 bg-gray-100 rounded-xl"></div>
                       <div className="w-full h-2 bg-gray-200 rounded"></div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 8 Surrounding Design Ecosystem Artifacts */}
          <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
            {ECOSYSTEM_ARTIFACTS.map((art) => (
              <div
                key={art.id}
                id={art.id}
                className={`ecosystem-artifact absolute ${art.positionClass} w-64 p-4 bg-white/95 backdrop-blur-sm border border-border shadow-xs`}
              >
                <div className="flex items-center justify-between border-b border-border/60 pb-2 text-[10px] font-mono text-subtle">
                  <span>{art.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <h4 className="font-sans text-sm font-semibold text-foreground mt-2">
                  {art.title}
                </h4>
                <p className="font-sans text-xs text-muted-foreground mt-1 leading-snug">
                  {art.detail}
                </p>
                <div className="mt-3 pt-2 border-t border-border/40 flex items-center justify-between font-mono text-[9px] text-subtle">
                  <span>SYSTEM_SPEC</span>
                  <span className="text-accent font-medium">DESIGN_ARTIFACT</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            LAYER 2: HORIZONTAL SHOWCASE CAROUSEL (Settled Projects)
            Allows BOTH vertical scroll-driven and manual drag/left-right wheel scroll!
            ======================================================== */}
        <div className="horizontal-showcase-layer relative z-20 flex-1 flex flex-col justify-center overflow-hidden">
          {/* Top Title Cue & Manual Scroll Controls */}
          <div className="px-12 xl:px-16 pb-4 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  CURATED SELECTION
                </span>
                <h3 className="font-sans text-2xl font-semibold text-foreground">
                  Projects Shipped to Production
                </h3>
              </div>

              {/* Persistent Upper Corner Platform Badges */}
              <div className="hidden xl:flex items-center gap-3 pl-4 border-l border-border font-mono text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1.5 px-2.5 py-1 bg-white border border-border rounded-md">
                  <Apple size={12} className="text-foreground" /> App Store
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 bg-white border border-border rounded-md">
                  <Play size={10} className="fill-emerald-600 text-emerald-600" /> Google Play
                </span>
              </div>
            </div>

            <div className="font-mono text-xs text-muted-foreground">
              Scroll down to navigate horizontal showcase →
            </div>
          </div>

          {/* Master Horizontal Moving Track */}
          <div className="w-full overflow-hidden px-12 xl:px-16 pointer-events-auto">
            <div
              ref={horizontalTrackRef}
              className="flex items-stretch gap-8 w-max py-2 will-change-transform"
            >
              {/* Project 01: RELU AI */}
              {reluAi && (
                <div className="project-card-item w-[680px] shrink-0 border border-border/80 bg-white p-7 flex flex-col justify-between shadow-xs rounded-xl relative overflow-hidden group hover:border-[#6D28D9]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 will-change-transform">
                  {/* Distinct Accent Glow & Corner Accent */}
                  <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br from-[#EDE9FE] via-[#DDD6FE]/20 to-transparent blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6D28D9]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between text-xs font-mono border-b border-border/70 pb-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded-sm bg-[#EDE9FE] text-[#6D28D9] font-bold text-[11px] tracking-wider">
                          01 / 06
                        </span>
                        <div className="flex items-center gap-1.5 text-foreground/80 font-medium">
                          <Bot size={13} className="text-[#6D28D9]" />
                          <span>AI Product & Admin System</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-subtle font-mono text-[11px]">{reluAi.year}</span>
                      </div>
                    </div>

                    <div className="h-[290px] overflow-hidden border border-border/70 rounded-lg mb-5 shadow-2xs group-hover:border-[#6D28D9]/30 transition-colors duration-500">
                      <ProjectEditorialArtifact slug={reluAi.slug} />
                    </div>

                    <Link
                      href={`/work/${reluAi.slug}`}
                      className="group/title inline-flex items-center gap-2.5 text-2xl font-sans font-semibold text-foreground hover:text-[#6D28D9] transition-colors"
                    >
                      <span className="tracking-tight">{reluAi.title}</span>
                      <div className="w-7 h-7 rounded-full bg-muted/50 border border-border flex items-center justify-center transition-all duration-300 group-hover/title:bg-[#EDE9FE] group-hover/title:border-[#6D28D9]/40 group-hover/title:text-[#6D28D9]">
                        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
                      </div>
                    </Link>

                    <p className="text-xs text-muted-foreground leading-relaxed mt-2.5 line-clamp-3 font-sans">
                      {reluAi.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-border/70 mt-5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {reluAi.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-2.5 py-1 bg-[#F7F6F2] border border-border/70 text-foreground/90 rounded-md transition-colors group-hover:border-[#6D28D9]/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link href={`/work/${reluAi.slug}`}>
                      <MagneticButton variant="secondary" size="sm">
                        Explore Case Study
                      </MagneticButton>
                    </Link>
                  </div>
                </div>
              )}

              {/* Project 02: Security HRMS */}
              {securityHrms && (
                <div className="project-card-item w-[680px] shrink-0 border border-border/80 bg-white p-7 flex flex-col justify-between shadow-xs rounded-xl relative overflow-hidden group hover:border-[#2563EB]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 will-change-transform">
                  {/* Distinct Accent Glow & Corner Accent */}
                  <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br from-[#DBEAFE] via-[#BFDBFE]/20 to-transparent blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between text-xs font-mono border-b border-border/70 pb-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded-sm bg-[#DBEAFE] text-[#2563EB] font-bold text-[11px] tracking-wider">
                          02 / 06
                        </span>
                        <div className="flex items-center gap-1.5 text-foreground/80 font-medium">
                          <Shield size={13} className="text-[#2563EB]" />
                          <span>Enterprise Workforce Flagship</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-subtle font-mono text-[11px]">{securityHrms.year}</span>
                      </div>
                    </div>

                    <div className="h-[290px] overflow-hidden border border-border/70 rounded-lg mb-5 shadow-2xs group-hover:border-[#2563EB]/30 transition-colors duration-500">
                      <ProjectEditorialArtifact slug={securityHrms.slug} />
                    </div>

                    <Link
                      href={`/work/${securityHrms.slug}`}
                      className="group/title inline-flex items-center gap-2.5 text-2xl font-sans font-semibold text-foreground hover:text-[#2563EB] transition-colors"
                    >
                      <span className="tracking-tight">{securityHrms.title}</span>
                      <div className="w-7 h-7 rounded-full bg-muted/50 border border-border flex items-center justify-center transition-all duration-300 group-hover/title:bg-[#DBEAFE] group-hover/title:border-[#2563EB]/40 group-hover/title:text-[#2563EB]">
                        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
                      </div>
                    </Link>

                    <p className="text-xs text-muted-foreground leading-relaxed mt-2.5 line-clamp-3 font-sans">
                      {securityHrms.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-border/70 mt-5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {securityHrms.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-2.5 py-1 bg-[#F7F6F2] border border-border/70 text-foreground/90 rounded-md transition-colors group-hover:border-[#2563EB]/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link href={`/work/${securityHrms.slug}`}>
                      <MagneticButton variant="secondary" size="sm">
                        Explore Case Study
                      </MagneticButton>
                    </Link>
                  </div>
                </div>
              )}

              {/* Project 03: Treadmill Tracker */}
              {treadmill && (
                <div className="project-card-item w-[540px] shrink-0 border border-border/80 bg-white p-7 flex flex-col justify-between shadow-xs rounded-xl relative overflow-hidden group hover:border-[#059669]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 will-change-transform">
                  {/* Distinct Accent Glow (Emerald Athletic) */}
                  <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br from-[#D1FAE5] via-[#A7F3D0]/20 to-transparent blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#059669]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between text-xs font-mono border-b border-border/70 pb-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded-sm bg-[#D1FAE5] text-[#059669] font-bold text-[11px] tracking-wider">
                          03 / 06
                        </span>
                        <div className="flex items-center gap-1.5 text-foreground/80 font-medium">
                          <Activity size={13} className="text-[#059669]" />
                          <span>Athletic Performance Product</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-subtle font-mono text-[11px]">{treadmill.year}</span>
                      </div>
                    </div>

                    <div className="h-[270px] overflow-hidden border border-border/70 rounded-lg mb-5 shadow-2xs group-hover:border-[#059669]/30 transition-colors duration-500">
                      <ProjectEditorialArtifact slug={treadmill.slug} />
                    </div>

                    <Link
                      href={`/work/${treadmill.slug}`}
                      className="group/title inline-flex items-center gap-2 text-xl font-sans font-semibold text-foreground hover:text-[#059669] transition-colors"
                    >
                      <span className="tracking-tight">{treadmill.title}</span>
                      <div className="w-6 h-6 rounded-full bg-muted/50 border border-border flex items-center justify-center transition-all duration-300 group-hover/title:bg-[#D1FAE5] group-hover/title:border-[#059669]/40 group-hover/title:text-[#059669]">
                        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
                      </div>
                    </Link>

                    <p className="text-xs text-muted-foreground leading-relaxed mt-2.5 line-clamp-2 font-sans">
                      {treadmill.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-border/70 mt-5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {treadmill.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-2.5 py-1 bg-[#F7F6F2] border border-border/70 text-foreground/90 rounded-md transition-colors group-hover:border-[#059669]/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link href={`/work/${treadmill.slug}`}>
                      <MagneticButton variant="secondary" size="sm">
                        Explore Case Study
                      </MagneticButton>
                    </Link>
                  </div>
                </div>
              )}

              {/* Project 04: Fursa Live */}
              {fursa && (
                <div className="project-card-item w-[540px] shrink-0 border border-border/80 bg-white p-7 flex flex-col justify-between shadow-xs rounded-xl relative overflow-hidden group hover:border-[#D97706]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 will-change-transform">
                  {/* Distinct Accent Glow (Amber Founder Ecosystem) */}
                  <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br from-[#FEF3C7] via-[#FDE68A]/20 to-transparent blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D97706]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between text-xs font-mono border-b border-border/70 pb-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded-sm bg-[#FEF3C7] text-[#D97706] font-bold text-[11px] tracking-wider">
                          04 / 06
                        </span>
                        <div className="flex items-center gap-1.5 text-foreground/80 font-medium">
                          <Globe size={13} className="text-[#D97706]" />
                          <span>Founder & Business Ecosystem</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-subtle font-mono text-[11px]">{fursa.year}</span>
                      </div>
                    </div>

                    <div className="h-[270px] overflow-hidden border border-border/70 rounded-lg mb-5 shadow-2xs group-hover:border-[#D97706]/30 transition-colors duration-500">
                      <ProjectEditorialArtifact slug={fursa.slug} />
                    </div>

                    <Link
                      href={`/work/${fursa.slug}`}
                      className="group/title inline-flex items-center gap-2 text-xl font-sans font-semibold text-foreground hover:text-[#D97706] transition-colors"
                    >
                      <span className="tracking-tight">{fursa.title}</span>
                      <div className="w-6 h-6 rounded-full bg-muted/50 border border-border flex items-center justify-center transition-all duration-300 group-hover/title:bg-[#FEF3C7] group-hover/title:border-[#D97706]/40 group-hover/title:text-[#D97706]">
                        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
                      </div>
                    </Link>

                    <p className="text-xs text-muted-foreground leading-relaxed mt-2.5 line-clamp-2 font-sans">
                      {fursa.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-border/70 mt-5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {fursa.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-2.5 py-1 bg-[#F7F6F2] border border-border/70 text-foreground/90 rounded-md transition-colors group-hover:border-[#D97706]/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link href={`/work/${fursa.slug}`}>
                      <MagneticButton variant="secondary" size="sm">
                        Explore Case Study
                      </MagneticButton>
                    </Link>
                  </div>
                </div>
              )}

              {/* Project 05: Pivot Guard */}
              {pivotGuard && (
                <div className="project-card-item w-[540px] shrink-0 border border-border/80 bg-white p-7 flex flex-col justify-between shadow-xs rounded-xl relative overflow-hidden group hover:border-[#DC2626]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 will-change-transform">
                  {/* Distinct Accent Glow (Crimson Mobile Security) */}
                  <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br from-[#FEE2E2] via-[#FECACA]/20 to-transparent blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DC2626]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between text-xs font-mono border-b border-border/70 pb-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded-sm bg-[#FEE2E2] text-[#DC2626] font-bold text-[11px] tracking-wider">
                          05 / 06
                        </span>
                        <div className="flex items-center gap-1.5 text-foreground/80 font-medium">
                          <Smartphone size={13} className="text-[#DC2626]" />
                          <span>Critical Mobile Security</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-subtle font-mono text-[11px]">{pivotGuard.year}</span>
                      </div>
                    </div>

                    <div className="h-[270px] overflow-hidden border border-border/70 rounded-lg mb-5 shadow-2xs group-hover:border-[#DC2626]/30 transition-colors duration-500">
                      <ProjectEditorialArtifact slug={pivotGuard.slug} />
                    </div>

                    <Link
                      href={`/work/${pivotGuard.slug}`}
                      className="group/title inline-flex items-center gap-2 text-xl font-sans font-semibold text-foreground hover:text-[#DC2626] transition-colors"
                    >
                      <span className="tracking-tight">{pivotGuard.title}</span>
                      <div className="w-6 h-6 rounded-full bg-muted/50 border border-border flex items-center justify-center transition-all duration-300 group-hover/title:bg-[#FEE2E2] group-hover/title:border-[#DC2626]/40 group-hover/title:text-[#DC2626]">
                        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
                      </div>
                    </Link>

                    <p className="text-xs text-muted-foreground leading-relaxed mt-2.5 line-clamp-2 font-sans">
                      {pivotGuard.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-border/70 mt-5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {pivotGuard.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-2.5 py-1 bg-[#F7F6F2] border border-border/70 text-foreground/90 rounded-md transition-colors group-hover:border-[#DC2626]/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link href={`/work/${pivotGuard.slug}`}>
                      <MagneticButton variant="secondary" size="sm">
                        Explore Case Study
                      </MagneticButton>
                    </Link>
                  </div>
                </div>
              )}

              {/* Project 06: KreditCall Loan Lending */}
              {kreditCall && (
                <div className="project-card-item w-[540px] shrink-0 border border-border/80 bg-white p-7 flex flex-col justify-between shadow-xs rounded-xl relative overflow-hidden group hover:border-[#4F46E5]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 will-change-transform">
                  {/* Distinct Accent Glow (Indigo Fintech) */}
                  <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br from-[#E0E7FF] via-[#C7D2FE]/20 to-transparent blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4F46E5]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between text-xs font-mono border-b border-border/70 pb-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded-sm bg-[#E0E7FF] text-[#4F46E5] font-bold text-[11px] tracking-wider">
                          06 / 06
                        </span>
                        <div className="flex items-center gap-1.5 text-foreground/80 font-medium">
                          <Banknote size={13} className="text-[#4F46E5]" />
                          <span>Fintech & Loan Lending Architecture</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-subtle font-mono text-[11px]">{kreditCall.year}</span>
                      </div>
                    </div>

                    <div className="h-[270px] overflow-hidden border border-border/70 rounded-lg mb-5 shadow-2xs group-hover:border-[#4F46E5]/30 transition-colors duration-500">
                      <ProjectEditorialArtifact slug={kreditCall.slug} />
                    </div>

                    <Link
                      href={`/work/${kreditCall.slug}`}
                      className="group/title inline-flex items-center gap-2 text-xl font-sans font-semibold text-foreground hover:text-[#4F46E5] transition-colors"
                    >
                      <span className="tracking-tight">{kreditCall.title}</span>
                      <div className="w-6 h-6 rounded-full bg-muted/50 border border-border flex items-center justify-center transition-all duration-300 group-hover/title:bg-[#E0E7FF] group-hover/title:border-[#4F46E5]/40 group-hover/title:text-[#4F46E5]">
                        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
                      </div>
                    </Link>

                    <p className="text-xs text-muted-foreground leading-relaxed mt-2.5 line-clamp-2 font-sans">
                      {kreditCall.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-border/70 mt-5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {kreditCall.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-2.5 py-1 bg-[#F7F6F2] border border-border/70 text-foreground/90 rounded-md transition-colors group-hover:border-[#4F46E5]/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link href={`/work/${kreditCall.slug}`}>
                      <MagneticButton variant="secondary" size="sm">
                        Explore Case Study
                      </MagneticButton>
                    </Link>
                  </div>
                </div>
              )}

              {/* Project 07: Capability Engine Block */}
              <div className="project-card-item w-[580px] shrink-0 border border-border/80 bg-white p-7 flex flex-col justify-between shadow-xs rounded-xl relative overflow-hidden group hover:border-[#6D28D9]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 will-change-transform">
                <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br from-[#EDE9FE] via-[#DDD6FE]/20 to-transparent blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6D28D9]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-border/70 pb-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded-sm bg-[#EDE9FE] text-[#6D28D9] font-bold text-[11px] tracking-wider">
                        PRACTICE
                      </span>
                      <div className="flex items-center gap-1.5 text-foreground/80 font-medium">
                        <Terminal size={13} className="text-[#6D28D9]" />
                        <span>Engineering Capability</span>
                      </div>
                    </div>
                    <span className="text-subtle font-mono text-[11px]">CORE DISCIPLINE</span>
                  </div>

                  <span className="font-mono text-xs uppercase tracking-wider text-[#6D28D9] font-semibold block mb-1">
                    ENGINEERING INFRASTRUCTURE
                  </span>
                  <h4 className="text-2xl font-sans font-semibold text-foreground mb-3">
                    {capability.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {capability.description}
                  </p>

                  <div className="space-y-2">
                    {capability.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="p-3 bg-[#F7F6F2] border border-border/70 rounded-md text-xs font-mono flex items-start gap-2.5 transition-colors group-hover:border-[#6D28D9]/20">
                        <CheckCircle2 size={14} className="text-[#6D28D9] shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-snug text-foreground/90">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-border/70 mt-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-subtle">
                    AUTOMATION · CI/CD · PRODUCTION
                  </span>
                  <a href="#contact" className="font-mono text-xs uppercase text-[#6D28D9] hover:underline font-semibold flex items-center gap-1">
                    <span>Initiate Discussion</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Base Timeline Scrub Status Indicator */}
        <div className="w-full px-12 xl:px-16 pt-2 z-30 flex items-center justify-between font-mono text-[10px] text-subtle">
          <span>02 / CINEMATIC SCROLL EXPERIENCE</span>
          <div className="flex-1 mx-8 h-[2px] bg-border relative overflow-hidden">
            <div className="scroll-progress-fill absolute inset-y-0 left-0 bg-accent w-0" />
          </div>
          <span>FROM CONCEPT TO PRODUCTION</span>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEWPORT (Under 1024px: Clean Editorial Sequence)
          ======================================================== */}
      <div className="lg:hidden w-full py-16 px-5 sm:px-8 border-t border-border">
        {/* Mobile Story Header */}
        <div className="pb-10 border-b border-border">
          <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
            02 / Selected Work
          </span>
          <h2 className="font-sans text-3xl font-semibold text-foreground mt-2 leading-tight">
            A few things I&apos;ve built,{" "}
            <span className="font-serif italic font-normal">shaped</span>, and shipped.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            I don&apos;t just build. I bring them to life — from nothing to production.
          </p>

          <div className="flex items-center gap-3 pt-4 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white border border-border rounded-lg">
              <Apple size={14} className="text-foreground" /> App Store
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white border border-border rounded-lg">
              <Play size={12} className="fill-emerald-600 text-emerald-600" /> Google Play
            </span>
          </div>
        </div>

        {/* Mobile Linear Vertical Showcase with Full Quality */}
        <div className="divide-y divide-border/80 space-y-12">
          {/* Project 1: RELU AI */}
          {reluAi && (
            <div className="pt-10 flex flex-col gap-4">
              <div className="flex items-center justify-between font-mono text-xs text-subtle">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-sm bg-[#EDE9FE] text-[#6D28D9] font-bold text-[10px] tracking-wider">
                    01 / 06
                  </span>
                  <span className="text-foreground font-semibold">AI Product & Admin System</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{reluAi.year}</span>
                </div>
              </div>
              <div className="border border-border/80 rounded-lg overflow-hidden shadow-2xs">
                <ProjectEditorialArtifact slug={reluAi.slug} />
              </div>
              <Link href={`/work/${reluAi.slug}`} className="text-2xl font-sans font-semibold text-foreground inline-flex items-center justify-between group/mtitle">
                <span>{reluAi.title}</span>
                <div className="w-7 h-7 rounded-full bg-[#EDE9FE] text-[#6D28D9] flex items-center justify-center">
                  <ArrowUpRight size={15} />
                </div>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">{reluAi.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {reluAi.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-2.5 py-0.5 bg-muted/60 border border-border/70 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project 2: Security HRMS */}
          {securityHrms && (
            <div className="pt-10 flex flex-col gap-4">
              <div className="flex items-center justify-between font-mono text-xs text-subtle">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-sm bg-[#DBEAFE] text-[#2563EB] font-bold text-[10px] tracking-wider">
                    02 / 06
                  </span>
                  <span className="text-foreground font-semibold">Enterprise Workforce Flagship</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{securityHrms.year}</span>
                </div>
              </div>
              <div className="border border-border/80 rounded-lg overflow-hidden shadow-2xs">
                <ProjectEditorialArtifact slug={securityHrms.slug} />
              </div>
              <Link href={`/work/${securityHrms.slug}`} className="text-2xl font-sans font-semibold text-foreground inline-flex items-center justify-between group/mtitle">
                <span>{securityHrms.title}</span>
                <div className="w-7 h-7 rounded-full bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center">
                  <ArrowUpRight size={15} />
                </div>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">{securityHrms.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {securityHrms.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-2.5 py-0.5 bg-muted/60 border border-border/70 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project 3: Treadmill Tracker */}
          {treadmill && (
            <div className="pt-10 flex flex-col gap-4">
              <div className="flex items-center justify-between font-mono text-xs text-subtle">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-sm bg-[#D1FAE5] text-[#059669] font-bold text-[10px] tracking-wider">
                    03 / 06
                  </span>
                  <span className="text-foreground font-semibold">Athletic Performance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{treadmill.year}</span>
                </div>
              </div>
              <div className="border border-border/80 rounded-lg overflow-hidden shadow-2xs">
                <ProjectEditorialArtifact slug={treadmill.slug} />
              </div>
              <Link href={`/work/${treadmill.slug}`} className="text-xl font-sans font-semibold text-foreground inline-flex items-center justify-between group/mtitle">
                <span>{treadmill.title}</span>
                <div className="w-7 h-7 rounded-full bg-[#D1FAE5] text-[#059669] flex items-center justify-center">
                  <ArrowUpRight size={14} />
                </div>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">{treadmill.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {treadmill.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-2.5 py-0.5 bg-muted/60 border border-border/70 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project 4: Fursa Live */}
          {fursa && (
            <div className="pt-10 flex flex-col gap-4">
              <div className="flex items-center justify-between font-mono text-xs text-subtle">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-sm bg-[#FEF3C7] text-[#D97706] font-bold text-[10px] tracking-wider">
                    04 / 06
                  </span>
                  <span className="text-foreground font-semibold">Founder Ecosystem</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{fursa.year}</span>
                </div>
              </div>
              <div className="border border-border/80 rounded-lg overflow-hidden shadow-2xs">
                <ProjectEditorialArtifact slug={fursa.slug} />
              </div>
              <Link href={`/work/${fursa.slug}`} className="text-xl font-sans font-semibold text-foreground inline-flex items-center justify-between group/mtitle">
                <span>{fursa.title}</span>
                <div className="w-7 h-7 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
                  <ArrowUpRight size={14} />
                </div>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">{fursa.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {fursa.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-2.5 py-0.5 bg-muted/60 border border-border/70 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project 5: Pivot Guard */}
          {pivotGuard && (
            <div className="pt-10 flex flex-col gap-4">
              <div className="flex items-center justify-between font-mono text-xs text-subtle">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-sm bg-[#FEE2E2] text-[#DC2626] font-bold text-[10px] tracking-wider">
                    05 / 06
                  </span>
                  <span className="text-foreground font-semibold">Critical Mobile Security</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{pivotGuard.year}</span>
                </div>
              </div>
              <div className="border border-border/80 rounded-lg overflow-hidden shadow-2xs">
                <ProjectEditorialArtifact slug={pivotGuard.slug} />
              </div>
              <Link href={`/work/${pivotGuard.slug}`} className="text-xl font-sans font-semibold text-foreground inline-flex items-center justify-between group/mtitle">
                <span>{pivotGuard.title}</span>
                <div className="w-7 h-7 rounded-full bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center">
                  <ArrowUpRight size={14} />
                </div>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">{pivotGuard.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {pivotGuard.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-2.5 py-0.5 bg-muted/60 border border-border/70 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project 6: KreditCall */}
          {kreditCall && (
            <div className="pt-10 flex flex-col gap-4">
              <div className="flex items-center justify-between font-mono text-xs text-subtle">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-sm bg-[#E0E7FF] text-[#4F46E5] font-bold text-[10px] tracking-wider">
                    06 / 06
                  </span>
                  <span className="text-foreground font-semibold">Fintech Mobile Architecture</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{kreditCall.year}</span>
                </div>
              </div>
              <div className="border border-border/80 rounded-lg overflow-hidden shadow-2xs">
                <ProjectEditorialArtifact slug={kreditCall.slug} />
              </div>
              <Link href={`/work/${kreditCall.slug}`} className="text-xl font-sans font-semibold text-foreground inline-flex items-center justify-between group/mtitle">
                <span>{kreditCall.title}</span>
                <div className="w-7 h-7 rounded-full bg-[#E0E7FF] text-[#4F46E5] flex items-center justify-center">
                  <ArrowUpRight size={14} />
                </div>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">{kreditCall.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {kreditCall.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] px-2.5 py-0.5 bg-muted/60 border border-border/70 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project 7: Capability */}
          <div className="pt-10 flex flex-col gap-4">
            <div className="flex items-center justify-between font-mono text-xs text-subtle">
              <span className="px-2 py-0.5 rounded-sm bg-[#EDE9FE] text-[#6D28D9] font-bold text-[10px] tracking-wider">
                PRACTICE
              </span>
              <span>ENGINEERING INFRASTRUCTURE</span>
            </div>
            <h3 className="text-2xl font-sans font-semibold text-foreground">{capability.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
            <div className="space-y-2 pt-2">
              {capability.highlights.map((h, i) => (
                <div key={i} className="p-3 bg-white border border-border/80 rounded-md text-xs font-mono flex items-start gap-2.5">
                  <CheckCircle2 size={14} className="text-[#6D28D9] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
