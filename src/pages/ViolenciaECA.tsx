import { Link } from 'react-router-dom'
import { AlertTriangle, Shield, Heart, Scale, Phone, Eye, Gavel, Building, Target, CheckCircle, FileText, ArrowRight } from 'lucide-react'
import Card from '../components/Card'

export default function ViolenciaECA() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title flex items-center justify-center">
            <Shield className="h-12 w-12 text-blue-600 mr-4" />
            Guia de Proteção à Criança e ao Adolescente
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-4">
            Protocolo CNMP de Enfrentamento à Violência
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Baseado no Guia CNMP (2024), Leis 13.431/2017 e 14.344/2022 (Lei Henry Borel)
          </p>
        </div>

        {/* Seção 1: Dados Estatísticos */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <AlertTriangle className="h-8 w-8 text-blue-600 mr-3" />
              1. Contexto e Dados CNMP (2020-2023)
            </h2>
            <p className="text-gray-700 mb-4">
              O <strong>Guia do CNMP</strong> estabelece diretrizes para atuação ministerial transversal 
              no atendimento de crianças e adolescentes vítimas ou testemunhas de violência.
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-blue-300 mb-4">
              <h3 className="font-bold text-blue-900 mb-3">📊 Dados Alarmantes</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-red-700 mb-1">35-37%</div>
                  <p className="text-xs text-gray-700">
                    <strong>Disque 100 e SINAN:</strong> Violências contra crianças/adolescentes
                  </p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-orange-700 mb-1">84%</div>
                  <p className="text-xs text-gray-700">
                    <strong>Disque 100:</strong> Agressor é membro da família
                  </p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-700 mb-1">44-57%</div>
                  <p className="text-xs text-gray-700">
                    <strong>SINAN/SIPIA:</strong> Agressor do núcleo familiar
                  </p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-red-700 mb-1">90%</div>
                  <p className="text-xs text-gray-700">
                    <strong>Recorrência:</strong> NÃO é a primeira vez
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-100 border-l-4 border-red-600 p-4 rounded">
              <p className="text-sm text-red-900">
                <strong>⚠️ CNMP:</strong> "Atuação meramente repressiva é insuficiente. 
                É imperativa abordagem preventiva e intersetorial."
              </p>
            </div>
          </Card>
        </section>

        {/* Seção 2: Marco Legal */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center mb-6">
            <Scale className="h-8 w-8 text-primary-600 mr-3" />
            2. Marco Legal de Proteção
          </h2>

          <Card>
            <h3 className="text-xl font-bold text-gray-800 mb-4">📜 Arcabouço Normativo</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="p-3 text-left w-1/3">Norma</th>
                    <th className="p-3 text-left">Principais Disposições</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-blue-50 border-b">
                    <td className="p-3 font-semibold">Convenção ONU (1989)</td>
                    <td className="p-3">Criança como sujeito de direitos</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="p-3 font-semibold">CF/1988 - Art. 227</td>
                    <td className="p-3"><strong>Prioridade absoluta</strong> e proteção integral</td>
                  </tr>
                  <tr className="bg-blue-50 border-b">
                    <td className="p-3 font-semibold">Lei 8.069/1990 (ECA)</td>
                    <td className="p-3">Estatuto da Criança e do Adolescente</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="p-3 font-semibold">Lei 13.010/2014</td>
                    <td className="p-3">Lei da Palmada - proíbe castigos físicos</td>
                  </tr>
                  <tr className="bg-blue-50 border-b">
                    <td className="p-3 font-semibold">Lei 13.431/2017</td>
                    <td className="p-3">Escuta Protegida - define <strong>Escuta Especializada</strong> e <strong>Depoimento Especial</strong></td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="p-3 font-semibold">Decreto 9.603/2018</td>
                    <td className="p-3">Institui <strong>Comitê de Gestão Colegiada</strong></td>
                  </tr>
                  <tr className="bg-blue-50 border-b">
                    <td className="p-3 font-semibold">Lei 14.321/2022</td>
                    <td className="p-3">Tipifica <strong>violência institucional</strong> e revitimização</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="p-3 font-semibold">Lei 14.344/2022</td>
                    <td className="p-3"><strong>Lei Henry Borel</strong> - medidas protetivas</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="p-3 font-semibold">Resolução CNMP 287/2024</td>
                    <td className="p-3">Atuação <strong>integrada do MP</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Seção 3: Tipos de Oitiva - Tabela Comparativa */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center mb-6">
            <Eye className="h-8 w-8 text-primary-600 mr-3" />
            3. Tipos de Oitiva (Lei 13.431/2017)
          </h2>

          <Card>
            <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Escuta Especializada vs Depoimento Especial vs Revelação Espontânea</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-indigo-900 text-white">
                  <tr>
                    <th className="p-2 text-left">Critério</th>
                    <th className="p-2 text-left bg-blue-800">Escuta Especializada</th>
                    <th className="p-2 text-left bg-purple-800">Depoimento Especial</th>
                    <th className="p-2 text-left bg-pink-800">Revelação Espontânea</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-semibold bg-gray-100">Definição</td>
                    <td className="p-2 bg-blue-50">Procedimento de <strong>entrevista</strong> sobre situação de violência</td>
                    <td className="p-2 bg-purple-50">Procedimento de <strong>oitiva judicial</strong> da vítima/testemunha</td>
                    <td className="p-2 bg-pink-50">Relato <strong>espontâneo</strong> a qualquer pessoa</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold bg-gray-100">Finalidade</td>
                    <td className="p-2 bg-blue-50">Proteger e avaliar situação para acionar rede</td>
                    <td className="p-2 bg-purple-50">Produzir <strong>prova judicial</strong></td>
                    <td className="p-2 bg-pink-50">Identificação inicial da violência</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold bg-gray-100">Executor</td>
                    <td className="p-2 bg-blue-50">Profissionais de <strong>saúde, assistência social ou educação</strong></td>
                    <td className="p-2 bg-purple-50">Profissional <strong>especializado</strong> (psicólogo/assistente social) sob ordem judicial</td>
                    <td className="p-2 bg-pink-50">Qualquer profissional ou pessoa</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold bg-gray-100">Contexto</td>
                    <td className="p-2 bg-blue-50">Atendimento na <strong>rede de proteção</strong></td>
                    <td className="p-2 bg-purple-50">Durante <strong>investigação ou processo judicial</strong></td>
                    <td className="p-2 bg-pink-50">Qualquer momento/local</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold bg-gray-100">Diretriz Chave</td>
                    <td className="p-2 bg-blue-50"><strong>Protocolos técnicos</strong> da área</td>
                    <td className="p-2 bg-purple-50"><strong>Método Cognitivo</strong> e sala especial</td>
                    <td className="p-2 bg-pink-50"><strong>Acolhimento imediato</strong></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold bg-gray-100">Base Legal</td>
                    <td className="p-2 bg-blue-50">Art. 8º Lei 13.431/17</td>
                    <td className="p-2 bg-purple-50">Art. 8º Lei 13.431/17</td>
                    <td className="p-2 bg-pink-50">Art. 14 Lei 13.431/17</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold bg-gray-100">Quando Realizar</td>
                    <td className="p-2 bg-blue-50">Suspeita ou confirmação no atendimento</td>
                    <td className="p-2 bg-purple-50">Determinação judicial em investigação/processo</td>
                    <td className="p-2 bg-pink-50">A qualquer momento</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold bg-gray-100">Cuidados</td>
                    <td className="p-2 bg-blue-50">Evitar <strong>revitimização</strong></td>
                    <td className="p-2 bg-purple-50">Máximo <strong>UMA oitiva</strong></td>
                    <td className="p-2 bg-pink-50">Não induzir ou forçar relato</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 bg-red-50 border-l-4 border-red-600 p-4 rounded">
              <p className="text-sm text-red-900">
                <strong>⚠️ Importante:</strong> A Lei 14.321/2022 tipifica como crime a <strong>revitimização</strong> 
                (submeter a vítima a procedimentos desnecessários, repetitivos ou que a expõe indevidamente).
              </p>
            </div>
          </Card>
        </section>

        {/* Seção 4: Comitê de Gestão Colegiada */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center mb-6">
            <Building className="h-8 w-8 text-primary-600 mr-3" />
            3. Comitê de Gestão Colegiada
          </h2>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600">
            <h3 className="text-xl font-bold text-green-900 mb-4">🏛️ Decreto nº 9.603/2018 - Art. 9º</h3>
            <p className="text-gray-700 mb-4">
              O <strong>Comitê de Gestão Colegiada</strong> é órgão <strong>obrigatório em todos os municípios</strong>, 
              responsável por articular a rede de proteção e garantir a aplicação integrada da Lei 13.431/2017.
            </p>

            <div className="bg-white p-4 rounded-lg border border-green-300 mb-4">
              <h4 className="font-semibold text-gray-800 mb-3">Composição do Comitê:</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <strong>• Saúde</strong> - Profissionais da atenção básica e especializada
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <strong>• Assistência Social</strong> - CRAS e CREAS
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <strong>• Educação</strong> - Escolas e orientadores
                </div>
                <div className="bg-pink-50 p-3 rounded-lg">
                  <strong>• Segurança Pública</strong> - Polícias e Guardas Municipais
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <strong>• Conselho Tutelar</strong> - Representantes locais
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <strong>• Ministério Público</strong> - Como convidado
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-4">
              <h4 className="font-semibold text-yellow-900 mb-2">⚖️ Participação do Ministério Público</h4>
              <p className="text-sm text-gray-700 mb-2">
                O MP participa do Comitê na condição de <strong>convidado</strong>, sem direito a voto, 
                preservando sua independência funcional (ADI 3.463 STF).
              </p>
              <p className="text-xs text-gray-600">
                <strong>Atuação do MP:</strong> Fiscalização, orientação técnica, articulação institucional 
                e garantia do cumprimento das normas de proteção.
              </p>
            </div>

            <div className="bg-green-100 p-4 rounded">
              <h4 className="font-semibold text-green-900 mb-2">🎯 Atribuições do Comitê:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Elaborar fluxos de atendimento integrado</li>
                <li>✓ Capacitar profissionais da rede</li>
                <li>✓ Monitorar casos de violência</li>
                <li>✓ Garantir escuta protegida e depoimento especial</li>
                <li>✓ Articular políticas públicas de prevenção</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Seção 5: Lei Henry Borel */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center mb-6">
            <Shield className="h-8 w-8 text-primary-600 mr-3" />
            5. Lei Henry Borel (Lei 14.344/2022)
          </h2>

          <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-600">
            <h3 className="text-xl font-bold text-red-900 mb-4">🛡️ Medidas Protetivas Específicas</h3>
            <p className="text-gray-700 mb-4">
              Inspirada na <strong>Lei Maria da Penha</strong>, a Lei Henry Borel criou mecanismos de 
              proteção contra violência doméstica e familiar contra crianças e adolescentes, reconhecendo 
              sua <strong>hipervulnerabilidade</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-900 mb-3">🚫 Medidas ao Agressor</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Suspensão da posse ou porte de armas</li>
                  <li>✓ <strong>Afastamento do lar</strong> (medida prioritária)</li>
                  <li>✓ Proibição de aproximação da vítima</li>
                  <li>✓ Restrição ou suspensão de visitas</li>
                  <li>✓ Prestação de alimentos provisionais</li>
                  <li>✓ Frequência obrigatória a programas de recuperação</li>
                  <li>✓ Acompanhamento psicossocial individual/em grupo</li>
                  <li>✓ Comparecimento periódico em juízo</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-900 mb-3">🛡️ Medidas à Vítima</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Encaminhamento a programa oficial de proteção</li>
                  <li>✓ <strong>Recondução ao domicílio</strong> (após afastamento do agressor)</li>
                  <li>✓ Acompanhamento psicológico e social</li>
                  <li>✓ Inclusão em programas de assistência</li>
                  <li>✓ Matrícula em instituição de educação básica</li>
                  <li>✓ Inclusão em programa de acolhimento familiar</li>
                  <li>✓ Acolhimento institucional (excepcional)</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">🔑 Princípio da Prioridade ao Afastamento do Agressor</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Mudança de paradigma:</strong> A lei e a Resolução CNMP nº 287/2024 determinam que 
                se deve <strong>priorizar o afastamento do agressor</strong> em detrimento da retirada da 
                criança ou adolescente de seu lar.
              </p>
              <p className="text-xs text-gray-600">
                Objetivo: Evitar a punição da vítima, mantendo-a em seu ambiente familiar e comunitário, 
                preservando vínculos afetivos, escolares e sociais.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded mb-4">
              <h4 className="font-semibold text-yellow-900 mb-2">⚖️ Debate: Lei 9.099/95 (Juizados Especiais)</h4>
              <p className="text-sm text-gray-700 mb-2">
                O guia do CNMP destaca que a <strong>interpretação mais protetiva</strong> é a que estende 
                a vedação dos institutos da Lei dos Juizados Especiais Criminais (transação penal, composição 
                civil, suspensão condicional do processo) a <strong>qualquer crime ou contravenção</strong> 
                praticado contra crianças e adolescentes em contexto de violência doméstica.
              </p>
              <div className="bg-white p-2 rounded text-xs text-gray-700 mt-2">
                <strong>Fundamento:</strong> Reconhecimento da hipervulnerabilidade e necessidade de resposta 
                penal adequada à gravidade da conduta, evitando a banalização da violência.
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded mb-4">
              <h4 className="font-semibold text-purple-900 mb-3">👥 Novas Atribuições do Conselho Tutelar</h4>
              <p className="text-sm text-gray-700 mb-3">
                A Lei Henry Borel ampliou significativamente os poderes do Conselho Tutelar:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg">
                  <strong className="text-sm text-purple-900">1. Representação por Medidas Protetivas</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    Pode representar ao juiz pelo afastamento do agressor e concessão de medidas protetivas
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <strong className="text-sm text-purple-900">2. Produção Antecipada de Provas</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    Pode requerer a produção antecipada de provas em casos urgentes
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <strong className="text-sm text-purple-900">3. Requisição de Serviços</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    Requisitar serviços públicos (saúde, educação, assistência social)
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <strong className="text-sm text-purple-900">4. Comunicação ao MP</strong>
                  <p className="text-xs text-gray-600 mt-1">
                    <strong>Obrigação de comunicar ao MP em 24 horas</strong> sobre casos graves
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-100 border-l-4 border-red-700 p-4 rounded">
              <h4 className="font-semibold text-red-900 mb-2">📢 Dever de Comunicação Reforçado</h4>
              <p className="text-sm text-gray-700 mb-2">
                A Lei Henry Borel reforçou o dever de comunicar a violência às autoridades, com:
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ <strong>Proteção ao denunciante</strong> - Garantias legais contra retaliação</li>
                <li>✓ <strong>Tipificação criminal para omissão</strong> - Art. 245 do ECA</li>
                <li>✓ <strong>Prioridade no atendimento</strong> - Casos de violência doméstica têm tramitação prioritária</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Seção 6: Canais de Denúncia */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center mb-6">
            <Phone className="h-8 w-8 text-primary-600 mr-3" />
            6. Canais de Denúncia
          </h2>

          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600">
            <h3 className="text-lg font-bold text-red-900 mb-4">🚨 Canais Oficiais</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-red-600">
                <div className="text-3xl font-bold text-red-600 mb-2">100</div>
                <h4 className="font-semibold text-gray-800 mb-2">Disque Direitos Humanos</h4>
                <p className="text-xs text-gray-600">24h, ligação gratuita</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600 mb-2">190</div>
                <h4 className="font-semibold text-gray-800 mb-2">Polícia Militar</h4>
                <p className="text-xs text-gray-600">Emergências e flagrantes</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-purple-600">
                <div className="text-3xl font-bold text-purple-600 mb-2">181</div>
                <h4 className="font-semibold text-gray-800 mb-2">Disque Denúncia</h4>
                <p className="text-xs text-gray-600">Denúncias anônimas</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Seção 7: Atuação Integrada do MP */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center mb-6">
            <Gavel className="h-8 w-8 text-primary-600 mr-3" />
            7. Atuação Integrada do MP (Resolução CNMP 287/2024)
          </h2>

          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-600">
            <h3 className="text-xl font-bold text-indigo-900 mb-4">⚖️ Modelo Integrado de Atuação</h3>
            <p className="text-gray-700 mb-4">
              A <strong>Resolução CNMP nº 287/2024</strong> estabelece que a integração intersetorial 
              deve estar presente também dentro da própria instituição, tanto no planejamento quanto 
              na execução de medidas por membros atuantes em diversas áreas.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-900 mb-2">📢 Comunicação Formal</h4>
                <p className="text-sm text-gray-700 mb-2">
                  O membro do MP que primeiro tiver ciência de um caso deve <strong>comunicar formalmente</strong> 
                  aos demais promotores com atribuições pertinentes.
                </p>
                <p className="text-xs text-gray-600">
                  Promotorias: Infância, Criminal, Cível, Família, Violência Doméstica, Tutela Coletiva
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-purple-900 mb-2">🤝 Pactuação de Fluxos</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Criar <strong>fluxos internos</strong> para troca de informações e encaminhamento de casos.
                </p>
                <p className="text-xs text-gray-600">
                  Objetivo: Agilidade e evitar revitimização por múltiplos atendimentos
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-900 mb-2">🔄 Compartilhamento</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Viabilizar compartilhamento de dados por meio de <strong>sistemas informatizados</strong>.
                </p>
                <p className="text-xs text-gray-600">
                  SIPIA, CREAS, Conselhos Tutelares - respeitando sigilo legal
                </p>
              </div>
            </div>

            <div className="bg-indigo-100 p-4 rounded">
              <h4 className="font-semibold text-indigo-900 mb-2">🎯 Objetivos da Atuação Integrada:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Evitar duplicidade ou lacunas na proteção</li>
                <li>✓ Garantir resposta rápida e integrada</li>
                <li>✓ Prevenir revitimização por múltiplos atendimentos</li>
                <li>✓ Fortalecer a rede de proteção local</li>
                <li>✓ Monitorar sistematicamente os casos</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Seção 8: Revitimização e Violência Institucional */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center mb-6">
            <AlertTriangle className="h-8 w-8 text-primary-600 mr-3" />
            8. Revitimização e Violência Institucional
          </h2>

          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600">
            <h3 className="text-xl font-bold text-red-900 mb-4">⚠️ Lei nº 14.321/2022</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-900 mb-3">🔴 Revitimização</h4>
                <p className="text-sm text-gray-700 mb-3">
                  É o <strong>discurso ou prática institucional</strong> que submete crianças e adolescentes a:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Procedimentos <strong>desnecessários</strong></li>
                  <li>• Procedimentos <strong>repetitivos</strong></li>
                  <li>• Procedimentos <strong>invasivos</strong></li>
                  <li>• Que levem as vítimas a <strong>reviver a situação de violência</strong></li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-orange-900 mb-3">🟠 Violência Institucional</h4>
                <p className="text-sm text-gray-700 mb-3">
                  É a violência praticada por <strong>agente público</strong> que:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Prejudica o atendimento</li>
                  <li>• <strong>Gera revitimização</strong></li>
                  <li>• Viola direitos no atendimento institucional</li>
                  <li>• <strong>Crime tipificado</strong> pela Lei 14.321/22</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-100 border-l-4 border-red-700 p-4 rounded mb-4">
              <h4 className="font-semibold text-red-900 mb-2">⚖️ Responsabilidade do MP</h4>
              <p className="text-sm text-gray-800">
                A tipificação do crime de violência institucional reforça a <strong>responsabilidade 
                de todos os atores do Sistema de Garantia de Direitos</strong>, incluindo o Ministério Público, 
                de organizar seus procedimentos para garantir o <strong>cuidado integral</strong> e evitar 
                o sofrimento adicional das vítimas.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded">
              <h4 className="font-semibold text-yellow-900 mb-2">📋 Como Evitar Revitimização:</h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                <div className="bg-white p-2 rounded">✓ Realizar <strong>uma única oitiva</strong></div>
                <div className="bg-white p-2 rounded">✓ Ambiente <strong>acolhedor e privado</strong></div>
                <div className="bg-white p-2 rounded">✓ Profissionais <strong>capacitados</strong></div>
                <div className="bg-white p-2 rounded">✓ <strong>Comunicação</strong> entre órgãos</div>
                <div className="bg-white p-2 rounded">✓ <strong>Não questionar</strong> o relato</div>
                <div className="bg-white p-2 rounded">✓ <strong>Respeitar</strong> o tempo da vítima</div>
              </div>
            </div>
          </Card>
        </section>

        {/* Seção 8: MP-RS e Boas Práticas */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center mb-6">
            <Building className="h-8 w-8 text-primary-600 mr-3" />
            9. Experiências do MP-RS
          </h2>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600">
            <h3 className="text-xl font-bold text-green-900 mb-4">🏆 Ministério Público do Rio Grande do Sul</h3>
            <p className="text-gray-700 mb-4">
              O <strong>MP-RS</strong> é referência nacional na implementação de políticas de proteção 
              à criança e ao adolescente, com destaque para o trabalho da <strong>Promotora de Justiça 
              Cristiane Corrales</strong> e equipe.
            </p>

            <div className="bg-white p-4 rounded-lg border border-green-300 mb-4">
              <h4 className="font-semibold text-green-900 mb-3">👩‍⚖️ Dra. Cristiane Corrales - Promotora de Justiça</h4>
              <p className="text-sm text-gray-700 mb-3">
                Promotora de Justiça especializada em Infância e Juventude, referência em:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <strong className="text-green-900">• Implementação da Lei 13.431/2017</strong>
                  <p className="text-xs text-gray-600 mt-1">Escuta Protegida e Depoimento Especial no RS</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <strong className="text-blue-900">• Fluxos de Atendimento</strong>
                  <p className="text-xs text-gray-600 mt-1">Protocolos integrados entre MP, Judiciário e Rede</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <strong className="text-purple-900">• Capacitação de Profissionais</strong>
                  <p className="text-xs text-gray-600 mt-1">Formação da rede de proteção em todo o estado</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <strong className="text-orange-900">• Prevenção à Revitimização</strong>
                  <p className="text-xs text-gray-600 mt-1">Métodos para evitar sofrimento adicional às vítimas</p>
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded mb-4">
              <h4 className="font-semibold text-green-900 mb-2">📚 Materiais e Protocolos do MP-RS:</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ <strong>Guia de Atuação em Casos de Violência Sexual</strong> - Protocolo completo para promotores</li>
                <li>✓ <strong>Manual de Escuta Especializada</strong> - Orientações práticas para profissionais da rede</li>
                <li>✓ <strong>Cartilha de Direitos</strong> - Material educativo para crianças e adolescentes</li>
                <li>✓ <strong>Fluxogramas de Atendimento</strong> - Rotas de encaminhamento por tipo de violência</li>
                <li>✓ <strong>Curso EAD</strong> - Capacitação online para rede de proteção</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <h4 className="font-semibold text-blue-900 mb-2">🌟 Destaques do Modelo RS:</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <strong className="text-blue-900">1. Comitês Regionalizados</strong>
                  <p className="text-xs text-gray-700 mt-1">
                    Comitês de Gestão Colegiada com reuniões periódicas e 
                    monitoramento de casos.
                  </p>
                </div>
                <div>
                  <strong className="text-blue-900">2. Sistema Integrado</strong>
                  <p className="text-xs text-gray-700 mt-1">
                    Plataforma digital compartilhada entre MP, Judiciário, Delegacias e CREAS para 
                    evitar duplicidade de atendimentos.
                  </p>
                </div>
                <div>
                  <strong className="text-blue-900">3. Salas Especiais</strong>
                  <p className="text-xs text-gray-700 mt-1">
                    Estrutura física adequada em fóruns e delegacias para depoimento especial com 
                    gravação audiovisual.
                  </p>
                </div>
                <div>
                  <strong className="text-blue-900">4. Capacitação Contínua</strong>
                  <p className="text-xs text-gray-700 mt-1">
                    Programa permanente de formação para juízes, promotores, defensores, policiais 
                    e rede de proteção.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Recomendação CNMP nº 06/2025 */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Shield className="h-8 w-8 text-primary-600 mr-3" />
            10. Recomendação de Caráter Geral nº 06/2025 do CNMP - Prioridade Absoluta
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
                        <strong>💡 Exemplo Prático:</strong> Um procedimento criminal envolvendo abuso sexual contra 
                        criança deve ter prioridade máxima, com agendamento de audiências e análise de provas de forma célere.
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
                        <strong>💡 Exemplo Prático:</strong> Família com criança vítima de violência doméstica deve ter 
                        atendimento imediato na Promotoria, sem necessidade de agendamento prévio.
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
                        Primeira Infância estabelecida no Plano Nacional de Atuação Estratégica.
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
                        <strong>💡 Exemplo Prático:</strong> Caso de violência sexual em escola: articulação entre 
                        Promotoria da Infância + Educação + Criminal para resposta coordenada e integral.
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
                  <strong>✓ Reconhecer atuação estrutural</strong> (violência, acolhimento, SAF, etc.)
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
            <h3 className="text-lg font-bold text-green-900 mb-4">🎯 Convergência com o Enfrentamento à Violência</h3>
            <p className="text-gray-700 mb-4">
              A Recomendação nº 06/2025 <strong>reforça e operacionaliza</strong> todas as diretrizes apresentadas neste Guia:
            </p>

            <div className="space-y-3">
              <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Casos de Violência com Prioridade Máxima</p>
                  <p className="text-xs text-gray-600">
                    Processos envolvendo violência devem ter <strong>urgência de réu preso</strong>, especialmente 
                    quando demandarem depoimento especial (Art. 2º, §1º)
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Depoimento Especial como Prioridade</p>
                  <p className="text-xs text-gray-600">
                    Agendamento com <strong>máxima brevidade</strong> e produção antecipada de provas para evitar 
                    revitimização (Art. 5º + Lei 13.431/2017)
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Atuação Integrada Obrigatória</p>
                  <p className="text-xs text-gray-600">
                    Convergência entre Promotorias da Infância, Criminal, Violência Doméstica e outras áreas 
                    para resposta coordenada (Dimensão 5)
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Comitês de Gestão Colegiada Valorizados</p>
                  <p className="text-xs text-gray-600">
                    As Corregedorias devem <strong>reconhecer e valorizar</strong> a articulação intersetorial 
                    e construção de fluxos integrados (Art. 6º, IX)
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Recursos Privilegiados para Equipes Multidisciplinares</p>
                  <p className="text-xs text-gray-600">
                    Priorização orçamentária para psicólogos e assistentes sociais que atuam no atendimento 
                    de vítimas de violência (Dimensão 4)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-lg border border-green-300 mt-4">
              <p className="text-sm text-green-900 font-semibold mb-2">
                🌟 <strong>Impacto Prático:</strong>
              </p>
              <p className="text-sm text-gray-700">
                Esta Recomendação cria uma <strong>obrigatoriedade institucional</strong> de tratar casos de violência 
                contra crianças e adolescentes com <strong>máxima prioridade</strong> em todas as unidades do MP brasileiro, 
                reforçando a legitimidade e urgência das ações integradas descritas neste Guia.
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
            11. Integração com o Desenvolvimento Harmônico e Sustentável via atuação resolutiva de Planejamento e de Gestão Sistêmicos
          </h2>

          <Card className="mb-6 bg-gradient-to-r from-teal-50 to-emerald-50 border-l-4 border-teal-600">
            <h3 className="text-xl font-bold text-teal-900 mb-4">🌱 Violência contra Crianças e Adolescentes como Foco Prioritário do DHS</h3>
            <p className="text-gray-700 mb-4">
              O enfrentamento à violência contra crianças e adolescentes se enquadra perfeitamente nos 
              <strong> critérios de priorização do DHS</strong>, pois trata-se de um problema que:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">⚖️</div>
                <h4 className="font-semibold text-gray-800 mb-2">Alta Judicialização</h4>
                <p className="text-xs text-gray-600">
                  Gera grande volume de processos (medidas protetivas, destituições de poder familiar, ações penais)
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🚨</div>
                <h4 className="font-semibold text-gray-800 mb-2">Urgência e Gravidade</h4>
                <p className="text-xs text-gray-600">
                  Envolve risco à vida, desenvolvimento e integridade de pessoas em condição peculiar de desenvolvimento
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🌍</div>
                <h4 className="font-semibold text-gray-800 mb-2">Impacto Social</h4>
                <p className="text-xs text-gray-600">
                  Afeta toda a sociedade, perpetuando ciclos de violência e comprometendo o desenvolvimento humano
                </p>
              </div>
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">📋 Aplicando a Matriz de Convergência ao Enfrentamento à Violência contra Crianças e Adolescentes</h3>
            <p className="text-gray-700 mb-4">
              A <strong>Matriz de Convergência</strong> oferece um modelo metodológico para fomentar a formação de redes de cooperação 
              de enfrentamento à violência contra crianças e adolescentes. A seguir, os eixos da Matriz aplicados a este tema:
            </p>

            <div className="space-y-4">
              {/* Eixo I - Ambiente */}
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">I</div>
                  Ambiente/Habitat
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Escolher o ambiente para atuação:</strong> Definir territórios com maior incidência de violência 
                  contra crianças e adolescentes, identificar comunidades vulneráveis, mapear a rede local de proteção.
                </p>
                <ul className="text-xs text-gray-600 ml-6 space-y-1">
                  <li>• Análise de dados do Disque 100 e Conselhos Tutelares</li>
                  <li>• Mapeamento de regiões com maior número de notificações compulsórias (saúde)</li>
                  <li>• Identificação de áreas com rede de proteção deficiente (CREAS, CRAS)</li>
                  <li>• Levantamento de escolas e unidades de saúde em territórios prioritários</li>
                </ul>
              </div>

              {/* Eixo II - Atuação Interinstitucional */}
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                <h4 className="font-bold text-green-900 mb-2 flex items-center">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">II</div>
                  Atuação Interinstitucional
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Fomentar a atuação interinstitucional e com a comunidade:</strong> Articular MP, Judiciário, 
                  Conselhos Tutelares, Saúde, Educação, Assistência Social e sociedade civil.
                </p>
                <ul className="text-xs text-gray-600 ml-6 space-y-1">
                  <li>• <strong>Comitês de Gestão Colegiada:</strong> Reuniões periódicas para alinhamento e gestão de casos complexos (Decreto 9.603/2018)</li>
                  <li>• <strong>Fluxos Integrados:</strong> Protocolos intersetoriais para notificação, escuta especializada e depoimento especial</li>
                  <li>• <strong>Sistema Compartilhado:</strong> Plataforma digital entre MP, Judiciário, Delegacias, Conselhos Tutelares e CREAS</li>
                  <li>• <strong>Capacitação Conjunta:</strong> Formação integrada em escuta protegida e proteção integral (Lei 13.431/2017)</li>
                </ul>
              </div>

              {/* Eixo III - Atuação Institucional */}
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold text-purple-900 mb-2 flex items-center">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">III</div>
                  Atuação Institucional
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Fomentar a atuação institucional:</strong> Fortalecer as capacidades internas de cada 
                  instituição para responder adequadamente à violência contra crianças e adolescentes.
                </p>
                <ul className="text-xs text-gray-600 ml-6 space-y-1">
                  <li>• <strong>Ministério Público:</strong> Atuação integrada conforme Resolução CNMP 287/2024, promotorias especializadas, monitoramento de medidas protetivas</li>
                  <li>• <strong>Poder Judiciário:</strong> Varas da Infância, salas especiais para depoimento, decisões céleres sobre acolhimento institucional</li>
                  <li>• <strong>Conselhos Tutelares:</strong> Atendimento 24h, aplicação de medidas protetivas (Art. 101 do ECA), encaminhamentos à rede</li>
                  <li>• <strong>Saúde:</strong> Notificação compulsória obrigatória, atendimento psicológico especializado, documentação adequada de lesões</li>
                  <li>• <strong>Educação:</strong> Identificação precoce de sinais de violência, articulação com Conselho Tutelar, programas preventivos</li>
                  <li>• <strong>Assistência Social:</strong> CREAS para alta complexidade, CRAS para prevenção, acompanhamento de famílias</li>
                </ul>
              </div>

              {/* Eixo IV - Abordagens */}
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                <h4 className="font-bold text-orange-900 mb-2 flex items-center">
                  <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">IV</div>
                  Abordagens
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Trabalhar nas três frentes:</strong> Conscientização/Necessidade, Meios e Incentivos.
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-lg">
                    <h5 className="font-semibold text-orange-900 text-xs mb-2">4.1 - Conscientização/Necessidade</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Campanhas sobre tipos de violência (física, psicológica, sexual, negligência)</li>
                      <li>• Educação em escolas sobre direitos das crianças</li>
                      <li>• Desmistificação da "correção" violenta</li>
                      <li>• Divulgação do Disque 100 e canais de denúncia</li>
                      <li>• Capacitação de educadores e profissionais de saúde</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h5 className="font-semibold text-orange-900 text-xs mb-2">4.2 - Meios</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Salas de escuta especializada e depoimento especial</li>
                      <li>• Equipamentos de gravação audiovisual adequados</li>
                      <li>• Conselhos Tutelares estruturados e equipados</li>
                      <li>• Equipes multidisciplinares (psicólogos, assistentes sociais)</li>
                      <li>• Casas de acolhimento adequadas às diferentes faixas etárias</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <h5 className="font-semibold text-orange-900 text-xs mb-2">4.3 - Incentivos</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Programas de apoio a famílias vulneráveis (Bolsa Família, BPC)</li>
                      <li>• Acesso facilitado a creches e escolas de tempo integral</li>
                      <li>• Acompanhamento psicossocial gratuito</li>
                      <li>• Reconhecimento de instituições com boas práticas</li>
                      <li>• Priorização de políticas para famílias em situação de risco</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Eixo V - Etapas */}
              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
                <h4 className="font-bold text-teal-900 mb-2 flex items-center">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">V</div>
                  Etapas
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Seguir as etapas de implementação do DHS:</strong> Escolher foco prioritário e Mapear/Aperfeiçoar/Convergência Estrutural.
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <h5 className="font-semibold text-teal-900 text-sm mb-2">Passo 1: Escolher o Foco Prioritário</h5>
                    <p className="text-xs text-gray-700 mb-1">
                      <strong>Violência contra crianças e adolescentes</strong> - com ênfase em prevenção, escuta protegida 
                      e articulação da rede de proteção integral.
                    </p>
                    <p className="text-xs text-gray-600">
                      ✓ Critérios: Alta judicialização + Urgência (prioridade absoluta - CF Art. 227) + Impacto social significativo
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-lg">
                    <h5 className="font-semibold text-teal-900 text-sm mb-2">Passo 2.a: Mapear Necessidades, Possibilidades e Atividades</h5>
                    <ul className="text-xs text-gray-600 space-y-1 ml-4">
                      <li>• <strong>Necessidades:</strong> Dados do Disque 100, notificações compulsórias, lacunas na rede de proteção</li>
                      <li>• <strong>Possibilidades:</strong> Estruturas existentes (Conselhos Tutelares, CREAS, Varas da Infância), profissionais capacitados</li>
                      <li>• <strong>Atividades em curso:</strong> Comitês de Gestão Colegiada, fluxos de escuta especializada, capacitações realizadas</li>
                    </ul>
                  </div>

                  <div className="bg-white p-3 rounded-lg">
                    <h5 className="font-semibold text-teal-900 text-sm mb-2">Passo 2.b: Promover o Aperfeiçoamento e/ou a Convergência Estrutural</h5>
                    <p className="text-xs text-gray-700 mb-2">
                      <strong>Executar as 13 atividades ordenadas e interligadas</strong> adaptadas ao contexto da violência contra crianças e adolescentes:
                    </p>
                    <div className="space-y-2">
                      <div className="bg-blue-50 p-2 rounded border-l-2 border-blue-500">
                        <p className="text-xs text-gray-700">
                          <strong className="text-blue-900">1.</strong> Fomentar o DHS em audiências públicas, reuniões dos Comitês de Gestão Colegiada, grupos de trabalho
                        </p>
                      </div>
                      <div className="bg-green-50 p-2 rounded border-l-2 border-green-500">
                        <p className="text-xs text-gray-700">
                          <strong className="text-green-900">2.</strong> Reunir dados (Disque 100, notificações, medidas protetivas), elaborar diagnósticos territoriais
                        </p>
                      </div>
                      <div className="bg-purple-50 p-2 rounded border-l-2 border-purple-500">
                        <p className="text-xs text-gray-700">
                          <strong className="text-purple-900">3.</strong> Executar encaminhamentos à rede (CREAS, saúde, educação, Conselho Tutelar)
                        </p>
                      </div>
                      <div className="bg-orange-50 p-2 rounded border-l-2 border-orange-500">
                        <p className="text-xs text-gray-700">
                          <strong className="text-orange-900">4.</strong> Criar critérios e fluxos operacionais para escuta especializada e depoimento especial
                        </p>
                      </div>
                      <div className="bg-pink-50 p-2 rounded border-l-2 border-pink-500">
                        <p className="text-xs text-gray-700">
                          <strong className="text-pink-900">5.</strong> Formalizar convergências (TACs, recomendações, protocolos municipais, decretos)
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-2 rounded border-l-2 border-indigo-500">
                        <p className="text-xs text-gray-700">
                          <strong className="text-indigo-900">6.</strong> Realizar eventos interinstitucionais (seminários, encontros da rede de proteção)
                        </p>
                      </div>
                      <div className="bg-teal-50 p-2 rounded border-l-2 border-teal-500">
                        <p className="text-xs text-gray-700">
                          <strong className="text-teal-900">7.</strong> Realizar capacitações (escuta protegida, Lei 13.431/2017, proteção integral)
                        </p>
                      </div>
                      <div className="bg-red-50 p-2 rounded border-l-2 border-red-500">
                        <p className="text-xs text-gray-700">
                          <strong className="text-red-900">8.</strong> Criar estruturas de resolução de problemas (comitês gestores, grupos de acompanhamento de casos)
                        </p>
                      </div>
                      <div className="bg-yellow-50 p-2 rounded border-l-2 border-yellow-500">
                        <p className="text-xs text-gray-700">
                          <strong className="text-yellow-900">9.</strong> Promover ações contra irregularidades (inspeções, recomendações, ações civis públicas)
                        </p>
                      </div>
                      <div className="bg-cyan-50 p-2 rounded border-l-2 border-cyan-500">
                        <p className="text-xs text-gray-700">
                          <strong className="text-cyan-900">10.</strong> Implementar estratégias de comunicação (campanhas educativas, materiais informativos)
                        </p>
                      </div>
                      <div className="bg-lime-50 p-2 rounded border-l-2 border-lime-500">
                        <p className="text-xs text-gray-700">
                          <strong className="text-lime-900">11.</strong> Desenvolver projetos e políticas públicas (planos municipais de enfrentamento à violência)
                        </p>
                      </div>
                      <div className="bg-amber-50 p-2 rounded border-l-2 border-amber-500">
                        <p className="text-xs text-gray-700">
                          <strong className="text-amber-900">12.</strong> Promover a Convergência Estrutural (alinhar 8 aspectos: planos, indicadores, fluxos, meios, valoração, fiscalização, incentivos, comunicação)
                        </p>
                      </div>
                      <div className="bg-rose-50 p-2 rounded border-l-2 border-rose-500">
                        <p className="text-xs text-gray-700">
                          <strong className="text-rose-900">13.</strong> Revisar e aperfeiçoar periodicamente (reavaliações semestrais, ajustes com base em indicadores)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eixo VI - Fundamento */}
              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600">
                <h4 className="font-bold text-indigo-900 mb-2 flex items-center">
                  <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">VI</div>
                  Fundamento
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Sempre partir do foco prioritário considerando os critérios do DHS/PGS:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-6 space-y-1">
                  <li>✓ <strong>Equilíbrio econômico-social-ambiental:</strong> Prevenção gera economia (redução de custos futuros), justiça social (proteção integral) e ambiente saudável (famílias estruturadas)</li>
                  <li>✓ <strong>Convergência público-privado-sociedade civil:</strong> Atuação integrada de Estado, empresas (responsabilidade social) e ONGs</li>
                  <li>✓ <strong>Pensamento sistêmico:</strong> Compreensão da violência como fenômeno multicausal que exige respostas articuladas</li>
                  <li>✓ <strong>Atendimento de necessidades humanas integrais:</strong> Segurança, saúde, educação, convivência familiar, dignidade</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Exemplo Prático de Convergência Estrutural */}
          <Card className="mb-6 bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-600">
            <h3 className="text-lg font-bold text-cyan-900 mb-4">💼 Exemplo Prático: Convergência Estrutural na Escuta Protegida</h3>
            <p className="text-gray-700 mb-4">
              São exemplos concretos de <strong>Convergência Estrutural</strong> aplicada ao enfrentamento da violência contra crianças e adolescentes:
            </p>

            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-900 mb-2">📋 Alinhamento de Planos e Planejamentos</h4>
                <p className="text-sm text-gray-700">
                  Os Comitês de Gestão Colegiada elaboram <strong>planos individuais de atendimento</strong> para cada criança/adolescente, 
                  alinhando ações de diferentes instituições (saúde, educação, assistência social, Conselho Tutelar, MP) em torno de um objetivo comum.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">📊 Alinhamento de Critérios e Indicadores</h4>
                <p className="text-sm text-gray-700">
                  Todos os atores da rede utilizam <strong>os mesmos conceitos</strong> (escuta especializada vs depoimento especial, 
                  tipos de violência, medidas protetivas do Art. 101 do ECA). Isso elimina divergências e permite <strong>linguagem comum</strong>.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 mb-2">🔄 Alinhamento de Fluxos e Procedimentos</h4>
                <p className="text-sm text-gray-700">
                  O protocolo estabelece <strong>fluxos claros</strong>: identificação (escola/saúde) → notificação compulsória → 
                  Conselho Tutelar → escuta especializada → MP/Judiciário → depoimento especial. <strong>Todos sabem o que fazer e quando</strong>.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-900 mb-2">⚖️ Alinhamento de Meios de Realização</h4>
                <p className="text-sm text-gray-700">
                  Recursos compartilhados: salas de depoimento especial nos fóruns, sistema integrado de informações, 
                  equipes multidisciplinares do MP, casas de acolhimento da assistência social. <strong>Cada instituição contribui com seus meios</strong>.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-900 mb-2">🎯 Alinhamento de Modos de Valoração</h4>
                <p className="text-sm text-gray-700">
                  O sucesso não é mais medido apenas por número de processos, mas por <strong>redução de revitimização, 
                  tempo de resposta, qualidade do atendimento, reintegração familiar bem-sucedida</strong>. 
                  Todas as instituições avaliam seu desempenho pelos mesmos indicadores de resultado.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                <h4 className="font-semibold text-teal-900 mb-2">📢 Alinhamento de Comunicação e Formação</h4>
                <p className="text-sm text-gray-700">
                  Campanhas educativas unificadas sobre direitos das crianças, capacitação conjunta de profissionais da rede 
                  em escuta protegida, materiais informativos padronizados. <strong>Mensagem coerente e integrada</strong>.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-900 mb-2">🔍 Alinhamento de Critérios de Fiscalização</h4>
                <p className="text-sm text-gray-700">
                  Inspeções do MP, auditorias do Tribunal de Contas, avaliações de políticas públicas passam a verificar 
                  <strong> implementação da escuta protegida, estrutura dos Conselhos Tutelares, funcionamento dos Comitês</strong> - 
                  critérios alinhados ao DHS.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-pink-500">
                <h4 className="font-semibold text-pink-900 mb-2">🎁 Alinhamento de Incentivos</h4>
                <p className="text-sm text-gray-700">
                  Profissionais e instituições que alcançam melhores resultados (menor revitimização, maior taxa de reintegração familiar) 
                  recebem <strong>reconhecimento, premiações, recursos adicionais</strong>. Incentivos orientados para o DHS.
                </p>
              </div>
            </div>
          </Card>

          {/* Benefícios da Integração */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600">
            <h3 className="text-lg font-bold text-green-900 mb-4">✨ Benefícios da Integração DHS no Enfrentamento à Violência contra Crianças e Adolescentes</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Ganhos para as Instituições
                </h4>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Coordenação aprimorada:</strong> Eliminação de duplicidade de atendimentos e lacunas na proteção</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Eficiência operacional:</strong> Fluxos claros reduzem tempo de resposta e uso de recursos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Cultura de colaboração:</strong> Superação de compartimentalização entre saúde, educação, assistência e justiça</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Gestão baseada em evidências:</strong> Monitoramento com indicadores compartilhados entre toda a rede</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Inovação contínua:</strong> Revisão periódica com aprendizado coletivo dos Comitês de Gestão Colegiada</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Ganhos para Crianças, Adolescentes e Sociedade
                </h4>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Proteção efetiva:</strong> Resposta rápida e articulada previne agravamento da violência</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Evitar revitimização:</strong> Escuta especializada e depoimento especial reduzem repetição de relatos traumáticos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Integralidade:</strong> Apoio jurídico, psicológico, social e educacional coordenado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Desenvolvimento saudável:</strong> Intervenções tempestivas preservam potencial de desenvolvimento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Interrupção de ciclos:</strong> Prevenção de perpetuação intergeracional da violência</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
              <p className="text-sm text-green-900 font-semibold mb-2">
                🌱 <strong>Visão de Futuro:</strong> DHS como Paradigma de Proteção Integral Sistêmica
              </p>
              <p className="text-xs text-gray-700">
                A integração da escuta protegida e da rede de proteção ao DHS representa uma mudança de paradigma: de ações fragmentadas 
                e reativas para uma <strong>abordagem sistêmica, preventiva e transformadora</strong>. A violência contra crianças e 
                adolescentes, compreendida como evento evitável, deixa de ser tratada como fatalidade e passa a ser objeto de 
                <strong> políticas públicas integradas</strong> que protegem vidas, garantem desenvolvimento saudável e 
                constroem uma sociedade mais justa e harmônica.
              </p>
            </div>
          </Card>

          {/* Link para Implementação */}
          <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-600">
            <div className="flex items-start">
              <FileText className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-900 mb-2">📚 Aprofunde-se na Metodologia DHS</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Para compreender em detalhes a Matriz de Convergência, as 13 atividades ordenadas e os 8 aspectos 
                  da Convergência Estrutural, visite a página de Implementação deste guia.
                </p>
                <Link 
                  to="/implementacao" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm underline"
                >
                  <ArrowRight className="h-4 w-4 mr-1" />
                  Ir para Guia de Implementação
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* Conclusão Temporária */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-primary-50 to-accent-50 border-2 border-primary-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Heart className="h-8 w-8 text-primary-600 mr-3" />
              Proteção Integral
            </h2>
            <p className="text-gray-700 mb-4">
              A proteção de crianças e adolescentes é responsabilidade de todos: família, 
              sociedade e Estado.
            </p>
            <div className="bg-white p-4 rounded-lg border border-primary-300 mt-4">
              <p className="text-sm text-gray-800 font-semibold mb-2">
                📞 <strong>Em caso de violência:</strong>
              </p>
              <div className="grid md:grid-cols-3 gap-2 text-xs">
                <div className="bg-red-50 p-2 rounded">🚨 <strong>Disque 100</strong></div>
                <div className="bg-blue-50 p-2 rounded">👮 <strong>190</strong> - Emergência</div>
                <div className="bg-green-50 p-2 rounded">🏛️ <strong>Conselho Tutelar</strong></div>
              </div>
            </div>
          </Card>
        </section>

      </div>
    </div>
  )
}
