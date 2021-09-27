import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { brandReducer, categoryReducer } from "./reducers/categoriesReducers";
const initialState = { categoryInfo: {}, brandInfo: { brand: {}, products: [], card: [] } };

const reducer = combineReducers({ categoryInfo: categoryReducer, brandInfo: brandReducer })


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);
export default store;