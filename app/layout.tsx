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
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
