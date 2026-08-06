import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Zap, CreditCard } from "lucide-react";
import { getCheckoutUrl } from "../utils/checkoutUrl";
export function FinalPricingCTA() {
  return (
    <section className="py-10 md:py-14 bg-transparent text-[#2f3a2c] text-center relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#d4a017]/10 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="mb-5">
          <span className="inline-block px-6 py-2.5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            Última Oportunidad
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#2f3a2c] mb-5 leading-tight">
          Tu transformación merece terminar con un cuerpo{" "}
          <span className="text-[#B85C43]">
            firme, atlético y un metabolismo blindado
          </span>
          .
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          El sistema completo. Más resultados reales y menos dinero perdido
          en protocolos mal armados.
        </p>

        <div className="bg-white border border-amber-100 rounded-3xl p-6 md:p-7 shadow-lg shadow-black/5 max-w-xl mx-auto mb-6">
          <h3 className="font-bold text-[#2f3a2c] mb-2 text-lg md:text-xl">
            Kit Completo: Protocolo GLP-1 Sin Rebote + 5 Bonos GRATIS
          </h3>
          <div className="text-slate-500 line-through mb-2">USD 97</div>
          <div className="text-4xl font-bold text-[#B85C43] mb-6">$19 USD</div>
          <motion.a
            href={getCheckoutUrl()}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-2 md:gap-3 w-full bg-[#B85C43] hover:bg-[#A34F38] text-white font-bold text-[13px] md:text-xl px-4 py-3.5 md:px-6 md:py-5 rounded-full shadow-lg shadow-[#B85C43]/30 transition-colors mb-4"
          >
            <span className="text-center">🚀 SÍ, QUIERO MI PROTOCOLO COMPLETO HOY</span>
            <ArrowRight className="w-4 h-4 md:w-6 md:h-6 flex-shrink-0" />
          </motion.a>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-2.5 sm:gap-x-6 sm:gap-y-3 justify-center items-center text-sm text-slate-500 font-medium">
          <span className="flex items-center justify-center gap-1.5">
            <Star
              className="w-4 h-4 fill-[#d4a017] text-[#d4a017]"
              aria-hidden="true"
            />
            4.9/5 — Reseñas verificadas
          </span>
          <span className="flex items-center justify-center gap-1.5">
            <ShieldCheck
              className="w-4 h-4 text-[#4A7CB5]"
              aria-hidden="true"
            />
            Garantía de 7 Días
          </span>
          <span className="flex items-center justify-center gap-1.5">
            <Zap className="w-4 h-4 text-[#E8A23D]" aria-hidden="true" />
            Acceso inmediato
          </span>
          <span className="flex items-center justify-center gap-1.5">
            <CreditCard className="w-4 h-4 text-[#4A7CB5]" aria-hidden="true" />
            Pago único
          </span>
        </div>
      </div>
    </section>
  );
}
