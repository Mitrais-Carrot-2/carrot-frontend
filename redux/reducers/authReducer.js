import { AUTHENTICATE, DEAUTHENTICATE, AUTHENTICATE_ERROR } from "../actionTypes";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    token: "",
    id: "",
    username: "",
    roles: [],
    error: "",
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case AUTHENTICATE:
      // return { ...state, token: action.payload };
      return state = action.payload; 
    case DEAUTHENTICATE:
      return state.credential = {};
    case AUTHENTICATE_ERROR:
      console.log(action.payload);
      let error = {
        error: action.payload
      };
      return {
        ...state,
        ...error,
      };
    default:
      return state;
  }
};


export default authReducer;
