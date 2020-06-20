import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestImg from '../assets/full-moon-in-blue-sky-4321944.jpg';
import dforestImg from '../assets/red-art-relaxation-girl-20967.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img height={1000}
                        className="d-block w-100 "
                        src={forestImg}
                        alt = "Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Loren ispum dolor, sit amet </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100 "
                        src={dforestImg}
                        alt = "Forest"
                    />
                    <Carousel.Caption>
                        <h3> Dark Forest image</h3>
                        <p>Loren ispum dolor, sit amet </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
