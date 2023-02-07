import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CatogoriesProvider } from "./Context/ProductContext";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";

import { stripePromise } from "./utils/firebase/stripe/stripe";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <CatogoriesProvider>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </CatogoriesProvider>
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);
