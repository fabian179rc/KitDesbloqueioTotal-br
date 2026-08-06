import React, { useEffect, createElement } from "react";
import { MotionConfig } from "framer-motion";
import { Landing } from "./pages/Landing";
import { useScreenInit } from "./useScreenInit";
import { getCheckoutUrl } from "./utils/checkoutUrl";
const META_PIXEL_ID = "8851973042408664";
const PAGE_TITLE =
  "Protocolo GLP-1 Sin Rebote — Grasamax | Biohacking & GLP-1";
const PAGE_DESC =
  "El manual técnico que tu médico no te dio para transformarte con GLP-1 sin perder músculo, firmeza ni piel.";
const HERO_IMAGE = `${import.meta.env.BASE_URL}protocolo-glp1-mockup.webp`;
const HERO_IMAGE_MOBILE = `${import.meta.env.BASE_URL}protocolo-glp1-mockup-mobile.webp`;

const SITE_URL = "https://grasamax.com";
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
    setMeta("property", "og:image", HERO_IMAGE);
    setMeta("property", "og:url", SITE_URL);
    setMeta(
      "property",
      "og:site_name",
      "Grasamax",
    );
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:image", HERO_IMAGE);
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
    // Solo se carga el Meta Pixel real (3505657626270665).
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
