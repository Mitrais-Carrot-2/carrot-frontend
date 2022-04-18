import { combineReducers } from "redux";
import authReducer from "./authReducer";
import managerReducer from "./managerReducer";
import userReducer from "./userReducer";
import notificationReducer from "./notificationReducer";
// import fooReducer from "./fooReducer";

const rootReducer = combineReducers({
  authentication: authReducer,
  manager: managerReducer,
  user: userReducer,
  notification: notificationReducer,
});

export default rootReducer;
