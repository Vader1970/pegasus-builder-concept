export const site = {
  name: "Alderform Build Co.",
  title: "Alderform Build Co. | Built to a Higher Standard",
  description:
    "Alderform Build Co. is an independent fictional website concept for a premium residential building and renovations practice. Not a trading business.",
  ogTitle: "Alderform Build Co. | Built to a Higher Standard",
  ogDescription:
    "An illustrated design concept for premium residential building and renovations. Created by Pegasus Digital. Not a trading business.",
  eyebrow: "Woodend / North Canterbury",
  portfolioName: "Pegasus Digital",
  portfolioUrl: "https://pegasusdigital.co.nz",
  portfolioContactUrl: "https://pegasusdigital.co.nz/contact",
} as const;

export function siteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return raw.replace(/\/$/, "");
}
