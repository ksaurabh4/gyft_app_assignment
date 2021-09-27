import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { categoryReducer } from "./reducers/categoriesReducers";
const initialState = { category: {} };

const reducer = combineReducers({ categoryInfo: categoryReducer })


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;