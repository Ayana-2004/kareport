export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-teal text-paper">
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

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-24">
        <div className="font-mono text-xs uppercase tracking-widest text-[#BFD8C8]">
          KarePort — The Gateway of Kerala
        </div>
        <h1 className="mt-6 max-w-[14ch] font-display text-4xl font-semibold leading-tight text-[#FBF7ED] sm:text-6xl">
          Bridging borders to Kerala&apos;s finest healthcare.
        </h1>
        <p className="mt-6 max-w-[52ch] text-lg text-[#D8E6DC]">
          KarePort connects you to world-class surgery, advanced dentistry and serene
          Ayurvedic recovery in Kerala — every step curated by a doctor-led panel, from
          your first enquiry to the day you go home well.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#enquiry"
            className="rounded-sm border border-gold bg-gold px-7 py-4 font-display text-base font-semibold text-[#1B1305] transition hover:bg-gold-2"
          >
            Start Your Enquiry →
          </a>
          <span className="text-sm text-[#AFC7B7]">
            A clinical coordinator responds within 48 hours.
          </span>
        </div>
      </div>

      <div className="border-t border-paper/15 bg-teal-2">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-7 px-6 py-5">
          <span className="flex-1 basis-56 font-display text-sm font-semibold text-[#CBDDD2]">
            Led by a Kerala-based doctors&apos; panel
          </span>
          <span className="flex-1 basis-56 font-mono text-xs text-[#CBDDD2]">
            Nationally certified partner hospitals
          </span>
          <span className="flex-1 basis-56 font-mono text-xs text-[#CBDDD2]">
            End-to-end encrypted record handling
          </span>
        </div>
      </div>
    </section>
  );
}
