import Image from "next/image";

export default function TermsPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="relative mb-8 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="https://picsum.photos/seed/terms/1400/600"
            alt="Terms and agreements"
            width={1400}
            height={600}
            className="object-cover"
            priority
          />
        </div>
        <h1 className="font-heading text-3xl font-semibold">Terms of Use</h1>
        <p className="mt-4 text-white/70 max-w-3xl">
          Use of this site signifies agreement to our terms. Product specifications and
          capabilities are subject to change. For contractual terms, please contact us.
        </p>
        <ul className="mt-6 max-w-3xl space-y-2 text-white/70">
          <li>• Content provided “as is” without warranty.</li>
          <li>• Specifications subject to update without notice.</li>
          <li>• No unlawful or prohibited use of materials.</li>
          <li>• Reach out for negotiated contractual agreements.</li>
        </ul>

        <div className="mt-10 max-w-4xl space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold">Definitions</h2>
            <p className="mt-3 text-white/70">
              “Site” means this website and its content. “Products” means any UAV platforms
              or related services described here. “You” means the user accessing the Site.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Acceptance of Terms</h2>
            <p className="mt-3 text-white/70">
              By accessing or using the Site, you agree to these Terms. If you do not agree,
              please discontinue use. We may update these Terms from time to time.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Use of the Site</h2>
            <ul className="mt-3 list-disc pl-5 text-white/70">
              <li>Do not misuse, disrupt, or attempt unauthorized access.</li>
              <li>Do not use content for unlawful or prohibited purposes.</li>
              <li>Comply with all applicable laws and regulations.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Intellectual Property</h2>
            <p className="mt-3 text-white/70">
              All trademarks, logos, and content are owned or licensed. You may not copy,
              distribute, modify, or create derivative works without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Product Information</h2>
            <p className="mt-3 text-white/70">
              Product descriptions are informational and non-binding. Specifications may change
              without notice and may vary by configuration, mission profile, and regulatory
              environment.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Warranty Disclaimer</h2>
            <p className="mt-3 text-white/70">
              The Site and its content are provided “as is” and “as available,” without
              warranties of any kind, express or implied.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Limitation of Liability</h2>
            <p className="mt-3 text-white/70">
              To the maximum extent permitted by law, we are not liable for indirect,
              incidental, consequential, or punitive damages arising out of your use of the Site.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Indemnification</h2>
            <p className="mt-3 text-white/70">
              You agree to indemnify and hold us harmless from claims arising out of your
              misuse of the Site or violation of these Terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Compliance & Export Controls</h2>
            <p className="mt-3 text-white/70">
              Products may be subject to export laws and restrictions. You are responsible for
              complying with applicable controls and obtaining necessary authorizations.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Termination</h2>
            <p className="mt-3 text-white/70">
              We may suspend or terminate access at any time for misuse or for any reason.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Governing Law</h2>
            <p className="mt-3 text-white/70">
              These Terms are governed by the laws of the applicable jurisdiction. Venue for
              disputes will be in the competent courts of that jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Changes to Terms</h2>
            <p className="mt-3 text-white/70">
              We may revise these Terms periodically. Continued use of the Site after changes
              constitutes acceptance of the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold">Contact & Effective Date</h2>
            <p className="mt-3 text-white/70">
              For questions regarding these Terms, contact <a className="text-[var(--accent)] hover:underline" href="mailto:contact@vyomgarud.com">contact@vyomgarud.com</a>.
              These Terms are effective as of the date displayed on this page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}