import React from 'react';
import { Button } from '../ui/Button';
import { CommunityCard } from '../ui/CommunityCard';
import { ScrollHint } from '../ui/ScrollHint';
import { MOCK_EVENTS } from '../../constants';

export const EventsSection: React.FC = () => {
    return (
        <section id="acara" className="py-20 md:py-40 bg-white border-t border-black/5">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                            Orang beneran. <br /> Kopi beneran.
                        </h2>
                    </div>
                    <div className="flex-shrink-0 self-end">
                        <Button
                            variant="outline"
                            className="h-8 md:h-10 px-2 bg-white hover:bg-black hover:text-white border border-black/5 shadow-md shadow-black/5 text-sm md:text-base rounded-full font-medium"
                        >
                            Lihat Semua
                        </Button>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 gap-4 md:grid md:grid-cols-4 md:gap-8 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                        {MOCK_EVENTS.map((event) => (
                            <div key={event.id} className="min-w-[85vw] md:min-w-0 snap-center h-full flex justify-center">
                                <CommunityCard
                                    imageSrc={event.imageUrl || ""}
                                    title={event.title}
                                    host={event.host || ""}
                                    date={event.date}
                                    location={event.location.split(",")[0]}
                                />
                            </div>
                        ))}
                    </div>
                    <ScrollHint />
                </div>
            </div>
        </section>
    );
};
