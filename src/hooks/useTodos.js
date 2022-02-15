import { useContext } from "react";
import { AppContext } from "../context/AppContext";

// custom hook for using AppContext
export const useTodos = () => {
  return useContext(AppContext);
};
