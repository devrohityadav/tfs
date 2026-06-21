import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = { title: "Preparation — The Forest School" };

const rhythm = [
  {
    time: "Morning",
    body: "Grounding & Movement — communal circles, shared reflections, or quiet, mindful walks through the morning mist.",
  },
  {
    time: "Mid-day",
    body: "Hands-on Immersion — losing ourselves in tactile learning, from the art of bamboo building to sitting at the base of living root bridges.",
  },
  {
    time: "Afternoon",
    body: "Skill-Sharing & Discovery — time spent foraging along forest paths, learning traditional arts, or practicing basic survival skills.",
  },
  {
    time: "Evening",
    body: "Storytelling & Connection — gathering close around the warmth of the fire for oral traditions, cooperative cooking, and shared, slow meals.",
  },
];

const living = [
  {
    title: "Home-Stays",
    body: "Sleeping in traditional village dwellings or shared community camps designed to leave a minimal, gentle footprint on the earth.",
  },
  {
    title: "Communal Living",
    body: "Sharing the daily responsibilities of meals, firewood, and site care, breathing life into the truth of &lsquo;I am because we are.&rsquo;",
  },
  {
    title: "Digital Detox",
    body: "Stepping away from screens and limited connectivity to invite deep listening, sensory awareness, and genuine presence.",
  },
];

const packing = [
  {
    label: "I",
    title: "Essential Gear",
    items: [
      ["Footwear", "Sturdy, waterproof hiking boots with excellent grip — essential for slippery root bridges and forest trails. Consider strapped sandals for use within the village."],
      ["Rain Protection", "A high-quality, breathable raincoat or poncho. The Meghalayan monsoon is powerful; an umbrella is often insufficient for forest treks."],
      ["Backpack", "A waterproof daypack (20–30L) to carry your research tools, water, and rain gear during field trips."],
    ],
  },
  {
    label: "II",
    title: "Clothing — The Layering System",
    items: [
      ["Quick-Dry Fabrics", "Avoid heavy denim. Choose lightweight, moisture-wicking trousers and shirts that dry quickly in high humidity."],
      ["Warmth", "Even in summer, evenings in the hills can be cool. Pack one warm fleece or a light insulated jacket."],
      ["Cultural Respect", "While in the village, please dress modestly to respect local Khasi customs."],
    ],
  },
  {
    label: "III",
    title: "Learning & Research Tools",
    items: [
      ["Analog Tools", "A durable notebook and pens for field notes, sketching, and reflecting on regenerative design."],
      ["Documentation", "Camera, sound recorders or smartphone for capturing your experiences, along with a waterproof dry-bag to protect them."],
      ["Power", "A high-capacity power bank — electricity in remote villages can be intermittent."],
    ],
  },
  {
    label: "IV",
    title: "Health & Personal Care",
    items: [
      ["Eco-Friendly Toiletries", "To protect the local water systems, please bring biodegradable soap, shampoo, and toothpaste."],
      ["Protection", "High-strength insect repellent (specifically for leeches and mosquitoes) and reef-safe sunscreen."],
      ["Hydration", "A reusable water bottle (at least 1L). We will provide filtered water at the base."],
    ],
  },
];

export default function PreparationPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/preparation/01.webp" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/55" />
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-40 hero-content">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            What to Expect & Preparation
          </div>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl">
            Your journey into the forest
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
            Stepping into The Forest School is an invitation to leave &lsquo;clock time&rsquo;
            behind and drop into the older, slower rhythms of the natural world. Here is a
            glimpse of the sensory, immersive experience awaiting you in the hills of
            Meghalaya.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="font-serif text-3xl md:text-4xl">The daily rhythm</h2>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            Balanced active learning with quiet reflection.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {rhythm.map((r) => (
            <Card key={r.time} className="p-6">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                {r.time}
              </div>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {r.body}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-8 font-serif text-3xl md:text-4xl">Living & accommodations</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {living.map((l) => (
            <Card key={l.title} className="p-6">
              <div className="font-serif text-xl">{l.title}</div>
              <p
                className="mt-3 text-sm leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: l.body }}
              />
            </Card>
          ))}
        </div>
        <Card className="mt-8 border-primary/30 bg-primary/5 p-6">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Environment & Physicality
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Meghalaya&rsquo;s terrain is breathtakingly beautiful, yet rugged and demanding.
            Prepare to walk on uneven, muddy trails, climb slick stones, and engage your
            body fully with the weather and the landscape. While we hold your safety and
            comfort with care, expect a true, unshielded immersion into the vibrant,
            unpredictable spirit of the forest.
          </p>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10">
          <div className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Preparation
          </div>
          <h2 className="font-serif text-3xl md:text-4xl">
            Packing for the East Khasi Hills
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            The terrain is beautiful but demanding, especially during the monsoon. Pack
            light, durable, and weather-appropriate gear so you can focus on co-learning
            and co-creation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {packing.map((p) => (
            <Card key={p.title} className="p-6">
              <h3 className="font-serif text-xl">{p.title}</h3>
              <ul className="mt-4">
                {p.items.map(([k, v], idx) => (
                  <li key={k} className="text-base">
                    {idx > 0 && <Separator className="my-3" />}
                    <span className="font-medium text-foreground">{k}.</span>{" "}
                    <span className="text-muted-foreground">{v}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Beyond physical gear, we ask that you bring an open mind and a spirit of
          receptivity. The Forest School is an immersive experience where the most
          important &lsquo;tool&rsquo; you carry is your willingness to engage with the
          language of place.
        </p>
      </section>
    </div>
  );
}
