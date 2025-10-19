import { Link } from 'react-router-dom'
import { Settings, Users2, TrendingUp, ArrowRight, CheckCircle2, DollarSign, Users, Scale } from 'lucide-react'
import Card from '../components/Card'
import StatCard from '../components/StatCard'
import ProgressBar from '../components/ProgressBar'

export default function Metodologias() {
  const criteriosPGS = [
    'Foco(s) Prioritário(s)',
    'Atender Necessidades',
    'Impactos Proporcionais nos 3 Eixos',
    'Convergência dos Setores',
    'Promoção de Atuações Resolutivas e Matrizes'
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Metodologias e Instrumentos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramentas práticas para implementar o DHS
          </p>
        </div>

        {/* Atuações Resolutivas */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <CheckCircle2 className="h-8 w-8 text-primary-600 mr-3" />
            1. Atuações Resolutivas
          </h2>
          
          <Card>
            <p className="text-gray-700 mb-4">
              São formas de atuar que <strong>solucionam problemas</strong> que prejudicam o DHS. 
              Categorizam-se pela abrangência de seus impactos:
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-3 mt-1">
                  Individual
                </div>
                <p className="text-gray-700">Focadas em interesses individuais</p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-3 mt-1">
                  Coletiva
                </div>
                <p className="text-gray-700">Focadas em interesses coletivos (difusos, coletivos em sentido estrito, individuais homogêneos)</p>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mr-3 mt-1">
                  PGS
                </div>
                <p className="text-gray-700">Atuações de maior impacto, que afetam as relações nos planejamentos e gestões de sistemas inteiros</p>
              </div>
            </div>
          </Card>
        </section>

        {/* PGS */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Settings className="h-8 w-8 text-primary-600 mr-3" />
            2. Planejamento e Gestão Sistêmicos (PGS)
          </h2>
          
          <Card className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600">
            <h3 className="text-lg font-semibold mb-3">Definição</h3>
            <p className="text-gray-700 leading-relaxed">
              O <strong>PGS</strong> é a principal atuação resolutiva para fomentar o DHS. É uma forma de atuar que, 
              ao solucionar problemas, desenvolve o <strong>pensamento sistêmico e complexo</strong>.
            </p>
          </Card>

          <Card className="mb-6">
            <h3 className="text-lg font-semibold mb-4">
              Critérios de Mensuração do DHS / Requisitos da Atuação Resolutiva de PGS
            </h3>
            <p className="text-gray-700 mb-4">
              Os requisitos que qualificam uma atuação como PGS são os mesmos critérios utilizados para medir o grau de DHS:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {criteriosPGS.map((criterio, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 font-medium">{criterio}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-green-50">
            <h3 className="text-lg font-semibold mb-3 text-green-900">
              <TrendingUp className="inline h-6 w-6 mr-2" />
              Resultados Comprovados - Rio Grande do Sul
            </h3>
            <p className="text-gray-700 mb-6">
              Aplicação da tecnologia de PGS na área da saúde com impactos mensuráveis:
            </p>

            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <StatCard
                value="90%"
                label="Resolutividade Extrajudicial"
                icon={<Scale className="h-12 w-12" />}
                color="text-green-600"
                trend="up"
                trendValue="Redução de litígios"
              />
              <StatCard
                value="R$ 49M"
                label="Economia em 2016"
                icon={<DollarSign className="h-12 w-12" />}
                color="text-blue-600"
                trend="down"
                trendValue="De R$ 324,8M para R$ 275,8M"
              />
              <StatCard
                value="100+"
                label="Casos Resolvidos/Mês"
                icon={<Users className="h-12 w-12" />}
                color="text-purple-600"
                trend="up"
                trendValue="Aumento contínuo"
              />
            </div>

            {/* Gráficos de Progresso */}
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Indicadores de Impacto</h4>
              <ProgressBar
                label="Taxa de Resolutividade Extrajudicial"
                value={90}
                maxValue={100}
                color="bg-green-500"
              />
              <ProgressBar
                label="Redução de Custos Processuais"
                value={15}
                maxValue={100}
                color="bg-blue-500"
              />
              <ProgressBar
                label="Satisfação dos Usuários"
                value={85}
                maxValue={100}
                color="bg-purple-500"
              />
              <ProgressBar
                label="Convergência Interinstitucional"
                value={75}
                maxValue={100}
                color="bg-yellow-500"
              />
            </div>
          </Card>
        </section>

        {/* Casos de Sucesso */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <TrendingUp className="h-8 w-8 text-primary-600 mr-3" />
            Casos de Sucesso e Exemplos Práticos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-l-4 border-green-500">
              <h3 className="text-lg font-semibold mb-3 text-green-900">🏥 Saúde - Rio Grande do Sul</h3>
              <div className="space-y-3">
                <div>
                  <strong className="text-gray-900">Problema:</strong>
                  <p className="text-gray-700 text-sm">Alta judicialização da saúde com custos crescentes</p>
                </div>
                <div>
                  <strong className="text-gray-900">Solução PGS:</strong>
                  <p className="text-gray-700 text-sm">Convergência interinstitucional com Câmara de Conciliação de Saúde</p>
                </div>
                <div>
                  <strong className="text-gray-900">Resultados:</strong>
                  <ul className="text-gray-700 text-sm space-y-1 mt-1">
                    <li>• 90% de resolutividade extrajudicial</li>
                    <li>• Economia de R$ 49 milhões em 2016</li>
                    <li>• Redução de conflitos e maior eficiência</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold mb-3 text-blue-900">👨‍👩‍👧 Família - Diversas Comarcas</h3>
              <div className="space-y-3">
                <div>
                  <strong className="text-gray-900">Problema:</strong>
                  <p className="text-gray-700 text-sm">Conflitos familiares com impacto em crianças e adolescentes</p>
                </div>
                <div>
                  <strong className="text-gray-900">Solução PGS:</strong>
                  <p className="text-gray-700 text-sm">Foco na família como prioridade, mediação e acompanhamento psicossocial</p>
                </div>
                <div>
                  <strong className="text-gray-900">Resultados:</strong>
                  <ul className="text-gray-700 text-sm space-y-1 mt-1">
                    <li>• Redução de litígios prolongados</li>
                    <li>• Melhora nas relações familiares</li>
                    <li>• Proteção integral de crianças</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <h3 className="text-lg font-semibold mb-3 text-purple-900">🏛️ Gestão Pública - Diversos Estados</h3>
              <div className="space-y-3">
                <div>
                  <strong className="text-gray-900">Problema:</strong>
                  <p className="text-gray-700 text-sm">Falta de integração entre órgãos públicos</p>
                </div>
                <div>
                  <strong className="text-gray-900">Solução PGS:</strong>
                  <p className="text-gray-700 text-sm">Criação de Comitês Interinstitucionais e matrizes de convergência</p>
                </div>
                <div>
                  <strong className="text-gray-900">Resultados:</strong>
                  <ul className="text-gray-700 text-sm space-y-1 mt-1">
                    <li>• Otimização de recursos públicos</li>
                    <li>• Aumento da efetividade de políticas</li>
                    <li>• Redução de sobreposições</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="border-l-4 border-yellow-500">
              <h3 className="text-lg font-semibold mb-3 text-yellow-900">🌍 Meio Ambiente - Projetos Regionais</h3>
              <div className="space-y-3">
                <div>
                  <strong className="text-gray-900">Problema:</strong>
                  <p className="text-gray-700 text-sm">Degradação ambiental e conflitos de uso do solo</p>
                </div>
                <div>
                  <strong className="text-gray-900">Solução PGS:</strong>
                  <p className="text-gray-700 text-sm">Convergência entre setor público, privado e comunidades locais</p>
                </div>
                <div>
                  <strong className="text-gray-900">Resultados:</strong>
                  <ul className="text-gray-700 text-sm space-y-1 mt-1">
                    <li>• Recuperação de áreas degradadas</li>
                    <li>• Geração de renda sustentável</li>
                    <li>• Educação ambiental integrada</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600">
            <h3 className="text-lg font-semibold mb-3 text-purple-900">💡 Fatores de Sucesso Comuns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Liderança comprometida com mudança de paradigma',
                'Convergência real entre setores público, privado e sociedade',
                'Foco em problemas prioritários com alta judicialização',
                'Mensuração contínua de resultados e impactos',
                'Capacitação das equipes em pensamento sistêmico',
                'Comunicação transparente e formação de cultura',
                'Matrizes de convergência bem estruturadas',
                'Revisão e aperfeiçoamento periódicos'
              ].map((fator, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{fator}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* NMC */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Users2 className="h-8 w-8 text-primary-600 mr-3" />
            3. Negociação, Mediação e Conciliação (NMC)
          </h2>
          
          <Card>
            <p className="text-gray-700 mb-4">
              Mecanismos de <strong>autocomposição</strong> que também são considerados atuações resolutivas convergentes ao DHS.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Alinhamento normativo:</strong> Resoluções nº 125/2010 do CNJ e nº 118/2014 do CNMP
              </p>
            </div>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-accent-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Pronto para Implementar?</h3>
          <p className="text-lg mb-6">
            Descubra o guia passo a passo com a Matriz de Convergência.
          </p>
          <Link
            to="/implementacao"
            className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Ir para Implementação
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
