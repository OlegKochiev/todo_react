import { createSlice } from "@reduxjs/toolkit";
import store from "./store";

const tasksReducer = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: function (state, action) {
      const task = {
        id: new Date().toISOString(),
        task: action.payload.task,
        priority: action.payload.priority,
        completed: false
      }
      state.push(task);
    },
    delTask: function (state, action) {
      console.log(action);
    }
  }
});

export const { addTask, delTask } = tasksReducer.actions;
export default tasksReducer.reducer;