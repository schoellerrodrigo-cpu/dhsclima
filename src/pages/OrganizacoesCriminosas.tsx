import { Shield, Target, Users, TrendingUp, CheckCircle, AlertTriangle, Scale, Database, FileText, ArrowRight, DollarSign, Building, Eye } from 'lucide-react'
import Card from '../components/Card'

export default function OrganizacoesCriminosas() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Enfrentamento das Organizações Criminosas Violentas</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plano Nacional de Atuação Estratégica (PNAE) 2025 do Ministério Público
          </p>
        </div>

        {/* Introdução */}
        <Card className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600">
          <div className="flex items-start">
            <Shield className="h-12 w-12 text-red-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Atuação Estratégica e Coordenada</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                O enfrentamento de organizações criminosas violentas exige do Ministério Público uma atuação 
                <strong> estratégica, coordenada e baseada em inteligência</strong>. Semelhante a um sistema 
                imunológico altamente especializado, o MP foca na desarticulação de ameaças sistêmicas e estruturadas, 
                exigindo inteligência, coordenação de forças-tarefas (GAECOs) e a recuperação dos recursos que 
                financiam o crime organizado.
              </p>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <p className="text-sm text-gray-600 italic">
                  "Em vez de combater infecções comuns (crimes menores), o MP foca na desarticulação de ameaças 
                  sistêmicas (organizações criminosas), exigindo inteligência, coordenação e recuperação de ativos."
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Seção 1: PNAE - Estrutura */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <FileText className="h-8 w-8 text-primary-600 mr-3" />
            1. Plano Nacional de Atuação Estratégica (PNAE)
          </h2>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Estrutura e Propósito</h3>
            <p className="text-gray-700 mb-4">
              O <strong>PNAE</strong>, instituído pela Resolução CNMP nº 147/2016 (atualizada pela Resolução CNMP 
              nº 307/2025), é um instrumento de articulação que promove maior <strong>harmonização e efetividade 
              das políticas institucionais em âmbito nacional</strong>, respeitando a autonomia e especificidades 
              dos ramos e unidades do MP brasileiro.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-semibold text-blue-900 mb-2">📋 PEN-MP</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Planejamento Estratégico Nacional:</strong> Direcionador estratégico para que cada 
                  ramo e unidade desenvolva planos adaptados às realidades locais.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-semibold text-purple-900 mb-2">🤝 PNAE</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Atuação Conjunta:</strong> Foca na atuação integrada e coordenada, catalisando 
                  esforços para enfrentar desafios de caráter nacional.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-3">🎯 Objetivos do PNAE</h4>
              <div className="space-y-2">
                {[
                  'Estabelecer diretrizes e pactuar compromissos anuais com ramos e unidades do MP',
                  'Definir metas e indicadores nacionais para a Estratégia Nacional',
                  'Induzir políticas institucionais conjuntas',
                  'Promover colaboração interinstitucional',
                  'Amplificar o impacto das ações locais',
                  'Fortalecer a identidade nacional do Ministério Público',
                  'Promover visão unificada do papel do MP e fortalecer sua credibilidade'
                ].map((objetivo, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{objetivo}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Seção 2: Metodologia */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Target className="h-8 w-8 text-primary-600 mr-3" />
            2. Metodologia e Articulação Institucional
          </h2>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Processo de Elaboração do PNAE 2025</h3>
            <p className="text-gray-700 mb-4">
              A Presidência do CNMP definiu as diretrizes prioritárias envolvendo desafios de 
              <strong> grande complexidade e impacto coletivo</strong>, exigindo resposta coordenada em todo o país.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Definição de Diretrizes</h4>
                    <p className="text-gray-700 text-sm">
                      Presidência do CNMP define as diretrizes prioritárias com base em desafios nacionais
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-1">Elaboração pela CPE</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Comissão de Planejamento Estratégico (CPE) do CNMP</strong> conduz a elaboração 
                      de metas e indicadores
                    </p>
                    <p className="text-gray-600 text-xs">
                      Devido à complexidade técnica, a CPE promove diálogo com grupos especializados
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">Diálogo Técnico</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Consulta a grupos temáticos do <strong>Conselho Nacional de Procuradores-Gerais (CNPG)</strong>:
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-700">
                        <Shield className="h-4 w-4 text-green-600 mr-2" />
                        <strong>GNCOC</strong> - Grupo Nacional de Combate às Organizações Criminosas
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <Scale className="h-4 w-4 text-green-600 mr-2" />
                        <strong>Corregedoria Nacional</strong> - Subsídios técnicos
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Manifestação dos Ramos</h4>
                    <p className="text-gray-700 text-sm">
                      Propostas encaminhadas aos Procuradores-Gerais dos ramos e unidades do MP para manifestação 
                      (Portaria CNMP-PRESI nº 111/2025)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Seção 3: Organizações Criminosas Violentas */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <AlertTriangle className="h-8 w-8 text-primary-600 mr-3" />
            3. Diretriz Prioritária: Organizações Criminosas Violentas
          </h2>

          <Card className="mb-6 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600">
            <h3 className="text-lg font-bold text-red-900 mb-4">Conceito e Escopo Ampliado</h3>
            
            <div className="bg-white p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">🔴 Facções Criminosas (Conceito Inicial)</h4>
              <p className="text-gray-700 text-sm mb-2">
                Subtipo de organização criminosa com características específicas:
              </p>
              <div className="space-y-1">
                {[
                  'Domínio territorial',
                  'Atuação dentro e fora do sistema prisional',
                  'Estruturas articuladas por códigos próprios'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2 mt-1.5"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-semibold text-red-900 mb-3">
                <AlertTriangle className="inline h-5 w-5 mr-2" />
                Organizações Criminosas Violentas (Escopo Ampliado)
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                Incluem <strong>facções, milícias e grupos armados</strong> que se dedicam de forma reiterada à 
                prática de crimes com uso sistemático da violência, buscando obtenção de poder:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                <div className="bg-red-50 p-3 rounded-lg text-center">
                  <Building className="h-6 w-6 text-red-600 mx-auto mb-1" />
                  <span className="text-sm font-semibold text-gray-900">Poder Territorial</span>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg text-center">
                  <DollarSign className="h-6 w-6 text-orange-600 mx-auto mb-1" />
                  <span className="text-sm font-semibold text-gray-900">Poder Econômico</span>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg text-center">
                  <Scale className="h-6 w-6 text-yellow-600 mx-auto mb-1" />
                  <span className="text-sm font-semibold text-gray-900">Poder Político</span>
                </div>
              </div>

              <div className="bg-red-50 p-3 rounded-lg">
                <p className="text-sm text-gray-700 mb-2"><strong>Características operacionais:</strong></p>
                <div className="space-y-1">
                  {[
                    'Uso de armamentos pesados',
                    'Intimidação coletiva sistemática',
                    'Práticas paramilitares',
                    'Imposição de controle sobre comunidades ou setores',
                    'Inclui o denominado "novo cangaço"'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              <Shield className="inline h-6 w-6 text-blue-600 mr-2" />
              Estratégia Ministerial de Enfrentamento
            </h3>
            <p className="text-gray-700 mb-4">
              O enfrentamento efetivo exige atuação <strong>estratégica, coordenada e baseada em inteligência</strong>, 
              com fortalecimento da atuação focado em três pilares:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg border-l-4 border-blue-600">
                <Target className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-blue-900 mb-2">Repressão Qualificada</h4>
                <p className="text-gray-700 text-sm">
                  Ações focadas e baseadas em inteligência, não apenas reativas
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-lg border-l-4 border-purple-600">
                <Users className="h-8 w-8 text-purple-600 mb-3" />
                <h4 className="font-semibold text-purple-900 mb-2">Desarticulação Estrutural</h4>
                <p className="text-gray-700 text-sm">
                  Desmonte das estruturas organizacionais criminosas
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg border-l-4 border-green-600">
                <DollarSign className="h-8 w-8 text-green-600 mb-3" />
                <h4 className="font-semibold text-green-900 mb-2">Recuperação de Ativos</h4>
                <p className="text-gray-700 text-sm">
                  Bloqueio e confisco dos recursos que financiam o crime
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-600">
            <h3 className="text-lg font-bold text-cyan-900 mb-4">
              <Database className="inline h-6 w-6 mr-2" />
              Ações de Inteligência e Integração
            </h3>
            <p className="text-gray-700 mb-4">
              As ações podem envolver mecanismos de integração e centralização de informações:
            </p>
            <div className="space-y-3">
              {[
                {
                  titulo: 'Acesso a Dados Penitenciários',
                  desc: 'Informações sobre integrantes de facções junto às administrações penitenciárias'
                },
                {
                  titulo: 'Mapeamento Territorial',
                  desc: 'Identificação de áreas sob influência faccionada com apoio de núcleos de inteligência'
                },
                {
                  titulo: 'Banco Nacional de Dados',
                  desc: 'Criação de mecanismos de integração para centralização de informações sobre faccionados'
                }
              ].map((acao, index) => (
                <div key={index} className="bg-white p-4 rounded-lg flex items-start">
                  <div className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{acao.titulo}</h4>
                    <p className="text-gray-600 text-sm">{acao.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Seção 4: GAECOs e Metas */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <TrendingUp className="h-8 w-8 text-primary-600 mr-3" />
            4. Atuação Estratégica dos GAECOs
          </h2>

          <Card className="mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-600">
            <h3 className="text-lg font-bold text-indigo-900 mb-4">
              <Shield className="inline h-6 w-6 mr-2" />
              Grupos de Atuação Especial de Combate ao Crime Organizado (GAECOs)
            </h3>
            <p className="text-gray-700 mb-4">
              A atuação estratégica central definida pelo PNAE 2025 é:
            </p>
            <div className="bg-white p-5 rounded-lg border-2 border-indigo-300">
              <p className="text-lg font-semibold text-indigo-900 text-center">
                Ampliar a atuação dos GAECOs no enfrentamento das organizações criminosas violentas
              </p>
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              <Target className="inline h-6 w-6 text-green-600 mr-2" />
              Meta de Esforço
            </h3>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border-l-4 border-green-600 mb-4">
              <h4 className="font-semibold text-green-900 mb-2 text-lg">
                Instituir métrica nacional padronizada
              </h4>
              <p className="text-gray-700 mb-3">
                Implementar de forma colaborativa uma <strong>métrica nacional padronizada</strong> da atuação 
                dos GAECOs no enfrentamento das organizações criminosas violentas.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>📊 Indicador de Esforço:</strong> Criação e validação de um formulário nacional de coleta de dados
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">💡 Justificativa da Meta</h4>
              <p className="text-gray-700 text-sm mb-2">
                A definição desta meta levou em consideração:
              </p>
              <div className="space-y-2">
                {[
                  'Heterogeneidade da atuação dos GAECOs no país',
                  'Muitos GAECOs funcionam como órgãos de apoio, não responsáveis diretos por denúncias',
                  'O levantamento e construção de métrica nacional já configura esforço institucional relevante',
                  'Primeiro ciclo de avaliação requer diagnóstico antes de metas de resultado',
                  'Efetividade depende da qualificação das investigações, não apenas de números brutos'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              <Database className="inline h-6 w-6 text-purple-600 mr-2" />
              Indicadores de Conteúdo (Base de Diagnóstico)
            </h3>
            <p className="text-gray-700 mb-4">
              Embora não sejam estabelecidas metas de resultado, a coleta de dados de <strong>2024 e 2025</strong> 
              servirá como base para um <strong>diagnóstico nacional</strong>. Os indicadores incluem:
            </p>

            <div className="space-y-3">
              {[
                {
                  num: 1,
                  titulo: 'Operações Realizadas',
                  desc: 'Número de operações realizadas no enfrentamento das organizações criminosas violentas',
                  icon: <Shield className="h-5 w-5" />,
                  color: 'blue'
                },
                {
                  num: 2,
                  titulo: 'Prisões Cautelares',
                  desc: 'Número de prisões cautelares decretadas e mandados de prisão cumpridos',
                  icon: <Scale className="h-5 w-5" />,
                  color: 'purple'
                },
                {
                  num: 3,
                  titulo: 'Denúncias por Crime Organizado',
                  desc: 'Número de denunciados por integrar organização criminosa violenta',
                  icon: <FileText className="h-5 w-5" />,
                  color: 'red'
                },
                {
                  num: 4,
                  titulo: 'Denúncias por Lavagem de Dinheiro',
                  desc: 'Número de denunciados por lavagem de dinheiro, integrantes dessas organizações',
                  icon: <DollarSign className="h-5 w-5" />,
                  color: 'green'
                }
              ].map((indicador) => (
                <div key={indicador.num} className="bg-gray-50 p-4 rounded-lg flex items-start">
                  <div className={`bg-${indicador.color}-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0`}>
                    {indicador.num}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1 flex items-center">
                      <span className={`text-${indicador.color}-600 mr-2`}>{indicador.icon}</span>
                      {indicador.titulo}
                    </h4>
                    <p className="text-gray-700 text-sm">{indicador.desc}</p>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border-l-4 border-green-600">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    5
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                      <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                      Valores e Patrimônio Vinculados
                    </h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Valores e patrimônio vinculados a investigações, discriminados por:
                    </p>

                    <div className="bg-white p-4 rounded-lg mb-3">
                      <h5 className="font-semibold text-gray-900 text-sm mb-2">📋 Categoria Jurídica:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {[
                          'Bens Apreendidos',
                          'Medidas Assecuratórias',
                          'Confiscados (decisão definitiva)'
                        ].map((cat, index) => (
                          <div key={index} className="bg-green-50 px-3 py-2 rounded text-center">
                            <span className="text-gray-800 text-xs font-medium">{cat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 text-sm mb-2">💰 Natureza dos Bens:</h5>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {[
                          { icon: '💵', label: 'Recursos Financeiros (SISBAJUD)' },
                          { icon: '🏠', label: 'Imóveis' },
                          { icon: '🚗', label: 'Veículos' },
                          { icon: '💎', label: 'Joias/Bens de Alto Valor' },
                          { icon: '₿', label: 'Criptoativos' }
                        ].map((bem, index) => (
                          <div key={index} className="bg-green-50 px-2 py-2 rounded flex items-center">
                            <span className="text-lg mr-2">{bem.icon}</span>
                            <span className="text-gray-800 text-xs">{bem.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-600">
            <h3 className="text-lg font-bold text-amber-900 mb-4">
              <Eye className="inline h-6 w-6 mr-2" />
              Governança e Responsabilidade
            </h3>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700 mb-3">
                <strong>Responsável pelas informações:</strong>
              </p>
              <div className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-lg">
                <Shield className="h-8 w-8 mr-3" />
                <div>
                  <h4 className="font-bold text-lg">GNCOC</h4>
                  <p className="text-sm">Grupo Nacional de Combate às Organizações Criminosas</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-3 text-center">
                Dados encaminhados pelos GAECOs dos ramos e unidades do Ministério Público
              </p>
            </div>
          </Card>
        </section>

        {/* Seção 5: Filosofia */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <CheckCircle className="h-8 w-8 text-primary-600 mr-3" />
            5. Filosofia da Atuação
          </h2>

          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600">
            <h3 className="text-lg font-bold text-purple-900 mb-4">
              ⚖️ Qualidade sobre Quantidade
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">🎯 Princípio Central</h4>
                <p className="text-gray-700 text-sm mb-3">
                  O PNAE entende que <strong>não é razoável impor metas nacionais de "aumento de produtividade"</strong>, 
                  pois a efetividade do enfrentamento do crime organizado depende de:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    {
                      icon: <Target className="h-6 w-6 text-purple-600" />,
                      titulo: 'Qualificação das Investigações',
                      desc: 'Profundidade e precisão técnica nas apurações'
                    },
                    {
                      icon: <Users className="h-6 w-6 text-blue-600" />,
                      titulo: 'Atuação Integrada',
                      desc: 'Coordenação entre órgãos e compartilhamento de inteligência'
                    },
                    {
                      icon: <Shield className="h-6 w-6 text-green-600" />,
                      titulo: 'Impacto Estrutural',
                      desc: 'Desarticulação efetiva das organizações criminosas'
                    },
                    {
                      icon: <DollarSign className="h-6 w-6 text-yellow-600" />,
                      titulo: 'Recuperação de Ativos',
                      desc: 'Bloqueio dos recursos que financiam o crime'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg flex items-start">
                      <div className="mr-3 mt-1">{item.icon}</div>
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm">{item.titulo}</h5>
                        <p className="text-gray-600 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">📊 Objetivo da Meta Estabelecida</h4>
                <p className="text-gray-700 text-sm mb-2">
                  A meta visa refletir o <strong>esforço coletivo</strong> e promover um 
                  <strong> diagnóstico nacional qualificado</strong> que:
                </p>
                <div className="space-y-2">
                  {[
                    'Respeite as especificidades locais de cada unidade do MP',
                    'Reconheça a heterogeneidade da atuação dos GAECOs',
                    'Valorize a qualificação técnica sobre números brutos',
                    'Permita planejamento estratégico baseado em dados concretos',
                    'Fomente a colaboração e compartilhamento de boas práticas'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-300">
                <p className="text-sm text-gray-700 italic text-center">
                  "A meta estabelecida visa refletir o esforço coletivo e promover um diagnóstico nacional 
                  qualificado que respeite as especificidades locais, priorizando a efetividade sobre a 
                  mera contabilização numérica de resultados."
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Analogia Final */}
        <Card className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-600">
          <h3 className="text-lg font-bold text-indigo-900 mb-4">
            🧬 Analogia: Sistema Imunológico Especializado
          </h3>
          <div className="bg-white p-5 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              A atuação do Ministério Público no enfrentamento de organizações criminosas violentas pode ser 
              comparada a um <strong>sistema imunológico altamente especializado</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-900 mb-2">❌ Não foca em:</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Infecções comuns</strong> (crimes menores)
                </p>
                <p className="text-gray-600 text-xs mt-1">
                  Criminalidade ordinária que pode ser tratada com respostas convencionais
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">✅ Foca em:</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Ameaças sistêmicas e estruturadas</strong> (organizações criminosas)
                </p>
                <p className="text-gray-600 text-xs mt-1">
                  Grupos que representam risco à segurança pública e à ordem institucional
                </p>
              </div>
            </div>

            <div className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3">🔬 Requisitos para Efetividade:</h4>
              <div className="space-y-2">
                {[
                  { icon: '🧠', titulo: 'Inteligência', desc: 'Análise aprofundada e mapeamento das estruturas criminosas' },
                  { icon: '🤝', titulo: 'Coordenação de Forças-Tarefas', desc: 'GAECOs e colaboração interinstitucional' },
                  { icon: '💰', titulo: 'Recuperação de Ativos', desc: 'Bloqueio dos recursos que financiam a doença (crime organizado)' }
                ].map((req, index) => (
                  <div key={index} className="bg-white p-3 rounded flex items-start">
                    <span className="text-2xl mr-3">{req.icon}</span>
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm">{req.titulo}</h5>
                      <p className="text-gray-600 text-xs">{req.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Integração com DHS */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <TrendingUp className="h-8 w-8 text-primary-600 mr-3" />
            6. Integração com o Desenvolvimento Harmônico e Sustentável
          </h2>

          <Card className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600">
            <h3 className="text-lg font-bold text-green-900 mb-4">
              🌿 Enfrentamento Estrutural via DHS
            </h3>
            <p className="text-gray-700 mb-4">
              O combate às organizações criminosas violentas, quando orientado pelos princípios do 
              <strong> Desenvolvimento Harmônico e Sustentável (DHS)</strong>, transcende a mera repressão 
              pontual e se torna uma <strong>atuação sistêmica, integrada e sustentável</strong> que ataca 
              as causas raízes do problema e promove soluções estruturais duradouras.
            </p>
            <div className="bg-white p-4 rounded-lg border border-green-300">
              <p className="text-sm text-gray-700 italic">
                "A efetividade no enfrentamento do crime organizado não reside em ações isoladas, mas na 
                construção de <strong>redes de cooperação</strong> que integram inteligência, prevenção, 
                repressão qualificada e recuperação de ativos, sempre com foco na sustentabilidade das soluções."
              </p>
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              🎯 Aplicação dos Critérios DHS/PGS ao Combate ao Crime Organizado
            </h3>
            <p className="text-gray-700 mb-4">
              Os <strong>5 critérios de mensuração do DHS</strong> orientam uma atuação resolutiva de 
              Planejamento e Gestão Sistêmicos (PGS) no enfrentamento das organizações criminosas:
            </p>

            <div className="space-y-4">
              {[
                {
                  num: 1,
                  titulo: 'Foco Prioritário',
                  desc: 'Identificação e priorização das organizações criminosas de maior impacto social, territorial e econômico',
                  exemplos: [
                    'Mapeamento das facções com maior domínio territorial',
                    'Análise das milícias que geram maior intimidação coletiva',
                    'Priorização baseada em critérios de urgência e gravidade'
                  ],
                  color: 'blue'
                },
                {
                  num: 2,
                  titulo: 'Atender Necessidades',
                  desc: 'Resposta integrada às múltiplas dimensões do problema: segurança, justiça, social e econômica',
                  exemplos: [
                    'Desarticulação das estruturas criminosas (segurança)',
                    'Recuperação de ativos e bloqueio de lavagem de dinheiro (econômica)',
                    'Reinserção social de egressos do sistema prisional (social)',
                    'Fortalecimento das instituições de justiça (institucional)'
                  ],
                  color: 'purple'
                },
                {
                  num: 3,
                  titulo: 'Impactos Proporcionais nos 3 Eixos',
                  desc: 'Equilíbrio entre as dimensões ambiental, social e econômica nas ações de enfrentamento',
                  exemplos: [
                    '🌍 Ambiental: Recuperação de áreas degradadas dominadas pelo crime',
                    '👥 Social: Redução da violência, proteção de comunidades, acesso à justiça',
                    '💰 Econômico: Recuperação de ativos, combate à lavagem, geração de renda lícita'
                  ],
                  color: 'green'
                },
                {
                  num: 4,
                  titulo: 'Convergência dos Setores',
                  desc: 'Articulação em rede envolvendo setor público, privado e sociedade civil',
                  exemplos: [
                    'Público: MP, Polícia, Justiça, Administração Penitenciária, Inteligência',
                    'Privado: Sistema financeiro (COAF/SISBAJUD), empresas vítimas de extorsão',
                    'Sociedade: Conselhos comunitários, ONGs de direitos humanos, universidades'
                  ],
                  color: 'orange'
                },
                {
                  num: 5,
                  titulo: 'Promoção de Atuações Resolutivas e Matrizes',
                  desc: 'Construção de metodologias replicáveis e instrumentos de convergência estrutural',
                  exemplos: [
                    'Matriz de Convergência para coordenação entre GAECOs',
                    'Protocolos integrados de compartilhamento de inteligência',
                    'Fluxos operacionais para recuperação rápida de ativos',
                    'Banco nacional de dados sobre organizações criminosas'
                  ],
                  color: 'indigo'
                }
              ].map((criterio) => (
                <div key={criterio.num} className="bg-gray-50 p-5 rounded-lg border-l-4" style={{ borderColor: `var(--${criterio.color}-600)` }}>
                  <div className="flex items-start mb-3">
                    <div className={`bg-${criterio.color}-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0`}>
                      {criterio.num}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">{criterio.titulo}</h4>
                      <p className="text-gray-700 text-sm mb-3">{criterio.desc}</p>
                      <div className="bg-white p-3 rounded border border-gray-200">
                        <p className="text-xs font-semibold text-gray-600 mb-2">💡 Exemplos práticos:</p>
                        <div className="space-y-1">
                          {criterio.exemplos.map((ex, idx) => (
                            <div key={idx} className="flex items-start">
                              <span className="text-gray-400 mr-2">•</span>
                              <span className="text-gray-700 text-xs">{ex}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="mb-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600">
            <h3 className="text-lg font-semibold mb-4 text-blue-900">
              🤝 Atuação Integrada e Sistêmica
            </h3>
            <p className="text-gray-700 mb-4">
              O enfrentamento efetivo das organizações criminosas violentas exige <strong>pensamento sistêmico</strong> 
              e <strong>atuação em rede</strong>, superando a fragmentação institucional:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Pensamento Sistêmico
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Compreensão das interconexões entre crime organizado, sistema prisional e territórios</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Análise das causas raízes (vulnerabilidade social, falhas institucionais)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Visão integrada: repressão + prevenção + reinserção social</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Identificação de pontos de alavancagem para intervenções eficazes</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-900 mb-2 flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Atuação em Rede
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>GAECOs como núcleos de articulação interinstitucional</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Compartilhamento de inteligência entre MPs, polícias e órgãos de controle</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integração com sistema financeiro (COAF, bancos) via SISBAJUD</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Parcerias com universidades e centros de pesquisa</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg border border-cyan-300">
              <p className="text-sm text-gray-700">
                <strong>🔗 Convergência Estrutural:</strong> Alinhamento de normativas, protocolos e fluxos 
                operacionais entre diferentes instituições para que todas trabalhem de forma coordenada, 
                evitando duplicação de esforços e maximizando resultados.
              </p>
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              🔄 Matriz de Convergência Aplicada ao Crime Organizado
            </h3>
            <p className="text-gray-700 mb-4">
              A <strong>Matriz de Convergência</strong> é um modelo metodológico para planejar e gerir atividades 
              alinhadas ao DHS. No contexto do enfrentamento ao crime organizado, orienta:
            </p>

            <h4 className="text-lg font-semibold mb-3 text-gray-900">📋 Orientações Gerais da Matriz</h4>
            <p className="text-gray-700 mb-4 text-sm">
              A Matriz organiza-se em <strong>6 eixos orientadores</strong> que devem guiar toda atuação:
            </p>

            <div className="space-y-3">
              {[
                {
                  eixo: 'I. Ambiente/Habitat',
                  desc: 'Escolher os territórios e sistemas (prisional, judicial, financeiro) prioritários para atuação',
                  aplicacao: 'Mapeamento de áreas dominadas por facções; identificação de presídios estratégicos'
                },
                {
                  eixo: 'II. Atuação Interinstitucional',
                  desc: 'Fomentar a articulação entre MP, polícias, justiça, inteligência e comunidades',
                  aplicacao: 'Comitês integrados de segurança pública; grupos de trabalho interinstitucionais'
                },
                {
                  eixo: 'III. Atuação Institucional',
                  desc: 'Fortalecer a capacidade interna dos GAECOs e órgãos de apoio',
                  aplicacao: 'Capacitação em inteligência financeira; estruturação de núcleos especializados'
                },
                {
                  eixo: 'IV. Abordagens',
                  desc: 'Conscientização das necessidades, disponibilização de meios e criação de incentivos',
                  aplicacao: 'Diagnósticos compartilhados; ferramentas tecnológicas; reconhecimento de boas práticas'
                },
                {
                  eixo: 'V. Etapas',
                  desc: 'Escolher foco prioritário → Mapear/aperfeiçoar/promover convergência',
                  aplicacao: 'Foco em facção específica → Diagnóstico → Operação coordenada → Recuperação de ativos'
                },
                {
                  eixo: 'VI. Fundamento',
                  desc: 'Partir sempre do foco prioritário considerando os critérios DHS/PGS',
                  aplicacao: 'Toda ação deve atender aos 5 critérios: foco, necessidades, 3 eixos, convergência, matrizes'
                }
              ].map((orientacao, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-600">
                  <h4 className="font-semibold text-purple-900 mb-1">{orientacao.eixo}</h4>
                  <p className="text-gray-700 text-sm mb-2">{orientacao.desc}</p>
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <p className="text-xs text-gray-600">
                      <strong>📌 Aplicação prática:</strong> {orientacao.aplicacao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="mb-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600">
            <h3 className="text-lg font-semibold mb-4 text-blue-900">📍 Etapas Sugeridas para Implementação</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Escolher o(s) Foco(s) Prioritário(s)</h4>
                    <p className="text-gray-700 text-sm">
                      Baseado em critérios de <strong>conveniência, oportunidade e urgência</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    2.a
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Mapear Necessidades, Possibilidades e Atividades</h4>
                    <p className="text-gray-700 text-sm">
                      Levantar o que é preciso fazer, os recursos disponíveis e as iniciativas já existentes 
                      relacionadas ao foco escolhido.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                    2.b
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Promover o Aperfeiçoamento das relações estabelecidas e/ou a Convergência Estrutural, 
                      por meio de atividades ordenadas
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Executar as 13 atividades estruturantes detalhadas mais adiante nesta seção.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mb-6 bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-600">
            <h3 className="text-lg font-semibold mb-4 text-amber-900">
              📋 Atividades Estruturantes (baseadas no Passo 2.b da Matriz)
            </h3>
            <p className="text-gray-700 mb-4">
              As <strong>13 atividades ordenadas e interligadas</strong> da Matriz de Convergência aplicadas 
              ao combate às organizações criminosas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { num: 1, atividade: 'Fomentar o DHS em Ambientes de Convergência', exemplo: 'Reuniões do GNCOC, comitês de segurança' },
                { num: 2, atividade: 'Reunir Documentos e Elaborar Diagnósticos', exemplo: 'Banco de dados sobre faccionados, mapeamento territorial' },
                { num: 3, atividade: 'Executar os Encaminhamentos', exemplo: 'Operações coordenadas, prisões, apreensões' },
                { num: 4, atividade: 'Criar Critérios e Fluxos Operacionais', exemplo: 'Protocolos de compartilhamento de inteligência' },
                { num: 5, atividade: 'Formalizar Convergências', exemplo: 'Planos de enfrentamento, recomendações, TACs' },
                { num: 6, atividade: 'Realizar Eventos Interinstitucionais', exemplo: 'Seminários sobre crime organizado, workshops técnicos' },
                { num: 7, atividade: 'Realizar Capacitações Institucionais', exemplo: 'Treinamentos em lavagem de dinheiro, criptoativos' },
                { num: 8, atividade: 'Criar Estruturas de Resolução', exemplo: 'Núcleos especializados, forças-tarefas permanentes' },
                { num: 9, atividade: 'Promover Ações Contra Irregularidades', exemplo: 'Correições em presídios, fiscalização de medidas' },
                { num: 10, atividade: 'Implementar Comunicação e Formação', exemplo: 'Divulgação de resultados, educação preventiva' },
                { num: 11, atividade: 'Desenvolver Projetos e Políticas', exemplo: 'Políticas de reinserção social, programas de proteção' },
                { num: 12, atividade: 'Promover Convergência Estrutural', exemplo: 'Alinhamento de normativas entre MPs e estados' },
                { num: 13, atividade: 'Revisar e Aperfeiçoar Periodicamente', exemplo: 'Avaliação de indicadores, ajuste de estratégias' }
              ].map((item) => (
                <div key={item.num} className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-start mb-2">
                    <div className="bg-amber-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0">
                      {item.num}
                    </div>
                    <h5 className="font-semibold text-gray-900 text-sm">{item.atividade}</h5>
                  </div>
                  <p className="text-xs text-gray-600 ml-9">
                    <strong>Ex:</strong> {item.exemplo}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-600">
            <h3 className="text-lg font-semibold mb-4 text-indigo-900">
              🌐 Redes de Cooperação: Do Local ao Internacional
            </h3>
            <p className="text-gray-700 mb-4">
              A construção de <strong>redes de cooperação</strong> em múltiplos níveis potencializa a efetividade:
            </p>

            <div className="space-y-3">
              {[
                {
                  nivel: 'Nível Local',
                  desc: 'Articulação entre GAECOs, promotorias, polícias e poder judiciário locais',
                  resultados: ['Operações rápidas', 'Conhecimento do território', 'Proximidade com comunidades']
                },
                {
                  nivel: 'Nível Estadual',
                  desc: 'Coordenação entre unidades do MP, forças de segurança e administração penitenciária',
                  resultados: ['Padronização de protocolos', 'Compartilhamento de recursos', 'Estratégias unificadas']
                },
                {
                  nivel: 'Nível Nacional',
                  desc: 'GNCOC, CNMP, integração entre estados via banco de dados e força-tarefa nacional',
                  resultados: ['Combate a facções interestaduais', 'Métrica nacional padronizada', 'Boas práticas replicadas']
                },
                {
                  nivel: 'Nível Internacional',
                  desc: 'Cooperação com Interpol, acordos bilaterais para recuperação de ativos no exterior',
                  resultados: ['Bloqueio de recursos offshore', 'Extradição de lideranças', 'Inteligência compartilhada']
                }
              ].map((rede, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">
                    {index === 0 && '🏘️'} {index === 1 && '🏛️'} {index === 2 && '🇧🇷'} {index === 3 && '🌍'} {rede.nivel}
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">{rede.desc}</p>
                  <div className="bg-indigo-50 p-2 rounded">
                    <p className="text-xs font-semibold text-indigo-900 mb-1">Resultados esperados:</p>
                    <div className="flex flex-wrap gap-1">
                      {rede.resultados.map((res, idx) => (
                        <span key={idx} className="bg-indigo-200 text-indigo-900 px-2 py-1 rounded text-xs">
                          {res}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
