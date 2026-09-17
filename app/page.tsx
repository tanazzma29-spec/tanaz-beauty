"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Instagram,
  MapPin,
  Phone,
  Star,
  Send,
  Clock,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { useState } from "react";

const content = {
  fa: {
    nav: ["خانه", "خدمات", "درباره ما", "گالری", "تماس"],
    brand: "سالن زیبایی طناز مردانی",
    eyebrow: "سالن زیبایی طناز مردانی",
    heroTitle: "زیبایی،",
    heroTitle2: "به سبک تو.",
    heroText:
      "اینجا زیبایی فقط یک نتیجه نیست؛ تجربه‌ای آرام، حرفه‌ای و متناسب با چهره و سلیقه شماست.",
    book: "رزرو نوبت",
    galleryBtn: "مشاهده نمونه کارها",

    features: [
      ["۰۱", "تخصص و دقت", "هر خدمات با توجه به چهره، سلیقه و خواسته شما انجام می‌شود."],
      ["۰۲", "کیفیت و ظرافت", "توجه به جزئیات و استفاده از تکنیک‌های حرفه‌ای زیبایی."],
      ["۰۳", "تجربه آرام", "محیطی صمیمی و آرام برای داشتن یک تجربه متفاوت از زیبایی."],
    ],

    servicesLabel: "خدمات ما",
    servicesTitle: "زیبایی با",
    servicesTitle2: "امضای طناز",
    servicesText:
      "مجموعه‌ای از خدمات تخصصی زیبایی با تمرکز بر ظرافت، کیفیت و نتیجه‌ای طبیعی و ماندگار.",

    services: [
      ["۰۱", "رنگ و مش", "رنگ، هایلایت، بالیاژ، آمبره و تکنیک‌های تخصصی رنگ مو."],
      ["۰۲", "کوتاهی و براشینگ", "کوتاهی حرفه‌ای، فرم‌دهی، براشینگ و استایل مو."],
      ["۰۳", "میکاپ", "میکاپ حرفه‌ای برای مهمانی، مراسم و مناسبت‌های خاص."],
      ["۰۴", "شینیون", "شینیون و استایل مو متناسب با چهره و نوع مراسم."],
      ["۰۵", "خدمات ابرو و مژه", "زیبایی و فرم‌دهی ابرو و مژه با ظرافت و دقت."],
      ["۰۶", "خدمات ناخن", "خدمات زیبایی ناخن با طراحی‌های ظریف و مدرن."],
    ],

    storyLabel: "درباره طناز بیوتی",
    storyTitle: "زیبایی یعنی",
    storyTitle2: "خودت باشی.",
    storyText:
      "در سالن زیبایی طناز مردانی تلاش می‌کنیم زیبایی طبیعی هر فرد را بهتر نمایان کنیم. هدف ما خلق ظاهری زیبا و در عین حال هماهنگ با شخصیت و سلیقه شماست.",

    galleryLabel: "نمونه کارها",
    galleryTitle: "دنیای",
    galleryTitle2: "زیبایی ما",

    review:
      "«تجربه‌ای فوق‌العاده بود. نتیجه دقیقاً چیزی شد که می‌خواستم؛ ظریف، زیبا و کاملاً متناسب با چهره‌ام.»",

    readyLabel: "برای زیبایی بعدی آماده‌ای؟",
    readyTitle: "نوبت زیبایی",
    readyTitle2: "خودت را رزرو کن.",
    phoneBtn: "تماس با سالن",
    telegramBtn: "رزرو نوبت در تلگرام",

    visit: "آدرس سالن",
    contact: "تماس",
    hours: "ساعات کاری",
    hoursText: "شنبه تا پنجشنبه",
    hoursTime: "۱۰:۰۰ تا ۲۰:۰۰",
    instagram: "اینستاگرام",
    telegram: "ربات نوبت‌دهی",
    footer:
      "سالن زیبایی طناز مردانی؛ زیبایی حرفه‌ای، ظریف و متناسب با شما.",
  },

  en: {
    nav: ["Home", "Services", "About", "Gallery", "Contact"],
    brand: "Tanaz Mardani Beauty Salon",
    eyebrow: "Tanaz Mardani Beauty Salon",
    heroTitle: "Beauty,",
    heroTitle2: "your way.",
    heroText:
      "Beauty is more than a result. It is a calm, professional experience created around you.",
    book: "Book an appointment",
    galleryBtn: "Explore our work",

    features: [
      ["01", "Precision", "Every service is tailored to your features, style and vision."],
      ["02", "Quality", "Professional beauty techniques with thoughtful attention to detail."],
      ["03", "Experience", "A calm and welcoming environment for a truly personal beauty experience."],
    ],

    servicesLabel: "Our services",
    servicesTitle: "Beauty with",
    servicesTitle2: "the Tanaz touch",
    servicesText:
      "Professional beauty services focused on elegance, quality and naturally beautiful results.",

    services: [
      ["01", "Hair Color", "Color, highlights, balayage, ombre and professional hair coloring."],
      ["02", "Cut & Blow Dry", "Professional cuts, styling, blowouts and hair shaping."],
      ["03", "Makeup", "Professional makeup for parties, events and special occasions."],
      ["04", "Hair Styling", "Elegant hairstyles and updos tailored to your face and occasion."],
      ["05", "Brows & Lashes", "Detailed brow and lash services designed to enhance your features."],
      ["06", "Nails", "Elegant and modern nail services with refined designs."],
    ],

    storyLabel: "About Tanaz Beauty",
    storyTitle: "Beauty means",
    storyTitle2: "being yourself.",
    storyText:
      "At Tanaz Mardani Beauty Salon, we believe in enhancing your natural beauty. Our goal is to create a look that feels beautiful, authentic and completely yours.",

    galleryLabel: "Our work",
    galleryTitle: "Our beauty",
    galleryTitle2: "world",

    review:
      "“An amazing experience. The result was exactly what I wanted — elegant, beautiful and perfectly suited to me.”",

    readyLabel: "Ready for your next beauty experience?",
    readyTitle: "Book your",
    readyTitle2: "beauty appointment.",
    phoneBtn: "Call the salon",
    telegramBtn: "Book via Telegram",

    visit: "Salon address",
    contact: "Contact",
    hours: "Opening hours",
    hoursText: "Saturday to Thursday",
    hoursTime: "10:00 AM – 8:00 PM",
    instagram: "Instagram",
    telegram: "Booking bot",
    footer:
      "Tanaz Mardani Beauty Salon — professional beauty, refined and made for you.",
  },
};

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=90",
    alt: "Hair styling",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=90",
    alt: "Beauty makeup",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=90",
    alt: "Makeup beauty",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=90",
    alt: "Beauty salon",
  },
  {
    src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1400&q=90",
    alt: "Beauty look",
  },
  {
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=90",
    alt: "Hair beauty",
  },
];

export default function Home() {
  const [lang, setLang] = useState<"fa" | "en">("fa");
  const t = content[lang];
  const isFa = lang === "fa";

  return (
    <main dir={isFa ? "rtl" : "ltr"} className="bg-ivory text-ink">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-ivory/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#" className="font-display text-xl tracking-[.12em]">
            TANAZ <span className="text-gold">BEAUTY</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {t.nav.map((item, index) => (
              <a
                key={item}
                href={["#", "#services", "#story", "#gallery", "#contact"][index]}
                className="text-[11px] transition hover:text-gold"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(isFa ? "en" : "fa")}
              className="rounded-full border border-black/15 px-4 py-2 text-[10px] font-medium"
            >
              {isFa ? "EN" : "FA"}
            </button>

            <a
              href="https://t.me/Tanazbeautybot"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-ink px-5 py-3 text-[10px] text-ivory sm:block"
            >
              {t.book}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-ink text-ivory">
        <Image
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=2200&q=92"
          alt="Tanaz Beauty hair styling"
          fill
          priority
          className="object-cover object-center opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
          <div className="max-w-4xl">
            <Reveal>
              <p className="mb-6 text-[11px] tracking-[.3em] text-ivory/65">
                {t.eyebrow}
              </p>

              <h1 className="font-display text-6xl leading-[.9] sm:text-8xl lg:text-[9rem]">
                {t.heroTitle}
                <br />
                <i className="text-gold">{t.heroTitle2}</i>
              </h1>

              <p className="mt-9 max-w-xl text-sm leading-8 text-ivory/70">
                {t.heroText}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="https://t.me/Tanazbeautybot"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-ivory px-7 py-4 text-[10px] tracking-[.12em] text-ink hover:bg-white"
                >
                  {t.book}
                </a>

                <a
                  href="#gallery"
                  className="group flex items-center gap-2 text-[10px] tracking-[.12em]"
                >
                  {t.galleryBtn}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b hairline bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-3 lg:px-10">
          {t.features.map(([n, title, text]) => (
            <Reveal key={n}>
              <span className="text-[10px] tracking-[.3em] text-black/35">
                {n}
              </span>
              <h2 className="mt-4 font-display text-3xl">{title}</h2>
              <p className="mt-3 max-w-xs text-sm leading-7 text-black/55">
                {text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      >
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] tracking-[.25em] text-black/45">
                {t.servicesLabel}
              </p>

              <h2 className="mt-4 font-display text-6xl leading-[.9] sm:text-8xl">
                {t.servicesTitle}
                <br />
                <i>{t.servicesTitle2}</i>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-black/55">
              {t.servicesText}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 divide-y hairline border-y">
          {t.services.map(([n, title, text], i) => (
            <Reveal key={n} delay={i * 0.04}>
              <div className="group grid gap-5 py-8 md:grid-cols-[70px_1fr_1.5fr_25px] md:items-center">
                <span className="text-[10px] tracking-[.25em] text-black/35">
                  {n}
                </span>

                <h3 className="font-display text-3xl md:text-4xl">
                  {title}
                </h3>

                <p className="max-w-md text-sm leading-7 text-black/50">
                  {text}
                </p>

                <ArrowUpRight size={18} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="bg-[#e8dfd3]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=90"
                alt="Tanaz Beauty salon"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[10px] tracking-[.25em] text-black/45">
              {t.storyLabel}
            </p>

            <h2 className="mt-5 font-display text-6xl leading-[.88] sm:text-8xl">
              {t.storyTitle}
              <br />
              <i>{t.storyTitle2}</i>
            </h2>

            <p className="mt-8 max-w-lg text-sm leading-8 text-black/60">
              {t.storyText}
            </p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
      >
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] tracking-[.25em] text-black/45">
                {t.galleryLabel}
              </p>

              <h2 className="mt-4 font-display text-6xl sm:text-8xl">
                {t.galleryTitle} <i>{t.galleryTitle2}</i>
              </h2>
            </div>

            <a
              href="https://www.instagram.com/tanazz.beauty/"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 text-[10px] sm:flex"
            >
              Instagram
              <ArrowRight size={14} />
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.04}>
              <div
                className={`group relative aspect-[3/4] overflow-hidden ${
                  i === 1 || i === 4 ? "md:translate-y-12" : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* REVIEW */}
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <Reveal>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((x) => (
                <Star
                  key={x}
                  size={13}
                  fill="currentColor"
                  className="text-gold"
                />
              ))}
            </div>

            <blockquote className="mt-8 font-display text-3xl leading-tight sm:text-5xl">
              {t.review}
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="bg-[#e8dfd3]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="text-[10px] tracking-[.25em] text-black/45">
              {t.readyLabel}
            </p>

            <h2 className="mt-5 max-w-4xl font-display text-6xl leading-[.86] sm:text-8xl">
              {t.readyTitle}
              <br />
              <i>{t.readyTitle2}</i>
            </h2>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:+983136518167"
                className="rounded-full bg-ink px-8 py-4 text-[10px] text-ivory"
              >
                <Phone className="mr-2 inline" size={14} />
                {t.phoneBtn}
              </a>

              <a
                href="https://t.me/Tanazbeautybot"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/25 px-8 py-4 text-[10px]"
              >
                <Send className="mr-2 inline" size={14} />
                {t.telegramBtn}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="bg-ink text-ivory">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-4 lg:px-10">
          <div className="lg:col-span-2">
            <div className="font-display text-3xl tracking-[.12em]">
              TANAZ <span className="text-gold">BEAUTY</span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/50">
              {t.footer}
            </p>

            <a
              href="https://www.instagram.com/tanazz.beauty/"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-xs"
            >
              <Instagram size={16} />
              {t.instagram}
            </a>
          </div>

          <div>
            <p className="text-[10px] text-ivory/35">{t.visit}</p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=سپاهانشهر+بلوار+غدیر+مجتمع+عقیق+5+پلاک+22"
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex gap-3 text-sm leading-7 text-ivory/65 hover:text-ivory"
            >
              <MapPin size={18} className="mt-1 shrink-0" />
              <span>
                سپاهانشهر، بلوار غدیر
                <br />
                مجتمع عقیق ۵، طبقه زیرین
                <br />
                انتهای راهرو، پلاک ۲۲
              </span>
            </a>
          </div>

          <div>
            <p className="text-[10px] text-ivory/35">{t.contact}</p>

            <a
              href="tel:+983136518167"
              className="mt-5 flex items-center gap-3 text-sm text-ivory/65 hover:text-ivory"
            >
              <Phone size={16} />
              ۰۳۱۳۶۵۱۸۱۶۷
            </a>

            <a
              href="tel:+989307984291"
              className="mt-4 flex items-center gap-3 text-sm text-ivory/65 hover:text-ivory"
            >
              <Phone size={16} />
              ۰۹۳۰۷۹۸۴۲۹۱
            </a>

            <div className="mt-7">
              <p className="text-[10px] text-ivory/35">{t.hours}</p>

              <p className="mt-3 flex gap-3 text-sm leading-7 text-ivory/65">
                <Clock size={16} className="mt-1 shrink-0" />
                <span>
                  {t.hoursText}
                  <br />
                  {t.hoursTime}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-6 text-center text-[9px] text-ivory/30">
          © 2026 Tanaz Beauty. All rights reserved.
        </div>
      </footer>
    </main>
  );
}