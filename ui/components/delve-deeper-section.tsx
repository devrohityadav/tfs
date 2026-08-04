"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function DelveDeeperSection({ questions }: { questions: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-12">
      <div className="text-center">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-8 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
        >
          Delve Deeper
          <ChevronDown
            className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <div
        className="grid transition-[grid-template-rows] duration-500 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="mx-auto mt-10 max-w-3xl">
            <h2 className="text-center font-serif text-2xl md:text-3xl">
              Some of the questions the program asks
            </h2>
            <ul className="mt-8 space-y-6">
              {questions.map((q) => (
                <li
                  key={q}
                  className="border-l-2 border-primary/40 pl-4 text-base leading-relaxed text-foreground/90"
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
