import { useState } from 'react'
import { Calculator, TrendingUp, CheckCircle, AlertCircle, Info } from 'lucide-react'
import Card from '../components/Card'

interface Criterio {
  id: string
  titulo: string
  descricao: string
  peso: number
}

interface Resposta {
  criterioId: string
  valor: number
}

export default function CalculadoraDHS() {
  const [respostas, setRespostas] = useState<Resposta[]>([])
  const [mostrarResultado, setMostrarResultado] = useState(false)

  const criterios: Criterio[] = [
    {
      id: 'foco',
      titulo: '1. Foco(s) Prioritário(s)',
      descricao: 'Há clareza sobre os problemas prioritários a serem resolvidos? (conveniência, oportunidade e urgência)',
      peso: 20
    },
    {
      id: 'necessidades',
      titulo: '2. Atendimento de Necessidades',
      descricao: 'As ações atendem necessidades reais (fisiológicas, psicológicas, autorrealização)?',
      peso: 20
    },
    {
      id: 'impactos',
      titulo: '3. Impactos Proporcionais nos 3 Eixos',
      descricao: 'Há impactos equilibrados nos eixos econômico, social e ambiental?',
      peso: 20
    },
    {
      id: 'convergencia',
      titulo: '4. Convergência dos Setores',
      descricao: 'Existe convergência efetiva entre setor público, privado, sociedade civil organizada e comunidade em geral?',
      peso: 20
    },
    {
      id: 'atuacoes',
      titulo: '5. Promoção de Atuações Resolutivas',
      descricao: 'As ações efetivamente resolvem problemas e não apenas tratam sintomas?',
      peso: 20
    }
  ]

  const handleResposta = (criterioId: string, valor: number) => {
    const novasRespostas = respostas.filter(r => r.criterioId !== criterioId)
    novasRespostas.push({ criterioId, valor })
    setRespostas(novasRespostas)
    setMostrarResultado(false)
  }

  const calcularIndice = () => {
    if (respostas.length !== criterios.length) return 0
    
    let soma = 0
    respostas.forEach(resposta => {
      const criterio = criterios.find(c => c.id === resposta.criterioId)
      if (criterio) {
        soma += (resposta.valor * criterio.peso) / 100
      }
    })
    
    return Math.round(soma)
  }

  const getClassificacao = (indice: number) => {
    if (indice >= 90) return { 
      texto: 'Excelente - Alto DHS', 
      cor: 'text-green-600', 
      bg: 'bg-green-50', 
      border: 'border-green-500',
      descricao: 'Sua iniciativa demonstra forte alinhamento com todos os critérios do DHS. Continue aprimorando!'
    }
    if (indice >= 75) return { 
      texto: 'Muito Bom - DHS Avançado', 
      cor: 'text-blue-600', 
      bg: 'bg-blue-50', 
      border: 'border-blue-500',
      descricao: 'Excelente progresso! Há alinhamento significativo com os princípios do DHS.'
    }
    if (indice >= 60) return { 
      texto: 'Bom - DHS em Desenvolvimento', 
      cor: 'text-yellow-600', 
      bg: 'bg-yellow-50', 
      border: 'border-yellow-500',
      descricao: 'Caminho promissor. Foque nos critérios com menor pontuação para melhorar.'
    }
    if (indice >= 40) return { 
      texto: 'Regular - DHS Inicial', 
      cor: 'text-orange-600', 
      bg: 'bg-orange-50', 
      border: 'border-orange-500',
      descricao: 'Há potencial, mas são necessários ajustes importantes nos processos.'
    }
    return { 
      texto: 'Insuficiente - Requer Reestruturação', 
      cor: 'text-red-600', 
      bg: 'bg-red-50', 
      border: 'border-red-500',
      descricao: 'É necessária uma revisão profunda para alinhar a iniciativa aos princípios do DHS.'
    }
  }

  const getRecomendacoes = () => {
    const recomendacoes: string[] = []
    
    respostas.forEach(resposta => {
      const criterio = criterios.find(c => c.id === resposta.criterioId)
      if (criterio && resposta.valor < 70) {
        switch (criterio.id) {
          case 'foco':
            recomendacoes.push('📌 Defina claramente os focos prioritários usando critérios de conveniência, oportunidade e urgência.')
            break
          case 'necessidades':
            recomendacoes.push('💡 Mapeie as necessidades reais dos envolvidos (fisiológicas, psicológicas e autorrealização).')
            break
          case 'impactos':
            recomendacoes.push('⚖️ Busque equilibrar os impactos nos três eixos: econômico, social e ambiental.')
            break
          case 'convergencia':
            recomendacoes.push('🤝 Promova a convergência entre setor público, privado, sociedade civil organizada e comunidade em geral.')
            break
          case 'atuacoes':
            recomendacoes.push('🎯 Foque em resolver as causas raízes dos problemas, não apenas os sintomas.')
            break
        }
      }
    })
    
    return recomendacoes
  }

  const indice = calcularIndice()
  const classificacao = getClassificacao(indice)
  const recomendacoes = getRecomendacoes()
  const progressoPorcentagem = respostas.length / criterios.length * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary-600 text-white p-4 rounded-full mb-4">
            <Calculator className="h-12 w-12" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Calculadora do Índice DHS
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Avalie o grau de alinhamento da sua iniciativa com os critérios do 
            Desenvolvimento Harmônico e Sustentável
          </p>
        </div>

        {/* Barra de Progresso */}
        <Card className="mb-8 bg-gradient-to-r from-primary-500 to-blue-600 text-white">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">Progresso da Avaliação</span>
            <span className="font-bold">{respostas.length} / {criterios.length}</span>
          </div>
          <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden">
            <div
              className="bg-white h-full rounded-full transition-all duration-500"
              style={{ width: `${progressoPorcentagem}%` }}
            />
          </div>
        </Card>

        {/* Informações */}
        <Card className="mb-8 bg-blue-50 border-l-4 border-primary-600">
          <div className="flex items-start">
            <Info className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Como funciona?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Avalie cada um dos <strong>5 critérios de mensuração do DHS</strong> em uma escala de 0 a 100. 
                O índice final representa o grau de maturidade da sua iniciativa em relação aos princípios do DHS.
              </p>
            </div>
          </div>
        </Card>

        {/* Critérios */}
        <div className="space-y-6 mb-8">
          {criterios.map((criterio) => {
            const respostaAtual = respostas.find(r => r.criterioId === criterio.id)
            
            return (
              <Card 
                key={criterio.id} 
                className="hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500"
              >
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {criterio.titulo}
                    </h3>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Peso: {criterio.peso}%
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{criterio.descricao}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Não atende</span>
                    <span>Atende parcialmente</span>
                    <span>Atende plenamente</span>
                  </div>
                  
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    value={respostaAtual?.valor || 0}
                    onChange={(e) => handleResposta(criterio.id, parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                    style={{
                      background: `linear-gradient(to right, #0284c7 0%, #0284c7 ${respostaAtual?.valor || 0}%, #e5e7eb ${respostaAtual?.valor || 0}%, #e5e7eb 100%)`
                    }}
                  />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">0</span>
                    <div className="text-center">
                      <div className="bg-primary-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                        {respostaAtual?.valor || 0}
                      </div>
                      <span className="text-xs text-gray-500 mt-1 block">pontos</span>
                    </div>
                    <span className="text-xs text-gray-500">100</span>
                  </div>
                </div>

                {respostaAtual && respostaAtual.valor > 0 && (
                  <div className="mt-4 flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Critério avaliado</span>
                  </div>
                )}
              </Card>
            )
          })}
        </div>

        {/* Botão Calcular */}
        <div className="text-center mb-8">
          <button
            onClick={() => setMostrarResultado(true)}
            disabled={respostas.length !== criterios.length}
            className={`
              px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105
              ${respostas.length === criterios.length
                ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white hover:shadow-xl cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            {respostas.length === criterios.length ? (
              <span className="flex items-center">
                <Calculator className="h-6 w-6 mr-2" />
                Calcular Índice DHS
              </span>
            ) : (
              `Avalie todos os ${criterios.length} critérios para calcular`
            )}
          </button>
        </div>

        {/* Resultado */}
        {mostrarResultado && respostas.length === criterios.length && (
          <div className="space-y-6 animate-fadeIn">
            {/* Índice Principal */}
            <Card className={`${classificacao.bg} border-l-4 ${classificacao.border} text-center py-8`}>
              <div className="mb-4">
                <div className="text-6xl font-bold mb-2" style={{ 
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {indice}
                </div>
                <div className="text-gray-600 text-sm font-medium">ÍNDICE DHS</div>
              </div>
              
              <div className={`inline-block ${classificacao.cor} bg-white px-6 py-3 rounded-full font-bold text-lg mb-4 shadow-md`}>
                {classificacao.texto}
              </div>
              
              <p className="text-gray-700 max-w-2xl mx-auto">
                {classificacao.descricao}
              </p>
            </Card>

            {/* Detalhamento por Critério */}
            <Card className="bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 text-primary-600 mr-2" />
                Detalhamento por Critério
              </h3>
              
              <div className="space-y-4">
                {criterios.map(criterio => {
                  const resposta = respostas.find(r => r.criterioId === criterio.id)
                  if (!resposta) return null
                  
                  return (
                    <div key={criterio.id} className="border-l-4 border-primary-200 pl-4 py-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900 text-sm">
                          {criterio.titulo}
                        </span>
                        <span className="text-primary-600 font-bold">{resposta.valor}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${resposta.valor}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>

            {/* Recomendações */}
            {recomendacoes.length > 0 && (
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-yellow-500">
                <div className="flex items-start">
                  <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Recomendações para Melhoria
                    </h3>
                    <div className="space-y-3">
                      {recomendacoes.map((rec, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-gray-700">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Próximos Passos */}
            <Card className="bg-gradient-to-r from-primary-600 to-blue-600 text-white">
              <h3 className="text-xl font-bold mb-4">📚 Próximos Passos</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Revise a <a href="/implementacao" className="underline font-semibold">página de Implementação</a> para guia detalhado</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consulte os <a href="/recursos" className="underline font-semibold">Recursos</a> para ferramentas práticas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Explore <a href="/metodologias" className="underline font-semibold">casos de sucesso</a> para inspiração</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Acesse o <a href="/faq" className="underline font-semibold">FAQ</a> para esclarecer dúvidas</span>
                </li>
              </ul>
            </Card>

            {/* Botão Recalcular */}
            <div className="text-center">
              <button
                onClick={() => {
                  setRespostas([])
                  setMostrarResultado(false)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all border-2 border-primary-600"
              >
                🔄 Fazer Nova Avaliação
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CSS customizado */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #0284c7;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          transition: all 0.3s;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
          background: #0369a1;
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.4);
        }

        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #0284c7;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          transition: all 0.3s;
        }

        input[type="range"]::-moz-range-thumb:hover {
          background: #0369a1;
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.4);
        }
      `}</style>
    </div>
  )
}
