import Image from "next/image";

export const metadata = { title: "Our Roots — The Forest School" };

export default function RootsPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/roots.webp" alt="" fill className="object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-40">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Philosophy & Vision
          </div>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl">
            Our Roots
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A relational understanding of the Earth — moving from extractive to reciprocal
            ways of being.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-16 px-6 py-24 font-serif">
        <Block
          label="The Vision"
          title="A Relational Understanding"
          body="Our vision is to help individuals reconnect with nature and develop an understanding of ecological balance based on living with communities. Grounded in philosophies such as &lsquo;I am because we are,&rsquo; we promote a shift from extractive to reciprocal relationships with the Earth."
        />
        <Block
          label="The Context"
          title="Beyond the Factory Model"
          body="The climate crisis and the 6th Mass Extinction highlight a deeper issue — a belief system that views nature as a resource to be exploited. We acknowledge the profound grief stemming from this reality and aim to introspectively address what is broken. We are committed to moving away from the &lsquo;factory model of education,&rsquo; treating students as products and separating learning from the living Earth."
        />
        <Block
          label="The Language of Place"
          title="I am because we are."
          body="Reciprocity is more than ethic — it is grammar. To learn the language of a place is to honour its rivers, ridges, and root structures as kin. Our work begins where extraction ends."
        />
      </section>
    </div>
  );
}

function Block({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <div className="border-l-2 border-primary/40 pl-6">
      <div className="mb-2 font-sans text-xs uppercase tracking-[0.3em] text-primary">
        {label}
      </div>
      <h2 className="text-3xl md:text-4xl">{title}</h2>
      <p
        className="mt-4 font-sans text-base leading-relaxed text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}
