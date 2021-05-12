import axios from "axios";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./constants/actions";
import { allPostsPath, logInPath, logOutPath } from "./constants/endpoints";
import { useContext, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { UserContext } from "./context/UserProvider";

import LogInPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import BlogMain from "./pages/BlogMain";
import CategoryPage from "./pages/CategoryPage";
import BlogDetail from "./pages/BlogDetail";
import RegisterPage from "./pages/RegisterPage";
import NewBlogPage from "./pages/NewBlogPage";
require("dotenv").config();

function App() {
  const userContext = useContext(UserContext);

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
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/new">
            {userContext.state.isAuthenticated ? (
              <NewBlogPage />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/category/:categoryName">
            <CategoryPage />
          </Route>
          <Route path="/blog/:slugName">
            <BlogDetail />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
