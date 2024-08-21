import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducers from "./main/reducers";
import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;

const storeEnhancers = compose(
    applyMiddleware(thunk, multi, promise),
    devTools
);

const store = createStore(
    reducers,
    storeEnhancers
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
