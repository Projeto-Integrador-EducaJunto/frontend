import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Sobre() {
    return (
        <>
            <div className="w-full h-full flex flex-col p-10">

                <h2 className="text-center text-4xl   text-blue-500 font-bold py-5 mx-3.5 my-10 bg-blue-200 rounded-lg shadow">
                    Quem Somos
                </h2>
                <div className="items-center text-justify text-xl rounded-lg mx-20 mb-10 w-1/2 h-2/1bg-opacity-50">
                    <p className="my-4 mx-14">
                        Somos uma rede social educacional, que conecta estudantes, educadores e entusiastas da aprendizagem em um ambiente colaborativo. Promovemos a troca de conhecimento e experiências para fortalecer a comunidade educacional.
                    </p>
                    <p className="my-4 mx-14">
                        Nossa plataforma busca o aumento do aprendizado através da colaboração, a empatia e o respeito mútuo. Cada interação é uma oportunidade de crescimento, e cada pergunta é uma semente que pode florescer em novas descobertas. Estamos aqui para criar uma rede de aprendizado onde todos se sintam motivados a participar ativamente, independentemente do nível de conhecimento inicial.
                    </p>
                    <p className="my-8 mx-14">
                        Junte-se a nós para aprender, crescer e se desenvolver coletivamente!
                    </p>
                </div>

                <h2 className="text-3xl text-blue-500 font-bold text-center py-5 mx-3.5 bg-blue-200 rounded-lg shadow">
                    Nosso Time
                </h2>
                <div className="flex flex-wrap justify-center items-center mx-2 my-10 gap-10">
                    <div className="flex justify-center items-center flex-col w-1/8  h-full gap-4 bg-slate-200  border-2 border-gray-300 shadow-md text-white rounded-md  p-4">
                        <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="Bruno Cesar" className="rounded-full h-24 w-24 object-cover mb-3" />
                        <p className="font-bold text-orange-500">Bruno Cesar</p>
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
                    <div className="flex justify-center items-center flex-col w-1/8  h-full gap-4 bg-slate-200  border-2 border-gray-300 shadow-md text-white rounded-md  p-4">
                        <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="Bruno Cesar" className="rounded-full h-24 w-24 object-cover mb-3" />
                        <p className="font-bold text-orange-500">Débora Rodrigues</p>
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
                    <div className="flex justify-center items-center flex-col w-1/8  h-full gap-4 bg-slate-200  border-2 border-gray-300 shadow-md text-white rounded-md  p-4">
                        <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="Bruno Cesar" className="rounded-full h-24 w-24 object-cover mb-3" />
                        <p className="font-bold text-orange-500">Gabriel Sponda</p>
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
                    <div className="flex justify-center items-center flex-col w-1/8  h-full gap-4 bg-slate-200  border-2 border-gray-300 shadow-md text-white rounded-md  p-4">
                        <img src="src/assets/img/guisobre.jpg" alt="Bruno Cesar" className="rounded-full h-24 w-24 object-cover mb-3" />
                        <p className="font-bold text-orange-500">Guilherme Góes</p>
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
                    <div className="flex justify-center items-center flex-col w-1/8  h-full gap-4 bg-slate-200  border-2 border-gray-300 shadow-md text-white rounded-md  p-4">
                        <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="Bruno Cesar" className="rounded-full h-24 w-24 object-cover mb-3" />
                        <p className="font-bold text-orange-500">Pedro Bernardo</p>
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
                    <div className="flex justify-center items-center flex-col w-1/8  h-full gap-4 bg-slate-200  border-2 border-gray-300 shadow-md text-white rounded-md  p-4">
                        <img src="src/assets/img/vicsobre.png" alt="Bruno Cesar" className="rounded-full h-24 w-24 object-cover mb-3" />
                        <p className="font-bold text-orange-500">Victória Moraes</p>
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
