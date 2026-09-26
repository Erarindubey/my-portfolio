"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks";

const CODE_SNIPPETS = [
  "const server = await deploy({ region: 'us-east-1' });",
  "function optimizeRenderTree(node: ReactNode) {",
  "  if (!node) return null;",
  "  return React.memo(node);",
  "}",
  "// Auto-scaling enabled",
  "class AutomationPipeline {",
  "  async trigger() {",
  "    await webhooks.fire('deploy_start');",
  "  }",
  "}",
  "export const config = { runtime: 'edge' };",
  "const [state, dispatch] = useReducer(reducer, initialState);",
  "// Compiling assets...",
  "import { gsap } from 'gsap';",
  "function hydrate() { ... }",
];

const renderHighlightedLine = (line: string) => {
  let html = line
    // Strings (orange-brown)
    .replace(/('.*?'|".*?"|`.*?`)/g, '<span style="color: #ce9178">$1</span>')
    // Comments (green)
    .replace(/(\/\/.*)/g, '<span style="color: #6A9955">$1</span>')
    // Keywords (blue)
    .replace(/\b(const|let|var|function|class|import|export|from|async)\b/g, '<span style="color: #569cd6">$1</span>')
    // Control Flow (purple)
    .replace(/\b(await|return|if|else|for|while|try|catch)\b/g, '<span style="color: #c586c0">$1</span>')
    // Types and Objects (teal)
    .replace(/\b(ReactNode|System|AutomationPipeline|config|state|deploy)\b/g, '<span style="color: #4EC9B0">$1</span>')
    // Functions and methods (yellow)
    .replace(/\b(trigger|fire|optimizeRenderTree|useReducer|memo|hydrate)\b/g, '<span style="color: #dcdcaa">$1</span>')
    // Brackets (gray)
    .replace(/(=&gt;|=>|{|}|\[|\]|\(|\)|;)/g, '<span style="color: #808080">$1</span>');
  
  return <div dangerouslySetInnerHTML={{ __html: html }} className="inline" />;
};

export function AnimatedCodeBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection observer to pause animation when out of view
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0, rootMargin: '100px' });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Initial population
    if (lines.length === 0) {
      setLines([
        "// Initializing workspace...",
        "import { System } from '@core';",
      ]);
    }

    if (prefersReducedMotion || !isVisible) return;

    let timeoutId: NodeJS.Timeout;
    
    // Very slow progression to simulate thoughtful typing
    const tick = () => {
      setLines(prev => {
        // Keep only last 20 lines to prevent DOM bloat
        const next = [...prev];
        if (next.length > 20) next.shift();
        
        // Randomly pick a new line
        const randomSnippet = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
        return [...next, randomSnippet];
      });
      timeoutId = setTimeout(tick, Math.random() * 4000 + 2000);
    };

    timeoutId = setTimeout(tick, 1000);
    return () => clearTimeout(timeoutId);
  }, [prefersReducedMotion, isVisible, lines.length]);

  if (prefersReducedMotion) return null;

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.35] sm:opacity-[0.25]">
       <div 
         className="w-full h-full flex transition-all duration-1000"
         style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)' }}
       >
         {/* Fake VS Code Sidebar - Very subtle */}
         <div className="hidden sm:flex flex-col w-12 md:w-16 border-r border-foreground/10 pt-32 items-center opacity-30">
            <div className="w-4 h-4 rounded-sm border-2 border-foreground/40 mb-6"></div>
            <div className="w-4 h-4 rounded-sm border-2 border-foreground/40 mb-6"></div>
            <div className="w-4 h-4 rounded-sm border-2 border-foreground/40 mb-6"></div>
         </div>
         
         {/* Editor Area */}
         <div className="flex-1 flex flex-col justify-end p-4 sm:p-8 md:p-12 font-mono text-sm sm:text-base leading-[1.8] text-[#cccccc]">
           {/* Tab bar hint */}
           <div className="hidden sm:flex gap-2 mb-8 text-xs text-foreground/40 border-b border-foreground/10 pb-2">
             <span className="text-[#ce9178]">page.tsx</span>
             <span>components/</span>
             <span>animations/</span>
           </div>

           {lines.map((line, i) => (
             <div 
               key={i} 
               className="flex gap-4 whitespace-pre transition-opacity duration-1000"
               style={{ animation: 'fadeIn 1s ease-out forwards' }}
             >
               <div className="w-6 text-right text-[#858585] select-none text-xs leading-[2.2]">{i + 1}</div>
               <div>{renderHighlightedLine(line)}</div>
             </div>
           ))}
           <div className="flex gap-4 mt-1 items-center">
             <div className="w-6 text-right text-[#858585] select-none text-xs">{lines.length + 1}</div>
             <div className="animate-pulse w-2 h-5 bg-[#cccccc]" />
           </div>
         </div>
       </div>
    </div>
  );
}
