import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { business } from "../lib/business";

type FormState = {
  name: string;
  email: string;
  phone: string;
  dates: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  dates: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please add your name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.dates ? `Trip dates: ${form.dates}` : null,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${business.email}?subject=${encodeURIComponent("Stayli inquiry — Poconos getaway")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSubmitted(true);
    setForm(initial);
  };

  if (submitted) {
    return (
      <div
        className="contact-success flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-[#065087]/20 bg-gradient-to-br from-[#065087]/8 to-white px-8 py-12 text-center"
        role="status"
      >
        <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#065087] text-white">
          <Check className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h3 className="text-xl font-medium tracking-tight text-black">
          You&apos;re on our list
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-600">
          Your email app should open with your message ready to send. Our Poconos
          team typically replies within one business day.
        </p>
        <button
          type="button"
          className="mt-8 text-sm font-medium text-[#065087] underline-offset-4 hover:underline"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-neutral-400 focus:border-[#065087]/50 focus:ring-2 focus:ring-[#065087]/15";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
            Name
          </span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
            placeholder="Jordan Lee"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
            Email
          </span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
            Phone <span className="normal-case text-neutral-400">(optional)</span>
          </span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
            placeholder="(570) 555-0142"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
            Trip dates
          </span>
          <input
            type="text"
            name="dates"
            value={form.dates}
            onChange={(e) => update("dates", e.target.value)}
            className={inputClass}
            placeholder="Aug 12 – 18, 2026"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${inputClass} resize-y min-h-[120px]`}
          placeholder="Tell us about your ideal Poconos getaway…"
        />
      </label>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-8 py-3.5 text-sm font-medium text-white transition hover:bg-[#065087] sm:w-auto"
      >
        Send message
        <Send className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
      </button>
    </form>
  );
}
