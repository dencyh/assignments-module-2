import * as actionTypes from "./actionTypes";

export function taskReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.taskCompleted:
      return state
        .slice(0)
        .map((task) =>
          task.id === action.payload.id ? { ...task, completed: true } : task
        );

    case actionTypes.titleUpdated:
      return state
        .slice(0)
        .map((task) =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.title }
            : task
        );

    case actionTypes.taskRemoved:
      return state.slice(0).filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
}
