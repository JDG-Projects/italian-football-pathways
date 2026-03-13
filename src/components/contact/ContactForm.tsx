"use client";

import { useState } from "react";
import { contactPage } from "@/lib/content";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const { form } = contactPage;
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!data.name.trim()) e.name = form.errors.nameRequired;
    if (!data.email.trim()) e.email = form.errors.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = form.errors.emailInvalid;
    if (!data.message.trim()) e.message = form.errors.messageRequired;
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setData({ ...data, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-green-accent/20 bg-green-accent/5 p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-accent/10">
          <svg className="h-7 w-7 text-green-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-display text-lg font-bold text-navy">
          {form.success}
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-sm border border-cream-dark bg-white px-4 py-3 text-sm text-navy outline-none transition-all duration-300 placeholder:text-warm-gray-light focus:border-gold focus:shadow-sm focus:shadow-gold/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-navy">
          {form.nameLabel}
        </label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder={form.namePlaceholder}
          className={inputClass}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-accent">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-navy">
          {form.emailLabel}
        </label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder={form.emailPlaceholder}
          className={inputClass}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-red-accent">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-navy">
          {form.phoneLabel}
        </label>
        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          placeholder={form.phonePlaceholder}
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-navy">
          {form.messageLabel}
        </label>
        <textarea
          name="message"
          value={data.message}
          onChange={handleChange}
          placeholder={form.messagePlaceholder}
          rows={5}
          className={inputClass}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-accent">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="group w-full rounded-sm bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
      >
        {form.submit}
        <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}
