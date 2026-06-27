import type { Metadata } from "next";
import { Anton, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import CursorBall from "@/components/CursorBall";

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
  title: "NextGen Tennis — Indoor 4–12 · Outdoor 13+ · Greater Phoenix",
  description:
    "Engaging indoor tennis training for ages 4–12 and outdoor development for players 13+. Small-group, confidence-first coaching on partner courts across the Phoenix valley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${hanken.variable} h-full`}>
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
        <CursorBall />
        {children}
      </body>
    </html>
  );
}
