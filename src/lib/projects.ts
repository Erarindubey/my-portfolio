import { projects, automationCapability, CapabilityItem } from "@/data/projects";
import { Project } from "@/types";

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAutomationCapability(): CapabilityItem {
  return automationCapability;
}

