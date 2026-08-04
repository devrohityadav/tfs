import Image from "next/image";
import { Card } from "@/components/ui/card";
import { questions } from "@/lib/program-questions";

export const metadata = { title: "The Program — Ecologies Studio" };

export default function ProgramPage() {
  return (
    <div>
      <section className="relative isolate min-h-[634px] md:min-h-[700px] overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-black">
          <Image src="/images/program.webp" alt="" fill className="object-cover md:object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/55" />
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-40 hero-content">
          <h1 className="font-serif text-4xl leading-[1.1] sm:text-5xl md:text-7xl">
            We offer short-term immersions, 5–20 days into villages and natural ecosystems.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
            Designed for those seeking meaningful connection to the Earth and grounded
            ways of living amid global uncertainty.
          </p>
          <blockquote className="mt-8 max-w-xl border-l-2 border-primary/60 pl-4 font-serif text-xl italic text-foreground/90">
            &ldquo;I am because we are.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {questions.map((q) => (
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
                <h3 className="font-serif text-xl">{q.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {q.body}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
