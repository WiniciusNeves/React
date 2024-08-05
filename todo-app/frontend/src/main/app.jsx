import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css';


import React from 'react';

import Router from './router.jsx';
import Menu from '../template/menu.jsx';


export default (props) => {
    return (
        <div className="container">
            <Menu />
            <Router />
        </div>
    );
}