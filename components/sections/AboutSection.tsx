import React from 'react';

export const AboutSection: React.FC = () => {
    return (
        <section id="tentang" className="py-16 md:py-32 relative overflow-hidden bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-black max-w-5xl mx-auto">
                        Menjembatani budaya ngopi dengan interaksi sosial nyata.
                    </h2>
                    <p className="text-lg md:text-2xl text-black/60 font-medium max-w-2xl mx-auto leading-relaxed">
                        Karena ngopi sendirian itu nyantai, tapi ngopi sambil ngobrol sama orang baru itu pengalaman yang nggak
                        terlupakan.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                    <div className="flex-1 flex flex-col md:flex-row lg:flex-row gap-6 md:gap-8 relative z-10 w-full">
                        {/* Problem Card */}
                        <div className="flex-1 p-8 md:p-12 bg-white rounded-[2.5rem] border border-black/10 hover:-translate-y-2 transition-transform duration-300 shadow-lg shadow-black/5 flex flex-col items-start min-h-[300px]">
                            <span className="inline-block px-4 py-1.5 mb-6 md:mb-8 rounded-full border border-black/10 text-xs md:text-sm font-bold uppercase tracking-widest text-black/60">
                                Masalahnya
                            </span>
                            <div className="mt-auto md:mt-0">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black leading-tight">
                                    Susah cari teman nongkrong?
                                </h3>
                                <p className="text-base md:text-lg text-black/70 font-medium leading-relaxed">
                                    Banyak yang pengen cari teman ngopi sefrekuensi, tapi belum ada platform yang pas buat nemuin
                                    komunitas, meetup dadakan, atau nentuin kafe bareng-bareng.
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
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">
                                    Tinggal match, lalu ngopi!
                                </h3>
                                <p className="text-base md:text-lg text-white/80 font-normal leading-relaxed">
                                    Kami merangkai jejaring sosial, rekomendasi kafe, dan event komunitas ke dalam satu ekosistem.
                                    Temukan kafenya, gabung acaranya, dan langsung terhubung secara offline tanpa ribet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
