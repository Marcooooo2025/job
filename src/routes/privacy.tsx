import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal-layout";
import { COMPANY } from "@/lib/company";

const TITLE = "Privacy Policy | Job Ladder Recruiting";
const DESC = "How Job Ladder Recruitment Agency Limited collects, uses and protects personal information for candidates and employer contacts.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://jobladderrecruiting.com/privacy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://jobladderrecruiting.com/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="January 2026">
      <p>
        This Privacy Policy explains how {COMPANY.legalName} ("we", "us", "our")
        collects and uses personal information when you use our website or
        services as a candidate, client or visitor.
      </p>
      <p>
        We aim to handle personal data in line with the UK General Data Protection
        Regulation (UK GDPR) and the Data Protection Act 2018. This policy
        describes our intended practices and does not certify regulatory
        compliance — please contact us with any questions.
      </p>

      <h2>1. Who we are</h2>
      <p>
        {COMPANY.legalName} is a company registered in England and Wales with
        company number {COMPANY.companyNumber}. Our registered office is{" "}
        {COMPANY.address.display}.
      </p>

      <h2>2. Information we collect</h2>
      <ul>
        <li>Contact details (name, email, phone, location).</li>
        <li>Information you provide on application forms or your CV.</li>
        <li>Right-to-work and reference information where required for a role.</li>
        <li>Employer contact details and staffing requirements.</li>
        <li>Basic technical data from your visit to this website (such as browser type).</li>
      </ul>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To match candidates with suitable employer vacancies.</li>
        <li>To communicate with you about applications, roles and enquiries.</li>
        <li>To meet legal, regulatory and contractual obligations.</li>
        <li>To improve our services and website experience.</li>
      </ul>

      <h2>4. Sharing your information</h2>
      <p>
        We may share candidate information with prospective employers where you
        have applied for or expressed interest in a relevant role. We do not sell
        personal data. We may use trusted third-party service providers (for
        example, email or cloud hosting) under appropriate data protection
        terms.
      </p>

      <h2>5. How long we keep your information</h2>
      <p>
        We keep personal data only for as long as necessary for the purposes
        described above, or as required by law. Candidate records are typically
        retained for the period needed to support ongoing job-matching unless
        you ask us to delete them earlier.
      </p>

      <h2>6. Your rights</h2>
      <p>
        Under UK data protection law, you have rights including access,
        correction, deletion, restriction and objection regarding your personal
        data. To exercise these rights, contact us using the details below. You
        may also raise a concern with the Information Commissioner's Office
        (ICO).
      </p>

      <h2>7. Cookies</h2>
      <p>
        Our website may use cookies and similar technologies for essential
        functionality and analytics. See our{" "}
        <a href="/cookies" className="font-semibold text-secondary underline">
          Cookie Policy
        </a>{" "}
        for more detail.
      </p>

      <h2>8. Contact us about this policy</h2>
      <p>
        {COMPANY.legalName}
        <br />Company Number: {COMPANY.companyNumber}
        <br />Registered Office: {COMPANY.address.display}
        <br />Email:{" "}
        <a href={`mailto:${COMPANY.email}`} className="font-semibold text-secondary underline">
          {COMPANY.email}
        </a>
      </p>
    </LegalLayout>
  );
}