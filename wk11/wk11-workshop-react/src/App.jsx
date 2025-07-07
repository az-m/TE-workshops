import { UserProvider, ThemeProvider } from "./Providers";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import { UserPage } from "./components/UserPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/:username" element={<UserPage />} />
          </Routes>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
