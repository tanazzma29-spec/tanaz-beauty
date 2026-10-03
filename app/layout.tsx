import type { Metadata } from "next";
import "@fontsource/vazirmatn/300.css";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/estedad/400.css";
import "@fontsource/estedad/500.css";
import "@fontsource/estedad/600.css";
import "./globals.css";
import { LocalBusinessSchema } from "@/components/local-business-schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://tanazzbeauty.ir"),
  title: { default: "سالن زیبایی طناز | سپاهان‌شهر اصفهان", template: "%s | سالن زیبایی طناز" },
  description: "سالن زیبایی طناز در سپاهان‌شهر اصفهان؛ خدمات تخصصی مو، رنگ و لایت، کراتین و احیا، صورت، ناخن، مژه و مراقبت از پا. رزرو نوبت از طریق تلگرام.",
  keywords: ["سالن زیبایی سپاهان شهر","سالن زیبایی اصفهان","سالن زیبایی طناز","رنگ مو سپاهان شهر","کراتین مو سپاهان شهر","کاشت ناخن سپاهان شهر","اکستنشن مژه سپاهان شهر","میکاپ اصفهان","مراقبت از پا سپاهان شهر"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "fa_IR", url: "/", siteName: "سالن زیبایی طناز", title: "سالن زیبایی طناز | سپاهان‌شهر اصفهان", description: "خدمات تخصصی مو، صورت، ناخن، مژه و مراقبت از پا در سپاهان‌شهر اصفهان." },
  twitter: { card: "summary", title: "سالن زیبایی طناز | سپاهان‌شهر اصفهان", description: "خدمات تخصصی زیبایی در سپاهان‌شهر اصفهان." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: { google: "9ZeSLDSsOVYJpkCtSMbZ_mZk5sTV9ohScV-R9cIu4QI" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body><LocalBusinessSchema />{children}</body></html>;
}
