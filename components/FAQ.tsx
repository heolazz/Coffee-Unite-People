"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
    {
        question: "Apa bedanya CUP dengan aplikasi meetup lain?",
        answer: "CUP fokus pada interaksi tatap muka yang berkualitas di kafe. Kami tidak hanya mendaftar acara, tapi juga membantu mencocokkanmu dengan orang yang sefrekuensi lewat fitur 'Blind Matching' berbasis minat spesifik."
    },
    {
        question: "Apakah saya harus membayar membership?",
        answer: "Fitur dasar CUP gratis selamanya. Kamu bisa mencari kafe dan bergabung acara publik tanpa biaya. Kami akan meluncurkan 'CUP Member Club' untuk akses ke acara eksklusif dan diskon spesial di kafe mitra."
    },
    {
        question: "Bagaimana cara menjadi Host acara?",
        answer: "Sangat mudah! Setelah mendaftar, kamu bisa langsung membuat acara publik atau privat. Cukup pilih kafe dari database kami, tentukan waktu, dan set topik obrolan. Kami akan bantu promosikan ke pengguna di sekitarmu."
    },
    {
        question: "Apakah aman bertemu orang baru lewat CUP?",
        answer: "Keamanan adalah prioritas kami. Semua profil Host diverifikasi. Kami juga menyarankan pertemuan selalu dilakukan di tempat umum (kafe mitra CUP) dan memiliki fitur pelaporan langsung di aplikasi."
    },
    {
        question: "Kafe saya ingin jadi mitra, caranya?",
        answer: "Kami senang bekerja sama dengan kafe lokal! Silakan hubungi tim kemitraan kami melalui halaman 'Untuk Kafe' atau kirim email ke partner@cup.id untuk mendapatkan stiker 'CUP Friendly Spot'."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 md:py-24 bg-white border-t border-black/5">
            <div className="container mx-auto px-4 md:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left: Sticky Header (Compact) */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 md:top-32">
                            <span className="text-xs font-bold uppercase tracking-widest text-black/40 mb-3 block">FAQ</span>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
                                Pertanyaan <br /> Umum.
                            </h2>
                            <p className="text-sm md:text-base text-black/60 font-medium mb-8 max-w-xs">
                                Cari tahu lebih lanjut tentang bagaimana CUP menghubungkanmu dengan komunitas kopi lokal.
                            </p>
                            <button className="text-sm font-bold border-b border-black pb-0.5 hover:text-black/60 transition-colors">
                                Hubungi Support &rarr;
                            </button>
                        </div>
                    </div>

                    {/* Right: Compact List */}
                    <div className="lg:col-span-8">
                        <div className="divide-y divide-black/5 border-t border-b border-black/5">
                            {FAQS.map((faq, index) => (
                                <div key={index} className="group">
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full py-6 flex items-center justify-between text-left hover:bg-black/[0.01] transition-colors"
                                    >
                                        <span className={`text-lg md:text-xl font-bold transition-colors pr-8 ${openIndex === index ? 'text-black' : 'text-black/70 group-hover:text-black'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                            {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4 text-black/40" />}
                                        </div>
                                    </button>

                                    <div
                                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="text-base text-black/60 leading-relaxed pr-8">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
