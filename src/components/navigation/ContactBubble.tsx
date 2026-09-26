"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { Magnetic } from "@/components/animations";
import { useSmoothScroll } from "@/providers";

export function ContactBubble() {
  const { scrollTo } = useSmoothScroll();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      <Magnetic strength={0.2}>
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          className="flex items-center justify-center w-14 h-14 bg-foreground text-background rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-110 transition-transform duration-300"
          aria-label="Let's Connect"
        >
          <MessageCircle size={22} />
        </a>
      </Magnetic>
    </div>
  );
}
