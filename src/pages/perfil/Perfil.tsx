import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';
import { ToastAlerta } from '../../utils/ToastAlerts';



const Perfil = () => {

    let navigate = useNavigate();

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === '') {
            ToastAlerta('Você precisa estar logado!', "info")
            navigate('/login')
        }
    }, [usuario.token])

    return (
        <>
            <div className='container mx-auto pt-60 p-5  bg-blue-100 rounded-lg '>
                <section>
                    <div className="grid grid-cols-3">
                        <section>
                            <div className='justify-items-center bg-white rounded-lg m-2 p-2 overflow-hidden'>
                                <div className='grid grid-cols-3'>
                                    <div></div>
                                    <div className='justify-self-center'>
                                        <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded h-40' />
                                    </div>
                                    <div></div>
                                </div>
                                <div className=' bold text-black text-xl'>
                                    <p>{usuario.nome}</p>
                                    <p>{usuario.usuario}</p>
                                </div>
                                <Link to={`/atualizarPerfil/${usuario.id}`} className=' bg-blue-200 text-white  hover: flex items-center justify-center py-2'>
                                    <button>Editar</button>
                                </Link>
                            </div>
                        </section>
                        <div className='text-left col-span-2 bg-white rounded-lg m-2 p-2 text-xl grid grid-cols-3'>
                            <div className='col-span-2'>
                                <div className="">
                                    <div className=' grid grid-cols-2 w-full border-b-2 border-slate-300 p-2'>
                                        <div className='text-left  bold text-black text-xl '>
                                            <p>usuario :</p>
                                        </div>
                                        <div className='text-left text-blue-900 text-lg'>
                                            <p>{usuario.usuario}</p>
                                        </div>
                                    </div>
                                    <div className=' grid grid-cols-2 border-b-2 border-slate-300 p-2'>
                                        <div className='text-left bold  text-black text-xl'>
                                            <p>nome :</p>
                                        </div>
                                        <div className='text-left text-blue-900 text-lg'>
                                            <p>{usuario.nome}</p>
                                        </div>
                                    </div>
                                    <div className=' grid grid-cols-2 border-b-2 border-slate-300 p-2'>
                                        <div className='text-left bold 2 text-black text-xl'>
                                            <p>foto :</p>
                                        </div>
                                        <div className='text-left 2 text-blue-900 text-lg'>
                                            <p>{usuario.foto}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Perfil