import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import configureStore from "./store/configureStore";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Auth0Provider } from "@auth0/auth0-react";

const store = configureStore();
let persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Auth0Provider
            domain="dev--uok3ilo.us.auth0.com"
            clientId="uykfZVv2NjYPOlU4yWfbiV2xoenRHSZM"
            redirectUri={window.location.origin}
            audience="https://shoppy-art"
            scope="read:current_user update:current_user_metadata"

          >
            <App />
          </Auth0Provider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
