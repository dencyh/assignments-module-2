import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { logger } from "./middleware/logger";
import tasksReducer from "./tasksSlice";
import errorsReducer from "./errorsSlice";

const rootReducer = combineReducers({
  errors: errorsReducer,
  tasks: tasksReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
