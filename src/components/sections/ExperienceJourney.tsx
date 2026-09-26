"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { registerGsapPlugins, gsap, ScrollTrigger } from "@/lib/animations/gsap";
import { usePrefersReducedMotion } from "@/hooks";

export function ExperienceJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [particles, setParticles] = React.useState<Array<{top: string, width: string}>>([]);

  React.useEffect(() => {
    setParticles(
      [...Array(40)].map(() => ({
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 300 + 100}px`
      }))
    );
  }, []);

  React.useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) return;
    registerGsapPlugins();

    const ctx = gsap.context(() => {
      // Calculate how far the train needs to travel to fully exit the screen
      // We'll use a functional value or a large string depending on layout.
      // Let's use a timeline for the entire sequence
      
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=6000", // 6000px of scrolling for the whole sequence
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      // 1. Initial State
      gsap.set(".photo-image", { scale: 1.15 });
      gsap.set(".quote-panel", { autoAlpha: 0, y: 30 });
      gsap.set(".train-panel", { autoAlpha: 0 }); // Always at x:0, but invisible initially
      gsap.set(".train-wrapper", { x: -2200 }); // Train is ~1600px wide. Start completely off-screen left.
      gsap.set(".white-wipe", { x: "-100%" });

      // 2. Experience Panel - Image Zoom Out & Hold
      masterTl
        .to(".photo-image", { scale: 1, duration: 2, ease: "power1.inOut" })
        .to({}, { duration: 1 }) // Hold
        .to(".experience-panel", { autoAlpha: 0, y: -40, duration: 1.5, ease: "power2.inOut" });

      // 3. Quote Panel - Fade In, Hold, Fade Out
      masterTl
        .to(".quote-panel", { autoAlpha: 1, y: 0, duration: 1.5, ease: "power2.out" }, "-=0.5")
        .to({}, { duration: 1.5 }) // Hold
        .to(".quote-panel", { autoAlpha: 0, y: -30, duration: 1.5, ease: "power2.inOut" })
        .to({}, { duration: 1.5 }); // DELIBERATE EMPTY BLACK SPACE

      // 4. Train Panel - Education Timeline
      masterTl
        .to(".train-panel", { autoAlpha: 1, duration: 0.1 }) // Make container visible
        // Train travels continuously from off-screen left to off-screen right
        .to(".train-wrapper", { x: () => window.innerWidth + 200, duration: 8.0, ease: "none" }) 
        
      // 5. White Wipe Left -> Right (Triggers ONLY after train fully exits)
      masterTl
        .to(".white-wipe", { x: "0%", duration: 2.0, ease: "power3.inOut" });

    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  React.useEffect(() => {
    if (!containerRef.current || prefersReducedMotion || particles.length === 0) return;
    
    const ctx = gsap.context(() => {
      // Continuous Global Air Particles animation
      gsap.fromTo(".air-particle", 
        { 
          x: () => window.innerWidth + 500,
          opacity: 1
        },
        {
          x: -1000,
          opacity: 0.2,
          duration: () => Math.random() * 1.5 + 0.5,
          repeat: -1,
          stagger: {
            each: 0.05,
            from: "random"
          },
          ease: "none"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [particles, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <section className="w-full bg-black text-white py-24 px-6 flex flex-col gap-24">
         {/* Simple Fallback for Reduced Motion */}
         <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
               <Image src="/Media (33).jpg" width={600} height={750} alt="Arin Portrait" className="rounded-xl w-full max-w-sm ml-auto" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6">
               <h3 className="font-mono text-sm tracking-widest text-white/50 uppercase">05 / The Journey</h3>
               <p className="text-2xl font-light">
                 I&apos;ve spent years shaping digital experiences that blend aesthetic beauty with robust engineering.
               </p>
               <p className="text-lg text-white/70 font-light">
                 From architecting complex backend systems to designing pixel-perfect interfaces, my path hasn&apos;t been a straight line. It&apos;s been a relentless pursuit of mastery across the entire product spectrum.
               </p>
            </div>
         </div>
         <div className="text-center py-12">
            <h2 className="text-4xl md:text-6xl font-serif italic font-light tracking-tight">
               “Sometimes taking risks makes you wise”
            </h2>
         </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] bg-black text-white overflow-hidden">
      
      {/* --- EXPERIENCE SECTION --- */}
      <div className="experience-panel absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-24 pt-20 lg:pt-0">
        
        {/* Left side: Photo (right-aligned in its half) */}
        <div className="lg:w-1/2 w-full flex items-center justify-center lg:justify-end lg:pr-24 relative mb-6 lg:mb-0 shrink-0">
           <div className="image-wrapper overflow-hidden w-[160px] sm:w-[240px] lg:w-[420px] aspect-[4/5] relative bg-[#111]">
              <Image 
                src="/Media (33).jpg" 
                fill 
                className="photo-image object-cover" 
                alt="Arin Portrait" 
                priority
              />
           </div>
        </div>
        
        {/* Right side: Text */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center lg:pl-12 max-w-xl text-wrapper z-10">
           <h3 className="font-mono text-[10px] sm:text-xs tracking-widest text-white/40 mb-4 sm:mb-8 uppercase">05 / The Journey</h3>
           <p className="text-xl sm:text-3xl lg:text-4xl font-light leading-snug tracking-tight mb-4 sm:mb-8 text-white">
             I&apos;ve spent years shaping digital experiences that blend aesthetic beauty with robust engineering.
           </p>
           <p className="text-sm sm:text-lg lg:text-xl text-white/60 font-light leading-relaxed">
             From architecting complex backend systems to designing pixel-perfect interfaces, my path hasn&apos;t been a straight line. It&apos;s been a relentless pursuit of mastery across the entire product spectrum.
           </p>
        </div>
      </div>
      
      {/* --- QUOTE SECTION --- */}
      <div className="quote-panel absolute inset-0 flex items-center justify-center pointer-events-none px-6">
         <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif italic font-light tracking-tight text-center max-w-5xl leading-tight text-white/90">
           “Sometimes taking risks makes you wise”
         </h2>
      </div>
      
      {/* --- TRAIN / EDUCATION SECTION --- */}
      <div className="train-panel absolute inset-0 flex items-center pointer-events-none overflow-hidden">
         
         {/* Global Air Particles / Speed Lines */}
         <div className="absolute inset-0 w-full h-full z-0">
           {particles.map((style, i) => (
             <div key={i} className="air-particle absolute top-0 h-px bg-white/30" style={style}></div>
           ))}
         </div>

         {/* Stationary Rail Track */}
         <div className="absolute w-full h-[60px] mt-[10vh] flex items-end">
           <div className="absolute bottom-[-10px] left-0 w-full h-px bg-white/20"></div>
           <div className="absolute bottom-[-16px] left-0 w-full h-[2px] bg-white/10"></div>
         </div>

         {/* Train Metaphor Wrapper */}
         <div className="train-wrapper absolute flex flex-col items-center w-[1600px] mt-[10vh] z-10">
           
           {/* Milestones Container - Above Train */}
           <div className="absolute top-[-100px] left-[150px] w-[1200px] flex justify-between">
             {/* 10th */}
             <div className="flex flex-col items-center">
               <span className="font-mono text-sm tracking-widest text-emerald-400 mb-4 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">10th</span>
               <div className="w-px h-12 bg-white/20"></div>
             </div>
             {/* 12th */}
             <div className="flex flex-col items-center">
               <span className="font-mono text-sm tracking-widest text-blue-400 mb-4 drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]">12th</span>
               <div className="w-px h-12 bg-white/20"></div>
             </div>
             {/* BTech */}
             <div className="flex flex-col items-center">
               <span className="font-mono text-sm tracking-widest text-purple-400 mb-4 drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]">BTech</span>
               <div className="w-px h-12 bg-white/20"></div>
             </div>
             {/* MBA */}
             <div className="flex flex-col items-center">
               <span className="font-mono text-sm tracking-widest text-amber-400 mb-4 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">MBA</span>
               <div className="w-px h-12 bg-white/20"></div>
             </div>
           </div>

           {/* Train Body */}
           <div className="w-full h-[60px] flex items-end relative">

             {/* Left Engine (Tail) */}
             <div className="w-[280px] h-[60px] bg-gradient-to-b from-[#ffffff] to-[#d4d4d4] relative overflow-hidden shadow-[inset_10px_-10px_20px_rgba(0,0,0,0.1)] shrink-0"
                  style={{ borderTopLeftRadius: '220px 60px', borderBottomLeftRadius: '10px 10px' }}>
                {/* Cockpit Window */}
                <div className="absolute top-[18px] right-0 w-[120px] h-[16px] bg-[#0a0a0a]" style={{ borderTopLeftRadius: '100px 16px' }}></div>
             </div>
             
             {/* Main Body */}
             <div className="flex-1 h-[60px] bg-gradient-to-b from-[#ffffff] to-[#d4d4d4] relative">
                {/* Continuous Window Stripe */}
                <div className="absolute top-[18px] left-0 w-full h-[16px] bg-[#0a0a0a]"></div>
             </div>
             
             {/* Aerodynamic Nose */}
             <div className="w-[280px] h-[60px] bg-gradient-to-b from-[#ffffff] to-[#d4d4d4] relative overflow-hidden shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1)] shrink-0"
                  style={{ borderTopRightRadius: '220px 60px', borderBottomRightRadius: '10px 10px' }}>
                {/* Cockpit Window */}
                <div className="absolute top-[18px] left-0 w-[120px] h-[16px] bg-[#0a0a0a]" style={{ borderTopRightRadius: '100px 16px' }}></div>
             </div>
           </div>
           
         </div>
      </div>
      
      {/* --- WHITE WIPE TRANSITION --- */}
      {/* Using bg-background instead of white if the site theme uses background as the light color */}
      <div className="white-wipe absolute inset-0 bg-white z-50 pointer-events-none shadow-[20px_0_50px_rgba(0,0,0,0.5)] border-r border-border"></div>
    </section>
  );
}
