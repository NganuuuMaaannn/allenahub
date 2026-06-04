import type { PortfolioThemeId } from "./types";

export type PortfolioDesign = "classic" | "showcase";

export type PortfolioTheme = {
  id: PortfolioThemeId;
  design: PortfolioDesign;
  name: string;
  description: string;
  swatches: string[];
  classes: {
    pageBackground: string;
    gridBackground: string;
    pageHalo: string;
    headerShell: string;
    navText: string;
    headingText: string;
    bodyText: string;
    mutedText: string;
    eyebrowText: string;
    primaryButton: string;
    secondaryButton: string;
    iconButton: string;
    cardShell: string;
    cardGradients: readonly string[];
    cardGlows: readonly string[];
    floatingGlow: string;
    imageFrame: string;
    chip: string;
    link: string;
    privateText: string;
    contactPanel: string;
    contactTile: string;
    footer: string;
    backTop: string;
    aboutGlowStart: string;
    aboutGlowEnd: string;
  };
  preview: {
    shell: string;
    surface: string;
    accent: string;
    soft: string;
    text: string;
  };
};

export const portfolioThemes = [
  {
    id: "aurora",
    design: "classic",
    name: "Selection 1",
    description: "Original centered portfolio design.",
    swatches: ["#14b8a6", "#38bdf8", "#ec4899"],
    classes: {
      pageBackground:
        "bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.22),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_24%),linear-gradient(180deg,#050816_0%,#081120_42%,#0d1a2b_100%)]",
      gridBackground:
        "bg-[linear-gradient(rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.3)_1px,transparent_1px)]",
      pageHalo: "bg-teal-400/10",
      headerShell: "border-white/10 bg-slate-900/66 shadow-md",
      navText: "text-slate-200 hover:text-white",
      headingText: "text-slate-50",
      bodyText: "text-slate-300",
      mutedText: "text-slate-400",
      eyebrowText: "text-teal-200",
      primaryButton: "bg-teal-400 text-slate-950 hover:bg-teal-300",
      secondaryButton:
        "border-white/12 bg-white/6 text-slate-100 hover:border-teal-300/35 hover:bg-white/10",
      iconButton:
        "border-white/12 bg-white/6 text-slate-200 hover:border-teal-300/35 hover:bg-white/10 hover:text-white",
      cardShell:
        "border-white/10 shadow-[0_18px_60px_rgba(2,6,23,0.36)] hover:border-teal-300/30",
      cardGradients: [
        "from-teal-400/5 via-slate-900/10 to-cyan-400/10",
        "from-sky-400/5 via-slate-900/10 to-indigo-400/10",
        "from-emerald-400/5 via-slate-900/10 to-teal-300/10",
        "from-amber-300/5 via-slate-900/10 to-orange-400/10",
        "from-rose-300/5 via-slate-900/10 to-fuchsia-400/10",
      ],
      cardGlows: [
        "from-teal-300/5 via-cyan-300/10 to-transparent",
        "from-sky-300/5 via-indigo-300/10 to-transparent",
        "from-emerald-300/5 via-teal-300/10 to-transparent",
        "from-amber-200/5 via-orange-300/10 to-transparent",
        "from-rose-200/5 via-fuchsia-300/10 to-transparent",
      ],
      floatingGlow: "bg-white/10",
      imageFrame: "border-white/10 bg-slate-950/70",
      chip: "border-white/10 bg-white/5 text-slate-300",
      link: "text-slate-100 hover:text-teal-300",
      privateText: "text-red-300",
      contactPanel: "bg-slate-950 text-white shadow-[0_28px_90px_rgba(2,6,23,0.44)]",
      contactTile:
        "border-white/10 bg-slate-900/66 text-slate-50 hover:border-teal-300/30",
      footer: "border-white/10 text-slate-400",
      backTop:
        "border-white/15 bg-slate-950/85 text-slate-50 hover:border-teal-300/40 hover:text-teal-200",
      aboutGlowStart: "bg-pink-500/10",
      aboutGlowEnd: "bg-teal-400/10",
    },
    preview: {
      shell:
        "bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.24),transparent_34%),linear-gradient(135deg,#050816,#0d1a2b)]",
      surface: "border-white/10 bg-slate-950/72",
      accent: "bg-teal-300",
      soft: "bg-cyan-300/35",
      text: "text-teal-100",
    },
  },
  {
    id: "canvas",
    design: "showcase",
    name: "Selection 2",
    description: "New showcase design with split hero and capability cards.",
    swatches: ["#a78bfa", "#5eead4", "#fb923c"],
    classes: {
      pageBackground:
        "bg-[linear-gradient(135deg,#0f0a1f_0%,#15101c_34%,#101820_68%,#1b1210_100%)]",
      gridBackground:
        "bg-[linear-gradient(rgba(167,139,250,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(94,234,212,0.055)_1px,transparent_1px)]",
      pageHalo: "hidden",
      headerShell:
        "border-violet-100/15 bg-neutral-950/80 shadow-[0_18px_60px_rgba(17,24,39,0.32)]",
      navText: "text-neutral-200 hover:text-orange-200",
      headingText: "text-violet-50",
      bodyText: "text-neutral-300",
      mutedText: "text-neutral-400",
      eyebrowText: "text-orange-200",
      primaryButton: "bg-violet-300 text-neutral-950 hover:bg-teal-200",
      secondaryButton:
        "border-violet-100/15 bg-violet-200/10 text-violet-50 hover:border-orange-200/40 hover:bg-orange-200/10",
      iconButton:
        "border-violet-100/15 bg-violet-200/10 text-violet-100 hover:border-teal-200/40 hover:bg-teal-200/10 hover:text-white",
      cardShell:
        "border-violet-100/15 shadow-[0_22px_70px_rgba(17,24,39,0.34)] hover:border-orange-200/35",
      cardGradients: [
        "from-violet-200/10 via-neutral-950/10 to-teal-200/10",
        "from-orange-200/10 via-neutral-950/10 to-violet-200/10",
        "from-teal-200/10 via-neutral-950/10 to-orange-200/10",
        "from-indigo-200/10 via-neutral-950/10 to-teal-200/10",
        "from-violet-200/10 via-neutral-950/10 to-orange-200/10",
      ],
      cardGlows: [
        "from-violet-200/10 via-teal-200/10 to-transparent",
        "from-orange-200/10 via-violet-200/10 to-transparent",
        "from-teal-200/10 via-orange-200/10 to-transparent",
        "from-indigo-200/10 via-teal-200/10 to-transparent",
        "from-violet-200/10 via-orange-200/10 to-transparent",
      ],
      floatingGlow: "hidden",
      imageFrame: "border-violet-100/15 bg-neutral-950/75",
      chip: "border-violet-100/15 bg-violet-200/10 text-violet-100",
      link: "text-violet-50 hover:text-orange-200",
      privateText: "text-teal-200",
      contactPanel:
        "border border-violet-100/15 bg-neutral-950/90 text-violet-50 shadow-[0_28px_90px_rgba(17,24,39,0.38)]",
      contactTile:
        "border-violet-100/15 bg-neutral-950/60 text-violet-50 hover:border-orange-200/35",
      footer: "border-violet-100/15 text-neutral-400",
      backTop:
        "border-violet-100/15 bg-neutral-950/90 text-violet-50 hover:border-orange-200/40 hover:text-orange-200",
      aboutGlowStart: "hidden",
      aboutGlowEnd: "hidden",
    },
    preview: {
      shell: "bg-[linear-gradient(135deg,#0f0a1f,#1b1210)]",
      surface: "border-violet-100/15 bg-neutral-950/75",
      accent: "bg-violet-300",
      soft: "bg-teal-200/60",
      text: "text-violet-100",
    },
  },
] satisfies PortfolioTheme[];

export const defaultPortfolioThemeId: PortfolioThemeId = "aurora";

export function getPortfolioTheme(themeId: string | null | undefined) {
  return portfolioThemes.find((theme) => theme.id === themeId) ?? portfolioThemes[0];
}
