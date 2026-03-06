'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Logo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

export function Navigation() {
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
        <>
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
        </>
    );
}
