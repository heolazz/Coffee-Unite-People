import React from 'react';
import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';

export interface KomunitasCardProps {
    imageSrc: string;
    title: string;
    host: string;
    date: string;
    location: string;
}

export const KomunitasCard: React.FC<KomunitasCardProps> = ({
    imageSrc,
    title,
    host,
    date,
    location,
}) => {
    return (
        <div className="flex flex-col group cursor-pointer w-full max-w-[320px]">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4 border border-black/5 bg-stone-100">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Content Container */}
            <div className="flex flex-col px-1">
                <h3 className="font-bold text-lg leading-snug mb-1 text-black group-hover:underline decoration-2 underline-offset-4">
                    {title}
                </h3>
                <p className="text-sm font-medium text-black/60 mb-4">
                    Host: {host}
                </p>

                <div className="flex items-center gap-4 text-xs font-semibold text-black/50">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="uppercase tracking-wider">{date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
