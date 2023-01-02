import "./App.css";
import { NavLink, Redirect, Route, Switch, useParams } from "react-router-dom";

const listStyle = { display: "flex", flexFlow: "column", gap: "8px" };

const users = Array(5)
  .fill(0)
  .map((_, index) => ({ id: index, name: "User " + index }));

const HomePage = () => (
  <>
    <h1>Home Page</h1>
  </>
);

const UsersLayout = () => (
  <div>
    <h1>Users Layout</h1>
    <NavLink to="/">Main Page</NavLink>
    <Switch>
      <Route exact path="/users" component={UsersListPage} />
      <Route exact path="/users/:id/profile" component={UserPage} />
      <Route exact path="/users/:id/edit" component={UserEditPage} />
      <Redirect from={"/users/:id"} to={"/users/:id/profile"} />
    </Switch>
  </div>
);

const UsersListPage = () => (
  <>
    <h1>Users list page</h1>
    <div style={listStyle}>
      {users.map((user) => (
        <NavLink key={user.id} to={`/users/${user.id}/profile`}>
          {user.name}
        </NavLink>
      ))}
    </div>
  </>
);

const UserPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>UserPage</h1>
      <nav style={listStyle}>
        <NavLink to={`/users/${id}/edit`}>Edit this user</NavLink>
        <NavLink to="/users">User list page</NavLink>
      </nav>
      <h3>Current User ID - {id}</h3>
    </>
  );
};

const UserEditPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Edit User Page</h1>
      <nav style={listStyle}>
        <NavLink to={`/users/${id}/profile`}>User Page</NavLink>
        <NavLink to={`/users/${Number(id) + 1}/profile`}>
          Another User Page
        </NavLink>
        <NavLink to="/users">User List</NavLink>
      </nav>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <h1>App Layout</h1>
      <NavLink to="/users">Users list page</NavLink>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/users/" component={UsersLayout} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}

export default App;
