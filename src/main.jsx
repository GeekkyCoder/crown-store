import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CatogoriesProvider } from "./Context/ProductContext";
import { CartContextProvider } from "./Context/CartContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>

      <CatogoriesProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </CatogoriesProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
