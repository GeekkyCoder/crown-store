import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer";
import {catogoriesReducer} from "./catogories/catogoriesreducer"

export const rootReducer = combineReducers({
    user:userReducer,
    catogories: catogoriesReducer
})