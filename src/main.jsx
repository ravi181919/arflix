import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import conf from "./config/conf.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={conf.authDomainUrl} // Use variables from config
      clientId={conf.authClientId}
      authorizationParams={{
        redirect_uri: window.location.origin ,
      }}
    >
      <Provider store={store}>
        <BrowserRouter basename={conf.viteBaseUrl}>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
