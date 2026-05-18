import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/roots", label: "Our Roots" },
  { href: "/program", label: "The Program" },
  { href: "/team", label: "Guardians" },
  { href: "/knowledge", label: "Knowledge Hub" },
  { href: "/apply", label: "Apply" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.webp"
            alt="The Forest School"
            width={36}
            height={36}
            className="rounded-full bg-white/5"
          />
          <div className="leading-tight">
            <div className="font-serif text-lg tracking-tight">Forest School</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Meghalaya · India
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/apply"
          className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.15em] text-primary transition-colors hover:bg-primary/20"
        >
          Apply 2024
        </Link>
      </div>
    </header>
  );
}
