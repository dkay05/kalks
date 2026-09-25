import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout";
import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { getPlatform, platformSlugs } from "@/config/platforms";
import { buildMetadata } from "@/lib/metadata";

type Params = Promise<{ platform: string }>;

export function generateStaticParams() {
  return platformSlugs.map((platform) => ({ platform }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { platform } = await params;
  const p = getPlatform(platform);
  if (!p) return {};
  return buildMetadata({ title: p.name, description: p.summary, path: `/platforms/${p.slug}` });
}

export default async function PlatformPage({ params }: { params: Params }) {
  const { platform } = await params;
  const p = getPlatform(platform);
  if (!p) notFound();

  return (
    <>
      <Breadcrumbs items={[{ label: "Platforms", href: "/platforms" }, { label: p.name }]} />
      <PagePlaceholder
        title={p.name}
        description={p.summary}
        sections={["Hero with download buttons", "Feature highlights", "Screenshots / video", "System requirements", "Download links per OS", "FAQ"]}
      />
      <CtaBanner title={`Download ${p.name}`} primaryLabel="Get started" />
    </>
  );
}
