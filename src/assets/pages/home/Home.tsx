



function Home() {

    return (
        <>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                 <div style={{
                    width: "80vw",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>

                </div>
                <div>
                    <div style={{
                        width: "100vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontFamily:"poly,sans-serif",
                        color: "brown",
                        fontSize: "24px",
                    }}>
                        <h2>Bem-vindo à EducaJunto</h2>
                       <p>Juntos aprendemos, juntos crescemos: EducaJunto, a rede social da educação</p>
                    </div>
                    <div style={{
                        width: "80v",
                        display: "flex",
                        flexDirection:"column",
                        alignItems:"center"

                    }}>
                        <img
                            src="src/assets/img/Home01.jpg"
                            alt="Imagem da pagina Home"
                            
                            
                        />
                    </div>
                </div>
            </div>


        </>

    )
}

export default Home
