import axios from "axios";
import { useForm, Form } from "../components/useForm";
import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { allCategoriesPath, newPostPath } from "../constants/endpoints";
import { capitalise } from "../constants/functions";
import { days, months } from "../constants/data";
import { UserContext } from "../context/UserProvider";

const NewBlogPage = () => {
    const userContext = useContext(UserContext);
    const history = useHistory();
  const [postSuccess, setPostSuccess] = useState({});
  const [categories, setCategories] = useState([]);
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

  const getAllCategory = async () => {
    try {
      const response = await axios.get(`${allCategoriesPath}`);
      console.log(response.data);
      setCategories(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };
  const { formValues, handleInputChange } = useForm(initialValues);

  const createNewPost = async (title, excerpt, category, image, month, day, content, breaking=false) => {

    try {
        const response = await axios.post(newPostPath, {
            title: title,
            excerpt: excerpt,
            category: category,
            image: image,
            month: month,
            day: day,
            content: content,
            breaking: breaking
        }, {
            headers: {
              Authorization: "Bearer " + userContext.state.token,
            },
          }
        )
        console.log(response.data)
        setPostSuccess(response.data)
        if (response.data.success) {
            setTimeout( () => {
                // history.push(`${allPostsPath}${response.data.data.slug}`);
                history.push("/")
            }, 500)
        }

    } catch(err) {
        console.log(err)
        setPostSuccess(err.response.data)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const excerpt = e.target.excerpt.value;
    const category = e.target.category.value;
    const image =  e.target.image.value;
    const month = e.target.month.value;
    const day = e.target.day.value;
    const content = e.target.content.value;
    const breaking = e.target.breaking.checked;

    createNewPost(title, excerpt, category, image, month, day, content, breaking)
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <main className="container form-container">
      <Form handleSubmit={handleSubmit}>
        <div className="col mb-3">
          <img id="new-post-img" className="img-fluid rounded mx-auto" src="/images/quill.jpeg" alt="quill-img"/>
        </div>
        <h3 className="mb-3">CREATE SOMETHING NEW</h3>
        <p>Please do not leave any fields blank.</p>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
          <label htmlFor="new-title" className="form-label">
            Title (50 Char Max)
          </label>
          <input
            // required
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
        <div className="w-100"></div>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
          <label htmlFor="new-excerpt" className="form-label">
            Excerpt (150 Char Max)
          </label>
          <input
            // required
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
        <div className="w-100"></div>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
          <label htmlFor="new-category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            id="new-category"
            name="category"
            value={formValues.category}
            onChange={handleInputChange}
          >
            {categories &&
              categories.map((category) => {
                return (
                  <option key={category.id} value={category.category_name}>{capitalise(category.category_name)}</option>
                );
              })}
          </select>
        </div>
        <div className="w-100"></div>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
          <label htmlFor="new-image" className="form-label">
            Image URL
          </label>
          <input
            // required
            name="image"
            value={formValues.image}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="new-image"
            aria-describedby="imageField"
          />
        </div>
        <div className="w-100"></div>

        {/* small hack to break to a new line */}
        <div className="w-100"></div>
        <div className="col-sm-9 col-md-3 mb-3">
          <label htmlFor="new-month" className="form-label">
            Month
          </label>
          <select
            className="form-select"
            id="new-month"
            name="month"
            value={formValues.month}
            onChange={handleInputChange}
          >
            {months.map( (month, index) => {
                return <option key={index} value={month}>{month}</option>
            })}
          </select>
        </div>
        <div className="col-sm-9 col-md-3 mb-3">
          <label htmlFor="new-day" className="form-label">
            Day
          </label>
          <select
            className="form-select"
            id="new-day"
            name="day"
            value={formValues.day}
            onChange={handleInputChange}
          >
            {days.map( (day, index) => {
                return <option key={index} value={day}>{day}</option>
            })}
          </select>
        </div>
        <div className="w-100"></div>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
          <label htmlFor="new-content" className="form-label">Content</label>
          <textarea
            // required
            rows="5"
            name="content"
            value={formValues.content}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="new-content"
            aria-describedby="contentField"
          />
        </div>
        {/* small hack to break to a new line */}
        <div className="w-100"></div>
        <div className="col-9 col-sm-9 col-md-6 mb-3">
          <div className="form-check mb-3">
            <input
              name="breaking"
              className="form-check-input"
              type="checkbox"
              value="breaking-boolean"
              id="new-breaking"
            />
            <label className="form-check-label" htmlFor="new-breaking">
              Featured Post
            </label>
          </div>
        </div>
        <div className="w-100"></div>
        <div style={{textAlign: "center"}} className="col-9 col-sm-9 col-md-6 mb-3">
          {postSuccess.success === false ? (
            <p style={postSuccess.success === false ? { color: "red" }:{ color: "green"} }>{postSuccess.message}</p>
          ) : null}
          <button className="w-100 btn btn-lg btn-dark mb-2" type="submit">
            Post
          </button>
        </div>
        <Link to="/">Back to home</Link>
      </Form>
      <p className="mt-5 mb-2 text-muted">what are you thinking of?</p>
    </main>
  );
};

export default NewBlogPage;
