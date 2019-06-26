import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../navbar';
import DetailCmt from './detailCmt';

class News extends Component{
    constructor(){
        super();
        this.state={
            openCmt: false
        }
    }
    handleChange = () =>{
        this.setState({ openCmt: !this.state.openCmt})
    }
    render(){
        return (
            <Container fluid>
                <div className="news">
                    <img src="image/image14.png"/>
                    <div className="box">
                        <div className="box-top">
                            <h1>4am starts and spinach<br/> smoothies: Da Vinci Code's ...</h1>
                            <div className="box-header">
                                <div className="clock">
                                    <img src="image/clock.png" alt="clock"/>
                                    <p>Saturday at 12:00 PM</p>
                                </div>
                                <div className="event">
                                    <ul>
                                        <li><i className="fa fa-thumbs-up"></i>63</li>
                                        <li><img src="image/chat.png" alt="commment"/>10</li>
                                        <li><i className="fa fa-share-alt"></i>4</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-content">
                                <img src="image/image3.png"/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam Read more...
                                </p>
                            </div>
                        </div>
                        
                        <div className="box-bottom">
                            <ul>
                                <li className="align-middle"><i className="fa fa-heart"></i>Like</li>
                                <li onClick={ this.handleChange }>
                                    <img src="image/chat.png" alt="commment" style={{paddingRight:'7px'}}/>
                                    Comment
                                </li>
                                <li><i className="fa fa-share-alt"></i>Share</li>
                            </ul>
                            {this.state.openCmt ? <DetailCmt/> : ''}
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}
export default News