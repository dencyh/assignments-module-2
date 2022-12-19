import * as actionTypes from "./actionTypes";

export const taskCompleted = (id) => {
  return {
    type: actionTypes.taskCompleted,
    payload: { id },
  };
};

export const titleUpdated = ({ id, title }) => {
  return {
    type: actionTypes.titleUpdated,
    payload: { id, title },
  };
};

export const taskRemoved = (id) => {
  return {
    type: actionTypes.taskRemoved,
    payload: { id },
  };
};
