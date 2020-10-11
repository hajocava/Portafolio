import React from 'react';
import YouTube from 'react-youtube';
import Footer from "../components/footer/Footer";

export default function SmartGloves() {
    return (
        <>
            <main>
                <img
                    src={require("../images/works/social-service/portada.png")}
                    alt=""
                    width="100%"
                    height="auto"
                    style={{
                        maxHeight: "60vh",
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Problematica</h2>
                            <p>Durante mis estudios tuve un companero llamado Carlos, una persona sordo muda. Carlos es un amigo muy agradable y amable. Conocerlo fue una de las experiencas mas reveladoras que he tenido, porque me mostro su estilo de vida, y las luchas que vive cada dia, desde discriminacion, falta de oportunidades y aislamiento social por no poder comunicarse con las demas personas, ya que en mi pais, no se tiene la cultura de aprender un lenguaje inclusivo.</p>
                            <p>Es por esto que quise buscar una solucion a este problema, y con un par de amigos de la escuela decidimos desarrollar un par de guantes inteligentes que traducen el lenguaje de senas.</p>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="d-flex justify-content-center">
                                <YouTube
                                    videoId="JS0q1HlYNj4"
                                    opts={{
                                        playerVars: {
                                            autoplay: 0,
                                        },
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <h2>Descripcion</h2>
                            <p>Consiste en obtener datos desde los sensores que los guantes tienen incorporados y estos se envian a un smartphone, donde se procesan y reproduce en audio el significado de las senas realizadas.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer backgroundColor="#1C1C1C" color="#ffffff" />
        </>
    )
}
