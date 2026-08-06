import React from "react";
import { BookOpen } from "lucide-react";

interface ProductCoverPlaceholderProps {
  className?: string;
}

export function ProductCoverPlaceholder({
  className = "",
}: ProductCoverPlaceholderProps) {
  return (
    <div
      className={`aspect-square w-full rounded-2xl bg-gradient-to-br from-[#4A553F] to-[#2f3a2c] border border-white/10 shadow-xl flex flex-col items-center justify-center text-center p-8 ${className}`}
    >
      <BookOpen className="w-12 h-12 text-[#d4a017] mb-4" aria-hidden="true" />
      <span className="uppercase tracking-[0.2em] text-[10px] text-[#d4a017] font-bold mb-2">
        Megapack
      </span>
      <span className="font-heading text-white font-extrabold text-2xl leading-tight">
        SIBO: El Método
        <br />
        Anti-Inflamación
      </span>
      <span className="mt-4 text-white/50 text-[11px]">
        Mockup provisorio — reemplazar por imagen final
      </span>
    </div>
  );
}
