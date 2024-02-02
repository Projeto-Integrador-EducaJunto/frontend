import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import Sobre from "./pages/sobre/Sobre"
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext'
import FormTema from "./components/temas/formTema/FormTema"
import DeletarTema from "./components/temas/deletarTema/DeletarTema"
import ListaTemas from "./components/temas/listaTemas/ListaTemas"
import ListaPostagens from "./components/postagens/listaPostagens/listaPostagens"

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className={`min-h-[80vh]`}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/cadastrarTema" element={<FormTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/editarTema/:id" element={<FormTema />} />

              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarPostagem" element={<Login />} />
              <Route path="/editarPostagem/:id" element={<Login />} />
              <Route path="/deletarPostagem/:id" element={<Login />} />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App

