import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2, Trash2, ThumbsUp, ThumbsDown, Copy, Sparkles } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  suggestions?: string[]
  feedback?: 'positive' | 'negative' | null
  copied?: boolean
}

interface KnowledgeBase {
  keywords: string[]
  response: string
  links?: { text: string; path: string }[]
  relatedQuestions?: string[]
  category?: string
  priority?: number
  synonyms?: string[]
  suggestions?: string[]
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [conversationContext, setConversationContext] = useState<string[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Base de conhecimento completa
  const knowledgeBase: KnowledgeBase[] = [
    {
      keywords: ['olá', 'oi', 'ola', 'bom dia', 'boa tarde', 'boa noite', 'hey', 'hello'],
      response: 'Olá! Bem-vindo ao DHS Guide! 👋\n\nSou seu assistente virtual e estou aqui para ajudá-lo a entender o Desenvolvimento Harmônico e Sustentável.\n\nPosso responder perguntas sobre todos os temas do site!',
      category: 'saudação',
      priority: 10,
      suggestions: ['O que é DHS?', 'Como implementar?', 'Plano de Contingência', 'Primeira Infância']
    },
    {
      keywords: ['o que é dhs', 'dhs', 'desenvolvimento harmônico', 'conceito dhs', 'definição dhs'],
      response: 'O **Desenvolvimento Harmônico e Sustentável (DHS)** é um novo paradigma que busca o equilíbrio entre três eixos fundamentais:\n\n🌱 **Social** - bem-estar e inclusão\n💰 **Econômico** - prosperidade compartilhada\n🌍 **Ambiental** - preservação e sustentabilidade\n\nDiferente do modelo atual que prioriza apenas o crescimento econômico, o DHS promove uma visão sistêmica e integrada do desenvolvimento.',
      category: 'conceitos',
      priority: 10,
      links: [
        { text: 'Ver mais sobre Soluções', path: '/solucoes' },
        { text: 'Entender o Diagnóstico', path: '/diagnostico' }
      ],
      relatedQuestions: ['Como implementar o DHS?', 'Quais são as metodologias?']
    },
    {
      keywords: ['convergência estrutural', 'convergencia', 'alinhamento'],
      response: '**Convergência Estrutural** é o mecanismo pelo qual diferentes setores (público, privado e sociedade civil) alinham suas ações para objetivos comuns.\n\n📋 Envolve:\n• Planejamento integrado\n• Orçamento alinhado\n• Indicadores compartilhados\n• Fiscalização coordenada\n• Incentivos compatíveis',
      category: 'conceitos',
      priority: 9,
      links: [{ text: 'Ver Matriz de Convergência', path: '/implementacao' }]
    },
    {
      keywords: ['plancon', 'plano contingência', 'defesa civil', 'desastres'],
      response: '**Plano de Contingência (PLANCON)** é obrigatório para municípios em área de risco.\n\n🛡️ **Elementos:**\n• Mapeamento de riscos\n• Sistema de alerta\n• Rotas de evacuação\n• Abrigos\n• COMDEC e NUPDECs',
      category: 'plancon',
      priority: 9,
      links: [{ text: 'Ver Guia PLANCON', path: '/plano-contingencia' }],
      relatedQuestions: ['Quais são os passos para fazer um PLANCON?', 'O que são NUPDECs?']
    },
    {
      keywords: ['passos plancon', 'como fazer plancon', 'elaborar plancon', 'etapas plancon', 'passos para fazer plano', 'passo a passo plancon', 'passos plano contingência', 'passos plano de contingência', 'quais são os passos', 'fazer plano contingência', 'fazer um plano de contingência'],
      synonyms: ['quais passos', 'quais etapas', 'passo a passo', 'procedimento', 'roteiro', 'metodologia plancon', 'etapas plano', 'como elaborar'],
      response: '**Passos Detalhados para Elaborar um PLANCON:**\n\n📋 **PASSO 1: DIAGNÓSTICO INICIAL**\n   ✓ Identificar áreas de risco (enchentes, deslizamentos, etc.)\n   ✓ Mapear população vulnerável\n   ✓ Levantar histórico de desastres\n   ✓ Consultar órgãos técnicos (Defesa Civil estadual, CEMADEN)\n\n🗺️ **PASSO 2: MAPEAMENTO TÉCNICO**\n   ✓ Elaborar cartografia detalhada de riscos\n   ✓ Definir rotas de evacuação seguras\n   ✓ Identificar pontos de encontro\n   ✓ Mapear abrigos temporários disponíveis\n\n👥 **PASSO 3: ESTRUTURAÇÃO ORGANIZACIONAL**\n   ✓ Criar/fortalecer COMDEC (Coordenadoria Municipal de Defesa Civil)\n   ✓ Formar NUPDECs nas comunidades em risco\n   ✓ Estabelecer hierarquia de comando\n   ✓ Definir responsabilidades de cada órgão\n\n📡 **PASSO 4: SISTEMA DE ALERTA**\n   ✓ Instalar pluviômetros e sensores\n   ✓ Criar protocolos de comunicação\n   ✓ Cadastrar sirenes e alto-falantes\n   ✓ Integrar com sistemas nacionais (CEMADEN)\n\n🏃 **PASSO 5: PROCEDIMENTOS OPERACIONAIS**\n   ✓ Redigir roteiros de evacuação\n   ✓ Estabelecer gestão de abrigos\n   ✓ Protocolar distribuição de suprimentos\n   ✓ Definir critérios de retorno seguro\n\n🎓 **PASSO 6: CAPACITAÇÃO**\n   ✓ Treinar agentes de Defesa Civil\n   ✓ Capacitar voluntários NUPDECs\n   ✓ Realizar simulados com comunidade\n   ✓ Educar sobre cultura preventiva\n\n📊 **PASSO 7: DOCUMENTAÇÃO FORMAL**\n   ✓ Consolidar documento oficial do PLANCON\n   ✓ Aprovar em decreto municipal\n   ✓ Divulgar à população\n   ✓ Distribuir cartilhas educativas\n\n🔄 **PASSO 8: MONITORAMENTO E ATUALIZAÇÃO**\n   ✓ Revisar anualmente o plano\n   ✓ Atualizar após cada evento\n   ✓ Incorporar novas tecnologias\n   ✓ Avaliar eficácia dos procedimentos',
      category: 'plancon',
      priority: 10,
      links: [{ text: 'Ver Guia Detalhado PLANCON', path: '/plano-contingencia' }],
      suggestions: ['O que são NUPDECs?', 'Como criar COMDEC?', 'Sistema de alerta']
    },
    {
      keywords: ['nupdec', 'nudec', 'núcleos comunitários', 'como criar nupdec', 'formar nupdec'],
      synonyms: ['criar nudec', 'organizar nupdec', 'montar núcleo comunitário'],
      response: '**NUPDECs** (Núcleos Comunitários de Proteção e Defesa Civil)\n\n**O QUE SÃO:**\nGrupos de voluntários da própria comunidade treinados para atuar na prevenção e resposta a desastres.\n\n👥 **COMO CRIAR UM NUPDEC:**\n\n1️⃣ **MOBILIZAÇÃO:**\n   ✓ Identificar lideranças comunitárias\n   ✓ Realizar reuniões com moradores\n   ✓ Explicar importância da atuação preventiva\n\n2️⃣ **SELEÇÃO DE VOLUNTÁRIOS:**\n   ✓ Recrutar moradores comprometidos\n   ✓ Formar grupo de 10-20 pessoas\n   ✓ Incluir perfis diversos (jovens, idosos, profissionais)\n\n3️⃣ **CAPACITAÇÃO:**\n   ✓ Treinamento em Defesa Civil\n   ✓ Primeiros socorros\n   ✓ Leitura de sinais de risco\n   ✓ Protocolos de comunicação\n\n4️⃣ **ESTRUTURAÇÃO:**\n   ✓ Definir coordenador local\n   ✓ Estabelecer reuniões periódicas\n   ✓ Criar canal de comunicação (WhatsApp, rádio)\n\n5️⃣ **ATUAÇÃO:**\n   ✓ Monitoramento diário de riscos\n   ✓ Educação preventiva casa a casa\n   ✓ Acionamento em emergências\n   ✓ Apoio à evacuação',
      category: 'plancon',
      priority: 9,
      links: [{ text: 'Ver PLANCON completo', path: '/plano-contingencia' }],
      suggestions: ['Passos para fazer PLANCON', 'Como criar COMDEC?', 'Sistema de alerta']
    },
    {
      keywords: ['primeira infância', 'educação infantil', 'creche'],
      response: '**Primeira Infância e Educação Infantil** (0-6 anos) são prioridades absolutas.\n\n🎯 **Questões:**\n• Déficit de vagas em creches\n• Qualidade (DONQEEI)\n• Financiamento (FUNDEB)',
      category: 'educação',
      priority: 9,
      links: [{ text: 'Ver página completa', path: '/primeira-infancia' }],
      relatedQuestions: ['Como expandir vagas?', 'O que é DONQEEI?']
    },
    {
      keywords: ['expandir vagas', 'ampliar creche', 'aumentar vagas', 'como expandir educação infantil', 'passos educação infantil'],
      synonyms: ['ampliar vagas', 'criar mais vagas', 'expandir creches', 'aumentar oferta'],
      response: '**Passos Detalhados para Expandir Vagas na Educação Infantil:**\n\n📊 **PASSO 1: DIAGNÓSTICO DA DEMANDA**\n   ✓ Levantar demanda real por vagas (0-3 e 4-5 anos)\n   ✓ Mapear distribuição geográfica da demanda\n   ✓ Identificar fila de espera por região\n   ✓ Projetar crescimento populacional\n\n💰 **PASSO 2: PLANEJAMENTO ORÇAMENTÁRIO**\n   ✓ Calcular custo aluno/ano\n   ✓ Identificar recursos do FUNDEB\n   ✓ Buscar convênios estaduais/federais\n   ✓ Planejar investimento em infraestrutura\n\n🏗️ **PASSO 3: INFRAESTRUTURA**\n   ✓ Construir novas unidades em áreas prioritárias\n   ✓ Reformar/adequar espaços existentes\n   ✓ Garantir acessibilidade e segurança\n   ✓ Equipar com materiais pedagógicos\n\n👥 **PASSO 4: RECURSOS HUMANOS**\n   ✓ Realizar concurso para professores e auxiliares\n   ✓ Capacitar equipe em Educação Infantil\n   ✓ Garantir formação continuada\n   ✓ Estabelecer plano de carreira atrativo\n\n🤝 **PASSO 5: CONVERGÊNCIA ESTRUTURAL**\n   ✓ Alinhar Secretarias de Educação, Saúde e Assistência\n   ✓ Integrar sistemas de matrícula\n   ✓ Unificar critérios de priorização\n   ✓ Promover intersetorialidade\n\n📋 **PASSO 6: GESTÃO DE FILA E MATRÍCULA**\n   ✓ Implementar sistema transparente de fila\n   ✓ Estabelecer critérios objetivos de prioridade\n   ✓ Automatizar processo de matrícula\n   ✓ Comunicar famílias sobre vagas disponíveis\n\n📈 **PASSO 7: MONITORAMENTO E QUALIDADE**\n   ✓ Acompanhar indicadores de frequência\n   ✓ Avaliar qualidade com DONQEEI ou similar\n   ✓ Realizar vistorias regulares\n   ✓ Ajustar estratégias conforme resultados',
      category: 'educação',
      priority: 9,
      links: [{ text: 'Ver Guia Primeira Infância', path: '/primeira-infancia' }],
      suggestions: ['O que é FUNDEB?', 'O que é DONQEEI?', 'Como implementar DHS?']
    },
    {
      keywords: ['violência', 'eca', 'estatuto criança', 'abuso'],
      response: '**Violência contra Crianças** é grave violação de direitos.\n\n📞 **Denuncie:** Disque 100 ou Conselho Tutelar\n\n⚠️ Tipos: física, psicológica, sexual, negligência',
      category: 'proteção',
      priority: 9,
      links: [{ text: 'Conhecer o ECA', path: '/violencia-eca' }]
    },
    {
      keywords: ['crime organizado', 'facções', 'tráfico'],
      response: '**Combate ao Crime Organizado** exige atuação sistêmica.\n\n🎯 Frentes: investigação, repressão, prevenção, lavagem de dinheiro\n\n⚖️ Leis 12.850/2013 e 12.694/2012',
      category: 'segurança',
      priority: 8,
      links: [{ text: 'Saber mais', path: '/organizacoes-criminosas' }]
    },
    {
      keywords: ['como implementar', 'implementação', 'passo a passo', 'passos implementação dhs', 'como aplicar dhs'],
      synonyms: ['implementar dhs', 'aplicar dhs', 'colocar em prática', 'executar dhs'],
      response: '**Passos Detalhados para Implementar o DHS:**\n\n🎯 **PASSO 1: ESCOLHER FOCO PRIORITÁRIO**\n   ✓ Analisar urgências do município/região\n   ✓ Consultar indicadores sociais\n   ✓ Ouvir comunidade sobre necessidades\n   ✓ Selecionar tema inicial (ex: Educação Infantil, PLANCON)\n\n📊 **PASSO 2: MAPEAR NECESSIDADES ESPECÍFICAS**\n   ✓ Coletar dados quantitativos e qualitativos\n   ✓ Identificar gaps e deficiências\n   ✓ Mapear recursos existentes\n   ✓ Definir metas mensuráveis\n\n🤝 **PASSO 3: PROMOVER CONVERGÊNCIA ESTRUTURAL**\n   Execute as **13 atividades da Matriz de Convergência**:\n\n   **PLANEJAMENTO:**\n   1. Definir objetivos comuns\n   2. Estabelecer metas integradas\n   3. Alinhar prazos entre órgãos\n\n   **ORÇAMENTO:**\n   4. Mapear recursos disponíveis\n   5. Alocar orçamento coordenado\n   6. Garantir transparência financeira\n\n   **INDICADORES:**\n   7. Definir métricas compartilhadas\n   8. Implementar sistema de monitoramento\n   9. Avaliar resultados periodicamente\n\n   **FISCALIZAÇÃO:**\n   10. Estabelecer protocolo de auditoria\n   11. Realizar inspeções conjuntas\n   12. Corrigir desvios rapidamente\n\n   **INCENTIVOS:**\n   13. Criar estímulos para convergência\n\n💡 **PASSO 4: ARTICULAR SETORES**\n   ✓ Envolver Poder Público (Executivo, Legislativo, Judiciário)\n   ✓ Mobilizar setor privado e terceiro setor\n   ✓ Engajar sociedade civil organizada\n   ✓ Criar grupos de trabalho intersetoriais\n\n📝 **PASSO 5: FORMALIZAR COMPROMISSOS**\n   ✓ Elaborar termos de cooperação\n   ✓ Firmar pactos institucionais\n   ✓ Publicizar responsabilidades\n   ✓ Estabelecer governança compartilhada\n\n📈 **PASSO 6: EXECUTAR E MONITORAR**\n   ✓ Implementar ações de forma coordenada\n   ✓ Acompanhar indicadores em tempo real\n   ✓ Realizar reuniões periódicas de ajuste\n   ✓ Comunicar progresso à população\n\n🔄 **PASSO 7: AVALIAR E EXPANDIR**\n   ✓ Medir impacto nos 3 eixos (Social, Econômico, Ambiental)\n   ✓ Documentar aprendizados\n   ✓ Replicar boas práticas\n   ✓ Expandir para novos temas prioritários',
      category: 'implementação',
      priority: 10,
      links: [{ text: 'Ver Matriz de Convergência', path: '/implementacao' }],
      suggestions: ['O que é convergência estrutural?', 'Ver metodologias', 'Usar calculadora DHS']
    },
    {
      keywords: ['metodologias', 'pgs', 'nmc', 'quais metodologias', 'ferramentas dhs'],
      synonyms: ['métodos', 'instrumentos', 'técnicas', 'abordagens'],
      response: '**Metodologias e Ferramentas do DHS:**\n\n🎯 **1. ATUAÇÕES RESOLUTIVAS**\n   Foco em resolver causas raízes, não apenas sintomas\n   • Análise sistêmica de problemas\n   • Intervenções estruturais\n\n📋 **2. PGS (Planejamento e Gestão Sistêmicos)**\n   Metodologia para projetos complexos\n   • Visão de longo prazo\n   • Integração de atores\n   • Monitoramento contínuo\n\n🔄 **3. MATRIZ DE CONVERGÊNCIA**\n   Ferramenta com 13 atividades em 5 eixos:\n   • Planejamento\n   • Orçamento\n   • Indicadores\n   • Fiscalização\n   • Incentivos\n\n💬 **4. NMC (Comunicação Não-Violenta)**\n   Facilita diálogo e resolução de conflitos\n   • Observação sem julgamento\n   • Expressão de sentimentos\n   • Identificação de necessidades\n   • Formulação de pedidos claros\n\n⚖️ **5. RECOMENDAÇÃO CNMP 54/2017**\n   Diretrizes para atuação resolutiva do MP\n   • Planejamento estratégico\n   • Cooperação institucional\n   • Priorização de temas\n\n📊 **6. CALCULADORA DHS**\n   Avalia equilíbrio entre eixos Social, Econômico e Ambiental',
      category: 'metodologias',
      priority: 9,
      links: [
        { text: 'Ver Metodologias Detalhadas', path: '/metodologias' },
        { text: 'Usar Calculadora', path: '/calculadora' }
      ],
      suggestions: ['O que é PGS?', 'Como usar Matriz de Convergência?', 'O que é NMC?']
    },
    {
      keywords: ['calculadora', 'avaliar', 'medir impacto'],
      response: '**Calculadora DHS** avalia projetos nos três eixos:\n\n📊 Social, Econômico e Ambiental\n\nGera resultado visual do equilíbrio.',
      category: 'ferramentas',
      priority: 7,
      links: [{ text: 'Usar Calculadora', path: '/calculadora' }]
    },
    {
      keywords: ['ajuda', 'help', 'não entendi', 'dúvida'],
      response: 'Posso ajudar com:\n\n📚 Conceitos (DHS, Convergência, PGS)\n🛠️ Implementação\n📋 Temas (Educação, PLANCON, Violência, Crime)\n⚖️ Instrumentos jurídicos\n\nFaça uma pergunta específica!',
      category: 'ajuda',
      priority: 8,
      suggestions: ['O que é DHS?', 'Como fazer PLANCON?', 'Educação Infantil', 'Metodologias']
    },
    {
      keywords: ['obrigado', 'obrigada', 'valeu', 'agradeço'],
      response: 'Por nada! 😊 Fico feliz em ajudar!\n\nSe tiver mais dúvidas sobre o DHS, estou à disposição.',
      category: 'cortesia',
      priority: 5,
      suggestions: ['Explorar outro tema', 'Ver todos os recursos']
    },
    {
      keywords: ['fundeb', 'financiamento educação', 'recursos educação'],
      synonyms: ['fundo educação', 'verba educação'],
      response: '**FUNDEB** (Fundo de Manutenção e Desenvolvimento da Educação Básica)\n\n💰 **O QUE É:**\nFundo constitucional que redistribui recursos para educação básica.\n\n📊 **COMPOSIÇÃO:**\n   • 20% de impostos estaduais e municipais\n   • Complementação da União (mínimo 23%)\n   • Distribuição por número de matrículas\n\n🎯 **APLICAÇÃO:**\n   • 70% em remuneração de profissionais\n   • 30% em outras despesas educacionais\n\n✅ **BENEFÍCIOS PARA EDUCAÇÃO INFANTIL:**\n   • Ponderação diferenciada para creche\n   • Incentivo à expansão de vagas\n   • Custeio de pessoal e infraestrutura',
      category: 'educação',
      priority: 8,
      links: [{ text: 'Ver Primeira Infância', path: '/primeira-infancia' }],
      suggestions: ['Como expandir vagas?', 'O que é DONQEEI?']
    },
    {
      keywords: ['donqeei', 'qualidade educação infantil', 'avaliação creche'],
      synonyms: ['indicadores qualidade', 'avaliar creche'],
      response: '**DONQEEI** (Documentação de Observação e Avaliação da Qualidade na Educação Infantil)\n\n📋 **O QUE É:**\nInstrumento para avaliar qualidade em creches e pré-escolas.\n\n🔍 **DIMENSÕES AVALIADAS:**\n   1️⃣ Espaço físico e materiais\n   2️⃣ Rotinas de cuidado pessoal\n   3️⃣ Linguagem e raciocínio\n   4️⃣ Atividades e interações\n   5️⃣ Estrutura do programa\n   6️⃣ Pais e equipe\n\n⭐ **NÍVEIS DE QUALIDADE:**\n   • Inadequado (1-2)\n   • Mínimo (3-4)\n   • Bom (5-6)\n   • Excelente (7)\n\n✅ **BENEFÍCIOS:**\n   • Diagnóstico objetivo da qualidade\n   • Identificação de melhorias necessárias\n   • Monitoramento de progresso',
      category: 'educação',
      priority: 7,
      links: [{ text: 'Ver Primeira Infância', path: '/primeira-infancia' }]
    },
    {
      keywords: ['comdec', 'coordenadoria defesa civil', 'criar comdec', 'como criar comdec'],
      synonyms: ['formar comdec', 'estruturar defesa civil'],
      response: '**COMDEC** (Coordenadoria Municipal de Defesa Civil)\n\n🏛️ **O QUE É:**\nÓrgão municipal responsável por ações de Defesa Civil.\n\n📋 **COMO CRIAR:**\n\n1️⃣ **BASE LEGAL:**\n   ✓ Elaborar projeto de lei criando a COMDEC\n   ✓ Aprovação pela Câmara Municipal\n   ✓ Sanção do Prefeito\n\n2️⃣ **ESTRUTURAÇÃO:**\n   ✓ Nomear coordenador\n   ✓ Definir equipe técnica\n   ✓ Estabelecer sede e recursos\n\n3️⃣ **CAPACITAÇÃO:**\n   ✓ Treinar equipe em Defesa Civil\n   ✓ Articular com Defesa Civil estadual\n   ✓ Participar de cursos da CENAD\n\n4️⃣ **ATUAÇÃO:**\n   ✓ Elaborar PLANCON\n   ✓ Formar NUPDECs\n   ✓ Implementar sistema de alerta\n   ✓ Coordenar respostas a emergências',
      category: 'plancon',
      priority: 8,
      links: [{ text: 'Ver PLANCON', path: '/plano-contingencia' }],
      suggestions: ['Passos para fazer PLANCON', 'Como criar NUPDEC?']
    },
    {
      keywords: ['matriz convergência', 'como usar matriz', '13 atividades', 'eixos convergência', 'etapas matriz convergência', 'quais etapas matriz', 'etapas da matriz', 'atividades matriz convergência'],
      synonyms: ['aplicar matriz', 'implementar matriz', 'passos matriz', 'fases matriz'],
      response: '**Matriz de Convergência Estrutural - 5 Eixos e 13 Atividades:**\n\n📋 **EIXO 1: PLANEJAMENTO (3 atividades)**\n   1. Definir objetivos comuns entre instituições\n   2. Estabelecer metas integradas e compartilhadas\n   3. Alinhar prazos e cronogramas\n\n💰 **EIXO 2: ORÇAMENTO (3 atividades)**\n   4. Mapear recursos disponíveis em cada setor\n   5. Alocar orçamento de forma coordenada\n   6. Garantir transparência financeira\n\n📊 **EIXO 3: INDICADORES (3 atividades)**\n   7. Definir métricas compartilhadas de sucesso\n   8. Implementar sistema de monitoramento conjunto\n   9. Avaliar resultados periodicamente\n\n🔍 **EIXO 4: FISCALIZAÇÃO (3 atividades)**\n   10. Estabelecer protocolo de auditoria integrada\n   11. Realizar inspeções conjuntas\n   12. Corrigir desvios rapidamente\n\n🎁 **EIXO 5: INCENTIVOS (1 atividade)**\n   13. Criar estímulos para promover convergência\n\n💡 **RESUMO:**\nA matriz possui **5 eixos estruturantes** (Planejamento, Orçamento, Indicadores, Fiscalização e Incentivos) que se desdobram em **13 atividades práticas** para garantir alinhamento completo entre todos os setores envolvidos na implementação do DHS.',
      category: 'implementação',
      priority: 10,
      links: [{ text: 'Ver Implementação Completa', path: '/implementacao' }],
      suggestions: ['Como implementar DHS?', 'O que é convergência estrutural?', 'Ver todas as metodologias']
    },
    {
      keywords: ['nmc', 'comunicação não violenta', 'cnv', 'como usar nmc'],
      synonyms: ['comunicação não-violenta', 'cnv rosenberg'],
      response: '**NMC - Comunicação Não-Violenta (CNV)**\n\n💬 **O QUE É:**\nMetodologia criada por Marshall Rosenberg para comunicação empática e resolução de conflitos.\n\n🔄 **4 COMPONENTES:**\n\n1️⃣ **OBSERVAÇÃO**\n   ✓ Descrever fatos sem julgamento\n   ✓ "Quando vejo/ouço..."\n   ❌ Evitar: "Você sempre..." ou "Você nunca..."\n\n2️⃣ **SENTIMENTO**\n   ✓ Expressar emoções genuínas\n   ✓ "Eu me sinto..."\n   ❌ Evitar: "Você me faz sentir..."\n\n3️⃣ **NECESSIDADE**\n   ✓ Identificar necessidades não atendidas\n   ✓ "Porque eu preciso/valorizo..."\n   ✓ Conectar sentimentos a necessidades universais\n\n4️⃣ **PEDIDO**\n   ✓ Fazer pedido claro e específico\n   ✓ "Você poderia...?"\n   ✓ Ser concreto e factível\n\n✅ **APLICAÇÃO NO DHS:**\n   • Facilitar reuniões intersetoriais\n   • Resolver conflitos entre stakeholders\n   • Promover escuta ativa\n   • Construir consensos',
      category: 'metodologias',
      priority: 8,
      links: [{ text: 'Ver Metodologias', path: '/metodologias' }]
    },
    {
      keywords: ['pgs', 'planejamento sistêmico', 'gestão sistêmica', 'o que é pgs', 'critérios pgs', 'requisitos pgs', 'critérios planejamento sistêmico', 'critérios do planejamento e gestão sistêmicos', 'critérios planejamento gestão sistêmicos', 'quais critérios pgs', 'quais são os critérios'],
      synonyms: ['planejamento gestão sistêmicos', 'critérios planejamento', 'requisitos planejamento sistêmico', 'quais critérios', 'quais requisitos'],
      response: '**PGS - Planejamento e Gestão Sistêmicos**\n\n🎯 **O QUE É:**\nPrincipal atuação resolutiva para fomentar o DHS. É uma forma de atuar que, ao solucionar problemas, desenvolve o pensamento sistêmico e complexo.\n\n📊 **5 CRITÉRIOS / REQUISITOS DO PGS:**\n\n1️⃣ **Foco(s) Prioritário(s)**\n   Definir e concentrar esforços nas áreas mais críticas\n\n2️⃣ **Atender Necessidades**\n   Responder às demandas reais da população\n\n3️⃣ **Impactos Proporcionais nos 3 Eixos**\n   Equilibrar benefícios nos eixos Social, Econômico e Ambiental\n\n4️⃣ **Convergência dos Setores**\n   Promover alinhamento entre público, privado e sociedade civil\n\n5️⃣ **Promoção de Atuações Resolutivas e Matrizes**\n   Implementar soluções estruturais e ferramentas de convergência\n\n💡 **IMPORTANTE:**\nEstes 5 critérios são tanto os requisitos que qualificam uma atuação como PGS, quanto os critérios para medir o grau de DHS de qualquer projeto.\n\n✅ **RESULTADOS COMPROVADOS:**\nNo RS, a aplicação do PGS na saúde alcançou 90% de resolutividade extrajudicial e economizou R$ 49M em 2016.',
      category: 'metodologias',
      priority: 10,
      links: [{ text: 'Ver Metodologias Completas', path: '/metodologias' }],
      suggestions: ['O que é DHS?', 'Matriz de Convergência', 'Como implementar?']
    }
  ]

  // Salvar histórico
  useEffect(() => {
    const saved = localStorage.getItem('dhs-chat-history')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (parsed.length > 0 && Date.now() - new Date(parsed[0].timestamp).getTime() < 24 * 60 * 60 * 1000) {
          setMessages(parsed.map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) })))
        }
      } catch (e) {
        console.error('Erro ao carregar histórico:', e)
      }
    }
  }, [])

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('dhs-chat-history', JSON.stringify(messages))
    }
  }, [messages])

  // Detectar mudança de página
  useEffect(() => {
    if (!isOpen && messages.length === 0) {
      setTimeout(() => setUnreadCount(1), 3000)
    }
  }, [location.pathname, isOpen, messages.length])

  // Focar input
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
      setUnreadCount(0)
    }
  }, [isOpen, isMinimized])

  // Mensagem de boas-vindas
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          'Olá! 👋 Sou o assistente virtual do DHS Guide.\n\nEstou aqui para ajudá-lo a entender o Desenvolvimento Harmônico e Sustentável.\n\nComo posso ajudar você hoje?',
          ['O que é DHS?', 'Como implementar?', 'Plano de Contingência', 'Primeira Infância']
        )
      }, 500)
    }
  }, [isOpen])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addBotMessage = (text: string, suggestions?: string[]) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
      suggestions
    }])
  }

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    }])
  }

  const findBestResponse = (userInput: string): KnowledgeBase | null => {
    const input = userInput.toLowerCase().trim()
    const normalizeText = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    const normalizedInput = normalizeText(input)
    
    // Dividir input em palavras para busca mais inteligente
    const inputWords = normalizedInput.split(/\s+/)

    let bestMatch: KnowledgeBase | null = null
    let maxScore = 0

    knowledgeBase.forEach(kb => {
      let score = 0

      kb.keywords.forEach(keyword => {
        const normalizedKeyword = normalizeText(keyword)
        const keywordWords = normalizedKeyword.split(/\s+/)
        
        // Pontuação por correspondência exata
        if (input === keyword || normalizedInput === normalizedKeyword) {
          score += 50
        }
        // Pontuação por inclusão completa
        else if (input.includes(keyword) || normalizedInput.includes(normalizedKeyword)) {
          score += keyword.length * 4
        }
        // Pontuação por palavras em comum
        else {
          const matchingWords = keywordWords.filter(kw => 
            inputWords.some(iw => iw.includes(kw) || kw.includes(iw))
          )
          score += matchingWords.length * 5
        }
        
        // Bonus por início
        if (input.startsWith(keyword) || normalizedInput.startsWith(normalizedKeyword)) {
          score += 15
        }
      })

      if (kb.synonyms) {
        kb.synonyms.forEach(synonym => {
          const normalizedSynonym = normalizeText(synonym)
          if (normalizedInput.includes(normalizedSynonym)) {
            score += 8
          } else {
            // Verificar palavras individuais
            const synonymWords = normalizedSynonym.split(/\s+/)
            const matchingWords = synonymWords.filter(sw => 
              inputWords.some(iw => iw.includes(sw) || sw.includes(iw))
            )
            score += matchingWords.length * 3
          }
        })
      }

      if (kb.priority) score += kb.priority
      if (conversationContext.length > 0 && kb.category === conversationContext[conversationContext.length - 1]) {
        score += 5
      }

      if (score > maxScore) {
        maxScore = score
        bestMatch = kb
      }
    })

    return maxScore > 0 ? bestMatch : null
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userText = inputValue.trim()
    addUserMessage(userText)
    setInputValue('')
    setIsTyping(true)
    setShowSuggestions(false)

    const typingDelay = Math.min(userText.length * 50 + 800, 2000)

    setTimeout(() => {
      const response = findBestResponse(userText)

      if (response) {
        if (response.category) {
          setConversationContext(prev => [...prev, response.category!].slice(-3))
        }

        let fullResponse = response.response
        if (response.links && response.links.length > 0) {
          fullResponse += '\n\n🔗 **Links úteis:**'
        }

        addBotMessage(fullResponse, response.relatedQuestions)

        if (response.links && response.links.length > 0) {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              id: (Date.now() + 1).toString(),
              text: 'links',
              sender: 'bot',
              timestamp: new Date()
            }])
          }, 500)
        }
      } else {
        addBotMessage(
          'Desculpe, não encontrei uma resposta específica. 🤔\n\n💡 Tente:\n• Reformular com outras palavras\n• Escolher um tema abaixo\n• Usar a busca (🔍) no topo',
          ['O que é DHS?', 'Metodologias', 'Implementação', 'PLANCON']
        )
      }

      setIsTyping(false)
      setShowSuggestions(true)
    }, typingDelay)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    setTimeout(() => handleSendMessage(), 100)
  }

  const handleLinkClick = (path: string) => {
    navigate(path)
    setIsOpen(false)
  }

  const clearChat = () => {
    if (confirm('Deseja realmente limpar o histórico?')) {
      setMessages([])
      setConversationContext([])
      localStorage.removeItem('dhs-chat-history')
      setTimeout(() => {
        addBotMessage('Histórico limpo! 🧹\n\nComo posso ajudá-lo agora?', ['O que é DHS?', 'Metodologias'])
      }, 300)
    }
  }

  const handleFeedback = (messageId: string, feedback: 'positive' | 'negative') => {
    setMessages(prev => prev.map(msg => msg.id === messageId ? { ...msg, feedback } : msg))
  }

  const copyMessage = (messageId: string, text: string) => {
    navigator.clipboard.writeText(text)
    setMessages(prev => prev.map(msg => msg.id === messageId ? { ...msg, copied: true } : msg))
    setTimeout(() => {
      setMessages(prev => prev.map(msg => msg.id === messageId ? { ...msg, copied: false } : msg))
    }, 2000)
  }

  const formatMessage = (text: string) => {
    const lines = text.split('\n')
    return lines.map((line, i) => {
      line = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      line = line.replace(/\*(.+?)\*/g, '<em>$1</em>')
      return <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
    })
  }

  const renderMessageContent = (message: Message) => {
    if (message.text === 'links' && message.sender === 'bot') {
      const lastUserMessage = [...messages].reverse().find(m => m.sender === 'user')
      if (lastUserMessage) {
        const response = findBestResponse(lastUserMessage.text)
        if (response?.links) {
          return (
            <div className="flex flex-col gap-2">
              {response.links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.path)}
                  className="text-left px-3 py-2 bg-primary-50 text-primary-700 rounded hover:bg-primary-100 transition-colors text-sm flex items-center gap-2"
                >
                  <span>→</span>
                  <span>{link.text}</span>
                </button>
              ))}
            </div>
          )
        }
      }
      return null
    }

    return <div className="whitespace-pre-wrap text-sm">{formatMessage(message.text)}</div>
  }

  return (
    <>
      {/* Botão flutuante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50 group animate-bounce"
          style={{ animationDuration: '3s' }}
        >
          <MessageCircle className="w-6 h-6" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {unreadCount}
            </span>
          )}
          <Sparkles className="absolute -top-1 -left-1 w-4 h-4 text-yellow-300 animate-pulse" />
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            💬 Precisa de ajuda? Clique aqui!
          </div>
        </button>
      )}

      {/* Janela do chat */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 transition-all ${isMinimized ? 'w-80' : 'w-96'}`}>
          <div className={`bg-white rounded-lg shadow-2xl flex flex-col ${isMinimized ? 'h-14' : 'h-[600px]'} transition-all`}>
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 rounded-t-lg flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full relative">
                  <Bot className="w-5 h-5 text-primary-600" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold flex items-center gap-2">
                    Assistente DHS
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                  </h3>
                  <p className="text-xs text-primary-100">🟢 Online</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 1 && (
                  <button
                    onClick={clearChat}
                    className="p-1.5 hover:bg-primary-500 rounded transition-colors"
                    title="Limpar conversa"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 hover:bg-primary-500 rounded transition-colors"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-primary-500 rounded transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex gap-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          message.sender === 'user' ? 'bg-primary-600' : 'bg-gray-300'
                        }`}>
                          {message.sender === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-gray-700" />}
                        </div>

                        <div className="flex-1">
                          <div className={`rounded-lg p-3 ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md'
                              : 'bg-white text-gray-800 shadow-sm border border-gray-200'
                          }`}>
                            {renderMessageContent(message)}
                          </div>

                          {message.sender === 'bot' && message.text !== 'links' && (
                            <div className="mt-1 flex items-center gap-2 text-xs">
                              <button
                                onClick={() => copyMessage(message.id, message.text)}
                                className="flex items-center gap-1 text-gray-500 hover:text-primary-600 transition-colors"
                              >
                                <Copy className="w-3 h-3" />
                                {message.copied ? <span className="text-green-600">Copiado!</span> : <span>Copiar</span>}
                              </button>
                              <span className="text-gray-300">•</span>
                              <button
                                onClick={() => handleFeedback(message.id, 'positive')}
                                className={`transition-colors ${
                                  message.feedback === 'positive' ? 'text-green-600' : 'text-gray-500 hover:text-green-600'
                                }`}
                              >
                                <ThumbsUp className="w-3 h-3" />
                              </button>
                              <button
                                onClick={() => handleFeedback(message.id, 'negative')}
                                className={`transition-colors ${
                                  message.feedback === 'negative' ? 'text-red-600' : 'text-gray-500 hover:text-red-600'
                                }`}
                              >
                                <ThumbsDown className="w-3 h-3" />
                              </button>
                            </div>
                          )}

                          {message.suggestions && message.suggestions.length > 0 && showSuggestions && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {message.suggestions.map((suggestion, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleSuggestionClick(suggestion)}
                                  className="text-xs px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full hover:from-primary-50 hover:to-primary-100 hover:text-primary-700 transition-all border border-gray-300 hover:border-primary-300"
                                >
                                  💡 {suggestion}
                                </button>
                              ))}
                            </div>
                          )}

                          <div className="mt-1 text-xs text-gray-400">
                            {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                          <Bot className="w-5 h-5 text-gray-700" />
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick suggestions */}
                {messages.length === 0 && (
                  <div className="px-4 py-2 bg-gradient-to-r from-primary-50 to-blue-50 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-700 mb-2">💡 Perguntas frequentes:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['O que é DHS?', 'PLANCON', 'Educação Infantil', 'Como implementar?'].map((q, i) => (
                        <button
                          key={i}
                          onClick={() => handleSuggestionClick(q)}
                          className="text-xs px-2 py-1 bg-white text-primary-700 rounded-md hover:bg-primary-100 transition-colors border border-primary-200"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white rounded-b-lg">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                      placeholder="Digite sua pergunta sobre DHS..."
                      className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-2.5 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-gray-500">⏎ Enter para enviar</p>
                    {messages.length > 0 && <p className="text-xs text-gray-400">💾 Histórico salvo por 24h</p>}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
