import { useState, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface SearchResult {
  page: string
  title: string
  path: string
  snippet: string
  matches: number
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  // Conteúdo indexado de todas as páginas
  const searchableContent = [
    {
      page: 'Home',
      title: 'Início',
      path: '/',
      content: 'DHS Desenvolvimento Harmônico Sustentável guia prático implementação planejamento gestão sistêmicos convergência estrutural diagnóstico crise soluções metodologias recursos apresentação introdução visão geral panorama overview bem-vindo início principal'
    },
    {
      page: 'Diagnóstico',
      title: 'Diagnóstico da Crise',
      path: '/diagnostico',
      content: 'diagnóstico crise paradigmas limitantes causas raízes crise sistêmica fragmentação social econômico ambiental pensamento reducionista curto prazo externalidades negativas desigualdade degradação ambiental mudanças climáticas aquecimento global poluição esgotamento recursos naturais injustiça social concentração renda pobreza exclusão desemprego saúde educação problemas estruturais sistema atual modelo desenvolvimento insustentável'
    },
    {
      page: 'Soluções',
      title: 'Soluções Propostas',
      path: '/solucoes',
      content: 'soluções propostas pensamento sistêmico holístico DHS desenvolvimento harmônico sustentável convergência estrutural integração setores público privado sociedade civil planejamento longo prazo sustentabilidade equilíbrio eixos social econômico ambiental tripé pilares dimensões resiliência transformação mudança paradigma novo modelo alternativas respostas saídas caminhos perspectivas futuro'
    },
    {
      page: 'Metodologias',
      title: 'Metodologias e Instrumentos',
      path: '/metodologias',
      content: 'metodologias instrumentos ferramentas atuações resolutivas individual coletiva estrutural PGS planejamento gestão sistêmicos matriz convergência NMC comunicação não-violenta CNV mediação conflitos negociação diálogo escuta ativa empatia recomendação CNMP 54/2017 54 2017 05/2025 processos estruturais ministério público MP atuação resolutiva extrajudicial TAC termo ajustamento conduta audiências públicas recomendações inquérito civil ação civil pública práticas resolutivas resolutividade qualidade quantidade'
    },
    {
      page: 'Implementação',
      title: 'Guia de Implementação',
      path: '/implementacao',
      content: 'implementação guia passo a passo matriz convergência foco prioritário necessidades possibilidades atividades convergência estrutural planejamento orçamento fiscalização incentivos participação casos práticos exemplos aplicação execução operacionalização como fazer implementar executar realizar praticar aplicar colocar prática ação etapas passos procedimentos roteiro manual instruções orientações diretrizes'
    },
    {
      page: 'Recursos',
      title: 'Recursos e Documentos',
      path: '/recursos',
      content: 'recursos documentos materiais PDF downloads arquivos acordos internacionais ODS objetivos desenvolvimento sustentável Agenda 2030 ONU Acordo Paris clima COP convenções tratados pactos declarações ferramentas práticas utilitários biblioteca acervo repositório material apoio referências legislação normativas leis decretos portarias resoluções jurisprudência decisões sentenças acórdãos'
    },
    {
      page: 'FAQ',
      title: 'Perguntas Frequentes',
      path: '/faq',
      content: 'FAQ perguntas frequentes dúvidas questões respostas esclarecimentos DHS implementação convergência metodologia atuação resolutiva casos práticos exemplos aplicação como funciona o que é para que serve quem pode utilizar onde aplicar quando usar ajuda suporte orientação tutorial explicação entendimento compreensão'
    },
    {
      page: 'Plano Contingência',
      title: 'Plano de Contingência',
      path: '/plano-contingencia',
      content: 'plano contingência PLANCON defesa civil proteção desastres naturais calamidades emergências enchentes inundações alagamentos deslizamentos desmoronamentos enxurradas vendavais tempestades secas estiagem incêndios florestais riscos ameaças vulnerabilidade prevenção preparação resposta recuperação COMDEC conselho municipal NUPDECs NUDEC núcleos comunitários proteção brigadistas voluntários comunidade monitoramento alerta evacuação abrigos socorro salvamento primeiros socorros mudanças climáticas eventos extremos resiliência adaptação mitigação PNPDEC política nacional Lei 12608 defesa civil desastre gestão riscos mapeamento áreas risco carta geotécnica plano municipal redução riscos PMRR simulados treinamentos capacitação educação ambiental S2iD sistema integrado informações OIM organização internacional migrações deslocamento climático'
    },
    {
      page: 'Primeira Infância',
      title: 'Primeira Infância e Educação Infantil',
      path: '/primeira-infancia',
      content: 'primeira infância educação infantil bebês crianças pequenas creche berçário maternal pré-escola jardim infância 0 a 6 anos desenvolvimento infantil cognitivo motor social emocional aprendizagem pedagógico currículo BNCC base nacional comum curricular direito educação acesso vagas matrículas deficit filas espera lista espera expansão construção ampliação FUNDEB fundo manutenção básica valorização profissionais qualidade educacional padrões infraestrutura professor educador auxiliar razão criança adulto DONQEEI parâmetros nacionais Marco Legal primeira infância lei 13257 ECA estatuto criança adolescente proteção integral absoluta prioridade interesse superior desenvolvimento pleno CNE conselho nacional educação MEC ministério educação FNDE fundo nacional desenvolvimento educação censo escolar INEP Plano Nacional Educação PNE metas estratégias municipal PME secretaria educação CME conselho municipal TAC ação civil pública judicialização políticas públicas atendimento universal obrigatório facultativo jornada parcial integral alimentação escolar merenda PNAE nutrição saúde cuidar educar brincar interações brincadeiras campos experiências direitos aprendizagem'
    },
    {
      page: 'Violência ECA',
      title: 'Violência contra Crianças e Adolescentes',
      path: '/violencia-eca',
      content: 'violência crianças adolescentes menores infância juventude ECA estatuto proteção integral direitos fundamentais absoluta prioridade abuso maus-tratos negligência violência física psicológica sexual exploração sexual comercial trabalho infantil bullying cyberbullying alienação parental abandono castigos corporais tortura crueldade opressão conselho tutelar CT conselheiros tutelares medidas proteção acolhimento institucional família acolhedora adoção guarda tutela curatela sistema garantia direitos SGD rede proteção notificação denúncia disque 100 direitos humanos ministério público promotoria infância vara infância MP CAOP centro apoio operacional políticas públicas prevenção enfrentamento erradicação combate PAIR plano ações integradas referenciadas PETI programa erradicação sentinela CRAS centro referência assistência social CREAS especializado medidas socioeducativas internação semiliberdade liberdade assistida prestação serviços advertência reparação dano responsabilização educação saúde convivência familiar comunitária profissionalização cultura esporte lazer dignidade respeito liberdade'
    },
    {
      page: 'Organizações Criminosas',
      title: 'Combate a Organizações Criminosas',
      path: '/organizacoes-criminosas',
      content: 'organizações criminosas crime organizado facções criminosas quadrilha bando associação criminosa PCC comando vermelho milícias máfias cartéis narcotráfico tráfico drogas entorpecentes lavagem dinheiro ocultação bens corrupção propina desvio recursos públicos peculato concussão prevaricação sonegação fiscal contrabando descaminho receptação extorsão sequestro cárcere privado homicídio latrocínio roubo furto estelionato fraude segurança pública polícia civil militar federal rodoviária ministério público justiça investigação inquérito operação repressão combate enfrentamento prevenção inteligência GAECO grupo atuação especial DRACO delegacia repressão ações organizadas CORE coordenadoria recursos especiais interceptação telefônica escuta ambiental quebra sigilo bancário fiscal telefônico busca apreensão prisão preventiva temporária flagrante delação premiada colaboração premiada delator acordo leniência Lei 12850 12694 9613 legislação penal processo penal execução penal sistema prisional presídios penitenciárias cadeias RDD regime disciplinar diferenciado isolamento máxima segurança reintegração social ressocialização penas alternativas monitoramento eletrônico tornozeleira rastreamento justiça criminal tribunal júri sentença condenação absolvição'
    },
    {
      page: 'Cão na Estrada',
      title: 'Prevenção de Acidentes - Cão na Estrada',
      path: '/cao-estrada',
      content: 'cão estrada cachorro animais soltos rodovias estradas BR federais estaduais pista acostamento faixa domínio acidentes trânsito atropelamentos colisões capotamentos mortes óbitos vítimas fatais feridos lesões graves violência trânsito segurança viária rodoviária prevenção fiscalização sinalização cercas telas proteção contenção barreira recolhimento animais abandonados errantes domésticos silvestres fauna veterinária zoonoses castração esterilização posse responsável guarda tutela identificação chip microchip registro cadastro CCZ centro controle concessionárias pedágios polícia rodoviária federal PRF ANTT agência nacional transportes terrestres DNiT departamento nacional infraestrutura CTB código brasileiro trânsito responsabilidade civil criminal administrativa indenização danos morais materiais pensionamento ação regressiva TAC inquérito civil ação civil pública atuação resolutiva ministério público promotoria justiça rodovias Lei Seca velocidade imprudência negligência imperícia embriaguez álcool droga direção perigosa ultrapassagem proibida contramão limite velocidade radar lombada redutor sinais placas educação conscientização campanhas blitz operação fiscalizatória multas pontos CNH carteira habilitação suspensão cassação apreensão veículo guincho'
    },
    {
      page: 'Calculadora DHS',
      title: 'Calculadora DHS',
      path: '/calculadora-dhs',
      content: 'calculadora DHS ferramenta cálculo avaliação análise medição mensuração impactos efeitos consequências eixos dimensões pilares social econômico ambiental sustentabilidade desenvolvimento harmônico equilíbrio balanceamento ponderação indicadores métricas parâmetros critérios variáveis fatores aspectos pontuação nota score classificação ranking categoria nível grau percentual porcentagem resultado diagnóstico relatório parecer laudo análise projeto política pública programa ação intervenção iniciativa proposta plano estratégia medida avaliação prévia impacto ambiental EIA RIMA estudo viabilidade custo benefício retorno investimento ROI sustentável responsável consciente ético justo equitativo inclusivo participativo democrático transparente'
    }
  ]

  // Buscar quando o termo mudar
  useEffect(() => {
    if (searchTerm.length < 2) {
      setResults([])
      return
    }

    const term = searchTerm.toLowerCase().trim()
    const foundResults: SearchResult[] = []

    searchableContent.forEach(item => {
      const contentLower = item.content.toLowerCase()
      const titleLower = item.title.toLowerCase()
      const pageLower = item.page.toLowerCase()
      
      // Busca por termo completo ou palavras individuais
      const searchWords = term.split(/\s+/)
      let totalMatches = 0
      
      // Contar matches no título (peso maior)
      searchWords.forEach(word => {
        const titleMatches = (titleLower.match(new RegExp(word, 'g')) || []).length
        const pageMatches = (pageLower.match(new RegExp(word, 'g')) || []).length
        totalMatches += (titleMatches * 3) + (pageMatches * 2) // Peso maior para título
      })
      
      // Contar matches no conteúdo
      searchWords.forEach(word => {
        const contentMatches = (contentLower.match(new RegExp(word, 'g')) || []).length
        totalMatches += contentMatches
      })
      
      // Bonus se encontrar a frase completa
      if (term.includes(' ')) {
        if (titleLower.includes(term)) totalMatches += 10
        if (contentLower.includes(term)) totalMatches += 5
      }

      if (totalMatches > 0) {
        // Criar snippet com destaque - prioriza título
        let snippet = ''
        let foundInTitle = false
        
        // Verificar se encontrou no título primeiro
        searchWords.forEach(word => {
          if (titleLower.includes(word)) {
            snippet = item.title
            foundInTitle = true
          }
        })
        
        // Se não encontrou no título, buscar no conteúdo
        if (!foundInTitle) {
          const firstWord = searchWords[0]
          const index = contentLower.indexOf(firstWord)
          if (index !== -1) {
            const start = Math.max(0, index - 40)
            const end = Math.min(item.content.length, index + firstWord.length + 60)
            snippet = item.content.substring(start, end)
            
            if (start > 0) snippet = '...' + snippet
            if (end < item.content.length) snippet = snippet + '...'
          } else {
            snippet = item.content.substring(0, 100) + '...'
          }
        }

        foundResults.push({
          page: item.page,
          title: item.title,
          path: item.path,
          snippet,
          matches: totalMatches
        })
      }
    })

    // Ordenar por número de matches (relevância)
    foundResults.sort((a, b) => b.matches - a.matches)
    setResults(foundResults)
  }, [searchTerm])

  // Fechar ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Focar input quando abrir
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Atalho de teclado Ctrl+K ou Cmd+K
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleResultClick = (path: string) => {
    navigate(path)
    setIsOpen(false)
    setSearchTerm('')
  }

  const highlightText = (text: string, term: string) => {
    if (!term) return text
    
    const searchWords = term.toLowerCase().split(/\s+/)
    let result = text
    
    // Destacar cada palavra encontrada
    searchWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi')
      result = result.replace(regex, '|||$1|||')
    })
    
    // Converter marcadores em elementos React
    const parts = result.split('|||')
    return parts.map((part, i) => {
      const isMatch = searchWords.some(word => 
        part.toLowerCase() === word.toLowerCase()
      )
      return isMatch ? 
        <mark key={i} className="bg-yellow-200 font-semibold px-0.5">{part}</mark> : 
        part
    })
  }

  return (
    <>
      {/* Botão de busca */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors border border-gray-300 rounded-lg hover:border-primary-600"
        title="Buscar no site (Ctrl+K)"
      >
        <Search className="w-5 h-5" />
        <span className="hidden md:inline text-sm">Buscar...</span>
        <kbd className="hidden md:inline px-2 py-1 text-xs bg-gray-100 border border-gray-300 rounded">
          Ctrl+K
        </kbd>
      </button>

      {/* Modal de busca */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div ref={searchRef} className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4">
            {/* Input de busca */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-200">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Digite para buscar em todo o site..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 outline-none text-gray-800 placeholder-gray-400"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Resultados */}
            <div className="max-h-96 overflow-y-auto">
              {searchTerm.length < 2 ? (
                <div className="p-8 text-center text-gray-500">
                  <p className="text-sm">Digite pelo menos 2 caracteres para buscar</p>
                  <p className="text-xs mt-2 text-gray-400">Dica: Use Ctrl+K para abrir a busca rapidamente</p>
                </div>
              ) : results.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <p className="text-sm">Nenhum resultado encontrado para "{searchTerm}"</p>
                  <p className="text-xs mt-2 text-gray-400">Tente usar palavras-chave diferentes</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {results.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleResultClick(result.path)}
                      className="w-full text-left p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {highlightText(result.title, searchTerm)}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {highlightText(result.snippet, searchTerm)}
                          </p>
                        </div>
                        <span className="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded-full shrink-0">
                          {result.matches} {result.matches === 1 ? 'ocorrência' : 'ocorrências'}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-500 flex items-center justify-between">
              <span>Use ↑ ↓ para navegar</span>
              <span>ESC para fechar</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
