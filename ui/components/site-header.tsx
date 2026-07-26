"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ExternalLink, MenuIcon, XIcon } from "lucide-react";

const nav = [
  { href: "/vision", label: "Vision" },
  { href: "/program", label: "The Program" },
  { href: "/team", label: "Team" },
  { href: "/knowledge", label: "Knowledge Hub" },
  { href: "/preparation", label: "Preparation" },
  { href: "/apply", label: "Apply" },
];

const EXTERNAL_LINK = {
  href: "https://poveda-builder-tvlu6gjoirpfgb2s.hostingersite.com/",
  label: "Trips",
};

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        solid
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {!solid && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black/70 via-black/30 to-transparent"
        />
      )}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src={
              solid
                ? "/images/logo-ecologies-studio-dark.webp"
                : "/images/logo-ecologies-studio-white.webp"
            }
            alt="Ecologies Studio"
            width={7896}
            height={1192}
            priority
            sizes="180px"
            quality={95}
            className="h-9 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => {
            const active = pathname === n.href || pathname?.startsWith(`${n.href}/`);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors ${
                  solid
                    ? active
                      ? "text-foreground font-medium underline underline-offset-8 decoration-primary decoration-2"
                      : "text-muted-foreground hover:text-foreground"
                    : active
                      ? "text-white font-medium underline underline-offset-8 decoration-white/80 decoration-2"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <a
            href={EXTERNAL_LINK.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ExternalLink className="h-4 w-4" />
            {EXTERNAL_LINK.label}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={`-mr-2 flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
            solid ? "text-foreground" : "text-white"
          }`}
        >
          {menuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
          <ul className="space-y-4">
            {nav.map((n) => {
              const active = pathname === n.href || pathname?.startsWith(`${n.href}/`);
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={active ? "page" : undefined}
                    className={`block border-l-2 py-1 pl-3 text-base transition-colors ${
                      active
                        ? "border-primary font-medium text-primary"
                        : "border-transparent text-muted-foreground"
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={EXTERNAL_LINK.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ExternalLink className="h-4 w-4" />
                {EXTERNAL_LINK.label}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
