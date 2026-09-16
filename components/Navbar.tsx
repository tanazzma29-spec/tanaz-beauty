"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["Services","#services"],["Story","#story"],["Gallery","#gallery"],["Contact","#contact"]];

export default function Navbar() {
  const [open,setOpen] = useState(false);
  return <header className="absolute inset-x-0 top-0 z-50 text-ivory">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
      <a href="#" className="font-display text-2xl font-semibold tracking-[.18em]">
        TANAZ <span className="text-gold">BEAUTY</span>
      </a>
      <div className="hidden items-center gap-9 md:flex">
        {links.map(([label,href])=><a key={label} href={href} className="text-[10px] uppercase tracking-[.27em] text-ivory/85 hover:text-white">{label}</a>)}
        <a href="#book" className="rounded-full border border-ivory/50 px-5 py-2.5 text-[10px] uppercase tracking-[.22em] hover:bg-ivory hover:text-ink">Book now</a>
      </div>
      <button className="md:hidden" aria-label="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </nav>
    {open && <div className="mx-4 rounded-2xl border border-white/15 bg-ink/95 p-6 shadow-2xl backdrop-blur md:hidden">
      <div className="flex flex-col gap-6">
        {links.map(([label,href])=><a key={label} href={href} onClick={()=>setOpen(false)} className="text-xs uppercase tracking-[.2em]">{label}</a>)}
        <a href="#book" onClick={()=>setOpen(false)} className="rounded-full bg-ivory px-5 py-3 text-center text-xs uppercase tracking-[.2em] text-ink">Book appointment</a>
      </div>
    </div>}
  </header>;
}