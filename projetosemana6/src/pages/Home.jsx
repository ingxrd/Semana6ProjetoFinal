import { useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import "./Home.css";

const slides = [
    {
        imagem: image1,
        titulo: "Porta de entrada para a aventura",
    },
    {
        imagem: image2,
        titulo: "Café das Maravilhas",
    },
    {
        imagem: image3,
        titulo: "Valorize a vida",
    },
    {
        imagem: image4,
        titulo: "Biblioteca de Lendas",
    },
];

function Home() {
    const [index, setIndex] = useState(0);

    function handleAvancar() {
        if (index === slides.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function handleVoltar() {
        if (index === 0) {
            setIndex(slides.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    return (
        <div className="carousel-container">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    {slides.map((slide, idx) => (
                        <div key={idx} className={`carousel-item ${idx === index ? 'active' : ''}`}>
                            <img className="d-block w-100" src={slide.imagem} alt={`Slide ${idx + 1}`} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{slide.titulo}</h5>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev" onClick={handleVoltar}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next" onClick={handleAvancar}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Próximo</span>
                </a>
            </div>
        </div>
    );
}

export default Home;
