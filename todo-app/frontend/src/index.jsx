import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { thunk } from 'redux-thunk'; // Importação corrigida
import multi from 'redux-multi';
import promise from 'redux-promise';
import reducers from "./main/reducers";

// Cria a store com os middlewares aplicados
const store = createStore(
    reducers,
    applyMiddleware(thunk, multi, promise)
);

// Renderiza o aplicativo
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
