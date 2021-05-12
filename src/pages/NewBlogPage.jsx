import { useForm, Form } from "../components/useForm";
import { Link } from "react-router-dom";
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
  };

  const { formValues, handleInputChange } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.data);
  };
  return (
    <main className="container form-container">
      <Form handleSubmit={handleSubmit}>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
          <img className="img-fluid" src="" />
        </div>
        <h3 className="mb-3">CREATE SOMETHING NEW</h3>
        <p>Please do not leave any fields blank.</p>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
          <label htmlFor="new-title" className="form-label">
            Title (50 Char Max)
          </label>
          <input
            required
            name="title"
            value={formValues.email}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="new-title"
            aria-describedby="titleField"
            maxLength="50"
          />
        </div>
        {/* small hack to break to a new line */}
        <div class="w-100"></div>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
          <label htmlFor="new-excerpt" className="form-label">
            Excerpt (150 Char Max)
          </label>
          <input
            required
            name="excerpt"
            value={formValues.username}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="new-excerpt"
            aria-describedby="excerptField"
            maxLength="150"
          />
        </div>
        {/* small hack to break to a new line */}
        <div class="w-100"></div>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
          <label htmlFor="" className="form-label"></label>
          <input
            required
            name=""
            value=""
            onChange={handleInputChange}
            type=""
            className="form-control"
            id=""
            aria-describedby=""
          />
        </div>
        <div class="w-100"></div>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
          <label htmlFor="" className="form-label"></label>
          <input
            required
            name=""
            value=""
            onChange={handleInputChange}
            type=""
            className="form-control"
            id=""
            aria-describedby=""
          />
        </div>
        <div class="w-100"></div>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
          <label htmlFor="" className="form-label"></label>
          <input
            required
            name=""
            value=""
            onChange={handleInputChange}
            type=""
            className="form-control"
            id=""
            aria-describedby=""
          />
        </div>
        <div class="w-100"></div>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
          <label htmlFor="" className="form-label"></label>
          <input
            required
            name=""
            value=""
            onChange={handleInputChange}
            type=""
            className="form-control"
            id=""
            aria-describedby=""
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
          {postSuccess.success === false ? (
            <p style={{ color: "red" }}>{postSuccess.message}</p>
          ) : null}
          <button className="w-100 btn btn-lg btn-dark mb-2" type="submit">
            Create
          </button>
        </div>
        <Link to="/">Back to home</Link>
      </Form>
      <p className="mt-5 mb-2 text-muted">what are you thinking of?</p>
    </main>
  );
};

export default NewBlogPage;
