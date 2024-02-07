import React from 'react'
import { Link } from "react-router-dom";

function SobreOds() {
    return (
        <>

            <section className="bg-blue-500 border-b py-8 ">
                <div className="container mx-auto grid grid-cols-4 pt-4 pb-12">
                    <div></div>
                    <div className="w-full md:w-1/3 lg:w-full my-20 rounded col-span-2 flex flex-col">
                        <div className="flex-1 bg-white rounded-t rounded-b-none shadow-2xl shadow-white">
                            <div className="w-full font-bold text-xl text-center text-gray-800 px-4 py-6" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}>
                                <h2>Educação de qualidade</h2>

                            </div>
                            <div className="w-full font-bold text-xl text-center text-gray-800 px-4 py-6" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}>
                                <h3>Objetivo 4. Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todas e todos</h3>
                            </div>
                            <div className="w-full font-bold text-xl text-left text-gray-600 px-4 py-6" >
                                <p className="text-gray-600 px-4 mb-3">
                                    4.1 Até 2030, garantir que todas as meninas e meninos completem o ensino primário e secundário livre, equitativo e de qualidade, que conduza a resultados de aprendizagem relevantes e eficazes
                                </p>
                                <p className="text-gray-600 px-4 mb-3" >
                                    4.2 Até 2030, garantir que todos as meninas e meninos tenham acesso a um desenvolvimento de qualidade na primeira infância, cuidados e educação pré-escolar, de modo que eles estejam prontos para o ensino primário
                                </p>
                                <p className="text-gray-600 px-4 mb-3" >
                                    4.3 Até 2030, assegurar a igualdade de acesso para todos os homens e mulheres à educação técnica, profissional e superior de qualidade, a preços acessíveis, incluindo universidade
                                </p>
                                <p className="text-gray-600 px-4 mb-3" >
                                    4.4 Até 2030, aumentar substancialmente o número de jovens e adultos que tenham habilidades relevantes, inclusive competências técnicas e profissionais, para emprego, trabalho decente e empreendedorismo
                                </p>
                            </div>
                        </div>

                    </div>
                    <div></div>
                </div>
                <div className="flex items-center justify-center">
                    <Link to="https://brasil.un.org/pt-br/sdgs/4" target="_blank">
                        <button className="bg-orange-500 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:scale-105 duration-300">
                            Descubra Mais
                        </button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default SobreOds