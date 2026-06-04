import type { PortfolioTheme } from "./themes";

type PortfolioFooterProps = {
  ownerName: string;
  theme: PortfolioTheme;
};

export function PortfolioFooter({ ownerName, theme }: PortfolioFooterProps) {
  return (
    <footer id="page-footer" className="mx-auto max-w-6xl px-6 pt-8 lg:px-8">
      <div className={`flex flex-col gap-3 border-t py-6 text-sm sm:flex-row sm:items-center sm:justify-between ${theme.classes.footer}`}>
        <p>&copy; {new Date().getFullYear()} {ownerName}. Portfolio managed with Allena Hub.</p>
        <p>Built by AllenaHub Developers</p>
      </div>
    </footer>
  );
}
