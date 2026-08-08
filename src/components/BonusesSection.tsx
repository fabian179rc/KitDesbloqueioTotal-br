import React from "react";
import { motion } from "framer-motion";
const bonuses = [
  {
    num: 1,
    title: "Checklist: Onde sua Vida está Travada?",
    desc: "Diagnóstico completo de 10 perguntas para identificar exatamente qual área está bloqueada e qual tipo de dívida kármica está ativa na sua vida agora.",
    image: "/b1.webp",
  },
  {
    num: 2,
    title: "Calendário Lunar de Limpeza e Prosperidade 2024/25",
    desc: "Saiba exatamente em quais fases da lua e dias específicos o portal espiritual está mais aberto para realizar seus rituais com 10x mais poder.",
    image: "/b2.webp",
  },
  {
    num: 3,
    title: "Manual de Socorro Espiritual: Ação 24 Horas",
    desc: "Para momentos de crise aguda. Rituais simples com elementos que você tem em casa para estancar a energia negativa e trazer alívio imediato quando a situação aperta.",
    image: "/b3.webp",
  },
  {
    num: 4,
    title: "Decreto de Poder: O Script da Libertação Total",
    desc: "O texto exato, palavra por palavra, para declarar sua independência espiritual. Uma oração poderosa de revogação de contratos de pobreza e sofrimento selados no passado.",
    image: "/b4.webp",
  },
  {
    num: 5,
    title: "O Imã de Dinheiro na sua Carteira",
    desc: "Como consagrar o local onde você guarda seu dinheiro usando símbolos sagrados e organização energética para que sua carteira nunca fique vazia.",
    image: "/b5.webp",
  },
];

export function BonusesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          {/* <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            <Gift className="w-4 h-4 text-[#d4a017]" />
            5 Bônus Incluídos
          </span> */}
          <h2 className="font-heading font-bold text-[#2f3a2c] text-3xl md:text-5xl leading-tight">
            5 Bônus Incluídos{" "}
            <span className="italic text-[#5C6851]">Sem Custo Adicional</span>
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
                  Bônus {b.num}
                </span>
                <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 bg-emerald-600 text-white font-bold text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-md shadow-sm">
                  🎁 Grátis
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
