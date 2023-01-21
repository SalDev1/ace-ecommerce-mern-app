import { combineReducers, applyMiddleware } from "redux";
// createStore is decrepreated.
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { legacy_createStore as createStore } from "redux";
import {
  productReducer,
  productDetailsReducer,
} from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
});

let initialState = {};

const middleware = [thunk];

// Configured a global store for the react app.
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
