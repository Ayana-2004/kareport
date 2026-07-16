import EnquiryForm from './EnquiryForm';

export default function Enquiry() {
  return (
    <section id="enquiry" className="border-t border-ink/10 bg-paper-2 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-leaf">Start here</div>
          <h2 className="mt-4 max-w-[16ch] font-display text-3xl font-semibold sm:text-4xl">
            Tell us who you are — KarePort&apos;s team takes it from there.
          </h2>
          <p className="mt-4 max-w-[44ch] text-[#3B4A3F]">
            Leave your name, email and phone number below. You&apos;ll get a short
            confirmation, then a direct WhatsApp line to KarePort&apos;s care team to
            continue the conversation.
          </p>
          <div className="mt-7 grid gap-2 font-mono text-sm text-[#2A362D]">
            <a
              href="https://kareport.com"
              target="_blank"
              rel="noopener"
              className="no-underline hover:text-teal"
            >
              kareport.com
            </a>
            <a href="mailto:info@kareport.com" className="no-underline hover:text-teal">
              info@kareport.com
            </a>
            <a
              href="https://wa.me/919400028226"
              target="_blank"
              rel="noopener"
              className="no-underline hover:text-teal"
            >
              WhatsApp +91 94000 28226
            </a>
            <a
              href="https://www.instagram.com/kareport_health?utm_source=qr&igsh=aXlqa3JiOTN3Z3o5"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 no-underline hover:text-teal"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
              @kareport_health
            </a>
          </div>
        </div>

        <EnquiryForm />
      </div>
    </section>
  );
}
