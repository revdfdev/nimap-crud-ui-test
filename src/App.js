import React from 'react';
import Routes from "./Routes";
import { configureStore } from "./store";
import { Provider } from "react-redux";

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
