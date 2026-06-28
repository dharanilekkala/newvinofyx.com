import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | VINOFYX PRIVATE LIMITED",
  description: "Cookie Policy for VINOFYX PRIVATE LIMITED — how we use cookies and similar technologies.",
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-950 py-16 px-4">
        <div className="max-w-[860px] mx-auto text-center">
          <p className="text-blue-400 text-xs font-black tracking-[0.3em] uppercase mb-3">Legal</p>
          <h1 className="text-white font-serif font-bold text-4xl md:text-5xl mb-3">Cookie Policy</h1>
          <p className="text-slate-400 text-sm">Effective Date: June 28, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 py-16">
        <div className="prose prose-slate max-w-none">

          <p className="text-slate-600 leading-relaxed mb-8">
            This Cookie Policy explains how <strong>Vinofyx Private Limited</strong> (&quot;Vinofyx&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses cookies and similar technologies when you visit{" "}
            <a href="https://www.vinofyx.com" className="text-blue-600 hover:underline">www.vinofyx.com</a>. Vinofyx provides AI-powered digital marketing, SEO, website development, branding, and business growth solutions. By continuing to use our website, you agree to our use of cookies as described in this Cookie Policy.
          </p>

          <Section title="1. What Are Cookies?">
            <p className="text-slate-600">Cookies are small text files stored on your computer, smartphone, or other device when you visit a website. They help websites function efficiently, remember your preferences, improve security, and provide insights into website usage.</p>
            <p className="text-slate-600 mt-3">Cookies do not typically give us direct access to your computer or personal files.</p>
          </Section>

          <Section title="2. Why We Use Cookies">
            <List items={[
              "Ensure the website functions properly.",
              "Improve website performance.",
              "Remember your preferences.",
              "Analyze visitor behavior.",
              "Enhance website security.",
              "Measure the effectiveness of marketing campaigns.",
              "Deliver personalized content where applicable.",
              "Improve customer experience.",
            ]} />
          </Section>

          <Section title="3. Types of Cookies We Use">
            <SubSection title="A. Essential Cookies">
              <p className="text-slate-600 mb-2">These cookies are necessary for the operation of our website. Examples include:</p>
              <List items={["Website navigation","Session management","Security verification","Form submissions","Load balancing"]} />
              <p className="text-slate-600 mt-3">Without these cookies, some features of the website may not function correctly.</p>
            </SubSection>

            <SubSection title="B. Performance & Analytics Cookies">
              <p className="text-slate-600 mb-2">These cookies help us understand how visitors interact with our website. Information collected may include:</p>
              <List items={["Pages visited","Time spent on pages","Traffic sources","Device type","Browser type","Geographic region (approximate)","Website performance metrics"]} />
              <p className="text-slate-600 mt-3">This information is aggregated and generally does not identify individual users.</p>
            </SubSection>

            <SubSection title="C. Functional Cookies">
              <p className="text-slate-600 mb-2">These cookies remember your preferences, such as:</p>
              <List items={["Language settings","Form information (where appropriate)","User preferences","Accessibility settings"]} />
            </SubSection>

            <SubSection title="D. Marketing & Advertising Cookies">
              <p className="text-slate-600 mb-2">These cookies may be used to:</p>
              <List items={["Measure advertising performance","Show relevant advertisements","Track conversions","Build remarketing audiences","Improve campaign effectiveness"]} />
              <p className="text-slate-600 mt-3">Marketing cookies are only used where permitted by applicable law and your consent.</p>
            </SubSection>
          </Section>

          <Section title="4. Third-Party Cookies">
            <p className="text-slate-600 mb-3">Our website may use trusted third-party services that place cookies on your device, including:</p>
            <List items={["Google Analytics","Google Ads","Google Tag Manager","Meta (Facebook) Pixel","LinkedIn Insight Tag","Microsoft Clarity","YouTube (embedded videos)"]} />
            <p className="text-slate-600 mt-3">These providers have their own privacy and cookie policies governing their use of data.</p>
          </Section>

          <Section title="5. Information Collected Through Cookies">
            <p className="text-slate-600 mb-3">Cookies may collect information such as:</p>
            <List items={["IP Address","Browser Type","Device Type","Operating System","Screen Resolution","Pages Viewed","Time on Site","Click Activity","Referral Source","Session Duration"]} />
            <p className="text-slate-600 mt-3">Where possible, this information is used in aggregate to improve our services.</p>
          </Section>

          <Section title="6. Managing Your Cookie Preferences">
            <p className="text-slate-600 mb-3">Most web browsers allow you to:</p>
            <List items={["View stored cookies","Delete cookies","Block cookies","Block third-party cookies","Receive notifications before cookies are stored"]} />
            <p className="text-slate-600 mt-3">Please note that disabling certain cookies may affect the functionality and user experience of our website.</p>
          </Section>

          <Section title="7. Cookie Retention">
            <p className="text-slate-600">Some cookies are deleted when you close your browser (session cookies), while others remain on your device for a defined period or until you delete them (persistent cookies). Retention periods vary depending on the purpose of the cookie.</p>
          </Section>

          <Section title="8. Changes to This Cookie Policy">
            <p className="text-slate-600">We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. The updated version will be published on this page with a revised Effective Date.</p>
          </Section>

          <Section title="9. Contact Us">
            <p className="text-slate-600 mb-3">If you have any questions regarding this Cookie Policy or our use of cookies, please contact us:</p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li><strong>Website:</strong> <a href="https://www.vinofyx.com" className="text-blue-600 hover:underline">www.vinofyx.com</a></li>
              <li><strong>Email:</strong> <a href="mailto:info@vinofyx.com" className="text-blue-600 hover:underline">info@vinofyx.com</a></li>
              <li><strong>Phone:</strong> +91 93919 34534</li>
              <li><strong>Location:</strong> Hyderabad, Telangana, India</li>
            </ul>
          </Section>

          <Section title="10. Consent">
            <p className="text-slate-600">By continuing to use <a href="https://www.vinofyx.com" className="text-blue-600 hover:underline">www.vinofyx.com</a>, you acknowledge that you have read and understood this Cookie Policy and consent to the use of cookies in accordance with this policy, subject to your browser settings and any cookie consent choices made on our website.</p>
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
