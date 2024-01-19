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
                        fontFamily: "poly,sans-serif",
                        fontSize: "24px",
                    }}>
                        <h2 className="text-2xl text-orange-500 font-bold">Bem-vinde</h2>
                        <p className="text-2xl text-blue-500 font-bold">Juntos aprendemos, juntos crescemos: EducaJunto, a rede social da educação</p>
                    </div>
                    <div style={{
                        width: "80v",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"

                    }}>
                        <img
                            src="src/assets/img/Home01.jpg"
                            alt="Imagem da pagina Home"
                            style={{
                                width:"500px",
                                borderRadius:"10px"
                            }}
                            />
                    </div>
                </div>
                
            </div>
        </>

    )
}

export default Home
