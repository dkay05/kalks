import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Video Tutorials",
  description: "Short platform and strategy walkthroughs.",
  path: "/education/video-tutorials",
});

export default function EducationVideoTutorialsPage() {
  return (
    <>
      <PagePlaceholder
        title="Video Tutorials"
        description="Short platform and strategy walkthroughs."
        sections={["Video grid","Filters by topic","Playlist"]}
      />
      <CtaBanner />
    </>
  );
}
