"use client";

import React, { useRef, useState } from "react";
import { registerGsapPlugins, gsap, ScrollTrigger } from "@/lib/animations/gsap";
import { usePrefersReducedMotion } from "@/hooks";

export function ContactFinale() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [githubOpen, setGithubOpen] = useState(false);

  React.useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) return;
    registerGsapPlugins();

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      // Initial States
      gsap.set(".contact-reveal", { autoAlpha: 0 });
      gsap.set(".contact-title", { y: 0 });
      gsap.set(".contact-options", { autoAlpha: 0, y: 20 });

      masterTl
        // 1. Hold "let's connect!"
        .to({}, { duration: 0.5 })
        // 2. Fade out "let's connect!"
        .to(".lets-connect", { autoAlpha: 0, y: -20, duration: 1.0, ease: "power2.inOut" })
        // 3. Fade in "CONTACT" wrapper (which makes the title visible in center)
        .to(".contact-reveal", { autoAlpha: 1, duration: 1.0, ease: "power2.out" })
        // 4. Move "CONTACT" title up to make room
        .to(".contact-title", { y: -60, duration: 1.5, ease: "power3.inOut" })
        // 5. Reveal contact options
        .to(".contact-options", { autoAlpha: 1, y: 0, duration: 1.0, ease: "power2.out" }, "-=1.0")
        // 6. Hold final state
        .to({}, { duration: 1.0 });

    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <section className="w-full bg-white text-black py-32 px-6 flex flex-col items-center justify-center">
         <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter uppercase mb-16">
           Contact
         </h2>
         <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-center">
            <a href="https://www.linkedin.com/in/arin-dubey-2a0414285/" target="_blank" rel="noopener noreferrer" className="text-2xl font-light hover:underline">LinkedIn</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Arindubey5626@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl font-light hover:underline">Email</a>
            <div className="flex flex-col gap-2 cursor-pointer" onClick={() => setGithubOpen(!githubOpen)}>
               <span className="text-2xl font-light">GitHub</span>
               {githubOpen && (
                 <>
                   <a href="https://github.com/Erarindubey" target="_blank" rel="noopener noreferrer" className="text-sm text-black/60 hover:text-black">Erarindubey (Main)</a>
                   <a href="https://github.com/Arin-dubey" target="_blank" rel="noopener noreferrer" className="text-sm text-black/60 hover:text-black">Arin-dubey (Professional)</a>
                 </>
               )}
            </div>
         </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] bg-white text-black overflow-hidden border-t border-black/5">
      <div className="h-full w-full flex items-center justify-center relative z-10">
        
        {/* Initial Text */}
        <h2 className="lets-connect absolute text-4xl md:text-6xl lg:text-7xl font-serif italic font-light tracking-tight text-center">
          let&apos;s connect!
        </h2>

        {/* Revealed Contact Section */}
        <div className="contact-reveal absolute flex flex-col items-center justify-center w-full pointer-events-none">
           
           <h2 className="contact-title text-5xl md:text-7xl lg:text-9xl font-sans font-bold tracking-tighter uppercase">
             Contact
           </h2>
           
           <div className="contact-options absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 flex flex-col md:flex-row gap-12 md:gap-24 pointer-events-auto">
              
              {/* LINKEDIN */}
              <a href="https://www.linkedin.com/in/arin-dubey-2a0414285/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
                <span className="font-mono text-[10px] tracking-widest text-black/40 mb-3 group-hover:text-black transition-colors duration-300">01</span>
                <span className="text-xl md:text-3xl font-light tracking-tight group-hover:italic transition-all duration-300">LinkedIn</span>
              </a>
              
              {/* EMAIL */}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Arindubey5626@gmail.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
                <span className="font-mono text-[10px] tracking-widest text-black/40 mb-3 group-hover:text-black transition-colors duration-300">02</span>
                <span className="text-xl md:text-3xl font-light tracking-tight group-hover:italic transition-all duration-300">Email</span>
              </a>
              
              {/* GITHUB */}
              <div 
                className="group flex flex-col items-center relative cursor-pointer"
                onClick={() => setGithubOpen(!githubOpen)}
              >
                <span className={`font-mono text-[10px] tracking-widest mb-3 transition-colors duration-300 ${githubOpen ? 'text-black' : 'text-black/40 group-hover:text-black'}`}>03</span>
                <span className={`text-xl md:text-3xl font-light tracking-tight transition-all duration-300 ${githubOpen ? 'italic' : 'group-hover:italic'}`}>GitHub</span>
                
                {/* GitHub Options (Reveal on Click) */}
                <div className={`absolute top-full mt-6 flex flex-col gap-3 items-center transition-all duration-500 ease-out ${githubOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                   <a href="https://github.com/Erarindubey" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm md:text-base font-medium text-black/50 hover:text-black hover:underline underline-offset-4 transition-all">
                     Erarindubey <span className="text-[10px] text-black/30 font-mono uppercase tracking-wider">(Main)</span>
                   </a>
                   <a href="https://github.com/Arin-dubey" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm md:text-base font-medium text-black/50 hover:text-black hover:underline underline-offset-4 transition-all">
                     Arin-dubey <span className="text-[10px] text-black/30 font-mono uppercase tracking-wider">(Pro)</span>
                   </a>
                </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
}
