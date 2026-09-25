import { ContactForm } from "@/components/forms";
import { Card, Section, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Contact Us", path: "/contact" });

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading as="h1" title="Contact us" description="Our support team is available 24/5." align="left" />
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <Card>
          <ContactForm />
        </Card>
        <aside className="space-y-6 text-sm">
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-muted">{siteConfig.contact.email}</p>
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p className="text-muted">{siteConfig.contact.phone}</p>
          </div>
          <div>
            <p className="font-semibold">Office</p>
            <p className="text-muted">{siteConfig.contact.address}</p>
          </div>
          <div className="aspect-square rounded-card bg-surface" />
        </aside>
      </div>
    </Section>
  );
}
