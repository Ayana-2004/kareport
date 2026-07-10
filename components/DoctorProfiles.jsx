import { AccreditationChip } from './AccreditationBadge';

// Photos and details below are placeholders until the clinical team confirms
// final bios — swap `photo`, `education`, `license`, `certifications` and
// `experience` per doctor once real credentials are supplied.
const DOCTORS = [
  {
    name: 'Dr. Hari Krishnan',
    specialty: 'General & Laparoscopic Surgery',
    title: 'Senior Consultant & Clinical Lead',
    photo: '/hari.jpeg',
    blurb:
      'Specialising in minimally invasive surgery, post-operative recovery coordination and patient-first care planning.',
    education: 'MBBS, MD — Government Medical College, Kozhikode',
    license: 'License No: KMC-24681',
    certifications: 'Board Certified in General Surgery',
    experience: '15+ Years of Experience',
    accreditations: ['NABH', 'JCI'],
    linkedin: null,
  },
  {
    name: 'Dr. Arif Rahman',
    specialty: 'Cosmetic & Restorative Dentistry',
    title: 'Consultant, Dental & Oral Care',
    photo: '/arif.jpeg',
    blurb:
      'Focused on advanced restorative dentistry, painless procedures and full-mouth rehabilitation for international patients.',
    education: 'BDS, MDS — Kerala University of Health Sciences',
    license: 'License No: KDC-15329',
    certifications: 'Certified in Cosmetic & Restorative Dentistry',
    experience: '10+ Years of Experience',
    accreditations: ['NABH', 'OHSP'],
    linkedin: null,
  },
];

function DetailRow({ label, value }) {
  return (
    <div className="flex items-start gap-3 border-t border-ink/10 py-2.5 first:border-t-0 first:pt-0">
      <div className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-wide text-[#8A8270]">
        {label}
      </div>
      <div className="text-sm text-[#2A362D]">{value}</div>
    </div>
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
          The doctor-led panel guiding every KarePort case, from first enquiry to recovery.
        </p>

        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {DOCTORS.map((d) => (
            <div key={d.name} className="flex flex-col gap-5 border border-ink/25 bg-paper-2 p-7 sm:flex-row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={d.photo}
                alt={d.name}
                className="h-72 w-full shrink-0 rounded-lg object-cover object-top sm:h-auto sm:w-2/5 sm:self-stretch"
              />
              <div className="flex-1">
                <span className="inline-block rounded-full bg-teal/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-teal">
                  {d.specialty}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold">{d.name}</h3>
                <p className="mt-0.5 text-sm font-medium text-teal">{d.title}</p>
                <p className="mt-2 text-sm text-[#3B4A3F]">{d.blurb}</p>

                <div className="mt-4">
                  <DetailRow label="Education" value={d.education} />
                  <DetailRow label="License" value={d.license} />
                  <DetailRow label="Certified" value={d.certifications} />
                  <DetailRow label="Experience" value={d.experience} />
                </div>

                {d.accreditations?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {d.accreditations.map((code) => (
                      <AccreditationChip key={code} code={code} />
                    ))}
                  </div>
                )}

                <a
                  href="#enquiry"
                  className="mt-5 inline-flex items-center gap-2 border border-teal px-5 py-2.5 font-display text-sm font-semibold text-teal transition hover:bg-teal hover:text-paper"
                >
                  Start your enquiry →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border border-ink/25 bg-teal px-7 py-6 text-paper">
          <div>
            <div className="font-display text-lg font-semibold text-[#FBF7ED]">Need a consultation?</div>
            <p className="mt-1 max-w-[44ch] text-sm text-[#D8E6DC]">
              Consult with our specialists and take the first step towards better health.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 font-mono text-xs text-[#CBDDD2]">
            <span>Trusted Doctors</span>
            <span>Quality Care</span>
            <span>Patient Safety</span>
          </div>
          <a
            href="#enquiry"
            className="rounded-sm border border-gold bg-gold px-6 py-3 font-display text-sm font-semibold text-[#1B1305] transition hover:bg-gold-2"
          >
            Start your enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
