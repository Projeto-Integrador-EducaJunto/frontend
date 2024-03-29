import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './Login.css';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import Usuario from '../../models/Usuario';

function Login() {

  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext)

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  )

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home")
    }
  }, [usuario])

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/home')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
    console.log(usuarioLogin)
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  return (
    <>

      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-blue-400 fundoCadastro">
        <div className='text-white mx-80  backdrop-blur-sm'>
          <h1 className="my-4  text-6xl font-bold leading-tight text-orange-500" style={{ textShadow: '2px 2px 1px rgba(0, 0, 0, 0.5)' }} >
            APRENDA, ENSINE, COMPARTILHE!
          </h1>
          <p className="leading-normal text-4xl mb-10  text-white backdrop-blur-md" style={{ textShadow: '2px 2px 1px rgba(0, 0, 0, 0.5)' }}>
            Conecte-se e seja parte da democratização do saber.
          </p>
        </div>
        <form className="flex justify-center items-center flex-col w-2/3  h-full gap-4 bg-blue-500 bg-opacity-55 text-white  p-4 " onSubmit={login}>
          <h2 className="text-white text-5xl">Entrar</h2>
          <div className="flex flex-col w-2/3 round-full">
            <label htmlFor="usuario">E-mail de usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2  text-slate-600 border-blue-200 hover:bg-orange-100  hover:border-blue-300  rounded-2xl p-2"
              value={usuarioLogin.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col w-2/3">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2  text-slate-600 border-blue-200 hover:bg-orange-100  hover:border-blue-300 rounded-2xl p-2"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex justify-around w-2/4 gap-5 opacity-90">
            <button className='rounded-full  shadow-md hover:scale-[1.1] shadow-orange-400 text-white bg-orange-500 hover:bg-orange-600 w-1/2 py-2' onClick={back}>
              Cancelar
            </button>
            <button
              type='submit'
              className="flex justify-center rounded-full  shadow-md hover:scale-[1.1] shadow-blue-400 text-white bg-blue-500 hover:bg-blue-600 w-1/2 py-2">
              {isLoading ? <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
                <span>Iniciar sessão</span>
              }
            </button>
          </div>
          <hr className="border-blue-400 w-full" />

          <p className=' backdrop-blur-sm'>
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-orange-600 hover:underline  ">
              Cadastre-se
            </Link>
          </p>
        </form>

      </div>
    </>
  );
}

export default Login;