"use client";

import { useEffect, useState } from "react";
import type { NavItem } from "./types";
import { HeaderReveal } from "./PortfolioMotion";
import type { PortfolioTheme } from "./themes";

type PortfolioHeaderProps = {
  navItems: NavItem[];
  theme: PortfolioTheme;
  onNavigate: (sectionId: string) => void;
};

export function PortfolioHeader({
  navItems,
  theme,
  onNavigate,
}: PortfolioHeaderProps) {

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-6 left-1/2 z-50 w-full max-w-xl -translate-x-1/2 px-4 transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-32"
        }`}
    >
      <HeaderReveal delay={0.88}>
        <div className={`flex items-center justify-center rounded-full border px-6 py-3 backdrop-blur-md ${theme.classes.headerShell}`}>
          <nav className="no-scrollbar flex items-center gap-6 overflow-x-auto text-sm font-medium md:gap-12 md:text-lg">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="inline-block overflow-hidden"
              >
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`transform whitespace-nowrap transition-transform duration-300 hover:scale-105 ${theme.classes.navText}`}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </nav>
        </div>
      </HeaderReveal>
    </header>
  );
}
