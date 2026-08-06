import React from 'react';
import { motion } from 'framer-motion';
import { PackageOpen, CheckCircle2 } from 'lucide-react';

const temas = [
  { emoji: '🔍', label: 'Rescate en Crisis' },
  { emoji: '🚦', label: 'Semáforo de Alimentos' },
  { emoji: '📋', label: '3 Fases Anti-Inflamación' },
  { emoji: '🔄', label: 'Intercambios Rápidos' },
  { emoji: '🍳', label: 'Recetas 5 Ingredientes' },
  { emoji: '📊', label: 'Diario de Síntomas' },
  { emoji: '🛒', label: 'Súper Argentino' },
  { emoji: '✅', label: 'Checklist de Arranque' },
  { emoji: '🏷️', label: 'Lectura de Etiquetas' },
  { emoji: '🗓️', label: 'Planner Semanal' },
  { emoji: '🍽️', label: 'Porciones Visuales' },
  { emoji: '🧳', label: 'Comer Fuera de Casa' },
];

const adaptabilidad = [
  { emoji: '🇦🇷', label: 'Adaptado a supermercados argentinos' },
  { emoji: '📋', label: 'Protocolos prácticos y listos para aplicar' },
  { emoji: '👩', label: 'Pensado para mujeres con SIBO' },
];

const incluye = [
  '🔍 Protocolo de Rescate 24 Horas — Llegás a una crisis con estructura, sin improvisar ni entrar en pánico',
  '⚠️ Semáforo de Supermercado Argentino — Listas listas para adaptar a cualquier góndola del Coto, Jumbo o Carrefour',
  '📋 Guía de las 3 Fases Anti-Inflamación — No arrancás de cero, seguís el mapa en minutos',
  '🔎 Matriz de Intercambio Rápido — Reemplazos listos para aplicar hoy con lo que ya tenés en casa',
  '🚨 Recetario Cero Estrés — Platos de 5 ingredientes, claros y adaptados a Argentina',
  '📊 Diario de Síntomas Express — Registros que generan claridad y aceleran tu reintroducción',
];

export function ContentSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            <PackageOpen className="w-4 h-4 text-[#d4a017]" />
            ¿Qué contiene?
          </span>
          <h2 className="font-heading font-bold text-[#2f3a2c] text-3xl md:text-5xl leading-tight mb-4">
            ¿QUÉ CONTIENE EL MEGAPACK SIBO:{' '}
            <span className="text-[#5C6851]">EL MÉTODO ANTI-INFLAMACIÓN?</span>
          </h2>
          <p className="text-lg md:text-xl font-bold text-[#5C6851] max-w-2xl mx-auto">
            Todo lo que necesitás para ordenar tu digestión sin adivinar nada.
            🎯
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/60 border border-amber-100 rounded-3xl p-5 md:p-7 shadow-sm mb-6 text-center"
        >
          <p className="text-slate-700 text-[15px] md:text-lg leading-relaxed">
            📚 El{' '}
            <span className="font-bold text-[#5C6851]">
              Megapack SIBO: El Método Anti-Inflamación
            </span>{' '}
            reúne guías, protocolos, listas de compras, planners, checklists
            y reemplazos inteligentes, organizados en{' '}
            <span className="font-semibold text-[#2f3a2c]">6 módulos</span>,
            con{' '}
            <span className="font-semibold text-[#2f3a2c]">5 bonos incluidos</span>{' '}
            — todo en PDFs editables, imprimibles e interactivos.
          </p>
        </motion.div>

        <div className="mb-8">
          <h3 className="font-heading font-bold text-[#2f3a2c] text-xl md:text-2xl mb-4 text-center">
            🎯 Incluye los bloques más importantes del protocolo
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
            🎯 Práctico y adaptado a tu realidad
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
            🎯 Herramientas prácticas de organización y seguimiento
            alimentario, pensadas para adaptarse a tu rutina real. No
            reemplazan la indicación de tu médico o nutricionista — la
            complementan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-amber-100 rounded-3xl p-5 md:p-7 shadow-lg shadow-black/5"
        >
          <h3 className="font-heading font-bold text-[#2f3a2c] text-2xl md:text-3xl mb-5 text-center">
            ✨ Los 6 módulos del sistema:
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
