import type { AccountType } from "@/types";

export const accountTypes: AccountType[] = [
  {
    slug: "standard",
    name: "Standard",
    minDeposit: 100,
    spreadFrom: "1.0 pips",
    commission: "None",
    leverage: "Up to 1:500",
    highlights: ["No commission", "All instruments", "Free education"],
  },
  {
    slug: "pro",
    name: "Pro",
    minDeposit: 1000,
    spreadFrom: "0.5 pips",
    commission: "None",
    leverage: "Up to 1:500",
    highlights: ["Tighter spreads", "Priority support", "VPS eligible"],
    recommended: true,
  },
  {
    slug: "ecn",
    name: "ECN",
    minDeposit: 5000,
    spreadFrom: "0.0 pips",
    commission: "$3 per lot / side",
    leverage: "Up to 1:200",
    highlights: ["Raw spreads", "Direct market access", "Dedicated manager"],
  },
];
