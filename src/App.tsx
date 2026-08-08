import React, { useEffect, createElement } from "react";
import { MotionConfig } from "framer-motion";
import { Landing } from "./pages/Landing";
import { useScreenInit } from "./useScreenInit";
import { getCheckoutUrl } from "./utils/checkoutUrl";
const META_PIXEL_ID = "1782363579776107";
const PAGE_TITLE =
  "Kit Desbloqueio Total | Sistema Completo Para Desbloquear Sua Vida Espiritual";
const PAGE_DESC =
  "7 dias de protocolo espiritual prontos para aplicar: diagnóstico, rituais, decretos, calendário e guias de proteção em PDFs prontos para usar, imprimir e transformar sua vida.";
const HERO_IMAGE = `${import.meta.env.BASE_URL}kit-desbloqueio-mockup.png`;
const HERO_IMAGE_MOBILE = `${import.meta.env.BASE_URL}kit-desbloqueio-mockup-mobile.png`;

const SITE_URL = "https://kitdesbloqueiototal.tupuntodigital.shop";
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
    document.documentElement.lang = "pt-BR";
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
    setMeta("property", "og:locale", "pt_BR");
    setMeta("property", "og:image", absoluteUrl(HERO_IMAGE));
    setMeta("property", "og:url", SITE_URL);
    setMeta(
      "property",
      "og:site_name",
      "Kit Desbloqueio Total",
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
        name: "Kit Desbloqueio Total",
        description: PAGE_DESC,
        image: absoluteUrl(HERO_IMAGE),
        brand: {
          "@type": "Brand",
          name: "Kit Desbloqueio Total",
        },
        offers: {
          "@type": "Offer",
          price: "67.00",
          priceCurrency: "BRL",
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
