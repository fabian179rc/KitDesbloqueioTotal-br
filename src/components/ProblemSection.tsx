import React from "react";
import { motion } from "framer-motion";
const situations = [
  {
    emoji: "🗂️",
    title: "Nessun materiale adatto all'età",
    desc: "I libri tecnici sono troppo complicati. I cartoni sono troppo infantili. Non esiste una via di mezzo che insegni davvero.",
  },
  {
    emoji: "⏱️",
    title: "Attività che durano 5 minuti",
    desc: "Inizi a spiegare il motore, il bambino si annoia e torna al telefono. Non hai uno schema da seguire.",
  },
  {
    emoji: "📌",
    title: "La passione non si trasmette",
    desc: "Ami i motori, ma non riesci a trasformare quell'amore in qualcosa di concreto e condiviso con tuo figlio.",
  },
  {
    emoji: "🎯",
    title: "Momenti persi che non tornano",
    desc: "I bambini crescono in fretta. Ogni domenica senza una vera attività insieme è un'opportunità che non si recupera.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#2f3a2c] uppercase">
            Il tempo con tuo figlio finisce sempre davanti a uno schermo?
          </h2>
          <p className="text-xl font-bold text-[#5C6851] mb-4 italic">
            ⚡ Non è un problema di tempo. È un problema di strumenti.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Vuoi trasmettere la tua passione per i motori, ma ogni domenica
            passa tra cartoni animati e tablet. Se sei un genitore, nonno o
            zio appassionato di auto, probabilmente hai già vissuto queste
            situazioni:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {situations.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.1,
              }}
              className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200"
            >
              <div className="flex items-center gap-2 mb-2 sm:block sm:mb-0">
                <span className="text-xl sm:text-3xl sm:mb-3 sm:block">
                  {item.emoji}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#2f3a2c] sm:mb-2">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-snug sm:leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
