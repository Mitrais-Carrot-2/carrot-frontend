import { MANAGER_GET_FREEZER, MANAGER_GET_FREEZER_ERROR, MANAGER_GET_STAFF, SET_SHARE_TO_STAFF, SHARE_TO_STAFF } from "../actionTypes";
import axios from "axios";

export const getFreezer = (token) => (dispatch) => {
    axios.get(`http://localhost:8181/api/manager/freezer/`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
    }).then((res) => {
        dispatch({ type: MANAGER_GET_FREEZER, payload: res.data });
    })
        .catch((err) => {
            console.log("FAILED GET FREEZER", err);
        });
}

export const getStaff = (token, id) => (dispatch) => {
    axios.get(`http://localhost:8181/api/manager/${id}/staff/`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
    }).then((res) => {

        dispatch({ type: MANAGER_GET_STAFF, payload: res.data });
    })
        .catch((err) => {
            console.log("FAILED GET STAFF", err);
        });
}

export const setShareToStaff = (staff) => (dispatch) => {
    // console.log("SHARE STAFF", staff);
    dispatch({ type: SET_SHARE_TO_STAFF, payload: staff.sendToStaff });
}

export const shareToStaff = (token, req) => (dispatch) => {
    console.log("SHARE TO STAFF", req);

    axios.post(`http://localhost:8181/api/manager/transfer/staff/`, req, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json",
        },
    }).then((res) => {
        console.log("SHARE TO STAFF", res);
        dispatch({ type: SHARE_TO_STAFF, payload: res.data });        
    }).catch((err) => {
        console.log("SHARE TO STAFF", err.message);
    });
}

