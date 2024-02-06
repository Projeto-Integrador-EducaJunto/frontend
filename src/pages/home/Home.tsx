import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Home.css';
import { EffectCards } from 'swiper/modules';

function Home() {

    return (
        <>
            <div style={{ backgroundImage: `url(https://ik.imagekit.io/0h4imb0ky/img/teste.jpg?updatedAt=1707248099703)` }} className="bg-cover bg-center h-screen">
                <div className="container px-3 mx-auto flex items-center h-full">
                    <div className="flex w-2/5 text-left ml-auto">
                        <div className="flex flex-col items-center justify-center h-full">
                            <h1 className="my-4 text-5xl font-bold leading-tight text-white" style={{ textShadow: '4px 4px 1px rgba(0, 0, 0, 0.5)' }}>
                                O conhecimento compartilhado transforma o mundo.
                            </h1>
                            <p className="leading-normal text-2xl mb-8 text-white backdrop-blur-sm" style={{ textShadow: '2px 2px 1px rgba(0, 0, 0, 0.5)' }}>
                                A educação é a chave que abre as portas da igualdade e da democracia, reduzindo as disparidades e construindo um futuro mais justo para todos.
                            </p>
                            <button className="mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 hover:scale-110 duration-300 hover:bg-orange-500 hover:text-white">
                                Saiba mais
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-white border-b py-8">
                <div className="container max-w-5xl mx-auto m-8">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-orange-500" style={{ textShadow: '2px 2px 1px rgba(0, 0, 0, 0.5)' }}>
                        Nós falamos sobre direitos humanos.
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto w-64"></div>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div className="w-1/2 p-6">
                            <h3 className="text-3xl text-orange-500 font-bold leading-none mb-3" style={{ textShadow: '1px 2px 2px rgba(0, 0, 0, 0.5)' }}>
                                Educação e Justiça Social
                            </h3>
                            <p className="text-gray-600 mb-8">
                                A educação é o alicerce da justiça social, capacitando indivíduos a promoverem igualdade, respeito e dignidade para todos. Ela é a chave para um mundo mais justo e inclusivo, onde todos têm a oportunidade de alcançar seu pleno potencial.
                            </p>
                        </div>
                        <div className="w-1/2 p-6">
                            <img src="https://ik.imagekit.io/0h4imb0ky/img/Justice-pana.svg?updatedAt=1707248098348" className="h-80" />
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-row items-center">
                        <div className="w-1/2 p-6">
                            <img src="https://ik.imagekit.io/0h4imb0ky/img/Future%20city-cuate.svg?updatedAt=1707248097426" className="h-80" />
                        </div>
                        <div className="w-1/2 p-6 mt-6">
                            <div className="align-middle">
                                <h3 className="text-3xl text-orange-500 font-bold leading-none mb-3" style={{ textShadow: '1px 2px 2px rgba(0, 0, 0, 0.5)' }}>
                                    Transformando o Futuro
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Nossas ações estão em sintonia com os Objetivos de Desenvolvimento Sustentável (ODS) estabelecidos pela ONU. Este é um compromisso global para construir um futuro onde cada indivíduo tenha a chance de prosperar, e nenhum de nós seja esquecido no caminho da evolução.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-500 border-b py-8">
                <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white" style={{ textShadow: '2px 2px 1px rgba(0, 0, 0, 0.5)' }}>
                        O desejo de mudança faz parte de nós.
                    </h1>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto w-64"></div>
                    </div>
                    <div className="w-1/3 p-6 flex flex-col ">
                        <div className="flex-1 bg-white rounded-t rounded-b-none shadow-lg">
                            <div className="w-full font-bold text-xl text-gray-800 px-6 py-6" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}>
                                Democratizando o Saber
                            </div>
                            <p className="text-gray-800 px-6 mb-5">
                                Nossa plataforma EAD está tornando a educação mais acessível do que nunca. Junte-se a nós na missão de tornar o conhecimento acessível a todos, independentemente de onde estejam, e contribua para uma educação verdadeiramente democrática.
                            </p>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none shadow-lg p-6">
                            <div className="flex items-center justify-end">
                                <button className="bg-orange-500 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:scale-105 duration-300">
                                    Ensinar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col">
                        <div className="flex-1 bg-white rounded-t rounded-b-none shadow-lg">
                            <a href="#" className="flex flex-wrap">
                                <div className="w-full font-bold text-xl text-gray-800 px-6 py-6" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}>
                                    Aprendizado Fácil e Acessível
                                </div>
                                <p className="text-gray-800 text-base px-6 mb-5">
                                    No EducaJunto, a busca pelo conhecimento é gratuita e descomplicada. Oferecemos conteúdo de alta qualidade que torna a aprendizagem fácil e acessível a todos. Descubra um mundo de oportunidades educacionais ao seu alcance.
                                </p>
                            </a>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none shadow-lg p-6">
                            <div className="flex items-center justify-end">
                                <button className="bg-orange-500 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:scale-105 duration-300">
                                    Aprender
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col">
                        <div className="flex-1 bg-white rounded-t rounded-b-none shadow-lg">
                            <a href="#" className="flex flex-wrap">
                                <div className="w-full font-bold text-xl text-gray-800 px-6 py-6" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}>
                                    ODS 4: Educação de Qualidade
                                </div>
                                <p className="text-gray-800 text-base px-6 mb-5">
                                    A ODS 4 da ONU, "Educação de Qualidade", visa garantir uma educação inclusiva e equitativa de qualidade para todos. Saiba mais sobre este objetivo global e como você pode contribuir diretamente para sua realização.
                                </p>
                            </a>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none shadow-lg p-6">
                            <div className="flex items-center justify-end">
                                <button className="bg-orange-500 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:scale-105 duration-300">
                                    Conhecer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold leading-tight text-center text-orange-500 mb-12" style={{ textShadow: '2px 2px 1px rgba(0, 0, 0, 0.5)' }}>
                        Histórias de Sucesso
                    </h1>

                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">João Silva</h2>
                                <p className="text-gray-600">
                                    João começou sua jornada de aprendizado conosco e agora é um profissional de sucesso na área de tecnologia.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Maria Santos</h2>
                                <p className="text-gray-600">
                                    Maria compartilhou sua experiência conosco e como nossa plataforma a ajudou a conquistar seus objetivos acadêmicos.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Lucas Oliveira</h2>
                                <p className="text-gray-600">
                                    Lucas é um exemplo de dedicação e superação, e ele nos conta como nossos recursos o ajudaram a aprender e crescer.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Home;