import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
    <Router>
        <div className="App">
            <Menu />
            <Content />
        </div>
    </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
