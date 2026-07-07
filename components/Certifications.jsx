const CERTS = [
  { eyebrow: 'Allopathy', title: 'Surgery & specialist care', codes: ['JCI', 'NABH'] },
  { eyebrow: 'Ayurveda', title: 'Panchakarma & recovery', codes: ['Ayush Centre', 'Green Leaf', 'NABH'] },
  { eyebrow: 'Dentistry', title: 'Advanced dental care', codes: ['NABH', 'OHSP Section B'] },
];

export default function Certifications() {
  return (
    <section className="bg-teal py-20 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <div className="font-mono text-xs uppercase tracking-widest text-[#BFD8C8]">
          Empanelled hospitals
        </div>
        <h2 className="mt-4 max-w-[22ch] font-display text-2xl font-semibold text-[#FBF7ED] sm:text-3xl">
          All partner hospitals are nationally recognised & certified.
        </h2>
        <p className="mt-3 max-w-[60ch] text-[#BFD8C8]">
          Each hospital in the KarePort network is chosen for what it&apos;s specifically
          known for — and certified accordingly.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CERTS.map((c) => (
            <div key={c.eyebrow} className="rounded-sm border border-paper/20 bg-paper/5 p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-[#D8B87A]">
                {c.eyebrow}
              </div>
              <h3 className="mt-2 font-display text-lg font-semibold text-[#FBF7ED]">
                {c.title}
              </h3>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {c.codes.map((code) => (
                  <span
                    key={code}
                    className="rounded-sm border border-paper/30 px-2.5 py-1 font-mono text-xs text-paper-2"
                  >
                    {code}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
