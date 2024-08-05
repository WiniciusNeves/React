import React from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Todo from "../todo/todo.jsx";
import About from "../about/about.jsx";

export default (props) => {
    return (
        <Router>
            <Routes>
                <Route path='/todos' element={<Todo />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Navigate to='/todos' />} />
            </Routes>
        </Router>
    );
}
