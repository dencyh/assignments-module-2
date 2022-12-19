import { useEffect, useState } from "react";
import * as actions from "./store/actions";
import { initStore } from "./store/store";

const store = initStore();

function App() {
  const [state, setState] = useState(store.getState());

  const [title, setTitle] = useState("");
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
      // console.log(store.getState());
    });
  }, []);

  const completeTask = (id) => {
    store.dispatch(actions.taskCompleted(id));
  };

  const updateTitle = (id, title) => {
    store.dispatch(actions.titleUpdated({ id, title }));
    setTaskInput("");
  };

  const removeTask = (id) => {
    store.dispatch(actions.taskRemoved(id));
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-3">Task manager</h1>

      <ul className="list-group">
        {state.map((task) => (
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
