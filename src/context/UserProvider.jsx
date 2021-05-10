import { createContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const initial = {
    isAuthenticated: false,
  };
  
  // an initial state to initialise the reducer. if a user object doesn't already exist, set it to initial.
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

export default UserProvider