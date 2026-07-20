"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function DelveDeeperDialog({ questions }: { questions: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-full border border-primary/50 px-8 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
      >
        Delve Deeper
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl md:text-3xl">
              Some of the questions the program asks
            </DialogTitle>
            <DialogDescription>
              Reflections that guide our practice and pedagogy.
            </DialogDescription>
          </DialogHeader>
          <ul className="space-y-4">
            {questions.map((q) => (
              <li key={q} className="text-base leading-relaxed text-foreground/90">
                {q}
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </>
  );
}
