import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AmzAdvanta - Amazon PPC Management Agency",
  description: "Transform your Amazon business with expert PPC management. We deliver measurable results through data-driven campaign optimization, keyword research, and strategic advertising solutions.",
  keywords: "Amazon PPC, PPC Management, Amazon Advertising, Campaign Optimization, Amazon Marketing",
  authors: [{ name: "AmzAdvanta" }],
  openGraph: {
    title: "AmzAdvanta - Amazon PPC Management Agency",
    description: "Transform your Amazon business with expert PPC management",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
