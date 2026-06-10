import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naveedahmedsyed.com"), // TODO — set to your real domain
  title: `${profile.shortName} — ${profile.role}`,
  description:
    "Software & AI security engineer building intelligent, secure systems. Research notes on agentic AI, application security, RAG, and distributed systems.",
  openGraph: {
    title: `${profile.shortName} — ${profile.role}`,
    description:
      "Software & AI security engineer building intelligent, secure systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.shortName} — ${profile.role}`,
    description:
      "Software & AI security engineer building intelligent, secure systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
