import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.info = action.payload;
    },
    removeUser: (state) => {
      state.info = {};
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
