"use client";

import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="bg-white min-h-[110vh] flex flex-col pt-40 relative overflow-hidden">
      {/* Subtle Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* 1. Massive Headline Section */}
      <div className={`container mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center z-10 py-12 transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

        {/* Headline - Typography Driven with Gradient Mask */}
        <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-[10rem] -mt-20 leading-[1.1] md:leading-[0.85] font-bold tracking-tighter text-black mb-8 md:mb-12 max-w-7xl mx-auto relative px-2">
          <span className="block">Bertemu teman</span>
          <span className="block text-mask opacity-90">lewat secangkir kopi.</span>
        </h1>

        {/* Subtitle - More negative space */}
        <p className="text-lg md:text-2xl text-black/50 mb-10 md:mb-16 max-w-2xl mx-auto font-medium leading-relaxed px-4">
          Platform sosial untuk menemukan teman nongkrong, partner kerja WFC, dan komunitas lokal di kafe favoritmu.
        </p>

        {/* Action */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16 md:mb-24 items-center w-full justify-center px-4">
          <Button variant="primary" size="lg" className="h-14 px-8 text-lg md:h-20 md:px-12 md:text-xl bg-black hover:bg-black/80 text-white rounded-full shadow-2xl shadow-black/20 hover:scale-105 transition-all w-full sm:w-auto">
            Gabung Waitlist
          </Button>
          <span className="text-sm font-bold text-black/30 uppercase tracking-widest text-[10px] hidden sm:block">atau</span>
          <span className="text-sm font-bold text-black/30 uppercase tracking-widest text-[10px] sm:hidden my-2">atau</span>
          <a href="#" className="group flex items-center gap-2 text-base md:text-lg font-bold text-black border-b-2 border-transparent hover:border-black transition-all pb-0.5">
            Pelajari Cara Kerja
            <ArrowDown className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* 2. Visual Bento Grid Section */}
      <div className={`w-full relative px-4 md:px-8 pb-32 transition-all duration-1000 delay-300 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="container mx-auto">
          {/*
            ╔══════════════════════════════════════════════════════════════╗
            ║  🎛️  BENTO GRID SIZE CONTROL                               ║
            ║                                                             ║
            ║  DESKTOP (lg, 4 kolom, 3 baris):                            ║
            ║  ROW_TOP → Cafes Active & Coffee                            ║
            ║  ROW_MID → bawah Meeting + atas Event/Work                  ║
            ║  ROW_BOT → bawah Event/Work & Yellow Block                  ║
            ║                                                             ║
            ║  MOBILE (2 kolom, 6 baris):                                 ║
            ║  M_ROW1 → Cafes Active & Coffee                             ║
            ║  M_ROW2 → Meeting atas                                      ║
            ║  M_ROW3 → Meeting bawah                                     ║
            ║  M_ROW4 → Event/Work atas                                   ║
            ║  M_ROW5 → Event/Work bawah                                  ║
            ║  M_ROW6 → Yellow Block (Scroll Down)                        ║
            ╚══════════════════════════════════════════════════════════════╝
          */}
          <style>{`
            .bento-grid {
              /* 📱 MOBILE (default, 2 kolom, 6 baris) - UBAH ANGKA DI SINI: */
              grid-template-rows:
                180px   /* M_ROW1: Cafes Active & Coffee */
                150px   /* M_ROW2: Meeting atas */
                150px   /* M_ROW3: Meeting bawah */
                120px   /* M_ROW4: Event/Work atas */
                120px   /* M_ROW5: Event/Work bawah */
                160px;  /* M_ROW6: Yellow Block (Scroll Down) */
            }
            @media (min-width: 1024px) {
              .bento-grid {
                /* 🖥️ DESKTOP (lg, 4 kolom, 3 baris) - UBAH ANGKA DI SINI: */
                grid-template-rows:
                  240px   /* ROW_TOP: Cafes Active & Coffee */
                  140px   /* ROW_MID: bawah Meeting + atas Event/Work */
                  200px;  /* ROW_BOT: bawah Event/Work & Yellow Block */
              }
            }
          `}</style>
          <div className="bento-grid grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">

            {/* 1. Square Status Block - 'Cafes Active' */}
            <div className="bg-accent/40 rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden flex flex-col items-start justify-between p-6 md:p-10 group hover:bg-accent/50 transition-colors duration-500">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

              {/* Live Indicator */}
              <div className="relative z-10 flex items-center gap-2 px-3 py-1 bg-white/50 backdrop-blur-md rounded-full border border-black/5 translate-y-0 group-hover:-translate-y-1 transition-transform">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-tight text-black/60">Live Now</span>
              </div>

              {/* Big Number & Brand Monogram */}
              <div className="relative z-10 mt-auto">
                <div className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-1">
                  24<span className="text-black/20">+</span>
                </div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-black/40 leading-none">
                  Cafes Active
                </div>
              </div>

              {/* Subtle Logo Ring in background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-[20px] border-black/[0.03] rounded-full select-none pointer-events-none"></div>
            </div>

            {/* 2. Overlook Coffee Shot */}
            <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                alt="Coffee"
              />
              <div className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:rotate-45 duration-500">
                <ArrowDown className="w-5 h-5 md:w-8 md:h-8 -rotate-[135deg]" />
              </div>
            </div>

            {/* 3. Large Meeting Image - Premium Narrative Overlay */}
            <div className="col-span-2 row-span-2 relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group shadow-2xl shadow-black/5">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                alt="Meeting"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-8 left-8 md:bottom-20 md:left-16 right-8 md:right-20">
                <p className="text-white text-3xl md:text-5xl lg:text-5xl font-bold leading-[1.05] tracking-tight max-w-xl mb-6">
                  Membangun komunitas kopi lokal di mana <span className="text-accent underline decoration-accent/30 underline-offset-8">percakapan bermakna</span> terjadi secara alami.
                </p>
                <div className="flex items-center gap-4 text-white/40 text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white/70 transition-colors">
                  <div className="w-8 h-[1px] bg-accent"></div>
                  <span>CUP Lifestyle</span>
                </div>
              </div>
            </div>

            {/* 4. Vertical Event Image */}
            <div className="row-span-2 relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group shadow-xl shadow-black/5">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                alt="Event"
              />
              <div className="absolute top-8 left-8 flex flex-col gap-2">
                <div className="bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30 text-[10px] md:text-xs text-white font-bold uppercase tracking-widest self-start">Workshop</div>
                <div className="bg-accent px-4 py-2 rounded-full text-[10px] md:text-xs text-black font-bold uppercase tracking-widest self-start opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">Join Talk</div>
              </div>
            </div>

            {/* 5. Vertical Workspace Image */}
            <div className="row-span-2 relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group shadow-xl shadow-black/5">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                alt="Work"
              />
              <div className="absolute top-8 left-8 bg-white px-6 py-2.5 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-widest shadow-2xl text-black">Kerja di Cafe</div>
            </div>

            {/* 6. Wide Yellow Block - Explore Suggestion */}
            <div className="col-span-2 bg-accent/40 rounded-[2.5rem] md:rounded-[3.5rem] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>
              <div className="relative flex flex-col items-center gap-6 transition-all group-hover:-translate-y-2 duration-700">
                <div className="w-16 h-16 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <ArrowDown className="w-8 h-8 text-black/40 animate-bounce" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/30">Scroll Down</span>
                  <span className="text-sm font-medium text-black/50 mt-1">Explore Feature</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 
        PREVIOUS BANNER (COMMENTED OUT FOR RESTORATION)
        If you want to use the luxury single-image composition again, uncomment the following block:
        
        <div className={`w-full relative mt-0 px-4 md:px-8 pb-32 transition-all duration-1000 delay-300 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="container mx-auto px-4 md:px-8 relative">
            <div className="w-full h-[60vh] md:h-[80vh] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden relative shadow-2xl shadow-black/5">
              <div className="absolute inset-0 bg-black/10 z-10 gradient-mask-t-b"></div>
              <img
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop"
                alt="Coffee Shop Aesthetic"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-[3s] hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 bg-gradient-to-t from-black/80 md:from-black/60 to-transparent z-20 flex flex-col md:flex-row items-end justify-between">
                <div className="text-white max-w-lg mb-6 md:mb-0 w-full md:w-auto">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Suasana Pagi di Jakarta Selatan</h3>
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white/10 bg-white/20 backdrop-blur-md"></div>
                      ))}
                    </div>
                    <span className="text-sm font-medium">+42 Orang di sini</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-2xl md:rounded-3xl max-w-full md:max-w-xs text-white w-full md:w-auto">
                  <p className="text-base md:text-lg font-medium leading-relaxed">"Tempatnya asik buat kerja remote, wifi kenceng & kopinya enak!"</p>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-8 h-8 rounded-full bg-accent"></div>
                    <div className="text-xs font-bold uppercase tracking-wider text-white/60">Sarah, Designer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      */}

    </div>
  );
};