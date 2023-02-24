// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import taskReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./tasksSlice";

// export const store = createStore(rootReducer, enhancer);
export const store = configureStore({ reducer: { tasks: taskReducer } });
