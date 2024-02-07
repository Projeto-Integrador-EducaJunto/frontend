import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Home.css';
import { EffectCards } from 'swiper/modules';
import { Link } from "react-router-dom";

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
                            <a href="#historias">
                                <button className="mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 hover:scale-110 duration-300 hover:bg-orange-500 hover:text-white">
                                    Saiba mais
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

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
                                <Link to="/cadastro">
                                    <button className="bg-orange-500 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:scale-105 duration-300">
                                        Ensinar
                                    </button>
                                </Link>
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
                                <Link to="/ods">
                                    <button className="bg-orange-500 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg hover:scale-105 duration-300">
                                        Conhecer
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

            <section className="py-8 bg-orange-500">
                <div className="container mx-auto px-4" id="historias">
                    <h1 className="text-5xl font-bold leading-tight text-center text-white mb-12" style={{ textShadow: '2px 2px 1px rgba(0, 0, 0, 0.5)' }}>
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
                                    João, vindo de uma família de recursos limitados, tinha uma paixão ardente por tecnologia. Seu encontro com nosso site abriu as portas para o vasto mundo da programação, que ele considerava inacessível. Comprometendo-se a estudar após longas horas de trabalho diurno, João transformou sua curiosidade em habilidade. Hoje, ele é um desenvolvedor renomado, liderando projetos inovadores em uma startup de tecnologia, provando que o acesso à educação pode mudar vidas.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Maria Santos</h2>
                                <p className="text-gray-600">
                                    Maria enfrentou desafios consideráveis para alcançar seus objetivos educacionais. Sem condições de pagar por cursos, ela encontrou em nossa plataforma um oásis de conhecimento. Através do acesso a materiais didáticos e apoio da comunidade online, Maria não só conquistou seus objetivos acadêmicos mas também se tornou uma mentora para outros estudantes em situações semelhantes. Ela agora contribui para o site que uma vez a ajudou, garantindo que o ciclo de aprendizado e apoio continue.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Lucas Oliveira</h2>
                                <p className="text-gray-600">
                                    Lucas é a personificação da dedicação. Enfrentando adversidades, incluindo recursos limitados para educação, ele se deparou com nosso site. Aproveitando ao máximo os recursos disponibilizados, Lucas mergulhou nos estudos, superando obstáculos e aprimorando seus conhecimentos. Sua jornada de superação não só resultou em crescimento pessoal mas também profissional, onde agora ele atua como uma figura inspiradora, ajudando outros a realizar seus sonhos através da educação.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Ana Beatriz</h2>
                                <p className="text-gray-600">
                                    Ana Beatriz sempre sonhou em ser médica, mas as barreiras financeiras pareciam tornar esse sonho distante. A descoberta de nosso site foi um ponto de virada em sua vida. Com acesso a materiais de estudo de alta qualidade e cursos preparatórios para o vestibular, Ana superou as dificuldades e foi aprovada em uma universidade pública de medicina. Atualmente, ela divide seu tempo entre os estudos e o voluntariado, ajudando a preparar futuros médicos através da plataforma que um dia a ajudou.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Carlos Eduardo</h2>
                                <p className="text-gray-600">
                                    Carlos cresceu em um ambiente onde a educação não era prioridade. Porém, seu encontro com nosso site despertou uma sede de conhecimento que ele nunca soube que tinha. Dedicando-se ao estudo de línguas através de cursos gratuitos, Carlos não só se tornou fluente em inglês e espanhol, mas também iniciou uma carreira como tradutor freelancer, abrindo portas para oportunidades globais. Ele agora usa sua experiência para incentivar jovens de sua comunidade a buscar a educação como ferramenta de transformação.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Fernanda Lima</h2>
                                <p className="text-gray-600">
                                    Fernanda, uma jovem artista, via a educação formal como um sonho distante devido aos custos proibitivos. Ao descobrir cursos gratuitos de arte e design em nosso site, ela foi capaz de desenvolver suas habilidades, criar um portfólio impressionante e, eventualmente, lançar sua própria linha de produtos de design. Fernanda agora retorna ao site como instrutora, compartilhando seu conhecimento e inspirando outros criativos a seguir seus sonhos.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Rafael Torres</h2>
                                <p className="text-gray-600">
                                    Rafael sempre teve interesse em ciências, mas as oportunidades para explorar esse campo eram escassas em sua comunidade. Através do nosso site, ele encontrou não apenas uma variedade de cursos em várias áreas da ciência, mas também uma comunidade de mentores e colegas estudantes. Isso não só lhe proporcionou o conhecimento que ele ansiava, mas também a confiança para buscar uma carreira em pesquisa científica. Rafael agora contribui para o site como mentor, ajudando a guiar a próxima geração de cientistas.
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