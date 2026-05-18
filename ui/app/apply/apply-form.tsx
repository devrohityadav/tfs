"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { submitApplication, type ApplyState } from "./actions";

const disciplines = [
  "Student",
  "Artist",
  "Designer",
  "Researcher",
  "Practitioner",
  "Other",
];

const commitments = [
  "I am prepared for physical forest treks and steep terrain.",
  "I am comfortable with basic communal living and the use of Indian-style toilets.",
  "I will respect digital minimalism during the immersion.",
  "I will use only biodegradable toiletries to protect local watersheds.",
];

export function ApplyForm() {
  const [state, formAction] = useActionState<ApplyState, FormData>(
    submitApplication,
    null,
  );

  return (
    <form action={formAction} className="space-y-10">
      <Field label="Full Name">
        <input
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-border bg-card/60 px-4 py-3 text-base outline-none focus:border-primary"
        />
      </Field>
      <Field label="Email Address">
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-border bg-card/60 px-4 py-3 text-base outline-none focus:border-primary"
        />
      </Field>
      <Field label="Primary Discipline">
        <div className="flex flex-wrap gap-2">
          {disciplines.map((d) => (
            <label
              key={d}
              className="cursor-pointer rounded-full border border-border bg-card/40 px-4 py-2 text-sm text-muted-foreground transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:text-primary"
            >
              <input
                type="radio"
                name="discipline"
                value={d}
                className="hidden"
              />
              {d}
            </label>
          ))}
        </div>
      </Field>
      <Field
        label="Statement of Intent"
        hint="What draws you to the intersection of art, ecology, and indigenous wisdom?"
      >
        <textarea
          name="intent"
          rows={5}
          required
          className="w-full rounded-md border border-border bg-card/60 px-4 py-3 text-base outline-none focus:border-primary"
        />
      </Field>
      <Field
        label="Co-Creation"
        hint="How do you see yourself co-learning and co-creating in the Forest School ecosystem?"
      >
        <textarea
          name="cocreate"
          rows={5}
          required
          className="w-full rounded-md border border-border bg-card/60 px-4 py-3 text-base outline-none focus:border-primary"
        />
      </Field>
      <Field
        label="Reflections"
        hint="Briefly share your thoughts on the limitations of the industrial &lsquo;factory model&rsquo; of education."
      >
        <textarea
          name="reflections"
          rows={5}
          className="w-full rounded-md border border-border bg-card/60 px-4 py-3 text-base outline-none focus:border-primary"
        />
      </Field>

      <Card className="border-primary/20 bg-primary/5 p-6">
        <div className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
          Commitment Checklist
        </div>
        <ul className="space-y-3">
          {commitments.map((c) => (
            <li key={c} className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                name="commitments"
                value={c}
                className="mt-1 h-4 w-4 accent-primary"
              />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Card>

      <SubmitButton />

      {state && (
        <div
          className={`rounded-md border px-5 py-4 text-sm ${
            state.ok
              ? "border-primary/40 bg-primary/10 text-primary"
              : "border-destructive/40 bg-destructive/10 text-destructive"
          }`}
        >
          {state.message}
        </div>
      )}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full rounded-full"
    >
      {pending ? "Sending…" : "Submit Application"}
    </Button>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 text-xs uppercase tracking-[0.2em] text-primary">
        {label}
      </div>
      {hint && (
        <p
          className="mb-3 text-sm text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: hint }}
        />
      )}
      {children}
    </div>
  );
}
