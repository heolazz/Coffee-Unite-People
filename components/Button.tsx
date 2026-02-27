import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed rounded-full active:scale-95";
  
  const variants = {
    primary: "bg-black text-white hover:bg-black/80 hover:shadow-lg",
    secondary: "bg-accent text-black hover:bg-accent/80",
    outline: "border border-black/10 bg-white text-black hover:border-black hover:bg-black hover:text-white",
    ghost: "text-black hover:bg-black/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};