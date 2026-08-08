import React from "react";
export function Footer() {
  return (
    <footer className="bg-[#232b21] text-[#c1c8b6] py-10 border-t border-[#3a4434]">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-2">
          🛡️ KIT DESBLOQUEIO TOTAL
        </div>

        <p className="text-xs max-w-2xl mx-auto mb-8 leading-relaxed">
          Este produto é uma ferramenta de orientação espiritual e
          autoconhecimento para uso pessoal. Não constitui aconselhamento
          médico, psicológico, jurídico ou financeiro, nem substitui a
          consulta com profissionais habilitados em cada área. Os
          resultados podem variar de acordo com a dedicação e a intenção de
          cada pessoa.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">
            Termos e Condições
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidade
          </a>
          <a
            href="mailto:contato@kitdesbloqueiototal.tupuntodigital.shop"
            className="hover:text-white transition-colors"
          >
            Contato
          </a>
        </div>

        <div className="text-xs text-[#a4ad96]">
          <p>
            © 2026 Kit Desbloqueio Total — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
