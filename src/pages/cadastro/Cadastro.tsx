import { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'
import { toastAlert } from '../../utils/ToastAlerts'

function Cadastro() {

  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/home')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        toastAlert("Usuário cadastrado com sucesso!", "sucesso")

      } catch (error) {
        toastAlert("Erro ao cadastrar o usuário!", "erro")
      }

    } else {
      toastAlert("Dados inconsistentes. Verifique as informações de cadastro.", "erro")
      setUsuario({ ...usuario, senha: "" }) 
      setConfirmaSenha("")                  
    }
  }

  return (
    <>
      <div className=" text-white h-screen place-items-center font-bold fundoCadastro">

        <div className=' flex justify-center container mx-auto px-10 h-screen w-full items-center '>
          <form className='flex flex-col items-center h-2/3 w-1/3 gap-4 bg-opacity-60 bg-orange-300 p-4 rounded-2xl' onSubmit={cadastrarNovoUsuario}>
            <h2 className=' text-5xl'>Cadastro</h2>
            <div className="flex flex-col w-full">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="border-2  text-slate-500 border-orange-200 hover:bg-blue-100  hover:border-blue-300 rounded-md p-2"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="usuario">E-mail de usuário</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="border-2  text-slate-500 border-orange-200 hover:bg-blue-100  hover:border-blue-300 rounded-md p-2"
                value={usuario.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="foto">Foto (link)</label>
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Foto"
                className="border-2  text-slate-500 border-orange-200  hover:bg-blue-100  hover:border-blue-300 rounded-md p-2"
                value={usuario.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="senha">Senha (min. 8 caracteres)</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 text-slate-500 border-orange-200 hover:bg-blue-100 hover:border-blue-300 rounded-md p-2 "
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="border-2 text-slate-500 border-orange-200 hover:bg-blue-100 hover:border-blue-300 rounded-md p-2 "
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
              />
            </div>
            <div className="flex justify-around w-3/4 gap-10 opacity-90">
            <button className='rounded-full  shadow-md hover:scale-[1.1] shadow-orange-400 text-white bg-orange-500 hover:bg-orange-600 w-1/2 py-2' onClick={back}>
              Cancelar
            </button>
              <button className='rounded-full  shadow-md hover:scale-[1.1] shadow-blue-400 text-white bg-blue-500 hover:bg-blue-600 w-1/2 py-2' type='submit'>
                Cadastrar
              </button>
            </div>
            <p>
            Já possui uma conta?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Entrar.
            </Link>
          </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Cadastro