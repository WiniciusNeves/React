import React from 'react';
import { FaMoneyBillWave } from 'react-icons/fa';

export default (props) => {
    return (
        <header className="main-header">
            <a href="#" className="logo">
                <span className="logo-mini"><b>My</b>M</span>
                <span className="logo-lg"><FaMoneyBillWave /> <b>My</b>Money</span>
            </a>
            <nav className="navbar navbar-static-top">
                <a href="#" className="sidebar-toggle" data-toggle="offcanvas">
                    <span className="navbar-toggler-icon"></span>
                </a>
            </nav>
        </header>
    );
};
