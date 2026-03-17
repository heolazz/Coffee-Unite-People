"use client";

import React from 'react';
import { Button } from '../ui/Button';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export const FinalCTASection: React.FC = () => {
    const { scrollTo } = useSmoothScroll();

    return (
        <section className="py-20 md:py-40 text-center relative overflow-hidden bg-black text-white">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl md:text-9xl font-bold mb-8 md:mb-12 tracking-tighter text-white">
                        Siap untuk <br /> terhubung?
                    </h2>
                    <p className="text-xl md:text-2xl text-white/60 font-medium max-w-2xl mx-auto mb-10 md:mb-16">
                        Gabung komunitas yang menghargai koneksi tatap muka dibanding 'likes' digital.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button
                            variant="secondary"
                            size="lg"
                            className="h-16 px-10 text-xl md:h-20 md:px-16 md:text-2xl bg-white text-gray-900 hover:bg-white/90 hover:-translate-y-1 transition-transform duration-300 rounded-full w-full sm:w-auto font-bold shadow-2xl"
                            onClick={() => scrollTo('subscribe')}
                        >
                            Gabung Waitlist
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
