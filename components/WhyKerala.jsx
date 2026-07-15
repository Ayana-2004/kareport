export default function WhyKerala() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-2">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-leaf">Why Kerala</div>
          <h2 className="mt-4 max-w-[16ch] font-display text-3xl font-semibold sm:text-4xl">
            A proven health system, now easier to reach.
          </h2>
        </div>
        <div>
          <p className="max-w-[52ch] text-[#3B4A3F]">
            Kerala&apos;s healthcare system is internationally recognised for delivering
            high-quality, comprehensive care—offering advanced treatments at significantly
            lower costs than many other destinations. KarePort is your gateway to this
            trusted healthcare ecosystem, providing a single, guided pathway to surgery,
            dentistry and Ayurveda, overseen by an experienced Kerala-based team of doctors.
          </p>
          <ul className="mt-5 grid gap-5">
            <li className="border-t border-ink/10 pt-4 text-sm text-[#2A362D]">
              <strong className="mb-1 block font-display text-base font-semibold">
                One coordinator, one plan
              </strong>
              Your case is reviewed by our clinical team and matched to the right hospital
              and specialist for your best interest.
            </li>
            <li className="border-t border-ink/10 pt-4 text-sm text-[#2A362D]">
              <strong className="mb-1 block font-display text-base font-semibold">
                Built for the journey, not just the procedure
              </strong>
              Every aspect of your journey—from travel and accommodation to treatment and
              follow-up—is coordinated through a single, personalised care plan.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
