import { useEffect } from "react";

import {
  onAuthUserStateChange,
  createUserWithDocument,
} from "./utils/firebase/firebase-utils";

import { setCurrentUser } from "./store/user/user-action";
import { useDispatch } from "react-redux";


import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Auth from "./Components/Auth/Auth";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsub = onAuthUserStateChange(async (user) => {
      if (user) {
        await createUserWithDocument(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsub;
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="auth" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
