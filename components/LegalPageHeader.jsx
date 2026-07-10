// Shared banner for legal pages (Privacy Policy, Terms) — reuses the same
// teal hero band + bottom strip pattern as the homepage Hero, so these pages
// read as part of the same site rather than a bolted-on generic page.
export default function LegalPageHeader({ eyebrow = 'Legal', title, lastUpdated }) {
  return (
    <section className="relative overflow-hidden bg-teal text-paper">
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-14 pt-20">
        <div className="font-mono text-xs uppercase tracking-widest text-[#BFD8C8]">{eyebrow}</div>
        <h1 className="mt-4 max-w-[20ch] font-display text-4xl font-semibold leading-tight text-[#FBF7ED] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 font-mono text-xs text-[#AFC7B7]">Last updated: {lastUpdated}</p>
      </div>
      <div className="border-t border-paper/15 bg-teal-2">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <a href="/" className="font-mono text-xs text-[#CBDDD2] hover:text-paper">
            ← Back to home
          </a>
        </div>
      </div>
    </section>
  );
}
