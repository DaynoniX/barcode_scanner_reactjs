import {combineReducers, createStore} from "redux";
import scannerReducer from "./scannerReducer";

let reducers = combineReducers({
    scanner: scannerReducer
});
let store = createStore(reducers);

export default store;
