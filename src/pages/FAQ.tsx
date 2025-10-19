import { HelpCircle } from 'lucide-react'
import Accordion from '../components/Accordion'
import Card from '../components/Card'

export default function FAQ() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <HelpCircle className="h-16 w-16 text-primary-600 mx-auto mb-4" />
          <h1 className="section-title">Perguntas Frequentes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respostas para as dúvidas mais comuns sobre o DHS
          </p>
        </div>

        {/* Conceitos Básicos */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Conceitos Básicos</h2>
          
          <Accordion title="O que é o DHS?" defaultOpen={true}>
            <p className="mb-3">
              O <strong>Desenvolvimento Harmônico e Sustentável (DHS)</strong> é um processo evolutivo que busca 
              atender necessidades humanas integrais de forma equilibrada nos três eixos da sustentabilidade 
              (econômico, social e ambiental), por meio da convergência dos setores público, privado e sociedade civil.
            </p>
            <p>
              Ele promove atuações resolutivas que geram melhora nas relações, liberdade com consciência da 
              unidade e Paz (interna e externa).
            </p>
          </Accordion>

          <Accordion title="Qual a diferença entre DHS e sustentabilidade tradicional?">
            <p className="mb-3">
              Enquanto a <strong>sustentabilidade tradicional</strong> foca principalmente no equilíbrio ambiental 
              e econômico, o DHS vai além:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• <strong>Foco em necessidades reais</strong> (não apenas desejos)</li>
              <li>• <strong>Convergência obrigatória</strong> dos três setores</li>
              <li>• <strong>Atuações resolutivas</strong> mensuráveis</li>
              <li>• <strong>Pensamento sistêmico e complexo</strong></li>
              <li>• <strong>Impactos proporcionais</strong> nos três eixos</li>
            </ul>
          </Accordion>

          <Accordion title="O que são atuações resolutivas?">
            <p className="mb-3">
              São formas de atuar que <strong>efetivamente solucionam problemas</strong> que prejudicam o DHS. 
              Elas se categorizam pela abrangência de seus impactos:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• <strong>Individual:</strong> Focadas em interesses individuais</li>
              <li>• <strong>Coletiva:</strong> Focadas em interesses coletivos</li>
              <li>• <strong>PGS:</strong> Maior impacto, afetando sistemas inteiros</li>
            </ul>
          </Accordion>
        </section>

        {/* Implementação */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementação</h2>
          
          <Accordion title="Como começar a implementar o DHS?">
            <p className="mb-3">
              A implementação segue três passos principais:
            </p>
            <ol className="space-y-3 ml-4">
              <li>
                <strong>1. Escolher o(s) Foco(s) Prioritário(s):</strong>
                <p className="text-gray-700 mt-1">
                  Baseado em critérios de conveniência, oportunidade e urgência. Recomenda-se focar em 
                  problemas que causam alta judicialização.
                </p>
              </li>
              <li>
                <strong>2.a Mapear Necessidades, Possibilidades e Atividades:</strong>
                <p className="text-gray-700 mt-1">
                  Levantar o que precisa ser feito, recursos disponíveis e iniciativas existentes.
                </p>
              </li>
              <li>
                <strong>2.b Promover Convergência Estrutural:</strong>
                <p className="text-gray-700 mt-1">
                  Executar atividades ordenadas para transformar estruturas e processos.
                </p>
              </li>
            </ol>
          </Accordion>

          <Accordion title="O que é a Matriz de Convergência?">
            <p className="mb-3">
              É um <strong>modelo metodológico</strong> para planejar e gerir atividades de forma alinhada ao DHS. 
              Funciona como um roteiro com orientações gerais para a ação.
            </p>
            <p>
              A matriz organiza as atividades em 6 eixos principais: Ambiente, Atuação Interinstitucional, 
              Atuação Institucional, Abordagens, Etapas e Fundamento.
            </p>
          </Accordion>

          <Accordion title="Quanto tempo leva para implementar?">
            <p className="mb-3">
              O tempo varia conforme a complexidade do foco escolhido e o nível de maturidade institucional:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• <strong>Projetos-piloto simples:</strong> 3 a 6 meses</li>
              <li>• <strong>Implementação setorial:</strong> 6 a 12 meses</li>
              <li>• <strong>Transformação institucional completa:</strong> 1 a 3 anos</li>
            </ul>
            <p className="mt-3">
              O importante é começar com um foco prioritário e expandir gradualmente.
            </p>
          </Accordion>

          <Accordion title="Preciso de consultoria especializada?">
            <p className="mb-3">
              <strong>Não necessariamente.</strong> O DHS foi projetado para ser autoaplicável com os materiais disponíveis:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Guia de Implementação passo a passo</li>
              <li>• Matriz de Convergência</li>
              <li>• Documentos e templates</li>
              <li>• Casos de sucesso como referência</li>
            </ul>
            <p className="mt-3">
              No entanto, para implementações complexas ou aceleradas, uma consultoria pode ser útil, 
              especialmente na fase inicial de capacitação.
            </p>
          </Accordion>
        </section>

        {/* PGS */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">PGS - Planejamento e Gestão Sistêmicos</h2>
          
          <Accordion title="O que é PGS?">
            <p className="mb-3">
              O <strong>Planejamento e Gestão Sistêmicos (PGS)</strong> é a principal atuação resolutiva para 
              fomentar o DHS. É uma forma de atuar que, ao solucionar problemas, desenvolve o pensamento 
              sistêmico e complexo.
            </p>
            <p>
              O PGS atende aos 5 critérios de mensuração do DHS:
            </p>
            <ol className="space-y-1 ml-4 mt-2">
              <li>1. Foco(s) Prioritário(s)</li>
              <li>2. Atender Necessidades</li>
              <li>3. Impactos Proporcionais nos 3 Eixos</li>
              <li>4. Convergência dos Setores</li>
              <li>5. Promoção de Atuações Resolutivas e Matrizes</li>
            </ol>
          </Accordion>

          <Accordion title="Quais os resultados comprovados do PGS?">
            <p className="mb-3">
              No <strong>Rio Grande do Sul</strong>, a aplicação do PGS na área da saúde resultou em:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• <strong>90%</strong> de resolutividade extrajudicial</li>
              <li>• Economia de <strong>R$ 49 milhões</strong> em 2016</li>
              <li>• Redução de R$ 324,8M para R$ 275,8M em processos judiciais</li>
              <li>• Maior satisfação de usuários e profissionais</li>
            </ul>
          </Accordion>

          <Accordion title="PGS pode ser aplicado em qualquer área?">
            <p className="mb-3">
              <strong>Sim!</strong> O PGS é uma metodologia transversal que pode ser aplicada em qualquer área:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• <strong>Saúde:</strong> Redução de judicialização, melhoria de atendimento</li>
              <li>• <strong>Educação:</strong> Convergência escola-família-comunidade</li>
              <li>• <strong>Segurança:</strong> Prevenção e resolução de conflitos</li>
              <li>• <strong>Meio Ambiente:</strong> Gestão sustentável de recursos</li>
              <li>• <strong>Assistência Social:</strong> Atendimento integral de necessidades</li>
              <li>• <strong>Justiça:</strong> Mediação e conciliação sistêmica</li>
            </ul>
          </Accordion>
        </section>

        {/* Desafios e Obstáculos */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Desafios e Obstáculos</h2>
          
          <Accordion title="Quais são os principais desafios na implementação?">
            <ul className="space-y-3">
              <li>
                <strong>1. Mudança de paradigma:</strong>
                <p className="text-gray-700 mt-1">
                  Passar do pensamento linear para o sistêmico exige tempo e capacitação.
                </p>
              </li>
              <li>
                <strong>2. Resistência à mudança:</strong>
                <p className="text-gray-700 mt-1">
                  Pessoas acostumadas com processos antigos podem resistir inicialmente.
                </p>
              </li>
              <li>
                <strong>3. Convergência interinstitucional:</strong>
                <p className="text-gray-700 mt-1">
                  Alinhar diferentes instituições e setores demanda negociação e paciência.
                </p>
              </li>
              <li>
                <strong>4. Mensuração de resultados:</strong>
                <p className="text-gray-700 mt-1">
                  Criar indicadores adequados para medir impactos nos três eixos.
                </p>
              </li>
            </ul>
          </Accordion>

          <Accordion title="Como superar a resistência à mudança?">
            <p className="mb-3">
              Estratégias comprovadas:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• <strong>Começar com projeto-piloto:</strong> Demonstrar resultados em pequena escala</li>
              <li>• <strong>Capacitação contínua:</strong> Formação em pensamento sistêmico</li>
              <li>• <strong>Comunicação transparente:</strong> Explicar benefícios e processos</li>
              <li>• <strong>Envolver lideranças:</strong> Garantir apoio institucional</li>
              <li>• <strong>Valorizar participação:</strong> Reconhecer esforços individuais</li>
              <li>• <strong>Celebrar vitórias:</strong> Compartilhar casos de sucesso</li>
            </ul>
          </Accordion>

          <Accordion title="E se não houver apoio da alta gestão?">
            <p className="mb-3">
              Mesmo sem apoio imediato da alta gestão, é possível iniciar:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Aplicar princípios do DHS na sua área de atuação direta</li>
              <li>• Criar grupos de estudo sobre pensamento sistêmico</li>
              <li>• Documentar resultados positivos de mudanças incrementais</li>
              <li>• Conectar-se com outras instituições que já aplicam DHS</li>
              <li>• Apresentar casos de sucesso como evidência</li>
            </ul>
            <p className="mt-3">
              Com resultados tangíveis, o apoio institucional tende a crescer naturalmente.
            </p>
          </Accordion>
        </section>

        {/* Recursos e Apoio */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recursos e Apoio</h2>
          
          <Accordion title="Onde encontro mais materiais sobre DHS?">
            <p className="mb-3">
              Acesse a seção <strong>Recursos</strong> deste guia, que contém:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Documentos normativos e acordos</li>
              <li>• Estudos de caso detalhados</li>
              <li>• Templates e checklists</li>
              <li>• Guias de implementação específicos</li>
              <li>• Ferramentas de mensuração</li>
              <li>• Referências ao ODS da ONU</li>
            </ul>
          </Accordion>

          <Accordion title="Existe comunidade ou rede de praticantes do DHS?">
            <p className="mb-3">
              Sim! Existem diversas formas de conectar-se com outros praticantes:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Comitês interinstitucionais regionais</li>
              <li>• Eventos e workshops sobre DHS e PGS</li>
              <li>• Grupos de trabalho em tribunais e ministérios públicos</li>
              <li>• Fóruns online de discussão</li>
              <li>• Cursos EAD sobre pensamento sistêmico</li>
            </ul>
          </Accordion>

          <Accordion title="Como posso contribuir para o desenvolvimento do DHS?">
            <p className="mb-3">
              Diversas formas de contribuir:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• <strong>Aplicar na sua instituição:</strong> Ser um caso de sucesso</li>
              <li>• <strong>Compartilhar experiências:</strong> Documentar aprendizados</li>
              <li>• <strong>Capacitar outros:</strong> Multiplicar o conhecimento</li>
              <li>• <strong>Participar de eventos:</strong> Trocar experiências</li>
              <li>• <strong>Propor melhorias:</strong> Sugerir aprimoramentos metodológicos</li>
              <li>• <strong>Pesquisa acadêmica:</strong> Estudar impactos e efetividade</li>
            </ul>
          </Accordion>
        </section>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-primary-600 to-accent-600 text-white">
          <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
          <p className="text-lg mb-6">
            Explore o guia completo ou entre em contato para mais informações.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/"
              className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Voltar ao Início
            </a>
            <a
              href="/recursos"
              className="inline-flex items-center bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border-2 border-white"
            >
              Ver Recursos
            </a>
          </div>
        </Card>
      </div>
    </div>
  )
}
