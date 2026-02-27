import React from 'react';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
    const sizeClasses = {
        sm: {
            container: 'gap-2',
            ring: 'w-6 h-6 border-[3px]',
            text: 'text-xl'
        },
        md: {
            container: 'gap-3',
            ring: 'w-8 h-8 md:w-10 md:h-10 border-[4px] md:border-[5px]',
            text: 'text-2xl md:text-3xl'
        },
        lg: {
            container: 'gap-4',
            ring: 'w-12 h-12 md:w-16 md:h-16 border-[6px] md:border-[8px]',
            text: 'text-4xl md:text-6xl'
        },
        xl: {
            container: 'gap-6',
            ring: 'w-24 h-24 md:w-32 md:h-32 border-[10px] md:border-[15px]',
            text: 'text-6xl md:text-8xl'
        }
    };

    const currentSize = sizeClasses[size];

    return (
        <div className={`flex items-center ${currentSize.container} ${className}`}>
            <div className={`${currentSize.ring} border-accent rounded-full flex-shrink-0 animate-pulse-slow`}></div>
            <span className={`${currentSize.text} font-serif italic font-bold tracking-tight text-black`}>
                CUP
            </span>
        </div>
    );
};
