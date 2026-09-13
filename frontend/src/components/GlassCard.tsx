"use client";

import { Glass } from "@samasante/liquid-glass";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <Glass optics={{ strength: 0.5, dispersion: 0.05 }}>
      <div className={cn(
        "backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] shadow-2xl",
        className
      )}>
        {children}
      </div>
    </Glass>
  );
}
