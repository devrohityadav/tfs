import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="font-serif text-xl">The Forest School</div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            &ldquo;We do not inherit the Earth. We learn to belong to it.&rdquo;
          </p>
        </div>
        <div className="text-sm">
          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Navigate
          </div>
          <ul className="space-y-2">
            <li><Link href="/roots" className="hover:text-primary">Our Roots</Link></li>
            <li><Link href="/program" className="hover:text-primary">The Program</Link></li>
            <li><Link href="/team" className="hover:text-primary">The Guardians</Link></li>
            <li><Link href="/knowledge" className="hover:text-primary">Knowledge Hub</Link></li>
            <li><Link href="/apply" className="hover:text-primary">Apply</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Location
          </div>
          <p className="text-muted-foreground">
            Pynursla, Meghalaya<br />
            Nongjri Pungweikyian & Rangthylliang<br />
            Gateway: Shillong via Guwahati
          </p>
        </div>
      </div>
      <div className="border-t border-border/40 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} The Forest School · A regenerative learning ecosystem
      </div>
    </footer>
  );
}
