"use client";

import Link from "next/link";
import { Button, Input } from "@/components/ui";

/**
 * Registration step 1 (personal details). Later steps (account type,
 * KYC upload) live in the portal under /dashboard/verification.
 */
export function RegisterForm() {
  return (
    <form className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="firstName" label="First name" autoComplete="given-name" required />
        <Input name="lastName" label="Last name" autoComplete="family-name" required />
      </div>
      <Input name="email" type="email" label="Email" autoComplete="email" required />
      <Input name="phone" type="tel" label="Phone" autoComplete="tel" />
      <Input name="password" type="password" label="Password" autoComplete="new-password" required />
      <label className="flex items-start gap-2 text-xs text-muted">
        <input type="checkbox" name="accept" required className="mt-0.5 size-4" />
        <span>
          I have read and accept the{" "}
          <Link href="/legal/client-agreement" className="text-brand-600 hover:underline">
            Client Agreement
          </Link>{" "}
          and{" "}
          <Link href="/legal/risk-disclosure" className="text-brand-600 hover:underline">
            Risk Disclosure
          </Link>
          .
        </span>
      </label>
      <Button type="submit" className="w-full">
        Create account
      </Button>
    </form>
  );
}
