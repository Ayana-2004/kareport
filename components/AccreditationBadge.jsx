// Shared accreditation badge icons — custom-designed marks, NOT the official
// trademarked logos of JCI / NABH / Kerala Tourism's AYUSH or dental bodies.
// Each keeps the same ribbon-seal silhouette so the four read as one family,
// with a distinct inner icon + accent color per accreditation. Swap in the
// real official marks later only once usage rights are confirmed with each
// certifying body.

const COLORS = {
  JCI: { ring: '#0F3D3E', accent: '#153F3B' },
  NABH: { ring: '#C68A2E', accent: '#B57A22' },
  AYUSH: { ring: '#4B7A5A', accent: '#3B6349' },
  OHSP: { ring: '#2E6B8A', accent: '#245368' },
};

function InnerMark({ code }) {
  switch (code) {
    case 'JCI':
      // Globe — international standard
      return (
        <g stroke="#FFFFFF" strokeWidth="1.6" fill="none" strokeLinecap="round">
          <circle cx="24" cy="18" r="7.5" />
          <ellipse cx="24" cy="18" rx="3.2" ry="7.5" />
          <path d="M16.7 18h14.6M17.8 13.5h12.4M17.8 22.5h12.4" />
        </g>
      );
    case 'NABH':
      // Shield — national quality mark
      return (
        <path
          d="M24 10.5l6.5 2.4v5.4c0 4.3-2.7 6.9-6.5 8.2-3.8-1.3-6.5-3.9-6.5-8.2v-5.4L24 10.5z"
          fill="#FFFFFF"
        />
      );
    case 'AYUSH':
      // Leaf — traditional-medicine / Ayurveda
      return (
        <path
          d="M24 10c5 1 8 5 8 10-5 1-10-1-11-6-1 4 1 8 4 10-6 0-10-4-10-9 0-4 4-6 9-5z"
          fill="#FFFFFF"
        />
      );
    case 'OHSP':
      // Tooth — dental care
      return (
        <path
          d="M24 11c3 0 5 1.6 5 4.4 0 2.2-.7 3-1.1 5.6-.3 2-.5 4.6-1.9 4.6-1.3 0-1.3-3-2-3s-.7 3-2 3c-1.4 0-1.6-2.6-1.9-4.6-.4-2.6-1.1-3.4-1.1-5.6 0-2.8 2-4.4 5-4.4z"
          fill="#FFFFFF"
        />
      );
    default:
      return null;
  }
}

export function AccreditationBadge({ code, className = 'h-10 w-10' }) {
  const { ring, accent } = COLORS[code] || COLORS.NABH;
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="18" r="12" fill={ring} />
      <path d="M15 28l-4 14 13-6 13 6-4-14" fill={accent} />
      <InnerMark code={code} />
    </svg>
  );
}

// Compact inline chip for reuse where space is tight (e.g. doctor profile cards).
export function AccreditationChip({ code, className = '' }) {
  const { ring } = COLORS[code] || COLORS.NABH;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-paper px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wide ${className}`}
      style={{ color: ring }}
    >
      <AccreditationBadge code={code} className="h-4 w-4" />
      {code}
    </span>
  );
}
