"use client";

import Image from "next/image";
import { useState } from "react";

type DetailItem = string | { text: string; href: string };
type Detail = { heading: string; items: DetailItem[] };
type Extra = {
  quote?: string;
  body?: string;
  details?: Detail[];
};

export function ExpandableProfile({
  name,
  role,
  image,
  intro,
  expandLabel,
  extra,
}: {
  name: string;
  role: string;
  image: string;
  intro: string;
  expandLabel: string;
  extra: Extra;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="grid items-start gap-10 md:grid-cols-[1fr_2fr]">
      <div className="md:sticky md:top-28">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-card">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 768px) 320px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="mt-5 text-xs uppercase tracking-[0.3em] text-primary">{role}</div>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">{name}</h2>
      </div>
      <div className="space-y-6 pt-2">
        <p className="text-lg leading-relaxed text-muted-foreground">{intro}</p>

        <button
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          {open ? "Hide" : expandLabel}
          <span className="text-xs">{open ? "↑" : "↓"}</span>
        </button>

        {open && (
          <div className="space-y-6">
            {extra.quote && (
              <blockquote className="border-l-2 border-primary/60 pl-4 font-serif text-lg italic text-foreground/90">
                &ldquo;{extra.quote}&rdquo;
              </blockquote>
            )}
            {extra.body && (
              <p className="text-lg leading-relaxed text-muted-foreground">{extra.body}</p>
            )}
            {extra.details?.map((d) => (
              <div key={d.heading}>
                <div className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  {d.heading}
                </div>
                <ul className="space-y-2 text-base text-muted-foreground">
                  {d.items.map((it) => {
                    const text = typeof it === "string" ? it : it.text;
                    const href = typeof it === "string" ? undefined : it.href;
                    return (
                      <li key={text} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                        {href ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline underline-offset-2 hover:text-primary/80"
                          >
                            {text}
                          </a>
                        ) : (
                          <span>{text}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
