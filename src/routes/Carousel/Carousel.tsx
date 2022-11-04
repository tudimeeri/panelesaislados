import React from 'react'
import { Carousel } from 'react-bootstrap';
import imgcarrousel1 from "../../images/bg/bg-image-1.jpg";
import imgcarrousel2 from "../../images/bg/bg-image-2.jpg";
import imgcarrousel3 from "../../images/bg/CASETA.jpg";
import imgcarrousel4 from "../../images/bg/Arcoteccho.jpg";
import './Carousel.scss';

const CarouselComp = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    src={imgcarrousel1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Especializados en Cubiertas Metálicas</h1>
                    <h3>Suministro e instalación</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={imgcarrousel2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>Multytecho, Galvatecho, Glamet, Multymuro</h1>
                    <h3>Suministro e instalación</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={imgcarrousel3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>Casetas</h1>
                    <h3>Suministro e instalación</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={imgcarrousel4}
                    alt="Forth slide"
                />

                <Carousel.Caption>
                    <h1>Arcotechos</h1>
                    <h3>Suministro e instalación</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComp;