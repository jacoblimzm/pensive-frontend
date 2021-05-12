import axios from "axios";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, useForm } from "../components/useForm";
import { LOGIN_SUCCESS } from "../constants/actions";
import { logInPath } from "../constants/endpoints";
import { UserContext } from "../context/UserProvider";

const LogInPage = () => {
  const history = useHistory();
  const userContext = useContext(UserContext);
  const [loginSuccess, setLoginSuccess] = useState("");
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
      setLoginSuccess("");
      if (response.data.success) {
        userContext.dispatch({ type: LOGIN_SUCCESS, payload: response.data });
        history.push("/");
      }
    } catch (err) {
      
      setLoginSuccess(err.response.data.success);
    }
  };

  const { formValues, handleInputChange } = useForm(initialUserValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    logIn(username, password);
  };

  return (
    <main className="container form-container">
      <Form handleSubmit={handleSubmit}>
        <h3 className="mb-3">SIGN IN TO START CREATING POSTS</h3>
        <p>Please enter your username and password.</p>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
          <label htmlFor="login-username" className="form-label">
            Username
          </label>
          <input
            required
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="login-username"
            aria-describedby="usernameField"
          />
        </div>
        {/* small hack to break to a new line */}
        <div class="w-100"></div> 
        <div className="col-9 col-sm-9 col-md-6 mb-3">
          <label htmlFor="login-password" className="form-label">
            Password
          </label>
          <input
            required
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            type="password"
            className="form-control"
            id="login-password"
            aria-describedby="passwordField"
          />
        </div>
        {/* small hack to break to a new line */}
        <div class="w-100"></div> 
        <div style={{textAlign: "center"}} className="col-9 col-sm-9 col-md-6 mb-3">
          {loginSuccess === false ? (
            <p style={{ color: "red" }}>Please Try Again</p>
          ) : null}
          <button className="w-100 btn btn-lg btn-dark mb-2" type="submit">
            Sign in
          </button>
        </div>
        <Link to="/register">New? Register</Link>
      </Form>
      <p className="mt-5 mb-2 text-muted">your thoughts, penned down.</p>
    </main>
  );
};

export default LogInPage;
