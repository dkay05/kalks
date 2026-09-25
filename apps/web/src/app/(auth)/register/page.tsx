import Link from "next/link";
import { RegisterForm } from "@/components/forms";
import { AuthShell } from "@/components/layout";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Open an Account", path: "/register", noIndex: true });

export default function RegisterPage() {
  return (
    <AuthShell
      title="Open your account"
      subtitle="Takes less than two minutes. Demo and live accounts available."
      footer={
        <>
          Already registered?{" "}
          <Link href="/login" className="text-brand-600 hover:underline">
            Log in
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthShell>
  );
}
