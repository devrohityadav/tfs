import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Knowledge Hub — Ecologies Studio" };

type Entry = { title: string; note: string; href: string; badge?: string };

const essays: Entry[] = [
  {
    title: "Living (planet) versus dead (capital)",
    note: "Reclaiming aliveness through human and more-than-human engagements.",
    href: "https://in.boell.org/en/2020/08/27/living-planet-versus-dead-capital",
  },
  {
    title: "The Entropic Forest: Sharing Life, Ecopolitics, and Reciprocity",
    note: "A study on ecopolitics and reciprocity in Northeast India.",
    href: "https://in.boell.org/en/2020/10/10/entropic-forest-2020",
  },
];

const interviews: Entry[] = [
  {
    title: "Desire Machine Collective",
    note: "Detailed conversation on the collective's artistic trajectory and political context.",
    href: "https://ocula.com/magazine/conversations/desire-machine-collective/",
  },
  {
    title: "A Conversation with Desire Machine Collective",
    note: "AAA in-depth interview on the centre–periphery divide and the experience of time.",
    href: "https://www.aaa-a.org/programs/a-conversation-with-desire-machine-collective",
  },
];

const press: Entry[] = [
  {
    title: "Pushing boundaries",
    note: "A feature on the global impact of her work at the Venice Biennale.",
    href: "https://www.telegraphindia.com/culture/pushing-boundaries/cid/379184#goog_rewarded",
  },
  {
    title: "Desiring Machine by Sandhini Poddar",
    note: "Critical Collective essay on the work and practice of Desire Machine Collective.",
    href: "https://criticalcollective.in/ArtistInner2.aspx?Aid=215&Eid=306",
  },
];

const publicTalks: Entry[] = [
  {
    title: "Panel at the SOIL ASSEMBLY — Kochi-Muziris Biennale 2026",
    note: "Hydro Soils: From Land to Sea — THE SHAPE OF WATER by Sonal Jain (@ 1:16:20)",
    href: "https://www.youtube.com/watch?v=A6wdrXfb8TM",
    badge: "Video",
  },
  {
    title: "Artist Talk at Guggenheim Museum with Desire Machine Collective",
    note: "Talk at the Solomon R. Guggenheim Museum, New York.",
    href: "https://www.youtube.com/watch?v=iSeUVzCfue0&t=470s",
    badge: "Video",
  },
  {
    title: "Talk at Goa Literary Festival",
    note: "Extended artist portfolio talk.",
    href: "https://www.youtube.com/watch?v=cj03THrMsxE&list=PL1YCmssARJBN0Q2wipkLrv296H4G_FtQ_&index=2&t=6s",
    badge: "Video",
  },
];

const projectsAndExhibitions: Entry[] = [
  {
    title: "Desire Machine Collective — Wikipedia",
    note: "General overview of the collective's history since 2004.",
    href: "https://en.wikipedia.org/wiki/Desire_Machine_Collective",
  },
  {
    title: "Everyone Agrees: It's About To Explode — India Pavilion, 54th Venice Biennale",
    note: "Ranjit Hoskote, 2014.",
    href: "https://www.india-seminar.com/2014/659/659_ranjit_hoskote.htm",
  },
  {
    title: "Inner Lines — Exhibition Details",
    note: "Documentation of river sovereignty and deep listening projects.",
    href: "https://www.artrabbit.com/events/inner-lines",
  },
  {
    title: "Noise Life — basis e.V. Frankfurt, Germany, 2015",
    note: "Production and exhibition platform residency.",
    href: "http://basis-frankfurt.de/de/newsletter/last-week-desire-machine-collective-noise-life",
  },
  {
    title: "PERIFERRY Residency — Video 2",
    note: "Continued documentation of the Periferry residency space.",
    href: "https://www.youtube.com/watch?v=frU16jStcFU",
    badge: "Video",
  },
];

const pedagogicalProjects: Entry[] = [
  {
    title: "deSchool — Alternative Worldviews, NE India",
    note: "Platform for pedagogical initiatives and community-based knowledge.",
    href: "https://www.youtube.com/watch?v=XBqSPA5a820",
    badge: "Video",
  },
  {
    title: "PERIFERRY Residency — Video 1",
    note: "Artist residency on a ferry barge on the Brahmaputra river.",
    href: "https://www.youtube.com/watch?v=heDZqHZNOyE&t=8s",
    badge: "Video",
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
    title: "Defining 'Living Architecture'",
    body: "Research extending beyond bridges to functional structures — ladders, swings, and tunnels — crafted from Ficus elastica. Natural forms that grow stronger over centuries.",
    href: "https://factordaily.com/the-man-who-grows-bridges-from-roots/",
  },
  {
    title: "UNESCO World Heritage Advocacy",
    body: "Providing critical data and advocacy for the nomination of Meghalaya's living root bridges for UNESCO World Heritage status.",
    href: "https://www.undp.org/india/stories/conserving-living-root-bridges-meghalaya",
  },
];

export default function KnowledgePage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-black">
          <Image src="/images/knowledge.webp" alt="" fill className="object-contain md:object-cover md:object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/55" />
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-40 hero-content">
          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            Knowledge Hub
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
            An intellectual and archival foundation bridging contemporary research with
            ancient wisdom, under the leadership of Sonal Jain — with bio-architectural
            studies curated by Morningstar Khongthaw.
          </p>
        </div>
      </section>

      <Section title="Research, Articles & Essays" curator="Curated by Sonal Jain">
        <EntryGrid entries={essays} />
      </Section>

      <Section title="Interviews">
        <EntryGrid entries={interviews} />
      </Section>

      <Section title="Press Articles and Essays">
        <EntryGrid entries={press} />
      </Section>

      <Section title="Public Talks">
        <EntryGrid entries={publicTalks} />
      </Section>

      <Section title="Projects & Exhibitions">
        <EntryGrid entries={projectsAndExhibitions} />
      </Section>

      <Section title="Pedagogical Projects">
        <EntryGrid entries={pedagogicalProjects} />
      </Section>

      <Section title="Pedagogical Tools & Institutional Reports">
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
              <p className="mt-3 text-base text-muted-foreground">{p.note}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Bio-Architectural Heritage Studies"
        curator="Curated by Morningstar Khongthaw"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {bioArchitecture.map((b) => (
            <a key={b.title} href={b.href} target="_blank" rel="noreferrer noopener">
              <Card className="h-full border-border bg-card p-7 transition-colors hover:border-primary/40">
                <h3 className="font-serif text-lg">{b.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{b.body}</p>
              </Card>
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}

function EntryGrid({ entries }: { entries: Entry[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {entries.map((e) => (
        <a key={e.title} href={e.href} target="_blank" rel="noreferrer noopener">
          <Card className="h-full border-border bg-card p-7 transition-colors hover:border-primary/40">
            {e.badge && (
              <Badge variant="outline" className="mb-4 border-primary/40 text-primary">
                {e.badge}
              </Badge>
            )}
            <h3 className="font-serif text-lg leading-tight">{e.title}</h3>
            <p className="mt-3 text-base text-muted-foreground">{e.note}</p>
            <div className="mt-6 text-xs uppercase tracking-[0.2em] text-primary">
              Visit ↗
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
}

function Section({
  title,
  curator,
  children,
}: {
  title: string;
  curator?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:gap-6">
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
