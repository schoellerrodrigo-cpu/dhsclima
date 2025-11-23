import { Link } from 'react-router-dom'
import { Baby, TrendingUp, Scale, Users, Target, CheckCircle, AlertTriangle, BookOpen, DollarSign, Building, FileText, ArrowRight, Droplet, Heart, Shield, Gavel } from 'lucide-react'
import Card from '../components/Card'

export default function PrimeiraInfancia() {
  const ratios = [
    { idade: '0 a 12 meses', ratio: '5 bebês por educador(a)' },
    { idade: '12 a 24 meses', ratio: '8 bebês por educador(a)' },
    { idade: '25 a 36 meses', ratio: '12 bebês por educador(a)' },
    { idade: '37 a 48 meses', ratio: '18 crianças por educador(a)' },
    { idade: '4 e 5 anos', ratio: '20 crianças por educador(a)' }
  ]

  const estrategias = [
    {
      prazo: 'Curto Prazo',
      titulo: 'Otimização e Conveniamento',
      descricao: 'Reformas rápidas, adequação de espaços ociosos e parcerias qualificadas com instituições sem fins lucrativos',
      cor: 'blue'
    },
    {
      prazo: 'Médio Prazo',
      titulo: 'Ampliação da Rede Existente',
      descricao: 'Expansão de prédios escolares, uso de projetos-padrão (Módulos FNDE), transformação de imóveis públicos',
      cor: 'green'
    },
    {
      prazo: 'Longo Prazo',
      titulo: 'Construção de Novas Unidades',
      descricao: 'Construção de novas creches em regiões com maior déficit, utilizando recursos próprios, federais (Novo PAC) ou de emendas',
      cor: 'purple'
    }
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title flex items-center justify-center">
            <Baby className="h-12 w-12 text-pink-600 mr-4" />
            Atuação do MP na Defesa e Promoção da Educação Infantil
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-4">
            Diretrizes para uma abordagem transformadora e resolutiva na superação do déficit de vagas em creches e pré-escolas
          </p>
        </div>

        {/* Seção 1: A Crise da Educação Infantil */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <AlertTriangle className="h-8 w-8 text-primary-600 mr-3" />
            1. A Crise da Educação Infantil e a Prioridade de Atuação
          </h2>

          <Card className="mb-6 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600">
            <h3 className="text-xl font-bold text-red-900 mb-4">🚨 O Cenário Alarmante (2024)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-3 rounded-full mr-3">
                    <Baby className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg">Creches (0 a 3 anos)</h4>
                </div>
                <p className="text-3xl font-bold text-red-600 mb-2">632.763</p>
                <p className="text-sm text-gray-700 mb-3">crianças na fila de espera</p>
                <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                  <p className="text-xs text-gray-700">
                    <strong>Cobertura atual:</strong> 41,2% das crianças atendidas<br/>
                    <strong>Meta PNE 2014-2025:</strong> 50%<br/>
                    <strong>44% dos municípios</strong> registram déficit de vagas
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-orange-100 p-3 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg">Pré-escola (4 a 5 anos)</h4>
                </div>
                <p className="text-3xl font-bold text-orange-600 mb-2">78.237</p>
                <p className="text-sm text-gray-700 mb-3">crianças fora da rede de ensino</p>
                <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                  <p className="text-xs text-gray-700">
                    <strong>Situação:</strong> Apesar da obrigatoriedade prevista em lei<br/>
                    <strong>Problema:</strong> Insuficiência estrutural da política pública<br/>
                    <strong>Impacto:</strong> Violação de direito fundamental
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🧠 Por Que a Primeira Infância é Crucial?</h3>
            <p className="text-gray-700 mb-4">
              A educação na <strong>primeira infância (0 a 6 anos)</strong> é fundamental para o desenvolvimento humano 
              integral e para a redução das desigualdades sociais. Evidências científicas comprovam seus benefícios a longo prazo:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Neurociência
                </h4>
                <p className="text-sm text-gray-700">
                  Os primeiros anos de vida são fundamentais para a <strong>formação da arquitetura cerebral</strong>, 
                  influenciada diretamente por estímulos, interações e experiências de qualidade.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Economia (Curva de Heckman)
                </h4>
                <p className="text-sm text-gray-700">
                  James Heckman demonstrou que o investimento na primeira infância gera o <strong>maior retorno social possível</strong>. 
                  Banco Mundial: retorno de <strong>6 a 17 dólares</strong> para cada dólar investido.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-semibold text-purple-900 mb-2 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Impacto Social
                </h4>
                <p className="text-sm text-gray-700">
                  Frequência à pré-escola está associada a: <strong>melhores notas no ensino fundamental</strong>, 
                  maiores chances de conclusão dos estudos e <strong>aumento de 16% na renda futura</strong>.
                </p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-600">
                <h4 className="font-semibold text-pink-900 mb-2 flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Igualdade de Gênero e Proteção
                </h4>
                <p className="text-sm text-gray-700">
                  A oferta de creches permite que <strong>mulheres se insiram no mercado de trabalho</strong> de forma isonômica 
                  e funciona como <strong>fator de proteção contra violência doméstica</strong>, rompendo ciclos de dependência econômica.
                </p>
              </div>
            </div>

            <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
              <p className="text-sm text-gray-800">
                <strong>⚠️ Desigualdade de Acesso:</strong> Dados do PNE mostram que <strong>60,1% das crianças mais ricas</strong> 
                frequentam creche, contra apenas <strong>30,6% das mais pobres</strong>, evidenciando que a falta de vagas 
                aprofunda as desigualdades sociais.
              </p>
            </div>
          </Card>
        </section>

        {/* Seção 2: Papel do MP */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Scale className="h-8 w-8 text-primary-600 mr-3" />
            2. O Papel do Ministério Público: Da Judicialização Individual à Atuação Estrutural
          </h2>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">📜 Base Constitucional e Legal</h3>
            <p className="text-gray-700 mb-3">
              A <strong>Constituição Federal (art. 208)</strong>, a <strong>Lei de Diretrizes e Bases da Educação (LDB)</strong> e o 
              <strong> Estatuto da Criança e do Adolescente (ECA)</strong> estabelecem a educação infantil como um 
              <strong> direito fundamental</strong> e um <strong>dever do Estado</strong>.
            </p>
            <p className="text-gray-700">
              O Ministério Público possui a <strong>atribuição constitucional</strong> de defender esse direito, 
              seja por via extrajudicial (indução de políticas públicas) ou judicial.
            </p>
          </Card>

          <Card className="mb-6 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600">
            <h3 className="text-lg font-bold text-red-900 mb-4">❌ Problemas da Judicialização Individual</h3>
            <p className="text-gray-700 mb-4">
              Historicamente, a atuação do MP focou-se em <strong>ações judiciais individuais</strong>. 
              Contudo, essa estratégia demonstrou ser <strong>sistemicamente problemática</strong>:
            </p>

            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-900 mb-2">🚫 Gera Iniquidade</h4>
                <p className="text-sm text-gray-700">
                  Favorece famílias com maior acesso ao sistema de justiça, permitindo que "furem a fila" 
                  de espera e <strong>aprofundando as desigualdades sociais</strong>.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-900 mb-2">🚫 Não Resolve o Problema</h4>
                <p className="text-sm text-gray-700">
                  Ataca a <strong>consequência</strong> (falta de vaga individual) e não a <strong>causa</strong> 
                  (desorganização da política pública).
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-900 mb-2">🚫 Desestrutura a Política Pública</h4>
                <p className="text-sm text-gray-700">
                  Transfere a gestão da alocação de vagas do Executivo para o Judiciário, 
                  <strong> sem um planejamento sistêmico</strong>.
                </p>
              </div>
            </div>
          </Card>

          <Card className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600">
            <h3 className="text-lg font-bold text-green-900 mb-4">✅ A Nova Abordagem: Atuação Estrutural e Resolutiva</h3>
            <p className="text-gray-700 mb-4">
              A abordagem moderna, alinhada à <strong>Carta de Brasília</strong> e à <strong>Recomendação CNMP n.º 54/2017</strong>, 
              preconiza uma <strong>atuação estrutural e resolutiva</strong>, priorizando a via extrajudicial.
            </p>

            <div className="bg-white p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-gray-800 mb-3">🏛️ Decisões do Supremo Tribunal Federal (STF)</h4>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
                  <h5 className="font-bold text-blue-900 mb-1">Tema 548 (RE 1.008.166)</h5>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Tese:</strong> A educação infantil (creche e pré-escola) é um <strong>direito fundamental</strong> 
                    de todas as crianças, de eficácia plena e aplicabilidade imediata, podendo ser exigida individualmente.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Implicação:</strong> Consolida a base jurídica para exigir o cumprimento do dever do Estado, 
                    confirmando a justiciabilidade do direito à vaga.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50">
                  <h5 className="font-bold text-purple-900 mb-1">Tema 698 (RE 684.612)</h5>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Tese:</strong> A intervenção do Judiciário em políticas públicas, em caso de omissão ou deficiência grave, 
                    não viola a separação dos poderes. A decisão judicial deve determinar que a Administração apresente um 
                    <strong> plano para atingir o resultado</strong>, em vez de medidas pontuais.
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Implicação:</strong> Legitima uma abordagem estrutural. O MP deve induzir o Poder Público a criar 
                    e executar um <strong>Plano de Expansão</strong>, em vez de buscar soluções casuísticas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-lg border border-green-300">
              <p className="text-sm text-green-900 font-semibold">
                💡 <strong>Estratégia Recomendada:</strong> Ao receber uma demanda individual, o MP deve <strong>"coletivizá-la"</strong>, 
                instaurando um Procedimento Administrativo para investigar a situação em âmbito municipal e induzir a criação de um 
                <strong> Plano de Expansão Qualificada</strong>, negociado e com metas claras.
              </p>
            </div>
          </Card>
        </section>

        {/* Seção 3: Parâmetros de Qualidade */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <CheckCircle className="h-8 w-8 text-primary-600 mr-3" />
            3. Parâmetros de Qualidade e Equidade na Educação Infantil
          </h2>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">📋 Diretrizes Operacionais Nacionais (DONQEEI)</h3>
            <p className="text-gray-700 mb-4">
              A <strong>Resolução CNE/CEB n.º 1/2024</strong> institui as Diretrizes Operacionais Nacionais de Qualidade e Equidade 
              para a Educação Infantil (DONQEEI), de <strong>caráter obrigatório</strong>, estruturadas em cinco dimensões:
            </p>

            <div className="space-y-4">
              {/* Dimensão 1 */}
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-bold text-blue-900 mb-3">1. Gestão Democrática</h4>
                
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <h5 className="font-semibold text-gray-800 text-sm mb-2">👥 Participação</h5>
                    <p className="text-xs text-gray-700">
                      Criação de conselhos escolares e colegiados para tomada de decisão participativa.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded">
                    <h5 className="font-semibold text-gray-800 text-sm mb-2">🔍 Transparência</h5>
                    <p className="text-xs text-gray-700">
                      Divulgação pública de informações, incluindo listas de espera por vagas.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded">
                    <h5 className="font-semibold text-gray-800 text-sm mb-2">📊 Proporção Criança/Educador</h5>
                    <p className="text-xs text-gray-700 mb-2">
                      Parâmetros máximos essenciais para a qualidade do atendimento:
                    </p>
                    <div className="space-y-1">
                      {ratios.map((item, index) => (
                        <div key={index} className="flex justify-between items-center bg-blue-50 p-2 rounded text-xs">
                          <span className="font-medium text-gray-700">{item.idade}</span>
                          <span className="text-blue-900 font-semibold">{item.ratio}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded">
                    <h5 className="font-semibold text-gray-800 text-sm mb-2">📍 Territorialidade</h5>
                    <p className="text-xs text-gray-700">
                      Atendimento prioritário <strong>próximo à residência ou trabalho da família</strong> para evitar longos deslocamentos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dimensão 2 */}
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                <h4 className="font-bold text-green-900 mb-3">2. Identidade e Formação Profissional</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Qualificação:</strong> Exigência de formação em Pedagogia ou pós-graduação para gestores e, 
                    preferencialmente, formação superior em Pedagogia para docentes.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Valorização:</strong> Criação de carreiras específicas e remuneração adequada para profissionais 
                    de apoio (auxiliares, monitores), sempre sob supervisão de professores habilitados.</span>
                  </li>
                </ul>
              </div>

              {/* Dimensão 3 */}
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-purple-900 mb-3">3. Proposta Pedagógica</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Eixos Estruturantes:</strong> As <strong>interações</strong> e a <strong>brincadeira</strong> 
                    devem nortear as práticas pedagógicas.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Direitos de Aprendizagem:</strong> Garantir às crianças os direitos de 
                    <strong> conviver, brincar, participar, explorar, expressar e conhecer-se</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Ambientes:</strong> Espaços planejados com materiais diversos, contato com a natureza e segurança.</span>
                  </li>
                </ul>
              </div>

              {/* Dimensão 4 */}
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                <h4 className="font-bold text-orange-900 mb-3">4. Avaliação da Educação Infantil</h4>
                <p className="text-sm text-gray-700">
                  <strong>Foco:</strong> A avaliação deve ser <strong>formativa</strong>, para monitorar a qualidade da oferta 
                  e o desenvolvimento infantil, <strong>sem fins de promoção, retenção ou classificação</strong>.
                </p>
              </div>

              {/* Dimensão 5 */}
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
                <h4 className="font-bold text-teal-900 mb-3">5. Infraestrutura, Edificações e Materiais</h4>
                <p className="text-sm text-gray-700">
                  <strong>Padrões:</strong> Os espaços devem ser <strong>seguros, acessíveis, estimulantes e acolhedores</strong>, 
                  com ventilação, iluminação, mobiliário e materiais adequados para cada faixa etária.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600">
            <div className="flex items-start">
              <Building className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">🤝 Compromisso Nacional (CONAQUEI)</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Para materializar as DONQEEI, o MEC lançou o <strong>Compromisso Nacional pela Qualidade e Equidade 
                  na Educação Infantil (CONAQUEI)</strong>. O MP deve incentivar a adesão dos municípios, pois ele oferece 
                  assistência técnica e financeira para a expansão qualificada da rede.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Seção 4: Plano de Expansão */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Target className="h-8 w-8 text-primary-600 mr-3" />
            4. Estratégias para um Plano de Expansão Qualificada
          </h2>

          <Card className="mb-6">
            <p className="text-gray-700 mb-4">
              A superação do déficit de vagas exige um <strong>planejamento estruturado</strong>. 
              O MP deve induzir o município a elaborar e implementar um Plano de Expansão, seguindo etapas lógicas:
            </p>
          </Card>

          {/* Etapa 1: Diagnóstico */}
          <Card className="mb-6 bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-600">
            <h3 className="text-lg font-bold text-indigo-900 mb-4">Etapa 1: Diagnóstico Abrangente</h3>
            <p className="text-gray-700 mb-4">
              É o <strong>ponto de partida</strong> para entender a dimensão do problema.
            </p>

            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">📊 Levantamento da Demanda</h4>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Demanda Real (Manifesta):</strong> Quantificar a fila de espera existente</li>
                  <li>• <strong>Demanda Latente:</strong> Identificar famílias que desejam vaga mas não solicitaram, 
                  por meio de busca ativa em articulação com saúde e assistência social</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">🗺️ Mapeamento da Oferta</h4>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Analisar a capacidade instalada da rede própria e conveniada</li>
                  <li>• Identificar a distribuição territorial de vagas para mapear desigualdades regionais</li>
                  <li>• Verificar obras paralisadas, terrenos públicos disponíveis e espaços subutilizados</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Etapa 2: Gestão de Vagas */}
          <Card className="mb-6 bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-600">
            <h3 className="text-lg font-bold text-yellow-900 mb-4">Etapa 2: Gestão de Vagas e Organização da Fila de Espera</h3>
            <p className="text-gray-700 mb-4">
              Enquanto houver déficit, a gestão da fila deve ser <strong>transparente e equitativa</strong>.
            </p>

            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">💻 Central de Vagas</h4>
                <p className="text-sm text-gray-700">
                  Implementar um sistema <strong>informatizado e centralizado</strong> para gerir a demanda e a oferta de vagas, 
                  eliminando listas de espera isoladas por escola.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">🎯 Critérios de Priorização</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Estabelecer critérios objetivos para alocação de vagas, priorizando crianças em situação de vulnerabilidade 
                  (<strong>Manifestação Gaepe-Brasil n.º 01/2025</strong>):
                </p>
                <ul className="text-xs text-gray-600 ml-4 space-y-1">
                  <li>✓ Crianças com deficiência</li>
                  <li>✓ Filhas de vítimas de violência doméstica</li>
                  <li>✓ Famílias inscritas no CadÚnico</li>
                  <li>✓ Famílias monoparentais</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2 italic">
                  ⚠️ A fila de espera deve ser <strong>temporária</strong>, não uma característica permanente da política.
                </p>
              </div>
            </div>
          </Card>

          {/* Etapa 3: Ampliação da Oferta */}
          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Etapa 3: Estratégias de Ampliação da Oferta</h3>
            <p className="text-gray-700 mb-4">
              O plano deve combinar estratégias de <strong>curto, médio e longo prazo</strong>:
            </p>

            <div className="space-y-4">
              {estrategias.map((estrategia, index) => {
                const bgColor = estrategia.cor === 'blue' ? 'bg-blue-50' : 
                               estrategia.cor === 'green' ? 'bg-green-50' : 'bg-purple-50'
                const borderColor = estrategia.cor === 'blue' ? 'border-blue-600' : 
                                   estrategia.cor === 'green' ? 'border-green-600' : 'border-purple-600'
                const textColor = estrategia.cor === 'blue' ? 'text-blue-900' : 
                                 estrategia.cor === 'green' ? 'text-green-900' : 'text-purple-900'
                
                return (
                  <div key={index} className={`${bgColor} p-4 rounded-lg border-l-4 ${borderColor}`}>
                    <h4 className={`font-bold ${textColor} mb-2`}>{estrategia.prazo}: {estrategia.titulo}</h4>
                    <p className="text-sm text-gray-700">{estrategia.descricao}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-4 bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
              <p className="text-sm text-gray-800">
                <strong>⏰ Tempo Integral:</strong> A oferta de vagas em tempo integral deve ser expandida progressivamente, 
                conforme a <strong>Meta 6 do PNE</strong>, com prioridade para crianças em situação de vulnerabilidade.
              </p>
            </div>
          </Card>
        </section>

        {/* Seção 5: Financiamento */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <DollarSign className="h-8 w-8 text-primary-600 mr-3" />
            5. Financiamento e Fiscalização pelo Ministério Público
          </h2>

          <Card className="mb-6">
            <p className="text-gray-700 mb-4">
              A viabilidade de qualquer plano de expansão depende de <strong>financiamento adequado</strong>. 
              O MP deve fiscalizar a correta aplicação dos recursos da educação:
            </p>

            <div className="space-y-4">
              {/* FUNDEB */}
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-bold text-blue-900 mb-3">💰 FUNDEB (Fundo de Manutenção e Desenvolvimento da Educação Básica)</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Principal mecanismo de financiamento. O MP deve monitorar:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Complementação da União (VAAT):</strong> Cumprimento das condicionalidades para recebimento de recursos. 
                    Lembrar que <strong>50% da complementação VAAT deve ser destinada à educação infantil</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Aplicação dos Recursos:</strong> Garantir que no mínimo <strong>70% do FUNDEB</strong> seja usado 
                    para o pagamento de profissionais da educação.</span>
                  </li>
                </ul>
              </div>

              {/* Salário-Educação */}
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                <h4 className="font-bold text-green-900 mb-2">📚 Salário-Educação</h4>
                <p className="text-sm text-gray-700">
                  Contribuição social que financia programas de apoio à educação básica 
                  (transporte, material didático, alimentação escolar).
                </p>
              </div>

              {/* Prioridade Orçamentária */}
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                <h4 className="font-bold text-orange-900 mb-3">⚖️ Prioridade Orçamentária</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Com base no <strong>princípio da prioridade absoluta (art. 227 da CF e art. 4º do ECA)</strong>, 
                  o MP deve questionar a alocação de recursos em áreas não essenciais quando há déficit de vagas na educação infantil:
                </p>
                <ul className="text-xs text-gray-600 ml-4 space-y-1">
                  <li>• Shows e eventos não prioritários</li>
                  <li>• Publicidade excessiva</li>
                  <li>• Financiamento do ensino superior (não é competência prioritária municipal)</li>
                </ul>
                <p className="text-xs text-gray-700 mt-2 font-semibold">
                  A educação infantil é de <strong>competência prioritária do município</strong> e deve ter precedência orçamentária.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Seção 6: Experiências Exitosas */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <CheckCircle className="h-8 w-8 text-primary-600 mr-3" />
            6. Experiências Exitosas: Atuação Estrutural na Prática
          </h2>

          <Card className="mb-6">
            <p className="text-gray-700 mb-4">
              Dois casos práticos ilustram o <strong>sucesso da abordagem estrutural</strong> defendida pelo CNMP:
            </p>
          </Card>

          {/* São Paulo */}
          <Card className="mb-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-900 mb-4">📍 São Paulo (SP)</h3>
            
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">🚨 Cenário Inicial</h4>
                <p className="text-sm text-gray-700">
                  Dezenas de milhares de crianças na fila de espera e um padrão de <strong>judicialização individual ineficaz</strong>.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">⚖️ Estratégia do MP</h4>
                <p className="text-sm text-gray-700">
                  O <strong>Grupo de Atuação Especial de Educação (GEDUC)</strong> articulou um Grupo de Trabalho Interinstitucional 
                  que, atuando em uma ação civil pública, conseguiu a realização de uma <strong>audiência pública inédita</strong> 
                  no Tribunal de Justiça.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">✅ Resultado</h4>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>✓ Decisão judicial <strong>estruturante</strong> condenando o município a criar <strong>150 mil novas vagas</strong></li>
                  <li>✓ Exigência de apresentação de um <strong>plano de expansão detalhado</strong></li>
                  <li>✓ Estabelecimento de um <strong>comitê participativo de monitoramento</strong></li>
                  <li>✓ Acordo judicial posterior adicionando <strong>metas de qualidade</strong></li>
                  <li>✓ <strong>Redução drástica da fila de espera</strong></li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Joinville */}
          <Card className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600">
            <h3 className="text-xl font-bold text-green-900 mb-4">📍 Joinville (SC)</h3>
            
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">🚨 Cenário Inicial</h4>
                <p className="text-sm text-gray-700">
                  Déficit histórico de <strong>mais de 6.000 vagas</strong> e uma ação civil pública que tramitava por anos 
                  sem solução prática.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">⚖️ Estratégia do MP</h4>
                <p className="text-sm text-gray-700">
                  Instauração de um <strong>procedimento administrativo</strong> para acompanhar a política pública e 
                  <strong> negociar uma solução estrutural</strong> diretamente com o município.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">✅ Resultado</h4>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>✓ Construção de um <strong>plano de expansão detalhado</strong> com diagnóstico, cronogramas e metas</li>
                  <li>✓ Acordo judicial extinguindo a ação civil pública</li>
                  <li>✓ Em cerca de <strong>quatro anos</strong>, o planejamento negociado mostrou-se muito mais eficaz do que 
                  quase uma <strong>década de litígio</strong></li>
                  <li>✓ Projeção de criação de <strong>mais de 9.000 vagas</strong></li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-green-100 p-4 rounded-lg border border-green-300">
              <p className="text-sm text-green-900 font-semibold">
                💡 <strong>Lição:</strong> A abordagem estrutural e negociada é significativamente mais eficaz e rápida 
                do que a judicialização individual prolongada.
              </p>
            </div>
          </Card>
        </section>

        {/* Convergência com PNAE */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Users className="h-8 w-8 text-primary-600 mr-3" />
            7. Convergência com o Plano Nacional de Atuação Estratégica do CNMP (PNAE 2025)
          </h2>

          <Card className="mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-600">
            <h3 className="text-xl font-bold text-indigo-900 mb-4">🎯 Primeira Infância como Diretriz Prioritária do PNAE 2025</h3>
            <p className="text-gray-700 mb-4">
              O <strong>Plano Nacional de Atuação Estratégica (PNAE) de 2025</strong> estabeleceu como uma de suas diretrizes 
              prioritárias o <strong>Fortalecimento da atuação integrada na proteção dos direitos das crianças na Primeira Infância</strong>.
            </p>
            <div className="bg-indigo-100 p-4 rounded-lg border border-indigo-300">
              <p className="text-sm text-indigo-900 font-semibold mb-2">
                📌 <strong>Definição da Presidência do CNMP:</strong>
              </p>
              <p className="text-sm text-gray-700">
                Esta diretriz foi definida como um <strong>desafio de grande complexidade e impacto coletivo</strong>, 
                que exige uma resposta coordenada e abrangente em todo o país.
              </p>
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">📋 Diretriz Geral e Escopo da Atuação</h3>
            <p className="text-gray-700 mb-4">
              O objetivo principal é <strong>fortalecer a atuação integrada do Ministério Público na promoção dos 
              direitos das crianças na primeira infância</strong>. Essa atuação foca em:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">1. Proteção Integral</h4>
                <p className="text-sm text-gray-700">
                  Garantia de todos os direitos fundamentais previstos no ECA e na Constituição Federal.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">2. Expansão e Universalização da Educação Infantil</h4>
                <p className="text-sm text-gray-700">
                  Ampliação qualificada de vagas em creches e pré-escolas.
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-900 mb-2">3. Apoio às Famílias</h4>
                <p className="text-sm text-gray-700">
                  Fortalecimento de políticas de apoio familiar e convivência comunitária.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-900 mb-2">4. Prevenção de Violações</h4>
                <p className="text-sm text-gray-700">
                  Atuação preventiva e protetiva contra todas as formas de violência.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-800 mb-3">
                <strong>🔬 Metodologia:</strong> A atuação ministerial deve ser <strong>intersetorial e baseada em evidências</strong>, 
                buscando fortalecer as políticas públicas que garantam o <strong>desenvolvimento saudável e seguro das crianças de 0 a 6 anos</strong>.
              </p>
              <p className="text-xs text-gray-600">
                Entre os aspectos que o MP pode envolver-se estão: expansão e melhoria da educação infantil, 
                fortalecimento de serviços de acolhimento familiar e fiscalização da escuta especializada/depoimento especial.
              </p>
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">🎯 Três Atuações Estratégicas do PNAE para a Primeira Infância</h3>
            <p className="text-gray-700 mb-4">
              Para concretizar a diretriz, o PNAE estabeleceu <strong>três atuações estratégicas</strong> com metas 
              e indicadores nacionais específicos:
            </p>

            <div className="space-y-4">
              {/* Atuação 1 - Água Potável */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-5 rounded-lg border-l-4 border-cyan-600">
                <div className="flex items-start mb-3">
                  <div className="bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-3 flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2 flex items-center">
                      <Droplet className="h-5 w-5 mr-2" />
                      Acesso à Água Potável nas Escolas
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                      O acesso à água potável em ambiente escolar é uma <strong>condição fundamental para a proteção da saúde</strong>, 
                      o desenvolvimento integral e a permanência das crianças na escola.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg mb-3">
                  <h5 className="font-semibold text-gray-800 text-sm mb-2">📊 Metas Nacionais:</h5>
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Meta de Esforço:</strong> Realizar ao menos <strong>500 visitas a estabelecimentos educacionais</strong> 
                      em todo o território nacional para verificar o acesso à água potável</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Meta de Resultado 1:</strong> <strong>Reduzir em 10%</strong> a proporção de escolas com 
                      acesso irregular à água potável (comparação Censo Escolar 2024 e 2025)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Meta de Resultado 2:</strong> <strong>Aumentar em 10%</strong> o número de alunos 
                      beneficiados com melhorias nas condições de acesso à água</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-cyan-100 p-3 rounded border-l-4 border-cyan-500">
                  <p className="text-xs text-gray-700">
                    <strong>🔗 Projeto Institucional:</strong> Alinha-se ao <strong>Projeto Sede de Aprender</strong>, 
                    envolvendo a Presidência do CNMP, CIJE, Comissão de Meio Ambiente e Corregedoria Nacional.
                  </p>
                </div>
              </div>

              {/* Atuação 2 - Obras Paralisadas */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-5 rounded-lg border-l-4 border-orange-600">
                <div className="flex items-start mb-3">
                  <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-3 flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-orange-900 text-lg mb-2 flex items-center">
                      <Building className="h-5 w-5 mr-2" />
                      Fiscalização e Retomada de Obras da Educação Infantil
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Promover a atuação articulada do MP na fiscalização e indução da retomada de <strong>obras paralisadas 
                      ou inacabadas da educação infantil</strong>. Objetivo: garantir infraestrutura adequada e 
                      <strong> ampliar a oferta de vagas</strong>, com foco especial na primeira infância.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg mb-3">
                  <h5 className="font-semibold text-gray-800 text-sm mb-2">📊 Metas Nacionais:</h5>
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Meta de Esforço:</strong> Fiscalizar, por meio de procedimentos extrajudiciais, 
                      <strong> ao menos 60% das obras paralisadas/inacabadas</strong> identificadas pelo FNDE/SIMEC</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Meta de Resultado:</strong> Atingir o número de <strong>500 obras retomadas</strong> 
                      em razão da atuação ou com o apoio do Ministério Público</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-100 p-3 rounded border-l-4 border-orange-500">
                  <p className="text-xs text-gray-700">
                    <strong>🔗 Campanha Institucional:</strong> Parte da <strong>Campanha Primeiros Passos</strong>, 
                    capitaneada pela Presidência do CNMP. Materializa-se através da <strong>Estratégia Nacional para 
                    Fiscalização e Retomada de Obras</strong>, coordenada pela Corregedoria Nacional, Presidência e CIJE.
                  </p>
                </div>
              </div>

              {/* Atuação 3 - Família Acolhedora */}
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-5 rounded-lg border-l-4 border-pink-600">
                <div className="flex items-start mb-3">
                  <div className="bg-pink-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-3 flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-pink-900 text-lg mb-2 flex items-center">
                      <Heart className="h-5 w-5 mr-2" />
                      Expansão do Serviço de Acolhimento em Família Acolhedora (SAF)
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Fortalecer a política pública de acolhimento familiar, priorizando a inserção da criança em 
                      <strong> família acolhedora</strong> em detrimento do acolhimento institucional. Foco: garantir 
                      o direito à convivência familiar e comunitária e <strong>reduzir o acolhimento institucional</strong>, 
                      com ênfase na proteção da primeira infância.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg mb-3">
                  <h5 className="font-semibold text-gray-800 text-sm mb-2">📊 Metas Nacionais:</h5>
                  <ul className="space-y-2 text-xs text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Meta de Esforço:</strong> Promover a ampla divulgação do SAF, realizando 
                      <strong> ao menos 25 campanhas de comunicação</strong> para conscientização, mobilização e 
                      cadastramento de famílias interessadas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Meta de Resultado:</strong> <strong>Aumentar em 10%</strong> o número de 
                      Serviços de Acolhimento em Família Acolhedora ativos</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-pink-100 p-3 rounded border-l-4 border-pink-500">
                  <p className="text-xs text-gray-700">
                    <strong>🔗 Base Normativa:</strong> Expansão do SAF é um dos eixos prioritários da 
                    <strong> Campanha Primeiros Passos</strong> e está em consonância com a 
                    <strong> Resolução CNMP nº 293/2024</strong>.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mb-6 bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-600">
            <h3 className="text-lg font-bold text-purple-900 mb-4">🤝 Articulação e Metodologia do PNAE</h3>
            <p className="text-gray-700 mb-4">
              A formulação das metas e indicadores para a proteção da primeira infância foi resultado de um 
              <strong> esforço conjunto de articulação institucional</strong> e de um <strong>processo colaborativo de construção</strong>.
            </p>

            <div className="bg-white p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-gray-800 mb-3 text-sm">🏛️ Participação Institucional</h4>
              <p className="text-sm text-gray-700 mb-3">
                Os subsídios técnicos foram obtidos através do diálogo com os grupos temáticos do 
                <strong> Conselho Nacional de Procuradores-Gerais (CNPG)</strong>:
              </p>
              <div className="grid md:grid-cols-2 gap-2 text-xs">
                <div className="bg-purple-50 p-2 rounded">
                  ✓ <strong>Grupo Nacional de Direitos Humanos (GNDH)</strong>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  ✓ <strong>Comissão Permanente da Infância e Juventude (COPEIJ)</strong>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  ✓ <strong>Comissão Permanente de Educação (COPEDUC)</strong>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  ✓ <strong>Corregedoria Nacional do CNMP</strong>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  ✓ <strong>Comissão da Infância e Juventude do CNMP (CIJE)</strong>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  ✓ <strong>Presidência do CNMP</strong>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">📊 Escolha Metodológica</h4>
              <p className="text-sm text-gray-700 mb-2">
                Para viabilizar o acompanhamento nacional, o PNAE optou por utilizar <strong>valores absolutos em âmbito nacional</strong> 
                (como as 500 visitas escolares e as 500 obras acompanhadas), em vez de percentuais vinculados à realidade local.
              </p>
              <p className="text-xs text-gray-600">
                <strong>Justificativa:</strong> Essa escolha metodológica busca <strong>respeitar as especificidades de cada 
                unidade federativa</strong>, permitindo que o esforço nacional seja conjunto, mensurável e comparável.
              </p>
            </div>

            <div className="bg-purple-100 p-4 rounded-lg border border-purple-300">
              <p className="text-sm text-purple-900 font-semibold mb-2">
                🌟 <strong>Convergência de Esforços:</strong>
              </p>
              <p className="text-sm text-gray-700">
                A <strong>convergência</strong> entre os grupos temáticos do CNPG, comissões do CNMP e projetos institucionais 
                (como a <strong>Campanha Primeiros Passos</strong>) fortalece a proposta do PNAE, promovendo uma 
                <strong> atuação integrada e resolutiva</strong> em prol da efetivação dos direitos da criança na primeira infância.
              </p>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600">
            <h3 className="text-lg font-bold text-green-900 mb-4">🌳 Metáfora do Plantio da Floresta</h3>
            <p className="text-gray-700 mb-4">
              A atuação do Ministério Público na Primeira Infância é como o <strong>plantio de uma floresta</strong>:
            </p>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-700 mb-3">
                Em vez de se focar apenas nas árvores adultas, o esforço é concentrado em garantir que 
                <strong> as sementes</strong> (as crianças de 0 a 6 anos) recebam:
              </p>
              <div className="grid md:grid-cols-3 gap-3 text-xs">
                <div className="bg-cyan-50 p-3 rounded border-l-4 border-cyan-500">
                  <p className="font-semibold text-cyan-900 mb-1">💧 Água</p>
                  <p className="text-gray-700">
                    <strong>Atuação 1:</strong> Acesso à água potável nas escolas - condição básica para saúde e desenvolvimento
                  </p>
                </div>
                <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-900 mb-1">🏗️ Solo Adequado</p>
                  <p className="text-gray-700">
                    <strong>Atuação 2:</strong> Infraestrutura escolar (obras retomadas) - espaço físico adequado para crescer
                  </p>
                </div>
                <div className="bg-pink-50 p-3 rounded border-l-4 border-pink-500">
                  <p className="font-semibold text-pink-900 mb-1">❤️ Apoio Familiar</p>
                  <p className="text-gray-700">
                    <strong>Atuação 3:</strong> SAF (Família Acolhedora) - ambiente familiar essencial para desenvolvimento saudável
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-3 font-semibold text-center">
                🌱 Assegurando que o ecossistema inteiro se desenvolva de forma <strong>saudável e sustentável</strong>!
              </p>
            </div>
          </Card>
        </section>

        {/* Recomendação CNMP nº 06/2025 */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Shield className="h-8 w-8 text-primary-600 mr-3" />
            7.1. Recomendação de Caráter Geral nº 06/2025 do CNMP - Prioridade Absoluta
          </h2>

          <Card className="mb-6 bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-red-600">
            <h3 className="text-xl font-bold text-red-900 mb-4">⚖️ Prioridade Absoluta na Defesa dos Direitos da Criança e do Adolescente</h3>
            <p className="text-gray-700 mb-4">
              Em <strong>28 de agosto de 2025</strong>, a Corregedoria Nacional do Ministério Público expediu a 
              <strong> Recomendação de Caráter Geral nº 06/2025</strong>, determinando que todos os ramos e unidades do MP 
              assegurem <strong>prioridade absoluta</strong> na atuação em defesa e promoção dos direitos de crianças e adolescentes.
            </p>
            <div className="bg-red-100 p-4 rounded-lg border border-red-300">
              <p className="text-sm text-red-900 font-semibold mb-2">
                📌 <strong>Fundamento Constitucional:</strong>
              </p>
              <p className="text-sm text-gray-700">
                A Constituição Federal (art. 227) e o Estatuto da Criança e do Adolescente (art. 4º) estabelecem ser dever 
                do Estado assegurar, com <strong>absoluta prioridade</strong>, os direitos da criança e do adolescente, 
                colocando-os a salvo de toda forma de negligência, discriminação, exploração, violência, crueldade e opressão.
              </p>
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">🎯 Contexto e Motivação da Recomendação</h3>
            <p className="text-gray-700 mb-4">
              A Recomendação surge em um contexto de fortalecimento institucional da proteção à infância e juventude, 
              considerando:
            </p>

            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm font-semibold text-blue-900 mb-2">📣 Campanha Primeiros Passos</p>
                <p className="text-xs text-gray-700">
                  Iniciativa da Presidência do CNMP voltada à promoção de ações articuladas com diversas instituições, 
                  tendo como foco a proteção e o cuidado com a infância, com apoio da Corregedoria Nacional e da 
                  Comissão de Infância, Juventude e Educação (CIJE).
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-sm font-semibold text-purple-900 mb-2">🤝 Atuação Integrada e Intersetorial</p>
                <p className="text-xs text-gray-700">
                  Reconhecimento de que a efetivação da prioridade absoluta demanda <strong>convergência entre todas 
                  as áreas de atuação do MP</strong>, não apenas as Promotorias especializadas da Infância e Juventude.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-sm font-semibold text-green-900 mb-2">🔍 Monitoramento Permanente</p>
                <p className="text-xs text-gray-700">
                  Necessidade de acompanhamento pelas Corregedorias-Gerais e pela Corregedoria Nacional para assegurar 
                  a implementação efetiva da prioridade absoluta em todos os órgãos de execução.
                </p>
              </div>
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">📋 Principais Determinações da Recomendação</h3>
            <p className="text-gray-700 mb-4">
              A Recomendação estabelece <strong>5 dimensões de garantia da prioridade absoluta</strong> (Art. 1º):
            </p>

            <div className="space-y-4">
              {/* Dimensão 1 */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-5 rounded-lg border-l-4 border-indigo-600">
                <div className="flex items-start">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-3 flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-indigo-900 text-base mb-2">Tramitação Prioritária</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Todo procedimento extrajudicial ou processo judicial que verse sobre interesse de criança ou 
                      adolescente deve ter <strong>tramitação prioritária</strong>, independentemente da área de atuação 
                      (saúde, educação, trabalho, pessoa com deficiência, meio ambiente, criminal, família, etc.).
                    </p>
                    <div className="bg-white p-3 rounded border border-indigo-200 mt-2">
                      <p className="text-xs text-gray-700">
                        <strong>💡 Exemplo Prático:</strong> Um TAC sobre poluição de rio que afeta escola infantil deve ter 
                        prioridade de tramitação, mesmo sendo conduzido por Promotoria de Meio Ambiente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dimensão 2 */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border-l-4 border-green-600">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-3 flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-green-900 text-base mb-2">Precedência no Atendimento</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Crianças, adolescentes e seus responsáveis devem ter <strong>atendimento preferencial</strong> em 
                      qualquer setor ou área de atuação do Ministério Público.
                    </p>
                    <div className="bg-white p-3 rounded border border-green-200 mt-2">
                      <p className="text-xs text-gray-700">
                        <strong>💡 Exemplo Prático:</strong> Mãe que busca vaga em creche deve ter prioridade no atendimento 
                        da Promotoria, mesmo em dia de expediente regular com outros atendimentos agendados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dimensão 3 */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border-l-4 border-purple-600">
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-3 flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-purple-900 text-base mb-2">Preferência nas Políticas Institucionais</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      A proteção à infância e juventude deve ter <strong>preferência na formulação e execução</strong> 
                      dos Planejamentos Estratégicos e Planos Gerais de Atuação de todas as unidades e ramos do MP.
                    </p>
                    <div className="bg-white p-3 rounded border border-purple-200 mt-2">
                      <p className="text-xs text-gray-700">
                        <strong>💡 Convergência com PNAE 2025:</strong> Esta recomendação reforça a prioridade da 
                        Primeira Infância estabelecida no Plano Nacional de Atuação Estratégica (seção anterior).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dimensão 4 */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-5 rounded-lg border-l-4 border-orange-600">
                <div className="flex items-start">
                  <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-3 flex-shrink-0">4</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-orange-900 text-base mb-2">Destinação Privilegiada de Recursos</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Recursos orçamentários do MP devem ser <strong>priorizados</strong> para áreas relacionadas à 
                      proteção da infância e juventude, incluindo:
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1 ml-4 mb-2">
                      <li>• Expansão de Centros de Apoio Operacional (CAOPs)</li>
                      <li>• Criação de Promotorias e Procuradorias especializadas</li>
                      <li>• Ampliação de equipes técnicas multidisciplinares de apoio</li>
                    </ul>
                    <div className="bg-white p-3 rounded border border-orange-200 mt-2">
                      <p className="text-xs text-gray-700">
                        <strong>💡 Exemplo Prático:</strong> Priorizar contratação de psicólogos e assistentes sociais 
                        para apoio às Promotorias da Infância em detrimento de outras aquisições menos urgentes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dimensão 5 */}
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-5 rounded-lg border-l-4 border-teal-600">
                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-3 flex-shrink-0">5</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-teal-900 text-base mb-2">Atuação Articulada e Integrada</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Promotorias especializadas de Infância e Juventude devem atuar de forma <strong>articulada</strong> 
                      com outros órgãos de execução (federal, trabalho, militar, saúde, educação, etc.) para resolução 
                      célere e eficaz de questões que exijam atuação conjunta.
                    </p>
                    <div className="bg-white p-3 rounded border border-teal-200 mt-2">
                      <p className="text-xs text-gray-700">
                        <strong>💡 Exemplo Prático:</strong> Caso de trabalho infantil em propriedade rural: articulação 
                        entre Promotoria da Infância + MPT + Promotoria Criminal para atuação coordenada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mb-6 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-600">
            <h3 className="text-lg font-bold text-red-900 mb-4">🚨 Prioridade Absoluta Reforçada (Art. 2º, §1º)</h3>
            <p className="text-gray-700 mb-4">
              Algumas situações exigem <strong>prioridade ainda mais reforçada</strong>, devendo ser tratadas de forma 
              equivalente aos processos com réu preso:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-500">
                <div className="text-2xl mb-2">🏠</div>
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Acolhimento Institucional/Familiar</h4>
                <p className="text-xs text-gray-600">
                  Crianças e adolescentes em situação de acolhimento (máximo 18 meses)
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
                <div className="text-2xl mb-2">🔨</div>
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Trabalho Infantil</h4>
                <p className="text-xs text-gray-600">
                  Casos de exploração de trabalho infantil (violação grave)
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border-l-4 border-red-500">
                <div className="text-2xl mb-2">🛡️</div>
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Violência</h4>
                <p className="text-xs text-gray-600">
                  Casos de violência, especialmente quando demandarem depoimento especial (Lei 13.431/2017)
                </p>
              </div>
            </div>

            <div className="bg-red-100 p-4 rounded-lg border border-red-300 mt-4">
              <p className="text-sm text-red-900 font-semibold mb-2">
                ⏱️ <strong>Prazos Máximos Reforçados:</strong>
              </p>
              <ul className="text-xs text-gray-700 space-y-1 ml-4">
                <li>• <strong>Ação de Destituição do Poder Familiar:</strong> 120 dias (art. 163, ECA)</li>
                <li>• <strong>Recurso em 2º Grau:</strong> 60 dias (art. 199-D, ECA)</li>
                <li>• <strong>Ação de Adoção:</strong> 120 dias (art. 47, §10, ECA)</li>
                <li>• <strong>Acolhimento Institucional:</strong> Máximo de 18 meses (art. 19, §2º, ECA)</li>
                <li>• <strong>Depoimento Especial:</strong> Agendamento com urgência de réu preso (Lei 13.431/2017)</li>
              </ul>
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <Gavel className="h-6 w-6 text-gray-700 mr-3" />
              Depoimento Especial - Urgência Máxima (Art. 5º)
            </h3>
            <p className="text-gray-700 mb-4">
              A Recomendação dedica atenção especial ao <strong>depoimento especial de crianças e adolescentes 
              vítimas ou testemunhas de violência</strong> (Lei 13.431/2017):
            </p>

            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2 text-sm">1. Produção Antecipada de Provas</h4>
                <p className="text-xs text-gray-700 mb-2">
                  Sempre que necessário o depoimento especial, o MP deve ajuizar com <strong>máxima brevidade</strong> 
                  ação cautelar de produção antecipada de provas, especialmente nos casos obrigatórios (art. 11, §1º, I e II, Lei 13.431/2017).
                </p>
                <p className="text-xs text-gray-600 italic">
                  <strong>Objetivo:</strong> Evitar revitimização, preservar qualidade da prova e prevenir contaminações da memória.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-900 mb-2 text-sm">2. Agendamento Prioritário</h4>
                <p className="text-xs text-gray-700 mb-2">
                  A oitiva da criança ou adolescente deve ser agendada com <strong>prioridade absoluta</strong>, 
                  em agenda específica e com a <strong>mesma urgência de processos de réu preso</strong>.
                </p>
                <p className="text-xs text-gray-600 italic">
                  <strong>Evitar:</strong> Que a audiência seja agendada na pauta comum da Vara, causando violência institucional.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2 text-sm">3. Integração ao Procedimento Principal</h4>
                <p className="text-xs text-gray-700 mb-2">
                  Quando realizado o depoimento especial em produção antecipada, este deve integrar com 
                  <strong> brevidade</strong> o procedimento que serviu de fundamento, priorizando medidas cabíveis 
                  e resguardando sigilo (Resolução CNMP 287/2024).
                </p>
              </div>
            </div>
          </Card>

          <Card className="mb-6 bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-600">
            <h3 className="text-lg font-bold text-amber-900 mb-4">🔍 Papel das Corregedorias (Art. 6º)</h3>
            <p className="text-gray-700 mb-4">
              A Recomendação estabelece <strong>13 diretrizes</strong> para atuação das Corregedorias-Gerais do MP 
              na fiscalização do cumprimento da prioridade absoluta:
            </p>

            <div className="bg-white p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-3 text-xs text-gray-700">
                <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                  <strong>✓ Avaliar garantia de prioridade absoluta</strong> na tramitação de procedimentos
                </div>
                <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                  <strong>✓ Observar parâmetros de resolutividade</strong> (Carta de Brasília, Rec. 2/2018)
                </div>
                <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                  <strong>✓ Valorizar atuação extrajudicial</strong> (reuniões, visitas, palestras, projetos)
                </div>
                <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                  <strong>✓ Verificar prioridade em Promotorias não especializadas</strong> (plenas/cumulativas)
                </div>
                <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                  <strong>✓ Certificar aderência ao PNAE e Planejamento Estratégico</strong>
                </div>
                <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                  <strong>✓ Analisar observância de Resoluções CNMP</strong> (269/2023, 287/2024, 293/2024)
                </div>
                <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                  <strong>✓ Valorizar uso de manuais e guias da CIJE/CNMP</strong> e COPEIJ/CNPG
                </div>
                <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                  <strong>✓ Reconhecer atuação estrutural</strong> (falta de vagas em creches, SAF, etc.)
                </div>
                <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                  <strong>✓ Garantir participação de membro especializado</strong> nas correições
                </div>
                <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                  <strong>✓ Valorizar articulação intersetorial</strong> (fluxos, protocolos, prevenção)
                </div>
                <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                  <strong>✓ Verificar tramitação prioritária e alocação de recursos</strong>
                </div>
                <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                  <strong>✓ Apurar receptividade à atuação integrada</strong> entre áreas diversas
                </div>
                <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400 md:col-span-2">
                  <strong>✓ Verificar condições estruturais mínimas</strong> para implementação (sugerindo melhorias)
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600">
            <h3 className="text-lg font-bold text-green-900 mb-4">🎯 Convergência com a Primeira Infância</h3>
            <p className="text-gray-700 mb-4">
              A Recomendação nº 06/2025 <strong>reforça e operacionaliza</strong> todas as diretrizes apresentadas neste Manual:
            </p>

            <div className="space-y-3">
              <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Expansão Qualificada de Creches e Pré-escolas</p>
                  <p className="text-xs text-gray-600">
                    Deve ter <strong>tramitação prioritária</strong> em TACs, ACPs e procedimentos extrajudiciais 
                    (Dimensão 1 da Recomendação)
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Prioridade nas Políticas Institucionais</p>
                  <p className="text-xs text-gray-600">
                    Alinha-se perfeitamente ao <strong>PNAE 2025</strong> que estabeleceu a Primeira Infância como 
                    diretriz prioritária (Dimensão 3)
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Atuação Estrutural Reconhecida</p>
                  <p className="text-xs text-gray-600">
                    As Corregedorias devem <strong>valorizar e reconhecer</strong> a atuação estrutural na falta de 
                    vagas em creches/pré-escolas (Art. 6º, parágrafo único, VII)
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Articulação Intersetorial</p>
                  <p className="text-xs text-gray-600">
                    Reforça a necessidade de <strong>convergência entre Promotorias</strong> (Educação, Infância, 
                    Patrimônio Público) conforme preconizado no Manual CNMP (Dimensão 5)
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Recursos Orçamentários Privilegiados</p>
                  <p className="text-xs text-gray-600">
                    Fortalece CAOPs de Educação e Infância, amplia equipes multidisciplinares (Dimensão 4)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-lg border border-green-300 mt-4">
              <p className="text-sm text-green-900 font-semibold mb-2">
                🌟 <strong>Impacto Prático:</strong>
              </p>
              <p className="text-sm text-gray-700">
                Esta Recomendação cria uma <strong>obrigatoriedade institucional</strong> de tratar a educação infantil 
                e todos os direitos da primeira infância com <strong>máxima prioridade</strong> em todas as unidades 
                do MP brasileiro, reforçando a legitimidade e urgência das ações descritas neste Manual.
              </p>
            </div>
          </Card>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
            <p className="text-sm text-gray-800 mb-2">
              <strong>📄 Recomendação completa:</strong>
            </p>
            <p className="text-xs text-gray-600">
              <strong>Recomendação de Caráter Geral CNMP nº 06/2025</strong> - Publicada em 28/08/2025 pela 
              Corregedoria Nacional do Ministério Público. Disponível no Portal do CNMP.
            </p>
          </div>
        </section>

        {/* Integração com DHS */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Target className="h-8 w-8 text-primary-600 mr-3" />
            9. Integração com o Desenvolvimento Harmônico e Sustentável (DHS)
          </h2>

          <Card className="bg-gradient-to-r from-teal-50 to-emerald-50 border-l-4 border-teal-600">
            <h3 className="text-lg font-bold text-teal-900 mb-4">🌱 Educação Infantil como Foco Prioritário do DHS</h3>
            <p className="text-gray-700 mb-4">
              A expansão qualificada da educação infantil se enquadra perfeitamente nos <strong>critérios de priorização do DHS</strong> (Passo 1):
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">⚖️</div>
                <h4 className="font-semibold text-gray-800 mb-2">Alta Judicialização</h4>
                <p className="text-xs text-gray-600">
                  Gera grande volume de ações individuais que sobrecarregam o Judiciário sem resolver o problema estrutural
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🚨</div>
                <h4 className="font-semibold text-gray-800 mb-2">Urgência e Gravidade</h4>
                <p className="text-xs text-gray-600">
                  Violação de direito fundamental com impacto direto no desenvolvimento infantil e na igualdade de oportunidades
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🌍</div>
                <h4 className="font-semibold text-gray-800 mb-2">Impacto Social</h4>
                <p className="text-xs text-gray-600">
                  Maior retorno social de investimentos (Curva de Heckman), redução de desigualdades e promoção da equidade de gênero
                </p>
              </div>
            </div>
          </Card>

          {/* Matriz de Convergência - 6 Eixos */}
          <Card className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FileText className="h-6 w-6 text-primary-600 mr-3" />
              Aplicação da Matriz de Convergência à Educação Infantil
            </h3>
            <p className="text-gray-700 mb-6">
              A <strong>Matriz de Convergência</strong> é o modelo metodológico do DHS para planejar e gerir atividades 
              de forma integrada e resolutiva. Ela possui <strong>6 eixos orientadores</strong> que, aplicados à educação infantil, 
              resultam em uma atuação sistêmica e eficaz:
            </p>

            {/* Eixo I - Ambiente */}
            <div className="mb-6 bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-900 text-lg mb-3 flex items-center">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">I</div>
                Eixo I - Ambiente (Habitat de Atuação)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Definição:</strong> Identificar o ambiente/território onde ocorrerá a intervenção.
              </p>
              <div className="bg-white p-4 rounded border border-blue-200">
                <p className="text-sm font-semibold text-blue-900 mb-2">📍 Aplicação na Educação Infantil:</p>
                <ul className="text-xs text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Município específico</strong> com déficit de vagas em creches/pré-escolas</li>
                  <li>• <strong>Região/bairro</strong> com maior concentração de demanda reprimida (mapeamento territorial)</li>
                  <li>• <strong>Rede municipal de ensino</strong> (diagnóstico de infraestrutura, recursos humanos, gestão)</li>
                  <li>• <strong>Espaços de articulação</strong>: Conselho Municipal de Educação, Fórum de Educação, audiências públicas</li>
                </ul>
              </div>
            </div>

            {/* Eixo II - Atuação Interinstitucional */}
            <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold text-green-900 text-lg mb-3 flex items-center">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">II</div>
                Eixo II - Atuação Interinstitucional
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Definição:</strong> Promover a convergência entre instituições públicas, privadas e sociedade civil.
              </p>
              <div className="bg-white p-4 rounded border border-green-200">
                <p className="text-sm font-semibold text-green-900 mb-2">🤝 Aplicação na Educação Infantil:</p>
                <div className="grid md:grid-cols-2 gap-3 text-xs text-gray-700">
                  <div className="bg-green-50 p-2 rounded">
                    <strong>Executivo Municipal:</strong> Secretaria de Educação, Planejamento, Fazenda
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <strong>Tribunal de Contas:</strong> Fiscalização do FUNDEB e aplicação de recursos
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <strong>Conselho Municipal de Educação:</strong> Normatização e acompanhamento
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <strong>Defensoria Pública:</strong> Representação das famílias e litígios individuais
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <strong>Conselhos Tutelares e CMDCA:</strong> Proteção integral da criança
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <strong>Sociedade Civil:</strong> Associações de pais, movimentos sociais, academia
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <strong>Poder Legislativo:</strong> Orçamento, leis municipais, fiscalização
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <strong>Poder Judiciário:</strong> Ações estruturais, controle jurisdicional
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3 italic">
                  💡 A articulação entre essas instituições multiplica a capacidade de resolução e evita ações isoladas e contraditórias.
                </p>
              </div>
            </div>

            {/* Eixo III - Atuação Institucional */}
            <div className="mb-6 bg-gradient-to-r from-purple-50 to-indigo-50 p-5 rounded-lg border-l-4 border-purple-600">
              <h4 className="font-bold text-purple-900 text-lg mb-3 flex items-center">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">III</div>
                Eixo III - Atuação Institucional do MP
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Definição:</strong> Fortalecer a atuação interna e integrada do Ministério Público.
              </p>
              <div className="bg-white p-4 rounded border border-purple-200">
                <p className="text-sm font-semibold text-purple-900 mb-2">🏛️ Aplicação na Educação Infantil:</p>
                <ul className="text-xs text-gray-700 space-y-2 ml-4">
                  <li>• <strong>Convergência entre Promotorias:</strong> Educação + Infância + Defesa do Patrimônio Público + Defesa dos Direitos Humanos</li>
                  <li>• <strong>Articulação com CAOP:</strong> Assessoria técnica especializada em educação</li>
                  <li>• <strong>Intercâmbio entre comarcas:</strong> Compartilhar boas práticas, TACs-modelo, peças processuais</li>
                  <li>• <strong>Capacitação contínua:</strong> Formação em políticas educacionais, financiamento (FUNDEB), jurisprudência (STF)</li>
                  <li>• <strong>Instrumentos institucionais:</strong> Recomendações, TACs, Planos de Atuação integrados</li>
                </ul>
              </div>
            </div>

            {/* Eixo IV - Abordagens */}
            <div className="mb-6 bg-gradient-to-r from-orange-50 to-amber-50 p-5 rounded-lg border-l-4 border-orange-600">
              <h4 className="font-bold text-orange-900 text-lg mb-3 flex items-center">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">IV</div>
                Eixo IV - Abordagens (Consciência, Meios e Incentivos)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Definição:</strong> Trabalhar três dimensões: conscientização sobre o problema, disponibilização de meios para solução e criação de incentivos.
              </p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border border-orange-200">
                  <p className="text-sm font-semibold text-orange-900 mb-2">🧠 4.1 - Conscientização e Reconhecimento da Necessidade</p>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4">
                    <li>• Divulgar dados: magnitude do déficit (632 mil crianças em filas), impacto científico (neurociência, Curva de Heckman)</li>
                    <li>• Evidenciar violação de direitos: CF/88, ECA, LDB, PNE, ODS 4</li>
                    <li>• Sensibilizar gestores sobre o custo social do não atendimento e o benefício do investimento precoce</li>
                    <li>• Campanhas de comunicação: "Primeira Infância Primeiro", "Primeiros Passos" (CNMP)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-orange-200">
                  <p className="text-sm font-semibold text-orange-900 mb-2">🛠️ 4.2 - Meios de Concretização</p>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4">
                    <li>• <strong>Financiamento:</strong> FUNDEB (mínimo 50% VAAT para educação infantil), Salário-Educação, PAR/FNDE</li>
                    <li>• <strong>Infraestrutura:</strong> Retomada de obras paralisadas, construção de novas unidades, adequação de espaços</li>
                    <li>• <strong>Recursos Humanos:</strong> Concursos públicos, formação continuada, plano de carreira</li>
                    <li>• <strong>Gestão:</strong> Sistema de vagas único, critérios transparentes de matrícula, monitoramento de lista de espera</li>
                    <li>• <strong>Metodologias:</strong> Manual CNMP, parâmetros DONQEEI, Planos de Expansão Qualificada</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-orange-200">
                  <p className="text-sm font-semibold text-orange-900 mb-2">🎁 4.3 - Incentivos</p>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4">
                    <li>• <strong>Prêmios e reconhecimento:</strong> Destacar municípios que universalizam educação infantil com qualidade</li>
                    <li>• <strong>Cooperação técnica:</strong> Apoio de universidades, consultorias, capacitações para gestores que aderirem aos planos</li>
                    <li>• <strong>Evitar litígios:</strong> TACs que garantem segurança jurídica e previsibilidade ao gestor</li>
                    <li>• <strong>Visibilidade positiva:</strong> Divulgação de casos de sucesso (São Paulo 150k vagas, Joinville 9k vagas)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Eixo V - Etapas */}
            <div className="mb-6 bg-gradient-to-r from-teal-50 to-cyan-50 p-5 rounded-lg border-l-4 border-teal-600">
              <h4 className="font-bold text-teal-900 text-lg mb-3 flex items-center">
                <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">V</div>
                Eixo V - Etapas de Implementação (Passo 2.b)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Definição:</strong> Seguir uma sequência lógica de atividades ordenadas e interligadas.
              </p>
              <div className="bg-white p-4 rounded border border-teal-200">
                <p className="text-sm font-semibold text-teal-900 mb-3">📋 13 Atividades Adaptadas à Educação Infantil:</p>
                <div className="space-y-2">
                  {[
                    {num: 1, titulo: 'Fomentar o DHS em Ambientes de Convergência', desc: 'Participar de reuniões do CME, Fóruns de Educação, audiências públicas sobre educação infantil'},
                    {num: 2, titulo: 'Reunir Documentos e Elaborar Diagnósticos', desc: 'Censo Escolar, lista de espera, mapeamento de demanda, obras paralisadas, dados FUNDEB'},
                    {num: 3, titulo: 'Executar os Encaminhamentos', desc: 'Notificações, requisições de informações, reuniões técnicas com Secretaria de Educação'},
                    {num: 4, titulo: 'Criar Critérios e Fluxos Operacionais', desc: 'Definir parâmetros DONQEEI, fluxo de matrícula, gestão de filas, cronograma de expansão'},
                    {num: 5, titulo: 'Formalizar Convergências', desc: 'Elaborar TAC com Plano de Expansão, Recomendações, Decretos Municipais sobre sistema de vagas'},
                    {num: 6, titulo: 'Realizar Eventos Interinstitucionais', desc: 'Seminários sobre PNE, encontros com gestores, workshops sobre financiamento'},
                    {num: 7, titulo: 'Realizar Capacitações Institucionais', desc: 'Formação de promotores, servidores municipais, conselheiros sobre educação infantil'},
                    {num: 8, titulo: 'Criar Estruturas de Resolução de Problemas', desc: 'Comitê interinstitucional de monitoramento, Mesa de Diálogo, Grupo de Trabalho Técnico'},
                    {num: 9, titulo: 'Promover Ações Contra Irregularidades', desc: 'Representações ao TCE (FUNDEB), ACPs estruturais, responsabilização de gestores omissos'},
                    {num: 10, titulo: 'Implementar Estratégias de Comunicação e Formação', desc: 'Campanha "Creche é Direito", cartilhas para pais, transparência de dados'},
                    {num: 11, titulo: 'Desenvolver Projetos e Políticas Públicas', desc: 'Induzir Plano Municipal de Educação, políticas de formação docente, padrões de qualidade'},
                    {num: 12, titulo: 'Promover a Convergência Estrutural', desc: 'Alinhar planejamento, orçamento, indicadores, fiscalização, incentivos (ver detalhamento abaixo)'},
                    {num: 13, titulo: 'Revisar e Aperfeiçoar Periodicamente', desc: 'Monitoramento anual do Plano de Expansão, ajustes de metas, avaliação de qualidade'}
                  ].map((atividade) => (
                    <div key={atividade.num} className="flex items-start bg-teal-50 p-3 rounded">
                      <div className="bg-teal-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                        {atividade.num}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-800">{atividade.titulo}</p>
                        <p className="text-xs text-gray-600 mt-1">{atividade.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Eixo VI - Fundamento */}
            <div className="mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-lg border-l-4 border-indigo-600">
              <h4 className="font-bold text-indigo-900 text-lg mb-3 flex items-center">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">VI</div>
                Eixo VI - Fundamento (Critérios do DHS)
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Definição:</strong> Sempre partir do foco prioritário considerando os critérios sistêmicos do DHS/PGS.
              </p>
              <div className="bg-white p-4 rounded border border-indigo-200">
                <p className="text-sm font-semibold text-indigo-900 mb-2">⚖️ Aplicação na Educação Infantil:</p>
                <ul className="text-xs text-gray-700 space-y-2 ml-4">
                  <li>• <strong>Conveniência:</strong> Educação infantil é área com amadurecimento jurídico (STF, CNJ), disponibilidade de dados (Censo Escolar) e instrumentos consolidados (Manual CNMP)</li>
                  <li>• <strong>Oportunidade:</strong> Campanhas nacionais (Primeiros Passos, PNAE 2025), janela demográfica favorável, FUNDEB reformulado</li>
                  <li>• <strong>Urgência:</strong> 632 mil crianças em filas, janela crítica de desenvolvimento (0-6 anos), violação de direito fundamental</li>
                  <li>• <strong>Pensamento Sistêmico:</strong> Compreender causas raízes (subfinanciamento, má gestão, falta de planejamento), não apenas sintomas (déficit de vagas)</li>
                  <li>• <strong>Visão de Longo Prazo:</strong> Expansão sustentável (não apenas eleitoreira), com qualidade, equidade e permanência</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Convergência Estrutural Detalhada */}
          <Card className="mt-6 bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-600">
            <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
              <Users className="h-6 w-6 mr-3" />
              Convergência Estrutural na Educação Infantil
            </h3>
            <p className="text-gray-700 mb-4">
              A <strong>Convergência Estrutural</strong> é o processo de alinhar sistematicamente as normativas e instrumentos 
              diários para que fomentem, meçam e valorizem as atuações resolutivas. Na educação infantil, isso significa 
              garantir que toda a "rotina institucional" impulsione a expansão qualificada:
            </p>

            <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300 mb-4">
              <p className="text-sm text-yellow-900 font-semibold">
                ⚠️ <strong>Princípio Fundamental:</strong> Se a estrutura (rotina) não for alterada, os comportamentos antigos persistirão. 
                Não adianta criar planos se os incentivos, fiscalização e valoração continuarem premiando a inércia.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-gray-800 text-lg">8 Aspectos a serem Alinhados:</h4>

              {/* Aspecto 1 */}
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-blue-900 mb-2">Planos e Planejamentos</h5>
                    <p className="text-xs text-gray-700 mb-2">
                      <strong>Exemplo Prático:</strong> Garantir que o <strong>Plano Municipal de Educação (PME)</strong>, o 
                      <strong> Plano Plurianual (PPA)</strong> e a <strong>Lei de Diretrizes Orçamentárias (LDO)</strong> contenham 
                      metas quantitativas e qualitativas de expansão da educação infantil, alinhadas ao PNE e ao CONAQUEI.
                    </p>
                    <p className="text-xs text-gray-600 italic">
                      💡 Se o PME prevê universalização, mas o PPA não destina recursos, há incoerência estrutural.
                    </p>
                  </div>
                </div>
              </div>

              {/* Aspecto 2 */}
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-green-900 mb-2">Critérios de Inspeções e Fiscalizações</h5>
                    <p className="text-xs text-gray-700 mb-2">
                      <strong>Exemplo Prático:</strong> O <strong>Tribunal de Contas</strong> deve fiscalizar não apenas se 
                      o mínimo constitucional em educação foi aplicado, mas <strong>se os 50% do FUNDEB destinados à educação 
                      infantil (VAAT) foram corretamente utilizados</strong> e se houve evolução no atendimento da demanda.
                    </p>
                    <p className="text-xs text-gray-600 italic">
                      💡 Critérios de auditoria devem incluir indicadores de acesso, qualidade (DONQEEI) e equidade.
                    </p>
                  </div>
                </div>
              </div>

              {/* Aspecto 3 */}
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-purple-900 mb-2">Fluxos Operacionais</h5>
                    <p className="text-xs text-gray-700 mb-2">
                      <strong>Exemplo Prático:</strong> Estabelecer <strong>fluxo transparente de matrícula</strong>, com 
                      cadastro único, critérios objetivos de priorização (vulnerabilidade social, proximidade) e 
                      <strong> publicização mensal da lista de espera</strong>.
                    </p>
                    <p className="text-xs text-gray-600 italic">
                      💡 Fluxo claro evita clientelismo, favorecimentos e falta de transparência.
                    </p>
                  </div>
                </div>
              </div>

              {/* Aspecto 4 */}
              <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-start">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-orange-900 mb-2">Meios de Concretização e Realização</h5>
                    <p className="text-xs text-gray-700 mb-2">
                      <strong>Exemplo Prático:</strong> Garantir recursos orçamentários específicos para <strong>obras de creches 
                      (construção/reforma)</strong>, <strong>concursos públicos para professores e auxiliares</strong> e 
                      <strong> programas de formação continuada</strong>.
                    </p>
                    <p className="text-xs text-gray-600 italic">
                      💡 Destinar 0,5% da receita municipal exclusivamente para expansão pode ser formalizado em lei.
                    </p>
                  </div>
                </div>
              </div>

              {/* Aspecto 5 */}
              <div className="bg-white p-4 rounded-lg border-l-4 border-pink-500">
                <div className="flex items-start">
                  <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">5</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-pink-900 mb-2">Mensuração, Mapeamento e Indicadores</h5>
                    <p className="text-xs text-gray-700 mb-2">
                      <strong>Exemplo Prático:</strong> Criar <strong>Painel Público de Monitoramento</strong> com indicadores 
                      como: taxa de atendimento (0-3 e 4-5 anos), tamanho da fila de espera, número de vagas criadas/ano, 
                      relação criança/educador, percentual de professores com formação adequada.
                    </p>
                    <p className="text-xs text-gray-600 italic">
                      💡 "O que não é medido, não é gerenciado" - indicadores claros permitem cobrança objetiva.
                    </p>
                  </div>
                </div>
              </div>

              {/* Aspecto 6 */}
              <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                <div className="flex items-start">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">6</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-teal-900 mb-2">Modos de Valoração do Desempenho</h5>
                    <p className="text-xs text-gray-700 mb-2">
                      <strong>Exemplo Prático:</strong> Incluir na <strong>avaliação de desempenho de secretários, diretores 
                      e gestores</strong> critérios relacionados à ampliação do acesso e à melhoria da qualidade (não apenas 
                      indicadores financeiros). Reconhecer publicamente municípios que atingirem metas.
                    </p>
                    <p className="text-xs text-gray-600 italic">
                      💡 Se o gestor é avaliado apenas por "economia", ele não priorizará expansão de vagas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Aspecto 7 */}
              <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
                <div className="flex items-start">
                  <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">7</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-indigo-900 mb-2">Comunicação e Formação</h5>
                    <p className="text-xs text-gray-700 mb-2">
                      <strong>Exemplo Prático:</strong> Realizar <strong>campanhas contínuas de conscientização</strong> sobre 
                      o direito à educação infantil, importância da primeira infância e como buscar vagas. Formar gestores, 
                      conselheiros e profissionais da educação sobre FUNDEB, PNE, DONQEEI.
                    </p>
                    <p className="text-xs text-gray-600 italic">
                      💡 Sociedade informada cobra mais; gestores capacitados implementam melhor.
                    </p>
                  </div>
                </div>
              </div>

              {/* Aspecto 8 */}
              <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">8</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-red-900 mb-2">Desenvolvimento de Incentivos</h5>
                    <p className="text-xs text-gray-700 mb-2">
                      <strong>Exemplo Prático:</strong> Criar <strong>"Prêmio Município Amigo da Primeira Infância"</strong>, 
                      priorizar repasses estaduais/federais para municípios com planos de expansão, oferecer assistência técnica 
                      (consultorias, capacitações) para gestões que se comprometerem com metas.
                    </p>
                    <p className="text-xs text-gray-600 italic">
                      💡 Incentivos positivos são mais eficazes que apenas punições ou cobranças.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white p-4 rounded-lg border border-yellow-400">
              <p className="text-sm text-gray-800 font-semibold mb-2">
                🔗 <strong>Resultado da Convergência Estrutural:</strong>
              </p>
              <p className="text-xs text-gray-700">
                Quando todos esses 8 aspectos estão alinhados, a expansão da educação infantil deixa de depender da 
                "boa vontade" de um gestor específico e passa a ser <strong>impulsionada pela própria estrutura institucional</strong>. 
                A sustentabilidade da política pública é garantida, independentemente de mudanças políticas.
              </p>
            </div>
          </Card>

          {/* Benefícios da Integração DHS */}
          <Card className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600">
            <h3 className="text-xl font-bold text-green-900 mb-4">✅ Benefícios da Integração DHS na Educação Infantil</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-green-800 mb-3 text-sm">Para as Instituições:</h4>
                <ul className="text-xs text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Redução da judicialização:</strong> Ações estruturais substituem milhares de processos individuais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Eficiência institucional:</strong> Convergência entre MP, TCE, Executivo, Judiciário evita duplicidade</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Segurança jurídica:</strong> TACs e planos pactuados dão previsibilidade ao gestor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Aprendizado institucional:</strong> Boas práticas documentadas e replicáveis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Sustentabilidade:</strong> Políticas estruturais resistem a trocas de gestão</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold text-green-800 mb-3 text-sm">Para Crianças, Famílias e Sociedade:</h4>
                <ul className="text-xs text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Universalização do acesso:</strong> Todas as crianças 0-6 anos com vaga garantida</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Qualidade assegurada:</strong> Padrões DONQEEI, professores qualificados, infraestrutura adequada</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Equidade:</strong> Priorização de vulneráveis, combate a clientelismo e privilégios</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Desenvolvimento integral:</strong> Janela de oportunidade neurológica aproveitada (0-6 anos)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Retorno social:</strong> Redução de desigualdades, empoderamento feminino, melhor desempenho escolar futuro</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Link para Implementação */}
          <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-600 mt-6">
            <div className="flex items-start">
              <FileText className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-900 mb-2">📚 Aprofunde-se no DHS</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Para compreender em detalhes todos os aspectos da Matriz de Convergência, acesse o Guia de Implementação 
                  com orientações gerais, passos práticos e documentos de referência.
                </p>
                <Link 
                  to="/implementacao" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm underline"
                >
                  <ArrowRight className="h-4 w-4 mr-1" />
                  Ir para Guia de Implementação do DHS
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* Conclusão */}
        <Card className="bg-gradient-to-r from-primary-50 to-accent-50 border-2 border-primary-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Baby className="h-8 w-8 text-primary-600 mr-3" />
            Uma Nova Atuação para a Primeira Infância
          </h2>
          <p className="text-gray-700 mb-4">
            A superação do déficit de vagas em creches e pré-escolas exige uma <strong>mudança de paradigma</strong> 
            na atuação do Ministério Público: de uma abordagem individual e reativa para uma 
            <strong> estratégia estrutural, resolutiva e preventiva</strong>.
          </p>
          <div className="bg-white p-4 rounded-lg border border-primary-300">
            <p className="text-sm text-gray-800 font-semibold mb-2">
              🎯 <strong>Princípios Centrais:</strong>
            </p>
            <ul className="text-sm text-gray-700 space-y-1 ml-4">
              <li>✓ <strong>Coletivização</strong> das demandas individuais</li>
              <li>✓ <strong>Indução</strong> de Planos de Expansão Qualificada</li>
              <li>✓ <strong>Fiscalização</strong> de qualidade, equidade e financiamento</li>
              <li>✓ <strong>Priorização</strong> da via extrajudicial e da construção dialogada</li>
              <li>✓ <strong>Monitoramento</strong> permanente com participação social</li>
            </ul>
          </div>
        </Card>

      </div>
    </div>
  )
}
