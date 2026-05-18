import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata = { title: "The Program — The Forest School" };

const pillars = [
  {
    title: "Ecological Symbiosis",
    body: "Understanding interconnected life-systems through living root structures.",
  },
  {
    title: "Regenerative Design",
    body: "Applying indigenous &lsquo;barefoot engineering&rsquo; to modern practices.",
  },
  {
    title: "Sustainable Systems",
    body: "Learning agroforestry, survival skills and crafts of the Khasi hills.",
  },
  {
    title: "Indigenous Wisdom",
    body: "Direct engagement with guardians — their arts, plants, foraging & stories.",
  },
  {
    title: "Relational Practice",
    body: "Deep listening and structured reflection as the daily rhythm.",
  },
];

const approach = [
  ["Experiential Learning", "Learning by doing, not just observing."],
  ["Indigenous Leadership", "Deeply rooted in the knowledge of the land."],
  ["Relational Understanding", "Humans as integral parts of living systems."],
  ["Embodied Knowledge", "Beyond purely cognitive, Eurocentric models."],
  ["Co-learning & Co-creating", "Horizontal, non-hierarchical exchanges."],
];

const logistics = [
  {
    label: "Essential Gear",
    items: [
      "Sturdy, waterproof hiking boots with high-traction soles (mandatory).",
      "Heavy-duty, breathable rain gear (poncho or jacket).",
      "Analog waterproof notebooks and pens for regenerative-design sketching.",
    ],
  },
  {
    label: "Living Ethos & Facilities",
    items: [
      "Communal, minimalist, traditional accommodation in village homes.",
      "Indian-style toilets in keeping with local infrastructure.",
      "Digital minimalism — disconnect to reconnect with the language of place.",
      "Biodegradable toiletries only, to protect local watersheds.",
    ],
  },
  {
    label: "Travel",
    items: [
      "Gateway: reach Shillong via Guwahati.",
      "Group travel coordinated from Shillong to Pynursla (~3-hour journey).",
      "Final sites: Nongjri Pungweikyian and Rangthylliang.",
    ],
  },
];

export default function ProgramPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/program.webp" alt="" fill className="object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-40">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            The Program
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            Immersions of 5–20 days.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Modern education often feels disconnected from our ecological reality. We
            address this gap for those seeking meaningful connections to the Earth and
            grounded ways of living amid global uncertainty.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-serif text-3xl md:text-4xl">Core pillars of immersion.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Card key={p.title} className="border-border/50 bg-card/60 p-7">
              <div className="mb-5 font-mono text-xs text-primary/70">0{i + 1}</div>
              <h3 className="font-serif text-xl">{p.title}</h3>
              <p
                className="mt-3 text-sm leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: p.body }}
              />
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border/40 bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <h2 className="font-serif text-3xl md:text-4xl">Our approach.</h2>
          <ul className="divide-y divide-border/40">
            {approach.map(([t, b]) => (
              <li key={t} className="flex flex-col gap-2 py-5 md:flex-row md:items-baseline md:gap-8">
                <div className="w-56 shrink-0 font-serif text-xl">{t}</div>
                <div className="text-muted-foreground">{b}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
          Preparation & Logistics
        </div>
        <h2 className="font-serif text-3xl md:text-4xl">Arrive adaptable and respectful.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {logistics.map((g) => (
            <Card key={g.label} className="border-border/50 bg-card/60 p-7">
              <h3 className="font-serif text-lg">{g.label}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                    {it}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            href="/apply"
            className={buttonVariants({ size: "lg", className: "rounded-full px-6" })}
          >
            Apply for the next cohort
          </Link>
        </div>
      </section>
    </div>
  );
}
