import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from "js-cookie";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.info = action.payload;
    },
    setUserImage: (state) => {
      state.userImage =
        process.env.NEXT_PUBLIC_API_URL +
        "user/Image/" +
        cookie.get("username") +
        "?" +
        new Date();
    },
    setStaticImage: (state) => {
      state.userImage = null;
    },
    removeUser: (state) => {
      state.info = {};
    },
    setNotification: (state, action) => {
      state.notif = action.payload;
    },
    nullNotification: (state) => {
      state.notif = null;
    },
    removeUserImage: (state) => {
      state.userImage = "";
    },
  },
});

export const {
  setUser,
  setUserImage,
  removeUser,
  removeUserImage,
  setStaticImage,
  setNotification,
  nullNotification,
} = userSlice.actions;
export default userSlice.reducer;
