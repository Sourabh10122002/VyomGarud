import Image from "next/image";

export default function PrivacyPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="relative mb-8 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="https://picsum.photos/seed/privacy/1400/600"
            alt="Privacy and security"
            width={1400}
            height={600}
            className="object-cover"
            priority
          />
        </div>
        <h1 className="font-heading text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-white/70 max-w-3xl">
          We respect your privacy. Information shared via our contact form is used solely to
          respond to your inquiry. We do not sell or share your data with third parties.
        </p>
        <ul className="mt-6 max-w-3xl space-y-2 text-white/70">
          <li>• Collection: Contact details and message content only.</li>
          <li>• Usage: Responding to inquiries and service follow-ups.</li>
          <li>• Storage: Secure systems with limited access.</li>
          <li>• Third parties: No selling or sharing of personal data.</li>
        </ul>

        <div className="mt-10 max-w-4xl space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold">Information We Collect</h2>
            <ul className="mt-3 list-disc pl-5 text-white/70">
              <li>Identity data: name, company, role.</li>
              <li>Contact data: email, phone (if provided).</li>
              <li>Message content: mission requirements or inquiry details.</li>
              <li>Technical data: basic logs for performance and security.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">How We Use Information</h2>
            <ul className="mt-3 list-disc pl-5 text-white/70">
              <li>To respond to inquiries and provide requested information.</li>
              <li>To improve site reliability, performance, and support.</li>
              <li>To maintain security and prevent misuse of our services.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Data Retention</h2>
            <p className="mt-3 text-white/70">
              We retain contact records only as long as necessary to respond and provide
              follow-up service. You may request deletion at any time.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Cookies and Tracking</h2>
            <p className="mt-3 text-white/70">
              Our site may use minimal technical cookies or logs to ensure reliable and
              secure operation. We do not use advertising or profiling cookies.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Third-Party Services</h2>
            <p className="mt-3 text-white/70">
              We may use secured infrastructure or providers to host the website and email.
              These providers do not receive your data for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">International Transfers</h2>
            <p className="mt-3 text-white/70">
              If you are outside our hosting region, your inquiry may be processed across
              borders by secure systems. We apply safeguards appropriate to the transfer.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Your Rights</h2>
            <ul className="mt-3 list-disc pl-5 text-white/70">
              <li>Access, correction, and deletion of your personal data.</li>
              <li>Objection or restriction of certain processing.</li>
              <li>Portability of data where technically feasible.</li>
            </ul>
            <p className="mt-3 text-white/70">
              To exercise your rights, contact <a className="text-[var(--accent)] hover:underline" href="mailto:contact@vyomgarud.com">contact@vyomgarud.com</a>.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Contact & Effective Date</h2>
            <p className="mt-3 text-white/70">
              Questions about this policy can be sent to <a className="text-[var(--accent)] hover:underline" href="mailto:contact@vyomgarud.com">contact@vyomgarud.com</a>.
              This policy is effective as of the date displayed on this page and may be updated
              from time to time to reflect operational or regulatory changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}