import { Breadcrumbs } from "@/components/layout";
import { Container } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  return buildMetadata({ title: slug.replace(/-/g, " "), path: `/blog/${slug}` });
}

/**
 * Blog article. Rendered on demand (no generateStaticParams yet) so the
 * data source (MDX / CMS) can be plugged in later without changing the route.
 */
export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: slug }]} />
      <Container prose className="pb-16">
        <p className="text-sm text-muted">Category - [date] - [read time]</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{slug.replace(/-/g, " ")}</h1>
        <div className="mt-8 aspect-video rounded-card bg-surface" />
        <article className="mt-8 space-y-4 leading-relaxed">
          <p>Article body renders here. Sidebar (related posts, newsletter) is added on xl screens.</p>
        </article>
      </Container>
    </>
  );
}
