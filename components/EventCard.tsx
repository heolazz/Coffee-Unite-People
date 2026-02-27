import React from 'react';
import { Event } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="group cursor-pointer flex flex-col h-full p-6 md:p-8 border border-black/10 rounded-[2rem] md:rounded-[2.5rem] hover:border-black transition-colors duration-500 bg-white relative">

      {/* Date - Big & Bold */}
      <div className="mb-6">
        <span className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-2">{event.category}</span>
        <h4 className="text-3xl md:text-4xl font-bold tracking-tight leading-none text-black group-hover:text-accent transition-colors duration-300">
          {event.date.split(',')[0]}
        </h4>
        <span className="text-sm font-medium text-black/40">{event.date.split(',')[1]}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-black leading-tight mb-auto group-hover:underline decoration-2 underline-offset-4">
        {event.title}
      </h3>

      {/* Bottom info */}
      <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-black/40 uppercase tracking-wider">Lokasi</span>
          <span className="text-sm font-bold text-black">{event.location.split(',')[0]}</span>
        </div>
        <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};