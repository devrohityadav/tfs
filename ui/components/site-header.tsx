"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";

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
  const onApply = pathname?.startsWith("/apply");
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="The Forest School"
            width={920}
            height={920}
            priority
            sizes="80px"
            quality={95}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="leading-tight">
            <div className="font-serif text-lg tracking-tight">The Forest School</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Meghalaya · India
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => {
            const active =
              n.href === "/"
                ? pathname === "/"
                : pathname === n.href || pathname?.startsWith(`${n.href}/`);
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
        <Link
          href="/apply"
          aria-hidden={onApply || undefined}
          tabIndex={onApply ? -1 : undefined}
          className={buttonVariants({
            variant: "outline",
            size: "sm",
            className: `rounded-full border-primary/40 bg-primary/10 text-xs uppercase tracking-[0.15em] text-primary hover:bg-primary/20 hover:text-primary${
              onApply ? " invisible" : ""
            }`,
          })}
        >
          Apply Now
        </Link>
      </div>
    </header>
  );
}
