import "../App.css";
import axios from "axios";
import { useContext, useEffect } from "react";
import { allPostsPath, logInPath, logOutPath } from "../constants/endpoints";
import { UserContext } from "../context/UserProvider";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants/actions";
require("dotenv").config();

function App() {
  const userContext = useContext(UserContext);

  const getAllPosts = async () => {
    const response = await axios.get(allPostsPath);
    console.log(response.data);
  };

  const logIn = async () => {
    try {
      const response = await axios.post(logInPath, {
        username: "jacob",
        password: "admin1234",
      });
      console.log(response.data);

      userContext.dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (err) {
      console.log(err.response.data);
    }
  };


  const logOut = async (token) => {
    try {
      const response = await axios.post(logOutPath, {}, { // since a post request is made, some "data" is expected as a second argument. if blank, it will return an error.
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      console.log(response.data);
      userContext.dispatch({ type: LOGOUT_SUCCESS });
    } catch (err) {
      console.log(err.response.data)
    }
    
    // const response = await axios.get(url, {
    //   headers: {
    //     Authorization: "Bearer " + spotifyToken,
    //   },
    // })

  }

  const handleLogOut = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user.token)
    logOut(user.token);
  }

  useEffect(() => {
    getAllPosts();
    logIn();
  }, []);

  return (
    <div className="App">
      <button onClick={handleLogOut}>Log Out!</button>
    </div>
  );
}

export default App;
