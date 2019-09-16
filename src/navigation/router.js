import {App} from "./screens";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import React from "react";


export const getBrowserRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={App}/>
                <Route path="/search" component={App}/>
                <Redirect exact from="/" to="search"/>
            </div>
        </BrowserRouter>
    );
};
