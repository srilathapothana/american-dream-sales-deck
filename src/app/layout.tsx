import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "American Dream — The World's Most Entertaining Destination",
  description: "Interactive Sales Deck for Prospective Tenants, Sponsors & Event Partners",
  openGraph: {
    title: "American Dream — Where the World Comes to Play",
    description: "5.3M sq ft. 40M+ visitors. 10 min from NYC.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
