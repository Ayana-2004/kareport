const STEPS = [
  { n: '01', title: 'You reach out', body: 'Share your name, age, sex, contact details, and any available medical records.' },
  { n: '02', title: 'A coordinator reviews your case', body: 'Within 48 hours, a dedicated clinical coordinator reviews your medical records and contacts you directly.' },
  { n: '03', title: 'Hospital & treatment matched', body: 'You\u2019re matched with the hospital and specialist best suited to your condition and treatment needs.' },
  { n: '04', title: 'Travel & stay arranged', body: 'Your visit is planned pick-up to drop-off, supervised throughout by the doctors\u2019 panel.' },
  { n: '05', title: 'Recovery, diet & follow-up', body: 'Care continues after treatment, with a diet and follow-up plan curated for you.' },
];

export default function Journey() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="font-mono text-xs uppercase tracking-widest text-leaf">The journey</div>
        <h2 className="mt-4 max-w-[22ch] font-display text-3xl font-semibold sm:text-4xl">
          From your first message to the day you&apos;re well.
        </h2>

        <div className="mt-12">
          {STEPS.map((s, i) => (
            <div key={s.n} className="grid grid-cols-[64px_1px_1fr] gap-x-6 pb-10 last:pb-0">
              <div className="font-display text-xl font-semibold text-leaf">{s.n}</div>
              <div className={`relative ${i === STEPS.length - 1 ? 'bg-transparent' : 'bg-ink/25'}`}>
                <div className="absolute left-1/2 top-1 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 max-w-[56ch] text-sm text-[#3B4A3F]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
