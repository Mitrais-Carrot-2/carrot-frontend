import { MANAGER_GET_FREEZER, MANAGER_GET_FREEZER_ERROR, MANAGER_GET_STAFF, SET_SHARE_TO_STAFF, SHARE_TO_STAFF, SET_SHARE_TO_GROUP, SHARE_TO_GROUP, MANAGER_GET_FREEZER_HISTORY, SHARE_TO_STAFF_SUCCESS, SHARE_TO_GROUP_SUCCESS, REMOVE_MANAGER } from "../actionTypes";
import axios from "axios";
import { basePath } from "next.config";

export const getFreezer = (token) => (dispatch) => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}manager/freezer/`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
    }).then((res) => {
        // console.log('freezer dispatch', res.data);
        dispatch({ type: MANAGER_GET_FREEZER, payload: res.data });
    }).catch((err) => {
        console.log("FAILED GET FREEZER", err);
    });
}

export const getFreezerHistory = (token) => (dispatch) => {
    axios.get(process.env.NEXT_PUBLIC_API_URL+'manager/freezer/history', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {
        // console.log(res.data);
        // console.log('freezer history dispatch');
        dispatch({ type: MANAGER_GET_FREEZER_HISTORY, payload: res.data });
    })
    .catch(err => {
        console.log("FAILED GET FREEZER HISTORY", err);
    })
}

export const getStaff = (token) => (dispatch) => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}manager/staff/`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
    }).then((res) => {
        let staff = res.data.sort((a, b) => {
            let nameA = a.firstName+" "+a.lastName;
            let nameB = b.firstName+" "+b.lastName;
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        dispatch({ type: MANAGER_GET_STAFF, payload: staff });
    })
    .catch((err) => {
        console.log("FAILED GET STAFF", err);
    });
}

export const setShareToStaff = (staff) => (dispatch) => {
    dispatch({ type: SET_SHARE_TO_STAFF, payload: staff.sendToStaff });
}

export const shareToStaff = (token, req) => (dispatch) => {
    // console.log("SHARE TO STAFF", req);

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}manager/transfer/staff/`, req, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json",
        },
    }).then((res) => {
        // console.log("SHARE TO STAFF", res.data);
        dispatch({ type: SHARE_TO_STAFF, payload: res.data });
    }).catch((err) => {
        console.log("SHARE TO STAFF", err.message);
    }).finally(() => {
        dispatch(getFreezer(token));
        dispatch(getFreezerHistory(token));
        dispatch({ type: SHARE_TO_STAFF_SUCCESS, payload: `Transfer to Staff Success!` });
    });
}

export const setShareToGroup = (group) => (dispatch) => {
    dispatch({ type: SET_SHARE_TO_GROUP, payload: group.sendToGroup });
}

export const shareToGroup = (token, req) => (dispatch) => {
    // console.log("SHARE TO GROUP", req);

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}manager/transfer/group/`, req, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json",
        },
    }).then((res) => {
        // console.log("SHARE TO GROUP", res.data);
        dispatch({ type: SHARE_TO_GROUP, payload: res.data });
    }).catch((err) => {
        console.log("SHARE TO GROUP", err.message);
    }).finally(() => {
        dispatch(getFreezer(token));
        dispatch({ type: SHARE_TO_GROUP_SUCCESS, payload: `Transfer to Group Success!` });
        // dispatch(getFreezerHistory(token));
    });
}

export const removeManager = () => (dispatch) => {
    dispatch({ type: REMOVE_MANAGER });
}