import { combineReducers } from "redux";
import hackerReducer from "./hacker/reducer";
import productReducer from "./product/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  productState: productReducer,
  hacker: hackerReducer,
  auth: authReducer,
});

export default rootReducer;
