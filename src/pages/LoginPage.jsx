import axios from "axios";
import { useContext } from "react";
import { LOGIN_SUCCESS } from "../constants/actions";
import { logInPath } from "../constants/endpoints";
import { UserContext } from "../context/UserProvider";

const LogInPage = () => {

    

    const userContext = useContext(UserContext);
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

  
    return (
      <main className="container form-container">
        <form>
          <img className="mb-4" src="" alt="" width="72" height="57" />
          <h3 className="mb-3">SIGN IN TO START CREATING POSTS</h3>
          <p>Please enter your e-mail and password</p>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              E-mail
            </label>
            <input

              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailField"
            />
            {/* <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div> */}
          </div>
          <div class="mb-3">
            <label for="login-password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
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
          <a href="">New? Register for an account</a>
        </form>
        <p className="mt-5 mb-2 text-muted">your thoughts, penned down.</p>
      </main>
  );
};

export default LogInPage;
