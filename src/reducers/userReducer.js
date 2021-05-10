import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants/actions";

const userReducer = (userStateObj, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const tempUserObj = {
        ...action.payload,
        isAuthenticated: true,
      };
      localStorage.setItem("user", JSON.stringify(tempUserObj));
      return tempUserObj;

    case LOGOUT_SUCCESS:
      const tempUserObj1 = {
        isAuthenticated: false,
      };
      localStorage.setItem("user", JSON.stringify(tempUserObj1));
      return tempUserObj1;

    default:
      return userStateObj;
  }
};

export default userReducer;
