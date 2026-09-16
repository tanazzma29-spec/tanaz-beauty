import Image from "next/image";
import { ArrowUpRight, ArrowRight, Instagram, MapPin, Phone, Clock, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const services=[
  ["01","Signature Hair","Precision cuts, styling and transformations designed around you.","From $45"],
  ["02","Color & Light","Dimensional color, luminous highlights and seamless blondes.","From $90"],
  ["03","Makeup","Soft-glam, editorial and occasion makeup with an effortless finish.","From $60"],
  ["04","Bridal Beauty","A considered beauty experience for your most unforgettable day.","From $180"]
];

const gallery=[
  ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=88","Signature hair"],
  ["https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=88","Beauty portrait"],
  ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=88","Editorial"],
  ["https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=88","Soft glamour"],
  ["https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=88","Modern muse"],
  ["https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=88","The look"]
];

export default function Home(){
return <main>
<Navbar/>

<section className="relative min-h-screen overflow-hidden bg-ink text-ivory">
  <Image src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=2200&q=92"
    alt="Tanaz Beauty editorial portrait" fill priority className="object-cover object-center opacity-60"/>
  <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/45 to-transparent"/>
  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20"/>
  <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
    <div className="max-w-4xl"><Reveal>
      <p className="mb-6 text-[10px] uppercase tracking-[.45em] text-ivory/65">Luxury beauty studio · Baku</p>
      <h1 className="font-display text-[5.5rem] leading-[.78] sm:text-8xl lg:text-[10rem]">Beauty,<br/><i className="text-gold">reimagined.</i></h1>
      <p className="mt-9 max-w-md text-sm leading-7 text-ivory/65">A refined beauty experience where modern technique meets effortless elegance.</p>
      <div className="mt-9 flex flex-wrap items-center gap-5">
        <a href="#book" className="rounded-full bg-ivory px-7 py-4 text-[10px] uppercase tracking-[.24em] text-ink hover:bg-white">Book an appointment</a>
        <a href="#gallery" className="group flex items-center gap-2 text-[10px] uppercase tracking-[.24em]">Explore our work <ArrowUpRight size={14}/></a>
      </div>
    </Reveal></div>
  </div>
</section>

<section className="border-b hairline bg-ivory"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-3 lg:px-10">
{[["01","Personalized","Beauty built around your features, lifestyle and vision."],["02","Exceptional","Thoughtful details, refined technique and elevated care."],["03","Effortless","A calm studio experience from first hello to final look."]].map(([n,t,d])=>
<Reveal key={n}><span className="text-[10px] tracking-[.3em] text-black/35">{n}</span><h2 className="mt-4 font-display text-4xl">{t}</h2><p className="mt-3 max-w-xs text-sm leading-7 text-black/55">{d}</p></Reveal>)}
</div></section>

<section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
<Reveal><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-[10px] uppercase tracking-[.35em] text-black/45">What we do</p><h2 className="mt-4 font-display text-6xl leading-[.85] sm:text-8xl">Signature<br/><i>services</i></h2></div><p className="max-w-sm text-sm leading-7 text-black/55">A curated menu of beauty services, delivered with precision and a distinctly personal touch.</p></div></Reveal>
<div className="mt-16 divide-y hairline border-y">{services.map(([n,t,d,p],i)=><Reveal key={n} delay={i*.05}>
<div className="group grid gap-5 py-9 md:grid-cols-[70px_1fr_1.3fr_130px_25px] md:items-center"><span className="text-[10px] tracking-[.25em] text-black/35">{n}</span><h3 className="font-display text-3xl md:text-4xl">{t}</h3><p className="max-w-md text-sm leading-7 text-black/50">{d}</p><span className="text-[10px] uppercase tracking-[.2em] text-black/50">{p}</span><ArrowUpRight size={18}/></div>
</Reveal>)}</div></section>

<section id="story" className="bg-[#e8dfd3]"><div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
<Reveal><div className="relative aspect-[4/5] overflow-hidden"><Image src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=88" alt="Tanaz Beauty studio" fill className="object-cover"/></div></Reveal>
<Reveal delay={.1}><p className="text-[10px] uppercase tracking-[.35em] text-black/45">The Tanaz story</p><h2 className="mt-5 font-display text-6xl leading-[.86] sm:text-8xl">Beauty is an<br/><i>experience.</i></h2><p className="mt-8 max-w-lg text-sm leading-8 text-black/60">Tanaz Beauty was created around a simple idea: the most beautiful result is the one that still feels like you. We combine modern technique with a slower, more intentional approach to beauty.</p></Reveal>
</div></section>

<section id="gallery" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
<Reveal><div className="flex items-end justify-between"><div><p className="text-[10px] uppercase tracking-[.35em] text-black/45">Selected work</p><h2 className="mt-4 font-display text-6xl sm:text-8xl">Our <i>gallery</i></h2></div><a href="#book" className="hidden items-center gap-2 text-[10px] uppercase tracking-[.25em] sm:flex">Book your look <ArrowRight size={14}/></a></div></Reveal>
<div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">{gallery.map(([src,alt],i)=><Reveal key={src} delay={i*.04}><div className={`group relative overflow-hidden ${i===1||i===4?"md:translate-y-12":""} aspect-[3/4]`}><Image src={src} alt={alt} fill className="object-cover transition duration-700 group-hover:scale-105"/></div></Reveal>)}</div>
</section>

<section className="bg-ink text-ivory"><div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32"><Reveal>
<div className="flex justify-center gap-1">{[1,2,3,4,5].map(x=><Star key={x} size={13} fill="currentColor" className="text-gold"/>)}</div>
<blockquote className="mt-8 font-display text-4xl leading-tight sm:text-6xl">“I left feeling like the most polished version of myself — not someone else.”</blockquote>
<p className="mt-8 text-[10px] uppercase tracking-[.3em] text-ivory/45">— A. M. · Client</p>
</Reveal></div></section>

<section id="book" className="bg-[#e8dfd3]"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><Reveal>
<p className="text-[10px] uppercase tracking-[.35em] text-black/45">Your next chapter</p>
<h2 className="mt-5 max-w-4xl font-display text-7xl leading-[.82] sm:text-9xl">Ready to feel<br/><i>beautiful?</i></h2>
<div className="mt-10 flex flex-wrap gap-4"><a href="tel:+0000000000" className="rounded-full bg-ink px-8 py-4 text-[10px] uppercase tracking-[.25em] text-ivory">Book by phone</a><a href="#contact" className="rounded-full border border-black/25 px-8 py-4 text-[10px] uppercase tracking-[.25em]">Contact us</a></div>
</Reveal></div></section>

<footer id="contact" className="bg-ink text-ivory"><div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-4 lg:px-10">
<div className="lg:col-span-2"><div className="font-display text-4xl tracking-[.16em]">TANAZ <span className="text-gold">BEAUTY</span></div><p className="mt-5 max-w-sm text-sm leading-7 text-ivory/50">A modern beauty studio for considered cuts, luminous color and effortless beauty.</p><a href="#" className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[.2em]"><Instagram size={16}/> Instagram</a></div>
<div><p className="text-[10px] uppercase tracking-[.3em] text-ivory/35">Visit</p><p className="mt-5 flex gap-3 text-sm leading-7 text-ivory/65"><MapPin size={16}/> Your studio address<br/>Baku, Azerbaijan</p></div>
<div><p className="text-[10px] uppercase tracking-[.3em] text-ivory/35">Hours</p><p className="mt-5 flex gap-3 text-sm leading-7 text-ivory/65"><Clock size={16}/>Mon–Sat<br/>10:00 — 20:00</p><p className="mt-5 flex gap-3 text-sm text-ivory/65"><Phone size={16}/> +000 000 0000</p></div>
</div><div className="border-t border-white/10 px-6 py-6 text-center text-[9px] uppercase tracking-[.25em] text-ivory/30">© 2026 Tanaz Beauty. All rights reserved.</div></footer>
</main>
}