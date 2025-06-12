import { Routes, Route } from "react-router";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageTwoandThree from "./pages/PageTwoandThree";
import Profile from "./pages/Profile";
import DynamicElement from "./components/DynamicElement";
import StaticElement from "./components/StaticElement";
import UserPosts from "./components/UserPosts";
import Form from "./components/Form";
import Foxes from "./pages/Foxes";

export const routes = (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="form" element={<Form />} />
    <Route path="fox" element={<Foxes />} />

    <Route element={<PageTwoandThree />}>
      <Route path="page2" element={<PageTwo />} />
      <Route path="page3" element={<PageThree />} />
    </Route>

    <Route path="profile">
      <Route index element={<Profile />} />
      <Route path=":dynamic" element={<DynamicElement />}>
        <Route path="posts" element={<UserPosts />} />
      </Route>
      <Route path="static" element={<StaticElement />} />
    </Route>
  </Routes>
);
