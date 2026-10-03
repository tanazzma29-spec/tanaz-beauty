const schema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "سالن زیبایی طناز",
  alternateName: "Tanaz Beauty Salon",
  url: "https://tanazzbeauty.ir",
  telephone: "+983136518167",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IR",
    addressRegion: "اصفهان",
    addressLocality: "سپاهان‌شهر",
    streetAddress: "بلوار غدیر، مجتمع عقیق ۵، طبقه زیرین، انتهای راهرو، پلاک ۲۲"
  },
  sameAs: ["https://www.instagram.com/tanazz.beauty/", "https://t.me/Tanazbeautybot"],
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+983136518167", contactType: "customer service", availableLanguage: ["fa"] },
    { "@type": "ContactPoint", telephone: "+989307984291", contactType: "customer service", availableLanguage: ["fa"] }
  ],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "خدمات سالن زیبایی طناز", itemListElement: [
    { "@type": "OfferCatalog", name: "خدمات مو" }, { "@type": "OfferCatalog", name: "خدمات صورت" }, { "@type": "OfferCatalog", name: "خدمات ناخن" }, { "@type": "OfferCatalog", name: "خدمات مژه" }, { "@type": "OfferCatalog", name: "مراقبت از پا" }
  ] }
};
export function LocalBusinessSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
