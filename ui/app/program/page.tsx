import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata = { title: "The Program — The Forest School" };

const questions = [
  {
    title: "Indigenous Worldviews",
    image: "/images/program/01.webp",
    body: "How can living root bridges, forest ecosystems, and indigenous architecture teach us about resilience and sustainable design?",
  },
  {
    title: "Ecological Symbiosis",
    image: "/images/program/02.webp",
    body: "In what ways can village immersion, agroforestry, and shared community living show us how indigenous cultures sustain ecological balance?",
  },
  {
    title: "Reciprocity",
    image: "/images/program/03.webp",
    body: "How do foraging walks, ecological observation, and learning from a place help us move from extraction toward reciprocity with the natural world?",
  },
  {
    title: "Regenerative Cultures",
    image: "/images/program/04.webp",
    body: "How can we bring together traditional arts, crafts, storytelling, and design to build truly regenerative communities?",
  },
  {
    title: "Deep Listening",
    image: "/images/program/05.webp",
    body: "What do survival skills, reflection, journaling, and deep listening teach us about what it means to truly belong to a place?",
  },
  {
    title: "Holistic Way of Living",
    image: "/images/program/06.webp",
    body: "How can our daily conversations around ecology and culture spark actionable paths toward co-existing with more-than-human beings?",
  },
];

export default function ProgramPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/program.webp" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/55" />
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-40 hero-content">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            The Program
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            Immersions of 5–20 days.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Short-term, immersive immersions into the heart of the hills — designed for
            those seeking meaningful connection to the Earth and grounded ways of living
            amid global uncertainty.
          </p>
          <blockquote className="mt-10 max-w-xl border-l-2 border-primary/60 pl-4 font-serif text-xl italic text-foreground/90">
            &ldquo;I am because we are.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
          Curriculum Framework
        </div>
        <h2 className="font-serif text-3xl md:text-4xl">
          Six guiding questions.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Profound inquiries that shape every immersion — explored through embodied
          practice, dialogue with elders, and time on the land.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {questions.map((q, i) => (
            <Card
              key={q.title}
              className="group gap-0 overflow-hidden p-0 transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={q.image}
                  alt={q.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 font-mono text-xs text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-xl">{q.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {q.body}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              Preparation
            </div>
            <h2 className="font-serif text-3xl md:text-4xl">
              Arrive adaptable and respectful.
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground">
              Meghalaya&rsquo;s terrain is breathtakingly beautiful, yet rugged and
              demanding. Expect simple, communal accommodation; biodegradable toiletries
              only; and digital minimalism so you can drop into the rhythms of the land.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>· Gateway: Shillong via Guwahati, then onward to Pynursla.</li>
              <li>· Final sites: Nongjri Pungweikyian and Rangthylliang.</li>
              <li>· Durations: 4–21 days, by cohort.</li>
            </ul>
            <Link
              href="/preparation"
              className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80"
            >
              Full packing list &amp; daily rhythm →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <Link
          href="/apply"
          className={buttonVariants({ size: "lg", className: "rounded-full px-6" })}
        >
          Apply for the next cohort
        </Link>
      </section>
    </div>
  );
}
