import React from "react";
import { motion } from "framer-motion";
const situations = [
  {
    emoji: "😰",
    title: "A Sensação de Que Nada Funciona",
    desc: "Você se esforça, trabalha duro, faz tudo certo... mas o dinheiro some e os problemas aparecem do nada.",
  },
  {
    emoji: "😩",
    title: "O Medo de Que a Situação Piore",
    desc: "E se esse bloqueio não for embora? E se continuar perdendo oportunidades por causa de uma dívida espiritual que você nem sabia que tinha?",
  },
  {
    emoji: "⚖️",
    title: "O Peso de Carregar o Passado",
    desc: "Aquela sensação de culpa, de \"pagar por algo que você não lembra\", de estar sempre devendo algo a alguém ou ao universo.",
  },
  {
    emoji: "⏱️",
    title: "O Cansaço de Tentar Sem Ver Resultado",
    desc: "Já tentou pensamento positivo, orações, promessas... mas a maré de azar continua.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#2f3a2c] uppercase">
            Você Sente Que Sua Vida Está "Travada" Sem Motivo Aparente?
          </h2>
          <p className="text-xl font-bold text-[#5C6851] mb-4 italic">
            ⚡ Você se reconhece nisso?
          </p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Se você busca equilíbrio espiritual e prosperidade, provavelmente
            vive alguma dessas situações:
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
