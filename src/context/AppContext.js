import React, { useState } from "react";

// 1. Create context (boundary for accessing state)
export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoItems")) || []
  );
  // contains all elements being set in global state
  const providerValue = { todos, setTodos };

  //   pass in global state items and inject child HTML elements
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};
