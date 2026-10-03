import type { Metadata } from "next";

import "@fontsource/vazirmatn/300.css";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";

import "@fontsource/estedad/400.css";
import "@fontsource/estedad/500.css";
import "@fontsource/estedad/600.css";

import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "طناز | سالن زیبایی در سپاهان‌شهر",
    template: "%s | طناز",
  },
  description:
    "سالن زیبایی طناز در سپاهان‌شهر؛ خدمات تخصصی مو، صورت، ناخن، مژه و مراقبت پا.",
  keywords: [
    "سالن زیبایی طناز",
    "سالن زیبایی سپاهان شهر",
    "آرایشگاه زنانه سپاهان شهر",
    "کاشت ناخن",
    "مژه",
    "رنگ مو",
    "مراقبت پوست",
    "طناز بیوتی",
  ],
  authors: [{ name: "Tanaz Beauty Salon" }],
  creator: "Tanaz Beauty Salon",
  publisher: "Tanaz Beauty Salon",
  openGraph: {
    title: "طناز | سالن زیبایی در سپاهان‌شهر",
    description:
      "سالن زیبایی طناز؛ تجربه‌ای متفاوت از زیبایی، ظرافت و مراقبت حرفه‌ای.",
    locale: "fa_IR",
    type: "website",
    siteName: "Tanaz Beauty Salon",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "سالن زیبایی طناز",
  description:
    "سالن زیبایی طناز در سپاهان‌شهر با ارائه خدمات تخصصی مو، صورت، ناخن، مژه و مراقبت پا.",
  telephone: "+983136518167",
  address: {
    "@type": "PostalAddress",
    addressLocality: "سپاهان‌شهر",
    addressCountry: "IR",
  },
  sameAs: ["https://www.instagram.com/tanazz.beauty/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}