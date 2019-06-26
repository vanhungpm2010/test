import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
class Navbar extends Component{
    constructor(){
        super();
        this.state={
            bg: ''
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }
      
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }
      
    listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height;
        console.log(scrolled);
        if(scrolled !== 0 ){
            this.setState({
                bg: '#212121'
              })
        }
        else{
            this.setState({
                bg: ''
            })
        }
        
    }
    render(){
        return (
            <Nav variant="pills" className="justify-content-center" 
                    style={{background: this.state.bg, boxShadow:'0px -4px 10px rgba(0, 0, 0, 0.05)'}} >
                    <Nav.Item>
                        <Nav.Link href="/">
                            <img src="image/filter_1.png"/>
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/news" eventKey="link-1">
                            <img src="image/filter_2.png"/>
                            News
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#"  eventKey="link-2">
                            <img src="image/filter_3.png"/>
                            Media
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#"  eventKey="link-3">
                            <img src="image/filter_4.png"/>
                            Films
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
        )
    }
}
export default Navbar