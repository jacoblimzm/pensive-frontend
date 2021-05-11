import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { allPostsPath } from "../constants/endpoints";
import { capitalise } from "../constants/functions";

const BlogDetail = () => {
  const { slugName } = useParams();

  const [blogPost, setBlogPost] = useState({});

  const getBlogPost = async (slug) => {
    try {
      const response = await axios.get(`${allPostsPath}${slug}/`);
      console.log(response.data);
      setBlogPost(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getBlogPost(slugName);
  }, []);
  return (
    <div className="container">
      <img src={blogPost.image} className="img-fluid shadow-sm" alt={blogPost.title}/>
      <h1 className="display-3 fst-italic my-2">{blogPost.title}</h1>
      <h3 className="mb-4">{blogPost.excerpt}</h3>
      <h4 className="text-success">
        {blogPost.category && capitalise(blogPost.category.category_name)}
      </h4>
      <h6>
        {blogPost.month} {blogPost.day}
      </h6>
      <hr />
      <div className="row">
        <div className="col-sm-12 col-md-8"><p className="blog-content">{blogPost.content}</p></div>
      </div>
      <hr />
      <Link to="/">Back to Posts</Link>
    </div>
  );
};

export default BlogDetail;
