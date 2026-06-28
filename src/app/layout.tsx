import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VINOFYX PRIVATE LIMITED | Global AI & Digital Transformation",
  description:
    "VINOFYX PRIVATE LIMITED — Global technology company delivering AI, software engineering, data analytics, and enterprise transformation across every industry.",
  keywords: [
    "AI solutions",
    "digital transformation",
    "software development",
    "data engineering",
    "enterprise technology",
    "VINOFYX",
  ],
  openGraph: {
    title: "VINOFYX PRIVATE LIMITED | Global AI & Digital Transformation",
    description:
      "Empowering organizations worldwide through AI, software, data engineering, digital transformation, consulting, and innovation.",
    type: "website",
    siteName: "VINOFYX PRIVATE LIMITED",
  },
  twitter: {
    card: "summary_large_image",
    title: "VINOFYX PRIVATE LIMITED",
    description: "Global AI & Digital Transformation Company",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Hidden SVG filter: makes white/near-white pixels transparent so PNG logos blend seamlessly */}
        <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }} aria-hidden="true">
          <defs>
            <filter id="remove-white" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 3 0" />
            </filter>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
