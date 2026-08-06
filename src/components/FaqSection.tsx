import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
const faqs = [
  {
    q: "¿Es un producto físico o digital?",
    a: "Es un producto 100% digital. Recibís acceso inmediato al material después de la compra para descargarlo y usarlo desde tu computadora, tablet o celular.",
  },
  {
    q: "¿Sirve si estoy en tratamiento médico?",
    a: "Sí. El Megapack es un sistema de organización alimentaria y guía práctica. No reemplaza la indicación de tu médico o nutricionista, sino que la complementa con herramientas concretas para el día a día.",
  },
  {
    q: "¿Necesito saber cocinar para usarlo?",
    a: "No. El recetario tiene platos de 5 ingredientes o menos, pensados para personas sin tiempo y sin experiencia culinaria avanzada.",
  },
  {
    q: "¿Cuándo recibo el acceso?",
    a: "De forma inmediata. En menos de 5 minutos después de completar tu pago recibís todo el material en tu correo electrónico.",
  },
  {
    q: "¿El precio es en pesos argentinos?",
    a: "Sí. El precio es de $19.990 ARS, pago único, sin suscripción ni cargos adicionales.",
  },
  {
    q: "¿Reemplaza una consulta médica o nutricional?",
    a: "No. El Megapack es una herramienta educativa y de organización. Siempre es recomendable trabajar en paralelo con un profesional de la salud.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#566049] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            Preguntas Frecuentes
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2f3a2c] leading-tight">
            Respondemos{" "}
            <em className="text-[#c06a52] font-bold italic">tus preguntas</em>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm shadow-black/5"
              >
                <button
                  className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-[#2f3a2c] text-lg md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-[#566049] text-white flex items-center justify-center transition-colors"
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-7 -mt-1 text-slate-600 leading-relaxed text-[15px] md:text-base max-w-[58ch]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
