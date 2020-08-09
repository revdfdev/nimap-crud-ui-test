import React from 'react';
import { Switch, Route, useParams } from "react-router-dom";
import ProductPage from "../ProductPage";

export function ProductWrapper({ match }) {
    const { categoryid } = useParams();
    console.log("category id", match.path)
    return (
        <Switch>
            <Route exact path={`${match.path}`} component={ProductPage} />
        </Switch>
    )
}
