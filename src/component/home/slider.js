import React, { Component } from 'react';
import Slider from "react-slick";
import { Container } from 'react-bootstrap';


class Slide extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          };
        return (
            <Container>
                <h2>ALL NOVELS</h2>
                <Slider {...settings}>
                <div>
                    <img src="image/1.jpg"/>
                </div>
                <div>
                    <img src="image/2.jpg"/>
                </div>
                <div>
                    <img src="image/3.jpg"/>
                </div>
                <div>
                    <img src="image/2.jpg"/>
                </div>
                </Slider>
            </Container>
        )
    }
}

export default Slide