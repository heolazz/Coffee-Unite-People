"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { Hero } from '../components/Hero';
import { KomunitasCard } from '../components/KomunitasCard';
import { EventCard } from '../components/EventCard';
import { IdeaGenerator } from '../components/IdeaGenerator';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';
import { MOCK_EVENTS } from '../constants';
import { Search, Users, Coffee, Heart, Shield, Sparkles, MapPin, Zap, UserCircle, Tag, Ticket, Check, Wifi, Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

const ScrollHint = () => (
    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 md:hidden flex items-center justify-end pr-4 opacity-50">
        <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center animate-pulse">
            <ChevronRight className="w-4 h-4 text-black/40" />
        </div>
    </div>
);

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window?.scrollY || 0;

                // Stay visible if menu open
                if (mobileMenuOpen) {
                    setIsVisible(true);
                    setLastScrollY(currentScrollY);
                    return;
                }

                // Show/Hide logic
                if (currentScrollY > lastScrollY && currentScrollY > 100) { // Scrolling down & past hero
                    setIsVisible(false);
                } else { // Scrolling up
                    setIsVisible(true);
                }

                // Background logic
                if (currentScrollY > 50) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }

                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY, mobileMenuOpen]);

    return (
        <div className="min-h-screen bg-white font-sans text-black selection:bg-accent selection:text-black relative">
            {/* Global Background Elements Removed for Clean White Look */}

            {/* Header - Smart Scroll Aware */}
            <header
                className={`fixed w-full top-0 z-50 transition-all duration-300 transform 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${isScrolled && !mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}
        `}
            >
                <div className="container mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between relative">
                    <div className="flex-1 flex items-center">
                        <div className="flex items-center gap-3 cursor-pointer group z-50" onClick={() => window.scrollTo(0, 0)}>
                            <Logo size="md" />
                        </div>
                    </div>

                    {/* Desktop Nav - Centered */}
                    <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12 text-base font-medium text-black tracking-wide">
                        <a href="#" className="hover:text-black/60 transition-colors">Tentang</a>
                        <a href="#" className="hover:text-black/60 transition-colors">Visi</a>
                        <a href="#" className="hover:text-black/60 transition-colors">Fitur</a>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="flex-1 hidden md:flex items-center justify-end gap-6 h-full">
                        <a href="#" className="text-base font-medium hover:text-black/60 transition-colors h-full flex items-center">Masuk</a>
                        <Button variant="primary" size="md" className="bg-black text-white hover:bg-black/80 hover:shadow-lg transition-all rounded-full px-6">Gabung Waitlist</Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 active:scale-95 transition-transform"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay - Separate div with solid white background */}
            <div
                className={`fixed inset-0 bg-white z-40 flex flex-col pt-32 px-6 transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <nav className="flex flex-col gap-8 text-3xl font-bold tracking-tight mb-auto pt-4">
                    {['Tentang', 'Visi', 'Fitur', 'Cara Kerja', 'Hubungi Kami'].map((item, i) => (
                        <a
                            key={item}
                            href="#"
                            className="border-b border-black/5 pb-4 flex items-center justify-between group"
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            {item}
                            <ArrowRight className="w-6 h-6 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all font-light" />
                        </a>
                    ))}
                </nav>
                <div className="pb-12 flex flex-col gap-4">
                    <Button variant="primary" size="lg" className="w-full h-16 text-lg bg-black text-white rounded-full">Gabung Waitlist</Button>
                    <Button variant="outline" size="lg" className="w-full h-16 text-lg border-2 border-black/10 rounded-full">Masuk Akun</Button>
                </div>
            </div>

            <main className="relative z-10">
                {/* 1. HERO SECTION */}
                <Hero />

                {/* 2. PROBLEM -> SOLUTION */}
                <section className="py-16 md:py-32 relative overflow-hidden">
                    <div className="container mx-auto px-4 md:px-8">
                        {/* Centered Heading for Visi/Tentang */}
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-3xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-black max-w-5xl mx-auto">
                                Menjembatani budaya ngopi dengan <br />
                                <span className="text-black/30">interaksi sosial nyata.</span>
                            </h2>
                            <p className="text-lg md:text-2xl text-black/60 font-medium max-w-2xl mx-auto leading-relaxed">
                                Karena ngopi sendirian itu nyantai, tapi ngopi sambil ngobrol sama orang baru itu pengalaman yang nggak terlupakan.
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                            {/* Left Column removed or integrated */}
                            {/* We will just use the columns for Problem/Solution now */}
                            <div className="flex-1 flex flex-col md:flex-row lg:flex-row gap-6 md:gap-8 relative z-10 w-full">

                                {/* Problem Card */}
                                <div className="flex-1 p-8 md:p-12 bg-white rounded-[2.5rem] border border-black/10 hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-black/5 flex flex-col items-start min-h-[300px]">
                                    <span className="inline-block px-4 py-1.5 mb-6 md:mb-8 rounded-full border border-black/10 text-xs md:text-sm font-bold uppercase tracking-widest text-black/60">
                                        Masalahnya
                                    </span>
                                    <div className="mt-auto md:mt-0">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black leading-tight">Susah cari teman nongkrong?</h3>
                                        <p className="text-base md:text-lg text-black/70 font-medium leading-relaxed">
                                            Banyak yang pengen cari teman ngopi sefrekuensi, tapi belum ada platform yang pas buat nemuin komunitas, meetup dadakan, atau nentuin kafe bareng-bareng.
                                        </p>
                                    </div>
                                </div>

                                {/* Solution Card */}
                                <div className="flex-1 p-8 md:p-12 bg-black text-white rounded-[2.5rem] shadow-xl shadow-black/20 hover:-translate-y-2 transition-transform duration-300 flex flex-col items-start min-h-[300px] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <span className="inline-block px-4 py-1.5 mb-6 md:mb-8 rounded-full bg-white/20 text-xs md:text-sm font-bold uppercase tracking-widest text-white relative z-10">
                                        Solusi CUP
                                    </span>
                                    <div className="relative z-10 mt-auto md:mt-0">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">Tinggal match, lalu ngopi!</h3>
                                        <p className="text-base md:text-lg text-white/80 font-normal leading-relaxed">
                                            Kami merangkai jejaring sosial, rekomendasi kafe, dan event komunitas ke dalam satu ekosistem. Temukan kafenya, gabung acaranya, dan langsung terhubung secara offline tanpa ribet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. HOW IT WORKS */}
                <section className="py-16 md:py-32 relative overflow-hidden">
                    <div className="container mx-auto px-4 md:px-8">

                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-24 gap-8 relative z-10">
                            <div className="max-w-xl">
                                <span className="text-sm font-bold text-black/40 uppercase tracking-widest mb-6 block">Cara Kerja</span>
                                <h2 className="text-3xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                                    Dari layar ke <br />
                                    cangkir kopi <br />
                                    <span className="relative inline-block">
                                        <span className="relative z-10">dalam 3 langkah.</span>
                                        <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/40 rounded-full -z-0"></span>
                                    </span>
                                </h2>
                            </div>
                        </div>

                        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
                        <div className="relative">
                            <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 gap-4 md:grid md:grid-cols-3 md:gap-12 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 relative z-0">
                                {/* Decorative Line (Desktop Only) */}
                                <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-black/5 border-t border-dashed border-black/20 -z-10"></div>

                                {/* Step 1 */}
                                <div className="min-w-[85vw] md:min-w-0 snap-center group bg-white p-8 md:p-8 rounded-[2rem] border border-black/5 shadow-lg shadow-black/5 text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-accent shadow-sm flex items-center justify-center text-xl md:text-2xl font-black mb-6 group-hover:scale-110 transition-transform">01</div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-4">Jelajahi</h3>
                                    <p className="text-black/60 font-medium leading-relaxed text-base md:text-lg">
                                        Temukan kafe yang pas untuk kerja atau nongkrong, dan temukan komunitas yang sefrekuensi.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="min-w-[85vw] md:min-w-0 snap-center group bg-white p-8 md:p-8 rounded-[2rem] border border-black/5 shadow-lg shadow-black/5 text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-accent shadow-sm flex items-center justify-center text-xl md:text-2xl font-black mb-6 group-hover:scale-110 transition-transform">02</div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-4">Gabung</h3>
                                    <p className="text-black/60 font-medium leading-relaxed text-base md:text-lg">
                                        RSVP ke pertemuan dadakan, acara terencana, atau meetup komunitas dalam hitungan menit.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="min-w-[85vw] md:min-w-0 snap-center group bg-accent p-8 md:p-8 rounded-[2rem] shadow-xl shadow-accent/30 text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black text-white border-4 border-black shadow-sm flex items-center justify-center text-xl md:text-2xl font-black mb-6 group-hover:scale-110 transition-transform relative z-10">03</div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-4 relative z-10">Terhubung</h3>
                                    <p className="text-black/80 font-medium leading-relaxed text-base md:text-lg relative z-10">
                                        Bangun koneksi nyata secara offline dengan orang-orang sefrekuensi sambil ngopi.
                                    </p>
                                </div>
                            </div>
                            <ScrollHint />
                        </div>
                    </div>
                </section>

                {/* 4. FEATURES / VALUE (DESIGNED FOR CONNECTION) */}
                <section className="py-16 md:py-32 relative">
                    <div className="container mx-auto px-4 md:px-8">

                        {/* Refined Section Header - Centered */}
                        <div className="mb-12 md:mb-20 border-b border-black pb-12 text-center">
                            <div className="flex flex-col items-center gap-6">
                                <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-black leading-tight max-w-4xl">
                                    Ekosistem Sosial<br />Yang Nyata.
                                </h2>
                                <p className="text-lg font-medium leading-relaxed max-w-xl text-black/80">
                                    <span className="block text-sm font-bold uppercase tracking-widest text-black mb-2">Filosofi Fitur</span>
                                    Interaksi dari layar smartphone kembali ke meja kopi. Aman, spontan, dan bermakna.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 gap-4 md:grid md:grid-cols-3 md:gap-8 md:auto-rows-fr md:overflow-visible md:pb-12 md:pt-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">

                                {/* Feature 1: Café Database (Span 2) */}
                                <div className="min-w-[85vw] md:min-w-0 md:col-span-2 bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-14 border border-black/10 relative overflow-hidden group hover:border-black transition-colors duration-500 snap-center">
                                    <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 h-full items-start md:items-center">
                                        <div className="flex-1 space-y-4 md:space-y-6 order-2 md:order-1">
                                            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                                                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-black" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">Database Kafe</h3>
                                                <p className="text-black/60 font-medium text-base md:text-xl leading-relaxed">
                                                    Rekomendasi kafe terpercaya buat WFC atau nongkrong.
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white border border-black/5 rounded-full text-xs md:text-sm font-bold text-black/70 flex items-center gap-2 shadow-sm">
                                                    Zona Tenang
                                                </span>
                                                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white border border-black/5 rounded-full text-xs md:text-sm font-bold text-black/70 flex items-center gap-2 shadow-sm">
                                                    <Wifi className="w-3 h-3" />
                                                    Wifi Cepat
                                                </span>
                                            </div>
                                        </div>
                                        {/* Visual Element for Cafe */}
                                        <div className="w-full h-40 md:h-auto md:w-1/3 md:aspect-square bg-white rounded-2xl md:rounded-3xl relative overflow-hidden border border-black/5 shadow-sm group-hover:scale-105 transition-transform duration-500 order-1 md:order-2">
                                            <img src="https://picsum.photos/400/400?random=map" className="w-full h-full object-cover opacity-80" alt="Cafe Map" />
                                            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg border border-black/5 shadow-lg">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                                    <div className="text-[10px] font-bold text-black uppercase tracking-wider">Buka</div>
                                                </div>
                                                <div className="text-xs font-bold text-black">Filosofi Kopi</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 2: Blind Matching (Tall) */}
                                <div className="min-w-[85vw] md:min-w-0 md:row-span-2 bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-14 border border-black/10 flex flex-col justify-between group hover:border-black transition-colors duration-500 snap-center">
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center mb-6 md:mb-8 border border-black/5">
                                            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-black" />
                                        </div>
                                        <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">Blind Match Style</h3>
                                        <p className="text-black/60 font-medium text-sm md:text-xl leading-relaxed">
                                            Algoritma menjodohkanmu dengan orang yang seminat untuk sesi ngopi kejutan.
                                        </p>
                                    </div>

                                    <div className="relative z-10 mt-8 md:mt-12">
                                        <div className="bg-stone-50 rounded-2xl p-4 md:p-6 border border-black/5 shadow-sm transform group-hover:scale-105 transition-transform duration-300">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex -space-x-3">
                                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-cover bg-center" style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=12')" }}></div>
                                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-cover bg-center" style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=33')" }}></div>
                                                </div>
                                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent text-black flex items-center justify-center shadow-lg">
                                                    <Heart className="w-4 h-4 md:w-5 md:h-5 fill-black" />
                                                </div>
                                            </div>
                                            <div className="text-xs md:text-sm font-bold text-black/80 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></span>
                                                Match 'Jazz'
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 3: Vouchers (Black) */}
                                <div className="min-w-[85vw] md:min-w-0 bg-black text-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-xl shadow-black/20 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 snap-center">
                                    <div className="relative z-10">
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                                            <Ticket className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">Voucher Club</h3>
                                        <p className="text-white/60 font-medium text-base md:text-lg">Diskon eksklusif saat kamu mengadakan acara.</p>
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                                        <Ticket className="w-24 h-24 md:w-32 md:h-32 text-white rotate-12" />
                                    </div>
                                </div>

                                {/* Feature 4: Profiles (White) */}
                                <div className="min-w-[85vw] md:min-w-0 bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 border border-black/5 shadow-lg shadow-black/5 flex flex-col justify-center relative overflow-hidden hover:shadow-xl transition-all duration-300 snap-center">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                    <div className="relative z-10">
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            <span className="px-3 py-1.5 rounded-full bg-stone-50 border border-black/5 text-xs md:text-sm font-bold text-black/60">#Fotografi</span>
                                            <span className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs md:text-sm font-bold text-black/70">#Startup</span>
                                            <span className="px-3 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-xs md:text-sm font-bold text-black">#Pecinta Kopi</span>
                                        </div>
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-stone-100 rounded-full flex items-center justify-center mb-4">
                                            <Tag className="w-4 h-4 md:w-5 md:h-5 text-black" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">Minat Spesifik</h3>
                                        <p className="text-black/60 font-medium text-base md:text-lg">Tarik 'crowd' yang tepat melalui tagar personal.</p>
                                    </div>
                                </div>

                            </div>
                            <ScrollHint />
                        </div>
                    </div>
                </section>

                {/* EVENTS PREVIEW */}
                <section className="py-20 md:py-40 bg-white border-t border-black/5">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-6">
                            <div className="max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-white border border-black/5 rounded-full text-sm font-bold uppercase tracking-widest text-black shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                    Komunitas
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight">
                                    Orang beneran. <br /> Kopi beneran.
                                </h2>
                            </div>
                            <div className="flex gap-3 pb-2">
                                <Button variant="outline" className="h-12 px-6 bg-white hover:bg-black hover:text-white border-none shadow-md shadow-black/5">Lihat Semua</Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 gap-4 md:grid md:grid-cols-4 md:gap-8 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                                {MOCK_EVENTS.map(event => (
                                    <div key={event.id} className="min-w-[85vw] md:min-w-0 snap-center h-full flex justify-center">
                                        <KomunitasCard
                                            imageSrc={event.imageUrl || ''}
                                            title={event.title}
                                            host={event.host || ''}
                                            date={event.date}
                                            location={event.location.split(',')[0]}
                                        />
                                    </div>
                                ))}
                            </div>
                            <ScrollHint />
                        </div>
                    </div>
                </section>

                {/* 5. TARGET AUDIENCE */}
                <section className="py-20 md:py-40 mx-0 bg-white relative border-t border-black/5">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-12 md:mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Untuk siapa CUP?</h2>
                            <p className="text-black/50 text-xl">Semua orang berhak mendapatkan percakapan yang asik.</p>
                        </div>

                        <div className="relative">
                            <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 gap-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-12 md:pt-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                                <div className="min-w-[80vw] md:min-w-0 snap-center bg-white p-8 rounded-[2.5rem] shadow-lg shadow-black/5 border border-black/5 text-center hover:scale-105 transition-transform duration-300">
                                    <div className="w-20 h-20 mx-auto bg-stone-100 rounded-full mb-6 overflow-hidden">
                                        <img src="https://picsum.photos/200/200?random=50" className="w-full h-full object-cover" />
                                    </div>
                                    <h4 className="font-bold text-xl mb-2">Pekerja Remote</h4>
                                    <p className="text-black/60 text-base leading-relaxed">Cari teman fokus dan zona kaya wifi.</p>
                                </div>
                                <div className="min-w-[80vw] md:min-w-0 snap-center bg-white p-8 rounded-[2.5rem] shadow-lg shadow-accent/20 border-2 border-accent text-center transform md:scale-105 z-10">
                                    <div className="w-24 h-24 mx-auto bg-stone-100 rounded-full mb-6 overflow-hidden border-4 border-white shadow-md">
                                        <img src="https://picsum.photos/200/200?random=51" className="w-full h-full object-cover" />
                                    </div>
                                    <h4 className="font-bold text-xl mb-2">Pencinta Kopi</h4>
                                    <p className="text-black/60 text-base leading-relaxed">Eksplorasi biji kopi baru dan metode seduh bersama.</p>
                                </div>
                                <div className="min-w-[80vw] md:min-w-0 snap-center bg-white p-8 rounded-[2.5rem] shadow-lg shadow-black/5 border border-black/5 text-center hover:scale-105 transition-transform duration-300">
                                    <div className="w-20 h-20 mx-auto bg-stone-100 rounded-full mb-6 overflow-hidden">
                                        <img src="https://picsum.photos/200/200?random=52" className="w-full h-full object-cover" />
                                    </div>
                                    <h4 className="font-bold text-xl mb-2">Anak Baru</h4>
                                    <p className="text-black/60 text-base leading-relaxed">Bangun lingkaran pertemanan lokalmu dari nol.</p>
                                </div>
                            </div>
                            <ScrollHint />
                        </div>
                    </div>
                </section>

                {/* IDEA GENERATOR */}
                <section className="py-12 bg-white overflow-hidden relative z-10">
                    <div className="container mx-auto px-4 md:px-8">
                        <IdeaGenerator />
                    </div>
                </section>

                {/* 6. FAQ (BEFORE FOOTER) */}
                <FAQ />

                {/* 7. FINAL CTA */}
                <section className="py-20 md:py-40 text-center relative overflow-hidden bg-black text-white">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-5xl md:text-9xl font-bold mb-8 md:mb-12 tracking-tighter text-white">Siap untuk <br /> terhubung?</h2>
                            <p className="text-xl md:text-2xl text-white/60 font-medium max-w-2xl mx-auto mb-10 md:mb-16">
                                Gabung komunitas yang menghargai koneksi tatap muka dibanding 'likes' digital.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Button variant="primary" size="lg" className="h-16 px-10 text-xl md:h-20 md:px-16 md:text-2xl bg-white text-[#000000] hover:bg-white/90 hover:-translate-y-1 transition-transform duration-300 rounded-full w-full sm:w-auto font-bold shadow-2xl">Gabung Waitlist</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MOBILE STICKY BOTTOM CIA */}
                <div className={`fixed bottom-6 left-4 right-4 z-50 transition-all duration-500 transform md:hidden ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <div className="bg-black/90 backdrop-blur-md text-white p-2 rounded-full shadow-2xl flex items-center justify-between pl-6 pr-2 border border-white/10">
                        <span className="font-bold text-sm">Gabung sekarang</span>
                        <div className="flex items-center gap-2">
                            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center active:scale-90 transition-transform">
                                <UserCircle className="w-5 h-5" />
                            </button>
                            <Button variant="primary" size="sm" className="bg-white text-black hover:bg-white/90 rounded-full px-6 h-10 font-bold" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                Join
                            </Button>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div >
    );
}
