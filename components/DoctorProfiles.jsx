import { AccreditationChip } from './AccreditationBadge';

// Swap `photo` and `accreditations` per doctor once the clinical team
// confirms hospital-network accreditations for each.
const DOCTORS = [
  {
    name: 'Dr K Harikrishnan',
    specialty: 'Co-Founder',
    title: 'Medical Officer, Kerala Health System',
    photo: '/hari.jpg',
    education: 'MBBS — Kerala University of Health Sciences',
    experience: '4+ Years of Experience',
  
    linkedin: 'https://www.linkedin.com/in/dr-hari-k-40b4b8376',
  },
  {
    name: 'Dr Arif Nazar',
    specialty: 'Co-Founder',
    title: 'Medical Officer, Kerala Health System',
    photo: '/arif.jpg',
    education: 'MBBS — Kerala University of Health Sciences',
    experience: '4+ Years of Experience',
    linkedin: 'https://in.linkedin.com/in/arif-nazar-160484189',
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
    <section id="doctors" className="bg-paper py-[104px]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="font-mono text-xs uppercase tracking-widest text-leaf">Meet the panel</div>
        <h2 className="mt-4 max-w-[24ch] font-display text-3xl font-semibold sm:text-4xl">
          Doctor profiles
        </h2>
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

                {d.linkedin && (
                  <a
                    href={d.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-teal hover:underline"
                  >
                    LinkedIn ↗
                  </a>
                )}

                <div className="mt-4">
                  <DetailRow label="Education" value={d.education} />
                  <DetailRow label="Experience" value={d.experience} />
                </div>

                {d.accreditations?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {d.accreditations.map((code) => (
                      <AccreditationChip key={code} code={code} />
                    ))}
                  </div>
                )}

                {/* <a
                  href="#enquiry"
                  className="mt-5 inline-flex items-center gap-2 border border-teal px-5 py-2.5 font-display text-sm font-semibold text-teal transition hover:bg-teal hover:text-paper"
                >
                  Start your enquiry →
                </a> */}
              </div>
            </div>
          ))}
        </div>


        <div className="mt-11 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="text-[#3B4A3F]">
              &ldquo;Patient-centric care is at the heart of everything we do. Having served
              within the healthcare system, I understand the critical importance of
              transparency, rigorous quality standards, and genuine empathy in medicine.
            </p>
            <p className="mt-3 text-[#3B4A3F]">
              Our mission is to bridge the gap between world-class medical specialists and
              global patients seeking top-tier treatment. We meticulously vet every hospital
              and specialist on our panel, ensuring that you receive the exact level of
              clinical excellence and safety you deserve.
            </p>
            <p className="mt-3 text-[#3B4A3F]">
              Your well-being is, and always will be, our highest priority.&rdquo;
            </p>
            <p className="mt-4 font-display text-sm font-semibold text-teal">
              — Dr. Arif Nazar, Co-Founder
            </p>
          </div>
          <div>
            <p className="text-[#3B4A3F]">
              &ldquo;As a practicing physician, I have always believed that healthcare should
              know no borders.
            </p>
            <p className="mt-3 text-[#3B4A3F]">
              Navigating medical treatment in a foreign country can feel overwhelming, which
              is why we founded this platform.
            </p>
            <p className="mt-3 text-[#3B4A3F]">
              My commitment is to ensure that your medical journey is anchored in strict
              clinical safety, world-class expertise, and seamless care.
            </p>
            <p className="mt-3 text-[#3B4A3F]">
              When you trust us with your health, you aren&apos;t just hiring a travel
              service—you are placing your care in the hands of doctors who understand the
              medical landscape inside out.
            </p>
            <p className="mt-3 text-[#3B4A3F]">
              We are here to guide you every single step of the way.&rdquo;
            </p>
            <p className="mt-4 font-display text-sm font-semibold text-teal">
              — Dr. K Harikrishnan, Co-Founder
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border border-ink/25 bg-teal px-7 py-6 text-paper">
          <div>
            <div className="font-display text-lg font-semibold text-[#FBF7ED]">Need expert medical advice?</div>
            <p className="mt-1 max-w-[44ch] text-sm text-[#D8E6DC]">
              Consult with our specialists and take the first step towards better health and recovery.
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
