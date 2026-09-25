import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout";
import { Container } from "@/components/ui";
import { getLegalDocument, legalSlugs } from "@/config/legal";
import { buildMetadata } from "@/lib/metadata";

type Params = Promise<{ document: string }>;

export function generateStaticParams() {
  return legalSlugs.map((document) => ({ document }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { document } = await params;
  const doc = getLegalDocument(document);
  if (!doc) return {};
  return buildMetadata({ title: doc.title, path: `/legal/${doc.slug}` });
}

/** Long-form legal text. Uses the narrow prose container for readability. */
export default async function LegalDocumentPage({ params }: { params: Params }) {
  const { document } = await params;
  const doc = getLegalDocument(document);
  if (!doc) notFound();

  return (
    <>
      <Breadcrumbs items={[{ label: "Legal" }, { label: doc.title }]} />
      <Container prose className="pb-16">
        <h1 className="text-3xl font-bold sm:text-4xl">{doc.title}</h1>
        <p className="mt-2 text-sm text-muted">Last updated: [date]</p>
        <article className="prose-neutral mt-8 space-y-4 text-sm leading-relaxed sm:text-base">
          <p>Document body will be sourced from MDX or a CMS. Structure: numbered sections, definitions, effective date.</p>
        </article>
      </Container>
    </>
  );
}
