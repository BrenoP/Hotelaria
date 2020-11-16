import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { store, persistor } from "~/store";
import Routes from "~/routes/index";
import "./components/styles/Global.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <div className="App">
          <ToastContainer
            className="toast-container"
            position="top-right"
            autoClose={3500}
            hideProgressBar={false}
            rtl={false}
            newestOnTop
            closeOnClick
            pauseOnVisibilityChange
            draggable
            pauseOnHover
          />
          <Routes />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
