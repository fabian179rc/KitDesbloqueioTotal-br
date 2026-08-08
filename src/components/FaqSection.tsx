import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
const faqs = [
  {
    q: "É em papel ou digital?",
    a: "É um produto 100% digital. Você recebe todos os módulos de forma imediata no seu e-mail, com o guia principal, os 5 bônus e todo o material pronto para usar e imprimir em casa ou em qualquer gráfica quantas vezes precisar.",
  },
  {
    q: "Preciso ter alguma religião específica para usar?",
    a: "Não. O protocolo é baseado em princípios espirituais universais. Ele é compatível com o Espiritismo, o Catolicismo, a Umbanda, o Candomblé ou qualquer outra crença. O que importa é a sua intenção.",
  },
  {
    q: "Funciona para qualquer pessoa no Brasil?",
    a: "Sim. O kit foi desenvolvido para qualquer pessoa que sente que sua vida está bloqueada, independentemente da sua região, idade ou situação financeira atual.",
  },
  {
    q: "E se eu já tiver feito rituais antes sem resultado?",
    a: "O diferencial deste kit é o método. Não são rituais soltos; é um protocolo sequencial de 7 dias onde cada passo prepara o terreno para o próximo. A ordem importa e faz toda a diferença.",
  },
  {
    q: "Quando recebo o material?",
    a: "Imediatamente após a confirmação do pagamento. Via PIX, o acesso é liberado em segundos. Você receberá um e-mail com o link de acesso a todos os arquivos.",
  },
  {
    q: "E se eu não tiver tempo para fazer tudo em 7 dias?",
    a: "Sem problema. O acesso é vitalício. Você pode seguir o protocolo no seu próprio ritmo, pausar e retomar quando quiser.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#566049] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            Perguntas Frequentes
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#2f3a2c] leading-tight">
            Respondemos{" "}
            <em className="text-[#c06a52] font-bold italic">suas dúvidas</em>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm shadow-black/5"
              >
                <button
                  className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-[#2f3a2c] text-lg md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full bg-[#566049] text-white flex items-center justify-center transition-colors"
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-7 -mt-1 text-slate-600 leading-relaxed text-[15px] md:text-base max-w-[58ch]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
