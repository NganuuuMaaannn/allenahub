import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

import { getProjectLinkPresentation } from "./data";
import { SectionReveal, TileReveal } from "./PortfolioMotion";
import type { PortfolioTheme } from "./themes";
import type { Project } from "./types";

type ProjectsSectionProps = {
  projects: Project[];
  theme: PortfolioTheme;
};

export function ProjectsSection({ projects, theme }: ProjectsSectionProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SectionReveal
        id="projects"
        className="mx-auto max-w-6xl scroll-mt-28 px-6 py-16 lg:px-8 lg:py-20"
        delay={0.06}
      >
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className={`text-2xl font-semibold uppercase tracking-[0.26em] ${theme.classes.eyebrowText}`}>
              Projects
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const projectLink = getProjectLinkPresentation(project);
            const cardGradientClass =
              theme.classes.cardGradients[index % theme.classes.cardGradients.length];
            const cardGlowClass =
              theme.classes.cardGlows[index % theme.classes.cardGlows.length];

            return (
              <TileReveal key={project.title} delay={0.06 + index * 0.06} className="h-full">
                <article
                  className={`relative mt-auto flex h-full flex-col overflow-hidden rounded-4xl border bg-linear-to-br ${cardGradientClass} p-5 backdrop-blur transition hover:-translate-y-1 ${theme.classes.cardShell}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-linear-to-br ${cardGlowClass} opacity-30`}
                  />
                  <div className={`pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full blur-3xl ${theme.classes.floatingGlow}`} />

                  <div className="group relative z-10 overflow-hidden rounded-[28px]">
                    <Image
                      src={project.image || "/project-cover-placeholder.svg"}
                      alt={`${project.title} preview`}
                      width={960}
                      height={720}
                      className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className={`relative z-10 mt-0 text-sm leading-7 ${theme.classes.bodyText}`}>
                    <h3 className={`mt-5 text-2xl font-semibold leading-snug ${theme.classes.headingText}`}>{project.title}</h3>
                  </div>
                  <p className={`relative z-10 mt-2 text-sm leading-7 ${theme.classes.bodyText}`}>
                    {project.summary}
                  </p>
                  <div className="relative z-10 mt-auto flex flex-col gap-2 pt-10">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className={`rounded-full border px-3 py-1 text-xs font-medium ${theme.classes.chip}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {projectLink.href ? (
                      <a
                        href={projectLink.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`mt-2 inline-flex items-center gap-2 text-sm font-semibold transition ${theme.classes.link}`}
                      >
                        {projectLink.label}
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    ) : (
                      <p className={`mt-2 text-sm font-semibold ${theme.classes.privateText}`}>{projectLink.label}</p>
                    )}
                  </div>
                </article>
              </TileReveal>
            );
          })}
        </div>
      </SectionReveal>
    </div>
  );
}
