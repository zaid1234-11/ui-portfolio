import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'glass' | 'icon';
  isLoading?: boolean;
  id?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  icon: Icon, 
  variant = 'primary', 
  isLoading, 
  className = '', 
  ...props 
}: ButtonProps) {
  
  const baseStyles = "transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8925A] cursor-pointer";
  
  const variants = {
    primary: "w-full flex items-center justify-center gap-2 bg-[#FAF6EE] hover:bg-[#B8925A] disabled:bg-white/10 text-[#1c1c1b] hover:text-[#FAF6EE] font-display text-sm tracking-widest uppercase font-black py-4 rounded-full active:scale-95 shadow-lg",
    secondary: "font-mono text-[9px] tracking-widest text-[#ECE3D2]/60 hover:text-[#FAF6EE] border border-white/5 hover:border-white/15 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10",
    glass: "glass-button",
    icon: "flex items-center gap-2 font-mono text-xs text-[#1c1c1b] hover:text-[#B8925A] uppercase tracking-widest"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
      ) : Icon && variant !== 'icon' ? (
        <Icon className="w-4 h-4" />
      ) : Icon && variant === 'icon' ? (
        <Icon className="w-4 h-4 text-[#B8925A]" />
      ) : null}
      
      {variant !== 'icon' ? children : (
        <span>{children}</span>
      )}
    </button>
  );
}
