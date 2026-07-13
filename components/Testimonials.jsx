/**
 * Testimonials.jsx
 *
 * Drop this component into your Next.js project (components/Testimonials.jsx)
 * and render it wherever you want patient stories to appear — a natural spot is
 * right after "Building trust, transparently" and before the enquiry form.
 *
 * import Testimonials from "@/components/Testimonials";
 * ...
 * <Testimonials testimonials={testimonials} />
 *
 * Colors below use your existing teal palette (#028090 / #00A896 / #073B4C / #F4A620).
 * Swap the hex values in the `theme` object if your actual tokens differ slightly —
 * everything else (layout, spacing, copy) is theme-agnostic.
 *
 * NOTE: `defaultTestimonials` below currently holds two placeholder stories —
 * swap them for verified patient quotes as real journeys complete. Set the
 * array back to [] to fall back to the "coming soon" state.
 *
 * Expected shape of each item in the testimonials array:
 * {
 *   name: "Aisha R.",
 *   location: "Dubai, UAE",
 *   treatment: "Cardiac Surgery",
 *   quote: "The coordination made everything feel effortless.",
 *   rating: 5, // optional, 1-5
 * }
 */

const theme = {
  teal: "#028090",
  seafoam: "#00A896",
  tealDark: "#073B4C",
  gold: "#F4A620",
  tealTint: "#E8F6F4",
};

// Placeholder testimonials until real patient stories are supplied —
// replace with verified quotes as each journey completes.
const defaultTestimonials = [
  {
    name: 'Fatima A.',
    location: 'Dubai, UAE',
    treatment: 'General Surgery',
    quote:
      "From the first WhatsApp message to being discharged, KarePort's team coordinated every appointment. I never once felt like I was navigating a foreign hospital alone.",
    rating: 5,
  },
  {
    name: 'Yusuf M.',
    location: 'Muscat, Oman',
    treatment: 'Dental Restoration',
    quote:
      'The transparency was what stood out — clear costs upfront, a doctor who explained every step, and a recovery plan that fit around my travel dates.',
    rating: 5,
  },
];

function Stars({ rating = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill={i < rating ? theme.gold : "#E2E8F0"}
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  const initial = t.name.trim().charAt(0).toUpperCase();
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_10px_30px_-12px_rgba(7,59,76,0.15)] ring-1 ring-black/5">
      <div>
        <svg viewBox="0 0 32 24" className="mb-4 h-8 w-8" fill={theme.tealTint}>
          <path d="M9.4 0C4.1 2.9 0 8.6 0 14.5 0 19.7 3.4 24 8.6 24c4 0 7-3.1 7-6.9 0-3.6-2.6-6.4-6-6.4-.6 0-1.1.1-1.6.2C8.6 6.9 11.4 3.4 15.6 1.4L9.4 0zm17 0c-5.3 2.9-9.4 8.6-9.4 14.5 0 5.2 3.4 9.5 8.6 9.5 4 0 7-3.1 7-6.9 0-3.6-2.6-6.4-6-6.4-.6 0-1.1.1-1.6.2C25.6 6.9 28.4 3.4 32.6 1.4L26.4 0z" />
        </svg>
        {t.rating ? (
          <div className="mb-3">
            <Stars rating={t.rating} />
          </div>
        ) : null}
        <p className="text-[15px] leading-relaxed text-slate-700">{t.quote}</p>
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: theme.teal }}
          aria-hidden
        >
          {initial}
        </div>
        <div>
          <div className="text-sm font-semibold" style={{ color: theme.tealDark }}>
            {t.name}
          </div>
          <div className="text-xs text-slate-500">
            {t.location} · {t.treatment}
          </div>
        </div>
      </div>
    </div>
  );
}

function ComingSoon() {
  return (
    <div
      className="mx-auto max-w-2xl rounded-2xl border border-dashed p-10 text-center"
      style={{ borderColor: theme.seafoam, backgroundColor: theme.tealTint }}
    >
      <div
        className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
        style={{ backgroundColor: theme.teal }}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2zm0-4h-2V7h2z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold" style={{ color: theme.tealDark }}>
        Patient stories, coming soon
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
        We publish testimonials only once a patient's journey is complete —
        so what you read here will always be real. The first stories go live
        as our earliest cases finish treatment and recovery.
      </p>
    </div>
  );
}

export default function Testimonials({ testimonials = defaultTestimonials }) {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section
      id="testimonials"
      className="mx-auto max-w-6xl px-6 py-[104px]"
      aria-labelledby="testimonials-heading"
    >
      <div className="mb-12 text-center">
        <div
          className="mb-3 inline-block text-xs font-semibold uppercase tracking-wide"
          style={{ color: theme.seafoam }}
        >
          Patient stories
        </div>
        <h2
          id="testimonials-heading"
          className="text-3xl font-bold sm:text-4xl"
          style={{ color: theme.tealDark }}
        >
          What patients say about their journey
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Real experiences from people who trusted KarePort with their care —
          published only once their journey is complete.
        </p>
      </div>

      {hasTestimonials ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard t={t} key={i} />
          ))}
        </div>
      ) : (
        <ComingSoon />
      )}
    </section>
  );
}