import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { allPostsPath } from "../constants/endpoints";
import { capitalise } from "../constants/functions";
import { UserContext } from "../context/UserProvider";

const BlogDetail = () => {
  const userContext = useContext(UserContext);
  const { slugName } = useParams();

  const [blogPost, setBlogPost] = useState({});

  const getBlogPost = async (slug) => {
    try {
      const response = await axios.get(`${allPostsPath}${slug}/`);
      
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
      <div className="row justify-content-center">
      {userContext.state.isAuthenticated && <div className="col"><Link to={`/edit/${slugName}`}>Edit Post</Link></div>}
      <div className="col"><Link to="/">Back to Posts</Link></div>
      </div>
    </div>
  );
};

export default BlogDetail;
