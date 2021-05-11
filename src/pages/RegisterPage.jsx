import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, useForm } from "../components/useForm";


const RegisterPage = () => {
    const [registerSuccess, setRegisterSuccess] = useState(null)
    const initialUserValues = {
        username: "",
        password: "",
        email: "",
    }

    const { formValues, handleInputChange } = useForm(initialUserValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)

    }

  return (
    <main className="container form-container">
      <Form handleSubmit={handleSubmit}>
        <h3 className="mb-3">REGISTER FOR AN ACCOUNT</h3>
        <p>Please do not leave any fields blank</p>
        <div className="mb-3">
          <label htmlFor="register-email" className="form-label">
            Email
          </label>
          <input
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            type="email"
            className="form-control"
            id="register-email"
            aria-describedby="emailField"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="register-username" className="form-label">
            Username
          </label>
          <input
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="register-username"
            aria-describedby="usernameField"
          />
          {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="register-password" className="form-label">
            Password
          </label>
          <input
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            type="password"
            className="form-control"
            id="register-password"
            aria-describedby="passwordField"
          />
        </div>
        {/* {registerSuccess === false ? (
          <p style={{ color: "red" }}>Please Try Again</p>
        ) : null} */}
        <button className="w-100 btn btn-lg btn-dark mb-2" type="submit">
          Register
        </button>
        <Link to="/login">Have an account? Log In.</Link>
      </Form>
      <p className="mt-5 mb-2 text-muted">what are you thinking of?</p>
    </main>
  );
};

export default RegisterPage;
