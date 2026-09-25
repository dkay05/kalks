import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Trading insights, guides and company news.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PagePlaceholder
        title="Blog"
        description="Trading insights, guides and company news."
        sections={["Featured post","Post grid","Category filter","Pagination","Newsletter form"]}
      />
      <CtaBanner />
    </>
  );
}
