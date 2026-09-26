"use client";

import React, { createContext, useContext, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import Lenis from "lenis";
import { registerGsapPlugins, gsap, ScrollTrigger } from "@/lib/animations/gsap";

let globalLenisInstance: Lenis | null = null;
const listeners = new Set<() => void>();

function subscribeLenis(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getLenisSnapshot() {
  return globalLenisInstance;
}

function getLenisServerSnapshot() {
  return null;
}

interface SmoothScrollContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | HTMLElement, options?: { offset?: number; duration?: number }) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: () => {},
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisInstance = useSyncExternalStore(subscribeLenis, getLenisSnapshot, getLenisServerSnapshot);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger
    registerGsapPlugins();

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    globalLenisInstance = lenis;
    listeners.forEach((listener) => listener());

    // Connect Lenis to ScrollTrigger so scroll events update GSAP
    lenis.on("scroll", ScrollTrigger.update);

    // Connect Lenis to GSAP ticker for synchronized scroll triggers
    const updateGsap = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGsap);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(updateGsap);
      lenis.destroy();
      lenisRef.current = null;
      globalLenisInstance = null;
      listeners.forEach((listener) => listener());
    };
  }, []);

  const scrollTo = useCallback((target: string | HTMLElement, options?: { offset?: number; duration?: number }) => {
    if (globalLenisInstance) {
      globalLenisInstance.scrollTo(target, {
        offset: options?.offset ?? -80,
        duration: options?.duration ?? 1.2,
      });
    } else if (typeof target === "string" && typeof document !== "undefined") {
      const el = document.querySelector(target);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
