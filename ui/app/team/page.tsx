import Image from "next/image";

export const metadata = { title: "The Guardians — The Forest School" };

const team = [
  {
    name: "Sonal Jain",
    role: "Founder & Lead Researcher",
    image: null as string | null,
    body: "Sonal works at the intersection of art, ecology, and activism. As a co-founder of the Desire Machine Collective (2004) and Periferry, she focuses on reclaiming &lsquo;aliveness&rsquo; through engaging the human and more-than-human worlds. Her work is deeply rooted in research, hybrid collaborative practices, the creation of alternative spaces, and innovative pedagogies. Her work has been showcased globally at the Venice Biennale, the Guggenheim, and Tate Modern.",
    link: { href: "https://www.desiremachinecollective.in", label: "desiremachinecollective.in" },
  },
  {
    name: "Morningstar Khongthaw",
    role: "Lead Conservationist",
    image: "/images/morningstar.webp",
    body: "A native of Pynursla, Morningstar is the founder of the Living Bridge Foundation. He has dedicated his life to &lsquo;living architecture&rsquo; — the ancient Khasi art of weaving Ficus elastica roots into functional bridges. His commitment to indigenous heritage earned him the 11th Balipara Foundation Award.",
  },
  {
    name: "Muthok Khongmawloh",
    role: "Creative Strategist",
    image: "/images/muthok.webp",
    body: "Based in Pynursla, Muthok is a &lsquo;lifelong seeker&rsquo; focused on decolonial learning. He leads community dialogues to ensure that indigenous knowledge systems remain a vibrant, active part of local life, blending culture and nature to inspire the next generation.",
  },
];

export default function TeamPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/team.webp" alt="" fill className="object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-40">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Meet the Team
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            The Guardians
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Founders, conservationists, and community liaisons who shape the school
            through art, ecology, and indigenous practice.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-24 px-6 py-24">
        {team.map((m) => (
          <article
            key={m.name}
            className="grid items-start gap-10 md:grid-cols-[1fr_2fr]"
          >
            <div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border/50 bg-card/40">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(min-width: 768px) 320px, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-serif text-7xl text-primary/40">
                    {m.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
              </div>
              <div className="mt-5 text-xs uppercase tracking-[0.3em] text-primary">
                {m.role}
              </div>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl">{m.name}</h2>
            </div>
            <div className="pt-2">
              <p
                className="text-base leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: m.body }}
              />
              {m.link && (
                <a
                  href={m.link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex text-sm text-primary hover:underline"
                >
                  {m.link.label} ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
