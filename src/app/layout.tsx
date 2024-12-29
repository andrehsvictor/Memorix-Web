import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";

export const nunito = Nunito();

export const nunitoSans = Nunito_Sans();

export const metadata: Metadata = {
  title: "Memorix",
  keywords: [
    "memorize",
    "memorization",
    "flashcards",
    "study",
    "learning",
    "education",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${nunitoSans.className} antialiased bg-background text-text`}
      >
        {children}
      </body>
    </html>
  );
}
