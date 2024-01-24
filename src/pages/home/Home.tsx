import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

    return (
        <div className="bg-white p-10">
            <div className="container mx-auto">

                <div className="mb-8">
                    <Slider
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={2000}
                    >
                        <div>
                            <img src="src\assets\img\1.jpg" alt="Imagem 1" />
                        </div>
                        <div>
                            <img src="src\assets\img\2.jpg" alt="Imagem 2" />
                        </div>
                        <div>
                            <img src="src\assets\img\3.jpg" alt="Imagem 3" />
                        </div>
                    </Slider>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    <div className="p-6 rounded-lg shadow-md bg-blue-50 border-l-4 border-blue-500">
                        <h3 className="text-2xl text-blue-500 font-bold">Missão</h3>
                        <p className="mt-2 text-gray-700">
                            Nossa missão é fornecer conteúdo educacional de qualidade.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg shadow-md bg-orange-50 border-l-4 border-orange-500">
                        <h3 className="text-2xl text-orange-500 font-bold">Visão</h3>
                        <p className="mt-2 text-gray-700">
                            Aspiramos ser uma referência em conteúdo digital interativo.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg shadow-md bg-blue-50 border-l-4 border-blue-500">
                        <h3 className="text-2xl text-blue-500 font-bold">Valores</h3>
                        <p className="mt-2 text-gray-700">
                            Comprometidos com a integridade, inovação e excelência.
                        </p>
                    </div>
                </div>

                <div className="p-6 rounded-lg shadow-md bg-orange-100 border-l-4 border-orange-500 mt-8">
                    <h2 className="text-2xl text-orange-500 font-bold">ODS 4 - Educação de Qualidade</h2>
                    <p className="mt-2 text-gray-700">
                        Comprometemo-nos com a meta global de garantir uma educação inclusiva e equitativa de qualidade para todos.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Home
// Hello World 
