import { Section, SectionHeading } from "@/components/ui";

const steps = [
  { title: "Register", text: "Create your account in under two minutes." },
  { title: "Verify", text: "Upload your ID and proof of address." },
  { title: "Fund", text: "Deposit via card, bank transfer or e-wallet." },
  { title: "Trade", text: "Access 500+ instruments on any platform." },
];

/** "How it works" horizontal stepper. Vertical on mobile, 4 across on md+. */
export function Steps() {
  return (
    <Section tone="surface">
      <SectionHeading eyebrow="Get started" title="Start trading in four steps" />
      <ol className="grid gap-8 md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="relative flex gap-4 md:block">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-600 font-bold text-white md:mb-4">
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-muted">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
