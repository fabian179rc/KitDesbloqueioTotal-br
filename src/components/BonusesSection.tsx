import React from "react";
import { motion } from "framer-motion";
const bonuses = [
  {
    num: 1,
    title: "Il Diario dell'Officina",
    desc: "Il bambino registra i \"lavori\" fatti sull'auto di famiglia. Ogni visita sotto il cofano diventa un'esperienza documentata e ricordata.",
    image: "/bono1.webp",
  },
  {
    num: 2,
    title: "Flashcards delle Parti",
    desc: "24 carte da ritagliare con illustrazione e definizione lampo. Impara i nomi tecnici giocando a indovinare, come un vero ingegnere.",
    image: "/bono2.webp",
  },
  {
    num: 3,
    title: "Poster Anatomia dell'Auto",
    desc: "Un'infografica A4 stampabile da appendere in cameretta. Vista \"a raggi X\" dell'auto con tutti i componenti etichettati in italiano.",
    image: "/bono3.webp",
  },
  {
    num: 4,
    title: "Missione Meccanica — La Sfida dei 7 Giorni",
    desc: "Un calendario di 7 missioni reali da completare insieme. Dal riconoscere i loghi allo spiegare il motore: ogni giorno un obiettivo concreto.",
    image: "/bono4.webp",
  },
  {
    num: 5,
    title: "La Patente di Piccolo Meccanico",
    desc: "Il diploma ufficiale personalizzabile da stampare e consegnare. Il premio finale che celebra tutto ciò che il bambino ha imparato.",
    image: "/bono5.webp",
  },
];

export function BonusesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          {/* <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            <Gift className="w-4 h-4 text-[#d4a017]" />
            5 Bonos Incluidos
          </span> */}
          <h2 className="font-heading font-bold text-[#2f3a2c] text-3xl md:text-5xl leading-tight">
            5 Bonus Inclusi{" "}
            <span className="italic text-[#5C6851]">Senza Costo Aggiuntivo</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.08,
              }}
              className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm"
            >
              <div className="relative rounded-xl overflow-hidden mb-3 bg-[#f4efe2] flex items-center justify-center py-6 sm:py-0">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 bg-rose-500 text-white font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                  Bono {b.num}
                </span>
                <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 bg-emerald-600 text-white font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                  🎁 Gratis
                </span>
              </div>
              <div className="px-2 pb-2">
                <p className="text-slate-600 text-sm leading-snug">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
