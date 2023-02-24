import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const taskInitialState = [
  { id: 1, task: "Вивчити Redux", complete: false },
  { id: 2, task: "Вивчити JS", complete: false },
  { id: 3, task: "Вивчити Node", complete: false },
  { id: 4, task: "Вивчити HTML", complete: false },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: taskInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      console.log(action.payload);
      return state.filter((state) => state.id !== +action.payload);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;

export const getTasks = (state) => state.tasks;
