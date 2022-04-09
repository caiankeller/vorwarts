import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  token: "",
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    unsetUser: (state, action) => {
      state.username = "";
      state.email = "";
      state.token = "";
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
