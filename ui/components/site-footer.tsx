import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/the.forest.school/";
const EMAIL = "hello@theforestschool.in"; // TODO: replace with real address

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="font-serif text-xl">The Forest School</div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            &ldquo;We do not inherit the Earth. We learn to belong to it.&rdquo;
          </p>
          <p className="mt-6 max-w-sm text-xs leading-relaxed text-muted-foreground/80">
            We acknowledge and honour ancestral wisdom and traditional ecological
            knowledge that shapes and sustains our initiatives.
          </p>
        </div>
        <div className="text-sm">
          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Navigate
          </div>
          <ul className="space-y-2">
            <li><Link href="/vision" className="hover:text-primary">Vision</Link></li>
            <li><Link href="/program" className="hover:text-primary">The Program</Link></li>
            <li><Link href="/team" className="hover:text-primary">Team</Link></li>
            <li><Link href="/knowledge" className="hover:text-primary">Knowledge Hub</Link></li>
            <li><Link href="/preparation" className="hover:text-primary">Preparation</Link></li>
            <li><Link href="/apply" className="hover:text-primary">Apply</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Connect
          </div>
          <ul className="space-y-2">
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Instagram ↗
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-primary">
                {EMAIL}
              </a>
            </li>
          </ul>
          <p className="mt-6 text-muted-foreground">
            Pynursla, East Khasi Hills, Meghalaya<br />
            Gateway: Shillong via Guwahati
          </p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SonalJain. All rights reserved.
      </div>
    </footer>
  );
}
