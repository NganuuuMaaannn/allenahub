"use client";

import { portfolioThemes } from "./themes";
import type { PortfolioThemeId } from "./types";

type ThemeSelectorProps = {
  selectedThemeId: PortfolioThemeId;
  onChange: (themeId: PortfolioThemeId) => void;
  legend?: string;
};

export function ThemeSelector({
  selectedThemeId,
  onChange,
  legend = "Portfolio Theme",
}: ThemeSelectorProps) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-medium text-slate-200">{legend}</legend>
      <div className="grid gap-3 md:grid-cols-2">
        {portfolioThemes.map((theme) => {
          const selected = selectedThemeId === theme.id;

          return (
            <button
              key={theme.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(theme.id)}
              className={`group overflow-hidden rounded-2xl border p-3 text-left transition hover:-translate-y-0.5 ${
                selected
                  ? "border-teal-300 bg-slate-700/80 shadow-[0_18px_50px_rgba(45,212,191,0.14)]"
                  : "border-slate-700 bg-slate-900/70 hover:border-slate-500"
              }`}
            >
              <div className={`min-h-32 overflow-hidden rounded-xl border p-3 ${theme.preview.shell}`}>
                <div className="flex items-center gap-1.5">
                  <span className={`h-2 w-9 rounded-full ${theme.preview.accent}`} />
                  <span className={`h-2 w-5 rounded-full ${theme.preview.soft}`} />
                  <span className="ml-auto h-2 w-8 rounded-full bg-white/26" />
                </div>
                <div className="mt-5 grid grid-cols-[1.15fr_0.85fr] gap-3">
                  <div className="space-y-2">
                    <div className={`h-4 w-20 rounded-full ${theme.preview.accent}`} />
                    <div className="h-2 w-full rounded-full bg-white/40" />
                    <div className="h-2 w-4/5 rounded-full bg-white/28" />
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className={`h-9 rounded-lg border ${theme.preview.surface}`} />
                      <div className={`h-9 rounded-lg border ${theme.preview.surface}`} />
                    </div>
                  </div>
                  <div className={`rounded-xl border p-2 ${theme.preview.surface}`}>
                    <div className={`h-12 rounded-lg ${theme.preview.soft}`} />
                    <div className="mt-2 h-2 rounded-full bg-white/30" />
                    <div className="mt-1 h-2 w-2/3 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <p className={`text-sm font-semibold ${selected ? "text-teal-100" : "text-slate-100"}`}>
                    {theme.name}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{theme.description}</p>
                </div>
                <span
                  className={`mt-0.5 h-4 w-4 shrink-0 rounded-full border ${
                    selected ? "border-teal-300 bg-teal-300" : "border-slate-500"
                  }`}
                />
              </div>

              <div className="mt-3 flex gap-1.5">
                {theme.swatches.map((swatch) => (
                  <span
                    key={swatch}
                    className="h-4 flex-1 rounded-full border border-white/10"
                    style={{ backgroundColor: swatch }}
                  />
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
