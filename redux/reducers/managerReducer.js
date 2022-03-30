import { MANAGER_GET_FREEZER, MANAGER_GET_FREEZER_ERROR, MANAGER_GET_STAFF } from "../actionTypes";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    freezer: {
        freezer_id : "",
        barn_name : "",
        start_date : "",
        end_date : "",
        barn_owner : "",
        distributed_carrot : "",
        carrot_amount : ""
    }
};

const managerReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            };
        case MANAGER_GET_FREEZER:
            // return { ...state, freezer: action.payload };
            state.freezer = action.payload;
        case MANAGER_GET_STAFF:
            return { ...state, staff: action.payload };
        default:
            return state;
    }
}

export default managerReducer;