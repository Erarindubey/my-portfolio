import React from "react";
import { Eyebrow, BodyText } from "@/components/typography";
import { cn } from "@/lib/utils";
import { Project } from "@/types";

interface ProjectMetaProps {
  project: Partial<Project>;
  className?: string;
}

/**
 * ProjectMeta: Reusable metadata block for editorial project case studies
 */
export function ProjectMeta({ project, className }: ProjectMetaProps) {
  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-border", className)}>
      {project.role && (
        <div className="flex flex-col gap-1">
          <Eyebrow>Role</Eyebrow>
          <BodyText size="small" className="text-foreground font-medium">
            {project.role}
          </BodyText>
        </div>
      )}

      {project.category && (
        <div className="flex flex-col gap-1">
          <Eyebrow>Category</Eyebrow>
          <BodyText size="small" className="text-foreground font-medium">
            {project.category}
          </BodyText>
        </div>
      )}

      {project.year && (
        <div className="flex flex-col gap-1">
          <Eyebrow>Year</Eyebrow>
          <BodyText size="small" className="text-foreground font-medium font-mono">
            {project.year}
          </BodyText>
        </div>
      )}

      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-col gap-1">
          <Eyebrow>Stack</Eyebrow>
          <BodyText size="small" className="text-foreground font-medium">
            {project.tags.slice(0, 3).join(", ")}
          </BodyText>
        </div>
      )}
    </div>
  );
}

/**
 * ProjectVisual: Editorial frame for future project imagery / cinematic presentations
 */
interface ProjectVisualProps {
  children?: React.ReactNode;
  aspectRatio?: "video" | "wide" | "square" | "portrait";
  className?: string;
}

export function ProjectVisual({
  children,
  aspectRatio = "wide",
  className,
}: ProjectVisualProps) {
  const aspectClasses = {
    video: "aspect-video",
    wide: "aspect-[21/9]",
    square: "aspect-square",
    portrait: "aspect-[4/5]",
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-muted border border-border flex items-center justify-center",
        aspectClasses[aspectRatio],
        className
      )}
    >
      {children}
    </div>
  );
}
