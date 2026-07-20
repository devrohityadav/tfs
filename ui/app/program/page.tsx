import Image from "next/image";
import { Card } from "@/components/ui/card";
import { DelveDeeperDialog } from "@/components/delve-deeper-dialog";

export const metadata = { title: "The Program — Ecologies Studio" };

const questions = [
  {
    title: "Indigenous Worldviews",
    image: "/images/program/01.webp",
    body: "How can indigenous worldviews and cosmologies, encountered through oral histories and folk traditions, inspire us to breathe life into new, locally specific, and culturally rooted models within our own disciplines?",
  },
  {
    title: "Ecological Symbiosis",
    image: "/images/program/02.webp",
    body: "How can we create an ecological symbiosis by living and learning from nature? What can we absorb from the living root structures, the ancient agroforestry, the foraging paths, and the survival rhythms of the teachers who walk beside us?",
  },
  {
    title: "Regenerative Cultures",
    image: "/images/program/03.webp",
    body: "By immersing ourselves in the village life of communities that have stood steady for centuries and feeling the pulse of their living systems, how can we draw closer to the heart of deep ecology, regenerative cultures and circular design?",
  },
  {
    title: "Reciprocity",
    image: "/images/program/04.webp",
    body: "How can a true loop of reciprocity be forged while learning traditional arts, craft, and building — holding space in a way that empowers local communities and protects beautiful, endangered crafts such as bamboo weaving, broom making, fireside music sessions, and sustainable building techniques?",
  },
  {
    title: "Deep Listening",
    image: "/images/program/05.webp",
    body: "How can the practice of deep listening and quiet self-reflection awaken a sense of aliveness, helping us communicate with and design for the more-than-human world?",
  },
  {
    title: "Holistic Way of Living",
    image: "/images/program/06.webp",
    body: "How do we translate a holistic way of living into life-enhancing, permaculture principles that shape our daily actions?",
  },
];

export default function ProgramPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-black">
          <Image src="/images/program.webp" alt="" fill className="object-contain md:object-cover md:object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/55" />
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-40 hero-content">
          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            We offer short-term immersions, 5–20 days into villages and natural ecosystems.
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
            Designed for those seeking meaningful connection to the Earth and grounded
            ways of living amid global uncertainty.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <blockquote className="mx-auto max-w-xl border-l-2 border-primary/60 pl-4 font-serif text-xl italic text-foreground/90">
          &ldquo;I am because we are.&rdquo;
        </blockquote>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="mt-12 text-center">
          <DelveDeeperDialog questions={questions.map((q) => q.body)} />
        </div>
      </section>
    </div>
  );
}
