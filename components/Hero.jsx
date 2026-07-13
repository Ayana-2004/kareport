const TRUST_BADGES = [
  'Guided by a Kerala-based panel of doctors',
  'Nationally certified partner hospitals',
  'End-to-end encrypted record handling',
];

function TrustBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-[#CBDDD2]">
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 shrink-0 fill-gold">
        <path d="M10 1l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V4l7-3z" />
      </svg>
      {label}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-teal text-paper">
      {/* Subtle dot-grid texture across the whole section */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]" aria-hidden="true">
        <pattern id="hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#EACB86" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* Large faint healthcare motif — pulse line through a seal ring, echoing the logo */}
      <svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -right-16 -top-16 hidden h-[420px] w-[420px] opacity-[0.09] sm:block lg:h-[520px] lg:w-[520px]"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="170" fill="none" stroke="#FBF7ED" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="130" fill="none" stroke="#EACB86" strokeWidth="1.5" strokeDasharray="4 8" />
        <path
          d="M60 210 L130 210 L150 160 L180 260 L205 210 L230 210 L250 175 L270 210 L340 210"
          fill="none"
          stroke="#FBF7ED"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Signature route-line motif — pure SVG, animates once on load */}
      <svg
        viewBox="0 0 1120 480"
        preserveAspectRatio="xMidYMid meet"
        className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-50 sm:block"
      >
        <path
          d="M 40 90 C 300 40, 600 260, 1040 380"
          fill="none"
          stroke="#EACB86"
          strokeWidth="1.4"
          strokeDasharray="6 7"
          className="motion-safe:animate-[dash_3.2s_ease-out_forwards]"
        />
        <circle cx="40" cy="90" r="4" fill="#EACB86" />
        <circle cx="1040" cy="380" r="4" fill="#EACB86" />
        <text x="14" y="72" className="fill-[#D8E6DC] font-mono text-[11px]">YOU</text>
        <text x="990" y="410" className="fill-[#D8E6DC] font-mono text-[11px]">KERALA</text>
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-28 sm:pb-28 sm:pt-32">
        <div className="font-mono text-xs uppercase tracking-widest text-[#BFD8C8]">
          KarePort — The Gateway of Kerala
        </div>
        <h1 className="mt-7 max-w-[14ch] font-display text-4xl font-semibold leading-tight text-[#FBF7ED] sm:text-6xl">
          Bridging borders to Kerala&apos;s finest healthcare.
        </h1>
        <p className="mt-7 max-w-[52ch] text-lg text-[#D8E6DC]">
          KarePort connects you to world-class surgery, advanced dentistry and serene
          Ayurvedic recovery in Kerala — every step curated by a doctor-led panel, from
          your first enquiry to the day you go home well.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href="#enquiry"
            className="rounded-sm border border-gold bg-gold px-9 py-5 font-display text-lg font-semibold text-[#1B1305] shadow-[0_12px_32px_-8px_rgba(234,203,134,0.55)] transition hover:-translate-y-0.5 hover:bg-gold-2 hover:shadow-[0_16px_40px_-8px_rgba(234,203,134,0.65)]"
          >
            Start Your Enquiry →
          </a>
          <span className="text-sm text-[#AFC7B7]">
            Our clinical coordinator will respond within 48 hours.
          </span>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {TRUST_BADGES.map((label) => (
            <TrustBadge key={label} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
