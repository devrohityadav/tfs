import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Knowledge Hub — The Forest School" };

const essays = [
  {
    title: "Living (planet) versus dead (capital)",
    publisher: "Heinrich Böll Stiftung",
    note: "Reclaiming aliveness and dismantling extractive worldviews.",
    href: "https://in.boell.org/en/2020/08/27/living-planet-versus-dead-capital",
  },
  {
    title: "The Entropic Forest",
    publisher: "Heinrich Böll Stiftung",
    note: "A study on ecopolitics and reciprocity in Northeast India.",
    href: "https://deschoolne.com/",
  },
];

const media = [
  {
    title: "Short film: Living root bridges",
    note: "A visual journey into bio-architectural engineering.",
    href: "https://www.youtube.com/watch?v=5Ss0W2uaRLY&t=157s",
  },
  {
    title: "Artist Talk: Desire Machine Collective",
    note: "Philosophical underpinnings of social practice and Periferry.",
    href: "https://www.desiremachinecollective.in",
  },
  {
    title: "Alternative Worldviews — Narratives from NE India",
    note: "deSchool Northeast project.",
    href: "https://www.youtube.com/watch?v=XBqSPA5a820",
  },
];

export default function KnowledgePage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/knowledge.webp" alt="" fill className="object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-40">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Research & Multimedia
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            Knowledge Hub
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Essays, films, exhibitions and dialogues that situate our practice within a
            longer arc of ecological thinking.
          </p>
        </div>
      </section>

      <Section title="Featured Essays" tag="01">
        <div className="grid gap-5 md:grid-cols-2">
          {essays.map((e) => (
            <a key={e.title} href={e.href} target="_blank" rel="noreferrer noopener">
              <Card className="h-full border-border/50 bg-card/60 p-7 transition-colors hover:border-primary/40">
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

      <Section title="Multimedia Archives" tag="02">
        <div className="grid gap-5 md:grid-cols-3">
          {media.map((m) => (
            <a key={m.title} href={m.href} target="_blank" rel="noreferrer noopener">
              <Card className="h-full border-border/50 bg-card/60 p-7 transition-colors hover:border-primary/40">
                <Badge variant="outline" className="mb-4 border-primary/40 text-primary">
                  Video
                </Badge>
                <h3 className="font-serif text-lg leading-tight">{m.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{m.note}</p>
                <div className="mt-6 text-xs uppercase tracking-[0.2em] text-primary">
                  Watch ↗
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Awards & Recognition" tag="03">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50 bg-card/60 p-7">
            <h3 className="font-serif text-lg">Nominations</h3>
            <p className="mt-3 text-muted-foreground">
              LUMA Award (Arles) · Visible Award (Tate Liverpool) · Prudential Eye Award.
            </p>
          </Card>
          <Card className="border-border/50 bg-card/60 p-7">
            <h3 className="font-serif text-lg">Collections</h3>
            <p className="mt-3 text-muted-foreground">
              Work held by the Solomon R. Guggenheim Museum (New York) and Tate Modern
              (London).
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}

function Section({
  title,
  tag,
  children,
}: {
  title: string;
  tag: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end gap-6">
        <div className="font-mono text-sm text-primary/70">{tag}</div>
        <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
