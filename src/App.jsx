
import axios from "axios";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./constants/actions";
import { allPostsPath, logInPath, logOutPath } from "./constants/endpoints";
import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { UserContext } from "./context/UserProvider";

import LogInPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import BlogMain from "./pages/BlogMain";
require("dotenv").config();

function App() {
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
    console.log(user.token);
    logOut(user.token);
  };


  return (
    <>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <BlogMain />
          </Route>
          <Route path="/login">
            <LogInPage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
