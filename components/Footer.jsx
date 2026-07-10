export default function Footer() {
  return (
    <footer className="bg-teal py-12 text-[#BFD8C8]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap justify-between gap-8 border-b border-paper/15 pb-8">
          <div>
            <div className="font-display text-lg font-semibold text-[#FBF7ED]">KarePort</div>
            <p className="mt-2 max-w-[32ch] text-sm text-[#9FBBA9]">
              The gateway of Kerala — surgery, dentistry and Ayurveda, curated by doctors.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-[#D8B87A]">Contact</h4>
            <div className="mb-2 text-sm">kareporthealth@gmail.com</div>
            <div className="text-sm">WhatsApp +91 94000 28226</div>
          </div>
          <div>
            <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-[#D8B87A]">Elsewhere</h4>
            <div className="mb-2 text-sm">kareporthealth.com</div>
            <a
              href="https://www.instagram.com/kareport_health?utm_source=qr&igsh=aXlqa3JiOTN3Z3o5"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-sm no-underline hover:text-paper"
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
        <div className="flex flex-wrap justify-between gap-2.5 pt-5 text-xs text-[#7FA08C]">
          <div>© 2026 KarePort. Kerala Health System.</div>
          <div>Doctor-led. Nationally certified partner hospitals.</div>
        </div>
        <div className="flex flex-wrap gap-4 pt-3 text-xs text-[#7FA08C]">
          <a href="/privacy-policy" className="no-underline hover:text-paper">
            Privacy Policy
          </a>
          <a href="/terms" className="no-underline hover:text-paper">
            Terms of Service
          </a>
        </div>
        <div className="mt-4 flex items-center gap-2.5 border-t border-paper/10 pt-4">
          <span className="text-xs text-[#7FA08C]">Built by</span>
          <a
            href="https://faircodetech.com/"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 no-underline"
          >
            <img src="/Faircode.png" alt="Faircode Infotech" className="h-7 w-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
}