import { useState, useEffect } from 'react'
import { AlertTriangle, Shield, Users, ClipboardCheck, FileText, Play, RefreshCw, CheckCircle, ChevronDown, ChevronUp, Download, Save, BarChart3, Calendar, MapPin, Phone, Mail, User } from 'lucide-react'
import Card from '../components/Card'
import Accordion from '../components/Accordion'
import ProgressBar from '../components/ProgressBar'

interface Etapa {
  numero: number
  titulo: string
  descricao: string
  acoes: string[]
  concluida: boolean
}

interface DadosMunicipio {
  nomeMunicipio: string
  estado: string
  responsavel: string
  cargo: string
  email: string
  telefone: string
  dataInicio: string
}

export default function PlanoContingencia() {
  const [etapasConcluidas, setEtapasConcluidas] = useState<number[]>([])
  const [mostrarSimulacao, setMostrarSimulacao] = useState(false)
  const [mostrarFormulario, setMostrarFormulario] = useState(true)
  const [mostrarDashboard, setMostrarDashboard] = useState(false)
  
  const [dadosMunicipio, setDadosMunicipio] = useState<DadosMunicipio>({
    nomeMunicipio: '',
    estado: '',
    responsavel: '',
    cargo: '',
    email: '',
    telefone: '',
    dataInicio: new Date().toISOString().split('T')[0]
  })

  // Carregar dados do localStorage ao iniciar
  useEffect(() => {
    const dadosSalvos = localStorage.getItem('plancon_dados')
    const etapasSalvas = localStorage.getItem('plancon_etapas')
    
    if (dadosSalvos) {
      setDadosMunicipio(JSON.parse(dadosSalvos))
      setMostrarFormulario(false)
    }
    
    if (etapasSalvas) {
      setEtapasConcluidas(JSON.parse(etapasSalvas))
    }
  }, [])

  // Salvar automaticamente quando houver mudanças
  useEffect(() => {
    if (dadosMunicipio.nomeMunicipio) {
      localStorage.setItem('plancon_dados', JSON.stringify(dadosMunicipio))
    }
  }, [dadosMunicipio])

  useEffect(() => {
    localStorage.setItem('plancon_etapas', JSON.stringify(etapasConcluidas))
  }, [etapasConcluidas])

  const toggleEtapa = (numero: number) => {
    if (etapasConcluidas.includes(numero)) {
      setEtapasConcluidas(etapasConcluidas.filter(n => n !== numero))
    } else {
      setEtapasConcluidas([...etapasConcluidas, numero])
    }
  }

  const gerarRelatorio = () => {
    const dataGeracao = new Date().toLocaleString('pt-BR')
    const progresso = (etapasConcluidas.length / etapas.length) * 100
    
    let relatorio = `
═══════════════════════════════════════════════════════════════
  RELATÓRIO DO PLANO DE CONTINGÊNCIA DE DEFESA CIVIL (PLANCON)
═══════════════════════════════════════════════════════════════

DADOS DO MUNICÍPIO/ÓRGÃO:
────────────────────────────────────────────────────────────────
Município/Órgão: ${dadosMunicipio.nomeMunicipio || 'Não informado'}
Estado: ${dadosMunicipio.estado || 'Não informado'}
Responsável: ${dadosMunicipio.responsavel || 'Não informado'}
Cargo: ${dadosMunicipio.cargo || 'Não informado'}
Email: ${dadosMunicipio.email || 'Não informado'}
Telefone: ${dadosMunicipio.telefone || 'Não informado'}
Data de Início: ${dadosMunicipio.dataInicio || 'Não informado'}
Data de Geração: ${dataGeracao}

PROGRESSO GERAL:
────────────────────────────────────────────────────────────────
Etapas Concluídas: ${etapasConcluidas.length} de ${etapas.length}
Percentual de Conclusão: ${progresso.toFixed(1)}%
Status: ${progresso === 100 ? '✓ COMPLETO' : progresso >= 75 ? '⚠ AVANÇADO' : progresso >= 50 ? '▶ EM PROGRESSO' : '○ INICIAL'}

DETALHAMENTO DAS ETAPAS:
────────────────────────────────────────────────────────────────
`

    etapas.forEach(etapa => {
      const status = etapa.concluida ? '[✓] CONCLUÍDA' : '[ ] PENDENTE'
      relatorio += `
${etapa.numero}. ${etapa.titulo}
   Status: ${status}
   Descrição: ${etapa.descricao}
   
   Ações a realizar:
${etapa.acoes.map(acao => `   • ${acao}`).join('\n')}

────────────────────────────────────────────────────────────────
`
    })

    relatorio += `
PRÓXIMOS PASSOS RECOMENDADOS:
────────────────────────────────────────────────────────────────
`

    const proximasEtapas = etapas.filter(e => !e.concluida).slice(0, 3)
    if (proximasEtapas.length > 0) {
      proximasEtapas.forEach(etapa => {
        relatorio += `${etapa.numero}. ${etapa.titulo}\n`
      })
    } else {
      relatorio += `✓ Todas as etapas foram concluídas!\n`
      relatorio += `✓ Proceder com operacionalização e simulações.\n`
    }

    relatorio += `
────────────────────────────────────────────────────────────────
BASE LEGAL:
────────────────────────────────────────────────────────────────
• PNPDEC - Lei 12.608/2012
• Lei 12.983/2014 (Elementos obrigatórios)
• SEDEC/MI - Secretaria Nacional de Proteção e Defesa Civil
• PNUD - Programa das Nações Unidas para o Desenvolvimento

════════════════════════════════════════════════════════════════
        Documento gerado pelo Guia DHS - dhsclima
        Desenvolvimento Harmônico e Sustentável
════════════════════════════════════════════════════════════════
`

    // Criar e baixar arquivo
    const blob = new Blob([relatorio], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `PLANCON_${dadosMunicipio.nomeMunicipio || 'Relatorio'}_${new Date().toISOString().split('T')[0]}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const limparDados = () => {
    if (confirm('Deseja realmente limpar todos os dados salvos? Esta ação não pode ser desfeita.')) {
      localStorage.removeItem('plancon_dados')
      localStorage.removeItem('plancon_etapas')
      setEtapasConcluidas([])
      setDadosMunicipio({
        nomeMunicipio: '',
        estado: '',
        responsavel: '',
        cargo: '',
        email: '',
        telefone: '',
        dataInicio: new Date().toISOString().split('T')[0]
      })
      setMostrarFormulario(true)
      alert('Dados limpos com sucesso!')
    }
  }

  const salvarDados = () => {
    if (!dadosMunicipio.nomeMunicipio) {
      alert('Por favor, preencha ao menos o nome do município/órgão.')
      return
    }
    setMostrarFormulario(false)
    alert('Dados salvos com sucesso! O progresso será salvo automaticamente.')
  }

  const etapas: Etapa[] = [
    {
      numero: 1,
      titulo: "Percepção de Risco & Decisão",
      descricao: "Identificar riscos com base em dados históricos e conhecimento local",
      acoes: [
        "Consultar histórico de desastres no sistema S2ID",
        "Analisar levantamentos geológicos (CPRM)",
        "Coletar conhecimento local da comunidade",
        "Obter aprovação administrativa",
        "Estabelecer cronograma de trabalho"
      ],
      concluida: etapasConcluidas.includes(1)
    },
    {
      numero: 2,
      titulo: "Formação do Grupo de Trabalho (GT)",
      descricao: "Criar equipe participativa com representantes de todos os setores",
      acoes: [
        "Incluir departamentos municipais relevantes",
        "Convidar empresas privadas (especialmente com riscos tecnológicos)",
        "Envolver líderes comunitários",
        "Incluir moradores de áreas de risco",
        "Garantir autoridade decisória no grupo"
      ],
      concluida: etapasConcluidas.includes(2)
    },
    {
      numero: 3,
      titulo: "Análise de Cenários & Recursos",
      descricao: "Mapear ameaças, vulnerabilidades e capacidades disponíveis",
      acoes: [
        "Criar cenários detalhados de risco",
        "Catalogar recursos humanos disponíveis",
        "Mapear recursos institucionais",
        "Inventariar recursos materiais",
        "Identificar fontes de recursos financeiros"
      ],
      concluida: etapasConcluidas.includes(3)
    },
    {
      numero: 4,
      titulo: "Definição de Ações & Responsabilidades",
      descricao: "Estabelecer procedimentos e atribuir responsabilidades específicas",
      acoes: [
        "Definir procedimentos de monitoramento e alerta",
        "Planejar rotas e procedimentos de evacuação",
        "Estabelecer protocolos de socorro",
        "Definir assistência às vítimas",
        "Planejar restabelecimento de serviços essenciais",
        "Implementar Sistema de Comando de Operações (SCO)"
      ],
      concluida: etapasConcluidas.includes(4)
    },
    {
      numero: 5,
      titulo: "Aprovação Formal & Validação",
      descricao: "Submeter o plano à aprovação pública e formal",
      acoes: [
        "Realizar consulta pública",
        "Conduzir audiência pública obrigatória",
        "Obter assinaturas de todas as instituições responsáveis",
        "Registrar aprovação oficial"
      ],
      concluida: etapasConcluidas.includes(5)
    },
    {
      numero: 6,
      titulo: "Divulgação do Plano",
      descricao: "Tornar o plano público e acessível",
      acoes: [
        "Publicar em sites oficiais",
        "Publicar no diário oficial",
        "Criar versão pública (sem informações sensíveis)",
        "Distribuir versão restrita aos órgãos de resposta",
        "Realizar campanhas de conscientização"
      ],
      concluida: etapasConcluidas.includes(6)
    },
    {
      numero: 7,
      titulo: "Operacionalização",
      descricao: "Colocar o plano em ação através de simulações ou eventos reais",
      acoes: [
        "Realizar exercícios simulados",
        "Treinar equipes de resposta",
        "Testar sistemas de alerta",
        "Ativar procedimentos durante eventos reais"
      ],
      concluida: etapasConcluidas.includes(7)
    },
    {
      numero: 8,
      titulo: "Revisão Contínua",
      descricao: "Manter o plano atualizado e eficaz",
      acoes: [
        "Atualizar listas de contatos regularmente",
        "Revisar disponibilidade de recursos",
        "Incorporar lições aprendidas",
        "Atualizar após simulações e eventos reais",
        "Realizar revisões anuais"
      ],
      concluida: etapasConcluidas.includes(8)
    }
  ]

  const progresso = (etapasConcluidas.length / etapas.length) * 100

  const elementosObrigatorios = [
    { titulo: "Responsabilidades", descricao: "Papel de cada órgão na gestão de desastres" },
    { titulo: "Sistemas de Alerta", descricao: "Definição de sistemas articulados com monitoramento" },
    { titulo: "Simulações", descricao: "Exercícios com participação pública" },
    { titulo: "Serviços de Emergência", descricao: "Rotas de evacuação, pontos seguros e abrigos" },
    { titulo: "Atendimento Médico", descricao: "Assistência médico-hospitalar e psicológica" },
    { titulo: "Registro de Equipes", descricao: "Equipes técnicas e voluntários disponíveis" },
    { titulo: "Logística de Doações", descricao: "Centros e estratégia de distribuição" }
  ]

  const acoesfundamentais = [
    {
      titulo: "Monitoramento, Alerta e Alarme",
      descricao: "Processo integrado para prever desastres e comunicar ameaças",
      icon: AlertTriangle
    },
    {
      titulo: "Evacuação (Fuga)",
      descricao: "Saída segura da população vulnerável com rotas definidas",
      icon: Users
    },
    {
      titulo: "Socorro",
      descricao: "Resposta imediata com busca, salvamento e primeiros socorros",
      icon: Shield
    },
    {
      titulo: "Assistência às Vítimas",
      descricao: "Garantir bem-estar com água, alimentação, abrigo e dignidade",
      icon: Users
    },
    {
      titulo: "Restabelecimento de Serviços",
      descricao: "Restaurar eletricidade, água, saneamento e transporte",
      icon: RefreshCw
    }
  ]

  const tiposSimulacao = [
    {
      tipo: "De Mesa",
      descricao: "Uso de mapas e modelos para treinar equipes em aspectos estratégicos"
    },
    {
      tipo: "De Acionamento",
      descricao: "Teste de protocolos de mobilização e comunicação sem desdobramento físico"
    },
    {
      tipo: "Internos",
      descricao: "Exercícios apenas com órgãos de resposta para coordenação interna"
    },
    {
      tipo: "Externos",
      descricao: "Exercícios em escala completa com equipes e comunidade"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section com Ações */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Shield className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold">Planos de Contingência de Defesa Civil</h1>
              <p className="text-xl text-red-100">Elaboração baseada na PNPDEC (Lei 12.608/2012)</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={gerarRelatorio}
              className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              title="Gerar e baixar relatório completo"
            >
              <Download className="w-5 h-5" />
              Gerar Relatório
            </button>
            <button
              onClick={() => setMostrarDashboard(!mostrarDashboard)}
              className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              title="Ver estatísticas e progresso"
            >
              <BarChart3 className="w-5 h-5" />
              Dashboard
            </button>
          </div>
        </div>
        <p className="text-lg text-red-50">
          Um guia completo e interativo para elaboração de Planos de Contingência (PLANCON) 
          no Brasil, baseado nas diretrizes da Secretaria Nacional de Proteção e Defesa Civil 
          (SEDEC/MI) e do Programa das Nações Unidas para o Desenvolvimento (PNUD).
        </p>
      </div>

      {/* Formulário de Dados do Município */}
      {mostrarFormulario && (
        <Card className="mb-8 border-2 border-blue-500">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-600" />
              Dados do Município/Órgão
            </h2>
            <button
              onClick={() => setMostrarFormulario(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                Município/Órgão *
              </label>
              <input
                type="text"
                value={dadosMunicipio.nomeMunicipio}
                onChange={(e) => setDadosMunicipio({...dadosMunicipio, nomeMunicipio: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: Prefeitura de São Paulo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estado
              </label>
              <select
                value={dadosMunicipio.estado}
                onChange={(e) => setDadosMunicipio({...dadosMunicipio, estado: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecione...</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-1" />
                Responsável
              </label>
              <input
                type="text"
                value={dadosMunicipio.responsavel}
                onChange={(e) => setDadosMunicipio({...dadosMunicipio, responsavel: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nome completo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cargo
              </label>
              <input
                type="text"
                value={dadosMunicipio.cargo}
                onChange={(e) => setDadosMunicipio({...dadosMunicipio, cargo: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: Coordenador de Defesa Civil"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-1" />
                Email
              </label>
              <input
                type="email"
                value={dadosMunicipio.email}
                onChange={(e) => setDadosMunicipio({...dadosMunicipio, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="email@exemplo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-1" />
                Telefone
              </label>
              <input
                type="tel"
                value={dadosMunicipio.telefone}
                onChange={(e) => setDadosMunicipio({...dadosMunicipio, telefone: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="(00) 00000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Data de Início
              </label>
              <input
                type="date"
                value={dadosMunicipio.dataInicio}
                onChange={(e) => setDadosMunicipio({...dadosMunicipio, dataInicio: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={salvarDados}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Save className="w-5 h-5" />
              Salvar Dados
            </button>
            <button
              onClick={limparDados}
              className="flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Limpar Dados
            </button>
          </div>
        </Card>
      )}

      {/* Botão para Reabrir Formulário */}
      {!mostrarFormulario && dadosMunicipio.nomeMunicipio && (
        <Card className="mb-8 bg-blue-50 border-l-4 border-blue-600">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-blue-900">
                {dadosMunicipio.nomeMunicipio} - {dadosMunicipio.estado}
              </h3>
              <p className="text-sm text-gray-600">
                Responsável: {dadosMunicipio.responsavel || 'Não informado'} 
                {dadosMunicipio.cargo && ` - ${dadosMunicipio.cargo}`}
              </p>
            </div>
            <button
              onClick={() => setMostrarFormulario(true)}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              <ChevronDown className="w-5 h-5" />
              Editar Dados
            </button>
          </div>
        </Card>
      )}

      {/* Dashboard de Estatísticas */}
      {mostrarDashboard && (
        <Card className="mb-8 border-2 border-green-500">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-green-600" />
              Dashboard de Progresso
            </h2>
            <button
              onClick={() => setMostrarDashboard(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-600">
              <div className="text-3xl font-bold text-blue-900">{etapasConcluidas.length}</div>
              <div className="text-sm text-gray-600">Etapas Concluídas</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border-l-4 border-orange-600">
              <div className="text-3xl font-bold text-orange-900">{etapas.length - etapasConcluidas.length}</div>
              <div className="text-sm text-gray-600">Etapas Pendentes</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-600">
              <div className="text-3xl font-bold text-green-900">{progresso.toFixed(0)}%</div>
              <div className="text-sm text-gray-600">Progresso Total</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-600">
              <div className="text-3xl font-bold text-purple-900">
                {progresso === 100 ? '✓' : etapas.length - etapasConcluidas.length}
              </div>
              <div className="text-sm text-gray-600">
                {progresso === 100 ? 'Completo!' : 'Próximas Etapas'}
              </div>
            </div>
          </div>

          {/* Visualização por Etapa */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-800 mb-3">Status por Etapa:</h3>
            {etapas.map(etapa => (
              <div key={etapa.numero} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  etapa.concluida ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {etapa.concluida ? '✓' : etapa.numero}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-800">{etapa.titulo}</div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  etapa.concluida ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                }`}>
                  {etapa.concluida ? 'CONCLUÍDA' : 'PENDENTE'}
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* O que é PLANCON */}
      <Card className="mb-8">
        <div className="flex items-start gap-4">
          <FileText className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">O que é um PLANCON?</h2>
            <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-4">
              <p className="text-gray-700 italic">
                "Documento que registra o planejamento elaborado a partir da percepção e análise 
                de um ou mais cenários de risco de desastre e estabelece os procedimentos para 
                ações de monitoramento, alerta, alarme, evacuação, socorro, assistência às vítimas 
                e restabelecimento de serviços essenciais."
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">O que pode ocorrer?</h3>
                <p className="text-sm text-gray-700">Hipótese de Desastre</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">Como se preparar?</h3>
                <p className="text-sm text-gray-700">Preparação antecipada</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-bold text-orange-900 mb-2">Como responder?</h3>
                <p className="text-sm text-gray-700">Ações durante o evento</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Marco Legal */}
      <Card className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Marco Legal: PNPDEC e SINPDEC</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">🏛️ PNPDEC (Lei 12.608/2012)</h3>
            <p className="text-gray-700 mb-3">
              Política Nacional de Proteção e Defesa Civil - ciclo integrado de 5 fases:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-blue-50 p-2 rounded">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm">Prevenção - Reduzir ocorrência e intensidade</span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 p-2 rounded">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm">Mitigação - Limitar configuração de risco</span>
              </div>
              <div className="flex items-center gap-2 bg-yellow-50 p-2 rounded">
                <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                <span className="text-sm">Preparação - Otimizar ações de resposta</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-50 p-2 rounded">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span className="text-sm">Resposta - Medidas emergenciais</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-50 p-2 rounded">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-sm">Recuperação - Retorno à normalidade</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">🔗 SINPDEC</h3>
            <p className="text-gray-700 mb-3">
              Sistema Nacional de Proteção e Defesa Civil:
            </p>
            <div className="space-y-3 text-sm">
              <div className="border-l-4 border-red-600 pl-3">
                <strong>Órgão Central:</strong> SEDEC/MI - coordenação nacional
              </div>
              <div className="border-l-4 border-orange-600 pl-3">
                <strong>Órgão Consultivo:</strong> CONPDEC - assessoria
              </div>
              <div className="border-l-4 border-blue-600 pl-3">
                <strong>Órgãos Regionais:</strong> Estaduais e municipais
              </div>
              <div className="border-l-4 border-green-600 pl-3">
                <strong>Órgãos Setoriais:</strong> Saúde, meio ambiente, infraestrutura
              </div>
              <div className="border-l-4 border-purple-600 pl-3">
                <strong>Organizações Comunitárias:</strong> Voluntários e NUPDECs
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Elementos Obrigatórios */}
      <Card className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <ClipboardCheck className="w-6 h-6 text-red-600" />
          Elementos Legalmente Obrigatórios (Lei 12.983/14)
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {elementosObrigatorios.map((elemento, index) => (
            <div key={index} className="border-l-4 border-red-600 bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-gray-800 mb-1">{elemento.titulo}</h3>
              <p className="text-sm text-gray-600">{elemento.descricao}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Ações Fundamentais */}
      <Card className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ações Fundamentais de Resposta</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {acoesfundamentais.map((acao, index) => {
            const Icon = acao.icon
            return (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-lg border border-red-200">
                <Icon className="w-8 h-8 text-red-600 mb-2" />
                <h3 className="font-bold text-gray-800 mb-2">{acao.titulo}</h3>
                <p className="text-sm text-gray-600">{acao.descricao}</p>
              </div>
            )
          })}
        </div>
      </Card>

      {/* Processo em 8 Etapas - Interativo */}
      <Card className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Processo de Elaboração em 8 Etapas (Interativo)
        </h2>
        <div className="mb-6">
          <ProgressBar 
            label={`Progresso: ${etapasConcluidas.length} de ${etapas.length} etapas concluídas`}
            value={etapasConcluidas.length}
            maxValue={etapas.length}
            color="bg-red-600"
          />
        </div>

        <div className="space-y-4">
          {etapas.map((etapa) => (
            <div 
              key={etapa.numero} 
              className={`border-2 rounded-lg overflow-hidden transition-all ${
                etapa.concluida ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white'
              }`}
            >
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                        etapa.concluida ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'
                      }`}>
                        {etapa.concluida ? <CheckCircle className="w-6 h-6" /> : etapa.numero}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{etapa.titulo}</h3>
                        <p className="text-sm text-gray-600">{etapa.descricao}</p>
                      </div>
                    </div>
                    <Accordion title="Ver ações detalhadas" defaultOpen={false}>
                      <ul className="space-y-2 mt-3">
                        {etapa.acoes.map((acao, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{acao}</span>
                          </li>
                        ))}
                      </ul>
                    </Accordion>
                  </div>
                  <button
                    onClick={() => toggleEtapa(etapa.numero)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      etapa.concluida
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    {etapa.concluida ? 'Concluída ✓' : 'Marcar como Concluída'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {progresso === 100 && (
          <div className="mt-6 bg-green-100 border-2 border-green-600 rounded-lg p-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              Parabéns! Todas as etapas foram concluídas!
            </h3>
            <p className="text-green-700">
              Seu plano de contingência está pronto para ser operacionalizado e testado através de simulações.
            </p>
          </div>
        )}
      </Card>

      {/* Simulações */}
      <Card className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Play className="w-6 h-6 text-red-600" />
            Exercícios Simulados (Obrigatórios por Lei)
          </h2>
          <button
            onClick={() => setMostrarSimulacao(!mostrarSimulacao)}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
          >
            {mostrarSimulacao ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            {mostrarSimulacao ? 'Ocultar' : 'Mostrar'} Detalhes
          </button>
        </div>

        <p className="text-gray-700 mb-4">
          Os exercícios simulados são <strong>legalmente obrigatórios</strong> e servem para:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <strong className="text-blue-900">Treinar</strong>
            <p className="text-sm text-gray-600 mt-1">Todas as partes envolvidas</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <ClipboardCheck className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <strong className="text-green-900">Avaliar</strong>
            <p className="text-sm text-gray-600 mt-1">Procedimentos sob pressão</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg text-center">
            <RefreshCw className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <strong className="text-orange-900">Revisar</strong>
            <p className="text-sm text-gray-600 mt-1">Melhorar continuamente</p>
          </div>
        </div>

        {mostrarSimulacao && (
          <div className="space-y-4 mt-6 border-t pt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Tipos de Simulações</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {tiposSimulacao.map((sim, index) => (
                <div key={index} className="border border-gray-300 rounded-lg p-4 hover:border-red-500 transition-colors">
                  <h4 className="font-bold text-gray-800 mb-2">{sim.tipo}</h4>
                  <p className="text-sm text-gray-600">{sim.descricao}</p>
                </div>
              ))}
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 mt-6">
              <h4 className="font-bold text-yellow-900 mb-2">🔄 Ciclo de Melhoria Contínua</h4>
              <p className="text-sm text-gray-700">
                Cada simulação deve ser seguida de uma avaliação rigorosa que alimenta 
                diretamente a revisão do PLANCON, criando um ciclo contínuo de aprimoramento.
              </p>
            </div>
          </div>
        )}
      </Card>

      {/* Sistemas de Apoio */}
      <Card className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sistemas de Apoio Federal</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">📊 S2ID</h3>
            <p className="text-sm text-gray-700 mb-3">
              Sistema Integrado de Informações sobre Desastres
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Registrar ocorrências de desastres</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Gerenciar reconhecimento federal de emergências</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Acessar dados históricos oficiais</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Módulo padronizado para registrar PLANCON</span>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">👥 Participação Social</h3>
            <p className="text-sm text-gray-700 mb-3">
              Envolvimento comunitário essencial
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Corresponsabilidade da população</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Credibilidade e confiança</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Efetividade com conhecimento local</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Legitimidade e governança local</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>NUPDECs - Núcleos Comunitários</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Conclusão e Integração com DHS */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-600">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔗 Integração com o DHS</h2>
        <p className="text-gray-700 mb-4">
          Os Planos de Contingência de Defesa Civil complementam perfeitamente a metodologia 
          DHS (Desenvolvimento Harmônico e Sustentável) ao:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-blue-300">
            <h3 className="font-bold text-blue-900 mb-2">✓ Pensamento Sistêmico</h3>
            <p className="text-sm text-gray-700">
              Abordar riscos de forma integrada, considerando interdependências entre sistemas
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-300">
            <h3 className="font-bold text-green-900 mb-2">✓ Participação Social</h3>
            <p className="text-sm text-gray-700">
              Envolver comunidades na construção de soluções, gerando corresponsabilidade
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-purple-300">
            <h3 className="font-bold text-purple-900 mb-2">✓ Planejamento de Longo Prazo</h3>
            <p className="text-sm text-gray-700">
              Preparação antecipada e ciclo contínuo de melhoria
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-orange-300">
            <h3 className="font-bold text-orange-900 mb-2">✓ Resiliência Comunitária</h3>
            <p className="text-sm text-gray-700">
              Fortalecer capacidades locais para enfrentar adversidades
            </p>
          </div>
        </div>
        <div className="mt-6 bg-blue-100 border-l-4 border-blue-600 p-4">
          <p className="text-sm text-gray-800">
            <strong>💡 Dica:</strong> Utilize a <a href="/calculadora" className="text-blue-600 hover:underline font-medium">Calculadora DHS</a> para 
            avaliar o grau de maturidade do seu município na gestão de riscos e desastres, 
            complementando a elaboração do seu PLANCON.
          </p>
        </div>
      </Card>
    </div>
  )
}
