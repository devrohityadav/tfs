import Link from "next/link";

const INSTAGRAM_URL =
  "https://www.instagram.com/ecologiesstudio?igsh=NzVvNzlvZzB6eXpz&utm_source=qr";
const EMAIL = "hello@theforestschool.in";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-black text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="font-serif text-xl text-white">Ecologies Studio</div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
            We acknowledge and honour ancestral wisdom and traditional ecological
            knowledge that shapes and sustains our initiatives.
          </p>
        </div>
        <div className="text-sm">
          <ul className="space-y-2">
            <li><Link href="/vision" className="hover:text-white">Vision</Link></li>
            <li><Link href="/program" className="hover:text-white">The Program</Link></li>
            <li><Link href="/team" className="hover:text-white">Team</Link></li>
            <li><Link href="/knowledge" className="hover:text-white">Knowledge Hub</Link></li>
            <li><Link href="/preparation" className="hover:text-white">Preparation</Link></li>
            <li><Link href="/apply" className="hover:text-white">Apply</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <ul className="space-y-2">
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-white">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Sonal Jain. All rights reserved.
      </div>
    </footer>
  );
}
