import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Usuario from "../../models/Usuario";
import { atualizar } from "../../services/Service";

function Atualizar() {

    let navigate = useNavigate()

    // const [confirmaSenha, setConfirmaSenha] = useState<string>("")

    // const { usuario, handleLogout } = useContext(AuthContext)
    // const token = usuario.token

    // let [usuarioUse, setUsuarioUse] = useState<Usuario>({
    //     id: 0,
    //     nome: '',
    //     usuario: '',
    //     senha: '',
    //     foto: ''
    // })

    // const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    //     id: 0,
    //     nome: '',
    //     usuario: '',
    //     senha: '',
    //     foto: ''
    // })

    // useEffect(() => {
    //     if (usuarioResposta.id !== 0) {
    //         back()
    //     }
    // }, [usuarioResposta])

    // function back() {
    //     navigate('/login')
    // }

    // function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    //     setConfirmaSenha(e.target.value)
    // }

    // function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    //     setUsuarioUse({
    //         ...usuarioUse,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // async function atualizarUsuario(e: ChangeEvent<HTMLFormElement>) {
    //     e.preventDefault()

    //     usuarioUse.id == usuario.id
    //     if (usuarioUse.nome === "" || usuarioUse.foto === "" || usuarioUse.usuario) {
    //         usuarioUse.nome == usuario.nome
    //         usuarioUse.foto == usuario.foto
    //         usuarioUse.usuario == usuario.usuario
    //     }

    //     if (confirmaSenha === usuarioUse.senha && usuarioUse.senha.length >= 8) {

    //         try {
    //             await atualizar(`/usuarios/atualizar`, usuarioUse, setUsuarioResposta,{
    //                              headers: { 'Authorization': token }
    //                          })
    //             alert('Usuário cadastrado com sucesso')

    //         } catch (error) {
    //             alert('Erro ao cadastrar o Usuário')
    //         }

    //     } else {
    //         alert('Dados inconsistentes. Verifique as informações de cadastro.')
    //         setUsuarioUse({ ...usuario, senha: "" }) // Reinicia o campo de Senha
    //         setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    //     }
    // }


    const  usuarioCad  = useContext(AuthContext)
    const token = usuarioCad.usuario.token

    const [confirmaSenha, setConfirmaSenha] = useState<string>("")

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    function back() {
        navigate('/login')
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

    async function atualizarUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        usuario.id == usuarioCad.usuario.id

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

            try {
                await atualizar(`/usuarios/atualizar`, usuario, setUsuario,{
                    headers: { 'Authorization': token }
                })
                alert('Usuario foi atualizado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O Token Expirou!')
                } else {
                    alert('Erro ao atualizar o Usuario.')
                }

            }
        } else {
            alert('Dados inconsistentes. Verifique as informações de cadastro.')
            setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
            setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">

                <div className='w-full flex items-center justify-start'>
                    <form className='flex justify-center items-center flex-col w-2/3 gap-3 bg-gray-200 p-4 rounded-lg' onSubmit={atualizarUsuario}>
                        <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
                        <div className="flex flex-col w-full">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder={usuario.nome}
                                className="border-2 border-slate-700 rounded p-2"
                                value={usuario.nome}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="usuario">Usuario</label>
                            <input
                                type="text"
                                id="usuario"
                                name="usuario"
                                placeholder={usuario.usuario}
                                className="border-2 border-slate-700 rounded p-2"
                                value={usuario.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="foto">Foto</label>
                            <input
                                type="text"
                                id="foto"
                                name="foto"
                                placeholder={usuario.foto}
                                className="border-2 border-slate-700 rounded p-2"
                                value={usuario.foto}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Digite a Senha"
                                className="border-2 border-slate-700 rounded p-2"
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
                                className="border-2 border-slate-700 rounded p-2"
                                value={confirmaSenha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                            />
                        </div>

                        <p>${usuario.nome}</p>
                        <p>${usuario.id}</p>
                        <p>${usuario.usuario}</p>
                        <div className="flex justify-around w-full gap-8">
                            <button className='rounded text-white bg-orange-600 hover:bg-red-700 w-1/2 py-2' onClick={back}>
                                Cancelar
                            </button>
                            <button className='rounded text-white bg-blue-800  hover:bg-blue-600 w-1/2 py-2' type='submit'>
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Atualizar