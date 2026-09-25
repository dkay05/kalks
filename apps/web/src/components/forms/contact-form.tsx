"use client";

import { Button, Input } from "@/components/ui";

/** Contact form shell. Wire `action` to /api/contact or a server action. */
export function ContactForm() {
  return (
    <form className="grid gap-4 sm:grid-cols-2" action="/api/contact" method="post">
      <Input name="name" label="Full name" required />
      <Input name="email" type="email" label="Email" required />
      <div className="sm:col-span-2">
        <Input name="subject" label="Subject" />
      </div>
      <div className="space-y-1.5 sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-border bg-background p-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
        />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit">Send message</Button>
      </div>
    </form>
  );
}
