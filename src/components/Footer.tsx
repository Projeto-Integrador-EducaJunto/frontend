import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>

            <footer className="relative bg-blue-500 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap p-5 items-center justify-center text-center">
                        <div className="w-full px-4">
                            <h4 className="text-3xl fonat-semibold ">Juntos aprendemos, juntos crescemos: EducaJunto, a rede social da educação!</h4>

                        </div>
                    </div>
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright © <span id="get-current-year">2024</span><a href="" className="text-blueGray-500 hover:text-blueGray-800"> EducaJunto</a>.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 lg:mb-0 mb-6 flex items-center justify-center">
                    <div className='flex gap-2 '>
                        <a className='px-5' href="https://github.com/conteudoGeneration/" target="_blank">
                            <GithubLogo size={48} weight='bold' />
                        </a>
                        <a  href="https://www.linkedin.com/school/generationbrasil" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a  href="https://www.instagram.com/generationbrasil" target="_blank">
                            <InstagramLogo size={48} weight='bold' />
                        </a>
                        <a  href="https://www.facebook.com/generationbrasil" target="_blank">
                            <FacebookLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer