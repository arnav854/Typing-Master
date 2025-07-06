// context/UserContext.js
import React, { createContext, useState, useContext } from "react";

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [toggleClicked, setToggleClicked] = useState(
    "bg-gray-800 text-orange-400"
  );

  return (
    <ToggleContext.Provider value={{ toggleClicked, setToggleClicked }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useUser = () => useContext(ToggleContext);
