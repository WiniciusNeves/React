import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../components/home/home";
import UserCrud from "../components/user/userCrud";
import About from "../components/about/about";

export default props => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
)

