import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebNestle — High-End Web Design Agency",
  description: "Your business deserves a website that feels like a brand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#07090e] text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}