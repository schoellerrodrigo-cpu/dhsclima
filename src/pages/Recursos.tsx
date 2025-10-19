import { useState } from 'react'
import { FileText, Download, ExternalLink, BookOpen, FileCheck, Search } from 'lucide-react'
import Card from '../components/Card'

export default function Recursos() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const recursos = [
    {
      categoria: 'Acordo de Cooperação Nacional',
      items: [
        {
          titulo: 'Esboço do Termo de Acordo',
          descricao: 'Documento que funciona como mapa estratégico para alinhar instituições',
          tipo: 'PDF'
        },
        {
          titulo: 'Comitê Nacional de DHS',
          descricao: 'Estrutura proposta com representantes das instituições signatárias',
          tipo: 'Documento'
        }
      ]
    },
    {
      categoria: 'Documentos Normativos',
      items: [
        {
          titulo: 'Resolução CNJ nº 125/2010',
          descricao: 'Política Judiciária Nacional de tratamento adequado de conflitos',
          tipo: 'Link Externo'
        },
        {
          titulo: 'Resolução CNMP nº 118/2014',
          descricao: 'Política Nacional de Incentivo à Autocomposição',
          tipo: 'Link Externo'
        },
        {
          titulo: 'Constituição Federal - Art. 226',
          descricao: 'Fundamento legal sobre a família como base da sociedade',
          tipo: 'Link Externo'
        }
      ]
    },
    {
      categoria: 'Estudos e Dados',
      items: [
        {
          titulo: 'Consulta PNUD',
          descricao: 'Meio milhão de brasileiros sobre valores essenciais',
          tipo: 'Estudo'
        },
        {
          titulo: 'Resultados PGS no RS',
          descricao: 'Dados sobre economia de R$ 49M e 90% de soluções extrajudiciais',
          tipo: 'Relatório'
        }
      ]
    },
    {
      categoria: 'Ferramentas Práticas',
      items: [
        {
          titulo: 'Matriz de Convergência',
          descricao: 'Template para planejamento e gestão de atividades DHS',
          tipo: 'Template'
        },
        {
          titulo: 'Critérios de Mensuração DHS/PGS',
          descricao: 'Checklist dos 6 requisitos fundamentais',
          tipo: 'Checklist'
        },
        {
          titulo: 'Guia de Convergência Estrutural',
          descricao: 'Passo a passo para alinhar normativas e instrumentos',
          tipo: 'Guia'
        }
      ]
    },
    {
      categoria: 'ODS - Objetivos de Desenvolvimento Sustentável',
      items: [
        {
          titulo: 'Alinhamento com ODS da ONU',
          descricao: 'Como o DHS se conecta com os 17 Objetivos de Desenvolvimento Sustentável',
          tipo: 'Documento'
        }
      ]
    }
  ]

  const iconMap: Record<string, any> = {
    'PDF': Download,
    'Documento': FileText,
    'Link Externo': ExternalLink,
    'Estudo': BookOpen,
    'Relatório': FileCheck,
    'Template': FileText,
    'Checklist': FileCheck,
    'Guia': BookOpen
  }

  // Filtrar recursos baseado na busca
  const filteredRecursos = recursos.map(categoria => ({
    ...categoria,
    items: categoria.items.filter(item =>
      searchTerm === '' ||
      item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      categoria.categoria.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(categoria => categoria.items.length > 0)

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Recursos e Documentos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramentas práticas, documentos normativos e materiais de apoio para implementação do DHS
          </p>
        </div>

        {/* Busca */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por título, descrição ou categoria..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          {searchTerm && (
            <p className="mt-2 text-sm text-gray-600">
              {filteredRecursos.reduce((acc, cat) => acc + cat.items.length, 0)} resultado(s) encontrado(s)
            </p>
          )}
        </div>

        {/* Sobre os Recursos */}
        {!searchTerm && (
          <Card className="mb-12 bg-blue-50 border-l-4 border-blue-600">
            <h3 className="text-lg font-semibold mb-3 text-blue-900">Sobre esta seção</h3>
            <p className="text-gray-700 leading-relaxed">
              Esta área reúne todos os recursos necessários para a implementação prática do Desenvolvimento 
              Harmônico e Sustentável. Os documentos estão organizados por categoria para facilitar o acesso 
              e aplicação nas diferentes etapas do processo.
            </p>
          </Card>
        )}

        {/* Lista de Recursos */}
        {filteredRecursos.map((categoria, catIndex) => (
          <section key={catIndex} className="mb-10">
            <h2 className="section-subtitle mb-6">{categoria.categoria}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoria.items.map((item, itemIndex) => {
                const Icon = iconMap[item.tipo] || FileText
                return (
                  <Card key={itemIndex} className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                    <div className="flex items-start">
                      <div className="bg-primary-100 p-3 rounded-lg mr-4">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">
                            {item.titulo}
                          </h3>
                          <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                            {item.tipo}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{item.descricao}</p>
                        <button className="mt-3 text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center">
                          {item.tipo === 'Link Externo' ? 'Acessar' : 'Baixar'}
                          {item.tipo === 'Link Externo' ? (
                            <ExternalLink className="ml-1 h-4 w-4" />
                          ) : (
                            <Download className="ml-1 h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </section>
        ))}

        {/* Informações Adicionais */}
        <section className="mt-12">
          <h2 className="section-subtitle mb-6">Informações Adicionais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
              <h3 className="text-lg font-semibold mb-3 text-purple-900">Capacitação</h3>
              <p className="text-gray-700 mb-4">
                Eventos interinstitucionais, workshops e cursos EAD para disseminação do conhecimento sobre DHS.
              </p>
              <button className="btn-primary">
                Ver Agenda de Eventos
              </button>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-accent-50">
              <h3 className="text-lg font-semibold mb-3 text-green-900">Casos de Sucesso</h3>
              <p className="text-gray-700 mb-4">
                Exemplos práticos de implementação do PGS e resultados alcançados em diferentes regiões.
              </p>
              <button className="btn-primary">
                Explorar Casos
              </button>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary-600 to-accent-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Tem dúvidas ou sugestões?</h3>
          <p className="text-lg mb-6">
            Entre em contato conosco para mais informações sobre a implementação do DHS.
          </p>
          <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Fale Conosco
          </button>
        </div>
      </div>
    </div>
  )
}
