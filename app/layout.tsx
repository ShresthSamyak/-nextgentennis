import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import CursorBall from "@/components/CursorBall";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextGen Tennis — Building the Next Generation of Tennis Players",
  description:
    "Engaging indoor tennis training for ages 4–12 and outdoor development for players 13+. Small-group, confidence-first coaching across the greater Phoenix area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy">
        <CursorBall />
        {children}
      </body>
    </html>
  );
}
