import React from "react";
export function Footer() {
  return (
    <footer className="bg-[#232b21] text-[#c1c8b6] py-10 border-t border-[#3a4434]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
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
      </div>
    </footer>
  );
}
