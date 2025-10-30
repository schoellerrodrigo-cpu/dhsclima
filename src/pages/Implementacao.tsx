import { Link } from 'react-router-dom'
import { Rocket, MapPin, Target, Users, FileText, ArrowRight, Download } from 'lucide-react'
import Card from '../components/Card'

export default function Implementacao() {
  const passos = [
    {
      numero: 1,
      titulo: 'Escolher o(s) Foco(s) Prioritário(s)',
      descricao: 'Baseado em critérios de conveniência, oportunidade e urgência. Recomenda-se focar em problemas que causam alta judicialização ou calamidades.',
      icon: Target
    },
    {
      numero: '2.a',
      titulo: 'Mapear Necessidades, Possibilidades e Atividades',
      descricao: 'Levantar o que é preciso fazer, os recursos disponíveis e as iniciativas já existentes relacionadas ao foco escolhido.',
      icon: MapPin
    },
    {
      numero: '2.b',
      titulo: 'Promover o Aperfeiçoamento e/ou a Convergência Estrutural',
      descricao: 'Executar uma série de atividades ordenadas para transformar as estruturas e processos.',
      icon: Rocket
    }
  ]

  const atividades = [
    'Fomentar o DHS em Ambientes de Convergência (ex. em audiências públicas, reuniões, comitês, etc.)',
    'Reunir Documentos e Elaborar Diagnósticos',
    'Executar os Encaminhamentos',
    'Criar Critérios e Fluxos Operacionais',
    'Formalizar Convergências (ex. elaborar planos, recomendações, cartilhas, decretos, etc.)',
    'Realizar Eventos Interinstitucionais',
    'Realizar Capacitações Institucionais',
    'Criar Estruturas de Resolução de Problemas',
    'Promover Ações Contra Irregularidades',
    'Implementar Estratégias de Comunicação e Formação',
    'Desenvolver Projetos e Políticas Públicas',
    'Promover a Convergência Estrutural',
    'Revisar e Aperfeiçoar Periodicamente'
  ]

  const matrizOrientacoes = [
    { eixo: 'I. Ambiente', descricao: 'Escolher o ambiente/Habitat para atuação' },
    { eixo: 'II. Atuação Interinstitucional', descricao: 'Fomentar a atuação interinstitucional e com a comunidade' },
    { eixo: 'III. Atuação Institucional', descricao: 'Fomentar a atuação institucional' },
    { eixo: 'IV. Abordagens', descricao: '4.1- Conscientização/Necessidade, 4.2- Meios e 4.3- Incentivos' },
    { eixo: 'V. Etapas', descricao: '5.1- Escolher foco prioritário e 5.2- Mapear/aperfeiçoar/convergência' },
    { eixo: 'VI. Fundamento', descricao: 'Sempre partir do foco prioritário levando em consideração os critérios do DHS/PGS' }
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Guia de Implementação</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passos práticos para implementar o DHS com a Matriz de Convergência
          </p>
        </div>

        {/* Matriz de Convergência */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <FileText className="h-8 w-8 text-primary-600 mr-3" />
            Matriz de Convergência
          </h2>
          
          <Card className="mb-6">
            <p className="text-gray-700 mb-4">
              É um <strong>modelo metodológico</strong> para planejar e gerir atividades de forma alinhada ao DHS. 
              Funciona como um roteiro com orientações gerais para a ação.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">Orientações Gerais da Matriz</h3>
            <div className="space-y-3">
              {matrizOrientacoes.map((item, index) => (
                <div key={index} className="flex items-start border-l-4 border-primary-500 pl-4 py-2">
                  <div>
                    <h4 className="font-semibold text-primary-700">{item.eixo}</h4>
                    <p className="text-gray-600 text-sm">{item.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Passos de Implementação */}
        <section className="mb-12">
          <h2 className="section-subtitle">Etapas Sugeridas para Implementação</h2>
          
          <div className="space-y-6">
            {passos.map((passo) => {
              const Icon = passo.icon
              return (
                <Card key={passo.numero} className="hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-700 rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                      {passo.numero}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2 flex items-center">
                        <Icon className="h-6 w-6 mr-2 text-primary-600" />
                        {passo.titulo}
                      </h3>
                      <p className="text-gray-700 mb-4">{passo.descricao}</p>
                      
                      {passo.numero === '2.b' && (
                        <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
                          <div className="flex items-start">
                            <FileText className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                            <div className="flex-grow">
                              <p className="text-sm text-gray-700 mb-3">
                                <strong className="text-blue-900">📄 Documento Detalhado:</strong> Acesse o material completo 
                                que descreve de forma detalhada todas as etapas e passos da Matriz de Convergência.
                              </p>
                              <a 
                                href="/documentos/matriz-convergencia-dhs-detalhado.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-sm font-medium"
                              >
                                <Download className="h-4 w-4 mr-2" />
                                Visualizar Guia Completo da Matriz de Convergência (PDF)
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Atividades do Passo 2.b */}
        <section className="mb-12">
          <h2 className="section-subtitle">Atividades (Passo 2.b)</h2>
          
          <Card>
            <p className="text-gray-700 mb-6">
              O passo 2.b se desdobra em uma série de <strong>atividades ordenadas e interligadas</strong>:
            </p>
            <div className="space-y-3">
              {atividades.map((atividade, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{atividade}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Prioridade: Comunicação e Formação */}
        <Card className="mb-12 bg-accent-50 border-l-4 border-accent-600">
          <div className="flex items-start">
            <Rocket className="h-8 w-8 text-accent-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-accent-900">Prioridade Urgente</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A <strong>Estratégia de Comunicação e Formação</strong> é destacada como a atividade mais urgente 
                no cenário atual, pois visa informar a sociedade sobre a existência de <strong>soluções viáveis</strong> 
                para as crises, combatendo a desesperança e mobilizando a ação coletiva.
              </p>
              <div className="bg-white p-4 rounded-lg border border-accent-300 mt-4">
                <p className="text-sm text-gray-800 font-semibold mb-2 flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-accent-600" />
                  📄 Documento Completo - Cartilha Estratégica
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  Acesse o documento completo do CNMP sobre Desenvolvimento Harmônico e Sustentável, 
                  PGS, NMC e Estratégia de Comunicação e Formação:
                </p>
                <a 
                  href="https://www.cnmp.mp.br/portal/images/Comissoes/DireitosFundamentais/Arquivos/Desenvolvimento_Harmonico_e_sustentavel/NOVOS_ARQUIVOS_DHS/CNMP_Fomento_DHS_PGS_NMC_Estrategia_Comunicacao_Formacao__ESBOCO_CARTILHA_ESTRATEGICA_09_05_18.doc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium inline-flex items-center"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Baixar Cartilha Estratégica CNMP (DOC)
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* Convergência Estrutural */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Users className="h-8 w-8 text-primary-600 mr-3" />
            Convergência Estrutural
          </h2>
          
          <Card className="mb-6">
            <p className="text-gray-700 mb-4">
              É o processo de aperfeiçoar sistematicamente as normativas e instrumentos diários para que eles 
              <strong> fomentem, meçam e valorizem</strong> as atuações resolutivas.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-gray-800 font-semibold">
                ⚠️ Se a estrutura (rotina) não for alterada, os comportamentos antigos persistirão.
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4">Aspectos a serem alinhados:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Planos e planejamentos',
                'Meios de concretização e realização',
                'Mensuração/mapeamento e indicadores',
                'Convergência dos três setores',
                'Modos de valoração do desempenho',
                'Critérios de inspeções e fiscalizações',
                'Desenvolvimento de incentivos',
                'Comunicação e formação'
              ].map((aspecto, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{aspecto}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-6">
            <p className="text-gray-700 font-bold mb-3">
              Como exemplo de promoção da Convergência Estrutural no âmbito do Ministério Público:
            </p>
            <a
              href="/documentos/DHS_Convergencia_Estrutural.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 underline"
            >
              <FileText className="h-4 w-4 mr-1" />
              Acessar documento DHS - Convergência Estrutural (PDF)
            </a>
            <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="text-base text-gray-800">
                <strong>Detalhamento da Convergência Estrutural</strong> consta das fls. 122 a 158 da Cartilha de DHS disponível em:{' '}
                <a
                  href="https://www.cnmp.mp.br/portal/images/Comissoes/DireitosFundamentais/Arquivos/Desenvolvimento_Harmonico_e_sustentavel/NOVOS_ARQUIVOS_DHS/5-Cartilha_DHS.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 underline font-semibold"
                >
                  Cartilha DHS (CNMP)
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-accent-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Explore os Recursos Disponíveis</h3>
          <p className="text-lg mb-6">
            Acesse documentos, acordos e ferramentas práticas para aplicação do DHS.
          </p>
          <Link
            to="/recursos"
            className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Ir para Recursos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
