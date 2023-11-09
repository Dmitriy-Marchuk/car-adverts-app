import React from "react";
import ReactDOM from "react-dom/client";
import ReactModal from "react-modal";
import { Provider } from "react-redux";
import store from "redux/store";

import App from "App.jsx";
import "index.scss";

ReactModal.setAppElement("#root");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
