import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import SearchBar from './SearchBar'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Início', path: '/' },
    { name: 'Diagnóstico', path: '/diagnostico' },
    { name: 'Soluções', path: '/solucoes' },
    { name: 'Metodologias', path: '/metodologias' },
    { name: 'Implementação', path: '/implementacao' },
    { name: 'Recursos', path: '/recursos' },
    { name: 'Calculadora', path: '/calculadora' },
    { name: 'Plano Contingência', path: '/plano-contingencia' },
    { name: 'Violência Doméstica', path: '/cao-na-estrada' },
    { name: 'Violência ECA', path: '/violencia-eca' },
    { name: 'Primeira Infância', path: '/primeira-infancia' },
    { name: 'Org. Criminosas', path: '/organizacoes-criminosas' },
    { name: 'FAQ', path: '/faq' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-16">
          {/* Logo/Title */}
          <Link to="/" className="flex-shrink-0 py-2">
            <span className="text-xl font-bold text-primary-600">DHS Guide</span>
          </Link>

          {/* Desktop Navigation - Two rows for better space */}
          <div className="hidden xl:block flex-1 mx-4">
            {/* First row */}
            <div className="flex justify-center space-x-4 mb-1">
              {navigation.slice(0, 7).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive(item.path)
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  } py-1`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Second row */}
            <div className="flex justify-center space-x-4">
              {navigation.slice(7).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive(item.path)
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  } py-1`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Search Bar and Mobile menu button */}
          <div className="flex items-center gap-3 py-2">
            <SearchBar />
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden py-4 border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-md ${
                  isActive(item.path)
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
