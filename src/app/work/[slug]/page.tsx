import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { Container } from "@/components/layout";
import { Eyebrow, BodyText } from "@/components/typography";
import { ProjectEditorialArtifact } from "@/components/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found — Arin",
    };
  }

  return {
    title: `${project.title} — Case Study | Arin`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-[100dvh] bg-background text-foreground pt-24 sm:pt-28 pb-16 sm:pb-24">
      <Container size="default">
        {/* Navigation Breadcrumb / Return to Homepage */}
        <div className="flex items-center justify-between pb-8 sm:pb-12 border-b border-border">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1 text-accent"
            />
            <span>Back to Selected Work</span>
          </Link>

          <span className="font-mono text-xs text-subtle">
            {project.category} · {project.year}
          </span>
        </div>

        {/* Case Study Header */}
        <div className="py-10 sm:py-16 max-w-4xl flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <Eyebrow className="text-foreground tracking-widest uppercase">
              Case Study
            </Eyebrow>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.12]">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mt-2 max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Project Metadata Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-border font-mono text-xs">
          <div>
            <span className="block text-subtle uppercase tracking-wider text-[10px] mb-1">Role</span>
            <span className="text-foreground font-semibold">{project.role || "Lead Engineer"}</span>
          </div>
          <div>
            <span className="block text-subtle uppercase tracking-wider text-[10px] mb-1">Category</span>
            <span className="text-foreground font-semibold">{project.category}</span>
          </div>
          <div>
            <span className="block text-subtle uppercase tracking-wider text-[10px] mb-1">Release Year</span>
            <span className="text-foreground font-semibold">{project.year}</span>
          </div>
          <div>
            <span className="block text-subtle uppercase tracking-wider text-[10px] mb-1">Status</span>
            <span className="text-accent font-semibold">Production Ready</span>
          </div>
        </div>

        {/* Hero Visual Area */}
        <div className="py-10 sm:py-14">
          <div className="rounded-lg overflow-hidden border border-border shadow-2xs">
            <ProjectEditorialArtifact slug={project.slug} />
          </div>
        </div>

        {/* Case Study Architecture Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 pt-6 border-t border-border">
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* MY CONTRIBUTION */}
            <div>
              <Eyebrow className="text-foreground mb-3">My Contribution</Eyebrow>
              <BodyText size="default" className="text-muted-foreground leading-relaxed">
                {project.contribution || project.longDescription || project.description}
              </BodyText>
            </div>

            {/* KEY WORK */}
            {project.keyWork && project.keyWork.length > 0 && (
              <div>
                <Eyebrow className="text-foreground mb-3">Key Work</Eyebrow>
                <ul className="flex flex-col gap-3 pl-1">
                  {project.keyWork.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* STACK */}
            <div>
              <Eyebrow className="text-foreground mb-3">Stack</Eyebrow>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1.5 bg-muted/60 border border-border text-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Case study navigation and actions */}
          <div className="lg:col-span-4 flex flex-col gap-6 p-6 border border-border bg-white h-fit">
            <span className="font-mono text-xs text-subtle uppercase tracking-wider">
              Project Navigation
            </span>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Explore the rest of the single-page portfolio or reach out for architecture reviews and technical discussions.
            </p>

            <Link
              href="/#work"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              <span>Explore More Work</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}
