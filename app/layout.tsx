import type { Metadata } from "next";
import { Anton, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextGen Tennis — Indoor 4–11 · Outdoor 11+ · Greater Phoenix",
  description:
    "Building the future of youth tennis in the US. Indoor red & orange ball training for ages 4–11 and outdoor development for players 11+, at year-round academies across the greater Phoenix area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${anton.variable} ${hanken.variable} h-full`}
    >
      <head>
        {/* Enable JS-gated reveals without ever shipping blank content to
            no-JS clients / crawlers. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="min-h-full bg-white text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
