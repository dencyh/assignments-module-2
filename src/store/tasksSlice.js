import { createSlice, nanoid } from "@reduxjs/toolkit";
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
    dispatch(received(data));
  } catch (e) {
    dispatch(taskRequestFailed());
    dispatch(setError(e.message));
  }
};

export const createTask =
  ({ title, completed }) =>
  async (dispatch) => {
    dispatch(taskRequested());
    try {
      const data = await todosService.create({ title, completed });
      dispatch(addOne(data));
    } catch (e) {
      dispatch(taskRequestFailed());
      dispatch(setError(e.message));
    }
  };

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    received(state, action) {
      state.tasks = action.payload;
      state.isLoading = false;
    },
    addOne(state, action) {
      state.tasks.unshift({ ...action.payload, id: nanoid() });

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
  received,
  addOne,
  complete,
  update,
  remove,
  taskRequested,
  taskRequestFailed,
} = taskSlice.actions;

export default taskSlice.reducer;

export const selectAllTasks = (state) => state.tasks.tasks;
export const selectLoadingTasks = (state) => state.tasks.isLoading;
