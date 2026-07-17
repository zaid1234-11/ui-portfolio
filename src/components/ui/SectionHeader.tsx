import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface SectionHeaderProps {
  icon?: LucideIcon;
  kicker: string;
  title?: React.ReactNode;
  description?: string;
  className?: string;
}

export function SectionHeader({ icon: Icon, kicker, title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-5 h-5 text-[#B8925A]" />}
        <h2 className="font-mono text-xs tracking-[0.2em] uppercase font-bold text-[#B8925A]">
          {kicker}
        </h2>
      </div>
      {title && (
        <h3 className="font-display text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[#FAF6EE] drop-shadow-[0_2px_0_rgba(0,0,0,0.8)]">
          {title}
        </h3>
      )}
      {description && (
        <p className="max-w-2xl text-[#ECE3D2]/80 leading-relaxed font-light italic">
          {description}
        </p>
      )}
    </div>
  );
}
