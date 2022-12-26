import { createSlice } from "@reduxjs/toolkit";
import { todosService } from "../services/todos.service";
import { setError } from "./errorsSlice";

export const initialState = {
  tasks: [],
  isLoading: true,
};

export const getTasks = () => async (dispatch) => {
  dispatch(taskRequested());
  try {
    const data = await todosService.fetch();
    dispatch(acquired(data));
  } catch (e) {
    dispatch(taskRequestFailed());
    dispatch(setError(e.message));
  }
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    acquired(state, action) {
      state.tasks = action.payload;
      state.isLoading = false;
    },
    complete(state, action) {
      state.tasks = state.tasks
        .slice(0)
        .map((task) =>
          task.id === action.payload ? { ...task, completed: true } : task
        );
    },
    update(state, action) {
      state.tasks = state.tasks
        .slice(0)
        .map((task) =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.title }
            : task
        );
    },
    remove(state, action) {
      return state.slice(0).filter((task) => task.id !== action.payload);
    },
    taskRequested(state) {
      state.isLoading = true;
    },
    taskRequestFailed(state, action) {
      state.isLoading = false;
    },
  },
});

export const {
  complete,
  update,
  remove,
  acquired,
  taskRequested,
  taskRequestFailed,
} = taskSlice.actions;

export default taskSlice.reducer;

export const selectAllTasks = (state) => state.tasks.tasks;
export const selectLoadingTasks = (state) => state.tasks.isLoading;
