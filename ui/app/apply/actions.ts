"use server";

import { Resend } from "resend";

export type ApplyState = {
  ok: boolean;
  message: string;
} | null;

const TO = process.env.APPLY_TO_EMAIL || "dev.yadav.rohit@gmail.com";
const FROM = process.env.APPLY_FROM_EMAIL || "Forest School <onboarding@resend.dev>";

export async function submitApplication(
  _prev: ApplyState,
  formData: FormData,
): Promise<ApplyState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const discipline = String(formData.get("discipline") || "").trim();
  const intent = String(formData.get("intent") || "").trim();
  const cocreate = String(formData.get("cocreate") || "").trim();
  const reflections = String(formData.get("reflections") || "").trim();
  const commitments = formData.getAll("commitments").map(String);

  if (!name || !email || !intent || !cocreate) {
    return { ok: false, message: "Please fill in name, email, intent, and co-creation." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY missing — application logged but not emailed.");
    console.log({ name, email, discipline, intent, cocreate, reflections, commitments });
    return {
      ok: false,
      message: "Email service is not configured. Set RESEND_API_KEY in .env.local.",
    };
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>New Forest School application</h2>
    <p><strong>Name:</strong> ${escape(name)}</p>
    <p><strong>Email:</strong> ${escape(email)}</p>
    <p><strong>Discipline:</strong> ${escape(discipline || "—")}</p>
    <h3>Statement of Intent</h3>
    <p>${escape(intent).replace(/\n/g, "<br>")}</p>
    <h3>Co-Creation</h3>
    <p>${escape(cocreate).replace(/\n/g, "<br>")}</p>
    <h3>Reflections</h3>
    <p>${escape(reflections || "—").replace(/\n/g, "<br>")}</p>
    <h3>Commitments confirmed</h3>
    <ul>${commitments.map((c) => `<li>${escape(c)}</li>`).join("")}</ul>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Forest School application — ${name}`,
      html,
    });
    if (error) return { ok: false, message: error.message || "Failed to send." };
    return { ok: true, message: "Application received. We will be in touch soon." };
  } catch (e) {
    return { ok: false, message: e instanceof Error ? e.message : "Failed to send." };
  }
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
