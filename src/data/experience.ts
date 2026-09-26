import { Experience } from "@/types";

export interface ExperienceConfig {
  /**
   * ISO start date (YYYY-MM or YYYY-MM-DD) for calculating dynamic experience
   */
  careerStartDate: string;
}

export const experienceConfig: ExperienceConfig = {
  // Configurable start date: calculating dynamically to "8 months and counting" based on current local date (2026-09)
  careerStartDate: "2026-01-01",
};

export const experiences: Experience[] = [];
