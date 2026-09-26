import React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

/**
 * DisplayText: Large expressive editorial headers (Hero / Statement)
 */
export function DisplayText({
  as: Component = "h1",
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-sans text-[2.6rem] leading-[1.04] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] tracking-[-0.04em] font-medium text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * SectionHeading: Prominent chapter and section titles
 */
export function SectionHeading({
  as: Component = "h2",
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em] font-medium leading-[1.12] text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Eyebrow: Editorial category badges, chapter markers, indices
 */
export function Eyebrow({
  as: Component = "span",
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-[0.1em] uppercase text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * BodyText: Readable editorial paragraphs and descriptions
 */
export function BodyText({
  as: Component = "p",
  className,
  size = "default",
  children,
  ...props
}: TypographyProps & { size?: "default" | "large" | "small" }) {
  const sizeClasses = {
    small: "text-xs sm:text-sm text-muted-foreground leading-relaxed",
    default: "text-sm sm:text-base text-muted-foreground leading-relaxed",
    large: "text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed",
  };

  return (
    <Component className={cn("font-sans", sizeClasses[size], className)} {...props}>
      {children}
    </Component>
  );
}
