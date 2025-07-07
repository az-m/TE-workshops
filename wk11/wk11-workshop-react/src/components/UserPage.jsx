import { useContext } from "react";
import { UserContext, ThemeContext } from "../Contexts";

export function UserPage() {
  let { username, setUsername } = useContext(UserContext);
  let { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <h2>User ID: {username}</h2>
      <button onClick={() => setUsername("spongebob")}>
        Change to spongebob
      </button>
      <h2>Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle theme</button>
    </>
  );
}
