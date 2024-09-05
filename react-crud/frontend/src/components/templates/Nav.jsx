import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
   <aside className="menu-area">
      <nav className="menu">

         <Link to="/">
            <i className="fa fa-home"></i> Início
         </Link>

         <Link to="/users">
            <i className="fa fa-users"></i> Usuários
         </Link>

         <Link to="/about">
            <i className="fa fa-question"></i> Sobre
         </Link>


      </nav>
   </aside>
)
