import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CatogoriesProvider } from "./Context/ProductContext";
import { CartContextProvider } from "./Context/CartContext";
import { UserAuthProvider } from "./Context/UserAuthContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <UserAuthProvider>
      <CatogoriesProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </CatogoriesProvider>
      </UserAuthProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
