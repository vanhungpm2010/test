import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../navbar';
import Slide from './slider';

class Home extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <div className="ground">
                        <img src="image/background.jpg" style={{width:'100%', display:'block' }}/>
                        <h1>DAN <br/> BROWN</h1>
                    </div>
                </Container>
                <Slide/>
            </div>
        )
    }
}

export default Home