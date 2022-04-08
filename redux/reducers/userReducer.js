import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from "js-cookie";
import { basePath } from 'next.config';

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
        basePath+"user/Image/" +
        cookie.get("username") +
        "?" +
        new Date();
    },
    removeUser: (state) => {
      state.info = {};
    },
    removeUserImage: (state) => {
      state.userImage = "";
    },
  },
});

export const { setUser, setUserImage, removeUser, removeUserImage } =
  userSlice.actions;
export default userSlice.reducer;