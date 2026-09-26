import { experiences, experienceConfig } from "@/data/experience";
import { Experience } from "@/types";

export function getAllExperiences(): Experience[] {
  return experiences;
}

/**
 * Calculates human-readable dynamic professional experience string
 * Example output: "8 months and counting" or "2 years and counting"
 */
export function getDynamicExperienceDuration(startDateStr: string = experienceConfig.careerStartDate): string {
  const start = new Date(startDateStr);
  const now = new Date();

  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) {
    months = Math.max(0, months - 1);
  }

  if (months <= 0) {
    return "1 month and counting";
  }

  if (months < 12) {
    return `${months} month${months === 1 ? "" : "s"} and counting`;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0) {
    return `${years} year${years === 1 ? "" : "s"} and counting`;
  }

  return `${years} yr${years === 1 ? "" : "s"} ${remainingMonths} mo${remainingMonths === 1 ? "" : "s"} and counting`;
}
