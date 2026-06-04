"use client";

import type { ComponentType } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

import { findResumeContact } from "./data";
import { revealEase, TileReveal } from "./PortfolioMotion";
import type { PortfolioTheme } from "./themes";
import type { ContactIconName, ContactMethod, HeroContact, HeroStat } from "./types";

type HeroSectionProps = {
  ownerName: string;
  headline: string;
  roleTitle: string;
  specialty: string;
  heroStats: HeroStat[];
  heroContacts: HeroContact[];
  contactMethods: ContactMethod[];
  theme: PortfolioTheme;
  onNavigate: (sectionId: string) => void;
};

const heroIconMap: Record<ContactIconName, ComponentType<{ className?: string }>> = {
  email: FaEnvelope,
  phone: FaPhoneAlt,
  location: FaMapMarkerAlt,
  linkedin: FaLinkedin,
  github: FaGithub,
  website: FaGlobe,
};

export function HeroSection({
  ownerName,
  headline,
  roleTitle,
  specialty,
  heroStats,
  heroContacts,
  contactMethods,
  theme,
  onNavigate,
}: HeroSectionProps) {
  const resumeLink = findResumeContact(contactMethods);
  const hasResumeLink = Boolean(resumeLink?.href && resumeLink.href !== "#");

  const heroSubheading =
    specialty && specialty.length <= 40 ? `${roleTitle} | ${specialty}` : roleTitle;

  if (theme.design === "classic") {
    return (
      <div className="relative min-h-screen overflow-x-hidden text-slate-100">
        <section
          id="home"
          className="flex min-h-svh items-center overflow-hidden px-6 py-6 lg:px-8"
        >
          <div className="mx-auto w-full max-w-7xl">
            <div className="relative flex min-h-[calc(100svh-3rem)] flex-col items-center justify-center overflow-hidden sm:px-10">
              <div className="relative flex flex-col items-center text-center">
                <motion.h1
                  className={`mt-6 text-4xl font-extrabold uppercase tracking-[0.14em] sm:text-6xl lg:text-6xl ${theme.classes.headingText}`}
                  initial={{ opacity: 0, y: 34 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.02, delay: 0.3, ease: revealEase }}
                >
                  {ownerName}
                </motion.h1>

                <motion.div
                  className="mt-6 space-y-2"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.88, delay: 0.42, ease: revealEase }}
                >
                  <p className={`text-lg font-medium sm:text-2xl ${theme.classes.mutedText}`}>
                    {heroSubheading}
                  </p>
                </motion.div>

                <motion.div
                  className="mt-10 flex flex-wrap justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.82, delay: 0.72, ease: revealEase }}
                >
                  <a
                    href={resumeLink?.href || "#"}
                    target={hasResumeLink ? "_blank" : undefined}
                    rel={hasResumeLink ? "noreferrer" : undefined}
                    onClick={(event) => {
                      if (!hasResumeLink) {
                        event.preventDefault();
                      }
                    }}
                    aria-disabled={!hasResumeLink}
                    className={`inline-flex items-center gap-2 rounded-full px-10 py-3 text-sm font-semibold transition ${theme.classes.primaryButton} ${hasResumeLink ? "" : "cursor-not-allowed opacity-70"}`}
                  >
                    View CV
                  </a>

                  <button
                    type="button"
                    onClick={() => onNavigate("contact")}
                    className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition ${theme.classes.secondaryButton}`}
                  >
                    Contact Me
                  </button>
                </motion.div>

                {heroContacts.length > 0 ? (
                  <motion.div
                    className="mt-8 flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.82, delay: 0.82, ease: revealEase }}
                  >
                    {heroContacts.map((item, index) => {
                      const Icon = heroIconMap[item.icon];
                      const external = item.href.startsWith("http");

                      return (
                        <TileReveal
                          key={`${item.label}-${index}`}
                          delay={0.86 + index * 0.05}
                        >
                          <a
                            href={item.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noreferrer" : undefined}
                            aria-label={item.label}
                            title={item.label}
                            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-lg transition hover:-translate-y-0.5 ${theme.classes.iconButton}`}
                          >
                            <Icon />
                          </a>
                        </TileReveal>
                      );
                    })}
                  </motion.div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-100">
      <section
        id="home"
        className="flex min-h-svh items-center overflow-hidden px-6 py-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid min-h-[calc(100svh-3rem)] items-center gap-10 py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.8fr)] lg:gap-14">
            <div className="relative max-w-3xl">
              <motion.p
                className={`text-sm font-semibold ${theme.classes.eyebrowText}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.18, ease: revealEase }}
              >
                {roleTitle}
              </motion.p>

              <motion.h1
                className={`mt-5 text-5xl font-semibold leading-none sm:text-7xl lg:text-8xl ${theme.classes.headingText}`}
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.02, delay: 0.3, ease: revealEase }}
              >
                {ownerName}
              </motion.h1>

              <motion.div
                className="mt-7 max-w-2xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.88, delay: 0.42, ease: revealEase }}
              >
                <p className={`text-xl font-medium leading-8 sm:text-2xl ${theme.classes.bodyText}`}>
                  {headline}
                </p>
              </motion.div>

              <motion.div
                className="mt-10 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.82, delay: 0.72, ease: revealEase }}
              >
                <a
                  href={resumeLink?.href || "#"}
                  target={hasResumeLink ? "_blank" : undefined}
                  rel={hasResumeLink ? "noreferrer" : undefined}
                  onClick={(event) => {
                    if (!hasResumeLink) {
                      event.preventDefault();
                    }
                  }}
                  aria-disabled={!hasResumeLink}
                  className={`inline-flex items-center gap-2 rounded-full px-10 py-3 text-sm font-semibold transition ${theme.classes.primaryButton} ${hasResumeLink ? "" : "cursor-not-allowed opacity-70"}`}
                >
                  View CV
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate("contact")}
                  className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition ${theme.classes.secondaryButton}`}
                >
                  Contact Me
                </button>
              </motion.div>

              {heroContacts.length > 0 ? (
                <motion.div
                  className="mt-8 flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.82, delay: 0.82, ease: revealEase }}
                >
                  {heroContacts.map((item, index) => {
                    const Icon = heroIconMap[item.icon];
                    const external = item.href.startsWith("http");

                    return (
                      <TileReveal
                        key={`${item.label}-${index}`}
                        delay={0.86 + index * 0.05}
                      >
                        <a
                          href={item.href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noreferrer" : undefined}
                          aria-label={item.label}
                          title={item.label}
                          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-lg transition hover:-translate-y-0.5 ${theme.classes.iconButton}`}
                        >
                          <Icon />
                        </a>
                      </TileReveal>
                    );
                  })}
                </motion.div>
              ) : null}
            </div>

            <motion.aside
              className={`relative overflow-hidden rounded-[34px] border bg-linear-to-br ${theme.classes.cardGradients[0]} p-5 backdrop-blur ${theme.classes.cardShell}`}
              initial={{ opacity: 0, x: 34, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.5, ease: revealEase }}
            >
              <div className={`rounded-[26px] border p-6 ${theme.classes.imageFrame}`}>
                <p className={`text-sm font-semibold ${theme.classes.eyebrowText}`}>
                  Portfolio Focus
                </p>
                <h2 className={`mt-4 text-3xl font-semibold leading-tight ${theme.classes.headingText}`}>
                  {heroSubheading}
                </h2>
                <p className={`mt-5 text-sm leading-7 ${theme.classes.bodyText}`}>
                  A compact public profile for projects, certificates, and contact links.
                </p>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={`${stat.value}-${stat.label}`}
                    className={`min-h-24 rounded-2xl border p-4 ${theme.classes.chip}`}
                  >
                    <p className={`text-3xl font-semibold ${theme.classes.headingText}`}>
                      {stat.value}
                    </p>
                    <p className={`mt-2 text-xs leading-5 ${theme.classes.mutedText}`}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
}
