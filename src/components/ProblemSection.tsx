import React from 'react';
import { motion } from 'framer-motion';
const situations = [
{
  emoji: '😰',
  title: 'El Espejo que No Miente',
  desc: 'Bajás kilos, pero tu piel cuelga y tu cara se ve demacrada. El "rostro hundido" del tratamiento GLP-1 ya apareció.'
},
{
  emoji: '😩',
  title: 'La Fuerza que Desaparece',
  desc: 'Subir escaleras te agota. Cargás menos. Estás perdiendo músculo junto con la grasa.'
},
{
  emoji: '⚖️',
  title: 'El Miedo al Rebote',
  desc: '¿Qué pasa cuando dejes la inyección? ¿Tu cuerpo va a recuperar todo — y más?'
},
{
  emoji: '⏱️',
  title: 'La Inversión que No Rinde',
  desc: 'Pagás $200–$400 USD por mes en el fármaco sin obtener el cuerpo atlético que imaginabas.'
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
            Bajás de peso... ¿pero a qué costo?
          </p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Si usás Semaglutida, Tirzepatida o cualquier agonista GLP-1,
            probablemente vivís alguna de estas situaciones:
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
