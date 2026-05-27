"use client";

import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
  const nameId = useId();
  const emailId = useId();
  const intentId = useId();
  const cocreateId = useId();
  const reflectionsId = useId();

  return (
    <form action={formAction} className="space-y-10">
      <Field id={nameId} label="Full Name">
        <Input id={nameId} name="name" type="text" required />
      </Field>

      <Field id={emailId} label="Email Address">
        <Input id={emailId} name="email" type="email" required />
      </Field>

      <Field label="Primary Discipline">
        <RadioGroup
          name="discipline"
          className="flex flex-wrap gap-2"
        >
          {disciplines.map((d) => {
            const id = `${d}-discipline`;
            return (
              <div key={d} className="relative">
                <RadioGroupItem
                  id={id}
                  value={d}
                  className="peer absolute inset-0 size-full opacity-0"
                />
                <Label
                  htmlFor={id}
                  className="cursor-pointer rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors peer-data-[checked]:border-primary peer-data-[checked]:bg-primary/10 peer-data-[checked]:text-primary"
                >
                  {d}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      </Field>

      <Field
        id={intentId}
        label="Statement of Intent"
        hint="What draws you to the intersection of art, ecology, and indigenous wisdom?"
      >
        <Textarea id={intentId} name="intent" rows={5} required />
      </Field>

      <Field
        id={cocreateId}
        label="Co-Creation"
        hint="How do you see yourself co-learning and co-creating in the Forest School ecosystem?"
      >
        <Textarea id={cocreateId} name="cocreate" rows={5} required />
      </Field>

      <Field
        id={reflectionsId}
        label="Reflections"
        hint="Briefly share your thoughts on the limitations of the industrial &lsquo;factory model&rsquo; of education."
      >
        <Textarea id={reflectionsId} name="reflections" rows={5} />
      </Field>

      <Card className="border-primary/20 bg-primary/5 p-6">
        <div className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
          Commitment Checklist
        </div>
        <ul className="space-y-3">
          {commitments.map((c, i) => {
            const id = `commitment-${i}`;
            return (
              <li key={c} className="flex items-center gap-3 text-sm leading-none">
                <Checkbox
                  id={id}
                  name="commitments"
                  value={c}
                />
                <Label htmlFor={id} className="cursor-pointer font-normal">
                  {c}
                </Label>
              </li>
            );
          })}
        </ul>
      </Card>

      <SubmitButton />

      {state && (
        <Alert
          variant={state.ok ? "default" : "destructive"}
          className={state.ok ? "border-primary/40 bg-primary/10 text-primary" : undefined}
        >
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
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
  id,
  label,
  hint,
  children,
}: {
  id?: string;
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="text-xs leading-none uppercase tracking-[0.2em] text-primary"
      >
        {label}
      </Label>
      {hint && (
        <p
          className="text-sm text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: hint }}
        />
      )}
      {children}
    </div>
  );
}
