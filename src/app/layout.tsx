import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
  adjustFontFallback: true,
});

const url = siteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    siteName: site.name,
    title: site.ogTitle,
    description: site.ogDescription,
    url,
    images: [
      {
        url: "/images/hero-poster.webp",
        width: 1920,
        height: 1080,
        alt: "Illustrative contemporary home exterior used in the hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.ogTitle,
    description: site.ogDescription,
    images: ["/images/hero-poster.webp"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: ["/favicon.ico"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#151719",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-NZ" className={manrope.variable}>
      <body className={manrope.className}>{children}</body>
      <Analytics />
    </html>
  );
}
