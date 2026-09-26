import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "default" | "narrow" | "wide" | "full";
}

export function Container({
  as: Component = "div",
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-[1400px]",
    wide: "max-w-[1640px]",
    full: "max-w-full",
  };

  return (
    <Component
      className={cn(
        "w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  spacing?: "none" | "compact" | "default" | "loose" | "hero";
}

export function Section({
  as: Component = "section",
  spacing = "default",
  className,
  children,
  ...props
}: SectionProps) {
  const spacingClasses = {
    none: "py-0",
    compact: "py-10 sm:py-14 md:py-16",
    default: "py-16 sm:py-24 md:py-32",
    loose: "py-24 sm:py-32 md:py-44",
    hero: "pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20",
  };

  return (
    <Component
      className={cn("relative w-full overflow-hidden", spacingClasses[spacing], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
