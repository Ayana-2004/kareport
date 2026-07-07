export default function WhyKerala() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-2">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-leaf">Why Kerala</div>
          <h2 className="mt-4 max-w-[16ch] font-display text-3xl font-semibold sm:text-4xl">
            A proven health system, now easier to reach.
          </h2>
        </div>
        <div>
          <p className="max-w-[52ch] text-[#3B4A3F]">
            Kerala&apos;s health system is recognised internationally as a model of high-quality,
            comprehensive care — delivering advanced, high-result treatment at significantly
            lower cost than most destinations. KarePort is the gateway into it: a single,
            guided path to surgery, dentistry and Ayurveda, operated and supervised by a
            professional team of doctors from Kerala itself.
          </p>
          <ul className="mt-5 grid gap-5">
            <li className="border-t border-ink/10 pt-4 text-sm text-[#2A362D]">
              <strong className="mb-1 block font-display text-base font-semibold">
                One coordinator, one plan
              </strong>
              Your case is reviewed by our clinical team and matched to the right hospital
              and specialist for your condition.
            </li>
            <li className="border-t border-ink/10 pt-4 text-sm text-[#2A362D]">
              <strong className="mb-1 block font-display text-base font-semibold">
                Built for the journey, not just the procedure
              </strong>
              Travel, stay, treatment, diet and follow-up are held under a single curated plan.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
