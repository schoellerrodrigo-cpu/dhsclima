import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Leaf } from 'lucide-react'
import { useState } from 'react'

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
    { name: 'CAO na Estrada', path: '/cao-na-estrada' },
    { name: 'Violência ECA', path: '/violencia-eca' },
    { name: 'FAQ', path: '/faq' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-accent-600" />
            <span className="text-xl font-bold text-gray-900">Guia DHS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                } py-2`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
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
