// hospitals: real, publicly-documented examples of institutions holding the
// listed accreditation — NOT confirmed KarePort partners/empanelments. These
// are shown as "meets this standard" illustrations only, per publicly
// available JCI/NABH directories and hospital-published sources as of this
// writing. Confirm actual empanelment/partnership status before treating any
// of these as a real KarePort relationship, and re-verify current
// accreditation status (it can lapse or renew) before publishing live.
const CERTS = [
  {
    eyebrow: 'Allopathy',
    title: 'Surgery & specialist care',
    codes: ['JCI', 'NABH'],
    hospitals: [
      { name: 'Aster Medcity', city: 'Kochi', status: 'JCI + NABH' },
      { name: 'GG Hospital', city: 'Thiruvananthapuram', status: 'NABH' },
      { name: 'Meitra Hospital', city: 'Kozhikode', status: 'JCI' },
    ],
  },
  {
    eyebrow: 'Ayurveda',
    title: 'Panchakarma & recovery',
    codes: ['Ayush Centre', 'Green Leaf', 'NABH'],
    // Lower confidence: Kerala Tourism's Green Leaf/Olive Leaf scheme is
    // reportedly transitioning to an Ayur Diamond/Gold/Silver classification —
    // reconfirm current certification status before publishing.
    hospitals: [
      { name: 'Kairali — The Ayurvedic Healing Village', city: 'Palakkad', status: 'Green Leaf' },
      { name: 'Somatheeram Ayurvedic Health Resort', city: 'Thiruvananthapuram', status: 'Green Leaf' },
      { name: 'Kalari Kovilakom', city: 'Kollam', status: 'Green Leaf' },
    ],
  },
  {
    eyebrow: 'Dentistry',
    title: 'Advanced dental care',
    codes: ['NABH', 'OHSP Section B'],
    hospitals: [
      { name: 'Mazhuvenchery Speciality Dental Clinic', city: 'Aluva, Kochi', status: 'NABH' },
      { pending: true },
      { pending: true },
    ],
  },
];

function PinIcon() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-[#D8B87A]" fill="currentColor" aria-hidden="true">
      <path d="M10 1a6 6 0 0 0-6 6c0 4.5 6 12 6 12s6-7.5 6-12a6 6 0 0 0-6-6zm0 8.5A2.5 2.5 0 1 1 10 4a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

export default function Certifications() {
  return (
    <section className="bg-teal py-[104px] text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <div className="font-mono text-xs uppercase tracking-widest text-[#BFD8C8]">
          Hospital examples by accreditation
        </div>
        <h2 className="mt-4 max-w-[26ch] font-display text-2xl font-semibold text-[#FBF7ED] sm:text-3xl">
          Examples of hospitals that match our accreditation criteria.
        </h2>
        <p className="mt-3 max-w-[60ch] text-[#BFD8C8]">
          Below are illustrative examples of hospitals meeting each certification standard —
          the confirmed, final empanelment list is being finalised.
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

              <div className="mt-4 space-y-2 border-t border-paper/15 pt-4">
                {c.hospitals.map((h, i) =>
                  h.pending ? (
                    <div
                      key={`${c.eyebrow}-${i}`}
                      className="flex items-center gap-2.5 rounded-sm border border-dashed border-paper/25 px-3 py-2.5 text-xs italic text-[#8FA89B]"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full border border-paper/40" />
                      Additional example pending confirmation
                    </div>
                  ) : (
                    <div key={`${c.eyebrow}-${i}`} className="flex items-start gap-2.5 rounded-sm bg-paper/5 px-3 py-2.5">
                      <PinIcon />
                      <div>
                        <div className="text-sm font-medium leading-snug text-[#FBF7ED]">{h.name}</div>
                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <span className="text-xs text-[#9FBBA9]">{h.city}</span>
                          <span className="rounded-full border border-paper/25 px-1.5 py-0.5 font-mono text-[10px] tracking-wide text-[#D8B87A]">
                            {h.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
