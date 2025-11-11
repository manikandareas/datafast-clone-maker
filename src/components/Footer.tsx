import { BarChart } from "lucide-react";

export const Footer = () => {
  const links = [
    { name: "Log in", href: "#" },
    { name: "Pricing", href: "#pricing" },
    { name: "Changelog", href: "#changelog" },
    { name: "Documentation", href: "#" },
    { name: "Affiliate program (50%)", href: "#" },
  ];

  const legal = [
    { name: "Terms of services", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "Data processing agreement", href: "#" },
  ];

  const more = [
    "Newsletter for makers",
    "TrustMRR",
    "ByeDispute",
    "IndiePage",
    "ZenVoice",
    "GamifyList",
    "WorkbookPDF",
    "HabitsGarden",
    "CodeFast",
  ];

  const countries = [
    { flag: "🇮🇳", name: "India", count: 10 },
    { flag: "🇬🇧", name: "United Kingdom", count: 7 },
    { flag: "🇨🇦", name: "Canada", count: 4 },
  ];

  // Generate random bar heights for the chart
  const barHeights = Array.from({ length: 20 }, () => Math.random() * 60 + 20);

  return (
    <footer className="bg-background border-t border-border/50 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Left Column - Brand & Stats */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BarChart className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold text-foreground">DataFast</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                DataFast is the best web analytics tool to discover which marketing channels drive revenue and grow your business, fast.
              </p>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground">
              Copyright © 2025 - All rights reserved
            </p>

            {/* Made with love */}
            <p className="text-xs text-muted-foreground">
              Made with ☕ and 🧡 by Marc
            </p>

            {/* Built with badge */}
            <div className="inline-block">
              <div className="px-3 py-1.5 bg-secondary/50 rounded text-xs text-foreground border border-border/50">
                Built with ⚡ ShipFast
              </div>
            </div>

            {/* Live Stats Widget */}
            <div className="bg-card/50 border border-border/50 rounded-lg p-6 space-y-4 max-w-xs">
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  USERS IN LAST 30 MINUTES
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">66</span>
                  <span className="h-2 w-2 bg-orange-500 rounded-full animate-pulse"></span>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="flex items-end gap-1 h-24">
                {barHeights.map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-orange-500 rounded-t transition-all"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>18:42</span>
                <span>18:51</span>
                <span>19:04</span>
                <span>19:15</span>
              </div>

              {/* Countries */}
              <div className="space-y-3 pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  COUNTRY
                </p>
                {countries.map((country, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{country.flag}</span>
                      <span className="text-sm text-foreground">{country.name}</span>
                    </div>
                    <span className="text-sm text-foreground font-semibold">
                      {country.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Powered by */}
            <p className="text-xs text-muted-foreground">
              Powered by DataFast 🤘
            </p>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              LINKS
            </h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              LEGAL
            </h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-sm text-foreground hover:text-orange-500 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              MORE
            </h3>
            <ul className="space-y-3">
              {more.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-foreground hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
