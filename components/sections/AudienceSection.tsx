import React from 'react';
import { ScrollHint } from '../ui/ScrollHint';

export const AudienceSection: React.FC = () => {
    return (
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
                                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400&q=80" className="w-full h-full object-cover" alt="Remote Worker" />
                            </div>
                            <h4 className="font-bold text-xl mb-2">Pekerja Remote</h4>
                            <p className="text-black/60 text-base leading-relaxed">Cari teman fokus dan zona kaya wifi.</p>
                        </div>
                        <div className="min-w-[80vw] md:min-w-0 snap-center bg-white p-8 rounded-[2.5rem] shadow-lg shadow-accent/20 border-2 border-accent text-center transform md:scale-105 z-10">
                            <div className="w-24 h-24 mx-auto bg-stone-100 rounded-full mb-6 overflow-hidden border-4 border-white shadow-md">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80" className="w-full h-full object-cover" alt="Coffee Lover" />
                            </div>
                            <h4 className="font-bold text-xl mb-2">Pencinta Kopi</h4>
                            <p className="text-black/60 text-base leading-relaxed">
                                Eksplorasi biji kopi baru dan metode seduh bersama.
                            </p>
                        </div>
                        <div className="min-w-[80vw] md:min-w-0 snap-center bg-white p-8 rounded-[2.5rem] shadow-lg shadow-black/5 border border-black/5 text-center hover:scale-105 transition-transform duration-300">
                            <div className="w-20 h-20 mx-auto bg-stone-100 rounded-full mb-6 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80" className="w-full h-full object-cover" alt="Newcomer" />
                            </div>
                            <h4 className="font-bold text-xl mb-2">Anak Baru</h4>
                            <p className="text-black/60 text-base leading-relaxed">
                                Bangun lingkaran pertemanan lokalmu dari nol.
                            </p>
                        </div>
                    </div>
                    <ScrollHint />
                </div>
            </div>
        </section>
    );
};
