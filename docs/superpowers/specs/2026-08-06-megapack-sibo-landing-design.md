# Diseño: Reskin de la landing a "Megapack SIBO: El Método Anti-Inflamación"

## Contexto

El proyecto (`13-Sibo`, Vite + React + Tailwind, SPA sin router, `src/pages/Landing.tsx`
compone 13 secciones) es una landing reutilizada de otro producto: título,
copy, checkout URL, imágenes y schema.org actuales pertenecen a "Protocolo
GLP-1 Sin Rebote — Grasamax", y el checkout apunta a un tercer producto
distinto ("bio-hack-peso-ideal"). No existe ninguna imagen del Megapack SIBO
en el repo — `bon1.webp`..`bon5.webp`, `Mockup-mobile1.png` y
`mockup-web2.png` (raíz del proyecto) pertenecen a otro producto ajeno
("BIO-HACK: PESO IDEAL") y no se usan.

Objetivo: reemplazar todo el contenido, branding y checkout de la landing
por el del Megapack SIBO, manteniendo la estructura de componentes, el
diseño visual y la paleta de colores actual (verde oliva `#4A553F`,
terracota `#B85C43`, dorado `#d4a017`).

## Decisiones ya tomadas con el usuario

- **Imágenes**: no se generan con IA. Se reemplazan los mockups de imagen
  por dos componentes placeholder reutilizables (ver sección 3), fáciles de
  swapear por `<img>` reales más adelante.
- **Checkout**: `https://megapack-sibo-el-metodo-anti-inflamacion.impultienda.ar/checkout`
- **Dominio**: `sibo.tupuntodigital.shop`
- **Email de contacto**: no lo dio el usuario → placeholder
  `contacto@sibo.tupuntodigital.shop`
- **Meta Pixel**: no se dio ID → se deja vacío (el código ya no carga el
  pixel si `META_PIXEL_ID` está vacío, sin necesidad de tocar esa lógica)
- **Paleta de colores**: se mantiene sin cambios

## 1. Mapeo de contenido por componente

Se edita el copy/datos de cada componente, sin tocar layout, clases Tailwind
ni animaciones, salvo donde se indica explícitamente.

### `HeroSection.tsx`
- Badge: "✨ Sistema Completo — Método Anti-Inflamación"
- H1: "Tu digestión ordenada, tu abdomen desinflamado." / "Desde hoy."
- Bajada (desktop): "Guías, protocolos, listas de compras, planners,
  checklists y reemplazos inteligentes en PDFs editables, imprimibles e
  interactivos."
- Línea destacada: "🗂️ Ordená tus comidas · 🎯 Identificá qué te inflama ·
  ✅ Comé con libertad"
- Microtexto: "Sin dietas imposibles. Sin adivinar qué te cayó mal."
- CTA: "🚀 Sí, quiero el Megapack ahora"
- Trust bar (4 íconos existentes Star/ShieldCheck/Zap/CreditCard):
  "4.9/5 — Valoración de usuarias" · "Garantía de 7 Días" · "Acceso
  inmediato" · "Pago único"
- Imagen del mockup → `ProductCoverPlaceholder` (ver sección 3)

### `ProblemSection.tsx`
- H2: "¿Te reconocés en esto?"
- Italic subline: "Sabés identificar cuándo te inflama algo, pero cada
  comida es adivinar qué estuvo mal."
- Intro: "Si tenés SIBO diagnosticado o síntomas compatibles como
  hinchazón, gases, distensión abdominal o miedo a comer, probablemente ya
  viviste esto:"
- 4 `situations` (emoji/título/desc) = las 4 del copy: Información
  desordenada, Comidas que toman demasiada energía mental, Síntomas que
  quedan sin resolver, Sensación de que nada funciona de verdad.

### `SolutionSection.tsx`
- Badge: "LA SOLUCIÓN — SISTEMA TODO EN UNO"
- H2: "El sistema completo para entender qué te inflama y comer con
  libertad en cualquier situación de tu vida real"
- Imagen → `ProductCoverPlaceholder`
- Párrafo card: "Ese no es un problema de voluntad. Es un problema de no
  tener el sistema correcto. Un sistema de trabajo completo, desde entender
  qué te inflama hasta comer con libertad en cualquier situación de tu vida
  real."

### `FeaturesSection.tsx`
- H2: "¿QUÉ VAS A LOGRAR CON ESTE SISTEMA?"
- 4 `features` = los 4 checks del copy: Ahorrar energía mental en cada
  comida, Trabajar con más orden digestivo, Presentarte mejor ante tu
  propio cuerpo, Dar seguimiento sin improvisar (con sus descripciones
  completas del copy).

### `ContentSection.tsx`
- Badge: "¿Qué contiene?"
- H2: "¿QUÉ CONTIENE EL MEGAPACK SIBO: EL MÉTODO ANTI-INFLAMACIÓN?"
- Subtítulo: "Todo lo que necesitás para ordenar tu digestión sin adivinar
  nada. 🎯"
- Párrafo intro (reemplaza stats inventadas de "150 páginas/14 protocolos"
  que no aplican a SIBO): "El Megapack SIBO reúne guías, protocolos, listas
  de compras, planners, checklists y reemplazos inteligentes, organizados
  en 6 módulos, con 5 bonos incluidos — todo en PDFs editables, imprimibles
  e interactivos."
- Grid `temas` (12 tags) reemplazado por tags derivados del copy: Rescate
  en Crisis, Semáforo de Alimentos, 3 Fases Anti-Inflamación, Intercambios
  Rápidos, Recetas 5 Ingredientes, Diario de Síntomas, Súper Argentino,
  Checklist de Arranque, Lectura de Etiquetas, Planner Semanal, Porciones
  Visuales, Comer Fuera de Casa.
- Bloque verde `adaptabilidad` (antes "Referencias PubMed / Sin opinión de
  internet / Toda Latinoamérica", no aplica a este producto) reemplazado
  por: "🇦🇷 Adaptado a supermercados argentinos", "📋 Protocolos prácticos,
  listos para aplicar", "👩 Pensado para mujeres con SIBO". Texto del
  párrafo: "Herramientas prácticas de organización y seguimiento
  alimentario, pensadas para adaptarse a tu rutina real. No reemplazan la
  indicación de tu médico o nutricionista — la complementan."
- `incluye` (6 módulos) = filas de la tabla del copy: Protocolo de Rescate
  24 Horas, Semáforo de Supermercado Argentino, Guía de las 3 Fases
  Anti-Inflamación, Matriz de Intercambio Rápido, Recetario Cero Estrés,
  Diario de Síntomas Express (cada uno con su descripción "lo que
  resuelve" del copy).

### `BonusesSection.tsx`
- Los 5 `bonuses` exactos del copy (título + desc), con `emoji` en vez de
  `image`: Checklist de Arranque SIBO en 30 Minutos (✅), Guía Express de
  Etiquetas Anti-Inflamación (🏷️), Planner de Comidas Sin Estrés (🗓️),
  Tarjetas Visuales de Porciones y Combinaciones (🍽️), Kit de Emergencia
  para Comer Fuera de Casa (🧳).
- Imagen de cada bono → `BonusCoverPlaceholder` (ver sección 3), manteniendo
  los badges "Bono N" / "🎁 Gratis" existentes.
- Bloque resumen final: "Todo incluido en" / "el Megapack SIBO: El Método
  Anti-Inflamación" / "Los 5 bonos son gratis con tu compra hoy."

### `PricingSection.tsx`
- Badge: "🔥 Precio de Lanzamiento — Por Tiempo Limitado"
- H2: "Accedé al sistema completo y empezá el cambio hoy"
- Ribbon de descuento: 80%
- Precio regular tachado: "$59.500 ARS"
- Precio grande: "$19.990" con label "ARS" (se quita la línea de
  multi-moneda "MXN · COP · ARS · CLP · PEN" del template viejo — el
  producto es solo ARS) → reemplazada por "Pagás en un solo pago, accedés
  de forma inmediata."
- Urgencia: "🔥 ¡Última oportunidad! El precio sube al finalizar el
  contador."
- Contador regresivo: se mantiene el mecanismo tal cual (no hay hora
  específica en el copy)
- CTA: "🚀 Sí, quiero el Megapack ahora"
- Trust icons: Acceso inmediato / Pago único / Garantía 7 días / Pago
  seguro
- Imagen → `ProductCoverPlaceholder`

### `GuaranteeSection.tsx`
- Badge: "Tu inversión está 100% protegida"
- H2: "Garantía Total de 7 Días"
- Subtítulo: "Sin preguntas, sin formularios interminables, sin drama"
- Párrafo: "Tenés 7 días para revisar el Megapack completo. Si no
  corresponde con lo ofrecido, podés solicitar la devolución sin
  preguntas, sin formularios interminables y sin drama."
- Pill: "Sin Riesgo"

### `TestimonialsBottom.tsx`
- 3 `testimonials` reales del copy: María G. (Buenos Aires), Laura P.
  (Córdoba), Andrea R. (Rosario), con sus textos exactos.
- Se quita el dato "+1.200 usuarias LATAM" (no está en el copy, no se
  inventa). Línea de stats: "⭐ 4.9/5 — Valoración de usuarias".
- Grid cambia de `md:grid-cols-2` (dejaba un hueco con 3 ítems) a
  `md:grid-cols-3` para acomodar las 3 tarjetas parejo.

### `FaqSection.tsx`
- Las 6 preguntas exactas del copy: producto físico/digital, tratamiento
  médico, necesito saber cocinar, cuándo recibo el acceso, precio en ARS,
  reemplaza consulta médica.

### `FinalPricingCTA.tsx`
- Badge: "Última Oportunidad"
- H2: "Más claridad, más orden y menos ansiedad en cada comida"
- Subtítulo: "Dejá de armar cada semana desde cero: el Megapack te da el
  sistema para lograrlo."
- Card: "🎁 Kit Completo Megapack SIBO: El Método Anti-Inflamación + 5
  Bonos Incluidos", precio tachado $59.500 ARS, precio final $19.990 ARS
- CTA: "🚀 Sí, quiero mi Megapack ahora"
- Trust row: Acceso inmediato / Pago único / Garantía de 7 días /
  "Producto digital para mujeres de Argentina y LATAM" (reemplaza el 4to
  ícono duplicado de "Pago único" por este texto, tal como cierra el copy)

### `Footer.tsx`
- Título: "🛡️ MEGAPACK SIBO: EL MÉTODO ANTI-INFLAMACIÓN"
- Disclaimer legal (texto exacto del copy, no parafrasear — es su
  compliance): "El Megapack es una herramienta digital de organización y
  orientación alimentaria para personas con síntomas compatibles con SIBO
  o diagnóstico confirmado. Debés adaptarlo a tu situación personal y
  consultar con tu profesional de salud. No constituye asesoramiento
  médico, nutricional ni diagnóstico clínico obligatorio, ni reemplaza a
  profesionales habilitados."
- Email de contacto: `contacto@sibo.tupuntodigital.shop` (placeholder)
- Copyright: "© 2026 Megapack SIBO: El Método Anti-Inflamación — Todos los
  derechos reservados."

### `FloatingCTA.tsx`
- Texto: "🚀 ¡Quiero mi Megapack ya!"

### `PurchaseNotification.tsx`
- `PRODUCT_NAME` = "Megapack SIBO: El Método Anti-Inflamación",
  `PRODUCT_NAME_SHORT` = "Megapack SIBO"
- Los 6 nombres de compradores se cambian a nombres femeninos (el copy
  apunta explícitamente a "mujeres con SIBO"), manteniendo las mismas 6
  ciudades de LATAM ya presentes.

## 2. Cambios técnicos / branding

- `src/utils/checkoutUrl.ts`: `CHECKOUT_BASE_URL` →
  `https://megapack-sibo-el-metodo-anti-inflamacion.impultienda.ar/checkout`
- `src/App.tsx`:
  - `PAGE_TITLE` = "Megapack SIBO: El Método Anti-Inflamación | Sistema
    completo para tu digestión"
  - `PAGE_DESC` = "Guías, protocolos, listas de compras, planners,
    checklists y reemplazos inteligentes para ordenar tu digestión y
    desinflamar tu abdomen. PDFs editables, imprimibles e interactivos."
  - `SITE_URL` = `https://sibo.tupuntodigital.shop`
  - `META_PIXEL_ID` = `""` (sin pixel activo hasta que el usuario provea
    uno real; el guard `if (!META_PIXEL_ID) return;` ya existe)
  - Se eliminan los `addLink("preload", HERO_IMAGE...)` y
    `og:image`/`twitter:image` que apuntaban a archivos `.webp`
    inexistentes para SIBO (no hay imagen real todavía — evita referenciar
    un archivo roto). Se documenta como pendiente para cuando haya mockup
    real.
  - JSON-LD `Product`: `name`, `description`, `brand.name` = "Megapack
    SIBO", `offers.price` = `"19990"`, `offers.priceCurrency` = `"ARS"`,
    `offers.url` = `getCheckoutUrl()`
  - JSON-LD `FAQPage`: sincronizado con las 6 preguntas nuevas de
    `FaqSection.tsx`
- `index.html`: `<title>` → "Megapack SIBO: El Método Anti-Inflamación"

## 3. Componentes placeholder de imagen (nuevos)

Dos componentes chicos y reutilizables en `src/components/`, con la
paleta de colores actual, para no depender de archivos de imagen
inexistentes. Cuando existan las imágenes reales, se reemplaza el uso de
estos componentes por `<img>`/`<picture>` sin tocar el resto del layout.

- **`ProductCoverPlaceholder.tsx`**: tarjeta cuadrada (mismo aspect-ratio
  que el mockup actual, `rounded-2xl`), fondo degradado verde oliva
  (`#4A553F` → `#2f3a2c`), ícono de libro, texto "MEGAPACK · SIBO: El
  Método Anti-Inflamación". Reemplaza el `<picture>` en `HeroSection`,
  `SolutionSection` y `PricingSection` (mismas 3 instancias del mockup
  actual).
- **`BonusCoverPlaceholder.tsx`**: recibe `emoji: string` y `num: number`
  como props, tarjeta con fondo crema (`#f4efe2`) a tono con el diseño
  existente de las tarjetas de bono, mismo alto (`h-56`) que el contenedor
  actual. Reemplaza el `<img>` dentro de cada card de `BonusesSection`,
  manteniendo los badges absolutos existentes.

## Fuera de alcance

- `public/checklist-2/` (página estática de otro producto/proyecto) — no
  se toca.
- No se genera ninguna imagen con IA (decisión explícita del usuario).
- No se compra ni configura un Meta Pixel real.
- No se cambia la paleta de colores ni el layout/estructura de secciones.

## Verificación

- `npm run build` sin errores de TypeScript.
- `npm run dev` / `npm run preview`: revisar visualmente las 13 secciones,
  confirmar que no quede ningún texto/dato del producto anterior (buscar
  "GLP-1", "Grasamax", "Protocolo", "bio-hack" en `src/`), que el botón de
  compra apunte al checkout de SIBO, y que los placeholders de imagen se
  vean coherentes con la paleta.
