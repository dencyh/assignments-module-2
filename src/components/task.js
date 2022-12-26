import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { complete, remove, update } from "../store/tasksSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [taskInput, setTaskInput] = useState("");

  const completeTask = (id) => {
    dispatch(() => {
      dispatch(complete(id));
    });
  };

  const updateTitle = (id, title) => {
    dispatch(update({ id, title }));
    setTaskInput("");
  };

  const removeTask = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <div className="d-flex flex-column align-items-start">
        <div className="d-flex gap-2">
          <h3 className="d-inline my-0 mx-0">{task.title}</h3>
          <button
            className="d-inline btn btn-light btn-sm"
            onClick={() => {
              setTaskInput(task.id);
              setTitle(task.title);
            }}
          >
            <i className="bi bi-pencil-square"></i>
          </button>
        </div>
        {taskInput === task.id && (
          <div className="d-flex gap-2 align-items-center my-2">
            <input
              type="text"
              className="form-control"
              placeholder="New title"
              aria-label="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => updateTitle(task.id, title)}
            >
              <i className="bi bi-check-lg"></i>
            </button>
          </div>
        )}
        <p className="mt-2">
          <span className="me-1">Completed:</span>
          {task.completed ? (
            <span className="badge bg-success">Yes</span>
          ) : (
            <span className="badge bg-secondary">No</span>
          )}
        </p>
      </div>
      <button
        onClick={() => completeTask(task.id)}
        className="btn btn-primary me-2"
      >
        Done
      </button>
      <button onClick={() => removeTask(task.id)} className="btn btn-danger">
        remove
      </button>{" "}
    </>
  );
};
export default Task;
