import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({subsets:["latin"],variable:"--font-cormorant",weight:["400","500","600","700"]});
const sans = Inter({subsets:["latin"],variable:"--font-inter"});

export const metadata: Metadata = {
  title:"Tanaz Beauty | Beauty, Reimagined",
  description:"Tanaz Beauty — luxury beauty studio."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en" className={`${display.variable} ${sans.variable}`}><body>{children}</body></html>;
}