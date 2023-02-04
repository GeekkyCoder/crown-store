import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer";
import {catogoriesReducer} from "./catogories/catogoriesreducer"
import { cartReducer } from "./cart/cart_reducer";

export const rootReducer = combineReducers({
    user:userReducer,
    catogories: catogoriesReducer,
    cart: cartReducer
})