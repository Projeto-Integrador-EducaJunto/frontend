import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Sobre from "./pages/sobre/Sobre"
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext'
import FormTema from "./components/temas/formTema/FormTema"
import DeletarTema from "./components/temas/deletarTema/DeletarTema"
import ListaTemas from "./components/temas/listaTemas/ListaTemas"
import FormPostagem from "./components/postagens/formPostagem/FormPostagem"
import ListaPostagens from "./components/postagens/listaPostagens/listaPostagens"
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem"
import Historias from "./pages/historias/Historias"
import Perfil from "./pages/perfil/Perfil"
import Atualizar from "./pages/atualizar/Atualizar"

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className={`min-h-[80vh]`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/atualizarPerfil/:id" element={<Atualizar />} />
              <Route path="/home" element={<Home />} />

              <Route path="/perfil" element={<Perfil />} />
              <Route path="/sobre" element={<Sobre />} />

              <Route path="/cadastrarTema" element={<FormTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/editarTema/:id" element={<FormTema />} />

              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarPostagem" element={<FormPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

              <Route path="/historias" element={<Historias />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App

