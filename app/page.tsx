
"use client";

import { useState } from "react";
import {
  Instagram,
  MapPin,
  Phone,
  Send,
  Clock,
  ArrowUpLeft,
  Sparkles,
  Scissors,
  Palette,
  Heart,
  Menu,
  X,
} from "lucide-react";

type Language = "fa" | "en";

const images = {
  hero:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=85",
  color:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
  makeup:
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1000&q=85",
  styling:
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=85",
  beauty:
    "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1000&q=85",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "سالن زیبایی طناز",
  url: "https://tanaz-beauty.pages.dev/",
  telephone: "+983136518167",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "سپاهانشهر، بلوار غدیر، مجتمع عقیق ۵، طبقه زیرین، انتهای راهرو، پلاک ۲۲",
    addressLocality: "اصفهان",
    addressCountry: "IR",
  },
  sameAs: [
    "https://www.instagram.com/tanazz.beauty/",
    "https://t.me/Tanazbeautybot",
  ],
};

const content = {
  fa: {
    nav: {
      home: "خانه",
      services: "خدمات",
      about: "درباره ما",
      gallery: "نمونه‌کارها",
      contact: "تماس",
    },

    heroEyebrow: "سالن زیبایی طناز",

    heroText:
      "سالن زیبایی طناز در سپاهانشهر اصفهان؛ ارائه خدمات تخصصی رنگ و احیای مو، کوتاهی، میکاپ، شینیون، ابرو، مژه و ناخن در محیطی آرام و حرفه‌ای.",

    primary: "رزرو وقت",
    secondary: "مشاهده خدمات",

    badge: "زیبایی با ظرافت و تخصص",

    servicesEyebrow: "خدمات سالن",
    servicesTitle: "خدمات",

    services: [
      {
        icon: Palette,
        title: "رنگ و احیای مو",
        text:
          "رنگ، لایت، آمبره و اصلاح رنگ با توجه به پایه مو، تناژ پوست و سلامت تارهای مو.",
      },
      {
        icon: Scissors,
        title: "کوتاهی و براشینگ",
        text:
          "کوتاهی متناسب با فرم صورت و براشینگ حرفه‌ای برای داشتن موهایی مرتب و خوش‌حالت.",
      },
      {
        icon: Sparkles,
        title: "میکاپ",
        text:
          "میکاپ حرفه‌ای و ظریف برای مهمانی و مراسم، متناسب با فرم چهره و استایل شما.",
      },
      {
        icon: Heart,
        title: "شینیون و استایل مو",
        text:
          "طراحی شینیون و استایل مو برای مراسم و مناسبت‌ها، متناسب با چهره و سلیقه شما.",
      },
      {
        icon: Sparkles,
        title: "ابرو و مژه",
        text:
          "خدمات ابرو و مژه با تمرکز بر فرم طبیعی چهره و ایجاد ظاهری مرتب و متعادل.",
      },
      {
        icon: Heart,
        title: "خدمات ناخن",
        text:
          "مانیکور و طراحی‌های مینیمال و ظریف برای دست‌هایی مرتب و آراسته.",
      },
    ],

    aboutTitle: "زیبایی، متناسب با تو.",

    aboutText:
      "در سالن زیبایی طناز، هر خدمات با توجه به فرم چهره، جنس مو، رنگ پوست و سلیقه شخصی شما انجام می‌شود.",

    aboutText2:
      "هدف ما ارائه نتیجه‌ای تمیز، ظریف و ماندگار است؛ نتیجه‌ای که با سبک شخصی شما هماهنگ باشد.",

    aboutButton: "برای مشاوره تماس بگیر",

    galleryEyebrow: "نمونه‌کارها",
    galleryTitle: "زیبایی در جزئیات",

    bookingEyebrow: "رزرو و ارتباط",

    bookingTitle: "برای رزرو وقت\nبا ما در ارتباط باشید.",

    bookingText:
      "برای اطلاع از زمان‌های خالی و رزرو نوبت از طریق ربات تلگرام و جهت مشاوره تماس مستقیم با سالن با ما در ارتباط باشید.",

    telegram: "رزرو در تلگرام",
    call: "تماس با سالن",

    addressTitle: "آدرس",

    address:
      "سپاهانشهر، بلوار غدیر، مجتمع عقیق ۵، طبقه زیرین، انتهای راهرو، پلاک ۲۲",

    phoneTitle: "شماره تماس",
    instagramTitle: "اینستاگرام",

    hoursTitle: "ساعات کاری",
    hours: "با هماهنگی قبلی",

    footer: "سالن زیبایی طناز",

    language: "EN",
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      gallery: "Gallery",
      contact: "Contact",
    },

    heroEyebrow: "Tanaz Beauty Salon",

    heroText:
      "Professional beauty services, hair color and care, makeup, updos and styling in a calm and refined environment.",

    primary: "Book an Appointment",
    secondary: "Explore Services",

    badge: "Beauty with precision & elegance",

    servicesEyebrow: "Salon Services",
    servicesTitle: "Services",

    services: [
      {
        icon: Palette,
        title: "Hair Color & Care",
        text:
          "Color, highlights, balayage and corrective color selected according to your hair condition and complexion.",
      },
      {
        icon: Scissors,
        title: "Cut & Blow Dry",
        text:
          "Face-shape tailored cuts and professional blowouts for polished, natural-looking hair.",
      },
      {
        icon: Sparkles,
        title: "Makeup",
        text:
          "Refined makeup for occasions and celebrations, designed around your features and personal style.",
      },
      {
        icon: Heart,
        title: "Hair Styling",
        text:
          "Elegant updos and occasion styling created to complement your face and personal style.",
      },
      {
        icon: Sparkles,
        title: "Brows & Lashes",
        text:
          "Natural-looking brow and lash services designed for a balanced and polished appearance.",
      },
      {
        icon: Heart,
        title: "Nail Services",
        text:
          "Refined manicure and minimalist nail designs for a clean and complete look.",
      },
    ],

    aboutTitle: "Beauty, tailored to you.",

    aboutText:
      "At Tanaz Beauty Salon, every service is selected around your features, hair texture, complexion and personal style.",

    aboutText2:
      "Our goal is to create clean, refined and lasting results that feel naturally aligned with you.",

    aboutButton: "Talk to Us",

    galleryEyebrow: "Gallery",
    galleryTitle: "Beauty in the details",

    bookingEyebrow: "Appointments",

    bookingTitle: "Ready to book\nan appointment?",

    bookingText:
      "For available appointments and booking through our Telegram bot, or for consultation, please contact the salon directly.",

    telegram: "Book via Telegram",
    call: "Call the Salon",

    addressTitle: "Address",

    address:
      "Sepahan Shahr, Ghadir Blvd, Aqiq 5 Complex, Lower Floor, End of Hallway, No. 22",

    phoneTitle: "Phone",
    instagramTitle: "Instagram",

    hoursTitle: "Working Hours",
    hours: "By appointment",

    footer: "Tanaz Beauty Salon",

    language: "FA",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Language>("fa");
  const [menuOpen, setMenuOpen] = useState(false);

  const isFa = lang === "fa";
  const t = content[lang];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <main
      dir={isFa ? "rtl" : "ltr"}
      className="min-h-screen bg-[#fbfaf8] text-[#302a26]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* HEADER */}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-[#fbfaf8]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 md:px-8">
          <button
            onClick={() => scrollTo("home")}
            className="text-right"
          >
            <div className="text-[20px] font-bold tracking-[-0.02em] md:text-[22px]">
              Tanaz Beauty
            </div>

            <div className="mt-0.5 text-[10px] font-medium tracking-[0.14em] text-[#9a7964]">
              TANAZ BEAUTY
            </div>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {[
              ["home", t.nav.home],
              ["services", t.nav.services],
              ["about", t.nav.about],
              ["gallery", t.nav.gallery],
              ["contact", t.nav.contact],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-[13px] font-medium text-[#625953] transition hover:text-[#9b765e]"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(isFa ? "en" : "fa")}
              className="rounded-full border border-[#b79d8a]/35 px-3.5 py-1.5 text-[12px] font-semibold text-[#765f50] transition hover:bg-[#efe7e0]"
            >
              {t.language}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full border border-black/10 p-2 lg:hidden"
              aria-label="Menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-black/[0.06] bg-[#fbfaf8] px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {[
                ["home", t.nav.home],
                ["services", t.nav.services],
                ["about", t.nav.about],
                ["gallery", t.nav.gallery],
                ["contact", t.nav.contact],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="py-1 text-[14px]"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}

      <section
        id="home"
        className="relative flex min-h-[650px] items-center overflow-hidden pt-[74px] md:min-h-screen"
      >
        <img
          src={images.hero}
          alt="Tanaz Beauty Salon"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-8">
          <div
            className={`max-w-[590px] text-white ${
              isFa
                ? "mr-0 md:mr-10 lg:mr-16"
                : "ml-0 md:ml-10 lg:ml-16"
            }`}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] font-medium backdrop-blur-md">
              <Sparkles size={15} />
              {t.badge}
            </div>

<h1 className="mb-3 text-[20px] font-bold leading-[1.8] text-white md:text-[23px]">
  {t.heroEyebrow}
</h1>

            <p className="max-w-[560px] text-[15px] leading-[2] text-white/85 md:text-[16px]">
              {t.heroText}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-bold text-[#332a25] transition hover:bg-[#f2e9e2]"
              >
                {t.primary}
                <ArrowUpLeft size={16} />
              </button>

              <button
                onClick={() => scrollTo("services")}
                className="rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-[14px] font-semibold backdrop-blur-md transition hover:bg-white/15"
              >
                {t.secondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="px-6 py-20 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="text-[13px] font-bold text-[#a17e68]">
              {t.servicesEyebrow}
            </p>

            <h2 className="mt-2 text-[32px] font-bold leading-[1.4] tracking-[-0.02em] text-[#302a26] sm:text-[35px] md:text-[38px]">
              {t.servicesTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[22px] border border-[#e8e0da] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f1e8e1] text-[#8c6d59]">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <h3 className="text-[18px] font-bold text-[#332d29]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[2] text-[#776d67]">
                    {service.text}
                  </p>

                  <div className="mt-5 h-px w-9 bg-[#b79d8a] transition-all group-hover:w-16" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="bg-[#eee7e1] px-6 py-20 md:px-8 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="overflow-hidden rounded-[28px]">
              <img
                src={images.beauty}
                alt="Tanaz Beauty"
                className="h-[430px] w-full object-cover md:h-[540px]"
              />
            </div>

            <div className="absolute -bottom-5 -left-2 rounded-2xl bg-white px-5 py-4 shadow-lg md:-left-5">
              <div className="text-[11px] text-[#89766a]">
                Tanaz Beauty
              </div>

              <div className="mt-1 text-[13px] font-bold text-[#332d29]">
                Tanaz Beauty
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[32px] font-bold leading-[1.5] tracking-[-0.02em] text-[#302a26] sm:text-[35px] md:text-[40px]">
              {t.aboutTitle}
            </h2>

            <p className="mt-6 text-[15px] leading-[2.05] text-[#685e58] md:text-[16px]">
              {t.aboutText}
            </p>

            <p className="mt-4 text-[15px] leading-[2.05] text-[#685e58] md:text-[16px]">
              {t.aboutText2}
            </p>

            <button
              onClick={() => scrollTo("contact")}
              className="mt-7 rounded-full bg-[#332a25] px-7 py-3.5 text-[14px] font-semibold text-white transition hover:bg-[#4a3c34]"
            >
              {t.aboutButton}
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY */}

      <section
        id="gallery"
        className="px-6 py-20 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-[13px] font-bold text-[#a17e68]">
            {t.galleryEyebrow}
          </p>

          <h2 className="mt-2 text-[32px] font-bold leading-[1.4] tracking-[-0.02em] text-[#302a26] sm:text-[35px] md:text-[38px]">
            {t.galleryTitle}
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded-[24px] lg:col-span-2 lg:row-span-2">
              <img
                src={images.color}
                alt="Hair color"
                className="h-[430px] w-full object-cover transition duration-700 hover:scale-105 lg:h-full lg:min-h-[570px]"
              />
            </div>

            <div className="overflow-hidden rounded-[24px]">
              <img
                src={images.makeup}
                alt="Makeup"
                className="h-[260px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[24px]">
              <img
                src={images.styling}
                alt="Hair styling"
                className="h-[260px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[24px] lg:col-span-2">
              <img
                src={images.hero}
                alt="Beauty salon"
                className="h-[260px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="bg-[#332a25] px-6 py-20 text-white md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-[13px] font-bold text-[#cdb6a5]">
                {t.bookingEyebrow}
              </p>

              <h2 className="mt-3 whitespace-pre-line text-[34px] font-bold leading-[1.5] tracking-[-0.02em] sm:text-[38px] md:text-[44px]">
                {t.bookingTitle}
              </h2>

              <p className="mt-5 max-w-[600px] text-[15px] leading-[2] text-white/70 md:text-[16px]">
                {t.bookingText}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://t.me/Tanazbeautybot"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-bold text-[#332a25] transition hover:bg-[#eee5df]"
                >
                  <Send size={16} />
                  {t.telegram}
                </a>

                <a
                  href="tel:+983136518167"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[14px] font-semibold transition hover:bg-white/10"
                >
                  <Phone size={16} />
                  {t.call}
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=سپاهانشهر+بلوار+غدیر+مجتمع+عقیق+5+پلاک+22"
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 rounded-[22px] border border-white/10 p-5 transition hover:bg-white/[0.05]"
              >
                <MapPin
                  size={21}
                  className="mt-1 shrink-0 text-[#d6bdac]"
                />

                <div>
                  <div className="mb-1.5 text-[13px] font-semibold text-white/55">
                    {t.addressTitle}
                  </div>

                  <div className="text-[16px] font-medium leading-[2] text-white/95 md:text-[17px]">
                    {t.address}
                  </div>
                </div>
              </a>

              <a
                href="tel:+983136518167"
                className="flex gap-4 rounded-[22px] border border-white/10 p-5 transition hover:bg-white/[0.05]"
              >
                <Phone
                  size={21}
                  className="mt-1 shrink-0 text-[#d6bdac]"
                />

                <div>
                  <div className="mb-1.5 text-[13px] font-semibold text-white/55">
                    {t.phoneTitle}
                  </div>

                  <div
                    dir="ltr"
                    className="text-[17px] font-semibold leading-8 text-white/95 md:text-[18px]"
                  >
                    03136518167
                  </div>

                  <div
                    dir="ltr"
                    className="text-[17px] font-semibold leading-8 text-white/95 md:text-[18px]"
                  >
                    09307984291
                  </div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/tanazz.beauty/"
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 rounded-[22px] border border-white/10 p-5 transition hover:bg-white/[0.05]"
              >
                <Instagram
                  size={21}
                  className="mt-1 shrink-0 text-[#d6bdac]"
                />

                <div>
                  <div className="mb-1.5 text-[13px] font-semibold text-white/55">
                    {t.instagramTitle}
                  </div>

                  <div
                    dir="ltr"
                    className="text-[17px] font-semibold text-white/95 md:text-[18px]"
                  >
                    @tanazz.beauty
                  </div>
                </div>
              </a>

              <div className="flex gap-4 rounded-[22px] border border-white/10 p-5">
                <Clock
                  size={21}
                  className="mt-1 shrink-0 text-[#d6bdac]"
                />

                <div>
                  <div className="mb-1.5 text-[13px] font-semibold text-white/55">
                    {t.hoursTitle}
                  </div>

                  <div className="text-[16px] font-medium text-white/95 md:text-[17px]">
                    {t.hours}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#27201c] px-6 py-7 text-white/55 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-center text-[13px] md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Tanaz Beauty</div>

          <div className="text-[14px] font-medium">
            {t.footer}
          </div>
        </div>
      </footer>
    </main>
  );
}

