# Megapack SIBO Landing Reskin Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all copy, branding, checkout URL and SEO metadata on the existing landing page (currently skinned for "Protocolo GLP-1 Sin Rebote — Grasamax") with the content of "Megapack SIBO: El Método Anti-Inflamación", using two new placeholder components in place of the missing product images.

**Architecture:** No structural changes. `src/pages/Landing.tsx` keeps composing the same 13 section components in the same order. Each task edits the text/data literals inside one existing component (or creates the two new placeholder components), swaps the checkout URL constant, and updates `App.tsx`'s meta tags / JSON-LD. Tailwind classes, animations (`framer-motion`), and the color palette (`#4A553F`, `#B85C43`, `#d4a017`, `#5C6851`, `#2f3a2c`) are untouched throughout.

**Tech Stack:** Vite + React 18 + TypeScript + Tailwind CSS + framer-motion + lucide-react. No test framework is configured in this project (no vitest/jest, no `tests/` directory) — this is a content-only reskin, not new logic, so per-task verification is `npx tsc --noEmit` (fast type-check) instead of unit tests. The final task runs the full build and a manual visual QA pass, matching the "Verificación" section of the design spec.

## Global Constraints

- Do not change layout, Tailwind classes, component structure, or the color palette — content/data only, except where a task explicitly adds/removes a small element (e.g. dropping the multi-currency chip, changing a grid column count).
- Checkout URL (all CTAs): `https://megapack-sibo-el-metodo-anti-inflamacion.impultienda.ar/checkout`
- Site domain: `https://sibo.tupuntodigital.shop`
- Placeholder contact email: `contacto@sibo.tupuntodigital.shop`
- Price: `$19.990 ARS` (was `$59.500 ARS`, 80% off) — ARS only, no multi-currency copy.
- Do not invent statistics not present in the sales copy (no "+1.200 usuarias", no page counts, no PubMed claims) — this product's compliance disclaimer (in `Footer.tsx`) must be reproduced verbatim.
- Do not touch `public/checklist-2/` or its design doc — unrelated product.
- Reference doc: `docs/superpowers/specs/2026-08-06-megapack-sibo-landing-design.md`

---

### Task 1: Placeholder image components

**Files:**

- Create: `src/components/ProductCoverPlaceholder.tsx`
- Create: `src/components/BonusCoverPlaceholder.tsx`

**Interfaces:**

- Produces: `ProductCoverPlaceholder({ className?: string })` — a `div` filling its parent's width with `aspect-square`, used later by Tasks 3, 5, 9 in place of the old `<picture>` mockup.
- Produces: `BonusCoverPlaceholder({ emoji: string; num: number })` — a `div` filling its parent (`w-full h-full`), used later by Task 8 in place of the old `<img>` inside each bonus card.

- [ ] **Step 1: Create `ProductCoverPlaceholder.tsx`**

```tsx
import React from "react";
import { BookOpen } from "lucide-react";

interface ProductCoverPlaceholderProps {
  className?: string;
}

export function ProductCoverPlaceholder({
  className = "",
}: ProductCoverPlaceholderProps) {
  return (
    <div
      className={`aspect-square w-full rounded-2xl bg-gradient-to-br from-[#4A553F] to-[#2f3a2c] border border-white/10 shadow-xl flex flex-col items-center justify-center text-center p-8 ${className}`}
    >
      <BookOpen className="w-12 h-12 text-[#d4a017] mb-4" aria-hidden="true" />
      <span className="uppercase tracking-[0.2em] text-[10px] text-[#d4a017] font-bold mb-2">
        Megapack
      </span>
      <span className="font-heading text-white font-extrabold text-2xl leading-tight">
        SIBO: El Método
        <br />
        Anti-Inflamación
      </span>
      <span className="mt-4 text-white/50 text-[11px]">
        Mockup provisorio — reemplazar por imagen final
      </span>
    </div>
  );
}
```

- [ ] **Step 2: Create `BonusCoverPlaceholder.tsx`**

```tsx
import React from "react";

interface BonusCoverPlaceholderProps {
  emoji: string;
  num: number;
}

export function BonusCoverPlaceholder({
  emoji,
  num,
}: BonusCoverPlaceholderProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#f4efe2] to-[#e8ddc0] text-center p-4">
      <span className="text-4xl mb-2" aria-hidden="true">
        {emoji}
      </span>
      <span className="text-[#5C6851] font-bold text-xs uppercase tracking-wide">
        Bono {num}
      </span>
    </div>
  );
}
```

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: no new errors (these two files aren't imported anywhere yet, so they must compile standalone — check there's no error reported for either file).

- [ ] **Step 4: Commit**

```bash
git add src/components/ProductCoverPlaceholder.tsx src/components/BonusCoverPlaceholder.tsx
git commit -m "feat: add placeholder image components for Megapack SIBO mockups"
```

---

### Task 2: Checkout URL

**Files:**

- Modify: `src/utils/checkoutUrl.ts:1-2`

**Interfaces:**

- Consumes: nothing new.
- Produces: `getCheckoutUrl()` unchanged in shape, now returns the SIBO checkout base URL — consumed later by `PricingSection.tsx` and `FinalPricingCTA.tsx` (already wired, no change needed there).

- [ ] **Step 1: Replace the checkout base URL**

Replace:

```ts
const CHECKOUT_BASE_URL = "https://bio-hack-peso-ideal.impultienda.ar/checkout";
```

With:

```ts
const CHECKOUT_BASE_URL =
  "https://megapack-sibo-el-metodo-anti-inflamacion.impultienda.ar/checkout";
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/utils/checkoutUrl.ts
git commit -m "fix: point checkout button to Megapack SIBO checkout URL"
```

---

### Task 3: `HeroSection.tsx`

**Files:**

- Modify: `src/components/HeroSection.tsx`

**Interfaces:**

- Consumes: `ProductCoverPlaceholder` from Task 1 (`import { ProductCoverPlaceholder } from "./ProductCoverPlaceholder";`).

- [ ] **Step 1: Add the placeholder import**

Add near the top, after the existing imports:

```tsx
import { ProductCoverPlaceholder } from "./ProductCoverPlaceholder";
```

- [ ] **Step 2: Replace the badge text**

Replace:

```
✨ Protocolo Completo — Biohacking & GLP-1
```

With:

```
✨ Sistema Completo — Método Anti-Inflamación
```

- [ ] **Step 3: Replace the H1**

Replace:

```tsx
          ¿Y si el verdadero problema empezara
          <br />
          <span className="text-[#B85C43]">
            cuando termines el tratamiento?
          </span>
```

With:

```tsx
          Tu digestión ordenada,
          <br />
          <span className="text-[#B85C43]">tu abdomen desinflamado.</span>
          <br />
          Desde hoy.
```

- [ ] **Step 4: Replace the mockup `<picture>` block with the placeholder**

Replace:

```tsx
<picture>
  <source
    media="(min-width: 768px)"
    srcSet={`${import.meta.env.BASE_URL}protocolo-glp1-mockup.webp`}
  />
  <img
    src={`${import.meta.env.BASE_URL}protocolo-glp1-mockup-mobile.webp`}
    alt="Protocolo GLP-1 Sin Rebote"
    width={1254}
    height={1254}
    loading="eager"
    fetchPriority="high"
    decoding="async"
    className="w-full h-auto rounded-2xl"
  />
</picture>
```

With:

```tsx
<ProductCoverPlaceholder />
```

- [ ] **Step 5: Replace the description paragraphs**

Replace:

```tsx
          <p className="hidden md:block text-slate-600 md:text-lg leading-relaxed">
            El manual técnico que tu médico no te dio — para transformarte de
            verdad con tu tratamiento GLP-1.
          </p>
          <p className="font-semibold text-[#2f3a2c] text-[14px] md:text-lg leading-relaxed md:mt-2">
            <span className="md:hidden">
              💪 Preservá tu músculo · ✨ Protegé tu piel · 🛡️ Blindá tu
              metabolismo frente al GLP-1
            </span>
            <span className="hidden md:inline">
              💪 Preservá tu músculo · ✨ Protegé tu piel · 🛡️ Blindá tu
              metabolismo contra el rebote
            </span>
          </p>
          <p className="text-slate-500 text-[11px] md:text-sm mt-1 md:mt-2">
            Sin horas en el gimnasio. Sin dietas imposibles.
          </p>
```

With:

```tsx
          <p className="hidden md:block text-slate-600 md:text-lg leading-relaxed">
            Guías, protocolos, listas de compras, planners, checklists y
            reemplazos inteligentes en PDFs editables, imprimibles e
            interactivos.
          </p>
          <p className="font-semibold text-[#2f3a2c] text-[14px] md:text-lg leading-relaxed md:mt-2">
            🗂️ Ordená tus comidas · 🎯 Identificá qué te inflama · ✅ Comé
            con libertad
          </p>
          <p className="text-slate-500 text-[11px] md:text-sm mt-1 md:mt-2">
            Sin dietas imposibles. Sin adivinar qué te cayó mal.
          </p>
```

- [ ] **Step 6: Replace the CTA button label**

Replace:

```
🚀 QUIERO EL PROTOCOLO COMPLETO
```

With:

```
🚀 SÍ, QUIERO EL MEGAPACK AHORA
```

- [ ] **Step 7: Replace the trust bar labels**

Replace:

```tsx
              4.9/5 — Reseñas verificadas
```

With:

```tsx
              4.9/5 — Valoración de usuarias
```

(The other three trust-bar labels — "Garantía de 7 Días", "Acceso inmediato", "Pago único" — already match the SIBO copy; leave them unchanged.)

- [ ] **Step 8: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 9: Commit**

```bash
git add src/components/HeroSection.tsx
git commit -m "feat: reskin HeroSection copy for Megapack SIBO"
```

---

### Task 4: `ProblemSection.tsx`

**Files:**

- Modify: `src/components/ProblemSection.tsx:3-40`

- [ ] **Step 1: Replace the `situations` array**

Replace:

```tsx
const situations = [
  {
    emoji: "😰",
    title: "El Espejo que No Miente",
    desc: 'Bajás kilos, pero tu piel cuelga y tu cara se ve demacrada. El "rostro hundido" del tratamiento GLP-1 ya apareció.',
  },
  {
    emoji: "😩",
    title: "La Fuerza que Desaparece",
    desc: "Subir escaleras te agota. Cargás menos. Estás perdiendo músculo junto con la grasa.",
  },
  {
    emoji: "⚖️",
    title: "El Miedo al Rebote",
    desc: "¿Qué pasa cuando dejes la inyección? ¿Tu cuerpo va a recuperar todo — y más?",
  },
  {
    emoji: "⏱️",
    title: "La Inversión que No Rinde",
    desc: "Pagás $200–$400 USD por mes en el fármaco sin obtener el cuerpo atlético que imaginabas.",
  },
];
```

With:

```tsx
const situations = [
  {
    emoji: "🗂️",
    title: "Información desordenada",
    desc: "Artículos sueltos, videos contradictorios y listas en distintos lados. Cada vez que necesitás orientarte, perdés tiempo y terminás más confundida.",
  },
  {
    emoji: "⏱️",
    title: "Comidas que toman demasiada energía mental",
    desc: "Cada salida, cada almuerzo en el trabajo o cada cena en familia se convierte en horas de cálculo y ansiedad anticipatoria.",
  },
  {
    emoji: "📌",
    title: "Síntomas que quedan sin resolver",
    desc: "Detectás que algo te cae mal, pero no siempre queda claro cuál fue el alimento, en qué cantidad y cómo evitarlo sin resignar todo.",
  },
  {
    emoji: "🎯",
    title: "Sensación de que nada funciona de verdad",
    desc: "Probaste eliminar, restringir, suplementar. Y aun así seguís terminando el día desabrochándote el pantalón por el dolor.",
  },
];
```

- [ ] **Step 2: Replace the section heading copy**

Replace:

```tsx
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
```

With:

```tsx
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#2f3a2c] uppercase">
            ¿Te reconocés en esto?
          </h2>
          // <p className="text-xl font-bold text-[#5C6851] mb-4 italic">
          //   Sabés identificar cuándo te inflama algo, pero cada comida es
          //   adivinar qué estuvo mal.
          // </p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Si tenés SIBO diagnosticado o síntomas compatibles como hinchazón,
            gases, distensión abdominal o miedo a comer, probablemente ya
            viviste esto:
          </p>
```

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/ProblemSection.tsx
git commit -m "feat: reskin ProblemSection copy for Megapack SIBO"
```

---

### Task 5: `SolutionSection.tsx`

**Files:**

- Modify: `src/components/SolutionSection.tsx`

**Interfaces:**

- Consumes: `ProductCoverPlaceholder` from Task 1.

- [ ] **Step 1: Add the placeholder import**

Add after `import { motion } from "framer-motion";`:

```tsx
import { ProductCoverPlaceholder } from "./ProductCoverPlaceholder";
```

- [ ] **Step 2: Replace the badge and heading**

Replace:

```tsx
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            LA SOLUCIÓN — SISTEMA TODO EN UNO
          </span>
          <h2 className="font-heading md:text-5xl font-bold text-[#2f3a2c] mb-6 max-w-3xl mx-auto text-[24px]">
            El sistema completo para perder grasa con GLP-1 sin destruir tu{" "}
            <span className="text-[#5C6851]">
              músculo, tu piel ni tu metabolismo
            </span>
          </h2>
```

With:

```tsx
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            LA SOLUCIÓN — SISTEMA TODO EN UNO
          </span>
          <h2 className="font-heading md:text-5xl font-bold text-[#2f3a2c] mb-6 max-w-3xl mx-auto text-[24px]">
            El sistema completo para entender qué te inflama y{" "}
            <span className="text-[#5C6851]">
              comer con libertad en cualquier situación de tu vida real
            </span>
          </h2>
```

- [ ] **Step 3: Replace the mockup `<picture>` block with the placeholder**

Replace:

```tsx
<picture>
  <source
    media="(min-width: 768px)"
    srcSet={`${import.meta.env.BASE_URL}protocolo-glp1-mockup.webp`}
  />
  <img
    src={`${import.meta.env.BASE_URL}protocolo-glp1-mockup-mobile.webp`}
    alt="Protocolo GLP-1 Sin Rebote"
    width={1254}
    height={1254}
    loading="lazy"
    decoding="async"
    className="w-full h-auto max-w-2xl mx-auto rounded-2xl shadow-xl shadow-navy/5 border border-slate-100"
  />
</picture>
```

With:

```tsx
<ProductCoverPlaceholder className="max-w-2xl mx-auto shadow-xl shadow-navy/5 border-slate-100" />
```

- [ ] **Step 4: Replace the closing paragraph card**

Replace:

```tsx
<p className="md:text-xl font-medium text-slate-700 text-[16px]">
  <span className="md:hidden">
    Hasta el 40% del peso perdido con GLP-1 puede ser músculo. El "Punto Dulce
    Metabólico" ordena a tu cuerpo quemar grasa y blindar el músculo — la
    diferencia entre "enfermo y flaco" y "atlético y definido".
  </span>
  <span className="hidden md:inline">
    El problema no es el fármaco: es no tener el Manual de Ingeniería. Hasta el
    40% del peso perdido con GLP-1 puede ser masa muscular. Existe un "Punto
    Dulce Metabólico" que le ordena a tu cuerpo quemar grasa mientras blinda el
    músculo — la diferencia entre verte "enfermo y flaco" o "atlético y
    definido".
  </span>
</p>
```

With:

```tsx
<p className="md:text-xl font-medium text-slate-700 text-[16px]">
  Ese no es un problema de voluntad. Es un problema de no tener el sistema
  correcto. Un sistema de trabajo completo, desde entender qué te inflama hasta
  comer con libertad en cualquier situación de tu vida real.
</p>
```

- [ ] **Step 5: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/SolutionSection.tsx
git commit -m "feat: reskin SolutionSection copy for Megapack SIBO"
```

---

### Task 6: `FeaturesSection.tsx`

**Files:**

- Modify: `src/components/FeaturesSection.tsx:4-30`

- [ ] **Step 1: Replace the `features` array**

Replace:

```tsx
const features = [
  {
    title: "💪 Preservación Muscular",
    desc: "El protocolo exacto para que tu cuerpo queme grasa y no músculo.",
  },
  {
    title: "✨ Protección de Piel",
    desc: 'Péptidos para eliminar el "rostro hundido" del GLP-1 y la flacidez visible.',
  },
  {
    title: "🛡️ Blindaje Metabólico",
    desc: "Cómo salir del tratamiento sin que el hambre vuelva multiplicada.",
  },
  {
    title: "📋 Protocolos Listos",
    desc: "Calculadoras, checklists y guías para aplicar sin adivinar nada.",
  },
];
```

With:

```tsx
const features = [
  {
    title: "✅ Ahorrar energía mental en cada comida",
    desc: "Dejá de calcular desde cero. Usá listas, reemplazos y guías listas para aplicar hoy mismo.",
  },
  {
    title: "✅ Trabajar con más orden digestivo",
    desc: "Organizá fases, síntomas, alimentos tolerados e intolerancias con una lógica simple y progresiva.",
  },
  {
    title: "✅ Presentarte mejor ante tu propio cuerpo",
    desc: "Entendé qué te hace bien, qué te inflama y cómo avanzar con más seguridad en cada etapa.",
  },
  {
    title: "✅ Dar seguimiento sin improvisar",
    desc: "Registrá síntomas, fechas y reacciones para que cada avance tenga control y evidencia real.",
  },
];
```

- [ ] **Step 2: Replace the section heading**

Replace:

```
¿QUÉ VAS A LOGRAR CON ESTE PROTOCOLO?
```

With:

```
¿QUÉ VAS A LOGRAR CON ESTE SISTEMA?
```

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/FeaturesSection.tsx
git commit -m "feat: reskin FeaturesSection copy for Megapack SIBO"
```

---

### Task 7: `ContentSection.tsx`

**Files:**

- Modify: `src/components/ContentSection.tsx`

- [ ] **Step 1: Replace the `temas` array**

Replace:

```tsx
const temas = [
  { emoji: "🔬", label: "Fisiología GLP-1" },
  { emoji: "🥩", label: "Nutrición Proteica" },
  { emoji: "🏋️", label: "Entrenamiento EEM" },
  { emoji: "🧬", label: "Péptidos BPC-157" },
  { emoji: "✨", label: "Anti Rostro Hundido" },
  { emoji: "🧪", label: "GHK-Cu Colágeno" },
  { emoji: "⚡", label: "Electrolitos" },
  { emoji: "📊", label: "Composición Corporal" },
  { emoji: "🔄", label: "Exit Strategy" },
  { emoji: "🩸", label: "Análisis de sangre" },
  { emoji: "💊", label: "TB-500 Recuperación" },
  { emoji: "🧠", label: "Flexibilidad Metabólica" },
];
```

With:

```tsx
const temas = [
  { emoji: "🔍", label: "Rescate en Crisis" },
  { emoji: "🚦", label: "Semáforo de Alimentos" },
  { emoji: "📋", label: "3 Fases Anti-Inflamación" },
  { emoji: "🔄", label: "Intercambios Rápidos" },
  { emoji: "🍳", label: "Recetas 5 Ingredientes" },
  { emoji: "📊", label: "Diario de Síntomas" },
  { emoji: "🛒", label: "Súper Argentino" },
  { emoji: "✅", label: "Checklist de Arranque" },
  { emoji: "🏷️", label: "Lectura de Etiquetas" },
  { emoji: "🗓️", label: "Planner Semanal" },
  { emoji: "🍽️", label: "Porciones Visuales" },
  { emoji: "🧳", label: "Comer Fuera de Casa" },
];
```

- [ ] **Step 2: Replace the `adaptabilidad` array**

Replace:

```tsx
const adaptabilidad = [
  { emoji: "📚", label: "Referencias PubMed" },
  { emoji: "🚫", label: "Sin opinión de internet" },
  { emoji: "🌎", label: "Toda Latinoamérica" },
];
```

With:

```tsx
const adaptabilidad = [
  { emoji: "🇦🇷", label: "Adaptado a supermercados argentinos" },
  { emoji: "📋", label: "Protocolos prácticos y listos para aplicar" },
  { emoji: "👩", label: "Pensado para mujeres con SIBO" },
];
```

- [ ] **Step 3: Replace the `incluye` array**

Replace:

```tsx
const incluye = [
  "🧬 Módulo 1 — La Trampa del GLP-1: por qué perdés músculo y cómo revertirlo",
  "🥩 Módulo 2 — Nutrición de Densidad Extrema para saciedad temprana",
  "🏋️ Módulo 3 — Entrenamiento de Estímulo Mínimo (30 min, 3x semana)",
  "💉 Módulo 4 — Biohacking de Soporte: péptidos para piel y articulaciones",
  "🔄 Módulo 5 — El Plan de Salida: cómo dejar el fármaco sin rebote",
];
```

With:

```tsx
const incluye = [
  "🔍 Protocolo de Rescate 24 Horas — Llegás a una crisis con estructura, sin improvisar ni entrar en pánico",
  "⚠️ Semáforo de Supermercado Argentino — Listas listas para adaptar a cualquier góndola del Coto, Jumbo o Carrefour",
  "📋 Guía de las 3 Fases Anti-Inflamación — No arrancás de cero, seguís el mapa en minutos",
  "🔎 Matriz de Intercambio Rápido — Reemplazos listos para aplicar hoy con lo que ya tenés en casa",
  "🚨 Recetario Cero Estrés — Platos de 5 ingredientes, claros y adaptados a Argentina",
  "📊 Diario de Síntomas Express — Registros que generan claridad y aceleran tu reintroducción",
];
```

- [ ] **Step 4: Replace the badge, heading and subheading**

Replace:

```tsx
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
```

With:

```tsx
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
```

- [ ] **Step 5: Replace the intro summary card**

Replace:

```tsx
<p className="text-slate-700 text-[15px] md:text-lg leading-relaxed">
  📚 El{" "}
  <span className="font-bold text-[#5C6851]">Protocolo GLP-1 Sin Rebote</span>{" "}
  reúne <span className="font-bold text-[#2f3a2c]">150 páginas técnicas</span>,
  organizadas en{" "}
  <span className="font-semibold text-[#2f3a2c]">3 pilares del sistema</span>,
  con <span className="font-semibold text-[#2f3a2c]">14 protocolos listos</span>{" "}
  para usar y{" "}
  <span className="font-semibold text-[#2f3a2c]">5 bonos incluidos</span> para
  preservar tu músculo, tu piel y blindar tu metabolismo.
</p>
```

With:

```tsx
<p className="text-slate-700 text-[15px] md:text-lg leading-relaxed">
  📚 El{" "}
  <span className="font-bold text-[#5C6851]">
    Megapack SIBO: El Método Anti-Inflamación
  </span>{" "}
  reúne guías, protocolos, listas de compras, planners, checklists y reemplazos
  inteligentes, organizados en{" "}
  <span className="font-semibold text-[#2f3a2c]">6 módulos</span>, con{" "}
  <span className="font-semibold text-[#2f3a2c]">5 bonos incluidos</span> — todo
  en PDFs editables, imprimibles e interactivos.
</p>
```

- [ ] **Step 6: Replace the green "evidence" block heading and paragraph**

Replace:

```tsx
<h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-5">
  🔬 Respaldado por evidencia real
</h3>
```

With:

```tsx
<h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-5">
  🎯 Práctico y adaptado a tu realidad
</h3>
```

Replace:

```tsx
<p className="text-[#e6ddc7] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
  🔬 Con protocolos basados en{" "}
  <span className="font-bold text-white">estudios reales de PubMed</span>, cada
  recomendación cita su fuente — no es opinión de internet. Adaptable a
  Semaglutida, Tirzepatida o cualquier agonista GLP-1, en cualquier país de
  Latinoamérica.
</p>
```

With:

```tsx
<p className="text-[#e6ddc7] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
  🎯 Herramientas prácticas de organización y seguimiento alimentario, pensadas
  para adaptarse a tu rutina real. No reemplazan la indicación de tu médico o
  nutricionista — la complementan.
</p>
```

- [ ] **Step 7: Replace the modules block heading**

Replace:

```
✨ Los 5 módulos del protocolo:
```

With:

```
✨ Los 6 módulos del sistema:
```

- [ ] **Step 8: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 9: Commit**

```bash
git add src/components/ContentSection.tsx
git commit -m "feat: reskin ContentSection copy for Megapack SIBO"
```

---

### Task 8: `BonusesSection.tsx`

**Files:**

- Modify: `src/components/BonusesSection.tsx`

**Interfaces:**

- Consumes: `BonusCoverPlaceholder` from Task 1 (`import { BonusCoverPlaceholder } from "./BonusCoverPlaceholder";`).

- [ ] **Step 1: Add the placeholder import and drop the now-unused `Gift`... keep it (still used below), just add the new import**

Add after `import { Gift } from "lucide-react";`:

```tsx
import { BonusCoverPlaceholder } from "./BonusCoverPlaceholder";
```

- [ ] **Step 2: Replace the `bonuses` array (swap `image` for `emoji`)**

Replace:

```tsx
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
```

With:

```tsx
const bonuses = [
  {
    num: 1,
    title: "Checklist de Arranque SIBO en 30 Minutos",
    desc: "Llegás al primer día con una estructura clara, sin perderte ni depender solo de tu memoria. Hoja de ruta de 72 horas incluida.",
    emoji: "✅",
  },
  {
    num: 2,
    title: "Guía Express de Etiquetas Anti-Inflamación",
    desc: "Sabés exactamente qué mirar y qué evitar en cada producto del súper. Trabajás con más criterio en cada compra.",
    emoji: "🏷️",
  },
  {
    num: 3,
    title: "Planner de Comidas Sin Estrés",
    desc: "Tus semanas se ven más claras, más ordenadas y más fáciles de sostener sin improvisar ni caer en lo primero que encontrás.",
    emoji: "🗓️",
  },
  {
    num: 4,
    title: "Tarjetas Visuales de Porciones y Combinaciones",
    desc: "Cada comida termina con proteína, base y verdura definida. Sin pesar, sin contar calorías, sin drama.",
    emoji: "🍽️",
  },
  {
    num: 5,
    title: "Kit de Emergencia para Comer Fuera de Casa",
    desc: "Presentás tu proceso con más seguridad y tu entorno entiende mejor cómo acompañarte sin presiones.",
    emoji: "🧳",
  },
];
```

- [ ] **Step 3: Replace the `<img>` inside each bonus card with the placeholder**

Replace:

```tsx
<img
  src={`${import.meta.env.BASE_URL}${b.image}`}
  alt={`Bono ${b.num}: ${b.title}`}
  width={400}
  height={500}
  loading="lazy"
  decoding="async"
  className="w-full h-full object-contain"
/>
```

With:

```tsx
<BonusCoverPlaceholder emoji={b.emoji} num={b.num} />
```

- [ ] **Step 4: Replace the summary block heading**

Replace:

```
el Protocolo GLP-1 Sin Rebote
```

With:

```
el Megapack SIBO: El Método Anti-Inflamación
```

- [ ] **Step 5: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/BonusesSection.tsx
git commit -m "feat: reskin BonusesSection copy for Megapack SIBO"
```

---

### Task 9: `PricingSection.tsx`

**Files:**

- Modify: `src/components/PricingSection.tsx`

**Interfaces:**

- Consumes: `ProductCoverPlaceholder` from Task 1.

- [ ] **Step 1: Add the placeholder import**

Add after `import { getCheckoutUrl } from "../utils/checkoutUrl";`:

```tsx
import { ProductCoverPlaceholder } from "./ProductCoverPlaceholder";
```

- [ ] **Step 2: Replace the badge and heading**

Replace:

```tsx
        <span className="inline-block px-6 py-2.5 mb-6 rounded-full border border-white/30 bg-white/10 text-white/90 font-semibold tracking-[0.18em] uppercase text-xs">
          🔥 Precio Introductorio — Por Tiempo Limitado
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Accedé al sistema ahora y empezá{" "}
          <em className="italic font-bold text-[#f0e6d2]">
            el cambio hoy
          </em>
        </h2>
```

With:

```tsx
        <span className="inline-block px-6 py-2.5 mb-6 rounded-full border border-white/30 bg-white/10 text-white/90 font-semibold tracking-[0.18em] uppercase text-xs">
          🔥 Oferta Especial — Pack Completo
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Accedé hoy al{" "}
          <em className="italic font-bold text-[#f0e6d2]">
            Megapack completo
          </em>
        </h2>
```

- [ ] **Step 3: Replace the mockup `<picture>` block with the placeholder**

Replace:

```tsx
<picture>
  <source
    media="(min-width: 768px)"
    srcSet={`${import.meta.env.BASE_URL}protocolo-glp1-mockup.webp`}
  />
  <img
    src={`${import.meta.env.BASE_URL}protocolo-glp1-mockup-mobile.webp`}
    alt="Protocolo GLP-1 Sin Rebote"
    width={1254}
    height={1254}
    loading="lazy"
    decoding="async"
    className="w-full h-auto rounded-2xl shadow-2xl shadow-black/20"
  />
</picture>
```

With:

```tsx
<ProductCoverPlaceholder className="shadow-2xl shadow-black/20" />
```

- [ ] **Step 4: Replace the price card body**

Replace:

```tsx
          <div className="text-slate-500 text-base md:text-lg mb-3">
            Precio regular: <span className="line-through">USD 97</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#F3E3C3] text-[#9C5330] font-bold px-5 py-2.5 rounded-full text-sm mb-5">
            <Flame className="w-4 h-4" /> 80% DE DESCUENTO
          </div>

          <div className="font-heading text-6xl md:text-7xl font-bold text-[#B85C43] leading-none mb-4">
            $19
          </div>
          <span className="inline-block bg-slate-100 text-slate-700 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span className="md:hidden">Pagás en tu moneda local</span>
            <span className="hidden md:inline">
              Pagás en tu moneda local · MXN · COP · ARS · CLP · PEN
            </span>
          </span>
          <p className="text-[#B85C43] font-semibold text-base leading-snug mb-6">
            🔥 ¡Última oportunidad! El precio sube al finalizar el contador.
          </p>
```

With:

```tsx
          <div className="text-slate-500 text-base md:text-lg mb-3">
            Precio Normal: <span className="line-through">$59.500 ARS</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#F3E3C3] text-[#9C5330] font-bold px-5 py-2.5 rounded-full text-sm mb-5">
            <Flame className="w-4 h-4" /> 80% DE DESCUENTO
          </div>

          <div className="font-heading text-6xl md:text-7xl font-bold text-[#B85C43] leading-none mb-4">
            $19.990
          </div>
          <p className="text-[#B85C43] font-semibold text-base leading-snug mb-6">
            🔥 ¡Última oportunidad! El precio sube al finalizar el contador.
          </p>
```

- [ ] **Step 5: Replace the CTA button label**

Replace:

```
🚀 QUIERO EL PROTOCOLO COMPLETO
```

With:

```
🚀 SÍ, QUIERO EL MEGAPACK AHORA
```

- [ ] **Step 6: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add src/components/PricingSection.tsx
git commit -m "feat: reskin PricingSection copy and price for Megapack SIBO"
```

---

### Task 10: `GuaranteeSection.tsx`

**Files:**

- Modify: `src/components/GuaranteeSection.tsx:17-25`

- [ ] **Step 1: Replace the guarantee copy**

Replace:

```tsx
          <h3 className="text-base md:text-xl font-bold text-[#2f3a2c] mb-2 md:mb-3">
            Sin formularios, sin excusas
          </h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
            Tenés 7 días para revisar el sistema completo. Si no es
            exactamente lo que prometemos, te devolvemos el 100% de tu
            dinero.
          </p>
          <div className="inline-flex bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-amber-200 text-[#6f7a64] font-bold text-xs md:text-sm shadow-sm">
            Riesgo Cero Garantizado
          </div>
```

With:

```tsx
          <h3 className="text-base md:text-xl font-bold text-[#2f3a2c] mb-2 md:mb-3">
            Sin preguntas, sin formularios interminables, sin drama
          </h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
            Tenés 7 días para revisar el Megapack completo. Si no corresponde
            con lo ofrecido, podés solicitar la devolución sin preguntas, sin
            formularios interminables y sin drama.
          </p>
          <div className="inline-flex bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-amber-200 text-[#6f7a64] font-bold text-xs md:text-sm shadow-sm">
            Riesgo Cero Garantizado
          </div>
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/GuaranteeSection.tsx
git commit -m "feat: reskin GuaranteeSection copy for Megapack SIBO"
```

---

### Task 11: `TestimonialsBottom.tsx`

**Files:**

- Modify: `src/components/TestimonialsBottom.tsx`

- [ ] **Step 1: Replace the `testimonials` array**

Replace:

```tsx
const testimonials = [
  {
    initial: "C",
    color: "bg-pink-100 text-pink-700",
    name: "Carlos R.",
    location: "Buenos Aires · -12kg grasa / +1kg músculo",
    text: "Bajé 12kg pero mi piel se veía horrible. Con el Protocolo GLP-1 recuperé la firmeza y hoy entreno con más fuerza que antes de empezar.",
  },
  {
    initial: "M",
    color: "bg-blue-100 text-blue-700",
    name: "Mariela S.",
    location: "Córdoba · Transformación facial y firmeza",
    text: "Mi médico me felicitó pero yo odiaba mi cara en las fotos. La guía Anti Rostro Hundido fue clave. Bajé de peso sin parecer 10 años más vieja.",
  },
  {
    initial: "R",
    color: "bg-emerald-100 text-emerald-700",
    name: "Rodrigo M.",
    location: "Lima · Mantenimiento post-tratamiento",
    text: "Tenía terror de dejar la inyección. Seguí el Exit Strategy y no solo mantuve el peso — seguí bajando sin el fármaco.",
  },
];
```

With:

```tsx
const testimonials = [
  {
    initial: "M",
    color: "bg-pink-100 text-pink-700",
    name: "María G.",
    location: "Buenos Aires",
    text: "Antes tenía información suelta de mil lados. Con el sistema pude ordenar mis comidas, preparar mejor mis semanas y dejar de terminar cada noche inflamada sin entender por qué.",
  },
  {
    initial: "L",
    color: "bg-blue-100 text-blue-700",
    name: "Laura P.",
    location: "Córdoba",
    text: "Lo que más me sirvió fue la estructura para arrancar. Ahora cada semana empieza con un plan claro, compras definidas y sin improvisar en el momento de hambre.",
  },
  {
    initial: "A",
    color: "bg-emerald-100 text-emerald-700",
    name: "Andrea R.",
    location: "Rosario",
    text: "Me ayudó a mejorar la forma en que me relaciono con la comida. Mi familia entiende mejor lo que necesito y yo siento que tengo control por primera vez en años.",
  },
];
```

- [ ] **Step 2: Replace the section header copy (drop the invented usage stat)**

Replace:

```tsx
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
```

With:

```tsx
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#4A553F] text-white font-semibold tracking-[0.18em] uppercase text-xs">
            Lo que dicen otras mujeres que ya lo usan
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#2f3a2c] mb-3">
            Lo que quienes ya tienen el Megapack están diciendo
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            No lo decimos nosotros — esto es lo que escriben por su cuenta.
            <br className="hidden sm:block" />
            ⭐ 4.9/5 — Valoración de usuarias
          </p>
```

- [ ] **Step 3: Change the testimonials grid to 3 columns**

Replace:

```tsx
        <div className="grid md:grid-cols-2 gap-6">
```

With:

```tsx
        <div className="grid md:grid-cols-3 gap-6">
```

- [ ] **Step 4: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/TestimonialsBottom.tsx
git commit -m "feat: reskin TestimonialsBottom with real Megapack SIBO reviews"
```

---

### Task 12: `FaqSection.tsx`

**Files:**

- Modify: `src/components/FaqSection.tsx:4-29`

- [ ] **Step 1: Replace the `faqs` array**

Replace:

```tsx
const faqs = [
  {
    q: "¿Sirve si recién empecé el tratamiento?",
    a: "Sí, y es el momento ideal. Aplicar el protocolo desde el inicio es la diferencia entre terminar con un cuerpo atlético o uno flácido.",
  },
  {
    q: "¿Tengo que hacer una dieta estricta?",
    a: "No. La guía te enseña a optimizar lo poco que comés por la falta de hambre, para que cada bocado preserve tu músculo.",
  },
  {
    q: "¿Es seguro? ¿Puedo tener problemas?",
    a: "100% legal. Son protocolos de nutrición, entrenamiento y suplementación basados en estudios PubMed. No reemplaza la orientación médica.",
  },
  {
    q: "¿Cuándo recibo el material?",
    a: "Acceso inmediato al finalizar el pago. Recibís todo en tu correo, listo para usar en cualquier dispositivo.",
  },
  {
    q: "Ya llevo meses con el tratamiento y noto flacidez. ¿Sirve igual?",
    a: "Sí. Nunca es tarde para proteger tu músculo. De hecho, si ya notás flacidez, es más urgente empezar hoy.",
  },
  {
    q: "¿Puedo pedir reembolso?",
    a: "Sí. 7 días de garantía incondicional. Si no quedás satisfecho, te devolvemos el 100% sin preguntas.",
  },
];
```

With:

```tsx
const faqs = [
  {
    q: "¿Es un producto físico o digital?",
    a: "Es un producto 100% digital. Recibís acceso inmediato al material después de la compra para descargarlo y usarlo desde tu computadora, tablet o celular.",
  },
  {
    q: "¿Sirve si estoy en tratamiento médico?",
    a: "Sí. El Megapack es un sistema de organización alimentaria y guía práctica. No reemplaza la indicación de tu médico o nutricionista, sino que la complementa con herramientas concretas para el día a día.",
  },
  {
    q: "¿Necesito saber cocinar para usarlo?",
    a: "No. El recetario tiene platos de 5 ingredientes o menos, pensados para personas sin tiempo y sin experiencia culinaria avanzada.",
  },
  {
    q: "¿Cuándo recibo el acceso?",
    a: "De forma inmediata. En menos de 5 minutos después de completar tu pago recibís todo el material en tu correo electrónico.",
  },
  {
    q: "¿El precio es en pesos argentinos?",
    a: "Sí. El precio es de $19.990 ARS, pago único, sin suscripción ni cargos adicionales.",
  },
  {
    q: "¿Reemplaza una consulta médica o nutricional?",
    a: "No. El Megapack es una herramienta educativa y de organización. Siempre es recomendable trabajar en paralelo con un profesional de la salud.",
  },
];
```

- [ ] **Step 2: Replace the section header copy**

Replace:

```tsx
<span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/40 bg-[#566049] text-white font-semibold tracking-[0.18em] uppercase text-xs">
  Preguntas Frecuentes
</span>
```

With: leave unchanged (already generic and correct).

_(No further edit needed for the header — only the `faqs` array changes in this file.)_

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/FaqSection.tsx
git commit -m "feat: reskin FaqSection with Megapack SIBO questions"
```

---

### Task 13: `FinalPricingCTA.tsx`

**Files:**

- Modify: `src/components/FinalPricingCTA.tsx`

- [ ] **Step 1: Swap the icon imports (drop `Star`, add `Globe`)**

Replace:

```tsx
import { ArrowRight, Star, ShieldCheck, Zap, CreditCard } from "lucide-react";
```

With:

```tsx
import { ArrowRight, Globe, ShieldCheck, Zap, CreditCard } from "lucide-react";
```

- [ ] **Step 2: Replace the badge and heading**

Replace:

```tsx
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#2f3a2c] mb-5 leading-tight">
          Tu transformación merece terminar con un cuerpo{" "}
          <span className="text-[#B85C43]">
            firme, atlético y un metabolismo blindado
          </span>
          .
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          El sistema completo. Más resultados reales y menos dinero perdido
          en protocolos mal armados.
        </p>
```

With:

```tsx
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#2f3a2c] mb-5 leading-tight">
          Más claridad, más orden y{" "}
          <span className="text-[#B85C43]">menos ansiedad en cada comida</span>
          .
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Dejá de armar cada semana desde cero: el Megapack te da el sistema
          para lograrlo.
        </p>
```

- [ ] **Step 3: Replace the offer card**

Replace:

```tsx
          <h3 className="font-bold text-[#2f3a2c] mb-2 text-lg md:text-xl">
            Kit Completo: Protocolo GLP-1 Sin Rebote + 5 Bonos GRATIS
          </h3>
          <div className="text-slate-500 line-through mb-2">USD 97</div>
          <div className="text-4xl font-bold text-[#B85C43] mb-6">$19 USD</div>
```

With:

```tsx
          <h3 className="font-bold text-[#2f3a2c] mb-2 text-lg md:text-xl">
            🎁 Kit Completo Megapack SIBO: El Método Anti-Inflamación + 5
            Bonos Incluidos
          </h3>
          <div className="text-slate-500 line-through mb-2">$59.500 ARS</div>
          <div className="text-4xl font-bold text-[#B85C43] mb-6">
            $19.990 ARS
          </div>
```

- [ ] **Step 4: Replace the CTA button label**

Replace:

```
🚀 SÍ, QUIERO MI PROTOCOLO COMPLETO HOY
```

With:

```
🚀 SÍ, QUIERO MI MEGAPACK AHORA
```

- [ ] **Step 5: Replace the trust row**

Replace:

```tsx
<div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-2.5 sm:gap-x-6 sm:gap-y-3 justify-center items-center text-sm text-slate-500 font-medium">
  <span className="flex items-center justify-center gap-1.5">
    <Star
      className="w-4 h-4 fill-[#d4a017] text-[#d4a017]"
      aria-hidden="true"
    />
    4.9/5 — Reseñas verificadas
  </span>
  <span className="flex items-center justify-center gap-1.5">
    <ShieldCheck className="w-4 h-4 text-[#4A7CB5]" aria-hidden="true" />
    Garantía de 7 Días
  </span>
  <span className="flex items-center justify-center gap-1.5">
    <Zap className="w-4 h-4 text-[#E8A23D]" aria-hidden="true" />
    Acceso inmediato
  </span>
  <span className="flex items-center justify-center gap-1.5">
    <CreditCard className="w-4 h-4 text-[#4A7CB5]" aria-hidden="true" />
    Pago único
  </span>
</div>
```

With:

```tsx
<div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-2.5 sm:gap-x-6 sm:gap-y-3 justify-center items-center text-sm text-slate-500 font-medium">
  <span className="flex items-center justify-center gap-1.5">
    <Zap className="w-4 h-4 text-[#E8A23D]" aria-hidden="true" />
    Acceso inmediato
  </span>
  <span className="flex items-center justify-center gap-1.5">
    <CreditCard className="w-4 h-4 text-[#4A7CB5]" aria-hidden="true" />
    Pago único
  </span>
  <span className="flex items-center justify-center gap-1.5">
    <ShieldCheck className="w-4 h-4 text-[#4A7CB5]" aria-hidden="true" />
    Garantía de 7 Días
  </span>
  <span className="flex items-center justify-center gap-1.5">
    <Globe className="w-4 h-4 text-[#5C6851]" aria-hidden="true" />
    Para mujeres de Argentina y LATAM
  </span>
</div>
```

- [ ] **Step 6: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add src/components/FinalPricingCTA.tsx
git commit -m "feat: reskin FinalPricingCTA copy and price for Megapack SIBO"
```

---

### Task 14: `Footer.tsx`

**Files:**

- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Replace the footer title, disclaimer, contact link and copyright**

Replace:

```tsx
        <div className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-2">
          🛡️ PROTOCOLO GLP-1 SIN REBOTE — GRASAMAX
        </div>

        <p className="text-xs max-w-2xl mx-auto mb-8 leading-relaxed">
          Este producto es una herramienta informativa y educativa. No
          constituye asesoramiento médico ni reemplaza la consulta con un
          profesional de la salud matriculado. Los resultados pueden variar
          según cada persona.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">
            Términos y Condiciones
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidad
          </a>
          <a
            href="mailto:contacto@grasamax.com"
            className="hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>

        <div className="text-xs text-[#a4ad96]">
          <p>
            © 2026 Grasamax — Todos los derechos reservados.
          </p>
        </div>
```

With:

```tsx
        <div className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-2">
          🛡️ MEGAPACK SIBO: EL MÉTODO ANTI-INFLAMACIÓN
        </div>

        <p className="text-xs max-w-2xl mx-auto mb-8 leading-relaxed">
          El Megapack es una herramienta digital de organización y
          orientación alimentaria para personas con síntomas compatibles con
          SIBO o diagnóstico confirmado. Debés adaptarlo a tu situación
          personal y consultar con tu profesional de salud. No constituye
          asesoramiento médico, nutricional ni diagnóstico clínico
          obligatorio, ni reemplaza a profesionales habilitados.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">
            Términos y Condiciones
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidad
          </a>
          <a
            href="mailto:contacto@sibo.tupuntodigital.shop"
            className="hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>

        <div className="text-xs text-[#a4ad96]">
          <p>
            © 2026 Megapack SIBO: El Método Anti-Inflamación — Todos los
            derechos reservados.
          </p>
        </div>
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: reskin Footer with Megapack SIBO disclaimer and branding"
```

---

### Task 15: `FloatingCTA.tsx`

**Files:**

- Modify: `src/components/FloatingCTA.tsx:45`

- [ ] **Step 1: Replace the floating button label**

Replace:

```
🚀 ¡QUIERO EL PROTOCOLO YA!
```

With:

```
🚀 ¡QUIERO MI MEGAPACK YA!
```

- [ ] **Step 2: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/FloatingCTA.tsx
git commit -m "feat: reskin FloatingCTA label for Megapack SIBO"
```

---

### Task 16: `PurchaseNotification.tsx`

**Files:**

- Modify: `src/components/PurchaseNotification.tsx:5-15`

- [ ] **Step 1: Replace the product name constants**

Replace:

```tsx
const PRODUCT_NAME = "Protocolo GLP-1 Sin Rebote";
const PRODUCT_NAME_SHORT = "Protocolo GLP-1";
```

With:

```tsx
const PRODUCT_NAME = "Megapack SIBO: El Método Anti-Inflamación";
const PRODUCT_NAME_SHORT = "Megapack SIBO";
```

- [ ] **Step 2: Replace the notification names with female names (copy targets women specifically)**

Replace:

```tsx
const NOTIFICATIONS = [
  { name: "Paola V.", city: "San José", minutesAgo: 27 },
  { name: "Martín G.", city: "Ciudad de México", minutesAgo: 12 },
  { name: "Lucía F.", city: "Bogotá", minutesAgo: 41 },
  { name: "Diego R.", city: "Lima", minutesAgo: 8 },
  { name: "Carla M.", city: "Santiago", minutesAgo: 33 },
  { name: "Sergio N.", city: "Buenos Aires", minutesAgo: 19 },
];
```

With:

```tsx
const NOTIFICATIONS = [
  { name: "Paola V.", city: "San José", minutesAgo: 27 },
  { name: "Valentina G.", city: "Ciudad de México", minutesAgo: 12 },
  { name: "Lucía F.", city: "Bogotá", minutesAgo: 41 },
  { name: "Daniela R.", city: "Lima", minutesAgo: 8 },
  { name: "Carla M.", city: "Santiago", minutesAgo: 33 },
  { name: "Sofía N.", city: "Buenos Aires", minutesAgo: 19 },
];
```

- [ ] **Step 3: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/PurchaseNotification.tsx
git commit -m "feat: reskin PurchaseNotification for Megapack SIBO"
```

---

### Task 17: `App.tsx` meta/SEO/JSON-LD + `index.html` title

**Files:**

- Modify: `src/App.tsx`
- Modify: `index.html:6`

- [ ] **Step 1: Replace the top-of-file constants**

Replace:

```tsx
const META_PIXEL_ID = "8851973042408664";
const PAGE_TITLE = "Protocolo GLP-1 Sin Rebote — Grasamax | Biohacking & GLP-1";
const PAGE_DESC =
  "El manual técnico que tu médico no te dio para transformarte con GLP-1 sin perder músculo, firmeza ni piel.";
const HERO_IMAGE = `${import.meta.env.BASE_URL}protocolo-glp1-mockup.webp`;
const HERO_IMAGE_MOBILE = `${import.meta.env.BASE_URL}protocolo-glp1-mockup-mobile.webp`;

const SITE_URL = "https://grasamax.com";
```

With:

```tsx
const META_PIXEL_ID = "";
const PAGE_TITLE =
  "Megapack SIBO: El Método Anti-Inflamación | Sistema completo para tu digestión";
const PAGE_DESC =
  "Guías, protocolos, listas de compras, planners, checklists y reemplazos inteligentes para ordenar tu digestión y desinflamar tu abdomen. PDFs editables, imprimibles e interactivos.";

const SITE_URL = "https://sibo.tupuntodigital.shop";
```

- [ ] **Step 2: Remove the hero image preload links**

Delete this whole block (it referenced `HERO_IMAGE`/`HERO_IMAGE_MOBILE`, which no longer exist — there is no real mockup file to preload while using the placeholder components):

```tsx
addLink("preload", HERO_IMAGE_MOBILE, {
  as: "image",
  fetchpriority: "high",
  media: "(max-width: 767px)",
});
addLink("preload", HERO_IMAGE, {
  as: "image",
  fetchpriority: "high",
  media: "(min-width: 768px)",
});
```

- [ ] **Step 3: Remove the og:image / twitter:image tags and update og:site_name**

Replace:

```tsx
setMeta("property", "og:type", "website");
setMeta("property", "og:title", PAGE_TITLE);
setMeta("property", "og:description", PAGE_DESC);
setMeta("property", "og:locale", "es_LA");
setMeta("property", "og:image", HERO_IMAGE);
setMeta("property", "og:url", SITE_URL);
setMeta("property", "og:site_name", "Grasamax");
setMeta("name", "twitter:card", "summary_large_image");
setMeta("name", "twitter:image", HERO_IMAGE);
setMeta("name", "twitter:title", PAGE_TITLE);
setMeta("name", "twitter:description", PAGE_DESC);
```

With:

```tsx
setMeta("property", "og:type", "website");
setMeta("property", "og:title", PAGE_TITLE);
setMeta("property", "og:description", PAGE_DESC);
setMeta("property", "og:locale", "es_LA");
setMeta("property", "og:url", SITE_URL);
setMeta("property", "og:site_name", "Megapack SIBO");
setMeta("name", "twitter:card", "summary_large_image");
setMeta("name", "twitter:title", PAGE_TITLE);
setMeta("name", "twitter:description", PAGE_DESC);
```

- [ ] **Step 4: Replace the Product JSON-LD**

Replace:

```tsx
ld.textContent = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Protocolo GLP-1 Sin Rebote",
  description: PAGE_DESC,
  image: HERO_IMAGE,
  brand: {
    "@type": "Brand",
    name: "Grasamax",
  },
  offers: {
    "@type": "Offer",
    price: "19",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: getCheckoutUrl(),
  },
});
```

With:

```tsx
ld.textContent = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Megapack SIBO: El Método Anti-Inflamación",
  description: PAGE_DESC,
  brand: {
    "@type": "Brand",
    name: "Megapack SIBO",
  },
  offers: {
    "@type": "Offer",
    price: "19990",
    priceCurrency: "ARS",
    availability: "https://schema.org/InStock",
    url: getCheckoutUrl(),
  },
});
```

- [ ] **Step 5: Replace the FAQPage JSON-LD questions**

Replace:

```tsx
        mainEntity: [
          {
            q: "¿Sirve si recién empecé el tratamiento?",
            a: "Sí, y es el momento ideal. Aplicar el protocolo desde el inicio es la diferencia entre terminar con un cuerpo atlético o uno flácido.",
          },
          {
            q: "¿Tengo que hacer una dieta estricta?",
            a: "No. La guía te enseña a optimizar lo poco que comés por la falta de hambre, para que cada bocado preserve tu músculo.",
          },
          {
            q: "¿Es seguro? ¿Puedo tener problemas?",
            a: "100% legal. Son protocolos de nutrición, entrenamiento y suplementación basados en estudios PubMed. No reemplaza la orientación médica.",
          },
          {
            q: "¿Cuándo recibo el material?",
            a: "Acceso inmediato al finalizar el pago. Recibís todo en tu correo, listo para usar en cualquier dispositivo.",
          },
          {
            q: "Ya llevo meses con el tratamiento y noto flacidez. ¿Sirve igual?",
            a: "Sí. Nunca es tarde para proteger tu músculo. De hecho, si ya notás flacidez, es más urgente empezar hoy.",
          },
          {
            q: "¿Puedo pedir reembolso?",
            a: "Sí. 7 días de garantía incondicional. Si no quedás satisfecho, te devolvemos el 100% sin preguntas.",
          },
        ].map((item) => ({
```

With:

```tsx
        mainEntity: [
          {
            q: "¿Es un producto físico o digital?",
            a: "Es un producto 100% digital. Recibís acceso inmediato al material después de la compra para descargarlo y usarlo desde tu computadora, tablet o celular.",
          },
          {
            q: "¿Sirve si estoy en tratamiento médico?",
            a: "Sí. El Megapack es un sistema de organización alimentaria y guía práctica. No reemplaza la indicación de tu médico o nutricionista, sino que la complementa con herramientas concretas para el día a día.",
          },
          {
            q: "¿Necesito saber cocinar para usarlo?",
            a: "No. El recetario tiene platos de 5 ingredientes o menos, pensados para personas sin tiempo y sin experiencia culinaria avanzada.",
          },
          {
            q: "¿Cuándo recibo el acceso?",
            a: "De forma inmediata. En menos de 5 minutos después de completar tu pago recibís todo el material en tu correo electrónico.",
          },
          {
            q: "¿El precio es en pesos argentinos?",
            a: "Sí. El precio es de $19.990 ARS, pago único, sin suscripción ni cargos adicionales.",
          },
          {
            q: "¿Reemplaza una consulta médica o nutricional?",
            a: "No. El Megapack es una herramienta educativa y de organización. Siempre es recomendable trabajar en paralelo con un profesional de la salud.",
          },
        ].map((item) => ({
```

- [ ] **Step 6: Update `index.html`'s static `<title>`**

Replace (in `index.html`):

```html
<title>Protocolo GLP-1 Sin Rebote — Grasamax</title>
```

With:

```html
<title>Megapack SIBO: El Método Anti-Inflamación</title>
```

- [ ] **Step 7: Type-check**

Run: `npx tsc --noEmit`
Expected: no errors. In particular confirm there are no leftover references to `HERO_IMAGE` or `HERO_IMAGE_MOBILE` anywhere in `App.tsx` (they were deleted in Step 1) — a leftover reference would show as `Cannot find name 'HERO_IMAGE'`.

- [ ] **Step 8: Commit**

```bash
git add src/App.tsx index.html
git commit -m "feat: reskin App SEO metadata, JSON-LD and pixel config for Megapack SIBO"
```

---

### Task 18: Full-site verification

**Files:** none (verification only).

- [ ] **Step 1: Full production build**

Run: `npm run build`
Expected: builds successfully (`tsc && vite build`) with no TypeScript errors and no missing-asset warnings (the old `protocolo-glp1-mockup*.webp` and `bono*.webp` references should be gone from `src/`, so Vite shouldn't complain about unresolved imports — note these files remain unused in `public/`, which is fine, they're just not referenced anymore).

- [ ] **Step 2: Grep for leftover old-product terms**

Run each of these from the project root and confirm zero matches inside `src/` (matches in `public/checklist-2/` or in unrelated `docs/` files are expected and fine — that's a different product, out of scope):

```bash
grep -ril "GLP-1" src/
grep -ril "Grasamax" src/
grep -ril "bio-hack" src/
grep -ril "PubMed" src/
```

Expected: no output (no matches) for all four.

- [ ] **Step 3: Manual visual QA in the browser**

Run: `npm run preview` (after the build in Step 1), open the printed local URL, and check:

- Every section reads as "Megapack SIBO: El Método Anti-Inflamación" content, no mixed branding.
- The two placeholder mockup styles (`ProductCoverPlaceholder` in Hero/Solution/Pricing, `BonusCoverPlaceholder` x5 in Bonuses) render with the olive/gold palette, no broken image icons.
- Clicking any "comprar"/CTA button either scrolls to the pricing section (`#comprar` anchor) or opens `https://megapack-sibo-el-metodo-anti-inflamacion.impultienda.ar/checkout` in a new context — confirm by inspecting the `href` in devtools (don't need to complete a real checkout).
- The FAQ accordion still opens/closes correctly with the new 6 questions.
- The floating CTA and the purchase-notification toast both appear on scroll and show the new copy.
- The testimonials section shows exactly 3 cards, evenly laid out in 3 columns on desktop.

- [ ] **Step 4: Stop the preview server**

No commit needed for this task — it's verification-only. If any issue is found during Steps 2–3, fix it in the relevant task's file and re-run this task from Step 1.

---

## Self-Review Notes

- **Spec coverage:** every section listed in the design spec's "1. Mapeo de contenido por componente" has a corresponding task (Tasks 3–16); "2. Cambios técnicos/branding" is covered by Tasks 2 and 17; "3. Componentes placeholder" is covered by Task 1. The spec's "Verificación" section is covered by Task 18.
- **Placeholder scan:** no "TBD"/"similar to Task N" left in any step; every step shows the literal before/after code.
- **Type consistency:** `ProductCoverPlaceholder({ className?: string })` and `BonusCoverPlaceholder({ emoji: string; num: number })` signatures from Task 1 are used identically in Tasks 3, 5, 8, 9. The `bonuses` array's `emoji` field (Task 8) matches the prop name consumed by `BonusCoverPlaceholder`.
