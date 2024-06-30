import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../views/examples/Home";
import About from "../../views/examples/About";
import Param from "../../views/examples/Param";
import NotFaout from "../../views/examples/NotFaout";

import "./Content.css";

function Content() {
    return (
        <main className="Content">

            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/param/:id" element={<Param />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFaout />} />

            </Routes>
        </main>
    );
}

export default Content;
