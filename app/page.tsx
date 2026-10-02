"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

const BOOKING_URL = "https://t.me/Tanazbeautybot";

const CONTACT = {
  phone: "03136518167",
  mobile: "09307984291",
  instagram: "https://www.instagram.com/tanazz.beauty/",
  map: "https://www.google.com/maps/search/?api=1&query=سپاهان‌شهر%20بلوار%20غدیر%20مجتمع%20عقیق%205%20پلاک%2022",
};

const services = [
  {
    id: "hair",
    number: "01",
    title: "مو",
    english: "HAIR",
    description: "کوتاهی، استایل، رنگ و احیای مو",
    items: [
      "کوتاهی",
      "چتری مو",
      "براشینگ",
      "شینیون",
      "رنگ و لایت",
      "کراتین و احیا",
      "موخوره‌گیری",
    ],
  },
  {
    id: "face",
    number: "02",
    title: "صورت",
    english: "FACE",
    description: "مراقبت، اصلاح و زیبایی چهره",
    items: [
      "اصلاح کل",
      "اصلاح ابرو",
      "اصلاح صورت",
      "وکس صورت و ابرو",
      "وکس صورت",
      "لیفت ابرو",
      "پاکسازی صورت",
      "ماساژ صورت",
      "میکاپ",
    ],
  },
  {
    id: "nail",
    number: "03",
    title: "ناخن",
    english: "NAILS",
    description: "جزئیات ظریف برای دست‌هایی متفاوت",
    items: ["کاشت", "ژلیش", "لمینت", "مانیکور", "ترمیم", "ریمو"],
  },
  {
    id: "lash",
    number: "04",
    title: "مژه",
    english: "LASHES",
    description: "تأکید ظریف بر نگاه شما",
    items: [
      "کاشت مژه",
      "اکستنشن مژه",
      "لیفت مژه",
      "ترمیم کاشت مژه",
      "ترمیم اکستنشن مژه",
      "ریمو مژه",
    ],
  },
  {
    id: "foot",
    number: "05",
    title: "پا",
    english: "FOOT CARE",
    description: "مراقبت و زیبایی کامل پا",
    items: ["کف‌سابی", "پدیکور", "کف‌سابی + پدیکور", "ژلیش پا"],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openService, setOpenService] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-is-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* HEADER */}
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="#home" className="brand" onClick={closeMenu}>
            <span>طناز</span>
            <small>BEAUTY SALON · ISFAHAN</small>
          </Link>

          <nav className="desktop-nav" aria-label="ناوبری اصلی">
            <Link href="#services">خدمات</Link>
            <Link href="/gallery">نمونه‌کارها</Link>
            <Link href="#contact">تماس</Link>
          </nav>

          <a
            className="header-book"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>رزرو نوبت</span>
            <ArrowUpLeft size={17} />
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE NAV */}
      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav-inner">
          <Link href="#services" onClick={closeMenu}>
            خدمات
          </Link>
          <Link href="/gallery" onClick={closeMenu}>
            نمونه‌کارها
          </Link>
          <Link href="#contact" onClick={closeMenu}>
            تماس
          </Link>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mobile-nav-book"
          >
            رزرو نوبت
            <ArrowUpLeft size={17} />
          </a>
        </div>
      </nav>

      {menuOpen && (
        <button
          className="menu-backdrop"
          aria-label="بستن منو"
          onClick={closeMenu}
        />
      )}

      {/* HERO */}
      <section id="home" className="luxury-hero">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

        <div className="shell hero-content">
          <div className="hero-topline">
            <span>SEPAHAN SHAHR</span>
            <span>ISFAHAN · IRAN</span>
          </div>

          <div className="hero-main">
            <div className="hero-kicker">A PRIVATE BEAUTY EXPERIENCE</div>

            <h1>
              <span>طناز</span>
              <strong>TANAZ</strong>
            </h1>

            <div className="hero-line">
              <span />
              <p>زیبایی، با انتخابی شخصی.</p>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="hero-index">
              <span>EST.</span>
              <strong>2026</strong>
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta"
            >
              <span>شروع یک تجربه</span>
              <ArrowUpLeft size={20} />
            </a>
          </div>
        </div>

        <div className="hero-vertical">BEAUTY · DETAIL · PERSONAL</div>
      </section>

      {/* BRAND INTRO */}
      <section className="brand-story">
        <div className="shell story-grid">
          <div className="story-label">
            <span>01</span>
            <p>THE TANAZ APPROACH</p>
          </div>

          <div className="story-copy">
            <p className="eyebrow">زیبایی، یک انتخاب شخصی است</p>

            <h2>
              برای زیبایی
              <br />
              <em>شما</em>، نه برای همه.
            </h2>

            <p className="story-description">
              در طناز، هر خدمت با توجه به فرم چهره، سبک زندگی و سلیقه‌ی شما
              انتخاب می‌شود. هدف، ساختن ظاهری نیست که فقط زیبا باشد؛
              هدف، خلق جزئیاتی است که به خود شما تعلق داشته باشد.
            </p>

            <Link href="#services" className="text-link">
              کشف خدمات
              <ArrowUpLeft size={17} />
            </Link>
          </div>

          <div className="story-art">
            <div className="story-art-inner">
              <span>T</span>
              <small>BEAUTY</small>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="section-number">02 / SERVICES</span>
              <h2>خدمات</h2>
            </div>

            <p>
              مجموعه‌ای از خدمات زیبایی
              <br />
              با نگاه دقیق به جزئیات.
            </p>
          </div>

          <div className="service-cards">
            {services.map((service) => {
              const active = openService === service.id;

              return (
                <article
                  className={`service-card ${active ? "active" : ""}`}
                  key={service.id}
                >
                  <button
                    className="service-trigger"
                    onClick={() =>
                      setOpenService(active ? null : service.id)
                    }
                    aria-expanded={active}
                    aria-controls={`service-${service.id}`}
                  >
                    <span className="service-number">{service.number}</span>

                    <span className="service-title-wrap">
                      <strong>{service.title}</strong>
                      <small>{service.english}</small>
                    </span>

                    <span className="service-description">
                      {service.description}
                    </span>

                    <span className="service-icon">
                      <ChevronDown size={20} />
                    </span>
                  </button>

                  <div
                    id={`service-${service.id}`}
                    className="service-details"
                    hidden={!active}
                  >
                    <div className="service-detail-inner">
                      <ul>
                        {service.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        رزرو این خدمت
                        <ArrowUpLeft size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISUAL PORTFOLIO */}
      <section className="portfolio-section">
        <div className="shell">
          <div className="section-heading portfolio-heading">
            <div>
              <span className="section-number">03 / PORTFOLIO</span>
              <h2>نمونه‌کارها</h2>
            </div>

            <Link href="/gallery" className="text-link light-link">
              مشاهده گالری
              <ArrowUpLeft size={17} />
            </Link>
          </div>

          <div className="portfolio-grid">
            <div className="portfolio-item portfolio-large">
              <div className="visual visual-hair">
                <span>HAIR</span>
                <strong>01</strong>
              </div>
              <div className="portfolio-caption">
                <span>01</span>
                <p>HAIR & STYLING</p>
              </div>
            </div>

            <div className="portfolio-item portfolio-small">
              <div className="visual visual-nails">
                <span>NAILS</span>
                <strong>02</strong>
              </div>
              <div className="portfolio-caption">
                <span>02</span>
                <p>NAILS</p>
              </div>
            </div>

            <div className="portfolio-item portfolio-medium">
              <div className="visual visual-face">
                <span>FACE</span>
                <strong>03</strong>
              </div>
              <div className="portfolio-caption">
                <span>03</span>
                <p>FACE & MAKEUP</p>
              </div>
            </div>

            <div className="portfolio-item portfolio-small">
              <div className="visual visual-lashes">
                <span>LASHES</span>
                <strong>04</strong>
              </div>
              <div className="portfolio-caption">
                <span>04</span>
                <p>LASHES</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy-section">
        <div className="shell">
          <div className="philosophy-top">
            <span className="section-number">04 / PHILOSOPHY</span>

            <h2>
              Less noise.
              <br />
              More <em>you.</em>
            </h2>
          </div>

          <div className="philosophy-grid">
            <div className="philosophy-item">
              <span>01</span>
              <h3>شخصی‌سازی</h3>
              <p>
                هر انتخاب با توجه به فرم، سبک و خواسته‌ی شخصی شما انجام می‌شود.
              </p>
            </div>

            <div className="philosophy-item">
              <span>02</span>
              <h3>دقت</h3>
              <p>
                زیبایی در جزئیات شکل می‌گیرد؛ از کوچک‌ترین انتخاب تا اجرای نهایی.
              </p>
            </div>

            <div className="philosophy-item">
              <span>03</span>
              <h3>آرامش</h3>
              <p>
                فضایی برای فاصله گرفتن از شلوغی روزمره و تمرکز روی خودتان.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="shell">
          <div className="contact-top">
            <span className="section-number">05 / VISIT TANAZ</span>

            <h2>
              وقتِ
              <br />
              <em>خودتان</em> است.
            </h2>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-book"
            >
              رزرو نوبت
              <ArrowUpLeft size={19} />
            </a>
          </div>

          <div className="contact-list">
            <a href={`tel:${CONTACT.phone}`}>
              <span className="contact-icon">
                <Phone size={18} />
              </span>

              <span className="contact-info">
                <small>PHONE</small>
                <strong dir="ltr">031 365 18167</strong>
              </span>

              <ArrowUpLeft size={17} />
            </a>

            <a href={`tel:${CONTACT.mobile}`}>
              <span className="contact-icon">
                <MessageCircle size={18} />
              </span>

              <span className="contact-info">
                <small>MOBILE</small>
                <strong dir="ltr">0930 798 4291</strong>
              </span>

              <ArrowUpLeft size={17} />
            </a>

            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">
                <Instagram size={18} />
              </span>

              <span className="contact-info">
                <small>INSTAGRAM</small>
                <strong dir="ltr">@tanazz.beauty</strong>
              </span>

              <ArrowUpLeft size={17} />
            </a>

            <a
              href={CONTACT.map}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">
                <MapPin size={18} />
              </span>

              <span className="contact-info">
                <small>ADDRESS</small>
                <strong>
                  سپاهان‌شهر، بلوار غدیر
                  <br />
                  مجتمع عقیق ۵، طبقه زیرین، پلاک ۲۲
                </strong>
              </span>

              <ArrowUpLeft size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="luxury-footer">
        <div className="shell footer-inner">
          <Link href="#home" className="footer-brand">
            <strong>طناز</strong>
            <span>BEAUTY SALON · ISFAHAN</span>
          </Link>

          <span className="footer-copy">
            © {new Date().getFullYear()} TANAZ BEAUTY SALON
          </span>

          <Link href="#home" className="footer-top">
            بازگشت به بالا
            <span>↑</span>
          </Link>
        </div>
      </footer>

      {/* MOBILE CTA */}
      <a
        className="mobile-booking"
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        رزرو نوبت
        <ArrowUpLeft size={18} />
      </a>
    </main>
  );
}