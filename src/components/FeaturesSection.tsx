import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const features = [
  {
    title: "✅ Insegnare senza preparazione",
    desc: "Tutto è già strutturato. Apri il PDF e inizia subito, senza dover cercare materiali o inventare spiegazioni.",
  },
  {
    title: "✅ Mantenere alta l'attenzione",
    desc: "Missioni, flashcards e sfide giornaliere tengono il bambino coinvolto per ore, senza schermi.",
  },
  {
    title: "✅ Creare un ricordo indelebile",
    desc: "Il Diploma finale trasforma l'apprendimento in un momento di orgoglio per il bambino e per te.",
  },
  {
    title: "✅ Spiegare concetti complessi in modo semplice",
    desc: "Analogie visive e linguaggio accessibile fanno il lavoro difficile al posto tuo.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2f3a2c]">
            COSA POTRAI FARE CON QUESTO SISTEMA?
          </h2>
        </div>

        <ul className="space-y-4">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{
                opacity: 0,
                y: 8,
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
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1 text-[#d4a017]" />
              <p className="text-slate-600 leading-relaxed">
                <span className="font-bold text-[#2f3a2c] block">
                  {feature.title}
                </span>
                {feature.desc}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
