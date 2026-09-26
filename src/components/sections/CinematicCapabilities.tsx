"use client";

import React, { useRef, useEffect } from "react";
import { registerGsapPlugins, gsap, ScrollTrigger } from "@/lib/animations/gsap";
import { usePrefersReducedMotion } from "@/hooks";

export function CinematicCapabilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    registerGsapPlugins();

    if (!containerRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      const pinCurrent = pinRef.current;
      if (!pinCurrent) return;

      // Structural elements
      const thatsItText = pinCurrent.querySelector(".thats-it-text") as HTMLElement | null;
      const noooText = pinCurrent.querySelector(".nooo-text") as HTMLElement | null;
      
      const designText = pinCurrent.querySelector(".design-text") as HTMLElement | null;
      const developText = pinCurrent.querySelector(".develop-text") as HTMLElement | null;
      const manageText = pinCurrent.querySelector(".manage-text") as HTMLElement | null;
      const automateText = pinCurrent.querySelector(".automate-text") as HTMLElement | null;
      const launchText = pinCurrent.querySelector(".launch-text") as HTMLElement | null;

      if (!thatsItText || !noooText || !designText || !developText || !manageText || !automateText || !launchText) return;

      // Set initial states
      gsap.set(thatsItText, { autoAlpha: 0, scale: 0.85, filter: "blur(12px)" });
      gsap.set(noooText, { autoAlpha: 0, scale: 0.95 });
      
      // All capability text stacked in the center, invisible initially
      gsap.set([designText, developText, manageText, automateText, launchText], { 
        autoAlpha: 0,
        y: 40 
      });

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=14000", // Large scroll space for the whole sequence
          pin: pinRef.current,
          scrub: 1.2,
          anticipatePin: 1,
        }
      });

      // 1. EMPTY SPACE (Short delay before anything happens)
      // This creates the cinematic whitespace after Phase 4
      masterTl.to({}, { duration: 1.5 });

      // 2. THAT'S IT?
      masterTl.to(thatsItText, {
        autoAlpha: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.8,
        ease: "power3.out"
      })
      .to({}, { duration: 1.2 }) // Hold
      .to(thatsItText, {
        autoAlpha: 0,
        scale: 1.05,
        filter: "blur(8px)",
        duration: 1.2,
        ease: "power2.in"
      });

      // 3. NOOO.
      masterTl.to(noooText, {
        autoAlpha: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      })
      .to({}, { duration: 1.0 }) // Hold
      .to(noooText, {
        autoAlpha: 0,
        y: -30,
        duration: 1.2,
        ease: "power2.in"
      });

      // Brief pause before capabilities
      masterTl.to({}, { duration: 0.5 });

      const figmaContainer = pinCurrent.querySelector(".figma-container") as HTMLElement | null;
      const figmaFrame = pinCurrent.querySelector(".figma-frame") as HTMLElement | null;
      const figmaCursor = pinCurrent.querySelector(".figma-cursor") as HTMLElement | null;

      const vscodeContainer = pinCurrent.querySelector(".vscode-container") as HTMLElement | null;
      const fileItems = pinCurrent.querySelectorAll(".file-item");
      const codeLines = pinCurrent.querySelectorAll(".code-line");
      const codeCursor = pinCurrent.querySelector(".code-cursor") as HTMLElement | null;
      const termLines = pinCurrent.querySelectorAll(".term-line");

      const manageContainer = pinCurrent.querySelector(".manage-container") as HTMLElement | null;
      const manageCards = pinCurrent.querySelectorAll(".manage-card");
      const manageProgress = pinCurrent.querySelectorAll(".manage-progress");

      const automateContainer = pinCurrent.querySelector(".automate-container") as HTMLElement | null;
      const autoNodes = pinCurrent.querySelectorAll(".auto-node");
      const autoLines = pinCurrent.querySelectorAll(".auto-line");
      const autoData = pinCurrent.querySelectorAll(".auto-data");

      const launchContainer = pinCurrent.querySelector(".launch-container") as HTMLElement | null;

      if (!figmaContainer || !figmaFrame || !figmaCursor || !vscodeContainer || !codeCursor || !manageContainer || !automateContainer || !launchContainer) return;
      
      // Initial States
      gsap.set(figmaContainer, { autoAlpha: 0, scale: 0.95 });
      gsap.set(figmaFrame, { width: 0, height: 0, autoAlpha: 0 });
      gsap.set(".layer-item", { autoAlpha: 0, x: -10 });
      gsap.set(".wf-el", { autoAlpha: 0, scale: 0.9, y: 10 });
      gsap.set(".ui-layer", { autoAlpha: 0 });
      gsap.set([".ui-text", ".ui-btn", ".ui-card"], { autoAlpha: 0, y: 10 });
      gsap.set(figmaCursor, { x: 500, y: 400, autoAlpha: 0 });

      gsap.set(vscodeContainer, { autoAlpha: 0, y: 50, scale: 0.95 });
      gsap.set(fileItems, { autoAlpha: 0, x: -10 });
      gsap.set(codeLines, { autoAlpha: 0 });
      gsap.set(codeCursor, { autoAlpha: 0 });
      gsap.set(termLines, { autoAlpha: 0, y: 5 });

      gsap.set(manageContainer, { autoAlpha: 0, y: 50, scale: 0.95 });
      gsap.set(manageCards, { autoAlpha: 0, y: 20 });
      gsap.set(manageProgress, { scaleX: 0, transformOrigin: "left center" });

      gsap.set(automateContainer, { autoAlpha: 0, y: 50, scale: 0.95 });
      gsap.set(autoNodes, { autoAlpha: 0, scale: 0 });
      gsap.set(autoLines, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(autoData, { autoAlpha: 0, x: 0 });

      gsap.set(launchContainer, { autoAlpha: 0, y: 50, scale: 0.95 });
      gsap.set(".launch-step", { autoAlpha: 0, y: 10 });
      gsap.set(".launch-store", { autoAlpha: 0, y: 40, scale: 0.9 });
      gsap.set(".launch-screenshot", { autoAlpha: 0, y: 20 });

      // I DESIGN
      masterTl.to(designText, { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" })
              // Enter Figma UI
              .to(figmaContainer, { autoAlpha: 1, scale: 1, duration: 1.0, ease: "power3.out" }, "-=0.8")
              .to(figmaCursor, { autoAlpha: 1, duration: 0.3 })
              
              // 1. Create Frame
              .to(figmaCursor, { x: -150, y: -200, duration: 1.0, ease: "power2.inOut" })
              .to(figmaFrame, { width: 320, height: 450, autoAlpha: 1, duration: 0.8, ease: "power3.out" }, "-=0.2")
              .to(".layer-item", { autoAlpha: 1, x: 0, duration: 0.3, stagger: 0.1 }, "-=0.5")
              
              // 2. Draw Wireframes
              .to(figmaCursor, { x: -100, y: -100, duration: 0.6, ease: "power2.inOut" })
              .to(".wf-el", { autoAlpha: 1, scale: 1, y: 0, stagger: 0.15, duration: 0.4, ease: "back.out(1.2)" })
              
              // 3. Transform to UI (Polish)
              .to(figmaCursor, { x: 50, y: 50, duration: 0.8, ease: "power2.inOut" })
              .to(".ui-layer", { autoAlpha: 1, duration: 0.8 }) // fade in white bg
              
              // 4. Stagger in actual UI components
              .to([".ui-text", ".ui-btn"], { autoAlpha: 1, y: 0, stagger: 0.15, duration: 0.5, ease: "power2.out" })
              .to(figmaCursor, { x: 0, y: 150, duration: 0.6, ease: "power2.inOut" })
              .to(".ui-card", { autoAlpha: 1, y: 0, stagger: 0.15, duration: 0.5, ease: "back.out(1.2)" })
              
              // 5. Final Cursor move out
              .to(figmaCursor, { x: 200, y: 200, duration: 1.0, ease: "power2.inOut" })
              
              // Exit Design Phase
              .to({}, { duration: 0.8 }) // Hold
              .to([designText, figmaContainer], { autoAlpha: 0, y: -40, scale: 0.95, duration: 1.2, ease: "power2.in" });

      // I DEVELOP
      masterTl.to(developText, { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" })
              // Enter VS Code
              .to(vscodeContainer, { autoAlpha: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out" }, "-=0.8")
              
              // Files appear
              .to(fileItems, { autoAlpha: 1, x: 0, stagger: 0.15, duration: 0.4, ease: "power2.out" })
              
              // Code typing simulation
              .to(codeCursor, { autoAlpha: 1, duration: 0.1 })
              .to(codeLines, { autoAlpha: 1, stagger: 0.2, duration: 0.1 })
              
              // Terminal execution
              .to(termLines, { autoAlpha: 1, y: 0, stagger: 0.25, duration: 0.3 })
              
              // Exit
              .to({}, { duration: 0.8 }) 
              .to([developText, vscodeContainer], { autoAlpha: 0, y: -40, scale: 0.95, duration: 1.2, ease: "power2.in" });

      // I MANAGE
      masterTl.to(manageText, { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" })
              // Enter Dashboard
              .to(manageContainer, { autoAlpha: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out" }, "-=0.8")
              
              // Pop in cards
              .to(manageCards, { autoAlpha: 1, y: 0, stagger: 0.15, duration: 0.6, ease: "back.out(1.2)" })
              
              // Fill progress bars
              .to(manageProgress, { scaleX: 1, stagger: 0.2, duration: 0.8, ease: "power2.out" })
              
              // Exit
              .to({}, { duration: 0.8 }) 
              .to([manageText, manageContainer], { autoAlpha: 0, y: -40, scale: 0.95, duration: 1.2, ease: "power2.in" });

      // I AUTOMATE
      masterTl.to(automateText, { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" })
              // Enter Automation Canvas
              .to(automateContainer, { autoAlpha: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out" }, "-=0.8")
              
              // Nodes pop in
              .to(autoNodes, { autoAlpha: 1, scale: 1, stagger: 0.2, duration: 0.6, ease: "back.out(1.5)" })
              
              // Lines connect
              .to(autoLines, { scaleX: 1, stagger: 0.2, duration: 0.4, ease: "power2.inOut" })
              
              // Data flows
              .to(autoData, { autoAlpha: 1, duration: 0.2 })
              .to(autoData, { x: 100, stagger: 0.2, duration: 0.6, ease: "power1.inOut" })
              .to(autoData, { autoAlpha: 0, duration: 0.2 })
              
              // Exit
              .to({}, { duration: 0.6 }) 
              .to([automateText, automateContainer], { autoAlpha: 0, y: -40, scale: 0.95, duration: 1.2, ease: "power2.in" });

      // I LAUNCH
      masterTl.to(launchText, { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" })
              // Enter Launch
              .to(launchContainer, { autoAlpha: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out" }, "-=0.8")
              
              // Sequence pipeline steps
              .to(".launch-step", { autoAlpha: 1, y: 0, stagger: 0.2, duration: 0.5, ease: "power2.out" })
              
              // Store Surface Popup
              .to(".launch-store", { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.2)" }, "+=0.2")
              
              // Screenshots stagger
              .to(".launch-screenshot", { autoAlpha: 1, y: 0, stagger: 0.15, duration: 0.6, ease: "power3.out" }, "-=0.4")
              
              // Exit
              .to({}, { duration: 1.5 }) 
              .to([launchText, launchContainer], { autoAlpha: 0, y: -40, scale: 0.95, duration: 1.2, ease: "power2.in" });

    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null; // Fallback will be handled later
  }

  return (
    <div ref={containerRef} className="relative w-full bg-background z-20">
      <div ref={pinRef} className="h-[100dvh] w-full relative overflow-hidden bg-background">
        
        {/* THAT'S IT? */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <h2 className="thats-it-text font-sans text-5xl md:text-7xl lg:text-9xl font-black tracking-[-0.04em] text-foreground select-none">
            THAT&apos;S IT?
          </h2>
        </div>

        {/* NOOO. */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <h2 className="nooo-text font-serif italic text-5xl md:text-7xl lg:text-9xl font-medium tracking-tight text-foreground select-none">
            NOOO.
          </h2>
        </div>

        {/* CAPABILITIES LAYER - 50/50 SPLIT */}
        <div className="absolute inset-0 flex flex-col lg:flex-row pointer-events-none z-30">
          
          {/* LEFT: CAPABILITY TEXT */}
          <div className="w-full h-[35vh] lg:h-full lg:w-1/2 flex items-center justify-center lg:justify-start lg:pl-16 xl:pl-32 relative">
            <h2 className="design-text absolute font-sans text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.04em] text-foreground select-none">
              I DESIGN
            </h2>
            <h2 className="develop-text absolute font-sans text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.04em] text-foreground select-none">
              I DEVELOP
            </h2>
            <h2 className="manage-text absolute font-sans text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.04em] text-foreground select-none">
              I MANAGE
            </h2>
            <h2 className="automate-text absolute font-sans text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.04em] text-foreground select-none">
              I AUTOMATE
            </h2>
            <h2 className="launch-text absolute font-sans text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.04em] text-foreground select-none">
              I LAUNCH
            </h2>
          </div>

          {/* RIGHT: VISUAL STORYTELLING */}
          <div className="w-full h-[65vh] lg:h-full lg:w-1/2 flex items-center justify-center relative overflow-hidden">
             
             {/* Shared Scaling Wrapper for Visuals */}
             <div className="relative w-full h-full max-w-[800px] max-h-[500px] flex items-center justify-center transform scale-[0.45] sm:scale-[0.6] md:scale-[0.8] xl:scale-100 origin-center">

               {/* FIGMA VISUAL */}
               <div className="figma-container absolute w-[800px] h-[500px] flex items-center justify-center pointer-events-none z-20 perspective-[1000px]">
                 <div className="relative w-[800px] h-[500px] bg-[#1E1E1E] border border-border/50 rounded-2xl shadow-2xl flex overflow-hidden font-sans text-white">
                   {/* Left Sidebar - Layers */}
                   <div className="w-48 border-r border-[#333] bg-[#252525] p-4 flex flex-col gap-2 text-[10px] text-[#A3A3A3]">
                     <div className="text-[11px] font-medium text-white mb-2">Layers</div>
                     
                     <div className="layer-item flex items-center gap-2">
                       <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="10" height="10" stroke="currentColor"/></svg>
                       <span>App Frame</span>
                     </div>
                     <div className="layer-item ml-4 flex items-center gap-2">
                       <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="3" width="10" height="6" stroke="currentColor"/></svg>
                       <span>Navbar</span>
                     </div>
                     <div className="layer-item ml-4 flex items-center gap-2">
                       <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="10" height="10" stroke="currentColor"/></svg>
                       <span>Hero Section</span>
                     </div>
                     <div className="layer-item ml-6 flex items-center gap-2">
                       <span className="w-3 text-center">T</span>
                       <span>Title Typography</span>
                     </div>
                     <div className="layer-item ml-6 flex items-center gap-2">
                       <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="2" width="10" height="8" rx="4" stroke="currentColor"/></svg>
                       <span>Primary Button</span>
                     </div>
                     <div className="layer-item ml-4 flex items-center gap-2">
                       <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="10" height="10" stroke="currentColor"/></svg>
                       <span>Feature Cards</span>
                     </div>
                   </div>
                   
                   {/* Canvas */}
                   <div className="flex-1 bg-[#121212] relative flex items-center justify-center overflow-hidden">
                     {/* The Artboard/Frame */}
                     <div className="figma-frame absolute bg-[#1A1A1A] border border-[#333] shadow-md flex flex-col overflow-hidden w-[320px] h-[450px]">
                       
                       {/* Wireframe Phase (grey boxes) */}
                       <div className="wf-layer absolute inset-0 p-4 flex flex-col gap-4">
                         <div className="wf-el w-full h-12 bg-[#333] rounded-md"></div>
                         <div className="wf-el w-3/4 h-20 bg-[#333] rounded-md mx-auto mt-4"></div>
                         <div className="wf-el w-1/2 h-10 bg-[#333] rounded-full mx-auto"></div>
                         <div className="flex gap-4 mt-8">
                           <div className="wf-el flex-1 h-24 bg-[#333] rounded-md"></div>
                           <div className="wf-el flex-1 h-24 bg-[#333] rounded-md"></div>
                         </div>
                       </div>
                       
                       {/* Final Polish Phase */}
                       <div className="ui-layer absolute inset-0 bg-white flex flex-col opacity-0">
                         {/* Navbar */}
                         <div className="h-14 border-b border-gray-100 flex items-center justify-between px-4">
                           <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-[10px] text-white font-bold">A</div>
                           <div className="flex gap-2">
                             <div className="w-4 h-1 bg-gray-200 rounded-full"></div>
                             <div className="w-4 h-1 bg-gray-200 rounded-full"></div>
                           </div>
                         </div>
                         {/* Hero */}
                         <div className="px-6 mt-10 text-center flex flex-col items-center">
                           <h3 className="ui-text text-xl font-black text-black leading-tight tracking-tight">Design System<br/>Mastery</h3>
                           <p className="ui-text text-[10px] text-gray-500 mt-2">Elevating user experiences with precision and aesthetics.</p>
                           <div className="ui-btn mt-6 px-5 py-2 bg-black text-white text-[10px] font-bold rounded-full shadow-lg">Get Started</div>
                         </div>
                         {/* Cards */}
                         <div className="flex px-4 gap-3 mt-10">
                           <div className="ui-card flex-1 bg-gray-50 p-3 rounded-xl border border-gray-100 shadow-sm">
                             <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-2">✦</div>
                             <div className="h-2 w-3/4 bg-gray-200 rounded-full mb-1"></div>
                             <div className="h-1.5 w-1/2 bg-gray-100 rounded-full"></div>
                           </div>
                           <div className="ui-card flex-1 bg-gray-50 p-3 rounded-xl border border-gray-100 shadow-sm">
                             <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-2">❖</div>
                             <div className="h-2 w-3/4 bg-gray-200 rounded-full mb-1"></div>
                             <div className="h-1.5 w-1/2 bg-gray-100 rounded-full"></div>
                           </div>
                         </div>
                       </div>
                       
                     </div>
                   </div>
                   
                   {/* Cursor */}
                   <div className="figma-cursor absolute z-50 pointer-events-none">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M5.5 2L11.5 22L13.5 14.5L21 11.5L5.5 2Z" fill="white" stroke="#121212" strokeWidth="2" strokeLinejoin="round"/>
                     </svg>
                     <div className="mt-1 ml-3 px-2 py-0.5 bg-blue-500 text-white text-[9px] font-bold rounded shadow-md">
                       Designer
                     </div>
                   </div>
                 </div>
               </div>

               {/* VS CODE VISUAL */}
               <div className="vscode-container absolute w-[800px] h-[500px] bg-[#1E1E1E] border border-border/20 rounded-xl shadow-2xl flex flex-col overflow-hidden pointer-events-none z-20 font-mono text-[11px] text-[#D4D4D4]">
                 {/* Titlebar */}
                 <div className="h-9 border-b border-[#333333] flex items-center px-4 bg-[#181818]">
                   <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                     <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                     <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                   </div>
                   <div className="mx-auto text-[#858585] flex items-center gap-2">
                     <span>workspace — app.tsx</span>
                   </div>
                 </div>
                 
                 <div className="flex flex-1 overflow-hidden">
                   {/* Sidebar */}
                   <div className="w-48 bg-[#181818] border-r border-[#333333] p-3 flex flex-col gap-2 text-[#CCCCCC]">
                     <div className="text-[10px] text-[#858585] mb-1">EXPLORER</div>
                     <div className="file-item flex items-center gap-2"><div className="w-3 h-3 bg-blue-500/20 text-blue-400 flex items-center justify-center rounded-sm text-[8px]">ts</div> src/app.tsx</div>
                     <div className="file-item flex items-center gap-2"><div className="w-3 h-3 bg-yellow-500/20 text-yellow-400 flex items-center justify-center rounded-sm text-[8px]">js</div> server.js</div>
                     <div className="file-item flex items-center gap-2"><div className="w-3 h-3 bg-green-500/20 text-green-400 flex items-center justify-center rounded-sm text-[8px]">ev</div> .env</div>
                   </div>
                   
                   {/* Editor */}
                   <div className="flex-1 flex flex-col relative">
                      <div className="flex-1 p-4 overflow-hidden relative leading-relaxed">
                        <div className="code-line text-[#569CD6]">import <span className="text-[#9CDCFE]">express</span> from <span className="text-[#CE9178]">&apos;express&apos;</span>;</div>
                        <div className="code-line text-[#569CD6]">import <span className="text-[#9CDCFE]">{'{'}</span> connectDB <span className="text-[#9CDCFE]">{'}'}</span> from <span className="text-[#CE9178]">&apos;./db&apos;</span>;</div>
                        <div className="code-line"><br/></div>
                        <div className="code-line"><span className="text-[#569CD6]">const</span> <span className="text-[#4FC1FF]">app</span> = <span className="text-[#DCDCAA]">express</span>();</div>
                        <div className="code-line"><span className="text-[#DCDCAA]">connectDB</span>();</div>
                        <div className="code-line"><br/></div>
                        <div className="code-line"><span className="text-[#4FC1FF]">app</span>.<span className="text-[#DCDCAA]">get</span>(<span className="text-[#CE9178]">&apos;/api/health&apos;</span>, (<span className="text-[#9CDCFE]">req</span>, <span className="text-[#9CDCFE]">res</span>) <span className="text-[#569CD6]">=&gt;</span> {'{'}</div>
                        <div className="code-line ml-4"><span className="text-[#9CDCFE]">res</span>.<span className="text-[#DCDCAA]">json</span>({'{'} <span className="text-[#9CDCFE]">status:</span> <span className="text-[#CE9178]">&apos;ok&apos;</span> {'}'});</div>
                        <div className="code-line">{'}'});</div>
                        <div className="code-cursor absolute w-2 h-4 bg-[#A6A6A6] mt-1"></div>
                      </div>
                      
                      {/* Terminal */}
                      <div className="h-32 border-t border-[#333333] bg-[#1E1E1E] p-3">
                        <div className="flex gap-4 border-b border-[#333333] pb-1 mb-2 text-[10px]">
                          <span className="text-[#E7E7E7] border-b border-[#E7E7E7] pb-1">TERMINAL</span>
                          <span className="text-[#858585]">OUTPUT</span>
                        </div>
                        <div className="term-line text-[#27C93F]">$ npm run dev</div>
                        <div className="term-line text-[#CCCCCC]">&gt; starting development server...</div>
                        <div className="term-line text-[#4FC1FF]">✓ ready on http://localhost:3000</div>
                        <div className="term-line text-[#E7E7E7]">Connected to Database</div>
                      </div>
                   </div>
                 </div>
               </div>

               {/* MANAGE VISUAL - Dashboard */}
               <div className="manage-container absolute w-[800px] h-[500px] bg-[#F4F4F5] border border-border/50 rounded-xl shadow-xl flex flex-col overflow-hidden pointer-events-none z-20 font-sans text-[#18181B]">
                 <div className="h-14 border-b border-border/50 bg-white flex items-center justify-between px-6">
                    <div className="font-semibold text-lg">Project Command</div>
                    <div className="flex gap-4">
                       <div className="w-6 h-6 rounded-full bg-muted"></div>
                       <div className="w-6 h-6 rounded-full bg-muted"></div>
                    </div>
                 </div>
                 <div className="flex-1 p-6 grid grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="manage-card col-span-2 bg-white rounded-lg border border-border/50 p-5 flex flex-col gap-4 shadow-sm">
                      <div className="flex justify-between items-center">
                        <div className="font-medium">Active Sprints</div>
                        <div className="text-xs text-muted-foreground">3 in progress</div>
                      </div>
                      <div className="flex flex-col gap-3 mt-2">
                        <div>
                          <div className="flex justify-between text-xs mb-1"><span>Backend API</span><span>75%</span></div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="manage-progress h-full w-[75%] bg-blue-500 rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1"><span>Frontend UI</span><span>40%</span></div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="manage-progress h-full w-[40%] bg-purple-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="manage-card bg-white rounded-lg border border-border/50 p-5 shadow-sm flex flex-col justify-between">
                       <div className="font-medium text-sm">Timeline</div>
                       <div className="h-24 w-full bg-muted/30 rounded-md border border-border/50 relative overflow-hidden">
                          <div className="absolute left-[20%] top-2 w-[40%] h-3 bg-green-500/80 rounded-sm"></div>
                          <div className="absolute left-[50%] top-8 w-[30%] h-3 bg-yellow-500/80 rounded-sm"></div>
                          <div className="absolute left-[10%] top-14 w-[70%] h-3 bg-blue-500/80 rounded-sm"></div>
                       </div>
                    </div>
                    {/* Card 3, 4, 5 */}
                    <div className="manage-card bg-white rounded-lg border border-border/50 p-4 shadow-sm h-32 flex flex-col justify-center items-center gap-2">
                       <div className="text-3xl font-bold">12</div>
                       <div className="text-xs text-muted-foreground uppercase">Tasks Pending</div>
                    </div>
                    <div className="manage-card bg-white rounded-lg border border-border/50 p-4 shadow-sm h-32 flex flex-col justify-center items-center gap-2">
                       <div className="text-3xl font-bold text-green-600">4</div>
                       <div className="text-xs text-muted-foreground uppercase">Completed Today</div>
                    </div>
                    <div className="manage-card bg-white rounded-lg border border-border/50 p-4 shadow-sm h-32 flex flex-col justify-center items-center gap-2">
                       <div className="text-3xl font-bold text-blue-600">On Track</div>
                       <div className="text-xs text-muted-foreground uppercase">Project Status</div>
                    </div>
                 </div>
               </div>

               {/* AUTOMATE VISUAL - Node Workflow (n8n style) */}
               <div className="automate-container absolute w-[800px] h-[500px] bg-[#FAFAFA] border border-border/50 rounded-xl shadow-xl flex items-center justify-center overflow-hidden pointer-events-none z-20 font-sans">
                  {/* Background Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  
                  <div className="relative w-[600px] h-[300px]">
                     {/* Nodes */}
                     <div className="auto-node absolute left-[50px] top-[120px] w-[140px] h-[60px] bg-white border border-[#FF6B6B] rounded-lg shadow-sm flex items-center px-4 gap-3 z-10">
                       <div className="w-8 h-8 rounded bg-[#FF6B6B]/20 flex items-center justify-center"><div className="w-4 h-4 bg-[#FF6B6B] rounded-sm"></div></div>
                       <div className="text-xs font-semibold">Webhook</div>
                     </div>
                     
                     <div className="auto-node absolute left-[280px] top-[40px] w-[140px] h-[60px] bg-white border border-[#4DABF7] rounded-lg shadow-sm flex items-center px-4 gap-3 z-10">
                       <div className="w-8 h-8 rounded bg-[#4DABF7]/20 flex items-center justify-center"><div className="w-4 h-4 bg-[#4DABF7] rounded-sm"></div></div>
                       <div className="text-xs font-semibold">Filter Data</div>
                     </div>
                     
                     <div className="auto-node absolute left-[280px] top-[200px] w-[140px] h-[60px] bg-white border border-[#FCC419] rounded-lg shadow-sm flex items-center px-4 gap-3 z-10">
                       <div className="w-8 h-8 rounded bg-[#FCC419]/20 flex items-center justify-center"><div className="w-4 h-4 bg-[#FCC419] rounded-sm"></div></div>
                       <div className="text-xs font-semibold">Format</div>
                     </div>
                     
                     <div className="auto-node absolute left-[500px] top-[120px] w-[140px] h-[60px] bg-white border border-[#20C997] rounded-lg shadow-sm flex items-center px-4 gap-3 z-10">
                       <div className="w-8 h-8 rounded bg-[#20C997]/20 flex items-center justify-center"><div className="w-4 h-4 bg-[#20C997] rounded-sm"></div></div>
                       <div className="text-xs font-semibold">Post API</div>
                     </div>
                     
                     {/* SVG Lines */}
                     <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                       <path className="auto-line" d="M 190 150 C 235 150, 235 70, 280 70" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="5,5" />
                       <path className="auto-line" d="M 190 150 C 235 150, 235 230, 280 230" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="5,5" />
                       <path className="auto-line" d="M 420 70 C 460 70, 460 150, 500 150" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="5,5" />
                       <path className="auto-line" d="M 420 230 C 460 230, 460 150, 500 150" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="5,5" />
                     </svg>
                     
                     {/* Data packets moving */}
                     <div className="auto-data absolute left-[210px] top-[95px] w-3 h-3 bg-[#4DABF7] rounded-full shadow-[0_0_8px_#4DABF7]"></div>
                     <div className="auto-data absolute left-[210px] top-[195px] w-3 h-3 bg-[#FCC419] rounded-full shadow-[0_0_8px_#FCC419]"></div>
                     <div className="auto-data absolute left-[450px] top-[95px] w-3 h-3 bg-[#20C997] rounded-full shadow-[0_0_8px_#20C997]"></div>
                     <div className="auto-data absolute left-[450px] top-[195px] w-3 h-3 bg-[#20C997] rounded-full shadow-[0_0_8px_#20C997]"></div>
                  </div>
               </div>

               {/* LAUNCH VISUAL */}
               <div className="launch-container absolute w-[800px] h-[500px] flex flex-col items-center justify-center pointer-events-none z-20 font-sans">
                 
                 {/* Pipeline Steps (Build -> Test -> Ready -> Published) */}
                 <div className="launch-pipeline flex gap-4 mb-8">
                    <div className="launch-step flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full border border-border">
                       <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                       <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Build</span>
                    </div>
                    <div className="w-8 border-b-2 border-dashed border-muted self-center"></div>
                    <div className="launch-step flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full border border-border">
                       <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                       <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Test</span>
                    </div>
                    <div className="w-8 border-b-2 border-dashed border-muted self-center"></div>
                    <div className="launch-step flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full border border-border">
                       <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                       <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ready</span>
                    </div>
                    <div className="w-8 border-b-2 border-dashed border-muted self-center"></div>
                    <div className="launch-step flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/30">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981]"></div>
                       <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Published</span>
                    </div>
                 </div>
                 
                 {/* App Store Style Surface */}
                 <div className="launch-store w-[600px] bg-white border border-border shadow-2xl rounded-2xl p-6 flex flex-col gap-6 relative overflow-hidden">
                   {/* Top Header */}
                   <div className="flex gap-6">
                     {/* App Icon */}
                     <div className="w-28 h-28 rounded-3xl bg-black flex items-center justify-center shadow-lg border border-gray-100">
                        <span className="text-4xl font-black text-white">A</span>
                     </div>
                     
                     {/* App Metadata */}
                     <div className="flex-1 flex flex-col justify-center gap-2">
                        <h2 className="text-2xl font-bold text-black leading-none">App</h2>
                        <h3 className="text-sm font-medium text-gray-500">Premium Experiences</h3>
                        
                        <div className="flex items-center gap-4 mt-2">
                           <div className="flex items-center gap-1">
                             <div className="flex text-yellow-400 text-xs">★★★★★</div>
                             <span className="text-xs font-bold text-gray-400 ml-1">4.9</span>
                           </div>
                           <span className="text-xs font-semibold text-gray-400 border border-gray-200 px-2 py-0.5 rounded-sm">Age 4+</span>
                           <span className="text-xs font-bold text-gray-400">#1 in Productivity</span>
                        </div>
                     </div>
                     
                     {/* Get Button */}
                     <div className="flex flex-col justify-end items-end pb-2">
                        <div className="bg-blue-600 text-white font-bold text-sm px-6 py-2 rounded-full shadow-md">GET</div>
                        <span className="text-[9px] text-gray-400 mt-1 font-medium">In-App Purchases</span>
                     </div>
                   </div>
                   
                   <div className="w-full border-t border-gray-100 my-2"></div>
                   
                   {/* Screenshots */}
                   <div className="flex gap-4">
                     <div className="launch-screenshot flex-1 h-64 bg-gray-100 rounded-xl border border-gray-200 overflow-hidden relative">
                        <div className="absolute inset-x-2 bottom-0 h-48 bg-white rounded-t-lg shadow-sm border border-gray-200/50 flex flex-col items-center pt-4">
                          <div className="w-20 h-4 bg-gray-100 rounded-full mb-4"></div>
                          <div className="w-3/4 h-2 bg-gray-100 rounded-full mb-2"></div>
                          <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
                        </div>
                     </div>
                     <div className="launch-screenshot flex-1 h-64 bg-gray-100 rounded-xl border border-gray-200 overflow-hidden relative">
                        <div className="absolute inset-x-2 bottom-0 h-48 bg-white rounded-t-lg shadow-sm border border-gray-200/50 flex flex-col p-4 gap-3">
                          <div className="w-full h-12 bg-gray-50 rounded-lg border border-gray-100"></div>
                          <div className="w-full h-12 bg-gray-50 rounded-lg border border-gray-100"></div>
                        </div>
                     </div>
                     <div className="launch-screenshot flex-1 h-64 bg-gray-100 rounded-xl border border-gray-200 overflow-hidden relative">
                        <div className="absolute inset-x-2 bottom-0 h-48 bg-white rounded-t-lg shadow-sm border border-gray-200/50 flex flex-col items-center justify-center gap-4">
                          <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100"></div>
                          <div className="w-3/4 h-3 bg-gray-100 rounded-full"></div>
                        </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
