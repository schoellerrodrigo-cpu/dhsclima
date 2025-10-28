import { AlertTriangle, Shield, Heart, Scale, Phone, Eye, Gavel, Building } from 'lucide-react'
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
                    <td className="p-3">Atuação <strong>transversal do MP</strong></td>
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

        {/* Seção 7: Atuação Transversal do MP */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center mb-6">
            <Gavel className="h-8 w-8 text-primary-600 mr-3" />
            7. Atuação Transversal do MP (Resolução CNMP 287/2024)
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
              <h4 className="font-semibold text-indigo-900 mb-2">🎯 Objetivos da Atuação Transversal:</h4>
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
                    Comitês de Gestão Colegiada em todas as comarcas, com reuniões periódicas e 
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
