import React from "react";
export function Footer() {
  return (
    <footer className="bg-[#232b21] text-[#c1c8b6] py-10 border-t border-[#3a4434]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
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
      </div>
    </footer>
  );
}
