import React from 'react';
import { motion } from 'framer-motion';
import { PackageOpen, CheckCircle2 } from 'lucide-react';

const temas = [
  { emoji: '🔧', label: 'Il Motore a Scoppio' },
  { emoji: '⚙️', label: 'La Trasmissione' },
  { emoji: '🛑', label: 'Il Sistema Frenante' },
  { emoji: '🔘', label: 'Gli Pneumatici' },
  { emoji: '📖', label: 'Dizionario Tecnico' },
  { emoji: '🏆', label: 'Kit Bonus Operativo' },
  { emoji: '📓', label: "Diario dell'Officina" },
  { emoji: '🗂️', label: 'Flashcards delle Parti' },
  { emoji: '🖼️', label: "Poster Anatomia dell'Auto" },
  { emoji: '🎯', label: 'Sfida dei 7 Giorni' },
  { emoji: '🏅', label: 'Patente di Piccolo Meccanico' },
  { emoji: '👦', label: 'Per bambini dai 6 ai 12 anni' },
];

const adaptabilidad = [
  { emoji: '🖨️', label: 'Tutto stampabile da casa' },
  { emoji: '📖', label: 'Linguaggio semplice, adatto ai bambini' },
  { emoji: '👨‍👩‍👧', label: 'Anche per genitori senza esperienza meccanica' },
];

const incluye = [
  '🔧 Il Motore a Scoppio — Il ciclo a 4 tempi spiegato con analogie semplici e disegni',
  '⚙️ La Trasmissione — Come il movimento arriva dalle ruote senza formule complicate',
  "🛑 Il Sistema Frenante — Perché l'auto si ferma e come funzionano i dischi",
  '🔘 Gli Pneumatici — Perché le gomme hanno il disegno e come si legge l\'usura',
  '📖 Dizionario del Piccolo Ingegnere — 30+ termini tecnici spiegati con esempi di vita reale',
  '🏆 Kit Bonus Operativo — Diario, Flashcards, Poster, Sfida e Diploma inclusi',
];

export function ContentSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            <PackageOpen className="w-4 h-4 text-[#d4a017]" />
            Cosa include?
          </span>
          <h2 className="font-heading font-bold text-[#2f3a2c] text-3xl md:text-5xl leading-tight mb-4">
            COSA INCLUDE IL GRAN PACCHETTO{' '}
            <span className="text-[#5C6851]">MECCANICA KIDS?</span>
          </h2>
          <p className="text-lg md:text-xl font-bold text-[#5C6851] max-w-2xl mx-auto">
            Tutto il sistema in un solo prodotto. 🎯
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/60 border border-amber-100 rounded-3xl p-5 md:p-7 shadow-sm mb-6 text-center"
        >
          <p className="text-slate-700 text-[15px] md:text-lg leading-relaxed">
            📦 Il{' '}
            <span className="font-bold text-[#5C6851]">
              Gran Pacchetto Meccanica Kids
            </span>{' '}
            include guida illustrata, flashcards, poster, missioni e
            diploma, organizzati in{' '}
            <span className="font-semibold text-[#2f3a2c]">6 moduli</span>,
            con{' '}
            <span className="font-semibold text-[#2f3a2c]">5 bonus inclusi</span>{' '}
            — tutto stampabile, tutto pronto, tutto pensato per imparare
            giocando.
          </p>
        </motion.div>

        <div className="mb-8">
          <h3 className="font-heading font-bold text-[#2f3a2c] text-xl md:text-2xl mb-4 text-center">
            🎯 Include i blocchi più importanti del percorso
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {temas.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm"
              >
                <span className="text-xl flex-shrink-0" aria-hidden="true">
                  {t.emoji}
                </span>
                <span className="font-semibold text-[#2f3a2c] text-sm md:text-[15px] leading-tight">
                  {t.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#4A553F] rounded-3xl p-5 md:p-7 shadow-sm mb-8 text-center"
        >
          <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-5">
            🎯 Pratico e pensato per la tua famiglia
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {adaptabilidad.map((r, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-4 py-2 text-sm font-semibold"
              >
                <span aria-hidden="true">{r.emoji}</span>
                {r.label}
              </span>
            ))}
          </div>
          <p className="text-[#e6ddc7] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            🎯 Materiale pratico pensato per famiglie italiane, da usare con
            o senza esperienza meccanica pregressa. Qualsiasi attività con
            parti meccaniche reali va sempre svolta sotto la supervisione di
            un adulto responsabile.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-amber-100 rounded-3xl p-5 md:p-7 shadow-lg shadow-black/5"
        >
          <h3 className="font-heading font-bold text-[#2f3a2c] text-2xl md:text-3xl mb-5 text-center">
            ✨ I 6 moduli del sistema:
          </h3>
          <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 max-w-2xl mx-auto">
            {incluye.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 sm:gap-3 bg-emerald-50 border border-emerald-100 rounded-xl px-3 py-2 sm:px-4 sm:py-3"
              >
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-[#2f3a2c] text-[12px] sm:text-[15px] leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
