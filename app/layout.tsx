import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loop Cleaning Services | Professional Cleaning Company in Kampala",
  description:
    "Loop Cleaning Services provides professional residential, commercial, and deep cleaning services in Kampala, Uganda. Book your cleaning session today.",
  keywords: [
    "cleaning services",
    "Kampala cleaning",
    "Loop Cleaning",
    "residential cleaning",
    "commercial cleaning",
    "deep cleaning",
  ],
  openGraph: {
    title: "Loop Cleaning Services | Professional Cleaning in Kampala",
    description:
      "Professional home & office cleaning in Kampala, Uganda. Spotless results, affordable prices.",
    type: "website",
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
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}