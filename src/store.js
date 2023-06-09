import {combineReducers, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools} from "redux-devtools-extension"
import { productReducer, productDetailReducer } from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";


const reducer = combineReducers({

    product: productReducer,
    productDetail: productDetailReducer,
    user:userReducer

})

let initialState = {};
const middleware = [thunk]
const store = createStore(reducer,initialState ,composeWithDevTools(applyMiddleware(...middleware)) )


export default store