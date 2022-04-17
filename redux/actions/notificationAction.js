import { PUSH_NOTIFICATION, GET_NOTIFICATION, UPDATE_NOTIFICATION } from "redux/actionTypes";
import axios from "axios";

export const pushNotification = (req) => (dispatch) => {
    axios.post(process.env.NEXT_PUBLIC_API_URL+"/api/notification/push", req, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json",
        },
    }).then(res => {
        dispatch({
            type: PUSH_NOTIFICATION,
            payload: res.data
        });
    })
    .catch(err => {
        console.log(err);
    });
}

export const getNotification = (token) => (dispatch) => {
    axios.get(process.env.NEXT_PUBLIC_API_URL+"/api/notification/get/"+userId, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
    }).then(res => {
        dispatch({
            type: GET_NOTIFICATION,
            payload: res.data
        });
    })
    .catch(err => {
        console.log(err);
    });
}