import type { Metadata } from "next";
import "./globals.css";
import SkipLink from "@/components/ui/SkipLink";

export const metadata: Metadata = {
  metadataBase: new URL("https://american-dream-sales-deck-ashy.vercel.app"),
  title: "American Dream — The World's Most Entertaining Destination",
  description: "Interactive Sales Deck for Prospective Tenants, Sponsors & Event Partners",
  openGraph: {
    title: "American Dream — Where the World Comes to Play",
    description: "5.3M sq ft. 40M+ visitors. 10 min from NYC.",
    images: ["/og-image.svg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <SkipLink />
        <main id="main-content" role="main" aria-label="American Dream interactive sales deck">
          {children}
        </main>
      </body>
    </html>
  );
}