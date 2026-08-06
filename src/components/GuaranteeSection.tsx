import React from "react";
import { ShieldCheck } from "lucide-react";
export function GuaranteeSection() {
  return (
    <section className="py-8 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="mb-6 md:mb-8">
          <span className="inline-block px-4 py-2 mb-4 md:px-6 md:py-2.5 md:mb-5 rounded-full border border-white/40 bg-[#566049] text-white font-semibold tracking-[0.18em] uppercase text-[10px] md:text-xs">
            Tu inversión está 100% protegida
          </span>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-[#2f3a2c] flex items-center justify-center gap-2 md:gap-3">
            <ShieldCheck className="w-7 h-7 md:w-10 md:h-10 text-[#d4a017]" />
            Garantía Incondicional de 7 Días
          </h2>
        </div>

        <div className="bg-white/60 border border-amber-100 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm">
          <h3 className="text-base md:text-xl font-bold text-[#2f3a2c] mb-2 md:mb-3">
            Sin formularios, sin excusas
          </h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
            Tenés 7 días para revisar el sistema completo. Si no es
            exactamente lo que prometemos, te devolvemos el 100% de tu
            dinero.
          </p>
          <div className="inline-flex bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-amber-200 text-[#6f7a64] font-bold text-xs md:text-sm shadow-sm">
            Riesgo Cero Garantizado
          </div>
        </div>
      </div>
    </section>
  );
}
