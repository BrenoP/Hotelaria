import React from 'react';
import { Provider } from "react-redux";

import { store } from "~/store";
import Routes from "~/routes/index";
import "./components/styles/Global.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
