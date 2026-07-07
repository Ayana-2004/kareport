// Keeping this as a plain data array (instead of hardcoding 6 blocks of JSX)
// means adding a 7th feature later is a one-line change, not a copy-paste job.
const FEATURES = [
  { n: '01', title: '1-on-1 doctor guidance', body: 'Direct supervision by an expert panel of doctors, from your first message onward.' },
  { n: '02', title: 'Integrated care plan', body: 'Pick-up to drop-off, every stage of your visit supervised by the doctors\u2019 panel.' },
  { n: '03', title: 'Hospital mapping & appointments', body: 'Matched to the hospital best known for your specific treatment and outcome.' },
  { n: '04', title: 'Integrated dental programs', body: 'Advanced dentistry, arranged and coordinated as part of your wider care plan.' },
  { n: '05', title: 'Integrated Ayurveda programs', body: 'Panchakarma and traditional recovery care, woven in where it supports treatment.' },
  { n: '06', title: 'Enquiry to recovery', body: 'Diet through to follow-up days \u2014 all under one plan crafted by the doctors\u2019 panel.' },
];

export default function Features() {
  return (
    <section className="bg-paper-2 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-[20ch] font-display text-3xl font-semibold sm:text-4xl">
          What KarePort takes care of
        </h2>

        <div className="mt-11 grid grid-cols-1 gap-px border border-ink/25 bg-ink/25 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.n} className="flex min-h-[168px] flex-col gap-2.5 bg-paper-2 p-7">
              <span className="font-mono text-xs text-gold-2">{f.n}</span>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-[#3B4A3F]">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
