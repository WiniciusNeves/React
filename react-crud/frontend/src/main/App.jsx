import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import './App.css';

import React from 'react';
import { HashRouter } from 'react-router-dom';

import Router from './Router';

import Home from '../components/home/home';
import Nav from '../components/templates/Nav';
import Footer from '../components/templates/Footer';
import Logo from '../components/templates/Logo';

export default props => (
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Router />
            <Footer />
        </div>
    </HashRouter>
)
