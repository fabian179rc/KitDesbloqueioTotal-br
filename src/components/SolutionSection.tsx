import React from "react";
import { motion } from "framer-motion";
export function SolutionSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="mb-6">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            LA SOLUZIONE CHE ASPETTAVI — UN SISTEMA COMPLETO IN UNO
          </span>
          <h2 className="font-heading md:text-5xl font-bold text-[#2f3a2c] mb-6 max-w-3xl mx-auto text-[24px]">
            Gran Pacchetto Meccanica Kids:{" "}
            <span className="text-[#5C6851]">
              un sistema completo, pronto da usare dal primo giorno
            </span>
          </h2>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-6"
        >
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${import.meta.env.BASE_URL}megapack-sibo-mockup.png`}
              width={1536}
              height={1024}
            />
            <img
              src={`${import.meta.env.BASE_URL}megapack-sibo-mockup-mobile.png`}
              alt="Gran Pacchetto Meccanica Kids"
              width={1254}
              height={1254}
              loading="lazy"
              decoding="async"
              className="w-full h-auto max-w-2xl mx-auto rounded-2xl shadow-xl shadow-navy/5 border border-slate-100"
            />
          </picture>
        </motion.div>

        <div className="bg-white/60 border border-amber-100 text-[#2f3a2c] rounded-3xl p-6 md:p-8 shadow-sm">
          <p className="md:text-xl font-medium text-slate-700 text-[16px]">
            Con questo sistema potrai insegnare senza preparazione, mantenere
            alta l'attenzione, creare un ricordo indelebile e spiegare
            concetti complessi in modo semplice — tutto pronto da usare dal
            primo giorno.
          </p>
        </div>
      </div>
    </section>
  );
}
