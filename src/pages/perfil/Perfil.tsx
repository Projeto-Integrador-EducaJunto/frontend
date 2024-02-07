import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlert } from '../../utils/ToastAlerts'
// import ListaPostagensUser from '../../components/postagens/listaPostagensUser/ListaPostagensUser';
import ListaPostagensUser from '../../components/postagens/listaPostagensUser/ListaPostagensUser';
import Postagem from '../../models/Postagem';
import { buscar } from "../../services/Service";
import { DNA } from "react-loader-spinner";


const Perfil = () => {

    let navigate = useNavigate();

    const { usuario } = useContext(AuthContext)

    let numPost = 0

    useEffect(() => {
        if (usuario.token === '') {
            toastAlert('Você precisa estar logado!', "info")
            navigate('/login')
        }
    }, [usuario.token])

    const [postagens, setPostagens] = useState<Postagem[]>([]);


    async function buscarPostagens() {
        try {
            await buscar('/postagens', setPostagens, {
                headers: {
                    Authorization: usuario.token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlert('O token expirou, favor logar novamente', "erro")
            }
        }
    }

    useEffect(() => {
        buscarPostagens()
    }, [postagens.length])

    {
        postagens.map((postagem) => (
            postagem.usuario?.id == usuario.id ?
                numPost += 1 : ""
        )
        )
    }


    return (
        <>

            <div className='container mx-auto pt-60 p-5 rounded-lg '>
                <section className='mt-10'>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:w-full">
                        <section>
                            <div className=''>
                                <div className='bg-blue-300 border rounded-lg shadow-blue-200 shadow-xl  justify-items-center m-2 p-2 overflow-hidden'>
                                    <div className='grid grid-cols-3'>
                                        <div></div>
                                        <div className='justify-self-center'>
                                            <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full h-40' />
                                        </div>
                                        <div></div>
                                    </div>
                                    <div className='pt-4'>
                                        <Link to={`/atualizarPerfil/${usuario.id}`} className=' bg-blue-500  hover:bg-blue-700 text-white rounded-lg  flex items-center justify-center py-2'>
                                            <button>Editar</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className='text-left col-span-2 bg-blue-300 shadow-blue-200 border rounded-lg shadow-xl m-2 p-2 text-xl md:w-1/2 lg:w-full'>
                            <div className='col-span-2  '>
                                <div className=' grid grid-cols-2 border-b-2 border-slate-300 p-4   text-center'>
                                    <div className='bold text-white text-2xl '>
                                        <p>Email </p>
                                    </div>
                                    <div className=' text-blue-900 text-2xl '>
                                        <p>{usuario.usuario}</p>
                                    </div>
                                </div>
                                <div className=' grid grid-cols-2 border-b-2 border-slate-300  p-4 text-center'>
                                    <div className=' bold  text-white text-2xl '>
                                        <p>Nome </p>
                                    </div>
                                    <div className=' text-blue-900 text-2xl '>
                                        <p>{usuario.nome}</p>
                                    </div>
                                </div>
                                <div className=' grid grid-cols-2 border-b-2 border-slate-300  p-4 text-center'>
                                    <div className=' bold  text-white text-2xl '>
                                        <p>Postagens </p>
                                    </div>
                                    <div className=' text-blue-900 text-2xl '>
                                        <p>{numPost}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <section>
                        <div className='grid grid-cols-4 my-20'>
                            <div></div>
                            <div className='text-center text-5xl col-span-2 '>
                                <h2>Postagens do Usuario</h2>
                            </div>
                        </div>
                    </section >
                    {numPost == 0 && (
                        <div className="flex justify-center items-center h-screen">
                            <DNA
                                visible={true}
                                height="200"
                                width="200"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper mx-auto"
                            />
                        </div>
                    )}
                    {/* <ListaPostagensUser /> */}
                    <ListaPostagensUser />
                </section>
            </div >
        </>
    )
}

export default Perfil

