import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Diagnostico from './pages/Diagnostico'
import Solucoes from './pages/Solucoes'
import Metodologias from './pages/Metodologias'
import Implementacao from './pages/Implementacao'
import Recursos from './pages/Recursos'
import FAQ from './pages/FAQ'
import CalculadoraDHS from './pages/CalculadoraDHS'
import PlanoContingencia from './pages/PlanoContingencia'
import CaoNaEstrada from './pages/CaoNaEstrada'
import ViolenciaECA from './pages/ViolenciaECA'
import PrimeiraInfancia from './pages/PrimeiraInfancia'
import OrganizacoesCriminosas from './pages/OrganizacoesCriminosas'
import ChatBot from './components/ChatBot'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnostico" element={<Diagnostico />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/metodologias" element={<Metodologias />} />
        <Route path="/implementacao" element={<Implementacao />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/calculadora" element={<CalculadoraDHS />} />
        <Route path="/plano-contingencia" element={<PlanoContingencia />} />
        <Route path="/cao-na-estrada" element={<CaoNaEstrada />} />
        <Route path="/violencia-eca" element={<ViolenciaECA />} />
        <Route path="/primeira-infancia" element={<PrimeiraInfancia />} />
        <Route path="/organizacoes-criminosas" element={<OrganizacoesCriminosas />} />
      </Routes>
      <ChatBot />
    </Layout>
  )
}

export default App
