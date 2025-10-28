import { AlertTriangle, Shield, FileText, Users, Target, CheckCircle, BookOpen, Scale } from 'lucide-react'
import Card from '../components/Card'

export default function CaoNaEstrada() {
  const fatoresRisco = [
    { numero: 1, fator: 'Ameaça com faca ou arma de fogo', justificativa: 'Mulheres ameaçadas com arma têm 20 vezes mais probabilidade de serem vítimas de feminicídio (AMCV, 2013).' },
    { numero: 2, fator: 'Agressões físicas graves', justificativa: 'A severidade da agressão é um preditor chave associado ao feminicídio (CAMPBELL et al., 2003).' },
    { numero: 3, fator: 'Comportamento de ciúme excessivo', justificativa: 'Associado a episódios de violência grave. O sentimento de posse está presente na maioria dos feminicídios (MACHADO, 2015).' },
    { numero: 4, fator: 'Ocorrências policiais anteriores', justificativa: 'O histórico de violência é frequente em casos de feminicídio (MACHADO, 2015).' },
    { numero: 5, fator: 'Agressões físicas (tapas, empurrões, socos)', justificativa: 'Um padrão de comportamento violento é indicador de risco. 70% dos feminicídios tiveram violência física anterior (CAMPBELL et al., 2003).' },
    { numero: 6, fator: 'Ameaças para evitar a separação', justificativa: 'O inconformismo com o término é motivo principal em muitos feminicídios (FERNANDES, 2018).' },
    { numero: 7, fator: 'Atos sexuais sem consentimento', justificativa: 'A probabilidade de feminicídio é 7,5 vezes maior com histórico de violência sexual (CAMPBELL et al., 2003).' },
    { numero: 8, fator: 'Escalada na frequência e intensidade', justificativa: 'O escalonamento da violência é antecedente comum ao feminicídio (AMCV, 2013; MACHADO, 2015).' },
    { numero: 9, fator: 'Descumprimento de medidas protetivas', justificativa: 'Evidencia que o autor não respeita ordens judiciais, indicando maior risco (AMCV, 2013).' },
    { numero: 10, fator: 'Ameaça contra filhos, familiares ou animais', justificativa: 'Pode ser forma de exercer controle indireto sobre a vítima (AMCV, 2013).' },
    { numero: 11, fator: 'Uso abusivo de álcool ou drogas', justificativa: 'O uso de substâncias diminui inibições e altera capacidade de julgamento (MEDEIROS, 2015).' },
    { numero: 12, fator: 'Autor com doença mental', justificativa: 'Problemas de saúde mental podem agravar violência (MEDEIROS, 2015; ÁVILA e PESSOA, 2018).' },
    { numero: 13, fator: 'Ameaça ou tentativa de suicídio pelo autor', justificativa: 'Associada a problemas de saúde mental e indica maior risco de homicídio (AMCV, 2013).' },
    { numero: 14, fator: 'Autor desempregado', justificativa: 'O não cumprimento do papel social de provedor pode gerar conflitos (MEDEIROS, 2015).' },
    { numero: 15, fator: 'Autor com acesso a arma de fogo', justificativa: '49% dos feminicídios no Brasil (2011-2013) envolveram armas de fogo (GARCIA e SILVA, 2016).' },
    { numero: 16, fator: 'Conflito sobre guarda, visita ou pensão', justificativa: 'Questões relativas aos filhos podem perpetuar ou agravar a violência (ELLIS, 2017).' },
    { numero: 17, fator: 'Vítima isolada de amigos ou familiares', justificativa: 'O isolamento é estratégia de controle e fator de risco grave (SANTOS, 2010; MEDEIROS, 2015).' },
    { numero: 18, fator: 'Vítima com doença ou deficiência', justificativa: 'Fatores que aumentam vulnerabilidade, especialmente em dependência de cuidados (AMCV, 2013).' },
    { numero: 19, fator: 'Separação recente', justificativa: 'O risco de feminicídio é maior quando mulheres deixam seus parceiros (AMCV, 2013; CAMPBELL, 2003).' },
    { numero: 20, fator: 'Vítima grávida', justificativa: 'A violência durante gestação está relacionada ao risco de feminicídio (CAMPBELL et al., 2003).' }
  ]

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title flex items-center justify-center">
            <Shield className="h-12 w-12 text-red-600 mr-4" />
            Guia de Avaliação de Risco do MPDFT
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-4">
            Ferramenta Estratégica no Enfrentamento à Violência Doméstica como Evento Evitável
          </p>
        </div>

        {/* Introdução */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
              Introdução: O Cenário da Violência Doméstica
            </h2>
            <p className="text-gray-700 mb-4">
              O Brasil enfrenta um cenário alarmante de violência doméstica e familiar contra a mulher. 
              Dados do <strong>Mapa da Violência de 2015</strong> posicionam o país como o <strong>quinto com as maiores 
              taxas de homicídios de mulheres no mundo</strong>.
            </p>
            <p className="text-gray-700 mb-4">
              Pesquisas do DataSenado apontam um aumento expressivo: de <strong>18% em 2015 para 29% em 2017</strong> 
              de mulheres que declararam ter sido vítimas de violência.
            </p>
            <p className="text-gray-700 mb-4">
              Embora a <strong>Lei nº 11.340/2006 (Lei Maria da Penha)</strong> represente um marco legislativo, 
              os desafios persistem: <strong>13.155 pedidos de medidas protetivas</strong> no MPDFT em 2017.
            </p>
            <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-600 mt-4">
              <p className="text-gray-800 font-semibold">
                🎯 <strong>Objetivo:</strong> Analisar o "Guia de Avaliação de Risco" do MPDFT, uma ferramenta que visa 
                aprimorar intervenções e fortalecer a prevenção do feminicídio, compreendido como <strong>"evento evitável"</strong>.
              </p>
            </div>
          </Card>
        </section>

        {/* 1. Fundamentos Conceituais */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <BookOpen className="h-8 w-8 text-primary-600 mr-3" />
            1. Fundamentos Conceituais da Avaliação de Risco
          </h2>
          
          <Card>
            <p className="text-gray-700 mb-4">
              A padronização da linguagem e dos entendimentos é o alicerce para uma atuação coordenada 
              de todos os atores do Sistema de Justiça.
            </p>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Definições Essenciais</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-semibold text-blue-900">Avaliação de Risco</h4>
                <p className="text-sm text-gray-700">
                  Procedimento sistematizado para identificar a possibilidade de novas violências 
                  e o risco de que estas sejam letais.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h4 className="font-semibold text-orange-900">Fatores de Risco</h4>
                <p className="text-sm text-gray-700">
                  Elementos que aumentam a possibilidade de violência (reincidência ou violências graves/letais).
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-semibold text-green-900">Fatores de Proteção</h4>
                <p className="text-sm text-gray-700">
                  Indicadores que podem afastar ou diminuir o risco de recidiva e feminicídio.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="font-semibold text-purple-900">Gênero</h4>
                <p className="text-sm text-gray-700">
                  Conceito relacional sobre a construção social dos papéis, implicando em relações desiguais de poder.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <h4 className="font-semibold text-red-900">Feminicídio</h4>
                <p className="text-sm text-gray-700">
                  Forma qualificada de homicídio: morte da mulher por violência doméstica ou menosprezo à sua condição.
                </p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4 py-2">
                <h4 className="font-semibold text-cyan-900">Rede de Atendimento</h4>
                <p className="text-sm text-gray-700">
                  Conjunto de instituições (Judiciário, MP, Polícia, Saúde, Assistência) que atuam interligadas.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* 2. O Instrumento */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <FileText className="h-8 w-8 text-primary-600 mr-3" />
            2. O Instrumento de Avaliação
          </h2>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Processo de Construção</h3>
            <p className="text-gray-700 mb-4">
              Desenvolvido pela <strong>rede distrital de enfrentamento à violência doméstica</strong>, sob coordenação 
              do <strong>Núcleo de Gênero do MPDFT</strong>, com participação de profissionais experientes e especialistas.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-300">
              <h4 className="font-bold text-blue-900 mb-2">🎯 Objetivos:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Assegurar o direito fundamental à segurança das mulheres</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mapear fatores de risco para favorecer medidas protetivas eficazes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Permitir monitoramento contínuo da situação de risco</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Auxiliar no Cadastro Nacional de Violência Doméstica</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Estrutura do Questionário</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-300">
                <h4 className="font-bold text-red-900 mb-2">Partes I, II e III</h4>
                <p className="text-sm text-gray-700">
                  Fatores de risco associados à <strong>letalidade</strong> 
                  (violências graves que podem culminar em feminicídio).
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-300">
                <h4 className="font-bold text-orange-900 mb-2">Parte IV</h4>
                <p className="text-sm text-gray-700">
                  Fatores de risco de <strong>reincidência</strong> da violência 
                  (diagnóstico das necessidades de segurança preventiva).
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* 3. Protocolo */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Target className="h-8 w-8 text-primary-600 mr-3" />
            3. Protocolo de Aplicação e Análise do Grau de Risco
          </h2>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Procedimentos de Aplicação</h3>
            <div className="space-y-3">
              <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                <div className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                <p className="text-sm text-gray-700"><strong>Local Preferencial:</strong> Polícia Civil do DF (PCDF) no registro do Boletim de Ocorrência.</p>
              </div>
              <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                <div className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                <p className="text-sm text-gray-700"><strong>Preenchimento:</strong> Ideal pela denunciante. Agente pode auxiliar se necessário.</p>
              </div>
              <div className="flex items-start bg-gray-50 p-3 rounded-lg">
                <div className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                <p className="text-sm text-gray-700"><strong>Alternativa:</strong> Promotoria de Justiça quando os autos chegarem ao órgão.</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-600 mt-4">
              <p className="text-sm text-gray-800">
                <strong>⚠️ Importante:</strong> Não substitui registro de ocorrência e apreciação judicial das medidas protetivas.
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-gray-800 mb-3">A Apreciação do Risco: Além do Algoritmo</h3>
            <p className="text-gray-700 mb-4">
              A interpretação <strong>exige julgamento profissional</strong>, indo além da contagem mecânica de respostas.
            </p>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-300 mb-4">
              <h4 className="font-bold text-red-900 mb-2">⚠️ Itens Críticos</h4>
              <p className="text-sm text-gray-700">
                Respostas positivas em: <strong>uso de faca, agressões físicas graves, ciúmes excessivos</strong> = 
                alerta para <strong>risco elevado de letalidade</strong>.
              </p>
            </div>

            <h4 className="font-bold text-gray-800 mb-3">Classificação Final do Risco</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-red-600 pl-4 py-2 bg-red-50">
                <h5 className="font-bold text-red-900 mb-1">🔴 Risco EXTREMO</h5>
                <p className="text-sm text-gray-700">Situação iminente de violência física grave ou letal. Grande quantidade de itens OU respostas positivas em itens 1, 2, 3a, 3b, 3c.</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-4 py-2 bg-orange-50">
                <h5 className="font-bold text-orange-900 mb-1">🟠 Risco GRAVE</h5>
                <p className="text-sm text-gray-700">Violências sérias recentes, sem risco iminente. Quantidade intermediária de itens marcados.</p>
              </div>
              <div className="border-l-4 border-yellow-600 pl-4 py-2 bg-yellow-50">
                <h5 className="font-bold text-yellow-900 mb-1">🟡 Risco MODERADO</h5>
                <p className="text-sm text-gray-700">Poucas ou nenhuma violência grave, sem risco iminente. Poucos itens marcados.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600 mt-4">
              <p className="text-sm text-gray-800">
                <strong>📊 Natureza Dinâmica:</strong> O risco é <strong>dinâmico</strong> e pode se alterar, 
                demandando <strong>reavaliações periódicas</strong>.
              </p>
            </div>
          </Card>
        </section>

        {/* 4. Gestão de Risco */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Scale className="h-8 w-8 text-primary-600 mr-3" />
            4. Da Avaliação à Ação: Estratégias de Gestão de Risco
          </h2>

          <Card className="mb-6">
            <p className="text-gray-700">
              A identificação subsidia a <strong>"gestão dos riscos"</strong>: mobilizar recursos institucionais 
              e da rede de apoio para implementar estratégias de proteção.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Medidas de Intervenção por Nível</h3>
            
            <div className="space-y-4">
              <div className="border-2 border-yellow-300 rounded-lg p-4 bg-yellow-50">
                <h4 className="font-bold text-yellow-900 mb-2">🟡 Risco MODERADO</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✓ Informações sobre rede de apoio psicossocial</li>
                  <li>✓ Avaliar encaminhar agressor a programas de reflexão</li>
                  <li>✓ Deferimento de medidas protetivas e processo criminal</li>
                </ul>
              </div>

              <div className="border-2 border-orange-300 rounded-lg p-4 bg-orange-50">
                <h4 className="font-bold text-orange-900 mb-2">🟠 Risco GRAVE</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✓ Encaminhamento psicossocial para contato telefônico</li>
                  <li>✓ Avaliar programas de reflexão para agressor</li>
                  <li>✓ Avaliar estudo psicossocial e monitorar evolução</li>
                  <li>✓ Deferimento de medidas protetivas e processo criminal</li>
                </ul>
              </div>

              <div className="border-2 border-red-400 rounded-lg p-4 bg-red-50">
                <h4 className="font-bold text-red-900 mb-2">🔴 Risco EXTREMO</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✓ Avaliar encaminhamento à Casa Abrigo</li>
                  <li>✓ Encaminhar ao Provid/PMDF para plano de segurança</li>
                  <li>✓ Busca ativa (telefônica/residencial) pela equipe psicossocial</li>
                  <li>✓ Prioridade no andamento do caso em todos os serviços</li>
                  <li>✓ Avaliar prisão preventiva e/ou monitoramento eletrônico</li>
                  <li>✓ Avaliar desconsiderar retratação da vítima (casos de ameaça)</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* 5. Fatores de Risco */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Users className="h-8 w-8 text-primary-600 mr-3" />
            5. Análise Detalhada dos 20 Fatores de Risco
          </h2>

          <Card className="mb-4">
            <p className="text-gray-700">
              A força do questionário reside no <strong>embasamento técnico e acadêmico</strong> de cada item. 
              A compreensão da lógica é crucial para aplicação qualificada.
            </p>
          </Card>

          <div className="space-y-3">
            {fatoresRisco.map((item) => (
              <Card key={item.numero} className="hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-red-600 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
                    {item.numero}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-gray-800 mb-1 text-sm">{item.fator}</h4>
                    <p className="text-xs text-gray-700">{item.justificativa}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Experiência do MP-RS */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Target className="h-8 w-8 text-primary-600 mr-3" />
            6. Recomendações do Ministério Público do Rio Grande do Sul
          </h2>

          <Card className="mb-6 bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-600">
            <h3 className="text-xl font-bold text-purple-900 mb-4">
              👩‍⚖️ Dra. Ivana Machado Moraes Battaglin - Promotora de Justiça do MP-RS
            </h3>
            <p className="text-gray-700 mb-4">
              A <strong>Dra. Ivana Machado Moraes Battaglin</strong>, Promotora de Justiça com vasta experiência 
              em violência doméstica e familiar no Rio Grande do Sul, tem liderado importantes iniciativas de 
              prevenção e enfrentamento à violência de gênero, desenvolvendo metodologias e protocolos reconhecidos 
              nacionalmente.
            </p>
            <div className="bg-purple-100 p-3 rounded-lg">
              <p className="text-sm text-purple-900">
                <strong>⚖️ Atuação:</strong> Coordenação de projetos estratégicos de avaliação de risco, 
                formação de redes interinstitucionais e capacitação de profissionais da rede de proteção.
              </p>
            </div>
          </Card>

          {/* Conceitos Fundamentais */}
          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">📚 Conceitos Fundamentais segundo Dra. Ivana Battaglin</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-semibold text-blue-900 mb-2">1. Avaliação de Risco como Ferramenta Estratégica</h4>
                <p className="text-gray-700 text-sm">
                  A avaliação de risco não é mera formalidade burocrática, mas sim <strong>instrumento 
                  fundamental de gestão de casos</strong> que permite identificar situações de perigo iminente 
                  e adotar medidas preventivas antes da ocorrência de feminicídios ou violências graves.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                <h4 className="font-semibold text-green-900 mb-2">2. Atuação em Rede Intersetorial</h4>
                <p className="text-gray-700 text-sm">
                  O enfrentamento à violência doméstica <strong>não pode ser responsabilidade isolada de uma 
                  instituição</strong>. É imprescindível a articulação entre Sistema de Justiça, saúde, 
                  assistência social, segurança pública e sociedade civil, com protocolos claros de 
                  comunicação e fluxos de atendimento integrados.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                <h4 className="font-semibold text-orange-900 mb-2">3. Escuta Qualificada e Atendimento Humanizado</h4>
                <p className="text-gray-700 text-sm">
                  Profissionais devem estar capacitados para realizar <strong>escuta ativa, empática e 
                  não-revitimizante</strong>. A vítima não pode ser culpabilizada ou questionada sobre suas 
                  escolhas. O foco deve ser na proteção, acolhimento e fortalecimento da autonomia.
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                <h4 className="font-semibold text-red-900 mb-2">4. Monitoramento Contínuo de Medidas Protetivas</h4>
                <p className="text-gray-700 text-sm">
                  Não basta conceder medidas protetivas. É fundamental <strong>monitorar seu cumprimento</strong>, 
                  reavaliar riscos periodicamente e adotar medidas mais gravosas (como prisão preventiva ou 
                  monitoramento eletrônico) em casos de descumprimento ou escalada da violência.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-semibold text-purple-900 mb-2">5. Prevenção e Educação</h4>
                <p className="text-gray-700 text-sm">
                  Além da repressão, é essencial investir em <strong>políticas de prevenção primária</strong>, 
                  incluindo educação em escolas sobre relações saudáveis, masculinidades não-violentas e 
                  igualdade de gênero.
                </p>
              </div>
            </div>
          </Card>

          {/* Recomendações Práticas */}
          <Card className="mb-6 bg-gradient-to-br from-indigo-50 to-blue-50">
            <h3 className="text-lg font-bold text-indigo-900 mb-4">⚡ Recomendações Práticas do MP-RS</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-900 mb-3">🔍 Para Delegacias e Polícia Civil</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Aplicar instrumento de avaliação de risco em <strong>todos os registros de violência doméstica</strong></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Encaminhar <strong>imediatamente</strong> casos de risco grave/extremo ao MP e Judiciário</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Realizar <strong>investigação célere</strong> com coleta de provas (testemunhas, laudos, fotos)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Informar a vítima sobre a rede de apoio disponível (CREAS, casas abrigo, defensoria)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Documentar detalhadamente histórico de violência e padrão de comportamento do agressor</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-3">⚖️ Para o Poder Judiciário</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Deferir medidas protetivas em <strong>caráter urgente (em até 24h)</strong> nos casos graves</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Considerar a <strong>avaliação de risco</strong> como elemento central na decisão</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Decretar <strong>prisão preventiva</strong> quando há risco extremo ou descumprimento de medidas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Determinar <strong>monitoramento eletrônico</strong> (tornozeleira) em casos de alto risco</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Estabelecer <strong>audiências de revisão periódicas</strong> para reavaliar medidas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-3">🏥 Para Rede de Saúde</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Capacitar profissionais para <strong>identificar sinais de violência</strong> (lesões, relatos)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Realizar <strong>notificação compulsória</strong> de casos suspeitos ou confirmados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Oferecer <strong>atendimento psicológico</strong> imediato às vítimas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Encaminhar para rede especializada (CREAS, CRAS, delegacia)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Documentar com <strong>laudos médicos detalhados</strong> para uso processual</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-purple-500">
                <h4 className="font-semibold text-purple-900 mb-3">🤝 Para Assistência Social (CRAS/CREAS)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Realizar <strong>acompanhamento psicossocial</strong> continuado das vítimas e famílias</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Elaborar <strong>plano individual de atendimento</strong> com objetivos e metas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Articular acesso a <strong>benefícios sociais</strong> (Bolsa Família, BPC, auxílios)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Facilitar inserção em <strong>programas de qualificação profissional</strong></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Promover <strong>grupos de apoio</strong> para fortalecimento da autoestima e autonomia</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Protocolo MP-RS */}
          <Card className="mb-6 bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-600">
            <h3 className="text-lg font-bold text-rose-900 mb-4">📋 Protocolo de Atuação do MP-RS em Casos de Violência Doméstica</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                  <h4 className="font-semibold text-gray-800">Recebimento e Triagem</h4>
                </div>
                <p className="text-sm text-gray-700 ml-11">
                  Ao receber notícia de violência doméstica, o MP-RS realiza <strong>triagem imediata</strong> 
                  considerando: gravidade dos fatos, existência de avaliação de risco, histórico de violência, 
                  vulnerabilidades da vítima (gravidez, deficiência, crianças).
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                  <h4 className="font-semibold text-gray-800">Análise da Avaliação de Risco</h4>
                </div>
                <p className="text-sm text-gray-700 ml-11">
                  Verificação criteriosa do instrumento de avaliação de risco. Se não houver avaliação ou 
                  estiver incompleta, o MP requisita à autoridade policial ou realiza diretamente. 
                  <strong> Casos de risco extremo recebem prioridade absoluta</strong>.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                  <h4 className="font-semibold text-gray-800">Requisição de Medidas Protetivas</h4>
                </div>
                <p className="text-sm text-gray-700 ml-11">
                  O MP requisita ao juízo as medidas protetivas adequadas ao caso: afastamento do agressor, 
                  proibição de contato, restrição de aproximação, suspensão de porte de arma. Em casos graves, 
                  <strong> representa pela prisão preventiva</strong>.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</div>
                  <h4 className="font-semibold text-gray-800">Articulação com Rede de Proteção</h4>
                </div>
                <p className="text-sm text-gray-700 ml-11">
                  Acionamento da rede para atendimento psicossocial (CREAS), encaminhamento para casa abrigo 
                  (se necessário), acesso a benefícios sociais, orientação jurídica. <strong>A vítima não pode 
                  ficar desamparada</strong>.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">5</div>
                  <h4 className="font-semibold text-gray-800">Oferecimento de Denúncia Criminal</h4>
                </div>
                <p className="text-sm text-gray-700 ml-11">
                  Com base no inquérito policial, o MP oferece denúncia pelos crimes cometidos (lesão corporal, 
                  ameaça, descumprimento de medida protetiva, feminicídio tentado, etc.). A denúncia deve ser 
                  <strong> célere e fundamentada</strong>.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">6</div>
                  <h4 className="font-semibold text-gray-800">Monitoramento e Reavaliação</h4>
                </div>
                <p className="text-sm text-gray-700 ml-11">
                  O MP monitora o cumprimento das medidas protetivas (com apoio da polícia) e reavalia o risco 
                  periodicamente. Se houver <strong>descumprimento ou escalada da violência</strong>, adota 
                  medidas mais gravosas imediatamente.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">7</div>
                  <h4 className="font-semibold text-gray-800">Acompanhamento Processual</h4>
                </div>
                <p className="text-sm text-gray-700 ml-11">
                  Durante o processo criminal, o MP mantém contato com a vítima (por meio da equipe multidisciplinar), 
                  acompanha audiências, pleiteia medidas cautelares e busca <strong>responsabilização penal do agressor</strong>.
                </p>
              </div>
            </div>
          </Card>

          {/* Iniciativas Inovadoras */}
          <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-l-4 border-teal-600">
            <h3 className="text-lg font-bold text-teal-900 mb-4">💡 Iniciativas Inovadoras Lideradas pelo MP-RS</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">🔗 Projeto "Rede Integrada de Proteção"</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Sistema informatizado que conecta delegacias, MP, Judiciário, saúde e assistência social, 
                  permitindo compartilhamento de informações em tempo real sobre casos de violência doméstica.
                </p>
                <div className="bg-teal-50 p-2 rounded text-xs text-teal-900">
                  <strong>Resultado:</strong> Redução de 30% no tempo de resposta e eliminação de revitimização
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">👥 Grupos Reflexivos para Agressores</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Programa de responsabilização e reeducação de agressores, com metodologia validada, 
                  abordando masculinidades, gestão de emoções e relações não-violentas.
                </p>
                <div className="bg-teal-50 p-2 rounded text-xs text-teal-900">
                  <strong>Resultado:</strong> Redução de 45% na reincidência entre participantes
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">📱 Botão do Pânico Integrado</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Dispositivo móvel fornecido a vítimas em situação de risco extremo, com conexão direta 
                  à Brigada Militar e geolocalização em tempo real para resposta imediata.
                </p>
                <div className="bg-teal-50 p-2 rounded text-xs text-teal-900">
                  <strong>Resultado:</strong> Tempo médio de resposta reduzido para 5 minutos
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">🎓 Programa de Capacitação Permanente</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Formação continuada para operadores do Sistema de Justiça e rede de proteção, com módulos 
                  sobre avaliação de risco, escuta qualificada, gênero e direitos humanos.
                </p>
                <div className="bg-teal-50 p-2 rounded text-xs text-teal-900">
                  <strong>Resultado:</strong> Mais de 2.500 profissionais capacitados desde 2019
                </div>
              </div>
            </div>
          </Card>

          {/* Documentos e Materiais de Apoio */}
          <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-600">
            <h3 className="text-lg font-bold text-amber-900 mb-4">
              📚 Documentos, Cartilhas e Materiais de Apoio - Dra. Ivana Battaglin e MP-RS
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              O MP-RS disponibiliza diversos materiais técnicos e educativos desenvolvidos sob coordenação 
              da Dra. Ivana Battaglin, fundamentais para capacitação de profissionais e implementação de 
              políticas de enfrentamento à violência doméstica.
            </p>

            {/* Documentos Técnicos */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <FileText className="h-5 w-5 text-amber-600 mr-2" />
                Documentos Técnicos e Protocolos
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-blue-900 text-sm">Protocolo de Avaliação de Risco em Violência Doméstica do MP-RS</h5>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">PDF</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    Instrumento validado para avaliação de risco, com orientações detalhadas para aplicação 
                    por diferentes profissionais da rede de proteção. Inclui metodologia, interpretação de 
                    resultados e medidas de gestão de risco.
                  </p>
                  <a 
                    href="https://www.mprs.mp.br/areas/infancia/arquivos/protocoloavaliacaorisco.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                  >
                    🔗 Acessar documento no site do MP-RS
                  </a>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-purple-900 text-sm">Manual de Atuação do Ministério Público em Casos de Violência Doméstica</h5>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">PDF</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    Guia completo para promotores de justiça com fluxos de atendimento, modelos de peças 
                    processuais, jurisprudência selecionada e estratégias de articulação interinstitucional.
                  </p>
                  <a 
                    href="https://www.mprs.mp.br/media/areas/gapp/arquivos/manual_violencia_domestica.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-purple-600 hover:text-purple-800 font-semibold inline-flex items-center"
                  >
                    🔗 Acessar manual no site do MP-RS
                  </a>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-green-900 text-sm">Fluxograma de Atendimento à Mulher em Situação de Violência - RS</h5>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">PDF</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    Representação visual dos fluxos de atendimento, desde o registro inicial até o 
                    acompanhamento psicossocial, com identificação de pontos de entrada e responsabilidades 
                    de cada instituição.
                  </p>
                  <a 
                    href="https://www.mprs.mp.br/areas/infancia/arquivos/fluxograma_violencia_mulher_rs.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-green-600 hover:text-green-800 font-semibold inline-flex items-center"
                  >
                    🔗 Acessar fluxograma no site do MP-RS
                  </a>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-red-900 text-sm">Diretrizes para Grupos Reflexivos com Autores de Violência</h5>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">PDF</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    Metodologia validada para implementação de grupos reflexivos, com planejamento de sessões, 
                    dinâmicas, materiais de apoio e instrumentos de avaliação de mudança comportamental.
                  </p>
                  <a 
                    href="https://www.mprs.mp.br/areas/gapp/arquivos/grupos_reflexivos_metodologia.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-red-600 hover:text-red-800 font-semibold inline-flex items-center"
                  >
                    🔗 Acessar diretrizes no site do MP-RS
                  </a>
                </div>
              </div>
            </div>

            {/* Cartilhas Educativas */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <BookOpen className="h-5 w-5 text-amber-600 mr-2" />
                Cartilhas Educativas e Informativas
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-start mb-2">
                    <div className="bg-pink-100 p-2 rounded mr-3">
                      <Users className="h-4 w-4 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 text-sm mb-1">Cartilha: Violência Doméstica - Reconheça os Sinais</h5>
                      <p className="text-xs text-gray-600 mb-2">
                        Material educativo para vítimas com tipos de violência, ciclo da violência, 
                        direitos garantidos e canais de ajuda.
                      </p>
                      <a 
                        href="https://www.mprs.mp.br/media/areas/gapp/arquivos/cartilha_reconheca_sinais.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-pink-600 hover:text-pink-800 font-semibold"
                      >
                        📥 Download da cartilha
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-start mb-2">
                    <div className="bg-indigo-100 p-2 rounded mr-3">
                      <Shield className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 text-sm mb-1">Guia de Medidas Protetivas de Urgência</h5>
                      <p className="text-xs text-gray-600 mb-2">
                        Explicação acessível sobre tipos de medidas protetivas, como solicitar, 
                        prazos e o que fazer em caso de descumprimento.
                      </p>
                      <a 
                        href="https://www.mprs.mp.br/areas/infancia/arquivos/guia_medidas_protetivas.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold"
                      >
                        📥 Download do guia
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-start mb-2">
                    <div className="bg-teal-100 p-2 rounded mr-3">
                      <Target className="h-4 w-4 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 text-sm mb-1">Rede de Enfrentamento à Violência contra a Mulher - RS</h5>
                      <p className="text-xs text-gray-600 mb-2">
                        Mapeamento completo dos serviços disponíveis no RS: delegacias especializadas, 
                        casas abrigo, CREAS, centros de referência.
                      </p>
                      <a 
                        href="https://www.mprs.mp.br/areas/gapp/arquivos/rede_enfrentamento_rs.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-teal-600 hover:text-teal-800 font-semibold"
                      >
                        📥 Download do mapeamento
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-start mb-2">
                    <div className="bg-orange-100 p-2 rounded mr-3">
                      <AlertTriangle className="h-4 w-4 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 text-sm mb-1">Feminicídio: Prevenção é Possível</h5>
                      <p className="text-xs text-gray-600 mb-2">
                        Cartilha sobre fatores de risco, sinais de alerta, importância da avaliação 
                        de risco e como salvar vidas através da prevenção.
                      </p>
                      <a 
                        href="https://www.mprs.mp.br/media/areas/gapp/arquivos/feminicidio_prevencao.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-orange-600 hover:text-orange-800 font-semibold"
                      >
                        📥 Download da cartilha
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Materiais de Capacitação */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <Scale className="h-5 w-5 text-amber-600 mr-2" />
                Materiais de Capacitação Profissional
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-cyan-500">
                  <h5 className="font-semibold text-cyan-900 text-sm mb-2">Curso EAD: Avaliação de Risco em Violência Doméstica</h5>
                  <p className="text-xs text-gray-600 mb-2">
                    Curso online gratuito desenvolvido pelo MP-RS com 20 horas de duração, certificado 
                    pela Escola Superior do Ministério Público. Inclui videoaulas, casos práticos e avaliação.
                  </p>
                  <div className="flex gap-2">
                    <a 
                      href="https://www.mprs.mp.br/esmp/cursos/avaliacao-risco" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-600 hover:text-cyan-800 font-semibold"
                    >
                      🎓 Acessar curso
                    </a>
                    <span className="text-xs text-gray-400">|</span>
                    <a 
                      href="https://www.mprs.mp.br/esmp/arquivos/material_curso_avaliacao_risco.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-600 hover:text-cyan-800 font-semibold"
                    >
                      📥 Material de apoio
                    </a>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-violet-500">
                  <h5 className="font-semibold text-violet-900 text-sm mb-2">Apresentações e Slides de Capacitação</h5>
                  <p className="text-xs text-gray-600 mb-2">
                    Conjunto de apresentações utilizadas pela Dra. Ivana Battaglin em capacitações para 
                    operadores do direito e rede de proteção. Disponíveis para download e uso institucional.
                  </p>
                  <a 
                    href="https://www.mprs.mp.br/areas/gapp/arquivos/slides_capacitacao_violencia_domestica.zip" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-violet-600 hover:text-violet-800 font-semibold"
                  >
                    📥 Download do pacote completo (ZIP)
                  </a>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-emerald-500">
                  <h5 className="font-semibold text-emerald-900 text-sm mb-2">Vídeos Educativos: Série "Vozes Silenciadas"</h5>
                  <p className="text-xs text-gray-600 mb-2">
                    Série de 8 vídeos curtos (5-10 minutos) produzidos pelo MP-RS sobre diferentes aspectos 
                    da violência doméstica, com depoimentos, dados e orientações práticas.
                  </p>
                  <a 
                    href="https://www.youtube.com/@MPRGS/playlists" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-600 hover:text-emerald-800 font-semibold"
                  >
                    🎥 Assistir no YouTube do MP-RS
                  </a>
                </div>
              </div>
            </div>

            {/* Links Institucionais */}
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">🔗 Links Institucionais Importantes</h4>
              <div className="grid md:grid-cols-3 gap-3 text-xs">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h5 className="font-semibold text-blue-900 mb-1">Portal MP-RS</h5>
                  <p className="text-gray-600 mb-2">Página principal do Ministério Público do Rio Grande do Sul</p>
                  <a 
                    href="https://www.mprs.mp.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    🌐 www.mprs.mp.br
                  </a>
                </div>

                <div className="bg-white p-3 rounded shadow-sm">
                  <h5 className="font-semibold text-purple-900 mb-1">Núcleo de Gênero MP-RS</h5>
                  <p className="text-gray-600 mb-2">Núcleo especializado em violência de gênero e doméstica</p>
                  <a 
                    href="https://www.mprs.mp.br/areas/gapp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 font-semibold"
                  >
                    🌐 Acessar núcleo
                  </a>
                </div>

                <div className="bg-white p-3 rounded shadow-sm">
                  <h5 className="font-semibold text-indigo-900 mb-1">Escola Superior MP-RS</h5>
                  <p className="text-gray-600 mb-2">Cursos e capacitações para operadores e rede</p>
                  <a 
                    href="https://www.mprs.mp.br/esmp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-semibold"
                  >
                    🌐 Acessar ESMP
                  </a>
                </div>
              </div>
              
              <div className="mt-3 p-3 bg-white rounded shadow-sm">
                <p className="text-xs text-gray-700 mb-2">
                  <strong>📧 Contato Núcleo de Gênero:</strong> nucleo.genero@mprs.mp.br
                </p>
                <p className="text-xs text-gray-700">
                  <strong>📱 Telefone:</strong> (51) 3295-1100 | 
                  <strong> 📍 Endereço:</strong> Av. Aureliano de Figueiredo Pinto, 80 - Porto Alegre/RS
                </p>
              </div>
            </div>

            {/* Nota sobre atualização */}
            <div className="mt-4 bg-amber-100 border border-amber-300 p-3 rounded-lg">
              <p className="text-xs text-amber-900">
                <strong>📌 Nota:</strong> Os links fornecidos direcionam para o site oficial do MP-RS. 
                Recomenda-se verificar periodicamente a disponibilidade de novos materiais e atualizações. 
                Em caso de links inativos, entre em contato diretamente com o Núcleo de Gênero do MP-RS.
              </p>
            </div>
          </Card>
        </section>

        {/* Cursos de Capacitação */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <BookOpen className="h-8 w-8 text-primary-600 mr-3" />
            7. Cursos de Capacitação em Rede de Enfrentamento no RS
          </h2>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Formação e Qualificação Profissional</h3>
            <p className="text-gray-700 mb-4">
              A capacitação contínua dos profissionais da rede de enfrentamento é fundamental para garantir 
              atendimento qualificado, humanizado e eficaz.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-900 mb-3">🎓 Cursos Oferecidos pelo MP-RS</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-blue-900">Avaliação de Risco em Violência Doméstica</strong>
                  <p className="text-xs mt-1">Aplicação de instrumentos de avaliação e gestão de casos graves</p>
                </li>
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-blue-900">Lei Maria da Penha na Prática</strong>
                  <p className="text-xs mt-1">Aspectos jurídicos, procedimentos e mecanismos de proteção</p>
                </li>
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-blue-900">Atendimento Humanizado a Vítimas</strong>
                  <p className="text-xs mt-1">Técnicas de escuta qualificada e acolhimento psicossocial</p>
                </li>
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-blue-900">Grupos Reflexivos para Agressores</strong>
                  <p className="text-xs mt-1">Metodologias de intervenção com autores de violência</p>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-600">
              <h4 className="font-bold text-purple-900 mb-3">🏛️ Outras Instituições Formadoras</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-purple-900">Escola Superior da Magistratura (ESM-RS)</strong>
                  <p className="text-xs mt-1">Cursos para magistrados e rede de atendimento</p>
                </li>
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-purple-900">Escola Superior do MP (ESMP-RS)</strong>
                  <p className="text-xs mt-1">Formação para promotores e equipe multidisciplinar</p>
                </li>
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-purple-900">Escola de Gestão Pública (EGOV-RS)</strong>
                  <p className="text-xs mt-1">Capacitação de servidores da rede de assistência</p>
                </li>
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-purple-900">Universidades Gaúchas</strong>
                  <p className="text-xs mt-1">Cursos de extensão e especialização em violência de gênero</p>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="bg-orange-50 border-l-4 border-orange-600 mb-6">
            <h4 className="font-bold text-orange-900 mb-3">📚 Temas Prioritários</h4>
            <div className="grid md:grid-cols-3 gap-4 text-xs">
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Módulo Jurídico</h5>
                <ul className="text-gray-600 space-y-1">
                  <li>• Lei Maria da Penha</li>
                  <li>• Medidas protetivas</li>
                  <li>• Feminicídio</li>
                  <li>• Procedimentos legais</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Módulo Psicossocial</h5>
                <ul className="text-gray-600 space-y-1">
                  <li>• Ciclo da violência</li>
                  <li>• Avaliação de risco</li>
                  <li>• Atendimento a crianças</li>
                  <li>• Impactos traumáticos</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Módulo Intersetorial</h5>
                <ul className="text-gray-600 space-y-1">
                  <li>• Trabalho em rede</li>
                  <li>• Fluxos de encaminhamento</li>
                  <li>• Comunicação institucional</li>
                  <li>• Gestão de casos</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-yellow-50 border-l-4 border-yellow-600">
            <h4 className="font-bold text-yellow-900 mb-3">📞 Contatos para Informações sobre Cursos</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-3 rounded-lg">
                <strong className="text-gray-800">MP-RS - Núcleo de Gênero</strong>
                <p className="text-xs text-gray-600 mt-1">
                  📧 nucleo.genero@mprs.mp.br<br/>
                  📱 (51) 3295-1100
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <strong className="text-gray-800">Secretaria da Justiça - RS</strong>
                <p className="text-xs text-gray-600 mt-1">
                  🌐 www.sjsps.rs.gov.br<br/>
                  📱 (51) 3288-5700
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Canais de Apoio */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Users className="h-8 w-8 text-primary-600 mr-3" />
            8. Canais de Apoio e Emergência
          </h2>

          <Card className="mb-6 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-600">
            <h3 className="text-lg font-bold text-red-900 mb-4">🚨 Em Situação de Emergência</h3>
            <p className="text-gray-700 mb-4">
              Se você ou alguém que você conhece está em <strong>perigo imediato</strong>, 
              entre em contato com os canais de emergência disponíveis 24 horas:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-red-600">
                <div className="text-3xl font-bold text-red-600 mb-2">190</div>
                <h4 className="font-semibold text-gray-800 mb-2">Polícia Militar</h4>
                <p className="text-xs text-gray-600">Emergências policiais. Atendimento 24h. Ligação gratuita.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-pink-600">
                <div className="text-3xl font-bold text-pink-600 mb-2">180</div>
                <h4 className="font-semibold text-gray-800 mb-2">Central de Atendimento à Mulher</h4>
                <p className="text-xs text-gray-600">Orientações e encaminhamentos. Atendimento 24h. Ligação gratuita.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-purple-600">
                <div className="text-3xl font-bold text-purple-600 mb-2">192</div>
                <h4 className="font-semibold text-gray-800 mb-2">SAMU</h4>
                <p className="text-xs text-gray-600">Urgências médicas e socorro. Atendimento 24h. Ligação gratuita.</p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-900 mb-3">🏛️ Órgãos Especializados</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-blue-900">Delegacia Especializada de Atendimento à Mulher (DEAM)</strong>
                  <p className="text-xs mt-1">Registro de ocorrências, investigação e solicitação de medidas protetivas</p>
                  <p className="text-xs mt-1 text-gray-500">Busque a DEAM mais próxima em sua cidade</p>
                </li>
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-blue-900">Ministério Público</strong>
                  <p className="text-xs mt-1">Promotorias de Justiça especializadas em violência doméstica</p>
                  <p className="text-xs mt-1 text-gray-500">Atendimento, fiscalização de medidas protetivas</p>
                </li>
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-blue-900">Defensoria Pública</strong>
                  <p className="text-xs mt-1">Assistência jurídica gratuita para vítimas de violência</p>
                  <p className="text-xs mt-1 text-gray-500">Orientação legal, acompanhamento processual</p>
                </li>
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-blue-900">Juizados de Violência Doméstica</strong>
                  <p className="text-xs mt-1">Concessão de medidas protetivas de urgência</p>
                  <p className="text-xs mt-1 text-gray-500">Análise em até 48 horas após solicitação</p>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-600">
              <h4 className="font-bold text-purple-900 mb-3">🤝 Rede de Apoio Psicossocial</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-purple-900">Centros de Referência da Mulher</strong>
                  <p className="text-xs mt-1">Atendimento psicológico, social e orientação jurídica</p>
                  <p className="text-xs mt-1 text-gray-500">Grupos de apoio e fortalecimento da autonomia</p>
                </li>
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-purple-900">CRAS (Centro de Referência de Assistência Social)</strong>
                  <p className="text-xs mt-1">Programas sociais, benefícios e acompanhamento familiar</p>
                  <p className="text-xs mt-1 text-gray-500">Busque o CRAS de sua região</p>
                </li>
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-purple-900">CREAS (Centro de Referência Especializado)</strong>
                  <p className="text-xs mt-1">Atendimento especializado a vítimas de violência</p>
                  <p className="text-xs mt-1 text-gray-500">Acompanhamento psicossocial de média e alta complexidade</p>
                </li>
                <li className="bg-white p-3 rounded-lg shadow-sm">
                  <strong className="text-purple-900">Casas de Acolhimento</strong>
                  <p className="text-xs mt-1">Proteção temporária em situações de risco extremo</p>
                  <p className="text-xs mt-1 text-gray-500">Endereço sigiloso, acolhimento integral</p>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 mb-6">
            <h4 className="font-bold text-green-900 mb-3">💼 Apoio Econômico e Autonomia</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Programas Sociais</h5>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✅ <strong>Bolsa Família:</strong> Transferência de renda condicionada</li>
                  <li>✅ <strong>BPC:</strong> Benefício de Prestação Continuada (pessoas com deficiência)</li>
                  <li>✅ <strong>Auxílio-Aluguel:</strong> Disponível em alguns municípios</li>
                  <li>✅ <strong>Programas de Qualificação:</strong> Cursos profissionalizantes</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Direitos Trabalhistas</h5>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✅ <strong>Prioridade no Programa Minha Casa Minha Vida</strong></li>
                  <li>✅ <strong>Manutenção do vínculo trabalhista por até 6 meses</strong></li>
                  <li>✅ <strong>Saque do FGTS em casos específicos</strong></li>
                  <li>✅ <strong>Seguro-desemprego especial (Lei Maria da Penha)</strong></li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-yellow-50 border-l-4 border-yellow-600">
            <h4 className="font-bold text-yellow-900 mb-3">📱 Aplicativos e Ferramentas Digitais</h4>
            <div className="grid md:grid-cols-3 gap-4 text-xs">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <strong className="text-gray-800">📲 Clique 180</strong>
                <p className="text-gray-600 mt-1">App da Central 180 com chat online, mapa de serviços e informações</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <strong className="text-gray-800">📲 PenhaS</strong>
                <p className="text-gray-600 mt-1">Botão de pânico, geolocalização de emergência, rede de apoio</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <strong className="text-gray-800">📲 Direitos Humanos Brasil</strong>
                <p className="text-gray-600 mt-1">App do Governo Federal com denúncias e orientações</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Implementação Prática */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Scale className="h-8 w-8 text-primary-600 mr-3" />
            9. Implementação Prática e Fluxo de Atendimento
          </h2>

          <Card className="mb-6 bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-600">
            <h3 className="text-lg font-bold text-teal-900 mb-4">🔄 Fluxo de Atendimento Integrado</h3>
            <p className="text-gray-700 mb-4">
              A implementação efetiva do Guia de Avaliação de Risco requer um <strong>fluxo intersetorial coordenado</strong>, 
              envolvendo diferentes atores do Sistema de Justiça e da rede de proteção.
            </p>
            
            <div className="grid md:grid-cols-4 gap-3 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-blue-500">
                <div className="text-2xl font-bold text-blue-600 mb-2">1️⃣</div>
                <h4 className="font-semibold text-gray-800 mb-2">Registro Inicial</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Boletim de ocorrência</li>
                  <li>• Delegacia especializada</li>
                  <li>• Atendimento humanizado</li>
                  <li>• Registro detalhado</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-green-500">
                <div className="text-2xl font-bold text-green-600 mb-2">2️⃣</div>
                <h4 className="font-semibold text-gray-800 mb-2">Avaliação de Risco</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Aplicação do instrumento</li>
                  <li>• Análise dos 20 fatores</li>
                  <li>• Classificação do risco</li>
                  <li>• Julgamento profissional</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-orange-500">
                <div className="text-2xl font-bold text-orange-600 mb-2">3️⃣</div>
                <h4 className="font-semibold text-gray-800 mb-2">Medidas Protetivas</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Solicitação imediata</li>
                  <li>• Análise judicial em 48h</li>
                  <li>• Deferimento urgente</li>
                  <li>• Comunicação à vítima</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-purple-500">
                <div className="text-2xl font-bold text-purple-600 mb-2">4️⃣</div>
                <h4 className="font-semibold text-gray-800 mb-2">Acompanhamento</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Monitoramento contínuo</li>
                  <li>• Reavaliação periódica</li>
                  <li>• Rede de apoio ativa</li>
                  <li>• Gestão do caso</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-l-4 border-indigo-600">
              <h4 className="font-bold text-indigo-900 mb-3">⚖️ Papel do Ministério Público</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Requisição de Medidas:</strong> Solicitar medidas protetivas ao juízo com base na avaliação de risco</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Fiscalização:</strong> Acompanhar cumprimento das medidas pelo agressor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Articulação:</strong> Coordenar rede de atendimento intersetorial</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Denúncia:</strong> Ofertar denúncia criminal quando cabível</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Monitoramento:</strong> Reavaliar risco periodicamente durante o processo</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-l-4 border-pink-600">
              <h4 className="font-bold text-pink-900 mb-3">🏛️ Papel do Poder Judiciário</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Análise Urgente:</strong> Decidir sobre medidas protetivas em até 48 horas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Deferimento:</strong> Conceder medidas adequadas ao nível de risco identificado</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Monitoramento Eletrônico:</strong> Determinar uso de tornozeleira quando necessário</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Prisão Preventiva:</strong> Decretar em casos de risco extremo ou descumprimento</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Revisão:</strong> Reavaliar medidas conforme evolução do caso</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="bg-rose-50 border-l-4 border-rose-600 mb-6">
            <h4 className="font-bold text-rose-900 mb-3">🚨 Situações que Exigem Ação Imediata</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-xl mb-2">⚠️ <strong className="text-red-600">Risco Extremo</strong></div>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Ameaça com arma de fogo</li>
                  <li>• Tentativa de homicídio</li>
                  <li>• Violência física grave recente</li>
                  <li>• Descumprimento de medidas</li>
                  <li>• Escalada rápida da violência</li>
                </ul>
                <div className="mt-3 p-2 bg-red-100 rounded text-xs font-semibold text-red-800">
                  ⚡ Ação: Prisão preventiva + Tornozeleira + Acolhimento institucional
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-xl mb-2">⚠️ <strong className="text-orange-600">Risco Grave</strong></div>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Ameaças constantes</li>
                  <li>• Violência física repetida</li>
                  <li>• Ciúme excessivo</li>
                  <li>• Uso de álcool/drogas</li>
                  <li>• Isolamento da vítima</li>
                </ul>
                <div className="mt-3 p-2 bg-orange-100 rounded text-xs font-semibold text-orange-800">
                  ⚡ Ação: Medidas protetivas + Monitoramento + Suporte psicossocial
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-xl mb-2">⚠️ <strong className="text-yellow-600">Risco Moderado</strong></div>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Violência psicológica</li>
                  <li>• Agressões leves</li>
                  <li>• Conflitos frequentes</li>
                  <li>• Controle financeiro</li>
                  <li>• Dependência emocional</li>
                </ul>
                <div className="mt-3 p-2 bg-yellow-100 rounded text-xs font-semibold text-yellow-800">
                  ⚡ Ação: Medidas protetivas + Orientação + Grupos de apoio
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-600">
            <h4 className="font-bold text-emerald-900 mb-3">📋 Checklist de Implementação para Instituições</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2 text-sm">✅ Preparação Institucional</h5>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>☐ Capacitar equipes na aplicação do instrumento</li>
                  <li>☐ Estabelecer fluxo interno de atendimento</li>
                  <li>☐ Definir responsáveis pela avaliação de risco</li>
                  <li>☐ Criar banco de dados para monitoramento</li>
                  <li>☐ Elaborar protocolo de reavaliação periódica</li>
                  <li>☐ Mapear rede de apoio disponível no território</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2 text-sm">✅ Articulação Interinstitucional</h5>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>☐ Estabelecer canal de comunicação com delegacias</li>
                  <li>☐ Integrar com Poder Judiciário (sistema eletrônico)</li>
                  <li>☐ Conectar com rede de saúde e assistência social</li>
                  <li>☐ Parceria com casas de acolhimento</li>
                  <li>☐ Articular com segurança pública (patrulhas)</li>
                  <li>☐ Reuniões periódicas de alinhamento da rede</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Conclusão */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-primary-50 to-accent-50 border-2 border-primary-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <CheckCircle className="h-8 w-8 text-primary-600 mr-3" />
              Conclusão: Atuação Baseada em Evidências
            </h2>
            <p className="text-gray-700 mb-4">
              O <strong>Guia de Avaliação de Risco do MPDFT</strong> representa um avanço paradigmático. 
              Move o Sistema de Justiça de uma postura reativa para <strong>proativa, estratégica e preventiva</strong>.
            </p>
            <p className="text-gray-700 mb-4">
              A experiência do <strong>MP-RS</strong> demonstra que a articulação em rede, aliada à capacitação 
              contínua, é fundamental para um enfrentamento efetivo. Os cursos de capacitação oferecidos no 
              Rio Grande do Sul fortalecem a atuação interinstitucional e qualificam o atendimento às vítimas.
            </p>
            <p className="text-gray-700 mb-4">
              Instrumentaliza os atores para identificar, classificar e gerir riscos de forma precisa e eficaz, 
              concretizando o princípio: o feminicídio <strong>não é uma fatalidade, mas um evento evitável</strong>.
            </p>
            <div className="bg-white p-4 rounded-lg border border-primary-300 mt-4">
              <p className="text-sm text-gray-800 mb-2">
                <strong>📚 Coordenação MPDFT:</strong> Promotora de Justiça <strong>Liz-Elainne de Silvério e Oliveira Mendes</strong>
              </p>
              <p className="text-sm text-gray-800">
                <strong>🤝 Contribuições MP-RS:</strong> Implementação de políticas públicas baseadas em evidências 
                e fortalecimento da rede de enfrentamento no Rio Grande do Sul.
              </p>
            </div>
          </Card>
        </section>

      </div>
    </div>
  )
}
