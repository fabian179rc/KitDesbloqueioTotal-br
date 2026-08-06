import React from 'react';
import { motion } from 'framer-motion';
import { PackageOpen, CheckCircle2 } from 'lucide-react';

const temas = [
  { emoji: '🔬', label: 'Fisiología GLP-1' },
  { emoji: '🥩', label: 'Nutrición Proteica' },
  { emoji: '🏋️', label: 'Entrenamiento EEM' },
  { emoji: '🧬', label: 'Péptidos BPC-157' },
  { emoji: '✨', label: 'Anti Rostro Hundido' },
  { emoji: '🧪', label: 'GHK-Cu Colágeno' },
  { emoji: '⚡', label: 'Electrolitos' },
  { emoji: '📊', label: 'Composición Corporal' },
  { emoji: '🔄', label: 'Exit Strategy' },
  { emoji: '🩸', label: 'Análisis de sangre' },
  { emoji: '💊', label: 'TB-500 Recuperación' },
  { emoji: '🧠', label: 'Flexibilidad Metabólica' },
];

const adaptabilidad = [
  { emoji: '📚', label: 'Referencias PubMed' },
  { emoji: '🚫', label: 'Sin opinión de internet' },
  { emoji: '🌎', label: 'Toda Latinoamérica' },
];

const incluye = [
  '🧬 Módulo 1 — La Trampa del GLP-1: por qué perdés músculo y cómo revertirlo',
  '🥩 Módulo 2 — Nutrición de Densidad Extrema para saciedad temprana',
  '🏋️ Módulo 3 — Entrenamiento de Estímulo Mínimo (30 min, 3x semana)',
  '💉 Módulo 4 — Biohacking de Soporte: péptidos para piel y articulaciones',
  '🔄 Módulo 5 — El Plan de Salida: cómo dejar el fármaco sin rebote',
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
            ¿QUÉ CONTIENE EL{' '}
            <span className="text-[#5C6851]">PROTOCOLO GLP-1 SIN REBOTE?</span>
          </h2>
          <p className="text-lg md:text-xl font-bold text-[#5C6851] max-w-2xl mx-auto">
            Todo lo que necesitás para transformarte sin destruir tu cuerpo
            en el proceso. 💪
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
              Protocolo GLP-1 Sin Rebote
            </span>{' '}
            reúne{' '}
            <span className="font-bold text-[#2f3a2c]">150 páginas técnicas</span>,
            organizadas en{' '}
            <span className="font-semibold text-[#2f3a2c]">3 pilares del sistema</span>,
            con{' '}
            <span className="font-semibold text-[#2f3a2c]">14 protocolos listos</span>{' '}
            para usar y{' '}
            <span className="font-semibold text-[#2f3a2c]">5 bonos incluidos</span>{' '}
            para preservar tu músculo, tu piel y blindar tu metabolismo.
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
            🔬 Respaldado por evidencia real
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
            🔬 Con protocolos basados en{' '}
            <span className="font-bold text-white">estudios reales de PubMed</span>,{' '}
            cada recomendación cita su fuente — no es opinión de internet.
            Adaptable a Semaglutida, Tirzepatida o cualquier agonista GLP-1,
            en cualquier país de Latinoamérica.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-amber-100 rounded-3xl p-5 md:p-7 shadow-lg shadow-black/5"
        >
          <h3 className="font-heading font-bold text-[#2f3a2c] text-2xl md:text-3xl mb-5 text-center">
            ✨ Los 5 módulos del protocolo:
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
