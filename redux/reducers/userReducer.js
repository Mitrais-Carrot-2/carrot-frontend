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
        "http://localhost:8181/api/user/Image/" +
        cookie.get("username") +
        "?" +
        new Date();
    },
    removeUser: (state) => {
      state.info = {};
    },
  },
});

export const { setUser, setUserImage, removeUser } = userSlice.actions;
export default userSlice.reducer;
