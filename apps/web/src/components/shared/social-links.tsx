import { siteConfig } from "@/config/site";

/**
 * Social icon row.
 * lucide-react no longer ships brand marks, so each entry renders a short
 * text mark for now. Swap `mark` for an inline SVG (e.g. from simple-icons)
 * when brand assets are added.
 */
const items = [
  { label: "X / Twitter", href: siteConfig.links.twitter, mark: "X" },
  { label: "Facebook", href: siteConfig.links.facebook, mark: "f" },
  { label: "Instagram", href: siteConfig.links.instagram, mark: "IG" },
  { label: "LinkedIn", href: siteConfig.links.linkedin, mark: "in" },
  { label: "YouTube", href: siteConfig.links.youtube, mark: "YT" },
  { label: "Telegram", href: siteConfig.links.telegram, mark: "TG" },
];

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map(({ label, href, mark }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="grid size-10 place-items-center rounded-full border border-border text-xs font-bold hover:bg-surface"
          >
            {mark}
          </a>
        </li>
      ))}
    </ul>
  );
}
