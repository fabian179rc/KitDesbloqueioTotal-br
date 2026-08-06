import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Zap, CreditCard } from "lucide-react";
import { scrollToOffer } from "../utils/scrollToOffer";
export function HeroSection() {
  return (
    <section className="relative md:min-h-[100svh] flex flex-col justify-start md:justify-center overflow-hidden bg-transparent py-6">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"
      >
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-[#d4a017]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-[8px]"
        >
          ✨ Protocolo Completo — Biohacking & GLP-1
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="font-heading md:text-5xl font-extrabold text-[#2f3a2c] mb-0 text-[21px] leading-[1.15] md:leading-[normal]"
        >
          ¿Y si el verdadero problema empezara
          <br />
          <span className="text-[#B85C43]">
            cuando termines el tratamiento?
          </span>
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mx-auto mb-0 w-full max-w-[400px] sm:max-w-md md:max-w-[836px]"
        >
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${import.meta.env.BASE_URL}protocolo-glp1-mockup.webp`}
            />
            <img
              src={`${import.meta.env.BASE_URL}protocolo-glp1-mockup-mobile.webp`}
              alt="Protocolo GLP-1 Sin Rebote"
              width={1254}
              height={1254}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto rounded-2xl"
            />
          </picture>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="max-w-2xl mx-auto mt-0 mb-2"
        >
          <p className="hidden md:block text-slate-600 md:text-lg leading-relaxed">
            El manual técnico que tu médico no te dio — para transformarte de
            verdad con tu tratamiento GLP-1.
          </p>
          <p className="font-semibold text-[#2f3a2c] text-[14px] md:text-lg leading-relaxed md:mt-2">
            <span className="md:hidden">
              💪 Preservá tu músculo · ✨ Protegé tu piel · 🛡️ Blindá tu
              metabolismo frente al GLP-1
            </span>
            <span className="hidden md:inline">
              💪 Preservá tu músculo · ✨ Protegé tu piel · 🛡️ Blindá tu
              metabolismo contra el rebote
            </span>
          </p>
          <p className="text-slate-500 text-[11px] md:text-sm mt-1 md:mt-2">
            Sin horas en el gimnasio. Sin dietas imposibles.
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="flex flex-col items-center mt-3"
        >
          <motion.a
            href="#comprar"
            onClick={scrollToOffer}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto bg-[#B85C43] hover:bg-[#A34F38] text-white font-bold px-5 sm:px-8 py-4 rounded-full shadow-lg shadow-[#B85C43]/30 transition-colors mb-5 text-[13px] sm:text-[16px] whitespace-nowrap"
          >
            🚀 QUIERO EL PROTOCOLO COMPLETO
          </motion.a>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-0.5 sm:gap-x-6 sm:gap-y-3 justify-center items-center text-xs sm:text-sm font-medium text-slate-600">
            <span className="flex items-center justify-center gap-1 sm:gap-1.5">
              <Star
                className="w-3 h-3 sm:w-4 sm:h-4 fill-[#d4a017] text-[#d4a017]"
                aria-hidden="true"
              />
              4.9/5 — Reseñas verificadas
            </span>
            <span className="flex items-center justify-center gap-1 sm:gap-1.5">
              <ShieldCheck
                className="w-3 h-3 sm:w-4 sm:h-4 text-[#4A7CB5]"
                aria-hidden="true"
              />
              Garantía de 7 Días
            </span>
            <span className="flex items-center justify-center gap-1 sm:gap-1.5">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[#E8A23D]" aria-hidden="true" />
              Acceso inmediato
            </span>
            <span className="flex items-center justify-center gap-1 sm:gap-1.5">
              <CreditCard
                className="w-3 h-3 sm:w-4 sm:h-4 text-[#4A7CB5]"
                aria-hidden="true"
              />
              Pago único
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
