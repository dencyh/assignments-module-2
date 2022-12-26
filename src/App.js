import { useEffect, useState } from "react";
import {
  complete,
  getTasks,
  remove,
  selectAllTasks,
  selectLoadingTasks,
  update,
} from "./store/tasksSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const data = useSelector(selectAllTasks);
  const isLoading = useSelector(selectLoadingTasks);
  const error = useSelector((state) => state.errors.errors[0]);

  const [title, setTitle] = useState("");
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

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

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container">
      <h1 className="mt-5 mb-3">Task manager</h1>

      <ul className="list-group">
        {data.map((task) => (
          <li key={task.id} className="list-group-item py-4">
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
            <button
              onClick={() => removeTask(task.id)}
              className="btn btn-danger"
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
