import "./App.css";
import { Routes, Route, Link } from "react-router";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageTwoandThree from "./components/PageTwoandThree";
import Profile from "./components/Profile";
import DynamicElement from "./components/DynamicElement";
import StaticElement from "./components/StaticElement";

function App() {
  return (
    <>
      <h1>The App</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link> |{" "}
        <Link to="page2">Pages 2 & 3</Link> | <Link to="profile">Profiles</Link>
      </nav>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />

        <Route element={<PageTwoandThree />}>
          <Route path="page2" element={<PageTwo />} />
          <Route path="page3" element={<PageThree />} />
        </Route>

        <Route path="profile">
          <Route index element={<Profile />} />
          <Route path=":dynamic" element={<DynamicElement />} />
          <Route path="static" element={<StaticElement />} />
        </Route>
        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </>
  );
}

export default App;
