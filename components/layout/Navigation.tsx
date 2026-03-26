'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useScrollData } from '../../hooks/useScrollData';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const navLinks = [
    { name: 'Tentang', id: 'tentang' },
    { name: 'Cara Kerja', id: 'cara-kerja' },
    { name: 'Fitur', id: 'fitur' },
    { name: 'Acara', id: 'acara' },
    { name: 'FAQ', id: 'faq' },
];

export function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollTo } = useSmoothScroll();
    const { isScrolled, isVisible, activeSection, scrollProgress } = useScrollData({ navLinks });

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const offset = window.innerWidth < 768 ? 70 : 80;
        scrollTo(id, offset);
        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* Global Scroll Progress - Fixed at the very top of the viewport */}
            <div className="fixed top-0 left-0 w-full h-1 bg-black/5 z-[100] pointer-events-none">
                <div
                    className="h-full bg-accent transition-all duration-150 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Header - Adaptive Pill Transformation */}
            <div className={`fixed w-full top-0 z-[80] flex justify-center py-4 transition-all duration-500 translate-y-0`}>
                <header
                    className={`
                        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                        ${isScrolled && !mobileMenuOpen
                            ? 'w-[92%] max-w-5xl bg-white/80 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 py-2 px-6'
                            : 'w-full bg-transparent py-4 px-4 md:px-8'}
                    `}
                >
                    <div className="mx-auto flex items-center justify-between relative h-12 md:h-14">
                        <div className="flex-1 flex items-center">
                            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <Logo size={mobileMenuOpen ? "md" : (isScrolled ? "sm" : "md")} />
                            </div>
                        </div>

                        {/* Desktop Nav - Centered with Active Indicators */}
                        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-bold text-black/60 tracking-wider uppercase">
                            {navLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    className={`relative hover:text-black transition-colors ${activeSection === link.id ? 'text-black' : ''}`}
                                >
                                    {link.name}
                                    {activeSection === link.id && (
                                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full animate-pulse" />
                                    )}
                                </a>
                            ))}
                        </nav>

                        {/* Desktop Actions */}
                        <div className="flex-1 hidden md:flex items-center justify-end">
                            <Button
                                variant="primary"
                                size={isScrolled ? "sm" : "md"}
                                className={`
                                    bg-black text-white hover:scale-105 transition-all rounded-full px-6 font-bold
                                    ${isScrolled ? 'h-10 text-xs' : 'h-12 text-sm'}
                                `}
                                onClick={() => scrollTo('subscribe')}
                            >
                                Gabung Waitlist
                            </Button>
                        </div>

                        <button
                            className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-full bg-black/5 active:scale-95 transition-all group z-[70]"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </button>
                    </div>

                </header>
            </div>

            <div
                className={`fixed inset-0 bg-white z-[60] flex flex-col pt-32 px-6 transition-all duration-700 ease-[cubic-bezier(0.82,0,0.18,1)] ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
            >
                <nav className="flex flex-col gap-6 text-2xl font-bold tracking-tight mb-auto pt-8">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="border-b border-black/5 pb-4 flex items-center justify-between group"
                            onClick={(e) => handleNavClick(e, link.id)}
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            <span className="relative inline-block py-1">
                                {link.name}
                                {activeSection === link.id && (
                                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent rounded-full" />
                                )}
                            </span>
                            <ArrowRight className="w-6 h-6 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                        </a>
                    ))}
                </nav>

                <div className="mt-auto mb-8">
                    <p className="text-[10px] font-bold text-black/20 text-center tracking-widest uppercase">© 2026 CUP Project — Coffee Unite People</p>
                </div>

                <div className="pb-12 flex flex-col gap-4">
                    <Button
                        variant="primary"
                        size="lg"
                        className="w-full h-16 text-lg font-bold bg-black text-white rounded-full shadow-2xl shadow-black/20"
                        onClick={() => {
                            scrollTo('subscribe');
                            setMobileMenuOpen(false);
                        }}
                    >
                        Gabung Waitlist
                    </Button>
                </div>
            </div>
        </>
    );
}
