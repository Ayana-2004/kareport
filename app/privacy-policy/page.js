import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LegalPageHeader from '../../components/LegalPageHeader';

export const metadata = {
  title: 'Privacy Policy — KarePort',
  description: 'How KarePort collects, uses and protects your information.',
};

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />
      <LegalPageHeader title="Privacy Policy" lastUpdated="10 July 2026" />

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="grid gap-8">
            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">01</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Overview</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                KarePort (&quot;KarePort&quot;, &quot;we&quot;, &quot;us&quot;) helps people coordinate
                medical, dental and Ayurveda care in Kerala, India, by connecting them with
                independently operated, accredited partner hospitals and doctors. This policy
                explains what information we collect through this website and how it is used.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">02</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Information we collect</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                When you submit the enquiry form, we collect your full name, email address, phone
                number, treatment category, and any additional comments you choose to provide. We
                do not require you to create an account, and we do not collect payment information
                through this website.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">03</div>
              <h2 className="mt-2 font-display text-xl font-semibold">How we use your information</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">We use the information you submit to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#2A362D]">
                <li>Send you an email confirming your enquiry has been received.</li>
                <li>Notify our clinical coordination desk of your enquiry so a coordinator can follow up.</li>
                <li>Send you an automated WhatsApp acknowledgment, where you have a WhatsApp account reachable at the number you provide.</li>
                <li>Contact you by email, phone or WhatsApp to discuss your care coordination request.</li>
              </ul>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">04</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Third-party processors</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                We use trusted third-party services to deliver the communications above, and your
                enquiry details are shared with them only for that purpose:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#2A362D]">
                <li><strong>Resend</strong> — delivers our confirmation and notification emails.</li>
                <li><strong>Meta WhatsApp Cloud API</strong> — delivers automated WhatsApp acknowledgments.</li>
              </ul>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                These providers process data on our behalf and are not permitted to use it for
                their own purposes.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">05</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Data retention</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                We retain enquiry information for as long as needed to coordinate your care and
                for a reasonable period afterward for record-keeping, unless you ask us to delete
                it sooner.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">06</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Your rights</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                You may ask us to access, correct, or delete the personal information we hold about
                you at any time by contacting us using the details below.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">07</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Cookies &amp; tracking</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                This website does not currently use analytics or advertising cookies. If that
                changes, this policy will be updated accordingly.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">08</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Children</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                This website is not directed at children, and we do not knowingly collect
                information from anyone under 18.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">09</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Changes to this policy</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                We may update this policy from time to time. The &quot;Last updated&quot; date above
                reflects the most recent revision.
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <div className="font-mono text-xs text-gold-2">10</div>
              <h2 className="mt-2 font-display text-xl font-semibold">Contact us</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#2A362D]">
                Questions about this policy or your information can be sent to{' '}
                <a href="mailto:info@kareport.com" className="text-teal underline hover:text-teal-2">
                  info@kareport.com
                </a>{' '}
                {/* or via WhatsApp at +91 94000 28226. */}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
