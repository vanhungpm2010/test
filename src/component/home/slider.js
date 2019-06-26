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
        const listImg = ['1.jpg','2.jpg', '3.jpg', '2.jpg'];
        return (
            <Container>
                <h2>ALL NOVELS</h2>
                <Slider {...settings}>
                { listImg.map((e,i) =>
                    <div key={i}>
                        <img src={"image/" + e}/>
                    </div>
                )}
                {/* <div>
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
                </div> */}
                </Slider>
            </Container>
        )
    }
}

export default Slide