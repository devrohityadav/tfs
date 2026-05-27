import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Knowledge Hub — The Forest School" };

const essays = [
  {
    title: "Living (planet) versus dead (capital)",
    publisher: "Heinrich Böll Stiftung",
    note: "Reclaiming aliveness through human and more-than-human engagements.",
    href: "https://in.boell.org/en/2020/08/27/living-planet-versus-dead-capital",
  },
  {
    title: "The Entropic Forest: Sharing Life, Ecopolitics, and Reciprocity",
    publisher: "Heinrich Böll Stiftung",
    note: "A study on ecopolitics and reciprocity in Northeast India.",
    href: "https://in.boell.org/",
  },
  {
    title: "Pushing Boundaries",
    publisher: "The Telegraph India",
    note: "A feature on the global impact of her work at the Venice Biennale.",
    href: "https://www.telegraphindia.com/",
  },
  {
    title: "Inner Lines — Exhibition Details",
    publisher: "Exhibition Archive",
    note: "Documentation of river sovereignty and deep listening projects.",
    href: "https://www.desiremachinecollective.in",
  },
];

const projects = [
  {
    title: "Desire Machine Collective",
    note: "Detailed conversation on the collective's artistic trajectory and political context.",
    href: "https://www.desiremachinecollective.in",
  },
  {
    title: "deSchool — Alternative Worldviews, NE India",
    note: "Platform for pedagogical initiatives and community-based knowledge.",
    href: "https://www.youtube.com/watch?v=XBqSPA5a820",
  },
  {
    title: "A Conversation with Desire Machine Collective",
    note: "AAA in-depth interview on the centre–periphery divide and the experience of time.",
    href: "https://aaa.org.hk/",
  },
  {
    title: "Desire Machine Collective — Wikipedia",
    note: "General overview of the collective's history since 2004.",
    href: "https://en.wikipedia.org/wiki/Desire_Machine_Collective",
  },
];

// TODO: replace `#` once PDFs are supplied.
const pdfs = [
  {
    title: "deSchool Workspace",
    note: "Curriculum overview & pedagogical toolkit.",
    href: "#",
  },
  {
    title: "Museums are Closed at Night — Final Report",
    note: "IFA Museum Fellowship: decolonizing the Assam State Museum archives.",
    href: "#",
  },
  {
    title: "Living (planet) versus dead (capital)",
    note: "Reclaiming aliveness and dismantling extractive worldviews.",
    href: "#",
  },
  {
    title: "The Entropic Forest: Sharing Life, Ecopolitics, and Reciprocity",
    note: "Northeast India ecopolitics study.",
    href: "#",
  },
];

const bioArchitecture = [
  {
    title: "Project 2047 — Nurturing the Future",
    body: "A long-term vision to plant and nurture 30 new living root bridges across Meghalaya by 2047, integrating the wisdom of local elders with 'barefoot engineers' to ensure traditional knowledge is passed down.",
  },
  {
    title: "Defining 'Living Architecture'",
    body: "Research extending beyond bridges to functional structures — ladders, swings, and tunnels — crafted from Ficus elastica. Natural forms that grow stronger over centuries.",
  },
  {
    title: "The Living Bridge Foundation (LBF)",
    body: "Established in 2018, the primary body for repairing ancient bridges and guiding the growth of new bio-structures through traditional weaving methods.",
  },
  {
    title: "UNESCO World Heritage Advocacy",
    body: "Providing critical data and advocacy for the nomination of Meghalaya's living root bridges for UNESCO World Heritage status.",
  },
  {
    title: "Eco-Tourism & Sustainable Stewardship",
    body: "Models for responsible tourism that provide local employment while preventing the ecological degradation caused by over-tourism.",
  },
  {
    title: "Indigenous Recognition",
    body: "Honoured at the 11th Balipara Foundation Award for unwavering commitment to indigenous heritage.",
  },
];

export default function KnowledgePage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/knowledge.webp" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/55" />
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-40 hero-content">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            The Living Archive
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            Knowledge Hub
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            An intellectual and archival foundation bridging contemporary research with
            ancient wisdom, under the leadership of Sonal Jain — with bio-architectural
            studies curated by Morningstar Khongthaw.
          </p>
        </div>
      </section>

      <Section title="Research, Articles & Essays" tag="I" curator="Curated by Sonal Jain">
        <div className="grid gap-5 md:grid-cols-2">
          {essays.map((e) => (
            <a key={e.title} href={e.href} target="_blank" rel="noreferrer noopener">
              <Card className="h-full border-border bg-card p-7 transition-colors hover:border-primary/40">
                <Badge variant="outline" className="mb-4 border-primary/40 text-primary">
                  Essay
                </Badge>
                <h3 className="font-serif text-xl leading-tight">{e.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{e.note}</p>
                <div className="mt-6 text-xs uppercase tracking-[0.2em] text-primary">
                  {e.publisher} ↗
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Official Projects & Archives" tag="II">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <a key={p.title} href={p.href} target="_blank" rel="noreferrer noopener">
              <Card className="h-full border-border bg-card p-7 transition-colors hover:border-primary/40">
                <Badge variant="outline" className="mb-4 border-primary/40 text-primary">
                  Project
                </Badge>
                <h3 className="font-serif text-lg leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.note}</p>
                <div className="mt-6 text-xs uppercase tracking-[0.2em] text-primary">
                  Visit ↗
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Pedagogical Tools & Institutional Reports" tag="III">
        <div className="grid gap-5 md:grid-cols-2">
          {pdfs.map((p) => (
            <Card
              key={p.title}
              className="h-full border-border bg-card p-7"
              aria-disabled
            >
              <div className="flex items-start justify-between gap-4">
                <Badge variant="outline" className="border-primary/40 text-primary">
                  PDF
                </Badge>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Coming soon
                </span>
              </div>
              <h3 className="mt-4 font-serif text-lg leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.note}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Bio-Architectural Heritage Studies"
        tag="IV"
        curator="Curated by Morningstar Khongthaw"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {bioArchitecture.map((b) => (
            <Card key={b.title} className="border-border bg-card p-7">
              <h3 className="font-serif text-lg">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({
  title,
  tag,
  curator,
  children,
}: {
  title: string;
  tag: string;
  curator?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:gap-6">
        <div className="font-mono text-sm text-primary/70">{tag}</div>
        <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
        {curator && (
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground md:ml-auto">
            {curator}
          </div>
        )}
      </div>
      {children}
    </section>
  );
}
