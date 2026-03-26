"use client";

import { useState, useEffect } from 'react';

interface ScrollDataOptions {
    navLinks: { name: string; id: string }[];
    activeOffset?: number;
    hideOffset?: number;
}

export const useScrollData = ({ navLinks, activeOffset = 150, hideOffset = 100 }: ScrollDataOptions) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScrollData = () => {
            if (typeof window === 'undefined') return;

            const currentScrollY = window.scrollY;

            // 1. Visibility logic (hide on scroll down, show on scroll up)
            if (currentScrollY > lastScrollY && currentScrollY > hideOffset) {
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
            const reversedLinks = [...navLinks].reverse();
            let currentActive = '';

            for (const link of reversedLinks) {
                const element = document.getElementById(link.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= activeOffset) {
                        currentActive = link.id;
                        break;
                    }
                }
            }
            setActiveSection(currentActive);
        };

        window.addEventListener('scroll', handleScrollData);
        return () => window.removeEventListener('scroll', handleScrollData);
    }, [lastScrollY, navLinks, activeOffset, hideOffset]);

    return {
        isScrolled,
        isVisible,
        activeSection,
        scrollProgress,
        setIsVisible
    };
};
