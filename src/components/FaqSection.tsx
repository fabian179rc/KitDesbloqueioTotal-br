import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
const faqs = [
  {
    q: "¿Sirve si recién empecé el tratamiento?",
    a: "Sí, y es el momento ideal. Aplicar el protocolo desde el inicio es la diferencia entre terminar con un cuerpo atlético o uno flácido.",
  },
  {
    q: "¿Tengo que hacer una dieta estricta?",
    a: "No. La guía te enseña a optimizar lo poco que comés por la falta de hambre, para que cada bocado preserve tu músculo.",
  },
  {
    q: "¿Es seguro? ¿Puedo tener problemas?",
    a: "100% legal. Son protocolos de nutrición, entrenamiento y suplementación basados en estudios PubMed. No reemplaza la orientación médica.",
  },
  {
    q: "¿Cuándo recibo el material?",
    a: "Acceso inmediato al finalizar el pago. Recibís todo en tu correo, listo para usar en cualquier dispositivo.",
  },
  {
    q: "Ya llevo meses con el tratamiento y noto flacidez. ¿Sirve igual?",
    a: "Sí. Nunca es tarde para proteger tu músculo. De hecho, si ya notás flacidez, es más urgente empezar hoy.",
  },
  {
    q: "¿Puedo pedir reembolso?",
    a: "Sí. 7 días de garantía incondicional. Si no quedás satisfecho, te devolvemos el 100% sin preguntas.",
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
