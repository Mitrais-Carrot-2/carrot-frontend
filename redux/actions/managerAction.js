import { MANAGER_GET_FREEZER, MANAGER_GET_FREEZER_ERROR } from "../actionTypes";
import axios from "axios";

export const getFreezer = (token) => (dispatch) => {
    // console.log("getFreezer in action", token);
    // token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhcmVsIiwiaWF0IjoxNjQ4NTM2NjcxLCJleHAiOjE2NDg2MjMwNzF9._n1k8IT-e4JFRcGU5Hl6HXDC7Ksk1-gNdPbv2xX4M8r4z0K19AZBO1FbMiLbrC-ZKuARiG52Q3ImBULxVhZEXQ";
    console.log("token manager action",token);
    axios.get(`http://localhost:8181/api/manager/freezer/`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
    }).then((res) => {
        return dispatch({ type: MANAGER_GET_FREEZER, payload: res.data });
    })
    .catch((err) => {
        console.log("error get freezer", err);
        return dispatch({ type: MANAGER_GET_FREEZER_ERROR, payload: err.message });
    });     
}

