import React from "react";
import ReactDOM from "react-dom/client";
import ReactModal from "react-modal";
import { Provider } from "react-redux";
import store from "redux/store";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import App from "App.jsx";
import "index.scss";

const queryClient = new QueryClient();

ReactModal.setAppElement("#root");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  </Provider>
);
