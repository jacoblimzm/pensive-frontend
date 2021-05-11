import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, useForm } from "../components/useForm";
import { registerPath } from "../constants/endpoints";

const RegisterPage = () => {
  const [registerSuccess, setRegisterSuccess] = useState({});
  const initialUserValues = {
    username: "",
    password: "",
    email: "",
  };

  const { formValues, handleInputChange } = useForm(initialUserValues);

  const register = async (username, password, email, is_staff) => {
      try {
          const response = await axios.post(registerPath, {
              username: username,
              password: password,
              email: email,
              is_staff: is_staff,
          })
          console.log(response.data)
          setRegisterSuccess(response.data)
      } catch(err) {
          console.log(err.response.data)
        //   setRegisterSuccess(err.response.data.success);
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    const is_staff = e.target.staffstatus.checked;
    register(username, password, email, is_staff)

  };

  return (
    <main className="container form-container">
      <Form handleSubmit={handleSubmit}>
        <h3 className="mb-3">REGISTER FOR AN ACCOUNT</h3>
        <p>Please do NOT leave any fields blank.</p>
        <div className="mb-3">
          <label htmlFor="register-email" className="form-label">
            Email
          </label>
          <input
            required
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
            required
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="register-username"
            aria-describedby="usernameField"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="register-password" className="form-label">
            Password
          </label>
          <input
            required
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            type="password"
            className="form-control"
            id="register-password"
            aria-describedby="passwordField"
          />
        </div>
        <div className="form-check mb-3">
          <input
            name="staffstatus"
            className="form-check-input"
            type="checkbox"
            value="staff-status"
            id="staffCheckDefault"
          />
          <label className="form-check-label" htmlFor="staffCheckDefault">
            Staff
          </label>
        </div>
        {registerSuccess.success === false ? (
          <p style={{ color: "red" }}>{registerSuccess.message}</p>
        ) : null}
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
