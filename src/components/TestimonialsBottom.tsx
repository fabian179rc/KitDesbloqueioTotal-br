import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
const testimonials = [
{
  initial: 'C',
  color: 'bg-pink-100 text-pink-700',
  name: 'Carlos R.',
  location: 'Buenos Aires · -12kg grasa / +1kg músculo',
  text: 'Bajé 12kg pero mi piel se veía horrible. Con el Protocolo GLP-1 recuperé la firmeza y hoy entreno con más fuerza que antes de empezar.'
},
{
  initial: 'M',
  color: 'bg-blue-100 text-blue-700',
  name: 'Mariela S.',
  location: 'Córdoba · Transformación facial y firmeza',
  text: 'Mi médico me felicitó pero yo odiaba mi cara en las fotos. La guía Anti Rostro Hundido fue clave. Bajé de peso sin parecer 10 años más vieja.'
},
{
  initial: 'R',
  color: 'bg-emerald-100 text-emerald-700',
  name: 'Rodrigo M.',
  location: 'Lima · Mantenimiento post-tratamiento',
  text: 'Tenía terror de dejar la inyección. Seguí el Exit Strategy y no solo mantuve el peso — seguí bajando sin el fármaco.'
}];

export function TestimonialsBottom() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 flex flex-col items-center">
          <MessageCircle className="w-10 h-10 text-[#d4a017] mb-3" />
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            Lo que otros ya están viviendo
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#2f3a2c] mb-3">
            Lo que quienes ya tienen el Protocolo están diciendo
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            No lo decimos nosotros — esto es lo que escriben por su cuenta.
            <br className="hidden sm:block" />
            ⭐ 4.9/5 — +1.200 usuarios en LATAM · México · Colombia ·
            Argentina · Chile
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
