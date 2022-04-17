import { PUSH_NOTIFICATION, GET_NOTIFICATION, UPDATE_NOTIFICATION } from "redux/actionTypes";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log("HYDRATE");
            return {
                ...state,
                ...action.payload,
            };
        case PUSH_NOTIFICATION:
            return {
                ...state,
                notification: action.payload
            };
        case GET_NOTIFICATION:
            return {
                ...state,
                notification: action.payload
            };
        case UPDATE_NOTIFICATION:
            return {
                ...state,
                notification: action.payload
            };
        default:
            return state;
    }
};

export default notificationReducer;