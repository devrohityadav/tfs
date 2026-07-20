import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ApplyForm } from "./apply-form";

export const metadata = { title: "Apply — Ecologies Studio" };

const logistics = [
  ["Location", "Pynursla, East Khasi Hills, Meghalaya"],
  ["Duration", "4–21 day immersive workshops"],
  ["Dates", "Inaugural cohort — TBD"],
  [
    "Who Should Apply",
    "Seekers and students of ecology, design, art, sociology, and architecture; or artists, ecologists, researchers, and anyone committed to ecological healing, cultural preservation, and keeping their feet on the ground.",
  ],
  [
    "Accommodation",
    "Immersive community living within the village ecosystem to foster deep cultural exchange.",
  ],
];

export default function ApplyPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-black">
          <Image src="/images/apply.webp" alt="" fill className="object-contain md:object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/55" />
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-40 hero-content">
          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            Join the inaugural cohort.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            This program is a clear call to those ready to step out of abstraction and
            into a transformative, lived practice of belonging.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Card className="p-8">
          <div className="mb-6 text-xs uppercase tracking-[0.18em] text-primary">
            Cohort Logistics
          </div>
          <dl className="grid gap-x-10 gap-y-5 md:grid-cols-[180px_1fr]">
            {logistics.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="font-serif text-base text-foreground">{k}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <ApplyForm />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <Card className="border-primary/30 bg-primary/5 p-8">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Beyond the Program
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Graduates of Ecologies Studio do not simply leave; they become permanent
            threads in a growing network of practitioners. You will retain continued
            access to the Knowledge Hub and find ongoing opportunities to contribute your
            hands to Project 2047 and co-create the future breaths of Ecologies Studio.
          </p>
        </Card>
      </section>
    </div>
  );
}
