import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CatogoriesProvider } from "./Context/ProductContext";
import { CartContextProvider } from "./Context/CartContext";
import { UserAuthProvider } from "./Context/UserAuthContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <UserAuthProvider>
      <CatogoriesProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </CatogoriesProvider>
      </UserAuthProvider>
    </Router>
  </React.StrictMode>
);
