import type { LegalDocument } from "@/types";

/** Drives /legal/[document]. Content will later come from a CMS or MDX. */
export const legalDocuments: LegalDocument[] = [
  { slug: "terms", title: "Terms & Conditions" },
  { slug: "privacy", title: "Privacy Policy" },
  { slug: "risk-disclosure", title: "Risk Disclosure Statement" },
  { slug: "cookie-policy", title: "Cookie Policy" },
  { slug: "aml-policy", title: "Anti-Money Laundering Policy" },
  { slug: "client-agreement", title: "Client Agreement" },
];

export const legalSlugs = legalDocuments.map((d) => d.slug);

export function getLegalDocument(slug: string) {
  return legalDocuments.find((d) => d.slug === slug);
}
