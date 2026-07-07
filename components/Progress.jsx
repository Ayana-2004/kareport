export default function Progress() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-sm border border-dashed border-ink/25 p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-5">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Building trust, transparently
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {['NABH Facilitation — in progress', 'HEAL India — in progress', 'REACH Kerala — in progress'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-ink/25 px-3 py-1.5 font-mono text-xs text-[#3B4A3F]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
          <p className="mt-4 max-w-[60ch] text-sm text-[#3B4A3F]">
            KarePort itself is currently pursuing NABH Facilitation certification, along with
            HEAL India and REACH Kerala enrolment. Patient testimonials will be published here
            as our first cases complete. Every hospital we work with is already nationally
            certified, as shown above.
          </p>
        </div>
      </div>
    </section>
  );
}
