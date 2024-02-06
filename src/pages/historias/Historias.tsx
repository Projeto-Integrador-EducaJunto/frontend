import { useState } from "react";

const Historias = () => {
    const [isVisibleJoao, setIsVisibleJoao] = useState(true);
    const [isVisibleMaria, setIsVisibleMaria] = useState(true);
    const [isVisibleLucas, setIsVisibleLucas] = useState(true);
    return (
        <>
            <div className="p-36">
                <section className="bg-blue-500 border-b rounded-lg py-8 shadow-2xl shadow-blue-500">
                    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                        <div className={isVisibleJoao ? "w-full md:w-1/3 h-1/2 p-6 flex flex-col" : "w-full md:w-1/3 p-6 flex flex-col"}>
                            <div className="flex-1 bg-white rounded-t rounded-b-none shadow-lg">
                                <div className="w-full font-bold text-xl text-gray-800 px-4 py-6" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}>
                                    Historia do  João Silva
                                </div>
                                <p className="text-gray-800 px-4 mb-3">
                                    João era um jovem entusiasta da tecnologia, sempre curioso e ávido por conhecimento.
                                    Ele descobriu um site onde pessoas compartilhavam seus conhecimentos e experiências em diversas áreas,
                                    desde programação até design e empreendedorismo.Fascinado pela comunidade e pela troca de ideias,
                                    João mergulhou de cabeça nesse mundo virtual de aprendizado
                                </p>
                                <p className="text-gray-800 px-4 mb-3" style={{ display: isVisibleJoao ? 'none' : 'block' }}>
                                    Desde o início, ele se destacava pela sua determinação e vontade de absorver tudo o que podia.
                                    Participava ativamente dos fóruns, fazia perguntas inteligentes e contribuía com suas próprias descobertas e soluções.
                                    Seu desejo de aprender era insaciável,e ele aproveitava todas as oportunidades para expandir seus horizontes.
                                </p>
                                <p className="text-gray-800 px-4 mb-3" style={{ display: isVisibleJoao ? 'none' : 'block' }}>
                                    Com o tempo, João começou a se especializar em programação.
                                    Ele estudava incansavelmente as linguagens de programação mais populares,
                                    acompanhava as tendências do mercado e praticava seus conhecimentos em projetos pessoais e colaborativos.
                                    A comunidade online era seu principal recurso de aprendizado,
                                    e ele absorvia as dicas e truques compartilhados pelos membros mais experientes.
                                </p>
                            </div>
                            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none shadow-lg p-6">
                                <div className="flex items-center justify-end">

                                    <button onClick={() => setIsVisibleJoao(!isVisibleJoao)} className="bg-orange-500 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:scale-105 duration-300">
                                        {isVisibleJoao ? 'Mostrar Historia' : 'Ocultar'}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={isVisibleMaria ? "w-full h-1/2 md:w-1/3 p-6 flex flex-col" : "w-full md:w-1/3 p-6 flex flex-col"}>
                            <div className="flex-1 bg-white rounded-t rounded-b-none shadow-lg">

                                <div className="w-full font-bold text-xl text-gray-800 px-4 py-6" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}>
                                    Historia do  Maria Santos
                                </div>
                                <p className="text-gray-800 px-4 mb-3">
                                    Maria Santos era uma estudante determinada, mas enfrentava desafios em sua jornada acadêmica.
                                    Vinda de uma família de poucos recursos, Maria tinha que conciliar seus estudos com um emprego
                                    de meio período para ajudar nas despesas da casa. Apesar das dificuldades,
                                    ela tinha grandes objetivos e sonhava em se formar na universidade e construir uma carreira de sucesso.
                                </p>
                                <p className="text-gray-800 px-4 mb-3" style={{ display: isVisibleMaria ? 'none' : 'block' }}>
                                    Foi então que Maria descobriu uma plataforma online onde pessoas compartilhavam suas experiências
                                    e conhecimentos sobre diversas áreas acadêmicas.Percebendo que ali poderia encontrar apoio e
                                    orientação, Maria mergulhou de cabeça nesse recurso valioso.
                                </p>
                                <p className="text-gray-800 px-4 mb-3" style={{ display: isVisibleMaria ? 'none' : 'block' }}>
                                    Na plataforma, Maria encontrou uma comunidade acolhedora de estudantes e profissionais dispostos
                                    a compartilhar suas experiências e oferecer apoio mútuo. Ela participava ativamente dos fóruns de discussão,
                                    fazendo perguntas, compartilhando suas próprias experiências e oferecendo conselhos sempre que possível.
                                </p>

                            </div>
                            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none shadow-lg p-6">
                                <div className="flex items-center justify-end">
                                    <button onClick={() => setIsVisibleMaria(!isVisibleMaria)} className="bg-orange-500 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:scale-105 duration-300">
                                        {isVisibleMaria ? 'Mostrar Historia' : 'Ocultar'}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={isVisibleLucas ? "w-full md:w-1/3 h-1/2 p-6 flex flex-col" : "w-full md:w-1/3 p-6 flex flex-col"}>
                            <div className="flex-1 bg-white rounded-t rounded-b-none shadow-lg p-2">

                                <div className="w-full font-bold text-xl text-gray-800 px-4 py-6" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}>
                                    Historia do  Lucas Oliveira
                                </div>
                                <p className="text-gray-800 px-4 mb-3">
                                    Lucas Oliveira sempre teve uma paixão pela música desde tenra idade.
                                    Crescendo em uma família modesta, ele não tinha acesso a aulas particulares
                                    ou instrumentos musicais de alta qualidade.No entanto, sua determinação
                                    e amor pela música o impulsionaram a superar esses obstáculos
                                </p>
                                <p className="text-gray-800 px-4 mb-3" style={{ display: isVisibleLucas ? 'none' : 'block' }}>
                                    Um dia, Lucas descobriu uma plataforma online que oferecia recursos educacionais gratuitos,
                                    incluindo aulas de música, tutoriais e até mesmo acesso a instrumentos virtuais.
                                    Empolgado com essa descoberta, Lucas mergulhou de cabeça nesse mundo de oportunidades.
                                </p>
                                <p className="text-gray-800 px-4 mb-3" style={{ display: isVisibleLucas ? 'none' : 'block' }}>
                                    Ele começou a estudar música de forma autodidata, utilizando os recursos disponíveis na plataforma.
                                    Ele aprendeu a tocar diversos instrumentos,desde violão e piano até bateria e saxofone,
                                    tudo com a ajuda de vídeos tutoriais e exercícios práticos.
                                </p>
                                <p className="text-gray-800 px-4 mb-3" style={{ display: isVisibleLucas ? 'none' : 'block' }}>
                                    Além disso, Lucas se envolveu em comunidades online de músicos,
                                    onde pôde compartilhar suas experiências, receber feedback e
                                    colaborar com outros músicos amadores e profissionais.
                                    Essa interação com a comunidade o ajudou a aprimorar suas
                                    habilidades e expandir seus horizontes musicais.
                                </p>

                            </div>
                            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none shadow-lg p-6">
                                <div className="flex items-center justify-end">
                                    <button onClick={() => setIsVisibleLucas(!isVisibleLucas)} className="bg-orange-500 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:scale-105 duration-300">
                                        {isVisibleLucas ? 'Mostrar Historia' : 'Ocultar'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="my-28">
                    <div className="container mx-auto grid grid-cols-4 pt-4 pb-12">
                        <div></div>
                        <div className="col-span-2 flex items-center justify-end">
                            <button className="bg-orange-500 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:scale-105 duration-300 w-full">
                                Compartilhe Sua Historia Também
                            </button>
                        </div>
                        <div></div>
                    </div>
                </section>
            </div>
        </>
    )
}



export default Historias