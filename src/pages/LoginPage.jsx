import axios from "axios";
import { useContext } from "react";
import { Form, useForm } from "../components/useForm";
import { LOGIN_SUCCESS } from "../constants/actions";
import { logInPath } from "../constants/endpoints";
import { UserContext } from "../context/UserProvider";

const LogInPage = () => {
  const userContext = useContext(UserContext);
  const initialUserValues = {
    username: "",
    password: "",
  };

  const logIn = async () => {
    try {
      const response = await axios.post(logInPath, {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      });
      console.log(response.data);

      userContext.dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const { formValues, setFormValues, handleInputChange, handleReset } = useForm(
    initialUserValues
  );



  return (
    <main className="container form-container">
      <Form>
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
