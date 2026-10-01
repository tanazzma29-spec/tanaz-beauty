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

export default function Home() {
  const [isFa, setIsFa] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const t = isFa
    ? {
        brand: "Tanaz Beauty",
        nav: ["خانه", "خدمات", "درباره ما", "نمونه‌کارها", "تماس"],
        heroEyebrow: "سالن زیبایی طناز",
        heroTitle: "زیبایی تو، امضای توست.",
        heroText:
          "سالن زیبایی طناز در سپاهانشهر اصفهان؛ ارائه خدمات تخصصی رنگ و احیای مو، کوتاهی، میکاپ، شینیون، ابرو، مژه و ناخن در محیطی آرام و حرفه‌ای.",
        primary: "رزرو وقت",
        secondary: "مشاهده خدمات",
        badge: "زیبایی با ظرافت و تخصص",
        trust: [
          "مشاوره تخصصی",
          "رزرو آسان",
          "محیط آرام و حرفه‌ای",
        ],
        servicesEyebrow: "خدمات ما",
        servicesTitle: "زیبایی، با دقت و ظرافت",
        servicesText:
          "هر خدمات با توجه به فرم چهره، جنس مو، رنگ پوست و استایل شخصی شما انجام می‌شود.",
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
          "در سالن زیبایی طناز، هر خدمات با توجه به فرم چهره، جنس مو، رنگ پوست و سلیقه شخصی شما انجام می‌شود.",
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
        heroTitle: "Your beauty, your signature.",
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
      className="min-h-screen overflow-x-hidden bg-[#faf8f5] text-[#302a26]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-3 max-w-7xl px-4 sm:px-6">
          <div className="flex h-[68px] items-center justify-between rounded-full border border-white/50 bg-white/90 px-5 shadow-[0_10px_40px_rgba(60,45,35,0.08)] backdrop-blur-xl md:px-7">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2"
              aria-label="Tanaz Beauty"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#302a26] text-white">
                <Sparkles size={17} />
              </span>
              <span className="font-serif text-[19px] font-semibold tracking-wide">
                Tanaz Beauty
              </span>
            </button>

            <nav className="hidden items-center gap-7 md:flex">
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollTo(
                      ["home", "services", "about", "gallery", "contact"][
                        index
                      ]
                    )
                  }
                  className="text-[13px] font-medium text-[#675e57] transition hover:text-[#302a26]"
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFa(!isFa)}
                className="hidden h-9 rounded-full border border-[#e8e0d9] px-4 text-[11px] font-semibold tracking-wider text-[#5f554e] transition hover:bg-[#f6f1ec] sm:block"
              >
                {t.language}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#302a26] text-white md:hidden"
                aria-label="Menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="mt-2 rounded-[24px] border border-[#eee5de] bg-white p-3 shadow-xl md:hidden">
              {t.nav.map((item, index) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollTo(
                      ["home", "services", "about", "gallery", "contact"][
                        index
                      ]
                    )
                  }
                  className="block w-full rounded-xl px-4 py-3 text-right text-sm text-[#554c46] transition hover:bg-[#f8f3ee]"
                >
                  {item}
                </button>
              ))}

              <button
                onClick={() => setIsFa(!isFa)}
                className="mt-1 w-full rounded-xl bg-[#302a26] px-4 py-3 text-sm font-semibold text-white"
              >
                {t.language}
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative flex min-h-[780px] items-end overflow-hidden">
        <img
          src={images.hero}
          alt="Tanaz Beauty Salon"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1714]/90 via-[#1d1714]/35 to-[#1d1714]/10" />

        <div className="absolute left-1/2 top-1/2 hidden h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 md:block" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 sm:px-8 lg:pb-24">
          <div className="max-w-[720px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-medium text-white backdrop-blur-md">
              <Sparkles size={13} />
              {t.badge}
            </div>

            <p className="mb-4 text-sm font-medium tracking-[0.12em] text-white/75">
              {t.heroEyebrow}
            </p>

            <h1 className="mb-6 font-serif text-5xl font-medium leading-[1.15] tracking-tight text-white sm:text-6xl md:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="max-w-[650px] text-[15px] leading-8 text-white/80 sm:text-base">
              {t.heroText}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollTo("contact")}
                className="group flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#302a26] transition hover:bg-[#f1e9e2]"
              >
                {t.primary}
                <ArrowUpLeft
                  size={17}
                  className="transition group-hover:-translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <button
                onClick={() => scrollTo("services")}
                className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                {t.secondary}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-white/50 md:block">
          <div className="flex flex-col items-center gap-2 text-[9px] uppercase tracking-[0.3em]">
            <span>Scroll</span>
            <div className="h-10 w-px bg-white/30" />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="relative z-10 -mt-7 px-4 sm:px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-[24px] border border-[#eadfd7] bg-white shadow-[0_20px_60px_rgba(70,50,40,0.10)] sm:grid-cols-3">
          {t.trust.map((item, index) => (
            <div
              key={item}
              className={`flex items-center justify-center gap-3 px-5 py-5 text-sm font-medium text-[#554b44] ${
                index !== t.trust.length - 1
                  ? "border-b border-[#eee7e1] sm:border-b-0 sm:border-l"
                  : ""
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4eee8] text-[#8a7160]">
                {index === 0 ? (
                  <Sparkles size={15} />
                ) : index === 1 ? (
                  <Heart size={15} />
                ) : (
                  <Gem size={15} />
                )}
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 px-6 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-[11px] font-bold tracking-[0.25em] text-[#9a806e]">
              {t.servicesEyebrow}
            </p>
            <h2 className="font-serif text-4xl leading-tight text-[#302a26] sm:text-5xl">
              {t.servicesTitle}
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#746a63]">
              {t.servicesText}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-[28px] border border-[#ebe2db] bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(60,45,35,0.10)]"
                >
                  <div className="relative h-[245px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md">
                      <Icon size={19} />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-[#342d28]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#766c65]">
                      {service.text}
                    </p>

                    <button
                      onClick={() => scrollTo("contact")}
                      className="mt-5 flex items-center gap-2 text-xs font-bold text-[#8a7160] transition group-hover:text-[#302a26]"
                    >
                      {t.primary}
                      <ChevronLeft size={15} />
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
        className="scroll-mt-24 bg-[#f2ece6] px-6 py-24 sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-[34px] border border-[#d7c9be] lg:block" />

            <div className="relative overflow-hidden rounded-[34px]">
              <img
                src={images.beauty}
                alt="Tanaz Beauty"
                className="h-[520px] w-full object-cover"
              />

              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-white/15 px-5 py-4 text-white backdrop-blur-lg">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Star size={15} fill="currentColor" />
                  <span>{t.badge}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="mb-4 text-[11px] font-bold tracking-[0.25em] text-[#9a806e]">
              {t.aboutEyebrow}
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#302a26] sm:text-5xl">
              {t.aboutTitle}
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-8 text-[#675d56]">
              <p>{t.aboutText}</p>
              <p>{t.aboutText2}</p>
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="mt-8 flex items-center gap-3 rounded-full bg-[#302a26] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#4a4039]"
            >
              {t.aboutButton}
              <ArrowUpLeft size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="scroll-mt-24 px-6 py-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-bold tracking-[0.25em] text-[#9a806e]">
                {t.galleryEyebrow}
              </p>
              <h2 className="font-serif text-4xl text-[#302a26] sm:text-5xl">
                {t.galleryTitle}
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#746a63]">
              {t.galleryText}
            </p>
          </div>

          <div className="grid auto-rows-[190px] grid-cols-2 gap-4 md:auto-rows-[240px] md:grid-cols-4">
            <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-[28px]">
              <img
                src={images.hero}
                alt="Tanaz Beauty Salon"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              <div className="absolute bottom-5 right-5 text-white">
                <p className="text-xs tracking-widest text-white/70">
                  TANAZ BEAUTY
                </p>
                <p className="mt-1 font-serif text-2xl">Beauty & Care</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[28px]">
              <img
                src={images.color}
                alt="Hair color"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="group overflow-hidden rounded-[28px]">
              <img
                src={images.makeup}
                alt="Makeup"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="group col-span-2 overflow-hidden rounded-[28px]">
              <img
                src={images.styling}
                alt="Hair styling"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 bg-[#302a26] px-6 py-24 text-white sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            <div>
              <p className="mb-4 text-[11px] font-bold tracking-[0.25em] text-[#c8aa94]">
                {t.bookingEyebrow}
              </p>

              <h2 className="whitespace-pre-line font-serif text-4xl leading-[1.25] sm:text-5xl lg:text-6xl">
                {t.bookingTitle}
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-8 text-white/65">
                {t.bookingText}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://t.me/Tanazbeautybot"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#302a26] transition hover:bg-[#f0e8e1]"
                >
                  <Send size={17} />
                  {t.telegram}
                </a>

                <a
                  href="tel:+983136518167"
                  className="flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone size={17} />
                  {t.call}
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={18} />
                </div>
                <p className="mb-2 text-xs text-white/45">
                  {t.addressTitle}
                </p>
                <p className="text-sm leading-7 text-white/80">{t.address}</p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=سپاهانشهر+بلوار+غدیر+مجتمع+عقیق+5+پلاک+22"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#d4b8a2]"
                >
                  مشاهده روی نقشه
                  <ArrowUpLeft size={14} />
                </a>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Phone size={18} />
                </div>
                <p className="mb-2 text-xs text-white/45">{t.phoneTitle}</p>

                <a
                  href="tel:+983136518167"
                  className="block text-sm text-white/85 transition hover:text-white"
                >
                  03136518167
                </a>

                <a
                  href="tel:+989307984291"
                  className="mt-2 block text-sm text-white/65 transition hover:text-white"
                >
                  09307984291
                </a>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Instagram size={18} />
                </div>

                <p className="mb-2 text-xs text-white/45">
                  {t.instagramTitle}
                </p>

                <a
                  href="https://www.instagram.com/tanazz.beauty/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  @tanazz.beauty
                </a>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Clock size={18} />
                </div>

                <p className="mb-2 text-xs text-white/45">
                  {t.hoursTitle}
                </p>

                <p className="text-sm text-white/80">{t.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#241f1c] px-6 py-7 text-white/50 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs sm:flex-row">
          <p>{t.footer}</p>

          <div className="flex items-center gap-5">
            <button
              onClick={() => scrollTo("home")}
              className="transition hover:text-white"
            >
              {isFa ? "بازگشت به بالا" : "Back to top"}
            </button>

            <span className="h-1 w-1 rounded-full bg-white/25" />

            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>

      {/* Mobile Booking Button */}
      <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <button
          onClick={() => scrollTo("contact")}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#302a26] px-6 py-4 text-sm font-bold text-white shadow-[0_15px_40px_rgba(30,20,15,0.25)]"
        >
          <Send size={16} />
          {t.primary}
        </button>
      </div>
    </main>
  );
}
