// Official accreditation marks, supplied as image files under /public.
const LOGOS = {
  JCI: '/logo_jci.jpg',
  NABH: '/nabh-logo.png',
  AYUSH: '/Ayush.png',
};

const RING_COLORS = {
  JCI: '#0F3D3E',
  NABH: '#C68A2E',
  AYUSH: '#4B7A5A',
};

export function AccreditationBadge({ code, className = 'h-10 w-10' }) {
  const src = LOGOS[code];
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={`${code} accreditation`} className={`${className} rounded-full object-contain bg-white`} />
  );
}

// Compact inline chip for reuse where space is tight (e.g. doctor profile cards).
export function AccreditationChip({ code, className = '' }) {
  const ring = RING_COLORS[code] || RING_COLORS.NABH;
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
