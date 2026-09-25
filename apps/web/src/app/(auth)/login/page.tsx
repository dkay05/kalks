import Link from "next/link";
import { LoginForm } from "@/components/forms";
import { AuthShell } from "@/components/layout";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Log in", path: "/login", noIndex: true });

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to your client portal."
      footer={
        <>
          New to KALKS?{" "}
          <Link href="/register" className="text-brand-600 hover:underline">
            Open an account
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}
