import React from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
const bonuses = [
  {
    num: 1,
    title: 'Calculadora de Macros "Antiflacidez"',
    desc: "Excel donde ingresás tu peso y dosis del fármaco y obtenés tus objetivos exactos de Proteína, Leucina y EAAs para prevenir la sarcopenia.",
    image: "bono1.webp",
  },
  {
    num: 2,
    title: 'Protocolo "Rostro Firme" & Skin Elasticity',
    desc: "Guía de péptidos (GHK-Cu, BPC-157) y suplementación oral para maximizar colágeno y elastina. Chau rostro demacrado y piel colgante.",
    image: "bono2.webp",
  },
  {
    num: 3,
    title: "The Exit Strategy — El Plan de Salida Sin Rebote",
    desc: "El manual para el día después de la última inyección. Cómo reintroducir calorías y mantener el peso perdido de por vida.",
    image: "bono3.webp",
  },
  {
    num: 4,
    title: "Guía de Stacking con Péptidos de Recuperación",
    desc: "Cómo combinar el GLP-1 con TB-500 y BPC-157 para entrenar con cargas incluso en déficit calórico agresivo.",
    image: "bono4.webp",
  },
  {
    num: 5,
    title: "Checklist de Eliminación de Efectos Secundarios",
    desc: "Protocolos rápidos para neutralizar náuseas, fatiga extrema y neblina mental. Seguí siendo productivo mientras perdés peso.",
    image: "bono5.webp",
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
            Y además, recibís{" "}
            <span className="italic text-[#5C6851]">5 bonos de alto valor</span>
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
              <div className="relative rounded-xl overflow-hidden mb-3 h-56 bg-[#f4efe2] flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}${b.image}`}
                  alt={`Bono ${b.num}: ${b.title}`}
                  width={400}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
                <span className="absolute top-2.5 left-2.5 bg-rose-500 text-white font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                  Bono {b.num}
                </span>
                <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 bg-emerald-600 text-white font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                  🎁 Gratis
                </span>
              </div>
              <div className="px-2 pb-2">
                <h3 className="hidden md:block font-heading font-bold text-[#2f3a2c] text-[15px] mb-1">
                  {b.title}
                </h3>
                <p className="text-slate-600 text-sm leading-snug">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center px-6 py-10 bg-white/60 border border-amber-100 rounded-3xl">
          <Gift className="w-9 h-9 text-[#d4a017] mx-auto mb-4" />
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#5C6851] mb-2">
            Todo incluido en
          </p>
          <h3 className="font-heading font-bold text-[#2f3a2c] text-3xl md:text-4xl mb-3">
            el Protocolo GLP-1 Sin Rebote
          </h3>
          <p className="text-slate-600">
            Los 5 bonos son gratis con tu compra hoy.
          </p>
        </div>
      </div>
    </section>
  );
}
