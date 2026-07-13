// A dedicated section that explains each accreditation mark in plain English,
// then shows which of them apply to each treatment category. International
// patients often don't know what these acronyms mean, so every code gets a
// one-line explainer rather than being buried in per-hospital badges.

import { AccreditationBadge, AccreditationChip } from './AccreditationBadge';

const theme = {
  teal: "#028090",
  seafoam: "#00A896",
  tealDark: "#073B4C",
  gold: "#F4A620",
  tealTint: "#E8F6F4",
};

const accreditations = [
  {
    code: "JCI",
    name: "Joint Commission International",
    blurb:
      "The same globally recognised gold-standard accreditation held by leading hospitals across the US, UK, and the Gulf, ensuring the highest standards of patient safety and clinical quality.",
  },
  {
    code: "NABH",
    name: "National Accreditation Board for Hospitals",
    blurb:
      "India's premier healthcare accreditation, awarded to hospitals that meet rigorous, independently audited standards of quality and patient safety.",
  },
  {
    code: "AYUSH",
    name: "AYUSH Certification",
    blurb:
      "Recognises Ayurveda and Panchakarma centres that meet India's recognised traditional medicine care standards.",
  },
  {
    code: "OHSP",
    name: "Oral Health Standards Programme",
    blurb:
      "Recognises advanced dental care facilities that meet rigorous standards for hygiene, patient safety, and clinical excellence.",
  },
];

const CATEGORIES = [
  { name: 'Modern Medicine', codes: ['JCI', 'NABH'] },
  { name: 'Ayurveda', codes: ['Ayur Diamond', 'Ayur Gold', 'Ayur Silver'] },
  { name: 'Dentistry', codes: ['NABH', 'JCI'] },
];

export default function Accreditations() {
  return (
    <section
      className="mx-auto max-w-6xl px-6 py-16"
      aria-labelledby="accreditations-heading"
    >
      <div className="mb-10 text-center">
        <div
          className="mb-3 inline-block text-xs font-semibold uppercase tracking-wide"
          style={{ color: theme.seafoam }}
        >
          Quality you can verify
        </div>
        <h2
          id="accreditations-heading"
          className="text-3xl font-bold sm:text-4xl"
          style={{ color: theme.tealDark }}
        >
          Backed by the accreditations that matter most
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Every hospital in the KarePort network is accredited to internationally and
          nationally recognised quality standards—not just self-claimed, but independently audited.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {accreditations.map((a) => (
          <div
            key={a.code}
            className="flex gap-5 rounded-2xl bg-white p-7 shadow-[0_10px_30px_-12px_rgba(7,59,76,0.15)] ring-1 ring-black/5"
          >
            <div className="shrink-0">
              <AccreditationBadge code={a.code} />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-2xl font-extrabold tracking-tight"
                  style={{ color: theme.tealDark }}
                >
                  {a.code}
                </span>
                <span className="text-sm font-medium text-slate-500">{a.name}</span>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                {a.blurb}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-white p-7 shadow-[0_10px_30px_-12px_rgba(7,59,76,0.15)] ring-1 ring-black/5">
        <div
          className="text-sm font-semibold uppercase tracking-wide"
          style={{ color: theme.tealDark }}
        >
          Which accreditation applies to each treatment category
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="rounded-xl bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-700">{cat.name}</div>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {cat.codes.map((code) => (
                  <AccreditationChip key={code} code={code} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}