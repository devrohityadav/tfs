import Image from "next/image";
import { ExpandableProfile } from "@/components/expandable-profile";

export const metadata = { title: "Team — The Forest School" };

const team = [
  {
    name: "Sonal Jain",
    role: "Founder & Lead Researcher",
    image: "/images/sonal.webp",
    expandLabel: "View Full Profile",
    intro:
      "Sonal Jain is an artist, researcher, and educator based in Meghalaya. Working at the intersection of art, ecology, and activism, her life's work spans social practice, natural farming, filmmaking, photography, curation, and writing. Her work is deeply rooted in immersive research, hybrid collaborative creation, the nurturing of alternative communal spaces, and experiential, open-ended pedagogies.",
    extra: {
      body: "Sonal is recognized for her experimental multimedia practice that explores politics, identity, and the environment. Her voice continues to shape how we understand our engagement with both human and more-than-human worlds, always seeking to reclaim a sense of aliveness and ecological healing. Her current focus centers on socially engaged art and the slow cultivation of regenerative design.",
      details: [
        {
          heading: "Key Projects & Foundations",
          items: [
            "Desire Machine Collective (Co-Founder, 2004) — internationally recognized for engaging complex socio-political landscapes.",
            "Periferry (Co-Initiator) — an alternative artist-led space and residency on a ferry barge docked on the Brahmaputra.",
            "deSchool — decolonial learning and community-based knowledge rooted in alternative worldviews of Northeast India.",
          ],
        },
        {
          heading: "Exhibitions",
          items: [
            "India Pavilion, 54th Venice Biennale (2011)",
            "Intense Proximity, 3rd La Triennale at Palais de Tokyo, Paris (2012)",
            "11th Shanghai Biennale (2016)",
            "Solomon R. Guggenheim Museum, New York (2012); New Museum (2013)",
            "Tate Modern, London (2012); British Museum (2016)",
          ],
        },
        {
          heading: "Major Acquisitions",
          items: [
            "Solomon R. Guggenheim Museum, New York",
            "Guggenheim Abu Dhabi",
            "QAGOMA — Queensland Art Gallery | Gallery of Modern Art",
          ],
        },
        {
          heading: "Grants & Fellowships",
          items: [
            "India Foundation for the Arts (IFA) — Museums are Closed at Night; Camera Praxis.",
            "Charles Wallace India Trust — residency at Gasworks, London, with the British Museum.",
            "Akademie Schloss Solitude — residency fellowship jury, Stuttgart.",
          ],
        },
        {
          heading: "Major Nominations",
          items: [
            "LUMA Award — alongside Jonas Mekas and Kenneth Anger.",
            "Visible Award — at Tate Liverpool, for Periferry.",
            "Prudential Eye Award — shortlisted, Singapore.",
            "Prix Pictet — nominated, 'Power' cycle; exhibited at the British Museum.",
          ],
        },
      ],
    },
  },
  {
    name: "Muthok Khongmawloh",
    role: "Community Leader, Meghalaya Cohort",
    image: "/images/muthok.webp",
    expandLabel: "View Educational Philosophy & Background",
    intro:
      "Muthok identifies as a 'lifelong seeker', prioritizing community-based knowledge over standard academic paths. His approach to education is grounded in the 'new knowledge society' — where innovative problem-solving is essential to prevent the waste of human resources.",
    extra: {
      quote:
        "I am someone who deeply cares about my community and actively seeks ways to inspire, guide, and uplift others, especially youth. I have a creative and thoughtful mind, blending culture, nature, and purpose into ideas that create meaningful impact, while continuing the journey as a lifelong seeker.",
      body: "Based in Pynursla, he leads community dialogues to ensure indigenous knowledge systems remain a vibrant, active part of local life, blending culture and nature to inspire the next generation.",
    },
  },
  {
    name: "Morningstar Khongthaw",
    role: "Lead Conservationist · Chairman, KKLLK Heritage Committee",
    image: "/images/morningstar.webp",
    expandLabel: "View Educational Philosophy & Background",
    intro:
      "Morningstar is a dedicated conservationist working to preserve the ancient living root bridges of Meghalaya. As a native of Rangthylliang village, he leads the Heritage Committee of the Khun Kur Longtrai Lai Kynthei (KKLLK), focusing on protecting these bio-architectural wonders.",
    extra: {
      details: [
        {
          heading: "Major Initiatives",
          items: [
            "Living Bridge Foundation — founded in 2018 to repair ancient structures and guide the growth of new bridges.",
            "Living Architecture — using traditional techniques to grow ladders, swings, and seating platforms that strengthen over centuries.",
            "Project 2047 — a vision to plant and nurture 30 new root bridges across Meghalaya by India's 100th year of independence.",
          ],
        },
        {
          heading: "Advocacy & Recognition",
          items: [
            "Key role in the nomination of Meghalaya's living root bridges for UNESCO World Heritage status.",
            "Hosted the Union Minister of DoNER in 2025 to spotlight these engineering marvels.",
            "Honoured at the 11th Balipara Foundation Awards for his unwavering commitment to indigenous heritage and ecological stewardship.",
          ],
        },
      ],
    },
  },
];

export default function TeamPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/team.webp" alt="" fill className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/55" />
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-40 hero-content">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Meet the Team
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            The Guardians &amp; Guides
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
            Founders, conservationists, and community leaders who shape the school
            through art, ecology, and indigenous practice.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-28 px-6 py-24">
        {team.map((m) => (
          <ExpandableProfile key={m.name} {...m} />
        ))}
      </section>
    </div>
  );
}
