import { MANAGER_GET_FREEZER, MANAGER_GET_FREEZER_ERROR, MANAGER_GET_STAFF, SET_SHARE_TO_GROUP, SET_SHARE_TO_STAFF, SHARE_TO_GROUP, SHARE_TO_STAFF, MANAGER_GET_FREEZER_HISTORY, REMOVE_MANAGER } from "../actionTypes";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    freezerHistory:{

    },
    freezer: {
        freezer_id: "",
        barn_name: "",
        start_date: "",
        end_date: "",
        barn_owner: "",
        distributed_carrot: "",
        carrot_amount: ""
    },
    staff: [{
        userId: "",
        username: "",
        firstName: "",
        lastName: "",
        jobFamily: "",
        jobGrade: "",
        office: ""
    }],
    shareToStaff: {
        staffId: 0,
        carrotAmount: 0,
        note: ""
    },
    shareToGroup: {
        groupId: 0,
        carrotAmount: 0,
        note: ""
    }
};

const managerReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log("HYDRATE");
            return {
                ...state,
                ...action.payload,
            };
        case MANAGER_GET_FREEZER:
            return {
                ...state, freezer: action.payload
            };
        case MANAGER_GET_FREEZER_HISTORY:
            return {
                ...state, freezerHistory: action.payload
            };
        case MANAGER_GET_STAFF:
            return {
                ...state, staff: action.payload
            };
        case SET_SHARE_TO_STAFF:
            return {
                ...state, shareToStaff: action.payload
            };
        case SHARE_TO_STAFF:
            return {
                ...state, shareToStaff: {
                    staffId: 0,
                    carrotAmount: 0,
                    note: ""
                }
            };
        case SET_SHARE_TO_GROUP:
            return {
                ...state, shareToGroup: action.payload
            };
        case SHARE_TO_GROUP:
            return {
                ...state, shareToGroup: {
                    groupId: 0,
                    carrotAmount: 0,
                    note: ""
                }
            };
        case REMOVE_MANAGER:
            return state = initialState;
        default:
            return state;
    }
}

export default managerReducer;