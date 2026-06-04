"use client";

import Image from "next/image";
import type { Capability } from "./types";
import { motion } from "framer-motion";
import { revealEase } from "./PortfolioMotion";
import type { PortfolioTheme } from "./themes";

type AboutSectionProps = {
  ownerName: string;
  aboutBio: string;
  aboutImage: string;
  roleTitle: string;
  specialty: string;
  capabilities: Capability[];
  theme: PortfolioTheme;
};


function getAboutCopy(ownerName: string, aboutBio: string) {
  const trimmedBio = aboutBio.trim();

  if (trimmedBio) {
    return trimmedBio;
  }

  const resolvedName = ownerName.trim();

  return `Hi! I'm ${resolvedName}, a front-end developer passionate about modern design, smooth interactions, and responsive user interfaces. I focus mainly on front-end development while also understanding basic back-end concepts. I've worked with React Native, React JS, Next.js, TypeScript, and JavaScript, and I enjoy adding a creative touch through design, photo editing, and video work. I'm adaptable, detail-oriented, and always eager to learn new frameworks and programming languages to keep growing in tech.`;
}

export function AboutSection({
  ownerName,
  aboutBio,
  aboutImage,
  roleTitle,
  specialty,
  capabilities,
  theme,
}: AboutSectionProps) {
  const resolvedOwnerName = ownerName.trim() || "Sean";
  const resolvedAboutCopy = getAboutCopy(ownerName, aboutBio);
  const resolvedAboutImage = aboutImage.trim() || "/profile-portrait.svg";

  if (theme.design === "classic") {
    return (
      <div className="relative min-h-screen overflow-x-hidden text-slate-100">
        <section
          id="about"
          className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-20 lg:px-8 lg:py-24"
        >
          <div className={`pointer-events-none absolute -left-24 top-6 h-48 w-48 rounded-full blur-3xl ${theme.classes.aboutGlowStart}`} />
          <div className={`pointer-events-none absolute -bottom-8 right-0 h-56 w-56 rounded-full blur-3xl ${theme.classes.aboutGlowEnd}`} />

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-20">
            <div className="max-w-3xl">
              <motion.h2
                className={`text-4xl font-bold tracking-tight sm:text-5xl ${theme.classes.headingText}`}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: revealEase }}
              >
                About Me
              </motion.h2>

              <motion.p
                className={`mt-10 max-w-2xl text-[15px] leading-[2.1] sm:text-[18px] ${theme.classes.bodyText}`}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2, ease: revealEase }}
              >
                {resolvedAboutCopy}
              </motion.p>
            </div>

            <div className="absolute inset-8 -z-10 rounded-[34px]" />
            <motion.div
              className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[26px] shadow-[0_24px_80px_rgba(2,6,23,0.42)]"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, delay: 0.4, ease: revealEase }}
            >
              <Image
                src={resolvedAboutImage}
                alt={`${resolvedOwnerName} portrait`}
                width={840}
                height={1040}
                className="aspect-4/5 h-full w-full object-cover transition duration-1000 hover:scale-105"
              />
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-100">
      <section
        id="about"
        className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-20 lg:px-8 lg:py-24"
      >
        <div className="grid items-start gap-12 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-16">
          <motion.div
            className={`overflow-hidden rounded-[30px] border p-4 shadow-[0_24px_80px_rgba(0,0,0,0.32)] ${theme.classes.imageFrame}`}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, delay: 0.1, ease: revealEase }}
          >
            <div className="overflow-hidden rounded-[22px]">
              <Image
                src={resolvedAboutImage}
                alt={`${resolvedOwnerName} portrait`}
                width={840}
                height={1040}
                className="aspect-4/5 h-full w-full object-cover transition duration-1000 hover:scale-105"
              />
            </div>
            <div className="p-3 pt-5">
              <p className={`text-sm font-semibold ${theme.classes.eyebrowText}`}>
                {roleTitle}
              </p>
              <p className={`mt-2 text-sm leading-6 ${theme.classes.mutedText}`}>
                {specialty}
              </p>
            </div>
          </motion.div>

          <div className="max-w-3xl">
            <motion.h2
              className={`text-4xl font-bold tracking-tight sm:text-5xl ${theme.classes.headingText}`}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: revealEase }}
            >
              About Me
            </motion.h2>

            <motion.p
              className={`mt-10 max-w-2xl text-[15px] leading-[2.1] sm:text-[18px] ${theme.classes.bodyText}`}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2, ease: revealEase }}
            >
              {resolvedAboutCopy}
            </motion.p>

            {capabilities.length > 0 ? (
              <motion.div
                className="mt-10 grid gap-4 sm:grid-cols-2"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1, delay: 0.35, ease: revealEase }}
              >
                {capabilities.slice(0, 4).map((capability) => (
                  <article
                    key={capability.title}
                    className={`rounded-2xl border p-5 ${theme.classes.chip}`}
                  >
                    <h3 className={`text-base font-semibold ${theme.classes.headingText}`}>
                      {capability.title}
                    </h3>
                    <p className={`mt-3 text-sm leading-6 ${theme.classes.mutedText}`}>
                      {capability.description}
                    </p>
                  </article>
                ))}
              </motion.div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
