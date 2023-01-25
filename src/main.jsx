import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductContext } from "./Context/ProductContext";
import { CartContextProvider } from "./Context/CartContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ProductContext>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductContext>
    </Router>
  </React.StrictMode>
);
