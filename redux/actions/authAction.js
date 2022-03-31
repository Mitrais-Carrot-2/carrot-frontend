import Router from "next/router";
import cookie from "js-cookie";
import { AUTHENTICATE, DEAUTHENTICATE } from "../actionTypes";
import axios from "axios";
import { setUser } from "redux/reducers/userReducer";

export const authenticate = (user) => (dispatch) => {
  axios
    .post("http://localhost:8181/api/auth/login", user)
    .then((res) => {
      setCookie("token", res.data.token);
      setCookie("username", res.data.username);
      setCookie("id", res.data.id);
      setCookie("roles", res.data.roles);

      axios
        .get("http://localhost:8181/api/user/username/" + res.data.username)
        .then((user) => {
          dispatch(setUser(user.data));
          console.log(user.data);
        });

      Router.push("/");
      dispatch({ type: AUTHENTICATE, payload: res.data });
    })
    .catch((err) => {
      console.log("Username / Password is incorrect");
    });
};

// gets the token from the cookie and saves it in the store
export const reauthenticate = (token) => {
  return (dispatch) => {
    dispatch({ type: AUTHENTICATE, payload: token });
  };
};

// removing the token
export const deauthenticate = () => {
  return (dispatch) => {
    removeCookie("token");
    Router.push("/");
    dispatch({ type: DEAUTHENTICATE });
  };
};

export const checkServerSideCookie = (ctx) => {
  const token = getCookie("token", ctx.req);
  if (token) {
    ctx.store.dispatch(reauthenticate(token));
  }
};
/**
 * cookie helper methods
 */

// create function to set cookie
export const setCookie = (key, value) => {
  // expires in a day
  const date = new Date();
  date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
  document.cookie = `${key}=${value}; expires=${date.toUTCString()}`;
};

// create function to get cookie
export const getCookie = (key, req) => {
  // check if cookie exists
  if (req) {
    return req.cookies[key];
  } else if (document.cookie.length > 0) {
    // if cookie exists, get the value
    let cStart = document.cookie.indexOf(`${key}=`);
    if (cStart !== -1) {
      cStart = cStart + key.length + 1;
      let cEnd = document.cookie.indexOf(";", cStart);
      if (cEnd === -1) {
        cEnd = document.cookie.length;
      }
      return document.cookie.substring(cStart, cEnd);
    }
  }
  return "";
};

// create function to remove cookie
export const removeCookie = (key) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};

// export const setCookie = (key, value) => {
//   if (process.browser) {
//     cookie.set(key, value, {
//       expires: 1,
//       path: "/",
//     });
//   }
// };

// export const removeCookie = (key) => {
//   if (process.browser) {
//     cookie.remove(key, {
//       expires: 1,
//     });
//   }
// };

// export const getCookie = (key, req) => {
//   return process.browser
//     ? getCookieFromBrowser(key)
//     : getCookieFromServer(key, req);
// };

export const getCookieFromBrowser = (key) => {
  return cookie.get(key);
};

export const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split("=")[1];
};
