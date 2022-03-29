import { combineReducers } from "redux";
import authReducer from "./authReducer";
// import fooReducer from "./fooReducer";

const rootReducer = combineReducers({
//   foo: fooReducer,
  authentication: authReducer,
});

export default rootReducer;
