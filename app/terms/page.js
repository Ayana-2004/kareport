import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LegalPageHeader from '../../components/LegalPageHeader';

export const metadata = {
  title: 'Terms of Service — KarePort',
  description: 'Terms governing use of the KarePort website and enquiry service.',
};

export default function Terms() {
  return (
    <main>
      <Header />
      <LegalPageHeader title="Terms of Service" lastUpdated="10 July 2026" />

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="grid gap-8">
            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">01</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Acceptance of terms</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                By using this website or submitting the enquiry form, you agree to these Terms of
                Service. If you do not agree, please do not use this website.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">02</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Description of service</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                KarePort operates a care-coordination service. We help connect patients with
                independently operated, accredited partner hospitals and doctors for surgery,
                dentistry and Ayurveda treatment in Kerala, India. Submitting the enquiry form
                requests a conversation with our clinical coordination desk — it is not a
                booking, appointment, or guarantee of treatment.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">03</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Medical disclaimer</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                <strong>KarePort is a coordination service, not a hospital, clinic, or licensed
                healthcare provider.</strong> We do not diagnose, treat, or provide medical advice.
                All medical, dental and Ayurveda care is provided solely by the independently
                licensed hospitals and doctors in our partner network, who are responsible for
                their own clinical decisions, licensing, and standard of care. Nothing on this
                website constitutes medical advice, and it should not be used as a substitute for
                consultation with a qualified healthcare provider. KarePort does not guarantee any
                specific treatment outcome.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">04</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Communications consent</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                By submitting the enquiry form, you consent to KarePort contacting you by email,
                phone, and WhatsApp (including automated messages) regarding your enquiry, at the
                contact details you provide.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">05</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Accuracy of information</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                You agree to provide accurate and current information in the enquiry form. KarePort
                is not responsible for delays or errors in coordination arising from inaccurate
                information you provide.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">06</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Limitation of liability</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                To the fullest extent permitted by law, KarePort is not liable for any indirect,
                incidental, or consequential damages arising from your use of this website or the
                care coordination service, including damages arising from the acts or omissions of
                independently operated partner hospitals and doctors.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">07</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Changes to these terms</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                We may update these terms from time to time. The &quot;Last updated&quot; date above
                reflects the most recent revision. Continued use of this website after changes
                means you accept the updated terms.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">08</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Governing law</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                These terms are governed by the laws of India, and any disputes are subject to the
                exclusive jurisdiction of the courts of Kerala, India.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">09</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Contact us</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                Questions about these terms can be sent to{' '}
                <a href="mailto:kareporthealth@gmail.com" className="text-teal underline hover:text-teal-2">
                  kareporthealth@gmail.com
                </a>{' '}
                or via WhatsApp at +91 94000 28226.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
