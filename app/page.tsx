"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  ChevronDown,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { Cormorant_Garamond, Vazirmatn } from "next/font/google";

/* -------------------------------------------------------------------------- */
/* Fonts                                                                      */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

const services = [
  {
    number: "01",
    title: "رنگ و لایت",
    english: "COLOR & LIGHT",
    description:
      "رنگ‌هایی هماهنگ با تناژ پوست و استایل شخصی تو؛ از تغییرهای ظریف تا لایت‌های چشمگیر.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "02",
    title: "میکاپ",
    english: "MAKEUP",
    description:
      "میکاپی تمیز، ظریف و متناسب با چهره؛ برای روزهایی که می‌خواهی بهترین نسخه خودت باشی.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "03",
    title: "شینیون و استایل",
    english: "STYLING",
    description:
      "استایل‌هایی با فرم دقیق و ماندگار، متناسب با چهره، لباس و حال‌وهوای مراسم.",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "04",
    title: "خدمات تخصصی زیبایی",
    english: "BEAUTY",
    description:
      "جزئیاتی که نتیجه نهایی را کامل می‌کنند؛ با تمرکز روی ظرافت، تناسب و کیفیت.",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=90",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=90",
    alt: "خدمات رنگ و لایت سالن زیبایی طناز",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=90",
    alt: "میکاپ سالن زیبایی طناز",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=90",
    alt: "استایل و شینیون سالن زیبایی طناز",
  },
  {
    src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=90",
    alt: "خدمات زیبایی سالن طناز",
  },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className={`${vazirmatn.variable} ${cormorant.variable} site`}>
      {/* ------------------------------------------------------------------ */}
      {/* Header                                                             */}
      {/* ------------------------------------------------------------------ */}

      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="brand" onClick={closeMenu}>
            <span className="brand-mark">T</span>
            <span className="brand-text">
              <strong>طناز</strong>
              <small>BEAUTY SALON</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="منوی اصلی">
            <a href="#services">خدمات</a>
            <a href="#about">درباره ما</a>
            <a href="#gallery">گالری</a>
            <a href="#contact">تماس</a>
          </nav>

          <a className="header-cta" href="#contact">
            <span>رزرو نوبت</span>
            <ArrowUpLeft size={16} strokeWidth={1.5} />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          <nav aria-label="منوی موبایل">
            <a href="#services" onClick={closeMenu}>
              خدمات
            </a>
            <a href="#about" onClick={closeMenu}>
              درباره ما
            </a>
            <a href="#gallery" onClick={closeMenu}>
              گالری
            </a>
            <a href="#contact" onClick={closeMenu}>
              تماس
            </a>
          </nav>

          <a
            className="mobile-menu-contact"
            href="tel:03136518167"
            onClick={closeMenu}
          >
            <Phone size={17} />
            031 365 18167
          </a>
        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section className="hero" id="top">
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=90"
            alt="فضای سالن زیبایی طناز"
          />
        </div>

        <div className="hero-overlay" />

        <div className="container hero-content">
          <div className="hero-kicker">
            <span />
            <span className="en-label">SEPahan SHahr · ISFAHAN</span>
            <span />
          </div>

          <div className="hero-copy">
            <p className="hero-eyebrow">SALON DE BEAUTÉ</p>

            <h1 className="hero-title fa-display">
              زیبایی تو،
              <br />
              <em>امضای توست.</em>
            </h1>

            <p className="hero-description">
              جایی برای زیبایی، آرامش و توجه به جزئیاتی که تو را خاص‌تر
              می‌کنند. در طناز، هر انتخاب با شناخت سبک و شخصیت تو شکل می‌گیرد.
            </p>

            <div className="hero-actions">
              <a href="#services" className="button button-light">
                <span>مشاهده خدمات</span>
                <ArrowLeft size={17} strokeWidth={1.5} />
              </a>

              <a href="#about" className="text-link light-link">
                درباره طناز
                <span />
              </a>
            </div>
          </div>

          <div className="hero-bottom">
            <span>EST. 2024</span>
            <span>BEAUTY · STYLE · CARE</span>
            <span>ISFAHAN, IR</span>
          </div>
        </div>

        <a href="#services" className="scroll-indicator" aria-label="اسکرول به خدمات">
          <span>SCROLL</span>
          <ChevronDown size={16} strokeWidth={1.3} />
        </a>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Intro Strip                                                        */}
      {/* ------------------------------------------------------------------ */}

      <section className="intro-strip">
        <div className="container intro-grid">
          <div className="intro-number">01</div>

          <p className="intro-text">
            زیبایی برای ما فقط یک ظاهر نیست؛
            <strong> تجربه‌ای است که از شناخت تو شروع می‌شود.</strong>
          </p>

          <div className="intro-signature">
            <span className="en-display">Tanaz</span>
            <small>Beauty Salon</small>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Services                                                           */}
      {/* ------------------------------------------------------------------ */}

      <section className="services section" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-index">02 / SERVICES</span>

              <h2 className="section-title fa-display">
                خدماتی برای
                <br />
                <em>نسخه خاص تو.</em>
              </h2>
            </div>

            <p className="section-intro">
              از انتخاب رنگ تا آخرین جزئیات استایل، همه‌چیز با نگاه به فرم
              چهره، سلیقه و سبک زندگی تو انجام می‌شود.
            </p>
          </div>

          <div className="services-list">
            {services.map((service, index) => (
              <article className="service-row" key={service.number}>
                <div className="service-number">{service.number}</div>

                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />
                </div>

                <div className="service-content">
                  <span className="service-english en-label">
                    {service.english}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a href="#contact" className="service-link">
                    <span>رزرو این خدمت</span>
                    <ArrowLeft size={16} strokeWidth={1.4} />
                  </a>
                </div>

                <div className="service-arrow">
                  <ArrowUpLeft size={24} strokeWidth={1.2} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* About                                                              */}
      {/* ------------------------------------------------------------------ */}

      <section className="about section" id="about">
        <div className="about-decoration">T</div>

        <div className="container about-grid">
          <div className="about-image-wrap">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=90"
                alt="فضای زیبایی و مراقبت سالن طناز"
                loading="lazy"
              />
            </div>

            <div className="about-caption">
              <span>DETAILS MATTER</span>
              <span>01 — 04</span>
            </div>
          </div>

          <div className="about-content">
            <span className="section-index">03 / OUR PHILOSOPHY</span>

            <h2 className="about-title fa-display">
              زیبایی،
              <br />
              وقتی زیباست
              <br />
              <em>که شبیه خودت باشد.</em>
            </h2>

            <p className="about-description">
              سالن زیبایی طناز در سپاهان‌شهر اصفهان، با نگاه به زیبایی طبیعی و
              استایل شخصی شکل گرفته است. هدف ما این است که نتیجه نهایی فقط
              زیبا نباشد؛ بلکه با چهره، شخصیت و سبک زندگی تو هماهنگ باشد.
            </p>

            <div className="about-values">
              <div>
                <span>01</span>
                <strong>ظرافت</strong>
                <p>توجه به جزئیاتی که تفاوت را می‌سازند.</p>
              </div>

              <div>
                <span>02</span>
                <strong>تخصص</strong>
                <p>انتخاب آگاهانه و اجرای دقیق هر خدمت.</p>
              </div>

              <div>
                <span>03</span>
                <strong>آرامش</strong>
                <p>فضایی برای مکث کردن و وقت گذاشتن برای خودت.</p>
              </div>

              <div>
                <span>04</span>
                <strong>شخصی‌سازی</strong>
                <p>هر نتیجه برای چهره و سبک تو طراحی می‌شود.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Gallery                                                            */}
      {/* ------------------------------------------------------------------ */}

      <section className="gallery section" id="gallery">
        <div className="container">
          <div className="gallery-heading">
            <div>
              <span className="section-index">04 / THE GALLERY</span>
              <h2 className="section-title fa-display">
                زیبایی در
                <br />
                <em>جزئیات است.</em>
              </h2>
            </div>

            <p>
              نگاهی کوتاه به حال‌وهوای زیبایی و استایلی که در طناز دنبال
              می‌کنیم.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <div
                className={`gallery-item gallery-item-${index + 1}`}
                key={item.src}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span className="gallery-index">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Contact                                                            */}
      {/* ------------------------------------------------------------------ */}

      <section className="contact section" id="contact">
        <div className="contact-bg-word en-display">TANAZ</div>

        <div className="container contact-grid">
          <div className="contact-intro">
            <span className="section-index light-index">
              05 / CONTACT & APPOINTMENT
            </span>

            <h2 className="contact-title fa-display">
              وقت آن است که
              <br />
              <em>برای خودت وقت بگذاری.</em>
            </h2>

            <p>
              برای دریافت مشاوره، هماهنگی خدمات یا رزرو نوبت با ما در تماس
              باش. خوشحال می‌شویم میزبان تو باشیم.
            </p>
          </div>

          <div className="contact-details">
            <a href="tel:03136518167" className="contact-item">
              <span className="contact-icon">
                <Phone size={18} strokeWidth={1.3} />
              </span>

              <span className="contact-info">
                <small>PHONE</small>
                <strong>031 365 18167</strong>
              </span>

              <ArrowUpLeft size={19} strokeWidth={1.2} />
            </a>

            <a href="tel:09307984291" className="contact-item">
              <span className="contact-icon">
                <MessageCircle size={18} strokeWidth={1.3} />
              </span>

              <span className="contact-info">
                <small>MOBILE</small>
                <strong dir="ltr">0930 798 4291</strong>
              </span>

              <ArrowUpLeft size={19} strokeWidth={1.2} />
            </a>

            <a
              href="https://www.instagram.com/tanazz.beauty/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">
                <Instagram size={18} strokeWidth={1.3} />
              </span>

              <span className="contact-info">
                <small>INSTAGRAM</small>
                <strong dir="ltr">@tanazz.beauty</strong>
              </span>

              <ArrowUpLeft size={19} strokeWidth={1.2} />
            </a>

            <a
              href="https://t.me/Tanazbeautybot"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">
                <MessageCircle size={18} strokeWidth={1.3} />
              </span>

              <span className="contact-info">
                <small>TELEGRAM</small>
                <strong dir="ltr">@Tanazbeautybot</strong>
              </span>

              <ArrowUpLeft size={19} strokeWidth={1.2} />
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=سپاهانشهر%20بلوار%20غدیر%20مجتمع%20عقیق%205%20پلاک%2022"
              target="_blank"
              rel="noreferrer"
              className="contact-address"
            >
              <MapPin size={18} strokeWidth={1.3} />

              <span>
                سپاهان‌شهر، بلوار غدیر،
                <br />
                مجتمع عقیق ۵، طبقه زیرین،
                <br />
                انتهای راهرو، پلاک ۲۲
              </span>

              <ArrowUpLeft size={19} strokeWidth={1.2} />
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Footer                                                             */}
      {/* ------------------------------------------------------------------ */}

      <footer className="footer">
        <div className="container footer-top">
          <div className="footer-brand">
            <span className="footer-logo">T</span>

            <div>
              <strong>سالن زیبایی طناز</strong>
              <span>BEAUTY SALON · ISFAHAN</span>
            </div>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/tanazz.beauty/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={1.4} />
            </a>

            <a
              href="https://t.me/Tanazbeautybot"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <MessageCircle size={18} strokeWidth={1.4} />
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} TANAZ BEAUTY SALON</span>

          <a href="#top">
            بازگشت به بالا
            <ArrowUpLeft size={15} strokeWidth={1.3} />
          </a>
        </div>
      </footer>

      {/* ------------------------------------------------------------------ */}
      {/* Mobile CTA                                                         */}
      {/* ------------------------------------------------------------------ */}

      <div className="mobile-cta">
        <a href="tel:09307984291">
          <Phone size={17} strokeWidth={1.5} />
          <span>رزرو نوبت</span>
        </a>

        <a
          href="https://www.instagram.com/tanazz.beauty/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram size={17} strokeWidth={1.5} />
          <span>اینستاگرام</span>
        </a>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Local Business Schema                                              */}
      {/* ------------------------------------------------------------------ */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Styles                                                              */}
      {/* ------------------------------------------------------------------ */}

      <style jsx global>{`
        :root {
          --cream: #f7f4ef;
          --cream-deep: #eee9e1;
          --paper: #fbfaf8;
          --ink: #27221f;
          --ink-soft: #4e4843;
          --muted: #817970;
          --line: rgba(39, 34, 31, 0.13);
          --dark: #29231f;
          --dark-soft: #342d28;
          --gold: #a2876b;
          --white: #ffffff;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--paper);
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

        img {
          display: block;
          width: 100%;
        }

        .site {
          overflow: hidden;
          background: var(--paper);
        }

        .container {
          width: min(1180px, calc(100% - 48px));
          margin-inline: auto;
        }

        .fa-display {
          font-family: var(--font-vazirmatn), sans-serif;
          font-weight: 400;
          letter-spacing: -0.045em;
        }

        .en-display {
          font-family: var(--font-cormorant), serif;
          font-weight: 500;
          letter-spacing: 0.015em;
        }

        .en-label {
          font-family: var(--font-cormorant), serif;
          font-size: 13px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .section {
          padding: 130px 0;
        }

        /* ---------------------------------------------------------------- */
        /* Header                                                           */
        /* ---------------------------------------------------------------- */

        .header {
          position: absolute;
          z-index: 50;
          top: 0;
          left: 0;
          width: 100%;
          color: var(--white);
        }

        .header-inner {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .brand-mark {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.45);
          border-radius: 50%;
          font-family: var(--font-cormorant), serif;
          font-size: 23px;
          font-weight: 500;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .brand-text strong {
          font-size: 15px;
          font-weight: 500;
        }

        .brand-text small {
          margin-top: 5px;
          font-family: var(--font-cormorant), serif;
          font-size: 9px;
          letter-spacing: 0.16em;
          opacity: 0.72;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 36px;
          margin-inline: auto;
          padding-inline-start: 70px;
        }

        .desktop-nav a {
          position: relative;
          font-size: 13px;
          font-weight: 400;
          opacity: 0.88;
          transition: opacity 0.25s ease;
        }

        .desktop-nav a::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: -8px;
          width: 0;
          height: 1px;
          background: currentColor;
          transition: width 0.25s ease;
        }

        .desktop-nav a:hover {
          opacity: 1;
        }

        .desktop-nav a:hover::after {
          width: 100%;
        }

        .header-cta {
          min-height: 42px;
          padding: 0 17px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255, 255, 255, 0.42);
          font-size: 12px;
          transition:
            background 0.25s ease,
            color 0.25s ease;
        }

        .header-cta:hover {
          background: var(--white);
          color: var(--ink);
        }

        .menu-button {
          display: none;
          border: 0;
          background: transparent;
          color: inherit;
          cursor: pointer;
          padding: 7px;
        }

        .mobile-menu {
          display: none;
        }

        /* ---------------------------------------------------------------- */
        /* Hero                                                             */
        /* ---------------------------------------------------------------- */

        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          color: var(--white);
          background: var(--dark);
        }

        .hero-image {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .hero-image img {
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: saturate(0.7);
          transform: scale(1.02);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(23, 19, 17, 0.76) 0%,
              rgba(23, 19, 17, 0.48) 48%,
              rgba(23, 19, 17, 0.28) 100%
            ),
            linear-gradient(
              0deg,
              rgba(23, 19, 17, 0.64) 0%,
              transparent 35%
            );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          min-height: 100svh;
          padding-top: 145px;
          padding-bottom: 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-kicker {
          display: flex;
          align-items: center;
          gap: 12px;
          width: fit-content;
          margin-bottom: 30px;
          color: rgba(255, 255, 255, 0.74);
        }

        .hero-kicker span:not(.en-label) {
          width: 34px;
          height: 1px;
          background: rgba(255, 255, 255, 0.42);
        }

        .hero-copy {
          max-width: 720px;
        }

        .hero-eyebrow {
          margin: 0 0 17px;
          font-family: var(--font-cormorant), serif;
          font-size: 15px;
          letter-spacing: 0.26em;
          color: rgba(255, 255, 255, 0.72);
        }

        .hero-title {
          margin: 0;
          font-size: clamp(50px, 6.7vw, 91px);
          line-height: 1.16;
          font-weight: 400;
          text-wrap: balance;
        }

        .hero-title em,
        .section-title em,
        .about-title em,
        .contact-title em {
          font-style: normal;
          color: #e5d5c2;
        }

        .hero-description {
          max-width: 520px;
          margin: 28px 0 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 15px;
          line-height: 2.2;
          font-weight: 300;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 35px;
        }

        .button {
          min-height: 52px;
          padding: 0 21px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          font-size: 13px;
          transition:
            transform 0.25s ease,
            background 0.25s ease,
            color 0.25s ease;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .button-light {
          background: var(--white);
          color: var(--ink);
        }

        .button-light:hover {
          background: #eee8df;
        }

        .text-link {
          display: inline-flex;
          flex-direction: column;
          gap: 6px;
          font-size: 13px;
        }

        .text-link span {
          width: 100%;
          height: 1px;
          background: currentColor;
          opacity: 0.6;
        }

        .light-link {
          color: rgba(255, 255, 255, 0.86);
        }

        .hero-bottom {
          position: absolute;
          right: 24px;
          bottom: 45px;
          left: 24px;
          display: flex;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.53);
          font-family: var(--font-cormorant), serif;
          font-size: 11px;
          letter-spacing: 0.17em;
        }

        .scroll-indicator {
          position: absolute;
          right: 27px;
          bottom: 40%;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.65);
          writing-mode: vertical-rl;
          font-family: var(--font-cormorant), serif;
          font-size: 10px;
          letter-spacing: 0.18em;
        }

        /* ---------------------------------------------------------------- */
        /* Intro                                                             */
        /* ---------------------------------------------------------------- */

        .intro-strip {
          padding: 46px 0;
          background: var(--cream-deep);
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 100px 1fr 180px;
          align-items: center;
          gap: 40px;
        }

        .intro-number,
        .section-index {
          font-family: var(--font-cormorant), serif;
          font-size: 12px;
          letter-spacing: 0.15em;
          color: var(--muted);
        }

        .intro-text {
          max-width: 690px;
          margin: 0;
          font-size: clamp(17px, 2vw, 22px);
          line-height: 2;
          font-weight: 300;
        }

        .intro-text strong {
          font-weight: 500;
        }

        .intro-signature {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .intro-signature .en-display {
          font-size: 36px;
          line-height: 0.8;
        }

        .intro-signature small {
          margin-top: 9px;
          font-family: var(--font-cormorant), serif;
          font-size: 9px;
          letter-spacing: 0.14em;
          color: var(--muted);
          text-transform: uppercase;
        }

        /* ---------------------------------------------------------------- */
        /* Section heading                                                   */
        /* ---------------------------------------------------------------- */

        .section-heading,
        .gallery-heading {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 80px;
          align-items: end;
          margin-bottom: 70px;
        }

        .section-title {
          margin: 22px 0 0;
          font-size: clamp(40px, 5.1vw, 67px);
          line-height: 1.3;
          font-weight: 400;
        }

        .section-intro,
        .gallery-heading > p {
          margin: 0 0 4px;
          color: var(--muted);
          font-size: 14px;
          line-height: 2.2;
          font-weight: 300;
        }

        /* ---------------------------------------------------------------- */
        /* Services                                                          */
        /* ---------------------------------------------------------------- */

        .services {
          background: var(--paper);
        }

        .services-list {
          border-top: 1px solid var(--line);
        }

        .service-row {
          position: relative;
          min-height: 205px;
          display: grid;
          grid-template-columns: 65px 230px minmax(0, 1fr) 40px;
          gap: 30px;
          align-items: center;
          padding: 28px 0;
          border-bottom: 1px solid var(--line);
          transition: padding 0.3s ease;
        }

        .service-row:hover {
          padding-inline: 12px;
        }

        .service-number {
          align-self: start;
          padding-top: 9px;
          font-family: var(--font-cormorant), serif;
          color: var(--muted);
          font-size: 13px;
          letter-spacing: 0.08em;
        }

        .service-image {
          height: 150px;
          overflow: hidden;
        }

        .service-image img {
          height: 100%;
          object-fit: cover;
          filter: saturate(0.72);
          transition:
            transform 0.6s ease,
            filter 0.6s ease;
        }

        .service-row:hover .service-image img {
          transform: scale(1.04);
          filter: saturate(0.92);
        }

        .service-content {
          padding-inline: 5px;
        }

        .service-english {
          color: var(--gold);
        }

        .service-content h3 {
          margin: 9px 0 9px;
          font-size: clamp(21px, 2vw, 28px);
          font-weight: 500;
          letter-spacing: -0.035em;
        }

        .service-content p {
          max-width: 550px;
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 2;
          font-weight: 300;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          font-size: 12px;
          color: var(--ink-soft);
        }

        .service-link svg {
          transition: transform 0.25s ease;
        }

        .service-link:hover svg {
          transform: translateX(-4px);
        }

        .service-arrow {
          color: var(--muted);
          transition:
            transform 0.3s ease,
            color 0.3s ease;
        }

        .service-row:hover .service-arrow {
          transform: translate(-3px, -3px);
          color: var(--ink);
        }

        /* ---------------------------------------------------------------- */
        /* About                                                             */
        /* ---------------------------------------------------------------- */

        .about {
          position: relative;
          background: var(--cream-deep);
        }

        .about-decoration {
          position: absolute;
          right: -25px;
          bottom: -100px;
          color: rgba(39, 34, 31, 0.035);
          font-family: var(--font-cormorant), serif;
          font-size: 420px;
          line-height: 1;
          pointer-events: none;
        }

        .about-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 100px;
          align-items: center;
        }

        .about-image-wrap {
          position: relative;
        }

        .about-image {
          height: 650px;
          overflow: hidden;
        }

        .about-image img {
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: saturate(0.72);
        }

        .about-caption {
          display: flex;
          justify-content: space-between;
          padding-top: 13px;
          color: var(--muted);
          font-family: var(--font-cormorant), serif;
          font-size: 10px;
          letter-spacing: 0.14em;
        }

        .about-title {
          margin: 23px 0 27px;
          font-size: clamp(39px, 4.6vw, 62px);
          line-height: 1.35;
        }

        .about-description {
          max-width: 570px;
          margin: 0;
          color: var(--ink-soft);
          font-size: 14px;
          line-height: 2.35;
          font-weight: 300;
        }

        .about-values {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-top: 50px;
          border-top: 1px solid var(--line);
          border-right: 1px solid var(--line);
        }

        .about-values > div {
          min-height: 135px;
          padding: 21px 23px;
          border-left: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .about-values span {
          display: block;
          margin-bottom: 15px;
          color: var(--muted);
          font-family: var(--font-cormorant), serif;
          font-size: 11px;
        }

        .about-values strong {
          display: block;
          margin-bottom: 6px;
          font-size: 15px;
          font-weight: 500;
        }

        .about-values p {
          margin: 0;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.9;
        }

        /* ---------------------------------------------------------------- */
        /* Gallery                                                           */
        /* ---------------------------------------------------------------- */

        .gallery {
          background: var(--paper);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: 270px 390px;
          gap: 14px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          background: var(--cream-deep);
        }

        .gallery-item-1 {
          grid-column: span 7;
          grid-row: span 1;
        }

        .gallery-item-2 {
          grid-column: span 5;
        }

        .gallery-item-3 {
          grid-column: span 5;
        }

        .gallery-item-4 {
          grid-column: span 7;
        }

        .gallery-item img {
          height: 100%;
          object-fit: cover;
          filter: saturate(0.72);
          transition:
            transform 0.8s ease,
            filter 0.8s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.035);
          filter: saturate(0.95);
        }

        .gallery-index {
          position: absolute;
          right: 16px;
          bottom: 14px;
          color: rgba(255, 255, 255, 0.82);
          font-family: var(--font-cormorant), serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-shadow: 0 1px 12px rgba(0, 0, 0, 0.35);
        }

        /* ---------------------------------------------------------------- */
        /* Contact                                                           */
        /* ---------------------------------------------------------------- */

        .contact {
          position: relative;
          overflow: hidden;
          background: var(--dark);
          color: var(--white);
        }

        .contact-bg-word {
          position: absolute;
          top: 25px;
          right: -35px;
          color: rgba(255, 255, 255, 0.025);
          font-size: clamp(180px, 28vw, 390px);
          line-height: 0.8;
          pointer-events: none;
        }

        .contact-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 0.82fr;
          gap: 110px;
          align-items: start;
        }

        .light-index {
          color: rgba(255, 255, 255, 0.42);
        }

        .contact-title {
          margin: 24px 0 27px;
          font-size: clamp(42px, 5vw, 67px);
          line-height: 1.35;
          font-weight: 400;
        }

        .contact-intro > p {
          max-width: 480px;
          margin: 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 14px;
          line-height: 2.3;
          font-weight: 300;
        }

        .contact-details {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .contact-item {
          min-height: 92px;
          display: grid;
          grid-template-columns: 40px 1fr 22px;
          align-items: center;
          gap: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          transition: padding 0.25s ease;
        }

        .contact-item:hover {
          padding-inline: 8px;
        }

        .contact-icon {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.17);
          border-radius: 50%;
          color: rgba(255, 255, 255, 0.75);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .contact-info small {
          color: rgba(255, 255, 255, 0.38);
          font-family: var(--font-cormorant), serif;
          font-size: 10px;
          letter-spacing: 0.16em;
        }

        .contact-info strong {
          font-size: 14px;
          font-weight: 400;
        }

        .contact-item > svg,
        .contact-address > svg:last-child {
          color: rgba(255, 255, 255, 0.38);
        }

        .contact-address {
          display: grid;
          grid-template-columns: 40px 1fr 22px;
          gap: 15px;
          align-items: start;
          padding-top: 28px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
          line-height: 2.1;
        }

        /* ---------------------------------------------------------------- */
        /* Footer                                                            */
        /* ---------------------------------------------------------------- */

        .footer {
          background: var(--dark-soft);
          color: var(--white);
        }

        .footer-top {
          min-height: 125px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .footer-logo {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          font-family: var(--font-cormorant), serif;
          font-size: 22px;
        }

        .footer-brand > div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .footer-brand strong {
          font-size: 14px;
          font-weight: 400;
        }

        .footer-brand span {
          color: rgba(255, 255, 255, 0.4);
          font-family: var(--font-cormorant), serif;
          font-size: 9px;
          letter-spacing: 0.15em;
        }

        .footer-socials {
          display: flex;
          gap: 9px;
        }

        .footer-socials a {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.16);
          transition:
            background 0.25s ease,
            color 0.25s ease;
        }

        .footer-socials a:hover {
          background: var(--white);
          color: var(--ink);
        }

        .footer-bottom {
          min-height: 62px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.09);
          color: rgba(255, 255, 255, 0.36);
          font-family: var(--font-cormorant), serif;
          font-size: 10px;
          letter-spacing: 0.11em;
        }

        .footer-bottom a {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-vazirmatn), sans-serif;
          font-size: 11px;
          letter-spacing: 0;
          transition: color 0.25s ease;
        }

        .footer-bottom a:hover {
          color: rgba(255, 255, 255, 0.8);
        }

        /* ---------------------------------------------------------------- */
        /* Mobile CTA                                                        */
        /* ---------------------------------------------------------------- */

        .mobile-cta {
          display: none;
        }

        /* ---------------------------------------------------------------- */
        /* Tablet                                                            */
        /* ---------------------------------------------------------------- */

        @media (max-width: 980px) {
          .desktop-nav {
            gap: 22px;
            padding-inline-start: 30px;
          }

          .section {
            padding: 105px 0;
          }

          .section-heading,
          .gallery-heading {
            gap: 50px;
          }

          .about-grid {
            gap: 60px;
          }

          .about-image {
            height: 560px;
          }

          .contact-grid {
            gap: 65px;
          }

          .service-row {
            grid-template-columns: 45px 190px minmax(0, 1fr) 25px;
            gap: 20px;
          }

          .gallery-grid {
            grid-template-rows: 230px 320px;
          }
        }

        /* ---------------------------------------------------------------- */
        /* Mobile                                                            */
        /* ---------------------------------------------------------------- */

        @media (max-width: 720px) {
          .container {
            width: min(100% - 34px, 600px);
          }

          .section {
            padding: 82px 0;
          }

          .header-inner {
            min-height: 76px;
          }

          .desktop-nav,
          .header-cta {
            display: none;
          }

          .menu-button {
            display: grid;
            place-items: center;
          }

          .brand-mark {
            width: 36px;
            height: 36px;
          }

          .brand-text strong {
            font-size: 14px;
          }

          .mobile-menu {
            position: absolute;
            top: 76px;
            left: 0;
            width: 100%;
            padding: 24px 17px 28px;
            display: block;
            background: rgba(39, 34, 31, 0.97);
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            transform: translateY(-12px);
            opacity: 0;
            visibility: hidden;
            transition:
              opacity 0.25s ease,
              transform 0.25s ease,
              visibility 0.25s ease;
          }

          .mobile-menu.is-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .mobile-menu nav {
            display: flex;
            flex-direction: column;
          }

          .mobile-menu nav a {
            padding: 14px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 14px;
          }

          .mobile-menu-contact {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            margin-top: 20px;
            color: rgba(255, 255, 255, 0.68);
            font-size: 12px;
          }

          .hero {
            min-height: 760px;
          }

          .hero-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(23, 19, 17, 0.75),
                rgba(23, 19, 17, 0.34)
              ),
              linear-gradient(
                0deg,
                rgba(23, 19, 17, 0.72),
                transparent 48%
              );
          }

          .hero-content {
            min-height: 760px;
            padding-top: 125px;
            padding-bottom: 72px;
          }

          .hero-kicker {
            margin-bottom: 24px;
          }

          .hero-kicker .en-label {
            font-size: 10px;
          }

          .hero-title {
            font-size: clamp(43px, 13vw, 67px);
            line-height: 1.3;
          }

          .hero-description {
            max-width: 100%;
            margin-top: 23px;
            font-size: 13px;
            line-height: 2.15;
          }

          .hero-actions {
            align-items: flex-start;
            flex-direction: column;
            gap: 19px;
            margin-top: 29px;
          }

          .button {
            min-height: 49px;
          }

          .hero-bottom {
            right: 17px;
            bottom: 24px;
            left: 17px;
            font-size: 8px;
          }

          .hero-bottom span:nth-child(2) {
            display: none;
          }

          .scroll-indicator {
            display: none;
          }

          .intro-strip {
            padding: 32px 0;
          }

          .intro-grid {
            grid-template-columns: 40px 1fr;
            gap: 18px;
          }

          .intro-signature {
            display: none;
          }

          .intro-text {
            font-size: 15px;
            line-height: 2.15;
          }

          .section-heading,
          .gallery-heading {
            display: block;
            margin-bottom: 48px;
          }

          .section-title {
            margin-top: 18px;
            font-size: clamp(37px, 11vw, 53px);
            line-height: 1.35;
          }

          .section-intro,
          .gallery-heading > p {
            margin-top: 25px;
            font-size: 13px;
            line-height: 2.15;
          }

          .service-row {
            min-height: auto;
            grid-template-columns: 34px 1fr 22px;
            gap: 14px;
            padding: 20px 0 25px;
          }

          .service-row:hover {
            padding-inline: 0;
          }

          .service-number {
            padding-top: 5px;
          }

          .service-image {
            grid-column: 2 / 3;
            width: 100%;
            height: 210px;
            margin-bottom: 3px;
          }

          .service-content {
            grid-column: 2 / 4;
          }

          .service-arrow {
            grid-column: 3;
            grid-row: 1;
            align-self: start;
            padding-top: 5px;
          }

          .service-content h3 {
            font-size: 22px;
          }

          .service-content p {
            font-size: 12px;
            line-height: 2;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .about-image {
            height: 470px;
          }

          .about-title {
            font-size: clamp(36px, 10vw, 50px);
            line-height: 1.42;
          }

          .about-description {
            font-size: 13px;
            line-height: 2.25;
          }

          .about-values {
            margin-top: 38px;
          }

          .about-values > div {
            min-height: 125px;
            padding: 18px;
          }

          .about-values strong {
            font-size: 14px;
          }

          .about-values p {
            font-size: 10px;
          }

          .gallery-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 240px 190px 240px;
            gap: 9px;
          }

          .gallery-item-1 {
            grid-column: 1 / -1;
          }

          .gallery-item-2 {
            grid-column: 1;
          }

          .gallery-item-3 {
            grid-column: 2;
          }

          .gallery-item-4 {
            grid-column: 1 / -1;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .contact-title {
            font-size: clamp(38px, 10.5vw, 52px);
          }

          .contact-intro > p {
            font-size: 13px;
          }

          .contact-item {
            min-height: 83px;
          }

          .contact-info strong {
            font-size: 13px;
          }

          .contact-address {
            font-size: 12px;
          }

          .footer-top {
            min-height: 105px;
          }

          .footer-bottom {
            min-height: 60px;
            gap: 15px;
          }

          .footer-bottom > span {
            font-size: 8px;
          }

          .mobile-cta {
            position: fixed;
            right: 12px;
            bottom: 12px;
            left: 12px;
            z-index: 40;
            min-height: 57px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            overflow: hidden;
            background: rgba(39, 34, 31, 0.96);
            border: 1px solid rgba(255, 255, 255, 0.12);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
            backdrop-filter: blur(15px);
          }

          .mobile-cta a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            color: white;
            font-size: 12px;
          }

          .mobile-cta a + a {
            border-right: 1px solid rgba(255, 255, 255, 0.12);
          }

          .footer {
            padding-bottom: 65px;
          }
        }

        /* ---------------------------------------------------------------- */
        /* Small mobile                                                      */
        /* ---------------------------------------------------------------- */

        @media (max-width: 390px) {
          .container {
            width: calc(100% - 28px);
          }

          .hero-title {
            font-size: 41px;
          }

          .hero-description {
            font-size: 12px;
          }

          .about-image {
            height: 410px;
          }

          .about-values > div {
            min-height: 120px;
            padding: 15px;
          }

          .gallery-grid {
            grid-template-rows: 210px 165px 210px;
          }
        }

        /* ---------------------------------------------------------------- */
        /* Reduced motion                                                    */
        /* ---------------------------------------------------------------- */

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
