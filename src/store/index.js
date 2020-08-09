import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducers from "./reducers"
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

if (process.env.NODE_ENV !== "production") {
    middleware = [...middleware, logger]
}

export function configureStore(preloadedState) {
    const store = createStore(
        reducers(),
        preloadedState,
        compose(applyMiddleware(...middleware))
    );

    sagaMiddleware.run(sagas);

    return store;
}