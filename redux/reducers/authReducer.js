import { AUTHENTICATE, DEAUTHENTICATE } from "../actionTypes";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  credential: {
    token: "",
    id: "",
    username: "",
    roles: [],
  }
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
      return state.credential = action.payload; 
    case DEAUTHENTICATE:
      return state.credential = {} ;
    default:
      return state;
  }
};

export default authReducer;
