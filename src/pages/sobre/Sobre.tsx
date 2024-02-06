import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Sobre() {
    return (
        <>
            <div className="w-full h-full flex flex-col p-10">

                <h2 className="flex justify-center text-center text-3xl  text-blue-500 font-bold py-5 mx-3.5 my-10 bg-slate-100 shadow-lg shadow-blue-300 rounded-2xl ">
                    Quem Somos
                </h2>
                <div className="text-justify text-2xl font-bold text-slate-700 mx-20 mb-10 "  >
                    <p className="my-4 mx-14">
                        Somos uma rede social educacional, que conecta estudantes, educadores e entusiastas da aprendizagem em um ambiente colaborativo. Promovemos a troca de conhecimento e experiências para fortalecer a comunidade educacional.
                    </p>
                    <p className="my-4 mx-14">
                        Nossa plataforma busca o aumento do aprendizado através da colaboração, a empatia e o respeito mútuo. Cada interação é uma oportunidade de crescimento, e cada pergunta é uma semente que pode florescer em novas descobertas. Estamos aqui para criar uma rede de aprendizado onde todos se sintam motivados a participar ativamente, independentemente do nível de conhecimento inicial.
                    </p>
                    <p className="text-center my-8 mx-14 text-blue-500">
                        Junte-se a nós para aprender, crescer e se desenvolver coletivamente!
                    </p>
                </div>

                <h2 className="text-3xl text-blue-500 font-bold text-center py-5 mx-3.5 bg-slate-100 rounded-lg shadow-lg shadow-blue-300">
                    Nosso Time
                </h2>
                <div className="flex flex-wrap justify-center items-center mx-2 my-10 gap-10">
                    <div className="flex justify-center items-center flex-col w-1/8  h-full gap-4 bg-slate-100  border-2 border-gray-300 shadow-md text-white rounded-2xl  p-4">
                        <img src="src/assets/img/brusobre.jpg" alt="Bruno Cesar" className="rounded-full h-24 w-24 object-cover mb-3" />
                        <p className="font-bold text-xl text-orange-500">Bruno Cesar</p>
                        <p className=" text-black">Desenvolvedor Java Fullstack</p>
                        <hr className="border-blue-400 w-full" />
                        <div className='flex gap-2' >
                            <a href="https://github.com/Cesar-bruno/" target="_blank">
                                <GithubLogo size={30} color="#030303" weight='fill' />
                            </a>
                            <a href="https://www.linkedin.com/in/bcssilva/" target="_blank">
                                <LinkedinLogo size={30} color="#030303" weight='fill' />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col w-1/8  h-full gap-4 bg-slate-100  border-2 border-gray-300 shadow-md text-white rounded-2xl  p-4">
                        <img src="src/assets/img/desobre.jpg" alt="Débora Rodrigues" className="rounded-full h-24 w-24 object-cover mb-3" />
                        <p className="font-bold text-xl text-orange-500">Débora Rodrigues</p>
                        <p className=" text-black">Desenvolvedor Java Fullstack</p>
                        <hr className="border-blue-400 w-full" />
                        <div className='flex gap-2' >
                            <a href="https://github.com/Deborah001-jpg/" target="_blank">
                                <GithubLogo size={30} color="#030303" weight='fill' />
                            </a>
                            <a href="https://www.linkedin.com/in/deborah-rodrigues001/" target="_blank">
                                <LinkedinLogo size={30} color="#030303" weight='fill' />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col w-1/8  h-full gap-4 bg-slate-100  border-2 border-gray-300 shadow-md text-white rounded-2xl  p-4">
                        <img src="src/assets/img/gabsobre.jpeg" alt="Gabriel Sponda" className="rounded-full h-24 w-24 object-cover mb-3" />
                        <p className="font-bold text-xl text-orange-500">Gabriel Sponda</p>
                        <p className=" text-black">Desenvolvedor Java Fullstack</p>
                        <hr className="border-blue-400 w-full" />
                        <div className='flex gap-2' >
                            <a href="https://github.com/gabrielsponda/" target="_blank">
                                <GithubLogo size={30} color="#030303" weight='fill' />
                            </a>
                            <a href="https://www.linkedin.com/in/gabrielsponda/" target="_blank">
                                <LinkedinLogo size={30} color="#030303" weight='fill' />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col w-1/8  h-full gap-4 bg-slate-100  border-2 border-gray-300 shadow-md text-white rounded-2xl  p-4">
                        <img src="src/assets/img/guisobre.jpg" alt="Guilherme Góes" className="rounded-full h-24 w-24 object-cover mb-3" />
                        <p className="font-bold text-xl text-orange-500">Guilherme Góes</p>
                        <p className=" text-black">Desenvolvedor Java Fullstack</p>
                        <hr className="border-blue-400 w-full" />
                        <div className='flex gap-2' >
                            <a href="https://github.com/thegoes/" target="_blank">
                                <GithubLogo size={30} color="#030303" weight='fill' />
                            </a>
                            <a href="https://www.linkedin.com/in/guilherme-g-silva-98aba4284/" target="_blank">
                                <LinkedinLogo size={30} color="#030303" weight='fill' />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col w-1/8  h-full gap-4 bg-slate-100  border-2 border-gray-300 shadow-md text-white rounded-2xl  p-4">
                        <img src="src/assets/img/pesobre.jpg" alt="Pedro Bernardo" className="rounded-full h-24 w-24 object-cover mb-3" />
                        <p className="font-bold text-xl text-orange-500">Pedro Bernardo</p>
                        <p className=" text-black">Desenvolvedor Java Fullstack</p>
                        <hr className="border-blue-400 w-full" />
                        <div className='flex gap-2' >
                            <a href="https://github.com/Pedro-HSB/" target="_blank">
                                <GithubLogo size={30} color="#030303" weight='fill' />
                            </a>
                            <a href="https://www.linkedin.com/in/pedro-hs-bernardo/" target="_blank">
                                <LinkedinLogo size={30} color="#030303" weight='fill' />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col w-1/8  h-full gap-4 bg-slate-100  border-2 border-gray-300 shadow-md text-white rounded-2xl p-4">
                        <img src="src/assets/img/vicsobre.png" alt="Victória Moraes" className="rounded-full h-24 w-24 object-cover mb-3" />
                        <p className="font-bold text-xl text-orange-500">Victória Moraes</p>
                        <p className=" text-black">Desenvolvedor Java Fullstack</p>
                        <hr className="border-blue-400 w-full" />
                        <div className='flex gap-2' >
                            <a href="https://github.com/VictoriaCM/" target="_blank">
                                <GithubLogo size={30} color="#030303" weight='fill' />
                            </a>
                            <a href="https://www.linkedin.com/in/victória-moraes/" target="_blank">
                                <LinkedinLogo size={30} color="#030303" weight='fill' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Sobre;
