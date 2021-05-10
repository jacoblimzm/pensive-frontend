import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/types";

const userReducer = (userStateObj, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const tempUserObj = {
        data: action.payload,
        isAuthenticated: true,
      };
      localStorage.setItem("user", JSON.stringify(tempUserObj));
      return tempUserObj;

    case LOGOUT_SUCCESS:
      const tempUserObj1 = {
        data: {},
        isAuthenticated: false,
      };
      localStorage.setItem("user", JSON.stringify(tempUserObj1));
      return tempUserObj1;
      
    default:
      return userStateObj;
  }
};

export default userReducer;
