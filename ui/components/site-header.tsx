"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/vision", label: "Vision" },
  { href: "/program", label: "The Program" },
  { href: "/team", label: "Team" },
  { href: "/knowledge", label: "Knowledge Hub" },
  { href: "/preparation", label: "Preparation" },
  { href: "/apply", label: "Apply" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-ecologies-studio.webp"
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
            const active =
              pathname === n.href || pathname?.startsWith(`${n.href}/`);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors hover:text-foreground ${
                  active
                    ? "text-foreground font-medium underline underline-offset-8 decoration-primary decoration-2"
                    : "text-muted-foreground"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
