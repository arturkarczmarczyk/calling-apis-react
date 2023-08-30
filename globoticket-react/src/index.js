import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "./index.css";
import App from "./App";
import ErrorStore from "./ErrorStore";

const store = ErrorStore;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

