
function Ods() {

    return (
        <div className="min-h-screen p-10 bg-white">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="p-6 rounded-lg shadow-md bg-blue-50 border-l-4 border-blue-500">
                    <h2 className="text-2xl text-blue-500 font-bold">Sobre o Projeto</h2>
                    <p className="mt-2 text-gray-700">
                        O EducaJunto é uma iniciativa para promover a educação inclusiva e de qualidade, alinhada com a ODS 4 da ONU.
                    </p>
                </div>

                <div className="p-6 rounded-lg shadow-md bg-orange-50 border-l-4 border-l-orange-500">
                    <h2 className="text-2xl text-orange-500 font-bold">Ajudar é Aprender</h2>
                    <p className="mt-2 text-gray-700">
                        Ajudar aos outros é um componente essencial no aprendizado, promovendo a empatia e o conhecimento compartilhado.
                    </p>
                </div>

                <div className="p-6 rounded-lg shadow-md bg-blue-50 border-l-4 border-blue-500">
                    <h2 className="text-2xl text-blue-500 font-bold">Educação e Qualidade de Vida</h2>
                    <p className="mt-2 text-gray-700">
                        A educação é a chave para o desenvolvimento pessoal e comunitário, impactando diretamente na qualidade de vida.
                    </p>
                </div>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-orange-100 border-l-4 border-orange-500">
                <h2 className="text-2xl text-orange-500 font-bold">ODS 4 - Educação de Qualidade</h2>
                <p className="mt-2 text-gray-700">
                    Comprometemo-nos com a meta global de garantir uma educação inclusiva e equitativa de qualidade para todos.
                </p>
            </div>
        </div>
    )
}

export default Ods