"use client";

import { Button, Input } from "@/components/ui";

/** Inline email capture used in the footer / blog sidebar. */
export function NewsletterForm() {
  return (
    <form className="flex flex-col gap-2 sm:flex-row" action="/api/newsletter" method="post">
      <div className="flex-1">
        <Input name="email" type="email" placeholder="you@example.com" aria-label="Email" required />
      </div>
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
