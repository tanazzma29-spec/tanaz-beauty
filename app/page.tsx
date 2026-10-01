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
  ChevronLeft,
  Star,
  Gem,
  Flower2,
} from "lucide-react";

import { Cormorant_Garamond, Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const images = {
  hero:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=90",

  color:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=90",

  makeup:
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=90",

  styling:
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=90",

  beauty:
    "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=90",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "سالن زیبایی طناز",
  url: "https://tanazzbeauty.ir/",
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

const navIds = ["home", "services", "about", "gallery", "contact"];

export default function Home() {
  const [isFa, setIsFa] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const t = isFa
    ? {
        brand: "Tanaz Beauty",

        nav: [
          "خانه",
          "خدمات",
          "درباره ما",
          "نمونه‌کارها",
          "تماس",
        ],

        heroEyebrow: "سالن زیبایی طناز",

        heroTitle: "زیبایی تو،\nامضای توست.",

        heroText:
          "جایی برای زیبایی آرام، ظریف و شخصی؛ با خدمات تخصصی مو، میکاپ، ابرو، مژه و ناخن در سپاهانشهر اصفهان.",

        primary: "رزرو وقت",

        secondary: "دیدن خدمات",

        badge: "Beauty · Care · Elegance",

        trust: [
          "مشاوره تخصصی",
          "رزرو آسان",
          "محیط آرام و حرفه‌ای",
        ],

        servicesEyebrow: "خدمات منتخب",

        servicesTitle:
          "هر جزئیات،\nبرای تو طراحی شده است.",

        servicesText:
          "از رنگ و احیای مو تا میکاپ و استایل؛ خدمات ما با توجه به فرم چهره، جنس مو و سبک شخصی شما انجام می‌شوند.",

        services: [
          {
            number: "01",
            title: "رنگ و احیای مو",
            short: "Hair Color & Care",
            text:
              "رنگ، لایت، آمبره و اصلاح رنگ با تمرکز بر سلامت و تناژ طبیعی مو.",
            icon: Palette,
            image: images.color,
          },
          {
            number: "02",
            title: "کوتاهی و براشینگ",
            short: "Cut & Blow Dry",
            text:
              "کوتاهی متناسب با فرم صورت و براشینگ حرفه‌ای برای ظاهری مرتب و خوش‌حالت.",
            icon: Scissors,
            image: images.styling,
          },
          {
            number: "03",
            title: "میکاپ",
            short: "Makeup",
            text:
              "میکاپ ظریف و حرفه‌ای برای مهمانی، مراسم و مناسبت‌های خاص.",
            icon: Sparkles,
            image: images.makeup,
          },
          {
            number: "04",
            title: "شینیون و استایل",
            short: "Hair Styling",
            text:
              "استایل مو و شینیون متناسب با فرم چهره و سبک شخصی شما.",
            icon: Heart,
            image: images.styling,
          },
          {
            number: "05",
            title: "ابرو و مژه",
            short: "Brows & Lashes",
            text:
              "تأکید بر فرم طبیعی چهره برای ظاهری متعادل و ظریف.",
            icon: Flower2,
            image: images.beauty,
          },
          {
            number: "06",
            title: "خدمات ناخن",
            short: "Nails",
            text:
              "مانیکور و طراحی‌های مینیمال برای دست‌هایی مرتب و آراسته.",
            icon: Gem,
            image: images.beauty,
          },
        ],

        aboutEyebrow: "درباره طناز",

        aboutTitle:
          "زیبایی، وقتی زیباست\nکه شبیه خودت باشد.",

        aboutText:
          "در سالن زیبایی طناز، هدف ما تغییر چهره شما نیست؛ بلکه پیدا کردن ظرافتی است که از قبل در چهره و استایل شما وجود دارد.",

        aboutText2:
          "هر خدمت با توجه به فرم صورت، جنس مو، رنگ پوست و سلیقه شخصی شما طراحی می‌شود تا نتیجه‌ای طبیعی، تمیز و ماندگار داشته باشد.",

        aboutButton: "مشاوره با سالن",

        galleryEyebrow: "فضای طناز",

        galleryTitle:
          "زیبایی، در جزئیات اتفاق می‌افتد.",

        galleryText:
          "فضایی آرام، جزئیات ظریف و نگاهی دقیق به زیبایی؛ تجربه‌ای که از لحظه ورود شروع می‌شود.",

        bookingEyebrow: "رزرو و ارتباط",

        bookingTitle:
          "وقت آن است که\nبرای خودت وقت بگذاری.",

        bookingText:
          "برای مشاهده زمان‌های خالی و رزرو نوبت از طریق تلگرام با ما در ارتباط باشید یا برای مشاوره مستقیم با سالن تماس بگیرید.",

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
      }
    : {
        brand: "Tanaz Beauty",

        nav: [
          "Home",
          "Services",
          "About",
          "Portfolio",
          "Contact",
        ],

        heroEyebrow: "Tanaz Beauty Salon",

        heroTitle: "Your beauty,\nyour signature.",

        heroText:
          "A calm and refined beauty experience in Sepahan Shahr, Isfahan — from hair color and care to makeup, styling, brows, lashes and nails.",

        primary: "Book an Appointment",

        secondary: "Explore Services",

        badge: "Beauty · Care · Elegance",

        trust: [
          "Expert Consultation",
          "Easy Booking",
          "Calm & Professional",
        ],

        servicesEyebrow: "Selected Services",

        servicesTitle:
          "Every detail,\nmade for you.",

        servicesText:
          "From hair color and care to makeup and styling, every service is tailored to your features and personal style.",

        services: [
          {
            number: "01",
            title: "Hair Color & Care",
            short: "Hair Color & Care",
            text:
              "Color, highlights, balayage and correction with attention to hair health.",
            icon: Palette,
            image: images.color,
          },
          {
            number: "02",
            title: "Cut & Blow Dry",
            short: "Cut & Blow Dry",
            text:
              "Face-shape flattering cuts and polished professional blowouts.",
            icon: Scissors,
            image: images.styling,
          },
          {
            number: "03",
            title: "Makeup",
            short: "Makeup",
            text:
              "Elegant professional makeup for events and special occasions.",
            icon: Sparkles,
            image: images.makeup,
          },
          {
            number: "04",
            title: "Hair Styling",
            short: "Hair Styling",
            text:
              "Elegant styling and updos designed around your features.",
            icon: Heart,
            image: images.styling,
          },
          {
            number: "05",
            title: "Brows & Lashes",
            short: "Brows & Lashes",
            text:
              "Natural-looking services designed to enhance your features.",
            icon: Flower2,
            image: images.beauty,
          },
          {
            number: "06",
            title: "Nails",
            short: "Nails",
            text:
              "Minimal and elegant manicure and nail designs.",
            icon: Gem,
            image: images.beauty,
          },
        ],

        aboutEyebrow: "About Tanaz",

        aboutTitle:
          "Beauty is beautiful\nwhen it still feels like you.",

        aboutText:
          "At Tanaz Beauty, our goal isn't to change your appearance. It is to reveal the elegance that is already yours.",

        aboutText2:
          "Every service is adapted to your features, hair type, skin tone and personal style for a clean, natural and lasting result.",

        aboutButton: "Talk to the Salon",

        galleryEyebrow: "The Tanaz Space",

        galleryTitle:
          "Beauty lives in the details.",

        galleryText:
          "A calm atmosphere, thoughtful details and a refined approach to beauty — an experience that begins the moment you arrive.",

        bookingEyebrow: "Booking & Contact",

        bookingTitle:
          "Make some time\nfor yourself.",

        bookingText:
          "Contact us through Telegram to check availability and book your appointment, or call the salon directly for consultation.",

        telegram: "Book on Telegram",

        call: "Call the Salon",

        addressTitle: "Address",

        address:
          "Sepahan Shahr, Ghadir Blvd, Aghigh 5 Complex, Lower Floor, End of Hallway, No. 22",

        phoneTitle: "Phone",

        instagramTitle: "Instagram",

        hoursTitle: "Working Hours",

        hours: "By appointment",

        footer: "Tanaz Beauty Salon",

        language: "FA",
      };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <main
      dir={isFa ? "rtl" : "ltr"}
      className={`${vazirmatn.variable} ${cormorant.variable} min-h-screen overflow-x-hidden bg-[#f8f6f2] text-[#302a26]`}
    >
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: var(--font-vazirmatn), sans-serif;
          background: #f8f6f2;
        }

        .display {
          font-family: var(--font-vazirmatn), sans-serif;
        }

        .latin-display {
          font-family: var(--font-cormorant), serif;
        }

        ::selection {
          background: #302a26;
          color: #fff;
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* =========================================================
          HEADER
      ========================================================= */}

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 max-w-6xl px-4 sm:px-6">
          <div className="flex h-[62px] items-center justify-between rounded-full border border-white/70 bg-white/90 px-4 shadow-[0_12px_45px_rgba(50,35,25,0.07)] backdrop-blur-xl sm:px-6">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#302a26] text-white">
                <Sparkles size={15} strokeWidth={1.5} />
              </span>

              <span className="latin-display text-[21px] font-semibold tracking-wide">
                Tanaz Beauty
              </span>
            </button>

            <nav className="hidden items-center gap-8 md:flex">
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollTo(navIds[index])}
                  className="text-[12px] font-medium text-[#706760] transition hover:text-[#302a26]"
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFa(!isFa)}
                className="hidden rounded-full border border-[#e6ded7] px-4 py-2 text-[10px] font-semibold tracking-[0.15em] text-[#665c55] transition hover:bg-[#f4eee9] sm:block"
              >
                {t.language}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#302a26] text-white md:hidden"
              >
                {menuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="mt-2 rounded-[22px] border border-[#e9e1da] bg-white p-2 shadow-xl md:hidden">
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollTo(navIds[index])}
                  className="block w-full rounded-xl px-4 py-3 text-right text-[13px] text-[#554c46] hover:bg-[#f7f2ed]"
                >
                  {item}
                </button>
              ))}

              <button
                onClick={() => setIsFa(!isFa)}
                className="mt-1 w-full rounded-xl bg-[#302a26] px-4 py-3 text-[12px] font-semibold text-white"
              >
                {t.language}
              </button>
            </div>
          )}
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="home"
        className="relative min-h-[760px] overflow-hidden"
      >
        <img
          src={images.hero}
          alt="Tanaz Beauty Salon"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#18120f]/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17120f] via-[#17120f]/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-6xl items-end px-6 pb-20 pt-36 sm:px-8 lg:pb-24">
          <div className="max-w-[720px] text-white">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-white/45" />

              <span className="text-[10px] font-medium tracking-[0.2em] text-white/70">
                {t.badge}
              </span>
            </div>

            <p className="mb-5 text-[11px] font-medium tracking-[0.1em] text-white/60">
              {t.heroEyebrow}
            </p>

            <h1 className="display whitespace-pre-line text-[clamp(3.1rem,7vw,6.4rem)] font-medium leading-[1.18] tracking-[-0.045em]">
              {t.heroTitle}
            </h1>

            <p className="mt-7 max-w-[590px] text-[13px] leading-[2.1] text-white/70 sm:text-[14px]">
              {t.heroText}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollTo("contact")}
                className="group flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-[12px] font-semibold text-[#302a26] transition hover:-translate-y-0.5 hover:bg-[#f2ebe5]"
              >
                {t.primary}

                <ArrowUpLeft
                  size={16}
                  className="transition group-hover:-translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <button
                onClick={() => scrollTo("services")}
                className="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-[12px] font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                {t.secondary}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
          <div className="flex flex-col items-center gap-2 text-[8px] tracking-[0.3em] text-white/45">
            <span>SCROLL</span>
            <span className="h-9 w-px bg-white/25" />
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST
      ========================================================= */}

      <section className="relative z-10 -mt-5 px-4">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[20px] border border-[#e8dfd7] bg-white shadow-[0_20px_60px_rgba(55,40,30,0.08)] sm:grid-cols-3">
          {t.trust.map((item, index) => (
            <div
              key={item}
              className={`flex items-center justify-center gap-3 px-5 py-5 text-[11px] font-medium text-[#5d544d] ${
                index < 2
                  ? "border-b border-[#eee8e2] sm:border-b-0 sm:border-l"
                  : ""
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4eee8] text-[#8a7160]">
                {index === 0 && <Sparkles size={14} />}
                {index === 1 && <Heart size={14} />}
                {index === 2 && <Gem size={14} />}
              </span>

              {item}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section
        id="services"
        className="scroll-mt-24 px-6 py-28 sm:px-8 lg:py-36"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-[10px] font-bold tracking-[0.25em] text-[#9a806e]">
                {t.servicesEyebrow}
              </p>

              <h2 className="display whitespace-pre-line text-[clamp(2.2rem,4vw,3.8rem)] font-medium leading-[1.35] tracking-[-0.03em] text-[#302a26]">
                {t.servicesTitle}
              </h2>
            </div>

            <p className="max-w-xl text-[13px] leading-[2.1] text-[#746a63] lg:pb-2">
              {t.servicesText}
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {t.services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className={`group relative overflow-hidden rounded-[28px] bg-white ${
                    index === 0 || index === 3
                      ? "md:min-h-[500px]"
                      : "md:min-h-[430px]"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#17120f]/85 via-[#17120f]/15 to-transparent" />

                  <div className="relative flex h-full min-h-[430px] flex-col justify-between p-6 text-white md:min-h-0 md:p-8">
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] tracking-[0.2em] text-white/55">
                        {service.number}
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                        <Icon size={17} strokeWidth={1.5} />
                      </span>
                    </div>

                    <div>
                      <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-white/55">
                        {service.short}
                      </p>

                      <h3 className="display text-[28px] font-medium leading-tight">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-md text-[12px] leading-[2] text-white/70">
                        {service.text}
                      </p>

                      <button
                        onClick={() => scrollTo("contact")}
                        className="mt-5 flex items-center gap-2 text-[10px] font-semibold text-white"
                      >
                        {t.primary}
                        <ChevronLeft size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          BRAND / ABOUT
      ========================================================= */}

      <section
        id="about"
        className="scroll-mt-24 bg-[#eee7e0] px-6 py-28 sm:px-8 lg:py-36"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 hidden h-full w-full rounded-[32px] border border-[#d1c1b5] lg:block" />

              <div className="relative overflow-hidden rounded-[32px]">
                <img
                  src={images.beauty}
                  alt="Tanaz Beauty"
                  className="h-[520px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 text-[10px] tracking-[0.15em]">
                    <Star size={13} fill="currentColor" />
                    TANAZ BEAUTY
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-5 text-[10px] font-bold tracking-[0.25em] text-[#9a806e]">
                {t.aboutEyebrow}
              </p>

              <h2 className="display whitespace-pre-line text-[clamp(2.3rem,4.5vw,4.1rem)] font-medium leading-[1.3] tracking-[-0.035em] text-[#302a26]">
                {t.aboutTitle}
              </h2>

              <div className="mt-8 max-w-xl space-y-5 text-[13px] leading-[2.15] text-[#675d56] sm:text-[14px]">
                <p>{t.aboutText}</p>
                <p>{t.aboutText2}</p>
              </div>

              <button
                onClick={() => scrollTo("contact")}
                className="mt-9 flex items-center gap-3 rounded-full bg-[#302a26] px-6 py-3.5 text-[11px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#453b34]"
              >
                {t.aboutButton}
                <ArrowUpLeft size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EDITORIAL PORTFOLIO
      ========================================================= */}

      <section
        id="gallery"
        className="scroll-mt-24 px-6 py-28 sm:px-8 lg:py-36"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-4 text-[10px] font-bold tracking-[0.25em] text-[#9a806e]">
                {t.galleryEyebrow}
              </p>

              <h2 className="display text-[clamp(2.3rem,4vw,3.8rem)] font-medium leading-[1.3] tracking-[-0.03em] text-[#302a26]">
                {t.galleryTitle}
              </h2>
            </div>

            <p className="max-w-md text-[13px] leading-[2.1] text-[#746a63]">
              {t.galleryText}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-3 sm:gap-4">
            {/* Large */}
            <div className="group relative col-span-12 h-[460px] overflow-hidden rounded-[28px] sm:col-span-7 sm:h-[620px]">
              <img
                src={images.hero}
                alt="Tanaz Beauty Salon"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <div className="absolute bottom-7 right-7 text-white">
                <p className="text-[8px] tracking-[0.3em] text-white/60">
                  TANAZ BEAUTY
                </p>

                <p className="latin-display mt-1 text-[32px]">
                  Beauty & Care
                </p>
              </div>
            </div>

            {/* Right top */}
            <div className="group col-span-6 h-[300px] overflow-hidden rounded-[28px] sm:col-span-5 sm:h-[300px]">
              <img
                src={images.color}
                alt="Hair color"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
              />
            </div>

            {/* Right bottom */}
            <div className="group col-span-6 h-[300px] overflow-hidden rounded-[28px] sm:col-span-5 sm:h-[300px]">
              <img
                src={images.makeup}
                alt="Makeup"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
              />
            </div>

            {/* Wide bottom */}
            <div className="group col-span-12 h-[260px] overflow-hidden rounded-[28px] sm:h-[330px]">
              <img
                src={images.styling}
                alt="Hair styling"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section
        id="contact"
        className="scroll-mt-24 bg-[#302a26] px-6 py-28 text-white sm:px-8 lg:py-36"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
            <div>
              <p className="mb-5 text-[10px] font-bold tracking-[0.25em] text-[#c8aa94]">
                {t.bookingEyebrow}
              </p>

              <h2 className="display whitespace-pre-line text-[clamp(2.5rem,5vw,4.8rem)] font-medium leading-[1.25] tracking-[-0.035em]">
                {t.bookingTitle}
              </h2>

              <p className="mt-7 max-w-xl text-[13px] leading-[2.1] text-white/60 sm:text-[14px]">
                {t.bookingText}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://t.me/Tanazbeautybot"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-[11px] font-semibold text-[#302a26] transition hover:bg-[#f1e8e1]"
                >
                  <Send size={15} />
                  {t.telegram}
                </a>

                <a
                  href="tel:+983136518167"
                  className="flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-[11px] font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone size={15} />
                  {t.call}
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.035] p-6">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08]">
                  <MapPin size={16} />
                </div>

                <p className="mb-2 text-[9px] text-white/35">
                  {t.addressTitle}
                </p>

                <p className="text-[12px] leading-[2] text-white/70">
                  {t.address}
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=سپاهانشهر+بلوار+غدیر+مجتمع+عقیق+5+پلاک+22"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold text-[#d5b9a3]"
                >
                  مشاهده روی نقشه
                  <ArrowUpLeft size={13} />
                </a>
              </div>

              <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.035] p-6">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08]">
                  <Phone size={16} />
                </div>

                <p className="mb-2 text-[9px] text-white/35">
                  {t.phoneTitle}
                </p>

                <a
                  href="tel:+983136518167"
                  className="block text-[12px] text-white/75"
                >
                  03136518167
                </a>

                <a
                  href="tel:+989307984291"
                  className="mt-2 block text-[12px] text-white/55"
                >
                  09307984291
                </a>
              </div>

              <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.035] p-6">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08]">
                  <Instagram size={16} />
                </div>

                <p className="mb-2 text-[9px] text-white/35">
                  {t.instagramTitle}
                </p>

                <a
                  href="https://www.instagram.com/tanazz.beauty/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12px] text-white/75"
                >
                  @tanazz.beauty
                </a>
              </div>

              <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.035] p-6">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08]">
                  <Clock size={16} />
                </div>

                <p className="mb-2 text-[9px] text-white/35">
                  {t.hoursTitle}
                </p>

                <p className="text-[12px] text-white/70">
                  {t.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="bg-[#241f1c] px-6 py-7 text-white/40 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-[10px] sm:flex-row">
          <p>{t.footer}</p>

          <div className="flex items-center gap-5">
            <button
              onClick={() => scrollTo("home")}
              className="transition hover:text-white"
            >
              {isFa ? "بازگشت به بالا" : "Back to top"}
            </button>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>

      {/* =========================================================
          MOBILE CTA
      ========================================================= */}

      <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <button
          onClick={() => scrollTo("contact")}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#302a26] px-6 py-3.5 text-[11px] font-bold text-white shadow-[0_15px_40px_rgba(30,20,15,0.25)]"
        >
          <Send size={14} />
          {t.primary}
        </button>
      </div>
    </main>
  );
}
