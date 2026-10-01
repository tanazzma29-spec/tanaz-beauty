"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  CalendarDays,
  ChevronDown,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { Cormorant_Garamond, Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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

const services = [
  {
    number: "01",
    title: "رنگ و لایت",
    english: "COLOR & LIGHT",
    description:
      "رنگ‌های تخصصی، لایت، بالیاژ و تکنیک‌هایی متناسب با چهره و استایل شما.",
    image: images.color,
  },
  {
    number: "02",
    title: "میکاپ",
    english: "MAKEUP",
    description:
      "میکاپ ظریف و حرفه‌ای برای مراسم، مهمانی و لحظه‌هایی که قرار است بدرخشید.",
    image: images.makeup,
  },
  {
    number: "03",
    title: "شینیون و استایل",
    english: "STYLING",
    description:
      "استایل مو با تمرکز بر فرم صورت، لباس و شخصیت شما؛ از ساده تا مجلل.",
    image: images.styling,
  },
  {
    number: "04",
    title: "خدمات تخصصی زیبایی",
    english: "BEAUTY",
    description:
      "مجموعه‌ای از خدمات زیبایی با تمرکز بر ظرافت، کیفیت و نتیجه‌ای طبیعی.",
    image: images.beauty,
  },
];

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
    addressLocality: "Isfahan",
    addressCountry: "IR",
  },
  sameAs: [
    "https://www.instagram.com/tanazz.beauty/",
    "https://t.me/Tanazbeautybot",
  ],
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main
      dir="rtl"
      className={`${vazirmatn.variable} ${cormorant.variable} site`}
    >
      <style jsx global>{`
        :root {
          --cream: #f7f4ef;
          --cream-2: #eee9e1;
          --paper: #fbfaf8;
          --ink: #25211e;
          --muted: #77706a;
          --line: rgba(37, 33, 30, 0.13);
          --dark: #27221f;
          --dark-soft: #332c28;
          --gold: #9d8061;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--cream);
          color: var(--ink);
          font-family: var(--font-vazirmatn), sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .site {
          min-height: 100vh;
          overflow: hidden;
          background: var(--cream);
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin-inline: auto;
        }

        .fa-display {
          font-family: var(--font-vazirmatn), sans-serif;
        }

        .en-display {
          font-family: var(--font-cormorant), serif;
          direction: ltr;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--muted);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
          line-height: 1.5;
        }

        .eyebrow::before {
          content: "";
          width: 28px;
          height: 1px;
          background: var(--gold);
        }

        .section {
          padding: clamp(80px, 9vw, 140px) 0;
        }

        .section-heading {
          max-width: 720px;
        }

        .section-title {
          margin: 18px 0 0;
          font-size: clamp(34px, 5vw, 68px);
          line-height: 1.2;
          font-weight: 500;
          letter-spacing: -0.045em;
        }

        .section-description {
          max-width: 540px;
          margin: 24px 0 0;
          color: var(--muted);
          font-size: clamp(13px, 1.25vw, 15px);
          line-height: 2.2;
          font-weight: 400;
        }

        /* HEADER */

        .header {
          position: absolute;
          z-index: 20;
          top: 0;
          left: 0;
          right: 0;
          color: white;
        }

        .header-inner {
          min-height: 88px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .brand-mark {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          font-family: var(--font-cormorant), serif;
          font-size: 21px;
          direction: ltr;
        }

        .brand-copy {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .brand-fa {
          font-size: 13px;
          font-weight: 600;
        }

        .brand-en {
          font-family: var(--font-cormorant), serif;
          font-size: 12px;
          letter-spacing: 0.13em;
          direction: ltr;
          opacity: 0.8;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav a {
          position: relative;
          padding: 8px 0;
          font-size: 11px;
          font-weight: 500;
          opacity: 0.85;
          transition: opacity 0.2s ease;
        }

        .nav a:hover {
          opacity: 1;
        }

        .header-action {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 17px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 999px;
          font-size: 10px;
          font-weight: 600;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .header-action:hover {
          background: white;
          color: var(--ink);
        }

        .menu-button {
          display: none;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 50%;
          background: transparent;
          color: white;
          cursor: pointer;
        }

        /* HERO */

        .hero {
          position: relative;
          min-height: min(860px, 100vh);
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          color: white;
          background: #302925;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              180deg,
              rgba(22, 18, 16, 0.45) 0%,
              rgba(22, 18, 16, 0.1) 35%,
              rgba(22, 18, 16, 0.65) 100%
            ),
            url("${images.hero}");
          background-position: center;
          background-size: cover;
          transform: scale(1.01);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 40px));
          margin-inline: auto;
          padding: 170px 0 105px;
        }

        .hero-kicker {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.08em;
        }

        .hero-kicker span {
          width: 34px;
          height: 1px;
          background: rgba(255, 255, 255, 0.7);
        }

        .hero-title {
          max-width: 760px;
          margin: 0;
          white-space: pre-line;
          font-size: clamp(46px, 7.4vw, 104px);
          line-height: 1.1;
          font-weight: 500;
          letter-spacing: -0.065em;
        }

        .hero-title-en {
          margin: 22px 0 0;
          font-family: var(--font-cormorant), serif;
          font-size: clamp(18px, 2vw, 28px);
          font-weight: 400;
          letter-spacing: 0.08em;
          opacity: 0.88;
          direction: ltr;
          text-align: right;
        }

        .hero-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-top: 54px;
        }

        .hero-description {
          max-width: 430px;
          margin: 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 13px;
          line-height: 2.2;
        }

        .hero-button {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 15px 20px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(8px);
          font-size: 11px;
          font-weight: 600;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .hero-button:hover {
          background: white;
          color: var(--ink);
        }

        /* TRUST */

        .trust {
          border-bottom: 1px solid var(--line);
          background: var(--paper);
        }

        .trust-inner {
          min-height: 120px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .trust-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          padding: 25px;
          border-left: 1px solid var(--line);
        }

        .trust-item:last-child {
          border-left: 0;
        }

        .trust-icon {
          color: var(--gold);
        }

        .trust-title {
          margin: 0;
          font-size: 12px;
          font-weight: 600;
        }

        .trust-text {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 10px;
        }

        /* SERVICES */

        .services {
          background: var(--paper);
        }

        .services-top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 65px;
        }

        .services-note {
          max-width: 240px;
          padding-bottom: 6px;
          color: var(--muted);
          font-size: 11px;
          line-height: 2;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 70px 30px;
        }

        .service-card:nth-child(2) {
          margin-top: 90px;
        }

        .service-card:nth-child(4) {
          margin-top: 40px;
        }

        .service-image-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 1.18;
          background: #e4ded6;
        }

        .service-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .service-card:hover .service-image {
          transform: scale(1.045);
        }

        .service-number {
          position: absolute;
          z-index: 2;
          top: 18px;
          right: 18px;
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          background: rgba(28, 24, 21, 0.2);
          backdrop-filter: blur(6px);
          color: white;
          font-family: var(--font-cormorant), serif;
          font-size: 17px;
          direction: ltr;
        }

        .service-info {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 20px;
          padding-top: 20px;
        }

        .service-title {
          margin: 0;
          font-size: clamp(20px, 2vw, 27px);
          font-weight: 600;
          letter-spacing: -0.035em;
        }

        .service-en {
          margin-top: 4px;
          font-family: var(--font-cormorant), serif;
          color: var(--gold);
          font-size: 14px;
          letter-spacing: 0.09em;
          direction: ltr;
        }

        .service-description {
          max-width: 340px;
          margin: 9px 0 0;
          color: var(--muted);
          font-size: 11px;
          line-height: 2;
        }

        .service-arrow {
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          border: 1px solid var(--line);
          border-radius: 50%;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .service-card:hover .service-arrow {
          background: var(--ink);
          color: white;
        }

        /* ABOUT */

        .about {
          background: var(--cream-2);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          align-items: center;
          gap: clamp(50px, 9vw, 130px);
        }

        .about-image {
          position: relative;
          min-height: 650px;
          overflow: hidden;
        }

        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-badge {
          position: absolute;
          right: -1px;
          bottom: -1px;
          width: 165px;
          padding: 25px 20px;
          background: var(--cream-2);
        }

        .about-badge-number {
          font-family: var(--font-cormorant), serif;
          font-size: 50px;
          line-height: 0.9;
          direction: ltr;
        }

        .about-badge-text {
          margin-top: 10px;
          color: var(--muted);
          font-size: 10px;
          line-height: 1.8;
        }

        .about-copy {
          max-width: 560px;
        }

        .about-title {
          margin: 18px 0 28px;
          font-size: clamp(36px, 5vw, 67px);
          line-height: 1.25;
          font-weight: 500;
          letter-spacing: -0.06em;
        }

        .about-text {
          color: var(--muted);
          font-size: 13px;
          line-height: 2.25;
        }

        .about-points {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 38px;
        }

        .about-point {
          padding-top: 17px;
          border-top: 1px solid var(--line);
        }

        .about-point strong {
          display: block;
          font-size: 12px;
          font-weight: 600;
        }

        .about-point span {
          display: block;
          margin-top: 6px;
          color: var(--muted);
          font-size: 10px;
        }

        /* GALLERY */

        .gallery {
          background: var(--paper);
        }

        .gallery-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 60px;
        }

        .gallery-title {
          margin: 18px 0 0;
          font-size: clamp(35px, 5vw, 67px);
          font-weight: 500;
          letter-spacing: -0.055em;
        }

        .gallery-en {
          margin-bottom: 8px;
          font-family: var(--font-cormorant), serif;
          color: var(--gold);
          font-size: 15px;
          letter-spacing: 0.12em;
          direction: ltr;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.72fr 1fr;
          grid-template-rows: 260px 260px;
          gap: 14px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          background: #e5dfd8;
        }

        .gallery-item:nth-child(1) {
          grid-row: span 2;
        }

        .gallery-item:nth-child(2) {
          grid-row: span 2;
        }

        .gallery-item:nth-child(3) {
          grid-column: 3;
        }

        .gallery-item:nth-child(4) {
          grid-column: 3;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        /* CONTACT */

        .contact {
          background: var(--dark);
          color: white;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 0.75fr;
          gap: 90px;
          align-items: end;
        }

        .contact-title {
          max-width: 670px;
          margin: 18px 0 25px;
          white-space: pre-line;
          font-size: clamp(40px, 6vw, 80px);
          line-height: 1.18;
          font-weight: 500;
          letter-spacing: -0.06em;
        }

        .contact-text {
          max-width: 500px;
          margin: 0;
          color: rgba(255, 255, 255, 0.62);
          font-size: 12px;
          line-height: 2.1;
        }

        .contact-list {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .contact-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 19px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .contact-label {
          color: rgba(255, 255, 255, 0.5);
          font-size: 10px;
        }

        .contact-value {
          text-align: left;
          font-size: 12px;
          direction: ltr;
        }

        .contact-value.rtl {
          direction: rtl;
        }

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .contact-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 46px;
          padding: 0 18px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          font-size: 10px;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .contact-button.primary {
          background: white;
          color: var(--dark);
          border-color: white;
        }

        .contact-button:hover {
          background: white;
          color: var(--dark);
        }

        /* FOOTER */

        .footer {
          background: var(--dark);
          color: white;
          padding: 35px 0 95px;
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          padding-top: 25px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .footer-copy {
          color: rgba(255, 255, 255, 0.42);
          font-size: 9px;
        }

        .footer-social {
          display: flex;
          gap: 10px;
        }

        .footer-social a {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 50%;
          transition: background 0.2s ease;
        }

        .footer-social a:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        /* MOBILE CTA */

        .mobile-cta {
          position: fixed;
          z-index: 30;
          right: 16px;
          bottom: 16px;
          left: 16px;
          display: none;
        }

        .mobile-cta a {
          width: 100%;
          min-height: 53px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 999px;
          background: var(--dark);
          color: white;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.18);
          font-size: 11px;
          font-weight: 600;
        }

        /* MOBILE MENU */

        .mobile-menu {
          position: fixed;
          z-index: 50;
          inset: 0;
          display: flex;
          flex-direction: column;
          padding: 28px 22px;
          background: var(--dark);
          color: white;
          transform: translateY(-100%);
          transition: transform 0.35s ease;
        }

        .mobile-menu.open {
          transform: translateY(0);
        }

        .mobile-menu-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mobile-close {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          background: transparent;
          color: white;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          margin-top: 80px;
        }

        .mobile-links a {
          font-size: 28px;
          font-weight: 500;
          letter-spacing: -0.04em;
        }

        .mobile-menu-en {
          margin-top: auto;
          font-family: var(--font-cormorant), serif;
          font-size: 17px;
          letter-spacing: 0.12em;
          opacity: 0.5;
          direction: ltr;
        }

        @media (max-width: 900px) {
          .nav,
          .header-action {
            display: none;
          }

          .menu-button {
            display: grid;
            place-items: center;
          }

          .hero {
            min-height: 760px;
          }

          .hero-content {
            padding-bottom: 80px;
          }

          .hero-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 28px;
          }

          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .about-image {
            min-height: 560px;
          }

          .contact-grid {
            gap: 55px;
          }
        }

        @media (max-width: 700px) {
          .container,
          .hero-content {
            width: min(100% - 28px, 1180px);
          }

          .header-inner {
            min-height: 72px;
          }

          .hero {
            min-height: 720px;
          }

          .hero-title {
            font-size: clamp(43px, 13vw, 68px);
            line-height: 1.16;
          }

          .hero-description {
            font-size: 12px;
          }

          .trust-inner {
            grid-template-columns: 1fr;
          }

          .trust-item {
            min-height: 76px;
            justify-content: flex-start;
            padding: 17px 0;
            border-left: 0;
            border-bottom: 1px solid var(--line);
          }

          .trust-item:last-child {
            border-bottom: 0;
          }

          .services-top,
          .gallery-heading {
            display: block;
          }

          .services-note {
            margin-top: 22px;
          }

          .service-grid {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .service-card:nth-child(2),
          .service-card:nth-child(4) {
            margin-top: 0;
          }

          .service-image-wrap {
            aspect-ratio: 1.05;
          }

          .service-info {
            grid-template-columns: 1fr auto;
          }

          .about-image {
            min-height: 470px;
          }

          .about-badge {
            width: 145px;
          }

          .about-points {
            grid-template-columns: 1fr 1fr;
          }

          .gallery-en {
            margin-top: 12px;
          }

          .gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 250px 190px 190px;
          }

          .gallery-item:nth-child(1) {
            grid-row: span 2;
          }

          .gallery-item:nth-child(2) {
            grid-row: span 2;
          }

          .gallery-item:nth-child(3) {
            grid-column: 1;
          }

          .gallery-item:nth-child(4) {
            grid-column: 2;
          }

          .contact-title {
            font-size: clamp(38px, 12vw, 58px);
          }

          .footer {
            padding-bottom: 100px;
          }

          .footer-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .mobile-cta {
            display: block;
          }
        }

        @media (max-width: 430px) {
          .brand-en {
            display: none;
          }

          .hero {
            min-height: 690px;
          }

          .hero-content {
            padding-top: 140px;
          }

          .hero-title {
            font-size: 45px;
          }

          .section {
            padding: 75px 0;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            grid-template-rows: 300px 230px 230px 230px;
          }

          .gallery-item:nth-child(1),
          .gallery-item:nth-child(2),
          .gallery-item:nth-child(3),
          .gallery-item:nth-child(4) {
            grid-column: auto;
            grid-row: auto;
          }

          .about-points {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-top">
          <div className="brand">
            <div className="brand-mark">T</div>
            <div className="brand-copy">
              <span className="brand-fa">سالن زیبایی طناز</span>
              <span className="brand-en">TANAZ BEAUTY</span>
            </div>
          </div>

          <button
            className="mobile-close"
            onClick={closeMenu}
            aria-label="بستن منو"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mobile-links">
          <a href="#home" onClick={closeMenu}>
            خانه
          </a>
          <a href="#services" onClick={closeMenu}>
            خدمات
          </a>
          <a href="#about" onClick={closeMenu}>
            درباره ما
          </a>
          <a href="#portfolio" onClick={closeMenu}>
            نمونه کارها
          </a>
          <a href="#contact" onClick={closeMenu}>
            تماس
          </a>
        </nav>

        <div className="mobile-menu-en">BEAUTY · STYLE · YOU</div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="brand">
            <div className="brand-mark">T</div>

            <div className="brand-copy">
              <span className="brand-fa">سالن زیبایی طناز</span>
              <span className="brand-en">TANAZ BEAUTY</span>
            </div>
          </a>

          <nav className="nav">
            <a href="#home">خانه</a>
            <a href="#services">خدمات</a>
            <a href="#about">درباره ما</a>
            <a href="#portfolio">نمونه کارها</a>
            <a href="#contact">تماس</a>
          </nav>

          <a className="header-action" href="#contact">
            رزرو نوبت
            <ArrowUpLeft size={14} />
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="باز کردن منو"
          >
            <Menu size={19} />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-image" />

        <div className="hero-content">
          <div className="hero-kicker">
            <span />
            BEAUTY · STYLE · YOU
          </div>

          <h1 className="hero-title fa-display">
            {"زیبایی تو،\nامضای توست."}
          </h1>

          <p className="hero-title-en">YOUR BEAUTY, YOUR SIGNATURE</p>

          <div className="hero-bottom">
            <p className="hero-description">
              جایی برای زیبایی، آرامش و توجه به جزئیاتی که تو را خاص‌تر می‌کنند.
              در طناز، هر انتخاب با شناخت سبک و شخصیت تو شکل می‌گیرد.
            </p>

            <a href="#services" className="hero-button">
              مشاهده خدمات
              <ArrowLeft size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust">
        <div className="container trust-inner">
          <div className="trust-item">
            <Sparkles className="trust-icon" size={19} strokeWidth={1.4} />

            <div>
              <p className="trust-title">تجربه تخصصی</p>
              <p className="trust-text">تمرکز روی کیفیت و ظرافت</p>
            </div>
          </div>

          <div className="trust-item">
            <Star className="trust-icon" size={19} strokeWidth={1.4} />

            <div>
              <p className="trust-title">استایل شخصی</p>
              <p className="trust-text">متناسب با چهره و سلیقه شما</p>
            </div>
          </div>

          <div className="trust-item">
            <CalendarDays
              className="trust-icon"
              size={19}
              strokeWidth={1.4}
            />

            <div>
              <p className="trust-title">رزرو با هماهنگی</p>
              <p className="trust-text">برای تجربه‌ای آرام و منظم</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services" id="services">
        <div className="container">
          <div className="services-top">
            <div className="section-heading">
              <div className="eyebrow">OUR SERVICES</div>

              <h2 className="section-title fa-display">
                {"هر جزئیات،\nبرای تو طراحی شده است."}
              </h2>
            </div>

            <p className="services-note">
              زیبایی برای ما یک قالب ثابت نیست؛ هر سرویس با توجه به فرم چهره،
              سبک و خواسته تو شخصی‌سازی می‌شود.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-image-wrap">
                  <img
                    className="service-image"
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />

                  <div className="service-number">{service.number}</div>
                </div>

                <div className="service-info">
                  <div>
                    <h3 className="service-title">{service.title}</h3>

                    <div className="service-en">{service.english}</div>

                    <p className="service-description">
                      {service.description}
                    </p>
                  </div>

                  <div className="service-arrow">
                    <ArrowUpLeft size={17} strokeWidth={1.4} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about" id="about">
        <div className="container about-grid">
          <div className="about-image">
            <img src={images.beauty} alt="سالن زیبایی طناز" loading="lazy" />

            <div className="about-badge">
              <div className="about-badge-number">T</div>
              <div className="about-badge-text">
                TANAZ BEAUTY
                <br />
                ISFAHAN
              </div>
            </div>
          </div>

          <div className="about-copy">
            <div className="eyebrow">ABOUT TANAZ</div>

            <h2 className="about-title fa-display">
              {"زیبایی، وقتی زیباست\nکه شبیه خودت باشد."}
            </h2>

            <p className="about-text">
              سالن زیبایی طناز در سپاهان‌شهر اصفهان، با نگاه به زیبایی طبیعی و
              استایل شخصی شکل گرفته است. هدف ما این است که نتیجه نهایی فقط
              زیبا نباشد؛ بلکه با چهره، شخصیت و سبک زندگی تو هماهنگ باشد.
            </p>

            <div className="about-points">
              <div className="about-point">
                <strong>ظرافت</strong>
                <span>توجه به کوچک‌ترین جزئیات</span>
              </div>

              <div className="about-point">
                <strong>تخصص</strong>
                <span>انتخاب تکنیک متناسب با شما</span>
              </div>

              <div className="about-point">
                <strong>آرامش</strong>
                <span>تجربه‌ای فراتر از یک سرویس زیبایی</span>
              </div>

              <div className="about-point">
                <strong>شخصی‌سازی</strong>
                <span>زیبایی با امضای خودت</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section gallery" id="portfolio">
        <div className="container">
          <div className="gallery-heading">
            <div>
              <div className="eyebrow">OUR WORK</div>

              <h2 className="gallery-title fa-display">نمونه کارها</h2>
            </div>

            <div className="gallery-en">A TOUCH OF BEAUTY</div>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={images.hero} alt="نمونه کار سالن طناز" loading="lazy" />
            </div>

            <div className="gallery-item">
              <img
                src={images.color}
                alt="نمونه رنگ مو"
                loading="lazy"
              />
            </div>

            <div className="gallery-item">
              <img
                src={images.makeup}
                alt="نمونه میکاپ"
                loading="lazy"
              />
            </div>

            <div className="gallery-item">
              <img
                src={images.styling}
                alt="نمونه استایل مو"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <div className="container contact-grid">
          <div>
            <div className="eyebrow">BOOK YOUR MOMENT</div>

            <h2 className="contact-title fa-display">
              {"وقت آن است که\nبرای خودت وقت بگذاری."}
            </h2>

            <p className="contact-text">
              برای دریافت مشاوره، اطلاع از قیمت خدمات و هماهنگی زمان مراجعه،
              از طریق تماس یا پیام با ما در ارتباط باشید.
            </p>

            <div className="contact-actions">
              <a
                className="contact-button primary"
                href="tel:03136518167"
              >
                <Phone size={15} />
                تماس با سالن
              </a>

              <a
                className="contact-button"
                href="https://t.me/Tanazbeautybot"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={15} />
                تلگرام
              </a>

              <a
                className="contact-button"
                href="https://www.instagram.com/tanazz.beauty/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={15} />
                اینستاگرام
              </a>
            </div>
          </div>

          <div className="contact-list">
            <div className="contact-row">
              <span className="contact-label">PHONE</span>
              <a className="contact-value" href="tel:03136518167">
                031 3651 8167
              </a>
            </div>

            <div className="contact-row">
              <span className="contact-label">MOBILE</span>
              <a className="contact-value" href="tel:09307984291">
                0930 792 8491
              </a>
            </div>

            <div className="contact-row">
              <span className="contact-label">ADDRESS</span>
              <span className="contact-value rtl">
                سپاهان‌شهر، بلوار غدیر، مجتمع عقیق ۵
              </span>
            </div>

            <div className="contact-row">
              <span className="contact-label">INSTAGRAM</span>
              <a
                className="contact-value"
                href="https://www.instagram.com/tanazz.beauty/"
                target="_blank"
                rel="noreferrer"
              >
                @tanazz.beauty
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-copy">
            © 2026 Tanaz Beauty · All rights reserved.
          </div>

          <div className="footer-social">
            <a
              href="https://www.instagram.com/tanazz.beauty/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>

            <a
              href="https://t.me/Tanazbeautybot"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <MessageCircle size={15} />
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=%D8%B3%D9%BE%D8%A7%D9%87%D8%A7%D9%86%D8%B4%D9%87%D8%B1%20%D8%A8%D9%84%D9%88%D8%A7%D8%B1%20%D8%BA%D8%AF%DB%8C%D8%B1%20%D9%85%D8%AC%D8%AA%D9%85%D8%B9%20%D8%B9%D9%82%DB%8C%D9%82%205"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Maps"
            >
              <MapPin size={15} />
            </a>
          </div>
        </div>
      </footer>

      {/* MOBILE CTA */}
      <div className="mobile-cta">
        <a href="#contact">
          <CalendarDays size={16} />
          رزرو نوبت
        </a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </main>
  );
}
