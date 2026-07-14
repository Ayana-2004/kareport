// Keeping this as a plain data array (instead of hardcoding 6 blocks of JSX)
// means adding a 7th feature later is a one-line change, not a copy-paste job.
const FEATURES = [
  { n: '01', title: '1-on-1 doctor guidance', body: 'Receive direct guidance from an experienced panel of doctors from your very first enquiry.' },
  { n: '02', title: 'Integrated care plan', body: 'From arrival to departure, every step of your journey is coordinated by our clinical team.' },
  { n: '03', title: 'Hospital mapping & appointments', body: 'Matched with the hospital and specialist best suited to your condition and treatment needs.' },
  { n: '04', title: 'Integrated dental programs', body: 'Advanced dental care, seamlessly integrated into your personalised treatment plan.' },
  { n: '05', title: 'Integrated Ayurveda programs', body: 'Panchakarma and Ayurvedic therapies are incorporated where they complement your treatment and recovery.' },
  { n: '06', title: 'Enquiry to Recovery', body: 'From nutrition planning to post-treatment follow-up, every stage of your recovery is coordinated under one personalised care plan.' },
];

export default function Features() {
  return (
    <section id="services" className="bg-paper-2 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-[20ch] font-display text-3xl font-semibold sm:text-4xl">
          How KarePort supports your journey
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
