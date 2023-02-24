// import { addTask, deleteTask } from "./actions";
// import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   tasks: [
//     { id: 1, task: "Вивчити Redux", complete: false },
//     { id: 2, task: "Вивчити JS", complete: false },
//     { id: 3, task: "Вивчити Node", complete: false },
//     { id: 4, task: "Вивчити HTML", complete: false },
//   ],
// };

// const taskReducer = createReducer(initialState, {
//   [addTask]: (state, action) => {
//     return [...state.tasks, action.payload];
//   },
//   [deleteTask]: (state, action) => {
//     return state.tasks.filter((task) => {
//       return task.id !== +action.payload;
//     });
//   },
// });

// // const taskReducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case addTask.type:
// //       return [...state.tasks, action.payload];

// //     case deleteTask.type: {
// //       return state.tasks.filter((task) => {
// //         return task.id !== +action.payload;
// //       });
// //     }

// //     default:
// //       return state.tasks;
// //   }
// // };

// export default taskReducer;
