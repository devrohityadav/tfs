import Image from "next/image";

export const metadata = { title: "Vision — The Forest School" };

export default function VisionPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/vision.webp" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/55" />
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-40 hero-content">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Our Vision
          </div>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.1] md:text-7xl">
            We do not inherit the Earth. We learn to belong to it.
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
            Grounded in &lsquo;listening to land&rsquo;, The Forest School guides a shift from
            extraction to deep reciprocity with the ground beneath our feet.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-12 px-6 py-24">
        <p className="font-serif text-2xl leading-relaxed md:text-3xl">
          In an era shadowed by a deepening climate crisis, the quiet fading of species,
          and an urgent biodiversity emergency, merely surviving or &lsquo;sustaining&rsquo;
          is no longer enough.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          We are responding to a profound collective call to outgrow the old, cold belief
          system that views the living Earth as a mere resource to be exploited. Our vision
          is to co-create regenerative cultures, to restore biodiversity, heal the climate,
          and empower local communities. We practice a multi-species way of being, where
          human and non-human species co-habit holistically.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          This is a transformative learning ecosystem designed to help you reconnect with
          nature, listen to the ancestral knowledge systems that have kept these forests
          alive for centuries, and remember how to navigate the delicate, relational
          balance of life. We break away from the &lsquo;factory model of education,&rsquo;
          refusing to treat students as products or to separate the act of learning from
          the breathing textures of the living Earth.
        </p>
      </section>
    </div>
  );
}
