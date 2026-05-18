import Image from "next/image";
import { ApplyForm } from "./apply-form";

export const metadata = { title: "Apply — The Forest School" };

export default function ApplyPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/apply.webp" alt="" fill className="object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-40">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Co-Creation Form
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            Join the Meghalaya 2024 Cohort
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A statement of intent — not a checkbox. Tell us how you would co-learn and
            co-create with the guardians, the land, and one another.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <ApplyForm />
      </section>
    </div>
  );
}
