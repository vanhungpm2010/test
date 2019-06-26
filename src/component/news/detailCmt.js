import React, {Component} from 'react';

class DetailCmt extends Component{
    render(){
        return (
            <div className="comment-detail">
                <div className="cmt-header">
                    <div className="row">
                        <div className="col-6 viewer">
                            <img src="image/p1.png" alt="Ellipse"/>
                            <img src="image/p2.png" alt="Ellipse"/>
                            <img src="image/p1.png" alt="Ellipse"/>
                            <img src="image/Ellipse.png" alt="Ellipse"/>
                            <img src="image/p1.png" alt="Ellipse"/>
                            <p>+127 <span>People like this</span></p>
                        </div>
                        <div className="col-3">
                            <p>27 <span>Comment</span></p>
                        </div>
                        <div className="col-3">
                            <p>2 <span>Shares</span></p>
                        </div>
                    </div>     
                </div>
                <div className="cmt-content">
                    <img src="image/p1.png" />
                    <div className="infor">
                        <h4>Erick Smith</h4>
                        <p>Wow! Check out these fan art drawings of Justin Bieber from Bella Priema Leza on Instagram.</p>
                    </div>
                </div>
                <div className="cmt-content">
                    <img src="image/p2.png" />
                    <div className="infor">
                        <h4>Alex Minash</h4>
                        <p>I will send Justin Bieber's Whats App to the first 2.000 people who like this comment and follow me.</p>
                    </div>
                </div>
                <div className="cmt-4u">
                    <img src="image/p3.png" />
                    <input type="text" placeholder="Your comment"/>
                    <img className="icon-send" src="image/send.png" />
                </div>
            </div>
        )
    }
}
export default DetailCmt