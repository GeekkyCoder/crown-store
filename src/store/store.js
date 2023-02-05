import { compose,applyMiddleware,createStore} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import {persistReducer,persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

//root-reducer

const middlewares = [process.env.NODE_ENV !== "production" && logger,thunk].filter(Boolean)

const persistConfig = {
    key:"root",
    storage,
    blacklist:["cart"]

}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const composeEnhancers = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer,undefined,composedEnhancers)

export const persistor = persistStore(store)