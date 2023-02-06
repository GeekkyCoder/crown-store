import { compose,applyMiddleware,createStore} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import {persistReducer,persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./root-saga";

//root-reducer

const sagaMiddleWare = createSagaMiddleware()

const middlewares = [process.env.NODE_ENV !== "production" && logger,sagaMiddleWare].filter(Boolean)

const persistConfig = {
    key:"root",
    storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const composeEnhancers = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer,undefined,composedEnhancers)

sagaMiddleWare.run(rootSaga)

export const persistor = persistStore(store)