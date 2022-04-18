import { PUSH_NOTIFICATION, GET_NOTIFICATION, UPDATE_NOTIFICATION, REMOVE_NOTIFICATION } from "redux/actionTypes";
import axios from "axios";

export const pushNotification = (req) => (dispatch) => {
    axios.post(process.env.NEXT_PUBLIC_API_URL+"notification/", req, {
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
    axios.get(process.env.NEXT_PUBLIC_API_URL+"notification/", {
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

export const markReadNotification = (token, id) => (dispatch) => {
    axios.put(process.env.NEXT_PUBLIC_API_URL+"notification/read/"+id, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
    }).then(res => {
        dispatch(getNotification(token));
        dispatch({ type: UPDATE_NOTIFICATION });

        // axios.get(process.env.NEXT_PUBLIC_API_URL+"notification/", {
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Credentials": true,
        //     },
        // }).then(res2 => {
        //     dispatch({
        //         type: UPDATE_NOTIFICATION,
        //         payload: res2.data
        //     });
        // })
        // .catch(err => {
        //     console.log(err);
        // });
        
    })
    .catch(err => {
        console.log(err);
    });
}

export const removeNotifications = () => (dispatch) => {
    dispatch({
        type: REMOVE_NOTIFICATION
    });
}