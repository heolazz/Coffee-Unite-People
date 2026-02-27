import React from 'react';
import { Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black pt-20 md:pt-40 pb-12 border-t border-black/5 relative overflow-hidden">
      {/* Subtle Grain Texture Overlay (Consistent with Hero) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* 1. Top Section: CTA & Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Jangan ngopi <br /> sendirian terus.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Email kamu" className="bg-transparent border-b-2 border-black/10 px-0 py-4 text-xl placeholder:text-black/20 focus:border-black focus:outline-none w-full sm:w-80 transition-colors" />
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-black/80 transition-colors flex items-center gap-2 group">
                Subscribe
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            {[Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group">
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* 2. Middle Section: Links (Clean Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-32 border-t border-black/5 pt-8 md:pt-12">
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-8 text-black/40">Platform</h4>
            <ul className="space-y-4">
              {['Cara Kerja', 'Untuk Komunitas', 'Untuk Kafe', 'Download App'].map((item) => (
                <li key={item}><a href="#" className="text-xl font-bold hover:underline decoration-2 underline-offset-4">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-8 text-black/40">Perusahaan</h4>
            <ul className="space-y-4">
              {['Tentang Kami', 'Karir', 'Brand Kit', 'Kontak'].map((item) => (
                <li key={item}><a href="#" className="text-xl font-bold hover:underline decoration-2 underline-offset-4">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-8 text-black/40">Legal</h4>
            <ul className="space-y-4">
              {['Privasi', 'Syarat & Ketentuan', 'Cookies'].map((item) => (
                <li key={item}><a href="#" className="text-xl font-bold hover:underline decoration-2 underline-offset-4">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-8 text-black/40">Alamat</h4>
            <p className="text-xl font-medium leading-relaxed">
              Jakarta Selatan, Indonesia<br />
              Jl. Senopati No. 42
            </p>
          </div>
        </div>

        {/* 3. Bottom: Massive Brand & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-black/5 pt-12">
          <div className="mb-8 md:mb-0">
            <p className="text-sm font-bold text-black/40">&copy; {new Date().getFullYear()} CUP Inc. All rights reserved.</p>
          </div>
          {/* Massive Watermark */}
          {/* Massive Watermark */}
          <h1 className="text-8xl sm:text-[10rem] md:text-[15rem] lg:text-[20rem] font-bold leading-[0.7] tracking-tighter text-black/5 select-none pointer-events-none -mb-4 sm:-mb-8 md:-mb-10 -mr-4">
            CUP
          </h1>
        </div>

      </div>
    </footer>
  );
};