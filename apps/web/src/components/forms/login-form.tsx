"use client";

import Link from "next/link";
import { Button, Input } from "@/components/ui";

export function LoginForm() {
  return (
    <form className="space-y-4">
      <Input name="email" type="email" label="Email" autoComplete="email" required />
      <Input name="password" type="password" label="Password" autoComplete="current-password" required />
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" name="remember" className="size-4" /> Remember me
        </label>
        <Link href="/forgot-password" className="text-brand-600 hover:underline">
          Forgot password?
        </Link>
      </div>
      <Button type="submit" className="w-full">
        Log in
      </Button>
    </form>
  );
}
