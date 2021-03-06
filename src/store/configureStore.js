import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authentication from "./authentication";
import items from "./items";
import orders from "./orders";


const persistConfig = {
    key: "root",
    storage,
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    authentication,
    items,
    orders

});

const persistedReducer = persistReducer(persistConfig, reducer)

const configureStore = (initialState) => {
    return createStore(
        persistedReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
};

export default configureStore;