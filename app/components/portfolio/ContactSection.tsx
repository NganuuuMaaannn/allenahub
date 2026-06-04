import type { ComponentType } from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import { findPrimaryEmail, getVisibleContactMethods } from "./data";
import { SectionReveal, TileReveal } from "./PortfolioMotion";
import type { PortfolioTheme } from "./themes";
import type { ContactIconName, ContactMethod } from "./types";

type ContactSectionProps = {
  ownerName: string;
  portfolioSlug: string;
  contactMessage: string;
  contactMethods: ContactMethod[];
  theme: PortfolioTheme;
  onNavigate: (sectionId: string) => void;
};

const iconMap: Record<ContactIconName, ComponentType<{ className?: string }>> = {
  email: FaEnvelope,
  phone: FaPhoneAlt,
  location: FaMapMarkerAlt,
  linkedin: FaLinkedin,
  github: FaGithub,
  website: FaGlobe,
};

export function ContactSection({
  ownerName,
  contactMessage,
  contactMethods,
  theme,
  onNavigate,
}: ContactSectionProps) {
  const visibleContactMethods = getVisibleContactMethods(contactMethods);
  const primaryEmail = findPrimaryEmail(visibleContactMethods);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SectionReveal
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-28 px-6 py-16 lg:px-8 lg:py-20"
        delay={0.06}
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className={`rounded-[36px] p-8 sm:p-10 ${theme.classes.contactPanel}`}>
            <p className={`text-sm font-semibold uppercase tracking-[0.26em] ${theme.classes.eyebrowText}`}>
              Contact
            </p>
            <h2 className={`mt-4 text-3xl font-semibold sm:text-4xl ${theme.classes.headingText}`}>
              Ready to reach {ownerName.split(" ")[0]} for collaboration, internship, or project work.
            </h2>
            <p className={`mt-6 text-base leading-8 ${theme.classes.bodyText}`}>{contactMessage}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={primaryEmail?.href || "#"}
                onClick={(event) => {
                  if (!primaryEmail) {
                    event.preventDefault();
                  }
                }}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${theme.classes.primaryButton}`}
              >
                Send an email
                <FaArrowRight className="text-xs" />
              </a>
              <button
                type="button"
                onClick={() => onNavigate("projects")}
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition ${theme.classes.secondaryButton}`}
              >
                Back to projects
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 auto-cols-fr">
            {visibleContactMethods.map((item, index) => {
              const Icon = iconMap[item.icon];
              const external = item.href.startsWith("http");

              return (
                <TileReveal key={`${item.label}-${index}`} delay={0.06 + index * 0.05}>
                  <a
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className={`flex h-full flex-col rounded-[30px] border p-6 shadow-[0_18px_60px_rgba(2,6,23,0.36)] transition hover:-translate-y-1 ${theme.classes.contactTile}`}
                  >
                    <div className={`flex h-11 w-11 items-center justify-center rounded-full border ${theme.classes.chip}`}>
                      <Icon />
                    </div>
                    <p className={`mt-5 text-xs font-semibold uppercase tracking-[0.2em] ${theme.classes.mutedText}`}>
                      {item.label}
                    </p>
                    <p className={`mt-2 wrap-break-word text-lg font-semibold ${theme.classes.headingText}`}>
                      {item.value}
                    </p>
                  </a>
                </TileReveal>
              );
            })}
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
