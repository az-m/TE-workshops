import { useState } from "react";
import { UserContext, ThemeContext } from "./Contexts";

export function UserProvider({ children }) {
  const [username, setUsername] = useState("Bob");
  return (
    <>
      <UserContext.Provider value={{ username, setUsername }}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function Providers({ children }) {
  <>
    <UserProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </UserProvider>
  </>;
}
