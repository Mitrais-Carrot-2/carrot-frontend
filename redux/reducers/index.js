import { combineReducers } from "redux";
import authReducer from "./authReducer";
import managerReducer from "./managerReducer";
// import fooReducer from "./fooReducer";

const rootReducer = combineReducers({
//   foo: fooReducer,
  authentication: authReducer,
  manager: managerReducer,
});

export default rootReducer;
