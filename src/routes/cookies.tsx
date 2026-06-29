import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal-layout";
import { COMPANY } from "@/lib/company";

const TITLE = "Cookie Policy | Job Ladder Recruiting";
const DESC = "How Job Ladder Recruiting uses cookies and similar technologies on the jobladderrecruiting.com website.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://jobladderrecruiting.com/cookies" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://jobladderrecruiting.com/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" updated="January 2026">
      <p>
        This Cookie Policy explains how {COMPANY.legalName} uses cookies and
        similar technologies on the Job Ladder Recruiting website.
      </p>

      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help websites remember your preferences and understand
        how visitors use the site.
      </p>

      <h2>2. Cookies we may use</h2>
      <ul>
        <li>
          <strong>Strictly necessary cookies</strong> — required for the website
          to function correctly, such as remembering form state.
        </li>
        <li>
          <strong>Analytics cookies</strong> — help us understand how the site
          is used so we can improve it. These are only set with your consent
          where required.
        </li>
      </ul>

      <h2>3. Managing cookies</h2>
      <p>
        You can control cookies through your browser settings, including
        blocking or deleting them. Disabling certain cookies may affect how the
        website works.
      </p>

      <h2>4. Changes to this policy</h2>
      <p>
        We may update this Cookie Policy from time to time. The "last updated"
        date at the top of this page reflects the most recent revision.
      </p>

      <h2>5. Contact</h2>
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