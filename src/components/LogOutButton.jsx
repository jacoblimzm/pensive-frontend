import axios from "axios";
import { useContext } from "react";
import { LOGOUT_SUCCESS } from "../constants/actions";
import { logOutPath } from "../constants/endpoints";
import { UserContext } from "../context/UserProvider";

const LogOutButton = () => {

    const userContext = useContext(UserContext);
    const logOut = async (token) => {
        try {
          const response = await axios.post(
            logOutPath,
            {}, 
            {
              // since a post request is made, some "data" is expected as a second argument. if blank, it will return an error.
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
          console.log(response.data);
          userContext.dispatch({ type: LOGOUT_SUCCESS });
        } catch (err) {
          console.log(err.response.data);
        }
      };
    
      const handleLogOut = () => {
        const user = JSON.parse(localStorage.getItem("user"));
          if (user) {
            console.log(user.token);
            logOut(user.token);
          }
      };

    return ( 
        <button type="button" class="btn btn-sm btn-outline-danger" onClick={handleLogOut}>Log Out</button>
     );
}
 
export default LogOutButton;