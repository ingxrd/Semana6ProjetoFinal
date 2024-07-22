import React, { useState, useEffect } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import "./Home.css";

function Home() {
    const slides = [
        {
            imagem: image1,
            titulo: "Primeiro Slide",
        },
        {
            imagem: image2,
            titulo: "Segundo Slide",
        },
        {
            imagem: image3,
            titulo: "Terceiro Slide",
        },
        {
            imagem: image4,
            titulo: "Quarto Slide",
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index === slides.length - 1) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, 3000); // Muda o slide a cada 3 segundos (3000ms)

        return () => clearInterval(interval);
    }, [index, slides.length]);

    return (
        <div className="position-relative">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {slides.map((slide, idx) => (
                        <div key={idx} className={`carousel-item ${idx === index ? 'active' : ''}`}>
                            <img className="d-block w-100" src={slide.imagem} alt={slide.titulo} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="overlay">
                <h2>Biblioteca Pessoal</h2>
                <p>Bem-vindo a Biblioteca Pessoal! Este é o seu espaço exclusivo para gerenciar e registrar suas leituras. Aqui, você pode acompanhar os livros que já leu, organizar os que está lendo e planejar suas futuras aventuras literárias. Seja você um ávido leitor ou alguém que está começando a descobrir o prazer dos livros, a Biblioteca Pessoal está aqui para ajudar a manter seu hábito sempre organizado e inspirador. Adicione notas, defina metas e explore novas obras enquanto mantém um registro detalhado de todas as suas experiências literárias. Junte-se a nós e torne sua jornada ainda mais envolvente e gratificante!</p>
            </div>
        </div>
    );
}

export default Home;