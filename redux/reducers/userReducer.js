import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from "js-cookie";
import { basePath } from "next.config";

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
} = userSlice.actions;
export default userSlice.reducer;
