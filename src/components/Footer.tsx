import React from "react";
export function Footer() {
  return (
    <footer className="bg-[#232b21] text-[#c1c8b6] py-10 border-t border-[#3a4434]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-2">
          🛡️ GRAN PACCHETTO MECCANICA KIDS
        </div>

        <p className="text-xs max-w-2xl mx-auto mb-8 leading-relaxed">
          Il Gran Pacchetto è uno strumento educativo digitale a scopo
          ricreativo e didattico. I contenuti sono semplificazioni
          pedagogiche pensate per bambini. Non sostituisce la supervisione
          di un adulto durante qualsiasi attività pratica con veicoli reali.
          Qualsiasi interazione con parti meccaniche deve avvenire
          esclusivamente sotto la guida e la presenza di un adulto
          responsabile.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">
            Termini e Condizioni
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Informativa sulla Privacy
          </a>
          <a
            href="mailto:contatto@piccoloingegnere.tupuntodigital.shop"
            className="hover:text-white transition-colors"
          >
            Contatto
          </a>
        </div>

        <div className="text-xs text-[#a4ad96]">
          <p>
            © 2026 Gran Pacchetto Meccanica Kids — Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
