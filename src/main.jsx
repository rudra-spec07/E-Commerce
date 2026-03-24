import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/global.css";

import { Provider } from "react-redux";
import { store } from "./features/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ✅ WRAP APP WITH PROVIDER AND BROWSERROUTER */}
    <Provider store={store}>
      <BrowserRouter basename="/E-Commerce">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);