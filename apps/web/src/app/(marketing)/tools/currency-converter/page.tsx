import { PagePlaceholder } from "@/components/shared";
import { CtaBanner } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Currency Converter",
  description: "Convert between 30+ currencies at live rates.",
  path: "/tools/currency-converter",
});

export default function ToolsCurrencyConverterPage() {
  return (
    <>
      <PagePlaceholder
        title="Currency Converter"
        description="Convert between 30+ currencies at live rates."
        sections={["Converter form","Rate table"]}
      />
      <CtaBanner />
    </>
  );
}
