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
        nav: ["خانه", "خدمات", "درباره ما", "نمونه‌کارها", "تماس"],
        heroEyebrow: "سالن زیبایی طناز",
        heroTitle: "زیبایی تو،\nامضای توست.",
        heroText:
          "سالن زیبایی طناز در سپاهانشهر اصفهان؛ ارائه خدمات تخصصی رنگ و احیای مو، کوتاهی، میکاپ، شینیون، ابرو، مژه و ناخن در فضایی آرام و حرفه‌ای.",
        primary: "رزرو وقت",
        secondary: "مشاهده خدمات",
        badge: "زیبایی با ظرافت و تخصص",
        trust: ["مشاوره تخصصی", "رزرو آسان", "محیط آرام و حرفه‌ای"],
        servicesEyebrow: "خدمات ما",
        servicesTitle: "زیبایی، با دقت و ظرافت",
        servicesText:
          "هر خدمت با توجه به فرم چهره، جنس مو، رنگ پوست و استایل شخصی شما انجام می‌شود.",
        services: [
          {
            title: "رنگ و احیای مو",
            text: "رنگ، لایت، آمبره و اصلاح رنگ با توجه به پایه مو، تناژ پوست و سلامت تارهای مو.",
            icon: Palette,
            image: images.color,
          },
          {
            title: "کوتاهی و براشینگ",
            text: "کوتاهی متناسب با فرم صورت و براشینگ حرفه‌ای برای داشتن موهایی مرتب و خوش‌حالت.",
            icon: Scissors,
            image: images.styling,
          },
          {
            title: "میکاپ",
            text: "میکاپ حرفه‌ای و ظریف برای مهمانی و مراسم، متناسب با فرم چهره و استایل شما.",
            icon: Sparkles,
            image: images.makeup,
          },
          {
            title: "شینیون و استایل مو",
            text: "طراحی شینیون و استایل مو برای مراسم و مناسبت‌ها، متناسب با چهره و سلیقه شما.",
            icon: Heart,
            image: images.styling,
          },
          {
            title: "ابرو و مژه",
            text: "خدمات ابرو و مژه با تمرکز بر فرم طبیعی چهره و ایجاد ظاهری مرتب و متعادل.",
            icon: Flower2,
            image: images.beauty,
          },
          {
            title: "خدمات ناخن",
            text: "مانیکور و طراحی‌های مینیمال و ظریف برای دست‌هایی مرتب و آراسته.",
            icon: Gem,
            image: images.beauty,
          },
        ],
        aboutEyebrow: "درباره سالن",
        aboutTitle: "زیبایی، متناسب با تو.",
        aboutText:
          "در سالن زیبایی طناز، هر خدمت با توجه به فرم چهره، جنس مو، رنگ پوست و سلیقه شخصی شما انجام می‌شود.",
        aboutText2:
          "هدف ما ارائه نتیجه‌ای تمیز، ظریف و ماندگار است؛ نتیجه‌ای که با سبک شخصی شما هماهنگ باشد.",
        aboutButton: "برای مشاوره تماس بگیر",
        galleryEyebrow: "نمونه‌کارها",
        galleryTitle: "زیبایی در جزئیات",
        galleryText:
          "فضای سالن و خدمات ما با تمرکز بر ظرافت، تمیزی و توجه به جزئیات طراحی شده‌اند.",
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
      }
    : {
        brand: "Tanaz Beauty",
        nav: ["Home", "Services", "About", "Portfolio", "Contact"],
        heroEyebrow: "Tanaz Beauty Salon",
        heroTitle: "Your beauty,\nyour signature.",
        heroText:
          "A professional beauty salon in Sepahan Shahr, Isfahan, offering hair color, hair care, cutting, makeup, styling, brows, lashes and nail services in a calm and elegant environment.",
        primary: "Book an Appointment",
        secondary: "Explore Services",
        badge: "Beauty with elegance & expertise",
        trust: [
          "Expert Consultation",
          "Easy Booking",
          "Calm & Professional",
        ],
        servicesEyebrow: "Our Services",
        servicesTitle: "Beauty, with intention.",
        servicesText:
          "Every service is tailored to your features, hair type, skin tone and personal style.",
        services: [
          {
            title: "Hair Color & Care",
            text: "Color, highlights, balayage and color correction with attention to hair health.",
            icon: Palette,
            image: images.color,
          },
          {
            title: "Cut & Blow Dry",
            text: "Face-shape flattering cuts and professional blowouts for polished hair.",
            icon: Scissors,
            image: images.styling,
          },
          {
            title: "Makeup",
            text: "Elegant professional makeup for events, parties and special occasions.",
            icon: Sparkles,
            image: images.makeup,
          },
          {
            title: "Hair Styling",
            text: "Elegant updos and styling designed around your face and personal taste.",
            icon: Heart,
            image: images.styling,
          },
          {
            title: "Brows & Lashes",
            text: "Natural-looking brow and lash services designed to enhance your features.",
            icon: Flower2,
            image: images.beauty,
          },
          {
            title: "Nails",
            text: "Minimal and elegant manicure and nail designs for beautifully groomed hands.",
            icon: Gem,
            image: images.beauty,
          },
        ],
        aboutEyebrow: "About Tanaz",
        aboutTitle: "Beauty, made personal.",
        aboutText:
          "At Tanaz Beauty, every service is carefully adapted to your features, hair type, skin tone and personal preferences.",
        aboutText2:
          "Our goal is a clean, elegant and lasting result that feels completely yours.",
        aboutButton: "Contact Us",
        galleryEyebrow: "Portfolio",
        galleryTitle: "Beauty in the details",
        galleryText:
          "Our salon and services are built around elegance, cleanliness and attention to detail.",
        bookingEyebrow: "Booking & Contact",
        bookingTitle: "Let's create\nsomething beautiful.",
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
      className={`${vazirmatn.variable} ${cormorant.variable} min-h-screen overflow-x-hidden bg-[#f9f7f4] text-[#302a26]`}
      style={
        {
          "--font-sans": "var(--font-vazirmatn)",
          "--font-display": "var(--font-cormorant)",
        } as React.CSSProperties
      }
    >
      <style jsx global>{`
        :root {
          --tanaz-ink: #302a26;
          --tanaz-muted: #756b64;
          --tanaz-soft: #9b8271;
          --tanaz-line: #e9e1da;
          --tanaz-cream: #f2ece6;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: var(--font-vazirmatn), sans-serif;
          background: #f9f7f4;
        }

        .tanaz-display {
          font-family: var(--font-cormorant), var(--font-vazirmatn), serif;
        }

        .tanaz-english {
          font-family: var(--font-cormorant), serif;
        }

        .tanaz-body {
          font-family: var(--font-vazirmatn), sans-serif;
        }

        ::selection {
          background: #302a26;
          color: white;
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 max-w-6xl px-4 sm:px-6">
          <div className="flex h-[64px] items-center justify-between rounded-full border border-white/70 bg-white/90 px-4 shadow-[0_12px_45px_rgba(55,40,30,0.07)] backdrop-blur-xl sm:px-6">
            <button
              onClick={() => scrollTo("home")}
              className="group flex items-center gap-3"
              aria-label="Tanaz Beauty"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#302a26] text-white transition-transform duration-300 group-hover:rotate-6">
                <Sparkles size={15} strokeWidth={1.7} />
              </span>

              <span className="tanaz-english text-[20px] font-semibold tracking-[0.01em] text-[#302a26]">
                Tanaz Beauty
              </span>
            </button>

            <nav className="hidden items-center gap-8 md:flex">
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollTo(navIds[index])}
                  className="relative py-2 text-[12px] font-medium text-[#70665f] transition hover:text-[#302a26]"
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFa(!isFa)}
                className="hidden h-9 rounded-full border border-[#e7dfd8] px-4 text-[10px] font-semibold tracking-[0.16em] text-[#675d56] transition hover:bg-[#f7f2ed] sm:block"
              >
                {t.language}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#302a26] text-white md:hidden"
                aria-label="Menu"
              >
                {menuOpen ? <X size={17} /> : <Menu size={17} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="mt-2 overflow-hidden rounded-[22px] border border-[#e9e1da] bg-white p-2 shadow-[0_20px_60px_rgba(50,35,25,0.12)] md:hidden">
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollTo(navIds[index])}
                  className="block w-full rounded-xl px-4 py-3 text-right text-[13px] text-[#554c46] transition hover:bg-[#f7f2ed]"
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

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[720px] items-end overflow-hidden scroll-mt-0 sm:min-h-[760px]"
      >
        <img
          src={images.hero}
          alt="Tanaz Beauty Salon"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1b1512]/95 via-[#1b1512]/40 to-[#1b1512]/10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.08),transparent_32%)]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-36 sm:px-8 lg:pb-24">
          <div className="max-w-[680px]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-[10px] font-medium text-white/90 backdrop-blur-md">
              <Sparkles size={12} strokeWidth={1.5} />
              {t.badge}
            </div>

            <p className="mb-5 text-[11px] font-medium tracking-[0.12em] text-white/65 sm:text-[12px]">
              {t.heroEyebrow}
            </p>

            <h1 className="mb-7 max-w-[700px] whitespace-pre-line font-sans text-[clamp(2.8rem,7vw,5.6rem)] font-medium leading-[1.22] tracking-[-0.035em] text-white">
              {t.heroTitle}
            </h1>

            <p className="max-w-[620px] text-[13px] leading-[2.1] text-white/72 sm:text-[14px] sm:leading-[2]">
              {t.heroText}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollTo("contact")}
                className="group flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-[12px] font-semibold text-[#302a26] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f2eae3]"
              >
                {t.primary}

                <ArrowUpLeft
                  size={16}
                  strokeWidth={1.8}
                  className="transition group-hover:-translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <button
                onClick={() => scrollTo("services")}
                className="rounded-full border border-white/25 bg-white/[0.08] px-7 py-3.5 text-[12px] font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/[0.15]"
              >
                {t.secondary}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 md:block">
          <div className="flex flex-col items-center gap-2 text-[8px] uppercase tracking-[0.35em] text-white/45">
            <span>Scroll</span>
            <div className="h-8 w-px bg-white/25" />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="relative z-10 -mt-6 px-4 sm:px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-[22px] border border-[#e7ded6] bg-white shadow-[0_18px_55px_rgba(65,45,35,0.09)] sm:grid-cols-3">
          {t.trust.map((item, index) => (
            <div
              key={item}
              className={`flex items-center justify-center gap-3 px-5 py-5 text-[12px] font-medium text-[#554b44] ${
                index !== t.trust.length - 1
                  ? "border-b border-[#eee7e1] sm:border-b-0 sm:border-l"
                  : ""
              }`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5eee8] text-[#8d7462]">
                {index === 0 ? (
                  <Sparkles size={14} strokeWidth={1.6} />
                ) : index === 1 ? (
                  <Heart size={14} strokeWidth={1.6} />
                ) : (
                  <Gem size={14} strokeWidth={1.6} />
                )}
              </span>

              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="scroll-mt-24 px-6 py-24 sm:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-[10px] font-bold tracking-[0.25em] text-[#9a806e]">
              {t.servicesEyebrow}
            </p>

            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.3] tracking-[-0.025em] text-[#302a26]">
              {t.servicesTitle}
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[13px] leading-[2] text-[#766c65] sm:text-[14px]">
              {t.servicesText}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-[25px] border border-[#e9e1da] bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(55,40,30,0.09)]"
                >
                  <div className="relative h-[225px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/[0.12] text-white backdrop-blur-md">
                      <Icon size={17} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-[18px] font-semibold tracking-[-0.015em] text-[#342d28] sm:text-[19px]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-[2] text-[#766c65] sm:text-[13px]">
                      {service.text}
                    </p>

                    <button
                      onClick={() => scrollTo("contact")}
                      className="mt-5 flex items-center gap-2 text-[11px] font-bold text-[#8a7160] transition group-hover:text-[#302a26]"
                    >
                      {t.primary}
                      <ChevronLeft size={14} strokeWidth={1.7} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 bg-[#f1ebe5] px-6 py-24 sm:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-[32px] border border-[#d6c7bc] lg:block" />

            <div className="relative overflow-hidden rounded-[32px]">
              <img
                src={images.beauty}
                alt="Tanaz Beauty"
                className="h-[480px] w-full object-cover sm:h-[520px]"
              />

              <div className="absolute bottom-5 left-5 rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-white backdrop-blur-lg">
                <div className="flex items-center gap-2 text-[11px] font-medium">
                  <Star size={13} fill="currentColor" strokeWidth={1} />
                  <span>{t.badge}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="mb-4 text-[10px] font-bold tracking-[0.25em] text-[#9a806e]">
              {t.aboutEyebrow}
            </p>

            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.3] tracking-[-0.025em] text-[#302a26]">
              {t.aboutTitle}
            </h2>

            <div className="mt-7 space-y-5 text-[13px] leading-[2.1] text-[#675d56] sm:text-[14px]">
              <p>{t.aboutText}</p>
              <p>{t.aboutText2}</p>
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="mt-8 flex items-center gap-3 rounded-full bg-[#302a26] px-6 py-3.5 text-[12px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#453b34]"
            >
              {t.aboutButton}
              <ArrowUpLeft size={16} strokeWidth={1.7} />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="scroll-mt-24 px-6 py-24 sm:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] font-bold tracking-[0.25em] text-[#9a806e]">
                {t.galleryEyebrow}
              </p>

              <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.3] tracking-[-0.025em] text-[#302a26]">
                {t.galleryTitle}
              </h2>
            </div>

            <p className="max-w-md text-[13px] leading-[2] text-[#746a63]">
              {t.galleryText}
            </p>
          </div>

          <div className="grid auto-rows-[170px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
            <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-[25px]">
              <img
                src={images.hero}
                alt="Tanaz Beauty Salon"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <div className="absolute bottom-5 right-5 text-white">
                <p className="text-[8px] tracking-[0.3em] text-white/65">
                  TANAZ BEAUTY
                </p>

                <p className="tanaz-english mt-1 text-[26px]">
                  Beauty & Care
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[25px]">
              <img
                src={images.color}
                alt="Hair color"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
              />
            </div>

            <div className="group overflow-hidden rounded-[25px]">
              <img
                src={images.makeup}
                alt="Makeup"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
              />
            </div>

            <div className="group col-span-2 overflow-hidden rounded-[25px]">
              <img
                src={images.styling}
                alt="Hair styling"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 bg-[#302a26] px-6 py-24 text-white sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
            <div>
              <p className="mb-5 text-[10px] font-bold tracking-[0.25em] text-[#c5a994]">
                {t.bookingEyebrow}
              </p>

              <h2 className="whitespace-pre-line text-[clamp(2.1rem,4.5vw,4.2rem)] font-medium leading-[1.3] tracking-[-0.025em] text-white">
                {t.bookingTitle}
              </h2>

              <p className="mt-7 max-w-xl text-[13px] leading-[2.1] text-white/60 sm:text-[14px]">
                {t.bookingText}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://t.me/Tanazbeautybot"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-[12px] font-semibold text-[#302a26] transition hover:bg-[#f0e8e1]"
                >
                  <Send size={16} strokeWidth={1.7} />
                  {t.telegram}
                </a>

                <a
                  href="tel:+983136518167"
                  className="flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-[12px] font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  <Phone size={16} strokeWidth={1.7} />
                  {t.call}
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[22px] border border-white/[0.09] bg-white/[0.04] p-5">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08]">
                  <MapPin size={17} strokeWidth={1.5} />
                </div>

                <p className="mb-2 text-[10px] text-white/40">
                  {t.addressTitle}
                </p>

                <p className="text-[12px] leading-[2] text-white/75">
                  {t.address}
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=سپاهانشهر+بلوار+غدیر+مجتمع+عقیق+5+پلاک+22"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold text-[#d4b8a2]"
                >
                  مشاهده روی نقشه
                  <ArrowUpLeft size={13} strokeWidth={1.7} />
                </a>
              </div>

              <div className="rounded-[22px] border border-white/[0.09] bg-white/[0.04] p-5">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08]">
                  <Phone size={17} strokeWidth={1.5} />
                </div>

                <p className="mb-2 text-[10px] text-white/40">
                  {t.phoneTitle}
                </p>

                <a
                  href="tel:+983136518167"
                  className="block text-[12px] text-white/80 transition hover:text-white"
                >
                  03136518167
                </a>

                <a
                  href="tel:+989307984291"
                  className="mt-2 block text-[12px] text-white/60 transition hover:text-white"
                >
                  09307984291
                </a>
              </div>

              <div className="rounded-[22px] border border-white/[0.09] bg-white/[0.04] p-5">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08]">
                  <Instagram size={17} strokeWidth={1.5} />
                </div>

                <p className="mb-2 text-[10px] text-white/40">
                  {t.instagramTitle}
                </p>

                <a
                  href="https://www.instagram.com/tanazz.beauty/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12px] text-white/75 transition hover:text-white"
                >
                  @tanazz.beauty
                </a>
              </div>

              <div className="rounded-[22px] border border-white/[0.09] bg-white/[0.04] p-5">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08]">
                  <Clock size={17} strokeWidth={1.5} />
                </div>

                <p className="mb-2 text-[10px] text-white/40">
                  {t.hoursTitle}
                </p>

                <p className="text-[12px] text-white/75">{t.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#241f1c] px-6 py-7 text-white/45 sm:px-8">
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

      {/* Mobile Booking */}
      <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <button
          onClick={() => scrollTo("contact")}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#302a26] px-6 py-3.5 text-[12px] font-bold text-white shadow-[0_15px_40px_rgba(30,20,15,0.25)]"
        >
          <Send size={15} strokeWidth={1.7} />
          {t.primary}
        </button>
      </div>
    </main>
  );
}
