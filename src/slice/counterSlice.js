import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increase: (state, action) => {
      /*console.log(action.payload.step);
      state.value += 1;*/ // immer nous permet de modifier les valeurs du state

      state.value += parseInt(action.payload.step);
    },
    decrease: (state, action) => {
      // state.value -= 1;

      state.value -= action.payload.step;
    },
    reset: (state) => {
      state.value = 0;
    } 
  }
});

export const { increase, decrease, reset } = counterSlice.actions;

export default counterSlice.reducer;