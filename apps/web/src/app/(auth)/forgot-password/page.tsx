import Link from "next/link";
import { AuthShell } from "@/components/layout";
import { Button, Input } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Reset Password", path: "/forgot-password", noIndex: true });

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Forgot your password?"
      subtitle="Enter your email and we will send you a reset link."
      footer={
        <Link href="/login" className="text-brand-600 hover:underline">
          Back to log in
        </Link>
      }
    >
      <form className="space-y-4">
        <Input name="email" type="email" label="Email" required />
        <Button type="submit" className="w-full">
          Send reset link
        </Button>
      </form>
    </AuthShell>
  );
}
