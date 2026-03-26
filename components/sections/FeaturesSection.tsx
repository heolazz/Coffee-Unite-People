import React from 'react';
import { MapPin, Wifi, Sparkles, Heart, Ticket, Tag } from 'lucide-react';
import { ScrollHint } from '../ui/ScrollHint';

export const FeaturesSection: React.FC = () => {
    return (
        <section id="fitur" className="py-16 md:py-32 relative bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-12 md:mb-20 border-b border-black pb-8 relative">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <div className="relative">
                            <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-black leading-tight text-right md:text-left">
                                Ekosistem Sosial
                                <br />
                                Yang Nyata.
                            </h2>
                            <div className="absolute -bottom-4 right-0 w-32 h-2 bg-accent/60 rounded-full md:hidden"></div>
                        </div>
                        <p className="text-lg font-medium leading-relaxed max-w-md text-black/80 md:text-right">
                            <span className="block text-sm font-regular uppercase tracking-widest text-black mb-2">
                                Filosofi Fitur
                            </span>
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
                                <div className="w-full h-40 md:h-auto md:w-1/3 md:aspect-square bg-white rounded-2xl md:rounded-3xl relative overflow-hidden border border-black/5 shadow-sm group-hover:scale-105 transition-transform duration-500 order-1 md:order-2">
                                    <img
                                        src="https://picsum.photos/400/400?random=map"
                                        className="w-full h-full object-cover opacity-80"
                                        alt="Cafe Map"
                                    />
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
                                            <div
                                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-cover bg-center"
                                                style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=12')" }}
                                            ></div>
                                            <div
                                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-cover bg-center"
                                                style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=33')" }}
                                            ></div>
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
                                <p className="text-white/60 font-medium text-base md:text-lg">
                                    Diskon eksklusif saat kamu mengadakan acara.
                                </p>
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
                                    <span className="px-3 py-1.5 rounded-full bg-stone-50 border border-black/5 text-xs md:text-sm font-bold text-black/60">
                                        #Fotografi
                                    </span>
                                    <span className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs md:text-sm font-bold text-black/70">
                                        #Startup
                                    </span>
                                    <span className="px-3 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-xs md:text-sm font-bold text-black">
                                        #Pecinta Kopi
                                    </span>
                                </div>
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-stone-100 rounded-full flex items-center justify-center mb-4">
                                    <Tag className="w-4 h-4 md:w-5 md:h-5 text-black" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-2">Minat Spesifik</h3>
                                <p className="text-black/60 font-medium text-base md:text-lg">
                                    Tarik 'crowd' yang tepat melalui tagar personal.
                                </p>
                            </div>
                        </div>
                    </div>
                    <ScrollHint />
                </div>
            </div>
        </section>
    );
};
