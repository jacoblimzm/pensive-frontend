import { useForm, Form } from "../components/useForm";
import { Link } from "react-router-dom"
import { useState } from "react";

const NewBlogPage = () => {
    const [postSuccess, setPostSuccess] = useState({});
    const initialValues = {
        title: "",
        excerpt: "",
        category: "",
        image: "",
        month: "", // dropdown with three capital letters
        day: "", // dropdown with digit days
        content: "",
        breaking: false, // boolean. drop down?
    }
    
    const { formValues, handleInputChange } = useForm(initialValues);
    

    return ( 
        <main className="container form-container">
      <Form handleSubmit={handleSubmit}>
        <h3 className="mb-3">REGISTER FOR AN ACCOUNT</h3>
        <p>Please do not leave any fields blank.</p>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
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
        {/* small hack to break to a new line */}
        <div class="w-100"></div> 
        <div className="col-9 col-sm-9 col-md-6 mb-3">
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
        {/* small hack to break to a new line */}
        <div class="w-100"></div> 
        <div className="col-9 col-sm-9 col-md-6 mb-3">
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
        {/* small hack to break to a new line */}
        <div class="w-100"></div>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
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
        </div>
        <div class="w-100"></div>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
        {registerSuccess.success === false ? (
          <p style={{ color: "red" }}>{registerSuccess.message}</p>
        ) : null}
        <button className="w-100 btn btn-lg btn-dark mb-2" type="submit">
          Create
        </button>
        </div>
        <Link to="/login">Have an account? Log In.</Link>
      </Form>
      <p className="mt-5 mb-2 text-muted">what are you thinking of?</p>
    </main>
     );
}
 
export default NewBlogPage;