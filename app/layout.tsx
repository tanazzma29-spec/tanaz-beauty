import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "سالن زیبایی طناز | Tanaz Beauty",
  description:
    "سالن زیبایی طناز در سپاهانشهر؛ خدمات تخصصی رنگ و احیای مو، کوتاهی، میکاپ، شینیون، ابرو، مژه و ناخن.",
  verification: {
    google: "9ZeSLDSsOVYJpkCtSMbZ_mZk5sTV9ohScV-R9cIu4QI",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${display.variable} ${sans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}