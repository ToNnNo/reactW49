import { createSlice } from "@reduxjs/toolkit";

const KEY = 'authentication-data';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null
  },
  reducers: {
    save: (state, action) => {
      localStorage.setItem(KEY, JSON.stringify(action.payload.data));
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
    },
    logout: (state) => {
      localStorage.removeItem(KEY);
      state.user = null;
      state.token = null;
    },
    reload: (state) => {
      const data = JSON.parse(localStorage.getItem(KEY));
      if(data !== null) {
        state.user = data.user;
        state.token = data.token;
      }
    }
  }
});

export const { save, logout, reload } = userSlice.actions;

export default userSlice.reducer;