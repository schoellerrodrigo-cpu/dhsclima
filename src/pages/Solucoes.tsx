import { Link } from 'react-router-dom'
import { Network, Lightbulb, Target, Heart, ArrowRight } from 'lucide-react'
import Card from '../components/Card'

export default function Solucoes() {
  const necessidades = [
    {
      tipo: 'Fisiológicas',
      exemplos: ['Fome', 'Sono', 'Saúde'],
      color: 'bg-red-100 text-red-800'
    },
    {
      tipo: 'Psicológicas',
      exemplos: ['Segurança', 'Pertencimento', 'Autoestima'],
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      tipo: 'Autorrealização',
      exemplos: ['Desenvolvimento', 'Potencial', 'Superação'],
      color: 'bg-green-100 text-green-800'
    }
  ]

  const eixosSustentabilidade = [
    { nome: 'Econômico', descricao: 'Geração de renda e valor agregado', icon: '💰', color: 'border-blue-500' },
    { nome: 'Social', descricao: 'Saúde, educação, cidadania e segurança', icon: '👥', color: 'border-green-500' },
    { nome: 'Ambiental', descricao: 'Equilíbrio e harmonia com a natureza', icon: '🌱', color: 'border-accent-500' }
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Soluções Propostas</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pensamento sistêmico e o Desenvolvimento Harmônico e Sustentável (DHS)
          </p>
        </div>

        {/* Seção 1: Pensamento Sistêmico */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Network className="h-8 w-8 text-primary-600 mr-3" />
            1. O Pensamento Sistêmico e Complexo
          </h2>
          
          <Card className="mb-6">
            <div className="flex items-start mb-4">
              <Lightbulb className="h-8 w-8 text-accent-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-3">Mudança de Paradigma</h3>
                <p className="text-gray-700 leading-relaxed">
                  A superação da crise exige uma <strong>mudança fundamental</strong> na forma de perceber e agir, 
                  adotando o <strong>pensamento sistêmico e complexo</strong>. Este novo paradigma foca nas 
                  <strong> relações, interconexões e consequências</strong> dos atos em um contexto amplo.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Pensamento Sistêmico:</strong> "Filtro de compreensão do mundo" que avalia a consistência 
                e a sustentabilidade das estratégias por meio de ciclos de reforço e equilíbrio.
              </p>
              <p className="text-gray-700">
                <strong>Pensamento Complexo (Edgar Morin):</strong> "Modo de pensar organizador que pode atravessar 
                as disciplinas", permitindo uma integração mais profunda do conhecimento.
              </p>
            </div>
          </Card>

          {/* Tabela de Abordagens */}
          <Card>
            <h3 className="text-lg font-semibold mb-4">Evolução das Abordagens</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Abordagem
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Descrição
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Analogia (Tripulação)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Multidisciplinar
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Diversos assuntos impactados, mas sem cooperação ou interconexão
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      🔴 Tripulantes remando desordenadamente. O barco anda em círculos.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Interdisciplinar
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Diversos assuntos com cooperação e interconexão para atingir um objetivo
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      🟡 Tripulação alinhada como competição de remo. Avança, mas não está preparado para turbulências.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-accent-700">
                      Transdisciplinar
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Assuntos unificados, gerando pensamento complexo/sistêmico que transpassa disciplinas
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      🟢 Tripulação percebe missão comum. Remam juntos e o barco vira navio apto a navegar mares bravios.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Seção 2: Definição do DHS */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Target className="h-8 w-8 text-primary-600 mr-3" />
            2. Desenvolvimento Harmônico e Sustentável (DHS)
          </h2>

          <Card className="mb-6 bg-gradient-to-r from-primary-50 to-accent-50 border-l-4 border-primary-600">
            <h3 className="text-xl font-semibold mb-4 text-primary-900">Definição</h3>
            <p className="text-gray-800 leading-relaxed text-lg">
              O processo evolutivo que busca, a partir de <strong>foco(s) prioritário(s)</strong> e, no que couber, 
              dando relevância à família, <strong>atender necessidades</strong>, com <strong>impactos proporcionais 
              nos 3 eixos da sustentabilidade</strong> (econômico, social e ambiental), por meio da <strong>convergência 
              dos 3 setores</strong> (público, privado e sociedade civil organizada) e da comunidade em geral e via 
              promoção de <strong>atuações resolutivas e matrizes de convergência</strong>, gerando a melhora nas relações, 
              a liberdade com a consciência da unidade e a Paz, interna e externa.
            </p>
          </Card>

          {/* Componentes Chave */}
          <h3 className="text-xl font-semibold mb-6">Componentes Chave do DHS</h3>

          {/* 1. Necessidades */}
          <Card className="mb-6">
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Heart className="h-6 w-6 text-red-500 mr-2" />
              1. Atendimento de Necessidades Humanas
            </h4>
            <p className="text-gray-700 mb-4">
              O processo vai além de vontades e desejos, focando em exigências legítimas para o bem-estar:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {necessidades.map((item) => (
                <div key={item.tipo} className={`${item.color} p-4 rounded-lg`}>
                  <h5 className="font-semibold mb-2">{item.tipo}</h5>
                  <ul className="text-sm space-y-1">
                    {item.exemplos.map((ex) => (
                      <li key={ex}>• {ex}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          {/* 2. Eixos da Sustentabilidade */}
          <Card className="mb-6">
            <h4 className="text-lg font-semibold mb-4">
              2. Impactos Proporcionais nos Eixos da Sustentabilidade
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eixosSustentabilidade.map((eixo) => (
                <div key={eixo.nome} className={`border-l-4 ${eixo.color} pl-4`}>
                  <div className="text-3xl mb-2">{eixo.icon}</div>
                  <h5 className="font-semibold text-lg mb-1">{eixo.nome}</h5>
                  <p className="text-gray-600 text-sm">{eixo.descricao}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* 3. Convergência */}
          <Card className="mb-6 bg-purple-50">
            <h4 className="text-lg font-semibold mb-4">
              3. Convergência dos Três Setores e da Comunidade
            </h4>
            <p className="text-gray-700 mb-4">
              A participação conjunta é essencial para o sucesso:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-full shadow-md font-semibold text-purple-700">
                Setor Público
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md font-semibold text-purple-700">
                Setor Privado
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md font-semibold text-purple-700">
                Sociedade Civil
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md font-semibold text-purple-700">
                Comunidade
              </div>
            </div>
          </Card>

          {/* 4. Família */}
          <Card className="bg-blue-50">
            <h4 className="text-lg font-semibold mb-3">
              4. Relevância da Família
            </h4>
            <p className="text-gray-700">
              A família é considerada a <strong>base da sociedade</strong> (art. 226 da CF/88) e um ambiente 
              primordial para o fomento do DHS e o desenvolvimento de valores.
            </p>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-accent-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Próximo Passo: Metodologias</h3>
          <p className="text-lg mb-6">
            Descubra as ferramentas práticas para implementar o DHS: PGS e NMC.
          </p>
          <Link
            to="/metodologias"
            className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Ir para Metodologias
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
