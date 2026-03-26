import React from 'react';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
    const sizeClasses = {
        sm: 'text-xl',
        md: 'text-2xl md:text-3xl',
        lg: 'text-4xl md:text-6xl',
        xl: 'text-6xl md:text-8xl'
    };

    // Responsive ring thickness based on size
    const ringThickness = {
        sm: 'border-[3px]',
        md: 'border-[0.14em]',
        lg: 'border-[0.14em]',
        xl: 'border-[0.14em]'
    };

    return (
        <div className={`flex items-center gap-[0.25em] ${sizeClasses[size]} ${className}`}>
            {/* 
              Using 0.72em height for the ring as it typically matches the 
              optical cap-height of serif fonts like Playfair Display.
            */}
            <div className={`h-[0.72em] w-[0.72em] ${ringThickness[size]} border-accent rounded-full flex-shrink-0 animate-pulse-slow`}></div>
            <span className="font-serif italic font-medium tracking-tight text-black leading-none translate-y-[-0.02em]">
                CUP
            </span>
        </div>
    );
};
