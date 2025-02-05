import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContextProviders from "./services/context";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HashRouter>
        <ContextProviders>
            <App />
        </ContextProviders>
    </HashRouter>
);
