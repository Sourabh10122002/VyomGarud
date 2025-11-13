import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import "./globals.css";

const headingFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "VyomGarud — Military-grade UAV Systems",
  description:
    "High-reliability, precision-engineered UAV platforms with advanced autonomy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans antialiased`}>
        <Header />
        <Marquee />
        {children}
        <Footer />
      </body>
    </html>
  );
}
