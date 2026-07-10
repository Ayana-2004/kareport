import { AccreditationChip } from './AccreditationBadge';

// Placeholder data until the Action Item list (real doctor photos, qualifications,
// experience, license details, LinkedIn links) is supplied. Swapping in real
// content is a one-line edit per field — no component changes needed.
// To add a real photo: set `photo` to an image path under /public (e.g. '/doctors/dr-hari.jpg').
const DOCTORS = [
  {
    name: 'Dr. Hari [Full name pending]',
    photo: null,
    qualifications: 'MBBS, MD [qualifications pending confirmation]',
    experience: '[Years of experience pending]',
    credentials: 'Lead, KarePort clinical coordination panel [credentials pending]',
    accreditations: ['NABH', 'JCI'],
    linkedin: null,
  },
  {
    name: 'Dr. Arif [Full name pending]',
    photo: null,
    qualifications: 'MBBS, MD [qualifications pending confirmation]',
    experience: '[Years of experience pending]',
    credentials: 'KarePort clinical coordination panel [credentials pending]',
    accreditations: ['NABH', 'JCI'],
    linkedin: null,
  },
];

function AvatarPlaceholder() {
  return (
    <svg viewBox="0 0 96 96" className="h-24 w-24 rounded-full bg-paper-2" aria-hidden="true">
      <circle cx="48" cy="38" r="18" fill="#C9C2AC" />
      <path d="M14 88c4-22 20-32 34-32s30 10 34 32" fill="#C9C2AC" />
    </svg>
  );
}

export default function DoctorProfiles() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="font-mono text-xs uppercase tracking-widest text-leaf">Meet the panel</div>
        <h2 className="mt-4 max-w-[24ch] font-display text-3xl font-semibold sm:text-4xl">
          Doctor profiles
        </h2>
        <p className="mt-3 max-w-[60ch] text-[#3B4A3F]">
          Full credentials, photographs and profiles are being finalised — this section will be
          updated as each doctor&apos;s details are confirmed.
        </p>

        <div className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((d) => (
            <div key={d.name} className="flex flex-col items-start gap-4 border border-ink/25 bg-paper-2 p-7">
              {d.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={d.photo} alt={d.name} className="h-24 w-24 rounded-full object-cover" />
              ) : (
                <AvatarPlaceholder />
              )}
              <div>
                <h3 className="font-display text-lg font-semibold">{d.name}</h3>
                <p className="mt-1 text-sm text-[#3B4A3F]">{d.qualifications}</p>
                <p className="mt-1 text-sm text-[#3B4A3F]">{d.experience}</p>
                <p className="mt-1 text-sm text-[#3B4A3F]">{d.credentials}</p>
                {d.accreditations?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {d.accreditations.map((code) => (
                      <AccreditationChip key={code} code={code} />
                    ))}
                  </div>
                )}
                {d.linkedin ? (
                  <a
                    href={d.linkedin}
                    target="_blank"
                    rel="noopener"
                    className="mt-2 inline-block font-mono text-xs uppercase tracking-wide text-teal hover:text-teal-2"
                  >
                    LinkedIn profile →
                  </a>
                ) : (
                  <span className="mt-2 inline-block font-mono text-xs uppercase tracking-wide text-[#8A8270]">
                    LinkedIn pending
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
