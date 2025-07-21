import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BadApp from "./BadApp.jsx";
import TestApp from "./TestApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TestApp />
  </StrictMode>
);
