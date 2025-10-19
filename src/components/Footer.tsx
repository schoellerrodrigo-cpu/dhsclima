import { Heart, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre o DHS</h3>
            <p className="text-gray-300 text-sm">
              Guia prático para implementação do Desenvolvimento Harmônico e Sustentável,
              promovendo a transformação social através do pensamento sistêmico.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/diagnostico" className="text-gray-300 hover:text-white transition-colors">Diagnóstico da Crise</a></li>
              <li><a href="/solucoes" className="text-gray-300 hover:text-white transition-colors">Soluções Propostas</a></li>
              <li><a href="/metodologias" className="text-gray-300 hover:text-white transition-colors">Metodologias</a></li>
              <li><a href="/implementacao" className="text-gray-300 hover:text-white transition-colors">Implementação</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm">
              <a href="mailto:contato@dhs.gov.br" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                contato@dhs.gov.br
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="flex items-center justify-center">
            Feito com <Heart className="h-4 w-4 mx-1 text-red-500" /> para um futuro mais harmônico e sustentável
          </p>
          <p className="mt-2">© 2025 Guia DHS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
