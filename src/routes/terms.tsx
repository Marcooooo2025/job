import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal-layout";
import { COMPANY } from "@/lib/company";

const TITLE = "Terms & Conditions | Job Ladder Recruiting";
const DESC = "Terms governing use of the Job Ladder Recruiting website and services provided by Job Ladder Recruitment Agency Limited.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://jobladderrecruiting.com/terms" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://jobladderrecruiting.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="January 2026">
      <p>
        These Terms govern your use of the Job Ladder Recruiting website
        (jobladderrecruiting.com) operated by {COMPANY.legalName}. By using this
        website you agree to these Terms.
      </p>

      <h2>1. Our company</h2>
      <p>
        {COMPANY.legalName} is a company registered in England and Wales,
        company number {COMPANY.companyNumber}, with its registered office at{" "}
        {COMPANY.address.display}.
      </p>

      <h2>2. Information on this website</h2>
      <p>
        We make reasonable efforts to keep the information on this website
        accurate and up to date, but we make no warranties or representations
        as to its accuracy or completeness. Job listings shown on this website
        are illustrative; current availability should be confirmed with our
        team.
      </p>

      <h2>3. Applications and enquiries</h2>
      <p>
        Submitting an application or enquiry does not create an offer of
        employment or a binding agreement to provide staffing services. Any
        engagement will be subject to separate written terms.
      </p>

      <h2>4. Acceptable use</h2>
      <ul>
        <li>Do not submit false, misleading or unlawful information.</li>
        <li>Do not attempt to disrupt, scrape or misuse the website.</li>
        <li>Do not infringe the intellectual property of others.</li>
      </ul>

      <h2>5. Intellectual property</h2>
      <p>
        All content on this website (including text, branding and design) is
        owned by or licensed to {COMPANY.legalName} and may not be reproduced
        without permission.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, we are not liable for any
        indirect or consequential loss arising from your use of this website.
        Nothing in these Terms limits any liability that cannot lawfully be
        excluded.
      </p>

      <h2>7. Governing law</h2>
      <p>
        These Terms are governed by the laws of England and Wales, and the
        courts of England and Wales have exclusive jurisdiction over any
        dispute.
      </p>

      <h2>8. Contact</h2>
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