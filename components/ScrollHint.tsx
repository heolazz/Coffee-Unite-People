'use client';

import { ChevronRight } from 'lucide-react';

export function ScrollHint() {
    return (
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 md:hidden flex items-center justify-end pr-4 opacity-50">
            <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center animate-pulse">
                <ChevronRight className="w-4 h-4 text-black/40" />
            </div>
        </div>
    );
}
