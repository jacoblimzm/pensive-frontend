import axios from "axios";
import { useContext } from "react";
import { useHistory } from "react-router";
import { LOGOUT_SUCCESS } from "../constants/actions";
import { logOutPath } from "../constants/endpoints";
import { UserContext } from "../context/UserProvider";

const LogOutButton = () => {
    const userContext = useContext(UserContext);
    const history = useHistory();
    const logOut = async (token) => {
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}${logOutPath}`,
            {}, // since a post request is made, some "data" is expected as a second argument. if argument is not provided, it will return an error. 
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
          
          userContext.dispatch({ type: LOGOUT_SUCCESS });
          history.push("/");
        } catch (err) {
          console.log(err.response.data);
        }
      };
    
      const handleLogOut = () => {
        const user = JSON.parse(localStorage.getItem("user"));
          if (user) { // to prevent the absence of "user" object in local storage from crashing the app.
            console.log(user.token);
            logOut(user.token);
          }
      };

    return ( 
        <button type="button" className="btn btn-sm btn-outline-danger" onClick={handleLogOut}>Log Out</button>
     );
}
 
export default LogOutButton;