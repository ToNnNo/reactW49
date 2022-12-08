import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todolist',
  initialState: {
    tasks: ["Construire TodoList", "Construire TodoForm"]
  },
  reducers: {
    add: (state, action) => {
      state.tasks.push(action.payload.task);
    },
    remove: (state, action) => {
      state.tasks.splice(action.payload.index, 1);
    }
  }
});

export const { add, remove } = todoSlice.actions;

export default todoSlice.reducer;