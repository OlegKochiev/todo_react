import { createSlice } from "@reduxjs/toolkit";

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
      if (task.task === '') {
        return;
      }
      state.push(task);
    },
    delTask: function (state, action) {
      const id = action.payload.id;
      return state.filter(task => task.id !== id);

    },
    changeTaskStatus: function (state, action) {
      const id = action.payload.id;
      state = state.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      });
    }
  }
});

export const { addTask, delTask, changeTaskStatus } = tasksReducer.actions;
export default tasksReducer.reducer;