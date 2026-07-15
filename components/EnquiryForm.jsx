'use client';
// This directive is the key difference from every other component so far.
// By default, everything in the Next.js App Router renders on the SERVER —
// there's no React state, no onClick, no useState available.
// The moment a component needs interactivity (form state, event handlers,
// building a link after a click), it must opt into the CLIENT with 'use client'.
// Header, Hero, Features etc. don't need this because they're static markup.

import { useState } from 'react';

const WHATSAPP_NUMBER = '919400028226'; // KarePort's team — India country code + number

const TREATMENT_CATEGORIES = ['Modern Medicine &  Advance surgery','Ayurveda', 'Dentistry', 'Other'];

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function isValidPhone(v) {
  return /^[0-9+()\-\s]{7,}$/.test(v);
}

export default function EnquiryForm() {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    treatmentCategory: '',
    comments: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsappHref, setWhatsappHref] = useState('#');

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const nameOk = values.fullName.trim().length > 1;
    const emailOk = isValidEmail(values.email.trim());
    const phoneOk = isValidPhone(values.phone.trim());
    const treatmentCategoryOk = values.treatmentCategory.trim().length > 0;

    setErrors({
      fullName: !nameOk,
      email: !emailOk,
      phone: !phoneOk,
      treatmentCategory: !treatmentCategoryOk,
    });
    if (!nameOk || !emailOk || !phoneOk || !treatmentCategoryOk) return;

    const message =
      `Hello KarePort Team,\n\n` +
      `I have submitted an enquiry through the website.\n\n` +
      `Name: ${values.fullName}\n` +
      `Email: ${values.email}\n` +
      `Phone: ${values.phone}\n` +
      `Treatment Category: ${values.treatmentCategory}\n\n` +
      `Additional Requirements:\n${values.comments.trim() || 'None'}\n\n` +
      `Please contact me regarding my treatment enquiry.\n\n` +
      `Thank you.`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp synchronously, still inside the click's user-activation
    // window — awaiting the fetch below first would let some browsers
    // (Safari/iOS in particular) treat the later window.open as a blocked
    // popup instead of a user-initiated one.
    window.open(waUrl, '_blank', 'noopener');
    setWhatsappHref(waUrl);
    setSubmitted(true);

    // Best-effort: admin + user confirmation emails run server-side. The
    // client has already moved on to the confirmation screen and WhatsApp
    // above, whether or not this succeeds.
    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
    } catch (err) {
      console.error('Enquiry notification request failed:', err);
    }
  }

  const inputClass = (hasError) =>
    `w-full rounded-sm border px-3.5 py-3 text-base ${
      hasError ? 'border-[#9A3B2A]' : 'border-ink/25'
    } bg-paper focus:outline-none focus:ring-2 focus:ring-gold`;

  if (submitted) {
    // The "short reply mail" preview, shown right after a valid submission.
    return (
      <div className="rounded-[3px] border border-ink/25 bg-paper p-9">
        <div className="mb-4 flex items-center justify-between border-b border-ink/10 pb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-leaf">KarePort Desk</span>
          <span className="font-mono text-xs text-[#5B6B5F]">Just now</span>
        </div>
        <div className="mb-1 font-mono text-xs text-[#5B6B5F]">To: {values.email}</div>
        <div className="mb-4 font-display text-lg font-semibold">We&apos;ve received your enquiry</div>
        <p className="mb-3 text-[#2A362D]">Hi {values.fullName.split(' ')[0]},</p>
        <p className="mb-3 text-[#2A362D]">
          Your response has been securely transmitted to the KarePort desk. A dedicated
          clinical coordinator will review your records and will contact you within 48 hours.
        </p>
        <p className="mt-4 text-sm text-[#3B4A3F]">— Team KarePort</p>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener"
          className="mt-6 block rounded-sm bg-[#1E5E3A] py-4 text-center font-mono text-sm text-paper hover:bg-[#174A2E]"
        >
          Continue to WhatsApp with KarePort&apos;s team →
        </a>
        <p className="mt-3 font-mono text-xs text-[#5B6B5F]">
          WhatsApp should have opened automatically in a new tab with your details filled in —
          if it didn&apos;t, use the button above.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[3px] border border-ink/25 bg-paper p-9">
      <div className="mb-5">
        <label htmlFor="fullName" className="mb-2 block font-mono text-xs uppercase tracking-wide text-leaf">
          Full name
        </label>
        <input
          id="fullName"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          placeholder="e.g. Anjali Menon"
          className={inputClass(errors.fullName)}
        />
        {errors.fullName && <p className="mt-1.5 text-sm text-[#9A3B2A]">Please enter your full name.</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wide text-leaf">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputClass(errors.email)}
        />
        {errors.email && <p className="mt-1.5 text-sm text-[#9A3B2A]">Please enter a valid email address.</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="phone" className="mb-2 block font-mono text-xs uppercase tracking-wide text-leaf">
          Phone (with country code)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          placeholder="e.g. +971 50 123 4567"
          className={inputClass(errors.phone)}
        />
        {errors.phone && <p className="mt-1.5 text-sm text-[#9A3B2A]">Please enter a valid phone number.</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="treatmentCategory" className="mb-2 block font-mono text-xs uppercase tracking-wide text-leaf">
          Treatment category
        </label>
        <select
          id="treatmentCategory"
          name="treatmentCategory"
          value={values.treatmentCategory}
          onChange={handleChange}
          className={inputClass(errors.treatmentCategory)}
        >
          <option value="" disabled>
            Select a category
          </option>
          {TREATMENT_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.treatmentCategory && (
          <p className="mt-1.5 text-sm text-[#9A3B2A]">Please select a treatment category.</p>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="comments" className="mb-2 block font-mono text-xs uppercase tracking-wide text-leaf">
          Additional requirements or comments (optional)
        </label>
        <textarea
          id="comments"
          name="comments"
          value={values.comments}
          onChange={handleChange}
          rows={3}
          placeholder="Any specific conditions, dates, or preferences we should know about"
          className={inputClass(false)}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-teal py-4 font-mono text-sm tracking-wide text-paper hover:bg-teal-2"
      >
        Send enquiry
      </button>
      <p className="mt-4 text-xs text-[#5B6B5F]">
        Your information goes directly to the KarePort clinical desk and managed under strict professional confidentiality.
      </p>
    </form>
  );
}
