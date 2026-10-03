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
    items: [
      "کاشت",
      "ژلیش",
      "لمینت",
      "مانیکور",
      "ترمیم",
      "ریمو",
    ],
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
    title: "مراقبت از پا",
    english: "FOOT CARE",
    description: "مراقبت و زیبایی کامل پا",
    items: [
      "کف‌سابی",
      "پدیکور",
      "کف‌سابی + پدیکور",
      "ژلیش پا",
    ],
  },
] as const;

const portfolioItems = [
  ["HAIR", "HAIR & STYLING"],
  ["NAILS", "NAILS"],
  ["FACE", "FACE & MAKEUP"],
  ["LASHES", "LASHES"],
] as const;

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState<string | null>(null);

  const close = () => {
    setMenu(false);
  };

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menu);

    return () => {
      document.body.classList.remove("menu-is-open");
    };
  }, [menu]);

  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <Link
            href="#home"
            className="brand"
            onClick={close}
          >
            <span>سالن زیبایی طناز</span>
          </Link>

          <nav
            className="desktop-nav"
            aria-label="ناوبری اصلی"
          >
            <Link href="#services">خدمات</Link>
            <Link href="/gallery">نمونه‌کارها</Link>
            <Link href="#contact">تماس</Link>
          </nav>

          <a
            className="header-book"
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
          >
            رزرو نوبت
            <ArrowUpLeft size={17} />
          </a>

          <button
            className="menu-button"
            onClick={() => setMenu((value) => !value)}
            aria-label={menu ? "بستن منو" : "باز کردن منو"}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <nav
        className={`mobile-navigation ${menu ? "open" : ""}`}
        aria-label="منوی موبایل"
      >
        <div className="mobile-nav-inner">
          <Link
            href="#services"
            onClick={close}
          >
            خدمات
          </Link>

          <Link
            href="/gallery"
            onClick={close}
          >
            نمونه‌کارها
          </Link>

          <Link
            href="#contact"
            onClick={close}
          >
            تماس
          </Link>

          <a
            className="mobile-nav-book"
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
          >
            رزرو نوبت
            <ArrowUpLeft size={17} />
          </a>
        </div>
      </nav>

      {menu && (
        <button
          className="menu-backdrop"
          onClick={close}
          aria-label="بستن منو"
        />
      )}

      <section
        id="home"
        className="luxury-hero"
      >
        <div className="hero-orbit one" />
        <div className="hero-orbit two" />

        <div className="shell hero-content">
          <div className="hero-topline">
            <span className="hero-salon-type">
              BEAUTY SALON
            </span>

            <div className="hero-location">
              <span>ISFAHAN · IRAN</span>
              <span>SEPAHAN SHAHR</span>
            </div>
          </div>

          <div className="hero-main">
            <p className="hero-kicker">
              A PRIVATE BEAUTY EXPERIENCE
            </p>

            <h1>TANAZ</h1>

            <div className="hero-line">
              <i />

              <p>
                دقت در جزئیات،
                <br />
                تفاوت را می‌سازد.
              </p>
            </div>
          </div>

          <div className="hero-bottom">
            <span>
              EST. <b>2026</b>
            </span>
          </div>
        </div>
      </section>

      <section className="brand-story">
        <div className="shell story-grid">
          <aside>
            <b>01</b>
            <small>THE TANAZ APPROACH</small>
          </aside>

          <div>
            <p className="eyebrow">
              زیبایی، یک انتخاب شخصی است
            </p>

            <h2>
              زیبایی تو،
              <br />
              <em>آغاز یک حس خوب است.</em>
            </h2>

            <p>
              در طناز، هر خدمت با توجه به فرم چهره، سبک زندگی و
              سلیقه‌ی شما انتخاب می‌شود. هدف، ساختن ظاهری نیست که
              فقط زیبا باشد؛ هدف، خلق جزئیاتی است که به خود شما
              تعلق داشته باشد.
            </p>

            <Link
              href="#services"
              className="text-link"
            >
              کشف خدمات
              <ArrowUpLeft size={17} />
            </Link>
          </div>

          <div className="story-art">
            T
            <small>BEAUTY</small>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="services-section"
      >
        <div className="shell">
          <div className="section-heading">
            <div>
              <small>02 / SERVICES</small>
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
              const active = open === service.id;

              return (
                <article
                  className={active ? "active" : ""}
                  key={service.id}
                >
                  <button
                    onClick={() =>
                      setOpen(active ? null : service.id)
                    }
                    aria-expanded={active}
                  >
                    <i>{service.number}</i>

                    <span>
                      <b>{service.title}</b>
                      <small>{service.english}</small>
                    </span>

                    <em>{service.description}</em>

                    <ChevronDown size={20} />
                  </button>

                  {active && (
                    <div className="service-details">
                      <ul>
                        {service.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <small>03 / PORTFOLIO</small>
              <h2>نمونه‌کارها</h2>
            </div>

            <Link
              href="/gallery"
              className="text-link"
            >
              مشاهده گالری
              <ArrowUpLeft size={17} />
            </Link>
          </div>

          <div className="portfolio-grid">
            {portfolioItems.map(([title, label], index) => (
              <div
                className={`portfolio-item p${index}`}
                key={title}
              >
                <strong>{title}</strong>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <small>{label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="shell">
          <h2>
            Less noise.
            <br />
            More <em>you.</em>
          </h2>

          <div className="philosophy-grid">
            <div>
              <b>01</b>
              <h3>شخصی‌سازی</h3>
              <p>
                هر انتخاب با توجه به فرم، سبک و خواسته‌ی شخصی شما
                انجام می‌شود.
              </p>
            </div>

            <div>
              <b>02</b>
              <h3>دقت</h3>
              <p>
                زیبایی در جزئیات شکل می‌گیرد؛ از کوچک‌ترین انتخاب تا
                اجرای نهایی.
              </p>
            </div>

            <div>
              <b>03</b>
              <h3>آرامش</h3>
              <p>
                فضایی برای فاصله گرفتن از شلوغی روزمره و تمرکز روی
                خودتان.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="contact-section"
      >
        <div className="shell">
          <div className="contact-top">
            <small>04 / VISIT TANAZ</small>

            <h2>تماس و مراجعه</h2>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
            >
              رزرو نوبت
              <ArrowUpLeft size={19} />
            </a>
          </div>

          <div className="contact-list">
            <a href={`tel:${CONTACT.phone}`}>
              <Phone />

              <span>
                <small>PHONE</small>
                <b dir="ltr">031 365 18167</b>
              </span>

              <ArrowUpLeft />
            </a>

            <a href={`tel:${CONTACT.mobile}`}>
              <MessageCircle />

              <span>
                <small>MOBILE</small>
                <b dir="ltr">0930 798 4291</b>
              </span>

              <ArrowUpLeft />
            </a>

            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />

              <span>
                <small>INSTAGRAM</small>
                <b dir="ltr">@tanazz.beauty</b>
              </span>

              <ArrowUpLeft />
            </a>

            <a
              href={CONTACT.map}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin />

              <span>
                <small>ADDRESS</small>

                <b>
                  سپاهان‌شهر، بلوار غدیر
                  <br />
                  مجتمع عقیق ۵، طبقه زیرین، پلاک ۲۲
                </b>
              </span>

              <ArrowUpLeft />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell">
          <b>
            طناز
            <small>BEAUTY SALON · ISFAHAN</small>
          </b>

          <span>
            © {new Date().getFullYear()} TANAZ BEAUTY SALON
          </span>

          <a href="#home">
            بازگشت به بالا ↑
          </a>
        </div>
      </footer>

      <a
        className="mobile-booking"
        href={BOOKING_URL}
        target="_blank"
        rel="noreferrer"
      >
        رزرو نوبت
        <ArrowUpLeft size={18} />
      </a>
    </main>
  );
}