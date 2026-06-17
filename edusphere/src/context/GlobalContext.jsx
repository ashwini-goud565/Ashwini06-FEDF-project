import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [user, setUser] = useState({ name: "Ashwini", loggedIn: true });
  const [theme, setTheme] = useState("light");
const toggleTheme = () => {
  setTheme((prev) => (prev === "light" ? "dark" : "light"));
};



  return (
    <GlobalContext.Provider value={{ user, setUser, theme, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}
