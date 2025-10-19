import { Link } from 'react-router-dom'
import { AlertTriangle, Users, Brain, TrendingDown, ArrowRight } from 'lucide-react'
import Card from '../components/Card'

export default function Diagnostico() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Diagnóstico da Crise</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compreenda as causas raízes dos problemas atuais e os paradigmas de pensamento que precisam ser superados
          </p>
        </div>

        {/* Metáfora do Barco */}
        <Card className="mb-12 bg-blue-50 border-l-4 border-blue-600">
          <div className="flex items-start">
            <AlertTriangle className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">A Tripulação à Deriva</h3>
              <p className="text-gray-700 leading-relaxed">
                O contexto atual pode ser comparado a uma tripulação em um barco à deriva durante uma tempestade, 
                sem mapa ou bússola. A sobrevivência depende da <strong>colaboração</strong>. A crise não se limita 
                a questões materiais, mas reflete um <strong>"vazio" mais profundo</strong>, ligado à falta de valores essenciais.
              </p>
            </div>
          </div>
        </Card>

        {/* Seção 1: Crise de Valores */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Users className="h-8 w-8 text-primary-600 mr-3" />
            1. A Crise de Valores e o Individualismo
          </h2>
          
          <Card className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Consulta do PNUD</h3>
            <p className="text-gray-700 mb-4">
              Uma consulta do <strong>Programa das Nações Unidas para o Desenvolvimento (PNUD)</strong> com 
              meio milhão de brasileiros apontou que a melhoria da qualidade de vida depende fundamentalmente da promoção de valores como:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Respeito', 'Tolerância', 'Responsabilidade', 'Paz'].map((valor) => (
                <div key={valor} className="bg-accent-50 p-3 rounded-lg text-center">
                  <span className="font-semibold text-accent-700">{valor}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-red-50">
            <h3 className="text-lg font-semibold mb-3 text-red-900">O Individualismo Extremado</h3>
            <p className="text-gray-700 mb-3">
              É uma consequência direta dessa crise de valores. Ele se manifesta em:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span><strong>Percepção limitada aos cinco sentidos</strong>, condicionada ao "gostar/não gostar"</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span><strong>Busca de poder</strong> (econômico, irregularidades) para manipular sistemas em benefício próprio</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span><strong>Incapacidade</strong> de perceber as necessidades alheias</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span><strong>Ineficácia</strong> na resolução de problemas complexos e interconectados</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span><strong>Geração de conflitos</strong> e insustentabilidade geral</span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Seção 2: Paradigmas Limitantes */}
        <section className="mb-12">
          <h2 className="section-subtitle flex items-center">
            <Brain className="h-8 w-8 text-primary-600 mr-3" />
            2. Paradigmas de Pensamento Limitantes
          </h2>
          <p className="text-gray-700 mb-6">
            As formas predominantes de pensar e agir, que sustentam o individualismo, são insuficientes 
            para lidar com a complexidade dos problemas modernos:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-purple-600">
              <h3 className="text-lg font-semibold mb-3 text-purple-900">Visão Cartesiana</h3>
              <p className="text-gray-700">
                Baseada na <strong>separação radical entre mente e matéria</strong>, fragmenta a realidade 
                e impede a compreensão do todo.
              </p>
            </Card>

            <Card className="border-t-4 border-orange-600">
              <h3 className="text-lg font-semibold mb-3 text-orange-900">Concepção Mecanicista</h3>
              <p className="text-gray-700">
                Vê o universo e o ser humano como <strong>máquinas</strong>, reduzindo a realidade a um 
                sistema de causa e efeito linear e materialista, ignorando interconexões mais profundas.
              </p>
            </Card>

            <Card className="border-t-4 border-red-600">
              <h3 className="text-lg font-semibold mb-3 text-red-900">Pensamento Linear</h3>
              <p className="text-gray-700">
                Opera com <strong>causalidade simples</strong> ("se tem dor, toma-se analgésico"), 
                levando a soluções imediatistas que não atacam as causas estruturais dos problemas.
              </p>
            </Card>
          </div>
        </section>

        {/* Problema: Enxugar Gelo */}
        <Card className="mb-12 bg-yellow-50 border-l-4 border-yellow-600">
          <div className="flex items-start">
            <TrendingDown className="h-8 w-8 text-yellow-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-900">"Enxugar Gelo"</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Essa abordagem resulta em <strong>"fazer mais das mesmas coisas"</strong>, um ciclo ineficiente. 
                Albert Einstein teria definido como insanidade: <em>"fazer a mesma coisa repetidamente e esperar resultados diferentes"</em>.
              </p>
              <p className="text-gray-700 font-semibold">
                Esses paradigmas geram uma dificuldade de atuar nas causas, focando apenas nas consequências 
                e inviabilizando a sobrevivência das espécies no planeta.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary-600 to-accent-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Pronto para conhecer as soluções?</h3>
          <p className="text-lg mb-6">
            Descubra como o pensamento sistêmico e o DHS podem transformar essa realidade.
          </p>
          <Link
            to="/solucoes"
            className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Ir para Soluções
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
