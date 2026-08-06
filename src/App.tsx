import React, { useEffect, createElement } from "react";
import { MotionConfig } from "framer-motion";
import { Landing } from "./pages/Landing";
import { useScreenInit } from "./useScreenInit";
import { getCheckoutUrl } from "./utils/checkoutUrl";
const META_PIXEL_ID = "";
const PAGE_TITLE =
  "Megapack SIBO: El Método Anti-Inflamación | Sistema completo para tu digestión";
const PAGE_DESC =
  "Guías, protocolos, listas de compras, planners, checklists y reemplazos inteligentes para ordenar tu digestión y desinflamar tu abdomen. PDFs editables, imprimibles e interactivos.";
const HERO_IMAGE = `${import.meta.env.BASE_URL}megapack-sibo-mockup.png`;
const HERO_IMAGE_MOBILE = `${import.meta.env.BASE_URL}megapack-sibo-mockup-mobile.png`;

const SITE_URL = "https://sibo.tupuntodigital.shop";
function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
function addLink(
  rel: string,
  href: string,
  attrs: Record<string, string> = {},
) {
  const selector = `link[rel="${rel}"][href="${href}"]`;
  if (document.head.querySelector(selector)) return;
  const el = document.createElement("link");
  el.rel = rel;
  el.href = href;
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  document.head.appendChild(el);
}
function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}
export function App() {
  useScreenInit();
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = "es";
    document.title = PAGE_TITLE;
    addLink("preconnect", "/cdn.magicpatterns.com", {
      crossorigin: "",
    });
    addLink("preconnect", "https://fonts.googleapis.com");
    addLink("preconnect", "https://fonts.gstatic.com", {
      crossorigin: "",
    });
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
    addLink("canonical", SITE_URL);
    setMeta("name", "description", PAGE_DESC);
    setMeta(
      "name",
      "viewport",
      "width=device-width, initial-scale=1, viewport-fit=cover",
    );
    setMeta("name", "theme-color", "#F9F8F6");
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", PAGE_TITLE);
    setMeta("property", "og:description", PAGE_DESC);
    setMeta("property", "og:locale", "es_LA");
    setMeta("property", "og:image", absoluteUrl(HERO_IMAGE));
    setMeta("property", "og:url", SITE_URL);
    setMeta(
      "property",
      "og:site_name",
      "Megapack SIBO",
    );
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:image", absoluteUrl(HERO_IMAGE));
    setMeta("name", "twitter:title", PAGE_TITLE);
    setMeta("name", "twitter:description", PAGE_DESC);
    const ldId = "ld-product-schema";
    if (!document.getElementById(ldId)) {
      const ld = document.createElement("script");
      ld.id = ldId;
      ld.type = "application/ld+json";
      ld.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Megapack SIBO: El Método Anti-Inflamación",
        description: PAGE_DESC,
        image: absoluteUrl(HERO_IMAGE),
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
      document.head.appendChild(ld);
    }
    const faqId = "ld-faq-schema";
    if (!document.getElementById(faqId)) {
      const faq = document.createElement("script");
      faq.id = faqId;
      faq.type = "application/ld+json";
      faq.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
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
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      });
      document.head.appendChild(faq);
    }
  }, []);
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;
    // Sin Meta Pixel configurado todavía (META_PIXEL_ID vacío = no-op).
    if (!META_PIXEL_ID) return;
    const loadPixel = () => {
      const w = window as any;
      if (w.fbq) {
        w.fbq("track", "PageView");
        return;
      }
      const n: any = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      w.fbq = n;
      if (!w._fbq) w._fbq = n;
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      const target = document.head || document.body || document.documentElement;
      target.appendChild(script);
      w.fbq("init", META_PIXEL_ID);
      w.fbq("track", "PageView");
      const noscript = document.createElement("noscript");
      const img = document.createElement("img");
      img.height = 1;
      img.width = 1;
      img.style.display = "none";
      img.alt = "";
      img.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;
      noscript.appendChild(img);
      target.appendChild(noscript);
    };
    const ric = (window as any).requestIdleCallback as
      | ((
          cb: () => void,
          opts?: {
            timeout: number;
          },
        ) => number)
      | undefined;
    if (ric) {
      ric(loadPixel, {
        timeout: 4000,
      });
    } else {
      const t = setTimeout(loadPixel, 2500);
      return () => clearTimeout(t);
    }
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <Landing />
    </MotionConfig>
  );
}
