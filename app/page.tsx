
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

const content = {
  fa: {
    nav: {
      home: "خانه",
      services: "خدمات",
      about: "درباره ما",
      gallery: "نمونه کارها",
      contact: "تماس با ما",
    },
    heroEyebrow: "سالن زیبایی طناز مردانی",
    heroTitle: "زیبایی تو،\nبا امضای طناز",
    heroText:
      "اینجا جایی‌ست برای تغییر، آرامش و تجربه‌ای متفاوت از زیبایی. خدمات تخصصی مو، میکاپ و زیبایی با توجه به فرم چهره، استایل و سلیقه شما.",
    primary: "رزرو وقت",
    secondary: "مشاهده خدمات",
    badge: "زیبایی با ظرافت و تخصص",
    servicesEyebrow: "خدمات تخصصی",
    servicesTitle: "برای هر زیبایی،\nیک انتخاب دقیق",
    servicesText:
      "در سالن طناز، هر خدمات با مشاوره و توجه به ویژگی‌های چهره، مو و سبک شخصی شما انجام می‌شود.",
    services: [
      {
        icon: Palette,
        title: "رنگ و احیای مو",
        text:
          "رنگ، لایت، آمبره و تکنیک‌های اصلاح رنگ همراه با توجه به سلامت و کیفیت مو.",
      },
      {
        icon: Scissors,
        title: "کوتاهی و براشینگ",
        text:
          "کوتاهی متناسب با فرم صورت، براشینگ حرفه‌ای و حالت‌دهی برای استایل روزمره یا مهمانی.",
      },
      {
        icon: Sparkles,
        title: "میکاپ",
        text:
          "میکاپ ظریف و حرفه‌ای متناسب با چهره، سبک مراسم و سلیقه شخصی شما.",
      },
      {
        icon: Heart,
        title: "شینیون و استایل مو",
        text:
          "شینیون و استایل مو برای مهمانی، عقد و مراسم با طراحی متناسب با فرم چهره و لباس.",
      },
      {
        icon: Sparkles,
        title: "ابرو و مژه",
        text:
          "اصلاح فرم ابرو و خدمات مژه با هدف ایجاد تناسب طبیعی و مرتب‌تر شدن چهره.",
      },
      {
        icon: Heart,
        title: "خدمات ناخن",
        text:
          "مانیکور و طراحی ناخن با سبک‌های ظریف و مینیمال برای یک ظاهر کامل و آراسته.",
      },
    ],
    aboutEyebrow: "درباره سالن طناز",
    aboutTitle: "زیبایی فقط ظاهر نیست؛\nحسی است که با خودت می‌بری.",
    aboutText:
      "ما باور داریم یک تجربه خوب زیبایی از لحظه‌ای شروع می‌شود که شنیده می‌شوید. در سالن زیبایی طناز مردانی، قبل از هر خدمات به فرم چهره، جنس مو، سبک زندگی و چیزی که واقعاً دوست دارید توجه می‌کنیم.",
    aboutText2:
      "هدف ما این است که نتیجه نهایی فقط زیبا نباشد؛ بلکه با شخصیت و استایل شما هماهنگ باشد و وقتی سالن را ترک می‌کنید، احساس کنید بهترین نسخه خودتان را می‌بینید.",
    aboutButton: "آشنایی بیشتر",
    galleryEyebrow: "نمونه کارها",
    galleryTitle: "جزئیات، تفاوت را می‌سازند.",
    galleryText:
      "بخشی از حال‌وهوای زیبایی و ظرافتی که در سالن طناز تجربه خواهید کرد.",
    bookingEyebrow: "رزرو وقت",
    bookingTitle: "برای یک تغییر زیبا،\nاز همین‌جا شروع کن.",
    bookingText:
      "برای هماهنگی وقت و دریافت اطلاعات بیشتر، از طریق تلگرام با ما در ارتباط باشید یا با سالن تماس بگیرید.",
    telegram: "رزرو از طریق تلگرام",
    call: "تماس با سالن",
    addressTitle: "آدرس سالن",
    address:
      "سپاهانشهر، بلوار غدیر، مجتمع عقیق ۵، طبقه زیرین، انتهای راهرو، پلاک ۲۲",
    phoneTitle: "شماره تماس",
    instagramTitle: "اینستاگرام",
    hoursTitle: "ساعات کاری",
    hours: "با هماهنگی قبلی",
    footer:
      "سالن زیبایی طناز مردانی؛ جایی برای زیبایی، آرامش و اعتماد به خود.",
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
    heroEyebrow: "Tanaz Mardani Beauty Salon",
    heroTitle: "Your beauty,\nwith Tanaz signature",
    heroText:
      "A place for transformation, confidence and a refined beauty experience. Professional hair, makeup and beauty services tailored to your features and personal style.",
    primary: "Book an Appointment",
    secondary: "Explore Services",
    badge: "Beauty with precision & elegance",
    servicesEyebrow: "Our Services",
    servicesTitle: "Thoughtful beauty,\nmade for you",
    servicesText:
      "Every service at Tanaz Beauty begins with attention to your features, hair condition and personal style.",
    services: [
      {
        icon: Palette,
        title: "Hair Color & Care",
        text:
          "Color, highlights, balayage and corrective techniques with special attention to hair health.",
      },
      {
        icon: Scissors,
        title: "Cut & Blow Dry",
        text:
          "Face-shape tailored cuts, professional blowouts and styling for everyday or special occasions.",
      },
      {
        icon: Sparkles,
        title: "Makeup",
        text:
          "Refined, professional makeup designed around your features, event and personal style.",
      },
      {
        icon: Heart,
        title: "Hair Styling",
        text:
          "Elegant updos and occasion styling designed to complement your face, outfit and event.",
      },
      {
        icon: Sparkles,
        title: "Brows & Lashes",
        text:
          "Natural-looking brow and lash services designed to create a balanced and polished appearance.",
      },
      {
        icon: Heart,
        title: "Nail Services",
        text:
          "Manicure and refined nail designs for a clean, elegant and complete look.",
      },
    ],
    aboutEyebrow: "About Tanaz Beauty",
    aboutTitle: "Beauty is more than appearance;\nit is how you feel.",
    aboutText:
      "We believe a great beauty experience begins with being truly heard. At Tanaz Mardani Beauty Salon, we consider your features, hair condition, lifestyle and personal preferences before every service.",
    aboutText2:
      "Our goal is not simply to make you look beautiful, but to create a result that feels naturally yours and gives you confidence when you leave the salon.",
    aboutButton: "Discover More",
    galleryEyebrow: "Our Work",
    galleryTitle: "Details make the difference.",
    galleryText:
      "A glimpse into the elegance and beauty experience waiting for you at Tanaz Beauty.",
    bookingEyebrow: "Book Your Visit",
    bookingTitle: "Start your beautiful\ntransformation here.",
    bookingText:
      "For appointments and more information, contact us through Telegram or call the salon directly.",
    telegram: "Book via Telegram",
    call: "Call the Salon",
    addressTitle: "Salon Address",
    address:
      "Sepahan Shahr, Ghadir Blvd, Aqiq 5 Complex, Lower Floor, End of Hallway, No. 22",
    phoneTitle: "Phone",
    instagramTitle: "Instagram",
    hoursTitle: "Working Hours",
    hours: "By appointment",
    footer:
      "Tanaz Mardani Beauty Salon — beauty, confidence and a moment for yourself.",
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
      className="min-h-screen bg-[#fbfaf8] text-[#272321]"
      style={{
        fontFamily:
          "Tahoma, Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-[#fbfaf8]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:px-8">
          <button
            onClick={() => scrollTo("home")}
            className="text-right"
          >
            <div className="text-xl font-bold tracking-tight">
              Tanaz Beauty
            </div>
            <div className="mt-0.5 text-[10px] tracking-[0.18em] text-[#9a8271]">
              TANAZ MARDANI
            </div>
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            <button onClick={() => scrollTo("home")} className="nav-link">
              {t.nav.home}
            </button>
            <button onClick={() => scrollTo("services")} className="nav-link">
              {t.nav.services}
            </button>
            <button onClick={() => scrollTo("about")} className="nav-link">
              {t.nav.about}
            </button>
            <button onClick={() => scrollTo("gallery")} className="nav-link">
              {t.nav.gallery}
            </button>
            <button onClick={() => scrollTo("contact")} className="nav-link">
              {t.nav.contact}
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(isFa ? "en" : "fa")}
              className="rounded-full border border-[#b79d8a]/30 px-4 py-2 text-xs font-semibold tracking-wide text-[#765f50] transition hover:bg-[#efe7e0]"
            >
              {t.language}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full border border-black/10 p-2 lg:hidden"
              aria-label="Menu"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-black/5 bg-[#fbfaf8] px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-5">
              <button onClick={() => scrollTo("home")}>{t.nav.home}</button>
              <button onClick={() => scrollTo("services")}>
                {t.nav.services}
              </button>
              <button onClick={() => scrollTo("about")}>{t.nav.about}</button>
              <button onClick={() => scrollTo("gallery")}>
                {t.nav.gallery}
              </button>
              <button onClick={() => scrollTo("contact")}>
                {t.nav.contact}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-[76px]"
      >
        <img
          src={images.hero}
          alt="Tanaz Beauty Salon"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
          <div className="max-w-3xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs backdrop-blur-md">
              <Sparkles size={14} />
              {t.badge}
            </div>

            <p className="mb-5 text-sm font-medium tracking-wide text-white/80 md:text-base">
              {t.heroEyebrow}
            </p>

            <h1 className="whitespace-pre-line text-5xl font-bold leading-[1.2] tracking-tight md:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg md:leading-9">
              {t.heroText}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#332a25] transition hover:bg-[#f2e9e2]"
              >
                {t.primary}
                <ArrowUpLeft size={17} />
              </button>

              <button
                onClick={() => scrollTo("services")}
                className="rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold backdrop-blur-md transition hover:bg-white/20"
              >
                {t.secondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="section-eyebrow">{t.servicesEyebrow}</p>
            <h2 className="section-title whitespace-pre-line">
              {t.servicesTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#756b65] md:text-lg">
              {t.servicesText}
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[28px] border border-[#e8e0da] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1e8e1] text-[#8c6d59]">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <h3 className="text-xl font-bold">{service.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-[#776d67]">
                    {service.text}
                  </p>

                  <div className="mt-7 h-px w-10 bg-[#b79d8a] transition-all group-hover:w-20" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-[#eee7e1] px-6 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="overflow-hidden rounded-[34px]">
              <img
                src={images.beauty}
                alt="Beauty service at Tanaz Beauty"
                className="h-[520px] w-full object-cover md:h-[650px]"
              />
            </div>

            <div className="absolute -bottom-6 -left-3 rounded-2xl bg-white px-6 py-5 shadow-xl md:-left-6">
              <div className="text-xs text-[#89766a]">
                Tanaz Beauty
              </div>
              <div className="mt-1 text-sm font-bold">
                Beauty with intention
              </div>
            </div>
          </div>

          <div>
            <p className="section-eyebrow">{t.aboutEyebrow}</p>

            <h2 className="section-title whitespace-pre-line">
              {t.aboutTitle}
            </h2>

            <p className="mt-7 text-base leading-9 text-[#685e58] md:text-lg">
              {t.aboutText}
            </p>

            <p className="mt-5 text-base leading-9 text-[#685e58] md:text-lg">
              {t.aboutText2}
            </p>

            <button
              onClick={() => scrollTo("contact")}
              className="mt-8 rounded-full bg-[#332a25] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#4a3c34]"
            >
              {t.aboutButton}
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="section-eyebrow">{t.galleryEyebrow}</p>
            <h2 className="section-title">{t.galleryTitle}</h2>
            <p className="mt-6 text-base leading-8 text-[#756b65] md:text-lg">
              {t.galleryText}
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded-[28px] lg:col-span-2 lg:row-span-2">
              <img
                src={images.color}
                alt="Hair color"
                className="h-full min-h-[500px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[28px]">
              <img
                src={images.makeup}
                alt="Makeup"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[28px]">
              <img
                src={images.styling}
                alt="Hair styling"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-[28px] lg:col-span-2">
              <img
                src={images.hero}
                alt="Beauty salon"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section
        id="contact"
        className="bg-[#332a25] px-6 py-24 text-white md:px-8 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-semibold tracking-wide text-[#cdb6a5]">
                {t.bookingEyebrow}
              </p>

              <h2 className="whitespace-pre-line text-4xl font-bold leading-[1.3] md:text-6xl">
                {t.bookingTitle}
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                {t.bookingText}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://t.me/Tanazbeautybot"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#332a25] transition hover:bg-[#eee5df]"
                >
                  <Send size={17} />
                  {t.telegram}
                </a>

                <a
                  href="tel:+983136518167"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold transition hover:bg-white/10"
                >
                  <Phone size={17} />
                  {t.call}
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=سپاهانشهر+بلوار+غدیر+مجتمع+عقیق+5+پلاک+22"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <MapPin size={20} />
                <div>
                  <div className="contact-label">{t.addressTitle}</div>
                  <div className="contact-value">{t.address}</div>
                </div>
              </a>

              <a href="tel:+983136518167" className="contact-card">
                <Phone size={20} />
                <div>
                  <div className="contact-label">{t.phoneTitle}</div>
                  <div className="contact-value">03136518167</div>
                  <div className="contact-value mt-1">09307984291</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/tanazz.beauty/"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <Instagram size={20} />
                <div>
                  <div className="contact-label">
                    {t.instagramTitle}
                  </div>
                  <div className="contact-value">
                    @tanazz.beauty
                  </div>
                </div>
              </a>

              <div className="contact-card">
                <Clock size={20} />
                <div>
                  <div className="contact-label">{t.hoursTitle}</div>
                  <div className="contact-value">{t.hours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#27201c] px-6 py-8 text-white/50 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center text-xs md:flex-row md:items-center md:justify-between md:text-right">
          <div>© {new Date().getFullYear()} Tanaz Beauty</div>
          <div>{t.footer}</div>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #fbfaf8;
        }

        .nav-link {
          font-size: 13px;
          color: #5f5650;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #9a765e;
        }

        .section-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #a17e68;
        }

        .section-title {
          margin-top: 14px;
          font-size: clamp(34px, 5vw, 58px);
          font-weight: 800;
          line-height: 1.3;
          letter-spacing: -0.03em;
          color: #2f2925;
        }

        .contact-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 22px;
          color: rgba(255, 255, 255, 0.9);
          transition: background 0.25s ease;
        }

        .contact-card:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .contact-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.45);
          margin-bottom: 6px;
        }

        .contact-value {
          font-size: 14px;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.85);
        }

        @media (max-width: 640px) {
          .section-title {
            font-size: 34px;
            line-height: 1.35;
          }
        }
      `}</style>
    </main>
  );
}

