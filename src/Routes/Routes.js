import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductWrapper from "../pages/ProductWrapper";
import AppHeader from "../components/AppHeader";
import HomePage from "../pages/HomePage";

export function Routes({}) {
    return (
        <Router>
            <AppHeader onButtonClicked={() => {
                console.log("Button was clicked")
            }} />
                <Route exact path="/" component={HomePage} />
                <Route path="/:categoryid" component={ProductWrapper} />
        </Router>
    )
}