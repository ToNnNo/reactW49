import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice";
import todoSlice from '../slice/todoSlice';
import userSlice from '../slice/userSlice';

export default configureStore({
  reducer: { 
    counter: counterSlice,
    todolist: todoSlice,
    user: userSlice
  }
})