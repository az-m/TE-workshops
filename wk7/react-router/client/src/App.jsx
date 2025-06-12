import "./App.css";
import { routes } from "./routes.jsx";
import { Link } from "react-router";

function App() {
  return (
    <>
      <h1>The App</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link> |{" "}
        <Link to="page2">Pages 2 & 3</Link> | <Link to="profile">Profile</Link>{" "}
        | <Link to="form">The Form</Link> | <Link to="fox">The Fox</Link>
      </nav>
      {routes}
    </>
  );
}

export default App;
