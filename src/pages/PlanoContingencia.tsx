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

            {/* Organização de Simulados em 9 Passos */}
            <div className="bg-white border-2 border-blue-500 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">📋 Organização de Simulados em 9 Passos</h3>
              <p className="text-sm text-gray-700 mb-4">
                As etapas para a organização de simulados estão detalhadas em 9 passos no material de formação sobre a elaboração de Plano de Contingência. 
                O objetivo dos simulados é colocar em prática o plano previsto no documento final, visando treinar todos os envolvidos, avaliar as condições de execução, 
                e revisar e atualizar o documento final a partir das constatações de campo.
              </p>
              
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-900 mb-2">1º Passo - A decisão para realizar o simulado</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    A realização do simulado deve seguir as definições de periodicidade e responsabilidade previstas no Plano de Contingência.
                  </p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                    <li>Formação de um Grupo de Trabalho (GT) responsável pelo planejamento</li>
                    <li>Elaboração de cronograma com todas as etapas (planejamento, realização e encerramento)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-900 mb-2">2º Passo - A definição de cenário, área de risco e modalidade</h4>
                  <p className="text-sm text-gray-700">
                    O GT deve escolher, entre os cenários existentes no Plano de Contingência (se for um Plano Multicenários), 
                    qual será testado, em que localidade e de que maneira (modalidade).
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-900 mb-2">3º Passo - A definição de procedimentos e ações a serem testados</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Estabelecer quais procedimentos e ações previstos no Plano de Contingência serão treinados e testados.
                  </p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                    <li>Exemplos: Alerta aos órgãos e comunidade, Assistência humanitária, Atendimento a grupos especiais</li>
                    <li>Atendimento ao cidadão e imprensa, Busca e salvamento, Evacuação, Rotas de fuga, Sistema de alarme</li>
                    <li>Elaboração de quadro de planejamento para cada procedimento</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-900 mb-2">4º Passo - A distribuição de tarefas</h4>
                  <p className="text-sm text-gray-700 mb-2">As tarefas se organizam em três grandes equipes:</p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                    <li><strong>Equipe de treinamento:</strong> Representantes dos órgãos de resposta e moradores que simulam a situação real</li>
                    <li><strong>Equipe de observação e avaliação:</strong> Verifica se as ações correspondem ao previsto e mede o tempo de resposta (não interfere)</li>
                    <li><strong>Equipe de suporte:</strong> Organização, logística e demandas não treinadas (filmagem, materiais, reuniões)</li>
                    <li>Cada equipe deve ser facilmente identificada (camisetas, coletes ou crachás de diferentes cores)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-900 mb-2">5º Passo - A definição das ações de mobilização</h4>
                  <p className="text-sm text-gray-700 mb-2">Planejar a mobilização para que todos conheçam os detalhes do simulado:</p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                    <li>Comunicação oficial aos órgãos de resposta (objetivo, data, horário, responsabilidades)</li>
                    <li>Reuniões comunitárias com moradores e empresas</li>
                    <li>Ampla divulgação (redes sociais, imprensa, panfletagem)</li>
                    <li>Produção de material de orientação (mapas, croquis, roteiro)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-900 mb-2">6º Passo - A definição do roteiro final</h4>
                  <p className="text-sm text-gray-700 mb-2">O roteiro completo deve ser dividido em três partes:</p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                    <li><strong>Preparação:</strong> Recursos necessários, demandas logísticas e de apoio</li>
                    <li><strong>Realização:</strong> Montagem do cenário, roteiro de resposta e desmobilização</li>
                    <li><strong>Pós-simulado:</strong> Comunicação dos resultados aos participantes em reunião de prestação de contas</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-900 mb-2">7º Passo - A realização do simulado</h4>
                  <p className="text-sm text-gray-700 mb-2">Operacionalização do planejamento:</p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                    <li><strong>Reunião de Abertura:</strong> Apresentação do roteiro, equipes e distribuição de materiais</li>
                    <li><strong>Encenação da ocorrência:</strong> Execução do planejamento com acompanhamento e avaliação</li>
                    <li><strong>Reunião de Encerramento:</strong> Considerações dos avaliadores e discussão técnica (ata e lista de frequência)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-900 mb-2">8º Passo - A avaliação do simulado</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Pessoas designadas devem apontar tecnicamente os aspectos positivos e de melhoria, respondendo:
                  </p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                    <li>Quais foram os pontos fortes e fracos do plano?</li>
                    <li>Como funcionou o sistema de alarme?</li>
                    <li>Quais recursos fizeram falta?</li>
                    <li>O tempo de resposta foi o previsto?</li>
                    <li>Recomenda-se formulários padronizados para comparar exercícios e redefinir estratégias</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-900 mb-2">9º Passo - Os registros e a atualização documental</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Após a avaliação, atende ao objetivo de revisão e atualização do Plano de Contingência:
                  </p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                    <li><strong>Registros de treinamento:</strong> Relatório final com fotos e depoimentos</li>
                    <li><strong>Registros de avaliação:</strong> Consolidação das considerações (gráficos se houver dados quantitativos)</li>
                    <li><strong>Atualização do plano:</strong> Verificação e alteração dos pontos que precisam de ajuste</li>
                    <li>Após alterações, retomar o ciclo de validação, avaliação e revisão</li>
                    <li>Nota: Simples atualização de dados cadastrais (telefones, contatos) não exige nova audiência pública</li>
                  </ul>
                </div>
              </div>
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
          O guia de implementação da Matriz de Convergência do DHS via atuação resolutiva de PGS contribui para fomentar como foco prioritário a elaboração dos planos de contingência:
        </p>
        
        {/* Orientações Gerais da Matriz */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">📋 Orientações Gerais da Matriz</h3>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <h4 className="font-semibold text-blue-900">I. Ambiente</h4>
              <p className="text-sm text-gray-700">Escolher o ambiente/Habitat para atuação</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <h4 className="font-semibold text-blue-900">II. Atuação Interinstitucional</h4>
              <p className="text-sm text-gray-700">Fomentar a atuação interinstitucional e com a comunidade</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <h4 className="font-semibold text-blue-900">III. Atuação Institucional</h4>
              <p className="text-sm text-gray-700">Fomentar a atuação institucional</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <h4 className="font-semibold text-blue-900">IV. Abordagens</h4>
              <p className="text-sm text-gray-700">4.1- Conscientização/Necessidade, 4.2- Meios e 4.3- Incentivos</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <h4 className="font-semibold text-blue-900">V. Etapas</h4>
              <p className="text-sm text-gray-700">5.1- Escolher foco prioritário e 5.2- Mapear/aperfeiçoar/convergência</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <h4 className="font-semibold text-blue-900">VI. Fundamento</h4>
              <p className="text-sm text-gray-700">Sempre partir do foco prioritário levando em consideração os critérios do DHS/PGS</p>
            </div>
          </div>
        </div>

        {/* Etapas Sugeridas para Implementação */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">🎯 Etapas Sugeridas para Implementação</h3>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border border-green-300">
              <h4 className="font-semibold text-green-900">1. Escolher o(s) Foco(s) Prioritário(s)</h4>
              <p className="text-sm text-gray-700">Baseado em critérios de conveniência, oportunidade e urgência. Recomenda-se focar em problemas que causam alta judicialização ou calamidades.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-300">
              <h4 className="font-semibold text-green-900">2.a. Mapear Necessidades, Possibilidades e Atividades</h4>
              <p className="text-sm text-gray-700">Levantar o que é preciso fazer, os recursos disponíveis e as iniciativas já existentes relacionadas ao foco escolhido.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-300">
              <h4 className="font-semibold text-green-900">2.b. Promover o Aperfeiçoamento das relações e/ou a Convergência Estrutural, por meio de atividades</h4>
              <p className="text-sm text-gray-700">Executar uma série de atividades ordenadas para transformar as estruturas e processos.</p>
            </div>
          </div>
        </div>

        {/* Documento Detalhado da Matriz */}
        <div className="mb-6 bg-gray-50 border border-gray-300 rounded-lg p-4">
          <p className="text-sm text-gray-700 mb-2">
            <strong>Documento Detalhado:</strong> Acesse o material completo que descreve de forma detalhada todas as etapas e passos da Matriz de Convergência
          </p>
          <a
            href="/documentos/matriz-convergencia-dhs-detalhado.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm underline"
          >
            <FileText className="h-4 w-4 mr-1" />
            Visualizar Guia Completo da Matriz de Convergência (PDF)
          </a>
        </div>

        {/* Atividades (Passo 2.b) */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">🔧 Atividades (Passo 2.b)</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-lg border border-purple-300">
              <p className="text-sm text-gray-700"><strong>1.</strong> Fomentar o DHS em Ambientes de Convergência (ex. em audiências públicas, reuniões, comitês, etc.)</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-300">
              <p className="text-sm text-gray-700"><strong>2.</strong> Reunir Documentos e Elaborar Diagnósticos</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-300">
              <p className="text-sm text-gray-700"><strong>3.</strong> Executar os Encaminhamentos</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-300">
              <p className="text-sm text-gray-700"><strong>4.</strong> ELABORAR PLANO DE CONTINGÊNCIA - de acordo com as 8 etapas</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-300">
              <p className="text-sm text-gray-700"><strong>5.</strong> ELABORAR PLANO DE CONTINGÊNCIA - de acordo com as 8 etapas acima previstas</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-300">
              <p className="text-sm text-gray-700"><strong>6.</strong> Realizar Eventos Interinstitucionais</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-300">
              <p className="text-sm text-gray-700"><strong>7.</strong> Realizar Capacitações Institucionais</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-300">
              <p className="text-sm text-gray-700"><strong>8.</strong> Criar Estruturas de Resolução de Problemas</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-300">
              <p className="text-sm text-gray-700"><strong>9.</strong> Promover Ações Contra Irregularidades</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-300">
              <p className="text-sm text-gray-700"><strong>10.</strong> Implementar Estratégias de Comunicação e Formação</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-300">
              <p className="text-sm text-gray-700"><strong>11.</strong> Desenvolver Projetos e Políticas Públicas</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-300">
              <p className="text-sm text-gray-700"><strong>12.</strong> Promover a Convergência Estrutural</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-purple-300">
              <p className="text-sm text-gray-700"><strong>13.</strong> Revisar e Aperfeiçoar Periodicamente</p>
            </div>
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

      {/* Recomendações MP-RS e CNMP */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Shield className="h-8 w-8 text-green-600 mr-3" />
          Recomendações do Ministério Público
        </h2>

        {/* Procuradora Silvia Cappelli - MP-RS */}
        <div className="mb-8">
          <div className="bg-white p-6 rounded-lg border-2 border-green-500 shadow-lg">
            <div className="flex items-start mb-4">
              <User className="h-8 w-8 text-green-700 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-1">
                  Dra. Silvia Cappelli
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Procuradora de Justiça do Ministério Público do Rio Grande do Sul (MP-RS)
                </p>
                <p className="text-xs text-gray-500 italic">
                  Especialista em Direito Ambiental, Mudanças Climáticas e Gestão de Riscos de Desastres
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  1. Prevenção e Preparação como Prioridades
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  "A gestão de riscos de desastres deve priorizar a <strong>prevenção e preparação</strong>, 
                  não apenas a resposta. Municípios precisam investir em mapeamento de áreas de risco, 
                  sistemas de alerta precoce e capacitação contínua de equipes."
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Mapeamento georreferenciado de áreas vulneráveis</li>
                  <li>• Sistemas de monitoramento meteorológico integrado</li>
                  <li>• Planos de evacuação testados regularmente</li>
                  <li>• Capacitação de agentes de Defesa Civil</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  2. Articulação Interinstitucional
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  "O <strong>Ministério Público deve atuar como articulador</strong> entre os diferentes 
                  órgãos e esferas de governo. A gestão de riscos exige integração permanente entre 
                  Defesa Civil, Saúde, Assistência Social, Meio Ambiente e demais setores."
                </p>
                <div className="grid md:grid-cols-2 gap-2 mt-3">
                  <div className="bg-white p-2 rounded text-xs">
                    <strong>✓ Comitês Permanentes:</strong> Criar comitês municipais de gestão de riscos 
                    com reuniões periódicas
                  </div>
                  <div className="bg-white p-2 rounded text-xs">
                    <strong>✓ Protocolos Integrados:</strong> Estabelecer fluxos claros de comunicação 
                    e atuação conjunta
                  </div>
                  <div className="bg-white p-2 rounded text-xs">
                    <strong>✓ Capacitação Conjunta:</strong> Promover treinamentos integrados com todos 
                    os atores da rede
                  </div>
                  <div className="bg-white p-2 rounded text-xs">
                    <strong>✓ Compartilhamento de Dados:</strong> Sistemas informatizados para troca 
                    de informações em tempo real
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-3 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  3. Ordenamento Territorial e Licenciamento
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  "É fundamental <strong>integrar a gestão de riscos ao planejamento urbano</strong>. 
                  O MP-RS tem atuado para que municípios respeitem áreas de preservação, proíbam 
                  ocupações em zonas de risco e condicionem licenciamentos a estudos de vulnerabilidade."
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Revisão de Planos Diretores com enfoque em gestão de riscos</li>
                  <li>• Fiscalização rigorosa de ocupações irregulares</li>
                  <li>• Reassentamento de famílias em áreas vulneráveis</li>
                  <li>• Condicionantes ambientais em licenciamentos</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  4. Planos de Contingência Obrigatórios
                </h4>
                <p className="text-sm text-gray-700 mb-4">
                  "Todo município em área de risco deve ter <strong>Plano de Contingência atualizado 
                  e testado</strong>. O MP pode e deve requisitar a elaboração e implementação desses 
                  planos, bem como fiscalizar sua efetividade por meio de simulados."
                </p>

                {/* Recomendação MP-RS nº 01/2023 - Detalhada */}
                <div className="bg-white p-4 rounded-lg border-2 border-purple-500 mb-4">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold mr-3">
                      RECOMENDAÇÃO MP-RS Nº 01/2023
                    </div>
                  </div>
                  
                  <p className="text-sm font-semibold text-purple-900 mb-3">
                    📋 Diretrizes para Elaboração de Planos de Contingência nos 497 Municípios Gaúchos
                  </p>

                  <div className="space-y-3">
                    {/* Prazo e Abrangência */}
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm text-purple-900 mb-2">🗓️ Prazo e Abrangência</h5>
                      <ul className="text-xs text-gray-700 space-y-1 ml-4">
                        <li>• <strong>Prazo:</strong> Todos os municípios devem elaborar ou atualizar seus Planos até <strong>dezembro de 2025</strong></li>
                        <li>• <strong>Prioridade Imediata:</strong> Municípios em áreas de alto risco (inundações, deslizamentos, estiagens severas)</li>
                        <li>• <strong>Abrangência:</strong> 100% dos 497 municípios do Rio Grande do Sul</li>
                        <li>• <strong>Base Legal:</strong> Lei Federal nº 12.608/2012 (Política Nacional de Proteção e Defesa Civil)</li>
                      </ul>
                    </div>

                    {/* Conteúdo Mínimo Obrigatório */}
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm text-blue-900 mb-2">📑 Conteúdo Mínimo Obrigatório do Plano</h5>
                      <div className="grid md:grid-cols-2 gap-2">
                        <div className="bg-white p-2 rounded text-xs">
                          <strong>1. Diagnóstico de Riscos</strong>
                          <p className="text-gray-600 mt-1">Mapeamento georreferenciado de todas as áreas vulneráveis</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong>2. Cenários de Desastres</strong>
                          <p className="text-gray-600 mt-1">Simulações de eventos com diferentes intensidades</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong>3. Estrutura Operacional</strong>
                          <p className="text-gray-600 mt-1">Organograma da Defesa Civil com atribuições claras</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong>4. Recursos Humanos</strong>
                          <p className="text-gray-600 mt-1">Lista nominal de agentes, contatos e escalas de plantão</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong>5. Recursos Materiais</strong>
                          <p className="text-gray-600 mt-1">Inventário de equipamentos, abrigos e pontos de apoio</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong>6. Protocolos de Ação</strong>
                          <p className="text-gray-600 mt-1">Fluxogramas para cada tipo de emergência</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong>7. Sistema de Alerta</strong>
                          <p className="text-gray-600 mt-1">Mecanismos de comunicação com população (sirenes, SMS, rádio)</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong>8. Rotas de Evacuação</strong>
                          <p className="text-gray-600 mt-1">Mapas com pontos de encontro e locais seguros</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong>9. Gestão de Abrigos</strong>
                          <p className="text-gray-600 mt-1">Protocolos de recepção, registro e assistência</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong>10. Assistência Humanitária</strong>
                          <p className="text-gray-600 mt-1">Distribuição de água, alimentos, medicamentos e kits</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong>11. Articulação Institucional</strong>
                          <p className="text-gray-600 mt-1">Acordos com Corpo de Bombeiros, PM, Saúde, Assistência</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong>12. Cronograma de Simulados</strong>
                          <p className="text-gray-600 mt-1">Pelo menos 1 simulado anual com participação popular</p>
                        </div>
                      </div>
                    </div>

                    {/* Atuação do MP-RS */}
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm text-green-900 mb-2">⚖️ Atuação Fiscalizatória do MP-RS</h5>
                      <div className="space-y-2 text-xs text-gray-700">
                        <div className="bg-white p-2 rounded">
                          <strong className="text-green-900">📧 Ofícios às Prefeituras:</strong>
                          <p className="mt-1">O MP-RS expediu ofícios a todos os 497 municípios requisitando:</p>
                          <ul className="ml-4 mt-1 space-y-1">
                            <li>• Comprovação da existência do Plano de Contingência</li>
                            <li>• Se inexistente, cronograma de elaboração até dez/2025</li>
                            <li>• Se existente, comprovação de atualização nos últimos 2 anos</li>
                            <li>• Relatório do último simulado realizado</li>
                          </ul>
                        </div>

                        <div className="bg-white p-2 rounded">
                          <strong className="text-green-900">🔍 Inspeções In Loco:</strong>
                          <p className="mt-1">Promotores realizam vistorias para verificar:</p>
                          <ul className="ml-4 mt-1 space-y-1">
                            <li>• Existência física da estrutura da Defesa Civil</li>
                            <li>• Funcionalidade dos sistemas de alerta</li>
                            <li>• Condições dos abrigos emergenciais</li>
                            <li>• Capacitação efetiva das equipes</li>
                          </ul>
                        </div>

                        <div className="bg-white p-2 rounded">
                          <strong className="text-green-900">📋 Termos de Ajustamento de Conduta (TAC):</strong>
                          <p className="mt-1">Para municípios omissos ou com planos deficientes:</p>
                          <ul className="ml-4 mt-1 space-y-1">
                            <li>• Compromisso formal de elaboração do plano (prazo máximo: 6 meses)</li>
                            <li>• Cronograma detalhado de ações e investimentos</li>
                            <li>• Multas diárias em caso de descumprimento (R$ 1.000 a R$ 10.000/dia)</li>
                            <li>• Acompanhamento mensal pelo MP</li>
                          </ul>
                        </div>

                        <div className="bg-white p-2 rounded">
                          <strong className="text-green-900">⚠️ Ações Civis Públicas:</strong>
                          <p className="mt-1">Em casos de recusa ou omissão grave:</p>
                          <ul className="ml-4 mt-1 space-y-1">
                            <li>• Responsabilização do gestor público por improbidade administrativa</li>
                            <li>• Bloqueio de repasses de recursos estaduais/federais</li>
                            <li>• Obrigação judicial de elaboração imediata do plano</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Apoio Técnico do MP-RS */}
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm text-yellow-900 mb-2">🤝 Apoio Técnico Oferecido pelo MP-RS</h5>
                      <div className="space-y-2 text-xs text-gray-700">
                        <p className="font-medium">O MP-RS não apenas fiscaliza, mas também APOIA os municípios:</p>
                        <div className="grid md:grid-cols-2 gap-2 mt-2">
                          <div className="bg-white p-2 rounded">
                            <strong>📚 Modelo de Plano Padrão</strong>
                            <p className="text-gray-600 mt-1">Template pronto para adaptação local</p>
                          </div>
                          <div className="bg-white p-2 rounded">
                            <strong>🎓 Capacitações Regionais</strong>
                            <p className="text-gray-600 mt-1">Cursos gratuitos para gestores e técnicos</p>
                          </div>
                          <div className="bg-white p-2 rounded">
                            <strong>👨‍🏫 Assessoria Técnica</strong>
                            <p className="text-gray-600 mt-1">Equipe multidisciplinar do CAOMA disponível</p>
                          </div>
                          <div className="bg-white p-2 rounded">
                            <strong>🗺️ Dados Geográficos</strong>
                            <p className="text-gray-600 mt-1">Mapeamentos e estudos técnicos compartilhados</p>
                          </div>
                          <div className="bg-white p-2 rounded">
                            <strong>💻 Plataforma Digital</strong>
                            <p className="text-gray-600 mt-1">Sistema online para elaboração colaborativa</p>
                          </div>
                          <div className="bg-white p-2 rounded">
                            <strong>📞 Canal de Dúvidas</strong>
                            <p className="text-gray-600 mt-1">Atendimento direto para esclarecimentos</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Resultados Alcançados */}
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-lg border-l-4 border-green-600">
                      <h5 className="font-semibold text-sm text-green-900 mb-2">📊 Resultados da Recomendação (Dados até Set/2025)</h5>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                        <div className="bg-white p-3 rounded-lg">
                          <div className="text-2xl font-bold text-green-700">312</div>
                          <div className="text-xs text-gray-600">Municípios com Plano Elaborado</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <div className="text-2xl font-bold text-blue-700">63%</div>
                          <div className="text-xs text-gray-600">Taxa de Cumprimento</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <div className="text-2xl font-bold text-orange-700">98</div>
                          <div className="text-xs text-gray-600">TACs Firmados</div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <div className="text-2xl font-bold text-purple-700">23</div>
                          <div className="text-xs text-gray-600">Ações Civis Públicas</div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-700 mt-3 text-center italic">
                        <strong>Meta:</strong> 100% dos municípios com Plano de Contingência até dez/2025
                      </p>
                    </div>
                  </div>
                </div>

                {/* Casos de Sucesso */}
                <div className="bg-white p-4 rounded-lg border border-purple-300 mt-3">
                  <h5 className="font-semibold text-sm text-purple-900 mb-3">🌟 Casos de Sucesso - Municípios Referência</h5>
                  <div className="space-y-2 text-xs">
                    <div className="bg-green-50 p-2 rounded">
                      <strong className="text-green-900">Porto Alegre:</strong> Plano integrado com sistema de alerta por SMS para 100 mil moradores de áreas de risco. Redução de 40% nas vítimas fatais em enchentes (2020-2024).
                    </div>
                    <div className="bg-blue-50 p-2 rounded">
                      <strong className="text-blue-900">Caxias do Sul:</strong> Simulado anual obrigatório em escolas. 15 mil alunos capacitados. Tempo de evacuação reduzido de 45min para 12min.
                    </div>
                    <div className="bg-yellow-50 p-2 rounded">
                      <strong className="text-yellow-900">Santa Maria:</strong> Comitê Permanente de Gestão de Riscos com reuniões mensais. Investimento de R$ 8 milhões em infraestrutura preventiva.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-3 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  5. Adaptação às Mudanças Climáticas
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  "As <strong>mudanças climáticas aumentaram a frequência e intensidade de eventos 
                  extremos</strong>. Os planos de contingência devem considerar cenários climáticos 
                  futuros, não apenas o histórico de desastres."
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Incorporar projeções climáticas regionais (IPCC, INPE)</li>
                  <li>• Planejar infraestrutura resiliente (drenagem, contenções)</li>
                  <li>• Estratégias de convivência com eventos recorrentes</li>
                  <li>• Educação climática para população e gestores</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CNMP - Conselho Nacional do Ministério Público */}
        <div className="mb-6">
          <div className="bg-white p-6 rounded-lg border-2 border-indigo-500 shadow-lg">
            <div className="flex items-start mb-4">
              <Shield className="h-8 w-8 text-indigo-700 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-indigo-900 mb-1">
                  Conselho Nacional do Ministério Público (CNMP)
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Resolução nº 54/2017 - Política Nacional de Fomento à Atuação Resolutiva do Ministério Público
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-900 mb-3">
                  📋 Diretrizes do CNMP para Gestão de Riscos de Desastres
                </h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <h5 className="font-semibold text-sm text-indigo-900 mb-1">
                      1. Atuação Resolutiva e Preventiva
                    </h5>
                    <p className="text-xs text-gray-700">
                      O MP deve priorizar soluções extrajudiciais e medidas preventivas, atuando 
                      <strong> antes da ocorrência de desastres</strong> por meio de recomendações, 
                      termos de ajustamento de conduta (TACs) e audiências públicas.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-lg">
                    <h5 className="font-semibold text-sm text-indigo-900 mb-1">
                      2. Fiscalização de Políticas Públicas
                    </h5>
                    <p className="text-xs text-gray-700">
                      Compete ao MP fiscalizar a <strong>elaboração e implementação de Planos de 
                      Contingência</strong>, bem como a aplicação dos recursos do Fundo Nacional de 
                      Defesa Civil (FUNCAP) e demais fundos estaduais e municipais.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-lg">
                    <h5 className="font-semibold text-sm text-indigo-900 mb-1">
                      3. Articulação Institucional
                    </h5>
                    <p className="text-xs text-gray-700">
                      Fomentar a <strong>criação de redes interinstitucionais</strong> permanentes 
                      para gestão de riscos, envolvendo Defesa Civil, Corpo de Bombeiros, Saúde, 
                      Assistência Social, Meio Ambiente e órgãos de controle.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-lg">
                    <h5 className="font-semibold text-sm text-indigo-900 mb-1">
                      4. Proteção de Grupos Vulneráveis
                    </h5>
                    <p className="text-xs text-gray-700">
                      Garantir que os planos de contingência contemplem <strong>medidas específicas 
                      para crianças, idosos, pessoas com deficiência, gestantes e população em 
                      situação de rua</strong>, assegurando acessibilidade e cuidados especiais.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-lg">
                    <h5 className="font-semibold text-sm text-indigo-900 mb-1">
                      5. Transparência e Participação Social
                    </h5>
                    <p className="text-xs text-gray-700">
                      Promover <strong>audiências públicas, consultas populares e divulgação 
                      ampla</strong> dos planos de contingência, garantindo o direito à informação 
                      e à participação da comunidade.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-lg">
                    <h5 className="font-semibold text-sm text-indigo-900 mb-1">
                      6. Monitoramento e Avaliação
                    </h5>
                    <p className="text-xs text-gray-700">
                      Estabelecer <strong>indicadores de desempenho</strong> e promover 
                      monitoramento contínuo da efetividade dos planos, com revisões periódicas 
                      baseadas em lições aprendidas de eventos anteriores.
                    </p>
                  </div>
                </div>
              </div>

              {/* NOVA SEÇÃO EXPANDIDA - Planos de Contingência em Profundidade */}
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg border-2 border-indigo-600">
                <h4 className="font-semibold text-indigo-900 mb-4 text-lg flex items-center">
                  <FileText className="h-6 w-6 mr-2" />
                  Planos de Contingência: Abordagem Detalhada do CNMP
                </h4>

                {/* Marco Legal Nacional */}
                <div className="bg-white p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-indigo-900 mb-3">⚖️ Marco Legal Nacional</h5>
                  <div className="space-y-2">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-indigo-900 mb-1">
                        Lei Federal nº 12.608/2012 (Política Nacional de Proteção e Defesa Civil)
                      </p>
                      <p className="text-xs text-gray-700">
                        <strong>Art. 7º:</strong> Todos os municípios com áreas de risco mapeadas devem elaborar 
                        Planos de Contingência e realizar simulados de evacuação. A inexistência do plano 
                        <strong> impede o recebimento de recursos federais</strong> para ações de resposta e reconstrução.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-blue-900 mb-1">
                        Instrução Normativa nº 02/2016 do Ministério da Integração Nacional
                      </p>
                      <p className="text-xs text-gray-700">
                        Define os <strong>requisitos mínimos obrigatórios</strong> para elaboração de Planos de Contingência, 
                        incluindo estrutura, conteúdo, responsabilidades e procedimentos de atualização.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-purple-900 mb-1">
                        Portaria MI nº 1.190/2018 - Cadastro Nacional de Municípios com Áreas Suscetíveis
                      </p>
                      <p className="text-xs text-gray-700">
                        Relaciona <strong>1.942 municípios brasileiros</strong> com áreas de alto risco que devem 
                        obrigatoriamente ter Planos de Contingência atualizados.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recomendações Específicas do CNMP */}
                <div className="bg-white p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-indigo-900 mb-3">📢 Recomendações CNMP aos Ministérios Públicos Estaduais</h5>
                  <div className="space-y-3">
                    <div className="border-l-4 border-indigo-600 bg-indigo-50 p-3 rounded">
                      <p className="text-xs font-bold text-indigo-900 mb-2">
                        RECOMENDAÇÃO Nº 01/2019 - Planos de Contingência Municipais
                      </p>
                      <div className="space-y-2 text-xs text-gray-700">
                        <p><strong>Destinatários:</strong> Todos os Procuradores-Gerais de Justiça dos 26 estados + DF</p>
                        <p><strong>Objeto:</strong> Adoção de medidas para garantir que todos os municípios em áreas de risco elaborem Planos de Contingência</p>
                        
                        <div className="bg-white p-2 rounded mt-2">
                          <p className="font-semibold text-indigo-900 mb-1">Medidas Recomendadas:</p>
                          <ul className="ml-4 space-y-1">
                            <li>• Expedição de <strong>ofícios circulares</strong> a todas as Promotorias de Justiça</li>
                            <li>• Criação de <strong>força-tarefa estadual</strong> para fiscalização coordenada</li>
                            <li>• Requisição de informações às <strong>1.942 prefeituras</strong> em áreas de risco</li>
                            <li>• Estabelecimento de <strong>prazos máximos</strong> para elaboração (6 meses)</li>
                            <li>• Instauração de <strong>Inquéritos Civis</strong> em caso de omissão</li>
                            <li>• Celebração de <strong>TACs</strong> com cronogramas e metas claras</li>
                            <li>• Ajuizamento de <strong>Ações Civis Públicas</strong> contra gestores omissos</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-purple-600 bg-purple-50 p-3 rounded">
                      <p className="text-xs font-bold text-purple-900 mb-2">
                        RECOMENDAÇÃO Nº 02/2020 - Conteúdo Mínimo dos Planos
                      </p>
                      <div className="grid md:grid-cols-2 gap-2 mt-2">
                        <div className="bg-white p-2 rounded text-xs">
                          <strong className="text-purple-900">1. Cenários de Risco</strong>
                          <p className="text-gray-600 mt-1">Mapas, áreas vulneráveis, população exposta, histórico</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong className="text-purple-900">2. Estrutura de Comando</strong>
                          <p className="text-gray-600 mt-1">COE, fluxograma, responsabilidades, contatos 24h</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong className="text-purple-900">3. Sistema de Alerta</strong>
                          <p className="text-gray-600 mt-1">Monitoramento, limiares, canais de comunicação</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong className="text-purple-900">4. Procedimentos de Resposta</strong>
                          <p className="text-gray-600 mt-1">Evacuação, busca e salvamento, abrigos, assistência</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong className="text-purple-900">5. Recursos Disponíveis</strong>
                          <p className="text-gray-600 mt-1">Humanos, materiais, financeiros, parcerias</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong className="text-purple-900">6. Logística e Suprimentos</strong>
                          <p className="text-gray-600 mt-1">Armazenamento, distribuição, transporte</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong className="text-purple-900">7. Comunicação de Risco</strong>
                          <p className="text-gray-600 mt-1">Estratégia de informação à população</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong className="text-purple-900">8. Grupos Vulneráveis</strong>
                          <p className="text-gray-600 mt-1">Protocolos específicos para crianças, idosos, PcD</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong className="text-purple-900">9. Ações de Recuperação</strong>
                          <p className="text-gray-600 mt-1">Reconstrução, restabelecimento de serviços</p>
                        </div>
                        <div className="bg-white p-2 rounded text-xs">
                          <strong className="text-purple-900">10. Cronograma de Simulados</strong>
                          <p className="text-gray-600 mt-1">Exercícios periódicos e avaliação de desempenho</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-600 bg-green-50 p-3 rounded">
                      <p className="text-xs font-bold text-green-900 mb-2">
                        RECOMENDAÇÃO Nº 03/2022 - Atualização Periódica Obrigatória
                      </p>
                      <div className="bg-white p-2 rounded mt-2">
                        <ul className="text-xs text-gray-700 space-y-1 ml-4">
                          <li>• Planos devem ser <strong>revisados anualmente</strong></li>
                          <li>• Atualização <strong>imediata</strong> após cada evento de desastre</li>
                          <li>• Incorporação de <strong>lições aprendidas</strong> de simulados</li>
                          <li>• Adequação às <strong>mudanças climáticas</strong> e novos cenários</li>
                          <li>• Consulta pública para <strong>validação</strong> das alterações</li>
                          <li>• Publicação oficial e <strong>divulgação ampla</strong> da versão atualizada</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instrumentos de Atuação do MP */}
                <div className="bg-white p-4 rounded-lg mb-4">
                  <h5 className="font-semibold text-indigo-900 mb-3">🔨 Instrumentos de Atuação do MP</h5>
                  <div className="space-y-2">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h6 className="font-semibold text-sm text-blue-900 mb-2">1. Recomendação Ministerial (Extrajudicial)</h6>
                      <p className="text-xs text-gray-700 mb-2">
                        <strong>Natureza:</strong> Instrumento de prevenção e diálogo institucional
                      </p>
                      <div className="bg-white p-2 rounded text-xs">
                        <strong>Conteúdo típico:</strong>
                        <ul className="ml-4 mt-1 space-y-1 text-gray-600">
                          <li>• Diagnóstico da situação de risco identificada</li>
                          <li>• Fundamentação legal (Lei 12.608/12, Instrução Normativa)</li>
                          <li>• <strong>Prazo para elaboração</strong> do Plano (180 dias)</li>
                          <li>• Orientações técnicas e modelo de referência</li>
                          <li>• Consequências jurídicas da omissão</li>
                          <li>• Prazo para resposta formal (30 dias)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg">
                      <h6 className="font-semibold text-sm text-green-900 mb-2">2. Inquérito Civil</h6>
                      <p className="text-xs text-gray-700 mb-2">
                        Instaurado quando há <strong>omissão persistente</strong> ou <strong>plano inadequado</strong>
                      </p>
                      <div className="bg-white p-2 rounded text-xs">
                        <strong>Diligências típicas:</strong>
                        <ul className="ml-4 mt-1 space-y-1 text-gray-600">
                          <li>• Requisição de documentos (mapas, estudos, cronogramas)</li>
                          <li>• Inspeção in loco nas áreas de risco</li>
                          <li>• Oitiva de técnicos da Defesa Civil</li>
                          <li>• Perícias técnicas (geólogos, engenheiros)</li>
                          <li>• Audiências públicas para participação social</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <h6 className="font-semibold text-sm text-yellow-900 mb-2">3. Termo de Ajustamento de Conduta (TAC)</h6>
                      <p className="text-xs text-gray-700 mb-2">
                        Acordo extrajudicial com força de título executivo
                      </p>
                      <div className="bg-white p-2 rounded text-xs">
                        <strong>Cláusulas essenciais:</strong>
                        <ul className="ml-4 mt-1 space-y-1 text-gray-600">
                          <li>• <strong>Obrigação de fazer:</strong> Elaborar o Plano em até 6 meses</li>
                          <li>• <strong>Etapas:</strong> Diagnóstico (60 dias), Minuta (90 dias), Consulta Pública (30 dias)</li>
                          <li>• <strong>Orçamento:</strong> Destinação de recursos específicos</li>
                          <li>• <strong>Multa diária:</strong> R$ 5.000 a R$ 50.000 por descumprimento</li>
                          <li>• <strong>Prestação de contas:</strong> Relatórios mensais ao MP</li>
                          <li>• <strong>Revisão anual:</strong> Compromisso de atualização</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 p-3 rounded-lg">
                      <h6 className="font-semibold text-sm text-red-900 mb-2">4. Ação Civil Pública</h6>
                      <p className="text-xs text-gray-700 mb-2">
                        Medida judicial quando há <strong>recusa injustificada</strong> ou <strong>descumprimento de TAC</strong>
                      </p>
                      <div className="bg-white p-2 rounded text-xs">
                        <strong>Pedidos típicos:</strong>
                        <ul className="ml-4 mt-1 space-y-1 text-gray-600">
                          <li>• Obrigação de fazer: Elaborar Plano em 180 dias (tutela antecipada)</li>
                          <li>• Bloqueio de recursos: Impedir repasses sem o Plano</li>
                          <li>• Multa diária: R$ 10.000 a R$ 100.000</li>
                          <li>• Responsabilização pessoal: Ação de improbidade contra gestor</li>
                          <li>• Nomeação de curador: Elaboração por técnico externo às custas da prefeitura</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Indicadores de Qualidade */}
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-indigo-900 mb-3">📊 Indicadores de Qualidade do Plano (Checklist CNMP)</h5>
                  <div className="grid md:grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-50 p-2 rounded">
                      ✅ Aprovado em audiência pública
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      ✅ Atualizado nos últimos 12 meses
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      ✅ Contém mapas georreferenciados
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      ✅ Define responsáveis nominalmente
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      ✅ Tem cronograma de simulados
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      ✅ Contempla grupos vulneráveis
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      ✅ Integrado com sistema estadual
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      ✅ Disponível online para população
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600">
                <h4 className="font-semibold text-indigo-900 mb-2">
                  🎯 Recomendação Prática do CNMP
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  O CNMP recomenda que <strong>cada Promotoria de Justiça</strong> com atribuição 
                  em meio ambiente, urbanismo ou direitos coletivos:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>✓ Realize <strong>diagnóstico anual</strong> das áreas de risco em sua comarca</li>
                  <li>✓ Verifique a existência e atualização do <strong>Plano de Contingência municipal</strong></li>
                  <li>✓ Promova <strong>reuniões semestrais</strong> com gestores da Defesa Civil e demais órgãos</li>
                  <li>✓ Requisite realização de <strong>simulados</strong> ao menos uma vez por ano</li>
                  <li>✓ Acompanhe a aplicação de <strong>recursos federais e estaduais</strong> destinados à prevenção</li>
                  <li>✓ Elabore <strong>recomendações preventivas</strong> antes do período de maior risco (verão/inverno)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Referências e Contatos */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <Phone className="h-6 w-6 text-gray-600 mr-2" />
            Referências e Contatos Úteis
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-green-900 mb-2">MP-RS - Centro de Apoio Operacional de Defesa do Meio Ambiente</h4>
              <p className="text-xs text-gray-600 mb-2">
                <Mail className="inline h-3 w-3 mr-1" />
                <a href="mailto:caoma@mprs.mp.br" className="text-blue-600 hover:underline">caoma@mprs.mp.br</a>
              </p>
              <p className="text-xs text-gray-600 mb-2">
                <Phone className="inline h-3 w-3 mr-1" />
                (51) 3295-1100
              </p>
              <p className="text-xs text-gray-600">
                <strong>Dra. Silvia Cappelli:</strong> Procuradora de Justiça coordenadora
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-indigo-900 mb-2">CNMP - Conselho Nacional do Ministério Público</h4>
              <p className="text-xs text-gray-600 mb-2">
                <Mail className="inline h-3 w-3 mr-1" />
                <a href="mailto:cnmp@cnmp.mp.br" className="text-blue-600 hover:underline">cnmp@cnmp.mp.br</a>
              </p>
              <p className="text-xs text-gray-600 mb-2">
                <Phone className="inline h-3 w-3 mr-1" />
                (61) 3315-9100
              </p>
              <p className="text-xs text-gray-600">
                <strong>Resolução nº 54/2017</strong> - Política Resolutiva do MP
              </p>
            </div>
          </div>

          <div className="mt-4 bg-blue-50 p-3 rounded-lg">
            <p className="text-xs text-gray-700">
              <strong>📚 Materiais de Referência:</strong>
            </p>
            <ul className="text-xs text-gray-600 space-y-1 mt-2 ml-4">
              <li>• Guia de Atuação do MP em Desastres - CNMP (2024)</li>
              <li>• Manual de Gestão de Riscos - MP-RS (2023)</li>
              <li>• Protocolo de Emergências Ambientais - MP-RS (2022)</li>
              <li>• Cartilha de Defesa Civil para Promotores - CNMP (2021)</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
