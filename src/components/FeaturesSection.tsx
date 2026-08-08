import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const features = [
  {
    title: "✅ Limpeza Espiritual Profunda Sem Sair de Casa",
    desc: "Rituais guiados passo a passo com elementos simples que você já tem em casa, sem depender de terceiros.",
  },
  {
    title: "✅ Quebra de Contratos de Escassez e Sofrimento",
    desc: "Decretos e rituais específicos para encerrar dívidas espirituais que bloqueiam sua prosperidade e paz.",
  },
  {
    title: "✅ Controle Total do Seu Processo de Desbloqueio",
    desc: "Um calendário e checklist diário mostram exatamente o que fazer a cada um dos 7 dias, sem adivinhação.",
  },
  {
    title: "✅ Paz e Leveza Real a Partir do Dia 1",
    desc: "Cada etapa do protocolo já traz orientação, ritual, decreto e confirmação de fechamento prontos.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2f3a2c]">
            O QUE VOCÊ VAI CONQUISTAR COM ESTE KIT?
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
