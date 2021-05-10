import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { allPostsPath, featuredPostPath } from "../constants/endpoints";

const BlogMain = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState([]);

  const getAllPosts = async () => {
    try {
      const response = await axios.get(allPostsPath);
      console.log(response.data);
      setBlogPosts(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  const getFeaturedPost = async () => {
    try {
      const response = await axios.get(featuredPostPath);
      console.log(response.data);
      setFeaturedPost(response.data[0]);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getFeaturedPost();
    getAllPosts();
  }, []);
  return (
    <main className="container">
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-secondary">
        <div className="col px-0">
          <h2 style={{ textAlign: "center" }}>featured</h2>
          <h1 className="display-4 fst-italic">{featuredPost.title}</h1>
          <p className="lead my-3">{featuredPost.excerpt}</p>
          <p className="lead mb-0">
            <Link
              className="text-white fw-bold"
              to={`blog/${featuredPost.slug}`}
            >
              Continue reading....
            </Link>
          </p>
        </div>
      </div>

      <div class="row mb-2">
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">
                {blogPosts[0] && blogPosts[0].category}
              </strong>
              <h3 class="mb-0">{blogPosts[0] && blogPosts[0].title}</h3>
              <div class="mb-1 text-muted">
                {blogPosts[0] && blogPosts[0].month + " " + blogPosts[0].day}
              </div>
              <p class="card-text mb-auto">
                {blogPosts[0] && blogPosts[0].excerpt}
              </p>
              <Link to={`blog/${blogPosts[0] && blogPosts[0].slug}`}>
                Continue...
              </Link>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img src={blogPosts[0] && blogPosts[0].image} class="bd-placeholder-img" width="200" height="250" alt="post-img"/>
              {/* <svg
                class="bd-placeholder-img"
                width="200"
                height="200"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogMain;
