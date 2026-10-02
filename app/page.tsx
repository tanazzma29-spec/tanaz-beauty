import type { Metadata } from "next";
import Image from "next/image";
import { Cormorant_Garamond, Vazirmatn } from "next/font/google";
import {
  ArrowUpLeft,
  ChevronDown,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "سالن زیبایی طناز | Tanaz Beauty",
  description:
    "سالن زیبایی طناز در سپاهانشهر اصفهان؛ تجربه‌ای ظریف و شخصی‌سازی‌شده در رنگ و لایت، میکاپ، شینیون و خدمات تخصصی زیبایی.",
  metadataBase: new URL("https://tanazzbeauty.ir/"),
  openGraph: {
    title: "سالن زیبایی طناز | Tanaz Beauty",
    description: "Beauty, styled around you.",
    url: "https://tanazzbeauty.ir/",
    siteName: "Tanaz Beauty",
    locale: "fa_IR",
    type: "website",
  },
};

const PHONE = "03136518167";
const MOBILE = "09307984291";
const INSTAGRAM = "https://www.instagram.com/tanazz.beauty/";
const TELEGRAM = "https://t.me/Tanazbeautybot";
const ADDRESS =
  "سپاهانشهر، بلوار غدیر، مجتمع عقیق ۵، طبقه زیرین، انتهای راهرو، پلاک ۲۲";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=سپاهانشهر%20بلوار%20غدیر%20مجتمع%20عقیق%205%20پلاک%2022";

const services = [
  {
    number: "01",
    title: "رنگ و لایت",
    en: "COLOR & LIGHT",
    description:
      "رنگ، هایلایت و تکنیک‌های ظریف برای ساختن تناژی هماهنگ با چهره و استایل تو.",
  },
  {
    number: "02",
    title: "میکاپ",
    en: "MAKEUP",
    description:
      "میکاپی تمیز و شخصی‌سازی‌شده؛ از ظاهر طبیعی و مینیمال تا استایل‌های خاص مراسم.",
  },
  {
    number: "03",
    title: "شینیون و استایل",
    en: "STYLING",
    description:
      "استایل مو با تمرکز بر فرم صورت، لباس و حال‌وهوای مراسم؛ ظریف، ماندگار و متفاوت.",
  },
  {
    number: "04",
    title: "خدمات تخصصی زیبایی",
    en: "BEAUTY",
    description:
      "مجموعه‌ای از خدمات تخصصی برای تکمیل استایل و رسیدن به نتیجه‌ای هماهنگ و طبیعی.",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=90",
    alt: "Beauty salon styling",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=90",
    alt: "Professional makeup",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=90",
    alt: "Hair styling",
  },
  {
    src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=90",
    alt: "Beauty detail",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "سالن زیبایی طناز",
    alternateName: "Tanaz Beauty",
    url: "https://tanazzbeauty.ir/",
    telephone: `+98${PHONE.slice(1)}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS,
      addressLocality: "Isfahan",
      addressCountry: "IR",
    },
    sameAs: [INSTAGRAM, TELEGRAM],
  };

  return (
    <main className={`${cormorant.variable} ${vazirmatn.variable} site-shell`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        :root {
          --cream: #f4f0e9;
          --cream-deep: #ebe5dc;
          --paper: #f8f6f2;
          --ink: #292521;
          --ink-soft: #57504a;
          --muted: #857c73;
          --line: rgba(41, 37, 33, 0.11);
          --dark: #302a26;
          --dark-soft: #39322d;
          --gold: #9b8065;
          --white: #fffdf9;
        }

        * { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          background: var(--cream);
          color: var(--ink);
          font-family: var(--font-vazirmatn), sans-serif;
        }

        a { color: inherit; text-decoration: none; }
        button { font: inherit; }

        .site-shell {
          min-height: 100vh;
          overflow: hidden;
          background: var(--cream);
        }

        .container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .fa-display {
          font-family: var(--font-vazirmatn), sans-serif;
          font-weight: 400;
          letter-spacing: -0.035em;
          line-height: 1.55;
        }

        .en {
          font-family: var(--font-cormorant), serif;
          letter-spacing: 0.16em;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--gold);
          font-family: var(--font-cormorant), serif;
          font-size: 13px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .eyebrow::before {
          content: "";
          width: 28px;
          height: 1px;
          background: currentColor;
        }

        .header {
          position: absolute;
          z-index: 20;
          top: 0;
          left: 0;
          right: 0;
          border-bottom: 1px solid rgba(255,255,255,.18);
          color: var(--white);
        }

        .header-inner {
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .brand-logo {
          width: 47px;
          height: 47px;
          object-fit: contain;
          display: block;
        }

        .brand-text strong {
          display: block;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -.02em;
        }

        .brand-text span {
          display: block;
          margin-top: 1px;
          font-family: var(--font-cormorant), serif;
          font-size: 10px;
          letter-spacing: .2em;
          opacity: .72;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 34px;
          font-size: 13px;
        }

        .nav a { opacity: .86; transition: opacity .2s ease; }
        .nav a:hover { opacity: 1; }

        .header-action {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: 1px solid rgba(255,255,255,.35);
          padding: 10px 15px;
          font-size: 12px;
          transition: background .2s ease, color .2s ease;
        }

        .header-action:hover {
          background: var(--white);
          color: var(--ink);
        }

        .menu-button {
          display: none;
          border: 0;
          background: transparent;
          color: inherit;
          padding: 7px;
          cursor: pointer;
        }

        .hero {
          position: relative;
          min-height: 760px;
          display: flex;
          align-items: center;
          color: var(--white);
          background:
            linear-gradient(90deg, rgba(31,27,24,.78) 0%, rgba(31,27,24,.48) 48%, rgba(31,27,24,.28) 100%),
            url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=90")
            center / cover no-repeat;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(20,17,15,.18), transparent 45%, rgba(20,17,15,.42));
          pointer-events: none;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          padding-top: 80px;
          display: grid;
          grid-template-columns: 1fr .75fr;
          gap: 60px;
          align-items: end;
        }

        .hero-copy { max-width: 700px; }

        .hero-title {
          margin: 22px 0 20px;
          max-width: 650px;
          font-size: clamp(46px, 5.6vw, 76px);
          line-height: 1.45;
          font-weight: 400;
          letter-spacing: -.045em;
        }

        .hero-title em { color: #ddd0bf; font-style: normal; }

        .hero-description {
          max-width: 500px;
          margin: 0;
          color: rgba(255,255,255,.78);
          font-size: 15px;
          line-height: 2.15;
          font-weight: 300;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-top: 34px;
        }

        .primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--white);
          color: var(--ink);
          padding: 13px 19px;
          font-size: 12px;
          transition: transform .2s ease;
        }

        .primary-btn:hover { transform: translateY(-2px); }

        .text-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,.84);
          font-size: 12px;
        }

        .hero-note {
          justify-self: end;
          width: 230px;
          padding: 20px 0 0 22px;
          border-left: 1px solid rgba(255,255,255,.35);
          color: rgba(255,255,255,.78);
          font-size: 12px;
          line-height: 2;
        }

        .hero-note strong {
          display: block;
          margin-bottom: 7px;
          color: var(--white);
          font-size: 14px;
          font-weight: 500;
        }

        .scroll-cue {
          position: absolute;
          z-index: 2;
          bottom: 27px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 7px;
          color: rgba(255,255,255,.6);
          font-family: var(--font-cormorant), serif;
          font-size: 10px;
          letter-spacing: .18em;
        }

        .scroll-cue span {
          width: 1px;
          height: 35px;
          background: rgba(255,255,255,.4);
        }

        .intro-strip {
          background: var(--paper);
          border-bottom: 1px solid var(--line);
        }

        .intro-inner {
          min-height: 185px;
          display: grid;
          grid-template-columns: .55fr 1.45fr;
          align-items: center;
          gap: 70px;
        }

        .intro-number {
          color: var(--gold);
          font-family: var(--font-cormorant), serif;
          font-size: 14px;
          letter-spacing: .15em;
        }

        .intro-text {
          max-width: 790px;
          margin: 0;
          font-size: clamp(22px, 2.3vw, 31px);
          line-height: 1.95;
          font-weight: 400;
          letter-spacing: -.025em;
        }

        .services {
          padding: 125px 0 135px;
          background: var(--cream);
        }

        .section-head {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 58px;
        }

        .section-title {
          margin: 12px 0 0;
          font-size: clamp(38px, 4.3vw, 58px);
          line-height: 1.5;
          font-weight: 400;
          letter-spacing: -.04em;
        }

        .section-description {
          max-width: 330px;
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 2.05;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--line);
        }

        .service-card {
          min-height: 290px;
          padding: 28px 25px 25px;
          border-right: 1px solid var(--line);
          display: flex;
          flex-direction: column;
        }

        .service-card:first-child { border-left: 1px solid var(--line); }

        .service-number {
          color: var(--gold);
          font-family: var(--font-cormorant), serif;
          font-size: 13px;
          letter-spacing: .1em;
        }

        .service-en {
          margin-top: 48px;
          color: var(--muted);
          font-family: var(--font-cormorant), serif;
          font-size: 12px;
          letter-spacing: .2em;
        }

        .service-title {
          margin: 7px 0 13px;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: -.025em;
        }

        .service-description {
          margin: 0;
          color: var(--ink-soft);
          font-size: 12px;
          line-height: 2.05;
          font-weight: 300;
        }

        .about { background: var(--dark); color: var(--white); }

        .about-inner {
          display: grid;
          grid-template-columns: .92fr 1.08fr;
          min-height: 690px;
        }

        .about-image {
          min-height: 690px;
          background:
            linear-gradient(0deg, rgba(35,30,27,.12), rgba(35,30,27,.12)),
            url("https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=90")
            center / cover no-repeat;
        }

        .about-copy {
          display: flex;
          align-items: center;
          padding: 80px clamp(45px, 7vw, 105px);
        }

        .about-content { max-width: 600px; }

        .about-title {
          margin: 20px 0 27px;
          font-size: clamp(37px, 4.2vw, 56px);
          line-height: 1.55;
          font-weight: 400;
          letter-spacing: -.045em;
        }

        .about-title em { color: #d4c3ae; font-style: normal; }

        .about-text {
          margin: 0;
          color: rgba(255,255,255,.65);
          font-size: 13px;
          line-height: 2.2;
          font-weight: 300;
        }

        .about-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 38px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,.14);
        }

        .about-point strong {
          display: block;
          margin-bottom: 5px;
          font-family: var(--font-cormorant), serif;
          font-size: 15px;
          letter-spacing: .12em;
          font-weight: 500;
        }

        .about-point span {
          color: rgba(255,255,255,.5);
          font-size: 11px;
        }

        .gallery {
          padding: 125px 0 135px;
          background: var(--paper);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1.08fr .92fr .92fr;
          grid-template-rows: 265px 265px;
          gap: 12px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          background: var(--cream-deep);
        }

        .gallery-item:first-child { grid-row: 1 / 3; }

        .gallery-item:last-child { grid-column: 2 / 4; }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .7s cubic-bezier(.2,.7,.2,1);
        }

        .gallery-item:hover img { transform: scale(1.035); }

        .contact {
          background: var(--cream-deep);
          padding: 105px 0 100px;
        }

        .contact-inner {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 100px;
          align-items: start;
        }

        .contact-description {
          max-width: 430px;
          margin: 20px 0 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 2.15;
        }

        .contact-list { border-top: 1px solid var(--line); }

        .contact-item {
          min-height: 83px;
          display: grid;
          grid-template-columns: 42px 1fr 25px;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--line);
        }

        .contact-icon {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(41,37,33,.14);
          border-radius: 50%;
          display: grid;
          place-items: center;
        }

        .contact-info small {
          display: block;
          margin-bottom: 4px;
          color: var(--muted);
          font-family: var(--font-cormorant), serif;
          font-size: 10px;
          letter-spacing: .18em;
        }

        .contact-info strong {
          display: inline-block;
          font-size: 13px;
          font-weight: 400;
        }

        .phone-number {
          direction: ltr;
          unicode-bidi: isolate;
          display: inline-block;
          white-space: nowrap;
          text-align: left;
        }

        .address-text {
          direction: rtl;
          unicode-bidi: isolate;
          display: block;
          font-size: 12px;
          line-height: 1.9;
        }

        .social-row {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 24px;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--ink-soft);
          font-family: var(--font-cormorant), serif;
          font-size: 12px;
          letter-spacing: .08em;
        }

        .footer {
          background: var(--dark-soft);
          color: rgba(255,255,255,.75);
        }

        .footer-inner {
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-logo {
          width: 39px;
          height: 39px;
          object-fit: contain;
          display: block;
        }

        .footer-copy {
          color: rgba(255,255,255,.42);
          font-family: var(--font-cormorant), serif;
          font-size: 11px;
          letter-spacing: .1em;
        }

        .mobile-cta { display: none; }
        .mobile-menu { display: none; }

        @media (max-width: 900px) {
          .container { width: min(100% - 34px, 720px); }

          .nav, .header-action { display: none; }

          .menu-button {
            display: block;
          }

          .hero { min-height: 720px; }

          .hero-inner {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .hero-note {
            justify-self: start;
            width: auto;
            max-width: 290px;
          }

          .intro-inner {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 48px 0;
          }

          .service-grid { grid-template-columns: 1fr 1fr; }

          .service-card:nth-child(3) { border-left: 1px solid var(--line); }

          .service-card:nth-child(3),
          .service-card:nth-child(4) {
            border-top: 1px solid var(--line);
          }

          .about-inner { grid-template-columns: 1fr; }

          .about-image { min-height: 430px; }

          .contact-inner {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 330px 220px 220px;
          }

          .gallery-item:first-child {
            grid-column: 1 / 3;
            grid-row: 1;
          }

          .gallery-item:last-child { grid-column: 1 / 3; }

          .mobile-cta {
            position: fixed;
            z-index: 30;
            right: 16px;
            left: 16px;
            bottom: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 13px;
            background: var(--dark);
            color: var(--white);
            box-shadow: 0 10px 30px rgba(0,0,0,.16);
            font-size: 12px;
          }

          .footer { padding-bottom: 68px; }
        }

        @media (max-width: 600px) {
          .container { width: calc(100% - 30px); }

          .header-inner { height: 72px; }

          .brand-logo {
            width: 40px;
            height: 40px;
          }

          .hero { min-height: 680px; }

          .hero-inner { padding-top: 50px; }

          .hero-title {
            font-size: clamp(42px, 11vw, 56px);
            line-height: 1.55;
          }

          .hero-description {
            font-size: 13px;
            line-height: 2;
          }

          .hero-actions {
            margin-top: 27px;
            gap: 16px;
          }

          .intro-text {
            font-size: 20px;
            line-height: 2;
          }

          .services, .gallery { padding: 85px 0; }

          .section-head {
            display: block;
            margin-bottom: 40px;
          }

          .section-description { margin-top: 20px; }

          .service-grid { grid-template-columns: 1fr; }

          .service-card,
          .service-card:nth-child(3),
          .service-card:nth-child(4) {
            min-height: 245px;
            border-left: 1px solid var(--line);
            border-right: 1px solid var(--line);
            border-top: 1px solid var(--line);
          }

          .service-card:first-child { border-top: 1px solid var(--line); }

          .service-en { margin-top: 32px; }

          .about-image { min-height: 350px; }

          .about-copy { padding: 65px 24px; }

          .about-title {
            font-size: 36px;
            line-height: 1.6;
          }

          .about-points {
            grid-template-columns: 1fr;
            gap: 17px;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            grid-template-rows: 320px repeat(3, 220px);
          }

          .gallery-item:first-child,
          .gallery-item:last-child {
            grid-column: auto;
            grid-row: auto;
          }

          .contact { padding: 80px 0 75px; }

          .contact-description {
            margin-top: 15px;
          }

          .contact-info strong { font-size: 12px; }

          .address-text {
            white-space: normal;
            font-size: 11px;
          }

          .footer-inner {
            min-height: 105px;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            padding: 25px 0;
          }

          .mobile-menu {
            position: fixed;
            z-index: 40;
            inset: 0;
            display: flex;
            flex-direction: column;
            padding: 22px 18px;
            background: var(--paper);
            color: var(--ink);
          }

          .mobile-menu-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .mobile-menu-close {
            border: 0;
            background: transparent;
            color: inherit;
            padding: 7px;
            cursor: pointer;
          }

          .mobile-menu-links {
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-top: 70px;
          }

          .mobile-menu-links a {
            font-size: 22px;
            font-weight: 400;
          }

          .mobile-menu-links span {
            display: block;
            margin-top: 4px;
            color: var(--muted);
            font-family: var(--font-cormorant), serif;
            font-size: 10px;
            letter-spacing: .18em;
          }

          .mobile-menu-contact {
            direction: ltr;
            unicode-bidi: isolate;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            margin-top: auto;
            padding: 16px 0;
            border-top: 1px solid var(--line);
            font-size: 13px;
            white-space: nowrap;
          }
        }
      `}</style>

      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="brand" aria-label="Tanaz Beauty">
            <Image
              className="brand-logo"
              src="/tanaz-logo.png"
              alt="Tanaz Beauty"
              width={47}
              height={47}
              priority
            />
            <span className="brand-text">
              <strong>سالن زیبایی طناز</strong>
              <span>TANAZ BEAUTY</span>
            </span>
          </a>

          <nav className="nav" aria-label="Main navigation">
            <a href="#services">خدمات</a>
            <a href="#about">درباره ما</a>
            <a href="#gallery">گالری</a>
            <a href="#contact">تماس</a>
          </nav>

          <a className="header-action" href={`tel:${PHONE}`}>
            رزرو وقت
            <ArrowUpLeft size={15} strokeWidth={1.4} />
          </a>

          <button
            className="menu-button"
            aria-label="باز کردن منو"
            onClick={() =>
              document.getElementById("mobile-menu")?.removeAttribute("hidden")
            }
          >
            <Menu size={22} strokeWidth={1.3} />
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">BEAUTY SALON</span>

            <h1 className="hero-title fa-display">
              زیبایی تو،
              <br />
              <em>امضای توست.</em>
            </h1>

            <p className="hero-description">
              فضایی برای زیباییِ شخصی تو؛ با نگاهی دقیق به فرم، رنگ، استایل و
              جزئیاتی که تو را منحصربه‌فرد می‌کند.
            </p>

            <div className="hero-actions">
              <a href={`tel:${PHONE}`} className="primary-btn">
                رزرو وقت
                <ArrowUpLeft size={16} strokeWidth={1.3} />
              </a>

              <a href="#services" className="text-link">
                مشاهده خدمات
                <ChevronDown size={15} strokeWidth={1.2} />
              </a>
            </div>
          </div>

          <div className="hero-note">
            <strong>Tanaz Beauty</strong>
            زیبایی، با دقت و ظرافت؛ در فضایی آرام و خصوصی در سپاهانشهر اصفهان.
          </div>
        </div>

        <div className="scroll-cue">
          SCROLL
          <span />
        </div>
      </section>

      <section className="intro-strip">
        <div className="container intro-inner">
          <div className="intro-number">01 / PHILOSOPHY</div>

          <p className="intro-text fa-display">
            زیبایی برای ما فقط یک ظاهر نیست؛
            <br />
            تجربه‌ای‌ست که با شناخت تو آغاز می‌شود.
          </p>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">OUR SERVICES</span>
              <h2 className="section-title fa-display">خدمات زیبایی</h2>
            </div>

            <p className="section-description">
              هر خدمت با توجه به ویژگی‌های چهره، مو و سبک شخصی تو انتخاب و اجرا
              می‌شود.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <span className="service-en">{service.en}</span>
                <h3 className="service-title fa-display">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-image" aria-hidden="true" />

          <div className="about-copy">
            <div className="about-content">
              <span className="eyebrow">ABOUT TANAZ</span>

              <h2 className="about-title fa-display">
                زیبایی وقتی زیباست
                <br />
                که <em>شبیه خودت باشی.</em>
              </h2>

              <p className="about-text">
                در سالن زیبایی طناز، هدف ما ساختن یک ظاهر تکراری نیست. هر
                انتخاب، از رنگ مو تا فرم میکاپ و استایل نهایی، با توجه به
                ویژگی‌های تو انجام می‌شود تا نتیجه، طبیعی، ظریف و متعلق به خودت
                باشد.
              </p>

              <div className="about-points">
                <div className="about-point">
                  <strong>PERSONAL</strong>
                  <span>توجه به ویژگی‌های منحصربه‌فرد تو</span>
                </div>

                <div className="about-point">
                  <strong>DETAIL</strong>
                  <span>دقت در جزئیات و اجرای تمیز</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery" id="gallery">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">THE GALLERY</span>
              <h2 className="section-title fa-display">نگاهی به فضای ما</h2>
            </div>

            <p className="section-description">
              فضایی آرام و روشن برای تجربه‌ای که از لحظه ورود تا نتیجه نهایی با
              دقت طراحی شده است.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <div className="gallery-item" key={item.src}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-inner">
          <div>
            <span className="eyebrow">GET IN TOUCH</span>

            <p className="contact-description">
              برای دریافت مشاوره، اطلاع از خدمات و هماهنگی زمان مراجعه، با ما در
              تماس باش.
            </p>

            <div className="social-row">
              <a
                className="social-link"
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={15} strokeWidth={1.3} />
                INSTAGRAM
              </a>

              <a
                className="social-link"
                href={TELEGRAM}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={15} strokeWidth={1.3} />
                TELEGRAM
              </a>
            </div>
          </div>

          <div className="contact-list">
            <a href={`tel:${PHONE}`} className="contact-item">
              <span className="contact-icon">
                <Phone size={18} strokeWidth={1.3} />
              </span>

              <span className="contact-info">
                <small>PHONE</small>
                <strong className="phone-number" dir="ltr">
                  031 365 18167
                </strong>
              </span>

              <ArrowUpLeft size={19} strokeWidth={1.2} />
            </a>

            <a href={`tel:${MOBILE}`} className="contact-item">
              <span className="contact-icon">
                <MessageCircle size={18} strokeWidth={1.3} />
              </span>

              <span className="contact-info">
                <small>MOBILE</small>
                <strong className="phone-number" dir="ltr">
                  0930 798 4291
                </strong>
              </span>

              <ArrowUpLeft size={19} strokeWidth={1.2} />
            </a>

            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">
                <MapPin size={18} strokeWidth={1.3} />
              </span>

              <span className="contact-info">
                <small>ADDRESS</small>
                <strong className="address-text" dir="rtl">
                  {ADDRESS}
                </strong>
              </span>

              <ArrowUpLeft size={19} strokeWidth={1.2} />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#home" className="footer-brand">
            <Image
              className="footer-logo"
              src="/tanaz-logo.png"
              alt="Tanaz Beauty"
              width={39}
              height={39}
            />
            <span>سالن زیبایی طناز</span>
          </a>

          <span className="footer-copy">
            TANAZ BEAUTY · ISFAHAN · © {new Date().getFullYear()}
          </span>
        </div>
      </footer>

      <div className="mobile-cta">
        <a href={`tel:${PHONE}`}>
          <Phone size={16} strokeWidth={1.3} />
          رزرو وقت
        </a>
      </div>

      <div className="mobile-menu" id="mobile-menu" hidden>
        <div className="mobile-menu-top">
          <a
            href="#home"
            className="brand"
            onClick={() =>
              document.getElementById("mobile-menu")?.setAttribute("hidden", "")
            }
          >
            <Image
              className="brand-logo"
              src="/tanaz-logo.png"
              alt="Tanaz Beauty"
              width={47}
              height={47}
            />

            <span className="brand-text" style={{ color: "var(--ink)" }}>
              <strong>سالن زیبایی طناز</strong>
              <span>TANAZ BEAUTY</span>
            </span>
          </a>

          <button
            className="mobile-menu-close"
            aria-label="بستن منو"
            onClick={() =>
              document.getElementById("mobile-menu")?.setAttribute("hidden", "")
            }
          >
            <X size={22} strokeWidth={1.3} />
          </button>
        </div>

        <nav className="mobile-menu-links">
          <a
            href="#services"
            onClick={() =>
              document.getElementById("mobile-menu")?.setAttribute("hidden", "")
            }
          >
            خدمات
            <span>SERVICES</span>
          </a>

          <a
            href="#about"
            onClick={() =>
              document.getElementById("mobile-menu")?.setAttribute("hidden", "")
            }
          >
            درباره ما
            <span>ABOUT</span>
          </a>

          <a
            href="#gallery"
            onClick={() =>
              document.getElementById("mobile-menu")?.setAttribute("hidden", "")
            }
          >
            گالری
            <span>GALLERY</span>
          </a>

          <a
            href="#contact"
            onClick={() =>
              document.getElementById("mobile-menu")?.setAttribute("hidden", "")
            }
          >
            تماس
            <span>CONTACT</span>
          </a>
        </nav>

        <a className="mobile-menu-contact" href={`tel:${PHONE}`} dir="ltr">
          <Phone size={17} strokeWidth={1.3} />
          <span>031 365 18167</span>
        </a>
      </div>
    </main>
  );
}
