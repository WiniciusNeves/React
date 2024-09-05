import './Header.css';
import React from 'react';

export default props => (
    <header className="header d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex flex-column" >
        <h1 className="header-title">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle} </p>
    </header >
)