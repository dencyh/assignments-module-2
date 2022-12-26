import { useEffect } from "react";
import {
  createTask,
  getTasks,
  selectAllTasks,
  selectLoadingTasks,
} from "./store/tasksSlice";
import { useSelector, useDispatch } from "react-redux";
import Task from "./components/task";

function App() {
  const dispatch = useDispatch();

  const data = useSelector(selectAllTasks);
  const isTaskLoading = useSelector(selectLoadingTasks);
  const error = useSelector((state) => state.errors.errors[0]);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  if (isTaskLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container">
      <h1 className="mt-5 mb-3">Task manager</h1>

      <button
        className="btn btn-primary mb-4"
        onClick={() => {
          dispatch(createTask({ title: "New Task", completed: false }));
        }}
      >
        Create task
      </button>

      <ul className="list-group">
        {data.map((task) => (
          <li key={task.id} className="list-group-item py-4">
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
