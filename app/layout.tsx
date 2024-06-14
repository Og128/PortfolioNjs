import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Olivier Gautheron",
  description: "Freelance, web Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(
      GeistSans.variable,
      GeistMono.variable,
      inter.variable,
      "bg-background h-full text-foreground")}>
      <body >{children}</body>
    </html>
  );
}