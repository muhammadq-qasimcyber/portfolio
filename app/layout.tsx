import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://qasimazhar.dev"; // Replace with your deployed domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muhammad Qasim Azhar | AI & Software Developer",
  description:
    "Portfolio of Muhammad Qasim Azhar, a Computer Science student and aspiring AI & Software Developer with experience in AI-powered applications, software development, cybersecurity, and mobile development.",
  keywords: [
    "Muhammad Qasim Azhar",
    "AI Developer",
    "Software Developer",
    "Cybersecurity",
    "Computer Science Student",
    "Machine Learning",
    "Flutter Developer",
    "Pakistan",
  ],
  authors: [{ name: "Muhammad Qasim Azhar" }],
  openGraph: {
    title: "Muhammad Qasim Azhar | AI & Software Developer",
    description:
      "Computer Science student and aspiring AI & Software Developer building AI-powered applications, secure systems, and mobile experiences.",
    url: siteUrl,
    siteName: "Muhammad Qasim Azhar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Qasim Azhar | AI & Software Developer",
    description:
      "Computer Science student and aspiring AI & Software Developer building AI-powered applications, secure systems, and mobile experiences.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-base text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-accent-teal focus:px-4 focus:py-2 focus:text-base focus:font-semibold"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
