import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Navbar from './component/navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import {  Route } from 'react-router-dom';
import Home from './component/home/home';
import News from './component/news/news';

ReactDOM.render(<Navbar />,document.getElementById('nav'));
ReactDOM.render(
    <Router>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/news" component = {News}/>
    </Router>, 
    document.getElementById('root'));
// ReactDOM.render(<Slide/>, document.getElementById('slider'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
