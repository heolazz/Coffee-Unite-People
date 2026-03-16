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

    const [activeSection, setActiveSection] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScrollData = () => {
            if (typeof window === 'undefined') return;

            const currentScrollY = window.scrollY;

            // 1. Show/Hide & Background logic
            if (mobileMenuOpen) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setIsScrolled(currentScrollY > 50);
            setLastScrollY(currentScrollY);

            // 2. Scroll Progress logic
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);

            // 3. Active Section logic
            const sections = navLinks.map(link => link.id);
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= -100 && rect.top <= 300) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScrollData);
        return () => window.removeEventListener('scroll', handleScrollData);
    }, [lastScrollY, mobileMenuOpen]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (!target) return;

        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition - 100; // Offset for pill navbar
        const duration = 1200;
        let start: number | null = null;

        const animation = (currentTime: number) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);

            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startPosition + distance * ease);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        setMobileMenuOpen(false);
        requestAnimationFrame(animation);
    };

    const navLinks = [
        { name: 'Tentang', id: 'tentang' },
        { name: 'Cara Kerja', id: 'cara-kerja' },
        { name: 'Fitur', id: 'fitur' },
        { name: 'Acara', id: 'acara' },
        { name: 'FAQ', id: 'faq' },
    ];

    return (
        <>
            {/* Header - Adaptive Pill Transformation */}
            <div className={`fixed w-full top-0 z-[80] flex justify-center py-4 transition-all duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
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
                                    onClick={(e) => handleScroll(e, link.id)}
                                    className={`relative hover:text-black transition-colors ${activeSection === link.id ? 'text-black' : ''}`}
                                >
                                    {link.name}
                                    {/* Active Dot indicator */}
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
                                onClick={(e) => {
                                    const target = document.querySelector('section:last-of-type');
                                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Gabung Waitlist
                            </Button>
                        </div>

                        {/* Mobile Menu Toggle - Custom Morphing-style animation */}
                        <button
                            className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-full bg-black/5 active:scale-95 transition-all group z-[70]"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-5 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </button>
                    </div>

                    {/* Scroll Progress Bar (Inside Pill) */}
                    {isScrolled && (
                        <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-black/5 overflow-hidden rounded-full">
                            <div
                                className="h-full bg-accent transition-all duration-300 ease-out"
                                style={{ width: `${scrollProgress}%` }}
                            />
                        </div>
                    )}
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
                            onClick={(e) => handleScroll(e, link.id)}
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            <span className="relative inline-block py-1">
                                {link.name}
                                {/* Active Underline */}
                                {activeSection === link.id && (
                                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent rounded-full" />
                                )}
                            </span>
                            <ArrowRight className="w-6 h-6 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                        </a>
                    ))}
                </nav>

                {/* Simplified Footer - Focus on CTA */}
                <div className="mt-auto mb-8">
                    <p className="text-[10px] font-bold text-black/20 text-center tracking-widest uppercase">© 2026 CUP Project — Coffee Unite People</p>
                </div>

                <div className="pb-12 flex flex-col gap-4">
                    <Button
                        variant="primary"
                        size="lg"
                        className="w-full h-16 text-lg font-bold bg-black text-white rounded-full shadow-2xl shadow-black/20"
                        onClick={() => {
                            const target = document.querySelector('section:last-of-type');
                            if (target) target.scrollIntoView({ behavior: 'smooth' });
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
