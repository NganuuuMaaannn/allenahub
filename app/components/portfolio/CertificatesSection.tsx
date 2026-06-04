import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

import { SectionReveal, TileReveal } from "./PortfolioMotion";
import type { PortfolioTheme } from "./themes";
import type { Certificate } from "./types";

type CertificatesSectionProps = {
  certificates: Certificate[];
  theme: PortfolioTheme;
};

export function CertificatesSection({
  certificates,
  theme,
}: CertificatesSectionProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SectionReveal
        id="certificates"
        className="mx-auto max-w-6xl scroll-mt-28 px-6 py-16 lg:px-8 lg:py-20"
        delay={0.06}
      >

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className={`text-2xl font-semibold uppercase tracking-[0.26em] ${theme.classes.eyebrowText}`}>
              Certificates
            </p>
          </div>
        </div>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => {
            const cardGradientClass =
              theme.classes.cardGradients[index % theme.classes.cardGradients.length];
            const cardGlowClass =
              theme.classes.cardGlows[index % theme.classes.cardGlows.length];

            return (
              <TileReveal key={certificate.title} delay={0.06 + index * 0.07} className="h-full">
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-4xl border bg-linear-to-br ${cardGradientClass} p-5 backdrop-blur transition hover:-translate-y-1 ${theme.classes.cardShell}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-linear-to-br ${cardGlowClass} opacity-30`}
                  />
                  <div className={`pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full blur-3xl ${theme.classes.floatingGlow}`} />

                  <div className={`relative z-10 aspect-[4/3] w-full shrink-0 overflow-hidden rounded-3xl border ${theme.classes.imageFrame}`}>
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="relative z-10 mt-5 flex flex-1 flex-col">
                    <div className={`flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] ${theme.classes.mutedText}`}>
                      <span>{certificate.website}</span>
                      <span>{certificate.issued}</span>
                    </div>

                    <h3 className={`mt-4 text-2xl font-semibold ${theme.classes.headingText}`}>
                      {certificate.title}
                    </h3>

                    <div className="mt-auto flex flex-col gap-2 pt-8">
                      <div className={`text-sm leading-7 ${theme.classes.bodyText}`}>
                        <p>
                          <span className={`font-semibold ${theme.classes.headingText}`}>Website:</span>{" "}
                          {certificate.website}
                        </p>
                      </div>

                      <a
                        href={certificate.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-semibold transition ${theme.classes.link}`}
                      >
                        Open Certificate
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </div>
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
