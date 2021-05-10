import { useContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const initial = {
    isAuthenticated: false,
  };
  const initialState = JSON.parse(
    localStorage.getItem("user") || JSON.stringify(initial)
  );

  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
