import React from 'react';
import { motion } from 'framer-motion';
const situations = [
{
  emoji: '🗂️',
  title: 'Información desordenada',
  desc: 'Artículos sueltos, videos contradictorios y listas en distintos lados. Cada vez que necesitás orientarte, perdés tiempo y terminás más confundida.'
},
{
  emoji: '⏱️',
  title: 'Comidas que toman demasiada energía mental',
  desc: 'Cada salida, cada almuerzo en el trabajo o cada cena en familia se convierte en horas de cálculo y ansiedad anticipatoria.'
},
{
  emoji: '📌',
  title: 'Síntomas que quedan sin resolver',
  desc: 'Detectás que algo te cae mal, pero no siempre queda claro cuál fue el alimento, en qué cantidad y cómo evitarlo sin resignar todo.'
},
{
  emoji: '🎯',
  title: 'Sensación de que nada funciona de verdad',
  desc: 'Probaste eliminar, restringir, suplementar. Y aun así seguís terminando el día desabrochándote el pantalón por el dolor.'
}];

export function ProblemSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#2f3a2c] uppercase">
            ¿Te reconocés en esto?
          </h2>
          <p className="text-xl font-bold text-[#5C6851] mb-4 italic">
            Sabés identificar cuándo te inflama algo, pero cada comida es
            adivinar qué estuvo mal.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Si tenés SIBO diagnosticado o síntomas compatibles como hinchazón,
            gases, distensión abdominal o miedo a comer, probablemente ya
            viviste esto:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {situations.map((item, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.1
            }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">

              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="text-lg font-bold text-[#2f3a2c] mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
