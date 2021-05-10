import axios from "axios";
import { useContext, useState } from "react";
import { Form, useForm } from "../components/useForm";
import { LOGIN_SUCCESS } from "../constants/actions";
import { logInPath } from "../constants/endpoints";
import { UserContext } from "../context/UserProvider";

const LogInPage = () => {
  const userContext = useContext(UserContext);
  const [loginSuccess, setLoginSuccess] =useState("")
  const initialUserValues = {
    username: "",
    password: "",
  };

  const logIn = async (usernameInput, passwordInput) => {
    try {
      const response = await axios.post(logInPath, {
        username: usernameInput,
        password: passwordInput,
      });
      console.log(response.data);
      setLoginSuccess("")
      userContext.dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (err) {
      console.log(err.response.data);
      setLoginSuccess(err.response.data.success)
    }
  };

  const { formValues, handleInputChange } = useForm(
    initialUserValues
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value
    const password = e.target.password.value
    logIn(username, password);

};


  return (
    <main className="container form-container">
      <Form handleSubmit={handleSubmit}>
        <img className="mb-4" src="" alt="" width="72" height="57" />
        <h3 className="mb-3">SIGN IN TO START CREATING POSTS</h3>
        <p>Please enter your username and password</p>
        <div className="mb-3">
          <label htmlFor="login-username" className="form-label">
            Username
          </label>
          <input
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="login-username"
            aria-describedby="usernameField"
          />
          {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="login-password" className="form-label">
            Password
          </label>
          <input
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            type="password"
            className="form-control"
            id="login-password"
            aria-describedby="passwordField"
          />
        </div>
        {loginSuccess === false ? <p style={{color: "red"}}>Please Try Again</p> : null}
        {/* <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div> */}
        <button className="w-100 btn btn-lg btn-dark mb-2" type="submit">
          Sign in
        </button>
        <a href="">New? Register</a>
      </Form>
      <p className="mt-5 mb-2 text-muted">your thoughts, penned down.</p>
    </main>
  );
};

export default LogInPage;
