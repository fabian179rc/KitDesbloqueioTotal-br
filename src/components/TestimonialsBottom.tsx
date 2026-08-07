import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
const testimonials = [
{
  initial: 'M',
  color: 'bg-pink-100 text-pink-700',
  name: 'Marco T.',
  location: 'Papà appassionato di auto, Milano',
  text: 'Non sapevo come spiegare il motore a mio figlio di 8 anni. Con questo kit abbiamo passato tutto il sabato pomeriggio sotto il cofano. Alla fine mi ha spiegato lui i 4 tempi.'
},
{
  initial: 'L',
  color: 'bg-blue-100 text-blue-700',
  name: 'Laura B.',
  location: 'Mamma, Torino',
  text: 'Il Diploma finale è stato il momento più bello. Mio figlio lo ha appeso in camera e lo mostra a tutti. Vale già solo per quello.'
},
{
  initial: 'G',
  color: 'bg-emerald-100 text-emerald-700',
  name: 'Giuseppe R.',
  location: 'Nonno, Napoli',
  text: 'Mio nipote di 7 anni ha completato la sfida dei 7 giorni prima di me. Le flashcards le usa ancora per "interrogarmi" la domenica.'
}];

export function TestimonialsBottom() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 flex flex-col items-center">
          <MessageCircle className="w-10 h-10 text-[#d4a017] mb-3" />
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            Cosa dicono altri genitori
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#2f3a2c] mb-3">
            Le parole di chi ha già il Gran Pacchetto
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Non lo diciamo noi — questo è quello che scrivono loro.
            <br className="hidden sm:block" />
            ⭐ 4.9/5 — Valutazione dei genitori
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) =>
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
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col h-full">

              <div className="flex text-[#d4a017] mb-3">
                {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
              )}
              </div>

              <p className="text-slate-700 text-[15px] leading-relaxed mb-4 italic flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-center border-t border-slate-100 pt-3 mt-auto">
                <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${t.color} mr-3 flex-shrink-0`}>

                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-[#2f3a2c] text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
