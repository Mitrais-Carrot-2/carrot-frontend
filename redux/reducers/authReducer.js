import { AUTHENTICATE, DEAUTHENTICATE } from "../actionTypes";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    token: "",
    id: "",
    username: "",
    roles: [],
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
      break;
    case DEAUTHENTICATE:
      return state.credential = {} ;
      break;
    default:
      return state;
  }
};


export default authReducer;
