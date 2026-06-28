import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | VINOFYX PRIVATE LIMITED",
  description: "Privacy Policy for VINOFYX PRIVATE LIMITED — how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-950 py-16 px-4">
        <div className="max-w-[860px] mx-auto text-center">
          <p className="text-blue-400 text-xs font-black tracking-[0.3em] uppercase mb-3">Legal</p>
          <h1 className="text-white font-serif font-bold text-4xl md:text-5xl mb-3">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Effective Date: June 28, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 py-16">
        <div className="prose prose-slate max-w-none">

          <p className="text-slate-600 leading-relaxed mb-8">
            Welcome to <strong>Vinofyx Private Limited</strong> (&quot;Vinofyx&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit{" "}
            <a href="https://www.vinofyx.com" className="text-blue-600 hover:underline">www.vinofyx.com</a>, use our services, or interact with us. By using our website, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>

          <Section title="1. Information We Collect">
            <SubSection title="A. Personal Information">
              <p>When you voluntarily provide it, we may collect:</p>
              <List items={["Full Name","Company Name","Email Address","Phone Number","Business Address","Website URL","Social Media Profiles","Project Requirements","Marketing Preferences"]} />
            </SubSection>
            <SubSection title="B. Automatically Collected Information">
              <p>When you visit our website, we may automatically collect:</p>
              <List items={["IP Address","Browser Type","Device Information","Operating System","Referring URLs","Pages Visited","Date and Time of Visit","Session Duration","Cookies and Tracking Data"]} />
            </SubSection>
            <SubSection title="C. Information from Third Parties">
              <p>We may receive information from:</p>
              <List items={["Google Analytics","Google Ads","Meta (Facebook & Instagram)","LinkedIn","Payment Providers","CRM Systems","Marketing Automation Platforms"]} />
            </SubSection>
          </Section>

          <Section title="2. How We Use Your Information">
            <List items={["Provide our digital marketing services","Respond to inquiries","Prepare quotations and proposals","Deliver requested services","Improve website performance","Personalize user experience","Send newsletters and updates","Conduct analytics","Improve customer support","Detect fraud and security threats","Comply with legal obligations"]} />
          </Section>

          <Section title="3. Services We Provide">
            <p className="text-slate-600 mb-3">Vinofyx may provide services including:</p>
            <List items={["Digital Marketing","SEO","Social Media Marketing","Performance Marketing","Branding","Website Development","AI Automation","CRM Solutions","Marketing Consultation","Content Creation","Graphic Design","Video Marketing","Business Consulting"]} />
            <p className="text-slate-600 mt-3">Information collected may be used to provide these services efficiently.</p>
          </Section>

          <Section title="4. Cookies">
            <p className="text-slate-600 mb-3">We use cookies to improve your browsing experience. Cookies may be used for:</p>
            <List items={["Website functionality","Analytics","Marketing campaigns","User preferences","Performance monitoring","Remarketing"]} />
            <p className="text-slate-600 mt-3">You may disable cookies through your browser settings.</p>
          </Section>

          <Section title="5. Analytics">
            <p className="text-slate-600 mb-3">We may use third-party analytics providers including:</p>
            <List items={["Google Analytics","Google Search Console","Microsoft Clarity","Meta Pixel","LinkedIn Insight Tag"]} />
            <p className="text-slate-600 mt-3">These tools help us understand website traffic and improve user experience.</p>
          </Section>

          <Section title="6. Marketing Communications">
            <p className="text-slate-600 mb-3">With your permission, we may send:</p>
            <List items={["Promotional emails","Newsletters","Product updates","Service announcements","Event invitations"]} />
            <p className="text-slate-600 mt-3">You may unsubscribe at any time using the unsubscribe link or by contacting us.</p>
          </Section>

          <Section title="7. Sharing Your Information">
            <p className="text-slate-600 mb-3">We do not sell your personal information. We may share information with:</p>
            <List items={["Payment processors","Cloud hosting providers","CRM providers","Marketing partners","Website hosting companies","Government authorities when legally required"]} />
            <p className="text-slate-600 mt-3">All third-party providers are expected to maintain appropriate security standards.</p>
          </Section>

          <Section title="8. Data Security">
            <p className="text-slate-600 mb-3">We implement reasonable administrative, technical, and physical safeguards including:</p>
            <List items={["SSL Encryption","Secure Servers","Access Controls","Firewall Protection","Regular Security Updates","Data Backups"]} />
            <p className="text-slate-600 mt-3">While we strive to protect your information, no method of transmission over the Internet is completely secure.</p>
          </Section>

          <Section title="9. Data Retention">
            <p className="text-slate-600 mb-3">We retain personal information only as long as necessary to:</p>
            <List items={["Provide services","Meet legal obligations","Resolve disputes","Enforce agreements"]} />
            <p className="text-slate-600 mt-3">When information is no longer required, it is securely deleted or anonymized where appropriate.</p>
          </Section>

          <Section title="10. Your Rights">
            <p className="text-slate-600 mb-3">Depending on applicable laws, you may have the right to:</p>
            <List items={["Access your personal information","Correct inaccurate information","Request deletion of your data","Withdraw consent","Restrict processing","Object to certain processing activities","Request a copy of your information where applicable"]} />
            <p className="text-slate-600 mt-3">To exercise these rights, please contact us using the details below.</p>
          </Section>

          <Section title="11. Children's Privacy">
            <p className="text-slate-600">Our website and services are not intended for children under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected such information, we will take reasonable steps to delete it.</p>
          </Section>

          <Section title="12. Third-Party Links">
            <p className="text-slate-600">Our website may contain links to external websites. We are not responsible for the privacy practices or content of those websites. We encourage users to review the privacy policies of any third-party sites they visit.</p>
          </Section>

          <Section title="13. International Data Transfers">
            <p className="text-slate-600">If your information is transferred outside India, we will take reasonable measures to ensure it receives an appropriate level of protection in accordance with applicable laws.</p>
          </Section>

          <Section title="14. Changes to This Privacy Policy">
            <p className="text-slate-600">We may update this Privacy Policy from time to time. Any changes will be posted on this page along with the updated Effective Date. Continued use of the website after changes are posted constitutes acceptance of the revised policy.</p>
          </Section>

          <Section title="15. Contact Us">
            <p className="text-slate-600 mb-2">If you have any questions regarding this Privacy Policy or our data practices, please contact us:</p>
            <ul className="space-y-1 text-slate-600">
              <li><strong>Website:</strong> <a href="https://www.vinofyx.com" className="text-blue-600 hover:underline">www.vinofyx.com</a></li>
              <li><strong>Email:</strong> <a href="mailto:info@vinofyx.com" className="text-blue-600 hover:underline">info@vinofyx.com</a></li>
              <li><strong>Location:</strong> Hyderabad, Telangana, India</li>
            </ul>
          </Section>

          <Section title="16. Consent">
            <p className="text-slate-600">By using our website, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein.</p>
          </Section>

        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-slate-900 font-bold text-xl mb-4 pb-2 border-b border-slate-100">{title}</h2>
      {children}
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="text-slate-800 font-semibold text-base mb-2">{title}</h3>
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 ml-4">
      {items.map((item) => (
        <li key={item} className="text-slate-600 text-sm flex items-start gap-2">
          <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
