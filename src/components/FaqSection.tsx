import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
const faqs = [
  {
    q: "È un prodotto fisico o digitale?",
    a: "È un prodotto 100% digitale. Riceverai l'accesso immediato al materiale dopo l'acquisto per scaricarlo e stamparlo da casa tua.",
  },
  {
    q: "Per che età è adatto?",
    a: "Il Gran Pacchetto è progettato per bambini dai 6 ai 12 anni. I contenuti sono spiegati con un linguaggio semplice e progressivo.",
  },
  {
    q: "Devo avere conoscenze meccaniche per usarlo?",
    a: "No. Il kit è pensato anche per genitori che non sanno nulla di meccanica. Le spiegazioni sono chiare e guidano sia l'adulto che il bambino.",
  },
  {
    q: "Quando ricevo l'accesso?",
    a: "Immediatamente dopo il pagamento. Riceverai un link per scaricare tutti i file PDF direttamente nella tua email.",
  },
  {
    q: "Funziona senza stampante?",
    a: "Sì. Puoi usare la guida principale direttamente dallo schermo. Alcuni bonus (flashcards, poster, diploma) sono pensati per la stampa ma possono essere usati anche in digitale.",
  },
  {
    q: "Il contenuto è in italiano?",
    a: "Sì, tutto il materiale è scritto in italiano corretto, con un linguaggio adatto ai bambini e accessibile per i genitori.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#566049] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            Domande Frequenti
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2f3a2c] leading-tight">
            Rispondiamo{" "}
            <em className="text-[#c06a52] font-bold italic">alle tue domande</em>
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
