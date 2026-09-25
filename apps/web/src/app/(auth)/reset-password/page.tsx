import { AuthShell } from "@/components/layout";
import { Button, Input } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Choose a New Password", path: "/reset-password", noIndex: true });

/** Reached from the emailed link: /reset-password?token=... */
export default function ResetPasswordPage() {
  return (
    <AuthShell title="Choose a new password">
      <form className="space-y-4">
        <Input name="password" type="password" label="New password" autoComplete="new-password" required />
        <Input name="confirm" type="password" label="Confirm password" autoComplete="new-password" required />
        <Button type="submit" className="w-full">
          Update password
        </Button>
      </form>
    </AuthShell>
  );
}
