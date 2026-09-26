import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * GSAP Initialization & Utilities
 * Separation rule: GSAP is reserved for complex scroll timelines, pinned sections, horizontal scroll, and cinematic sequences.
 */
let isGsapRegistered = false;

export function registerGsapPlugins() {
  if (typeof window !== "undefined" && !isGsapRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isGsapRegistered = true;
  }
}

export { gsap, ScrollTrigger };
