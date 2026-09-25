import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Webinars",
  description: "Live and on-demand sessions with market analysts.",
  path: "/education/webinars",
});

export default function EducationWebinarsPage() {
  return (
    <>
      <PagePlaceholder
        title="Webinars"
        description="Live and on-demand sessions with market analysts."
        sections={["Upcoming schedule","Registration form","Recordings archive"]}
      />
      <CtaBanner />
    </>
  );
}
