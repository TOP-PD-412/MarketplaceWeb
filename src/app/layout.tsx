import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import Header from "./components/shared/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Учебный проект группы ПД-412",
};

export const headerTitle = "Marketplace";

export const headerNavItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
];

export default function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col gap-8">
        <Header title={headerTitle} items={headerNavItems} />
        {children}
      </body>
    </html>
  );
}
