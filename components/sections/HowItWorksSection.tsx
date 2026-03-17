import React from 'react';
import { ScrollHint } from '../ui/ScrollHint';

export const HowItWorksSection: React.FC = () => {
    return (
        <section id="cara-kerja" className="py-16 md:py-32 relative overflow-hidden bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-center md:text-center items-start mb-12 md:mb-24 gap-8 relative z-10">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                            From screen to <br />
                            Steaming cup <br />
                            <span className="relative inline-block">
                                <span className="relative z-10">in 3 steps.</span>
                                <span className="absolute -bottom-4 left-0  h-2 w-full bg-accent/60 rounded-full pointer-events-none"></span>
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex overflow-x-auto snap-x snap-mandatory pt-6 pb-8 gap-4 md:grid md:grid-cols-3 md:gap-12 md:pb-12 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 relative z-0">
                        {/* Decorative Line (Desktop Only) */}
                        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-black/5 border-t border-dashed border-black/20 -z-10"></div>

                        {/* Step 1 */}
                        <div className="min-w-[85vw] md:min-w-0 snap-center group bg-white p-8 md:p-8 rounded-[2rem] border border-black/5 shadow-lg shadow-black/5 text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-accent shadow-sm flex items-center justify-center text-xl md:text-2xl font-black mb-6 group-hover:scale-110 transition-transform">
                                01
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Jelajahi</h3>
                            <p className="text-black/60 font-medium leading-relaxed text-base md:text-lg">
                                Temukan kafe yang pas untuk kerja atau nongkrong, dan temukan komunitas yang sefrekuensi.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="min-w-[85vw] md:min-w-0 snap-center group bg-white p-8 md:p-8 rounded-[2rem] border border-black/5 shadow-lg shadow-black/5 text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-accent shadow-sm flex items-center justify-center text-xl md:text-2xl font-black mb-6 group-hover:scale-110 transition-transform">
                                02
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Gabung</h3>
                            <p className="text-black/60 font-medium leading-relaxed text-base md:text-lg">
                                RSVP ke pertemuan dadakan, acara terencana, atau meetup komunitas dalam hitungan menit.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="min-w-[85vw] md:min-w-0 snap-center group bg-accent p-8 md:p-8 rounded-[2rem] shadow-xl shadow-accent/30 text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black text-white border-4 border-black shadow-sm flex items-center justify-center text-xl md:text-2xl font-black mb-6 group-hover:scale-110 transition-transform relative z-10">
                                03
                            </div>
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
    );
};
