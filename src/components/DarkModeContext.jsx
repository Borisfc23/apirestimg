import React, { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setdarkMode] = useState(false);
  useEffect(() => {
    localStorage.getItem("darkMode");
  }, [darkMode]);

  const toggleModoOscuro = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setdarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider
      value={{ darkMode, toggleModoOscuro, setdarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
