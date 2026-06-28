import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | VINOFYX PRIVATE LIMITED",
  description: "Terms of Service for VINOFYX PRIVATE LIMITED — governing your access and use of our website and services.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-950 py-16 px-4">
        <div className="max-w-[860px] mx-auto text-center">
          <p className="text-blue-400 text-xs font-black tracking-[0.3em] uppercase mb-3">Legal</p>
          <h1 className="text-white font-serif font-bold text-4xl md:text-5xl mb-3">Terms of Service</h1>
          <p className="text-slate-400 text-sm">Effective Date: June 28, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 py-16">
        <div className="prose prose-slate max-w-none">

          <p className="text-slate-600 leading-relaxed mb-8">
            Welcome to <strong>Vinofyx Private Limited</strong> (&quot;Vinofyx&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of Vinofyx&apos;s website at{" "}
            <a href="https://vinofyx.com" className="text-blue-600 hover:underline">https://vinofyx.com</a> and any services provided by Vinofyx. By accessing or using our website or services, you agree to be legally bound by these Terms. If you do not agree, please do not use our website or services.
          </p>

          <Section title="1. Eligibility">
            <p className="text-slate-600">You must be at least 18 years of age and capable of entering into legally binding agreements to use our website and services. By using this website, you represent and warrant that you meet these requirements.</p>
          </Section>

          <Section title="2. Services">
            <p className="text-slate-600 mb-3">Vinofyx provides professional services including, but not limited to:</p>
            <List items={[
              "Search Engine Optimization (SEO)",
              "Website Design & Development",
              "Digital Marketing",
              "Social Media Marketing",
              "Performance Marketing",
              "Google Ads & Meta Ads Management",
              "Branding & Graphic Design",
              "Video Editing & Content Creation",
              "AI Automation Solutions",
              "Business Consulting",
              "Marketing Strategy",
              "CRM & Software Solutions",
            ]} />
            <p className="text-slate-600 mt-3">The scope of services for each client will be defined separately through proposals, quotations, contracts, or Statements of Work (SOW).</p>
          </Section>

          <Section title="3. User Responsibilities">
            <p className="text-slate-600 mb-3">You agree to:</p>
            <List items={[
              "Provide accurate and complete information.",
              "Use the website lawfully.",
              "Not interfere with the operation or security of the website.",
              "Not upload malicious code, viruses, or harmful software.",
              "Not attempt unauthorized access to our systems.",
              "Not misuse our intellectual property.",
              "Comply with all applicable laws and regulations.",
            ]} />
          </Section>

          <Section title="4. Quotes and Service Agreements">
            <p className="text-slate-600 mb-3">Any quotation, proposal, estimate, or pricing provided by Vinofyx:</p>
            <List items={[
              "Is valid only for the stated validity period.",
              "Does not constitute a legally binding contract until accepted by both parties.",
              "May change if project requirements change.",
              "May require advance payments before work begins.",
            ]} />
          </Section>

          <Section title="5. Payments">
            <p className="text-slate-600 mb-3">Unless otherwise agreed in writing:</p>
            <List items={[
              "Payments shall be made according to the agreed payment schedule.",
              "Invoices are payable within the due date mentioned on the invoice.",
              "Delayed payments may result in suspension of services.",
              "Applicable taxes (including GST, where applicable) will be charged in accordance with Indian law.",
              "All payments made are subject to the agreed refund terms.",
            ]} />
          </Section>

          <Section title="6. Intellectual Property">
            <p className="text-slate-600 mb-3">Unless otherwise agreed in writing:</p>
            <List items={[
              "Vinofyx retains ownership of its methodologies, templates, software, proprietary tools, processes, and internal systems.",
              "Upon full payment, the client receives ownership or the agreed usage rights to the final deliverables, as specified in the applicable agreement.",
              "Third-party software, plugins, fonts, stock assets, or licensed materials remain subject to their respective license terms.",
            ]} />
          </Section>

          <Section title="7. Client Content">
            <p className="text-slate-600">You retain ownership of the content, trademarks, logos, and materials you provide to us. By providing such materials, you represent that you have the necessary rights and grant Vinofyx a limited, non-exclusive license to use them solely for the purpose of delivering the requested services.</p>
          </Section>

          <Section title="8. AI-Powered Services">
            <p className="text-slate-600 mb-3">Vinofyx may use artificial intelligence and automation tools to improve efficiency and service delivery. Where AI tools are used:</p>
            <List items={[
              "Human review may be applied before final delivery where appropriate.",
              "AI-generated content may require client review and approval.",
              "Clients remain responsible for reviewing deliverables before publication or implementation.",
              "Unless expressly agreed, client data will not be used to train public AI models.",
            ]} />
          </Section>

          <Section title="9. Confidentiality">
            <p className="text-slate-600">Both parties agree to maintain the confidentiality of any non-public business, technical, financial, or proprietary information exchanged during the course of the engagement, except where disclosure is required by law.</p>
          </Section>

          <Section title="10. Acceptable Use">
            <p className="text-slate-600 mb-3">You may not use our website or services to:</p>
            <List items={[
              "Violate any applicable law or regulation.",
              "Infringe intellectual property rights.",
              "Distribute malware or harmful code.",
              "Send spam or unsolicited communications.",
              "Engage in fraudulent, deceptive, or unlawful activities.",
              "Attempt to disrupt or compromise our systems or services.",
            ]} />
          </Section>

          <Section title="11. Third-Party Services">
            <p className="text-slate-600">Our website or services may integrate with or link to third-party platforms such as Google, Meta, LinkedIn, YouTube, payment gateways, hosting providers, analytics providers, and other software vendors. Vinofyx is not responsible for the availability, content, or policies of third-party services.</p>
          </Section>

          <Section title="12. Website Availability">
            <p className="text-slate-600">We strive to keep our website available and secure. However, we do not guarantee uninterrupted or error-free access and may suspend or modify the website for maintenance, updates, or other operational reasons without prior notice.</p>
          </Section>

          <Section title="13. Disclaimer of Warranties">
            <p className="text-slate-600 mb-3">Our website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. While we use reasonable skill and care in providing our services, we do not guarantee:</p>
            <List items={[
              "Specific search engine rankings.",
              "A particular increase in revenue, leads, or sales.",
              "Continuous website availability.",
              "Error-free or uninterrupted services.",
              "That third-party platforms or algorithms will remain unchanged.",
            ]} />
            <p className="text-slate-600 mt-3">Digital marketing outcomes depend on many factors beyond our control, including market conditions and changes to third-party platforms.</p>
          </Section>

          <Section title="14. Limitation of Liability">
            <p className="text-slate-600">To the fullest extent permitted by law, Vinofyx shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, business interruption, loss of data, or loss of goodwill arising from the use of our website or services.</p>
            <p className="text-slate-600 mt-3">Where liability cannot be excluded, Vinofyx&apos;s aggregate liability shall not exceed the total fees paid by the client for the specific services giving rise to the claim.</p>
          </Section>

          <Section title="15. Indemnification">
            <p className="text-slate-600 mb-3">You agree to indemnify and hold harmless Vinofyx, its directors, employees, contractors, and affiliates from any claims, losses, liabilities, damages, or expenses arising from:</p>
            <List items={[
              "Your breach of these Terms.",
              "Your misuse of our website or services.",
              "Your violation of applicable laws.",
              "Your infringement of any third-party rights.",
            ]} />
          </Section>

          <Section title="16. Suspension or Termination">
            <p className="text-slate-600 mb-3">We reserve the right to suspend or terminate access to our website or services if you:</p>
            <List items={[
              "Breach these Terms.",
              "Engage in unlawful or fraudulent conduct.",
              "Fail to make required payments.",
              "Misuse our services.",
            ]} />
            <p className="text-slate-600 mt-3">Termination does not affect accrued rights or obligations.</p>
          </Section>

          <Section title="17. Privacy">
            <p className="text-slate-600">Your use of our website is also governed by our{" "}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> and{" "}
              <Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link>, which describe how we collect, use, and protect your information.
            </p>
          </Section>

          <Section title="18. Changes to These Terms">
            <p className="text-slate-600">We may update these Terms from time to time. The revised version will be posted on this page with an updated Effective Date. Continued use of the website after changes become effective constitutes acceptance of the revised Terms.</p>
          </Section>

          <Section title="19. Governing Law and Jurisdiction">
            <p className="text-slate-600">These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana, India, unless otherwise required by applicable law.</p>
          </Section>

          <Section title="20. Contact Us">
            <p className="text-slate-600 mb-3">If you have any questions about these Terms of Service, please contact us:</p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li><strong>Website:</strong> <a href="https://vinofyx.com" className="text-blue-600 hover:underline">https://vinofyx.com</a></li>
              <li><strong>Email:</strong> <a href="mailto:info@vinofyx.com" className="text-blue-600 hover:underline">info@vinofyx.com</a></li>
              <li><strong>Location:</strong> Hyderabad, Telangana, India</li>
            </ul>
          </Section>

          <Section title="21. Entire Agreement">
            <p className="text-slate-600">These Terms, together with our Privacy Policy, Cookie Policy, and any applicable service agreement, proposal, quotation, or Statement of Work, constitute the entire agreement between you and Vinofyx regarding your use of our website and services and supersede any prior understandings relating to the same.</p>
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
