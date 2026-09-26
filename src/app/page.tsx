import { getDynamicExperienceDuration } from "@/lib/experience";
import { getAllProjects, getAutomationCapability } from "@/lib/projects";
import { Hero, Introduction, SelectedWork, CinematicCapabilities, ExperienceJourney, ContactFinale } from "@/components/sections";

export default function Home() {
  const experienceDuration = getDynamicExperienceDuration();
  const projects = getAllProjects();
  const capability = getAutomationCapability();

  return (
    <main className="flex-1 flex flex-col">
      {/* 1. Hero Chapter */}
      <section id="home">
        <Hero experienceDuration={experienceDuration} />
      </section>

      {/* 2. Introduction & Philosophy Chapter */}
      <section id="about">
        <Introduction />
      </section>

      {/* 3. Selected Work Chapter */}
      <section id="work">
        <SelectedWork projects={projects} capability={capability} />
      </section>

      {/* 4. Cinematic Capabilities Chapter (Phase 5) */}
      <section id="capabilities">
        <CinematicCapabilities />
      </section>

      {/* 5. Experience & Education Journey */}
      <section id="experience-education">
        <ExperienceJourney />
      </section>

      {/* 6. Contact Finale */}
      <section id="contact" className="scroll-mt-24">
        <ContactFinale />
      </section>
    </main>
  );
}

