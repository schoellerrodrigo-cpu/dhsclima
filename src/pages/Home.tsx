import { Link } from 'react-router-dom'
import { ArrowRight, Target, Lightbulb, Users, BookOpen, CheckCircle, HelpCircle, Calculator, Shield, Route, Baby } from 'lucide-react'
import Card from '../components/Card'

export default function Home() {
  const sections = [
    {
      title: 'Diagnóstico da Crise',
      description: 'Compreenda as causas raízes dos problemas atuais e os paradigmas limitantes.',
      icon: Target,
      path: '/diagnostico',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Soluções Propostas',
      description: 'Pensamento sistêmico e a definição do Desenvolvimento Harmônico e Sustentável.',
      icon: Lightbulb,
      path: '/solucoes',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Metodologias',
      description: 'PGS (Planejamento e Gestão Sistêmicos) e mecanismos de NMC.',
      icon: Users,
      path: '/metodologias',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Implementação',
      description: 'Guia passo a passo com a Matriz de Convergência.',
      icon: CheckCircle,
      path: '/implementacao',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Calculadora DHS',
      description: 'Avalie o índice de maturidade da sua iniciativa nos critérios do DHS.',
      icon: Calculator,
      path: '/calculadora',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      destaque: true
    },
    {
      title: 'Plano de Contingência',
      description: 'Elaboração de Planos de Contingência de Defesa Civil (PLANCON) baseado na PNPDEC.',
      icon: Shield,
      path: '/plano-contingencia',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      destaque: true
    },
    {
      title: 'Violência Doméstica',
      description: 'Guia de Avaliação de Risco do MPDFT - Enfrentamento à violência doméstica com recomendações do MP-RS.',
      icon: Route,
      path: '/cao-na-estrada',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      destaque: true
    },
    {
      title: 'Violência ECA',
      description: 'Protocolo de enfrentamento à violência contra crianças e adolescentes segundo o Estatuto da Criança e do Adolescente.',
      icon: Shield,
      path: '/violencia-eca',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      destaque: true
    },
    {
      title: 'Primeira Infância',
      description: 'Manual de Atuação do MP na Defesa e Promoção da Educação Infantil - Superação do déficit de vagas em creches e pré-escolas.',
      icon: Baby,
      path: '/primeira-infancia',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      destaque: true
    },
    {
      title: 'Recursos',
      description: 'Documentos, acordos e ferramentas práticas para aplicação.',
      icon: BookOpen,
      path: '/recursos',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'FAQ',
      description: 'Perguntas frequentes e respostas sobre o DHS e sua implementação.',
      icon: HelpCircle,
      path: '/faq',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Desenvolvimento Harmônico e Sustentável via atuação resolutiva de Planejamento e de Gestão Sistêmicos
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Instrumento prático de implementação para todas as áreas
            </p>
            <Link
              to="/diagnostico"
              className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Começar Jornada
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">O que é o DHS?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              O <strong>Desenvolvimento Harmônico e Sustentável (DHS)</strong> é um processo evolutivo 
              que busca atender necessidades humanas integrais de forma equilibrada nos eixos econômico, 
              social e ambiental, por meio da <strong>convergência dos setores público, privado e sociedade civil</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Seções do Guia */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Explore o Guia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <Link key={section.path} to={section.path} className="group">
                  <Card className={`h-full hover:scale-105 transition-transform ${
                    section.destaque ? 'ring-4 ring-primary-500 ring-opacity-50 shadow-xl' : ''
                  }`}>
                    {section.destaque && (
                      <div className="bg-gradient-to-r from-primary-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                        ⭐ NOVIDADE
                      </div>
                    )}
                    <div className={`${section.bgColor} ${section.color} p-3 rounded-lg inline-block mb-4`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{section.description}</p>
                    <div className="flex items-center text-primary-600 font-medium">
                      {section.destaque ? 'Experimentar' : 'Explorar'} <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent-600 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar a sociedade?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Comece pela compreensão das causas raízes da crise atual.
          </p>
          <Link
            to="/diagnostico"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Ir para Diagnóstico
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
