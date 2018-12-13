import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import RouteConfigExample from "./router";
import routes from "./router/config";
const App = () => (
    <BrowserRouter>
        <RouteConfigExample routes={routes}/>
    </BrowserRouter>
)
ReactDom.render(
    App(),
    document.getElementById('root')
)
