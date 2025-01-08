import { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joni Harju personal portfolio",
  description: "A description.",
  keywords: [
    "portfolio",
    "web development",
    "react",
    "next.js",
    "tailwind",
    "javascript",
    "typescript",
    "sanity",
    "frontend",
    "fullstack",
    "developer",
    "helsinki",
    "finland",
    "suomi",
    "ohjelmistokehittäjä",
    "kotisivut",
    "verkkosivut",
    "verkkosivu",
    "kotisivu",
    "koodari",
    "koodaus",
    "kotisivukoodaus",
    "verkkosivukoodaus",
    "webbisivut",
    "webbidevaus",
    "webbidevaaja",
    "web developer",
    "web development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className={raleway.className}>{children}</body>
    </html>
  );
}
