import axios from "axios";
import { useEffect, useState } from "react";
import { allPostsPath, featuredPostPath } from "../constants/endpoints";
import BlogCard from "../components/BlogCard";
import FeaturedCard from "../components/FeaturedCard";
import Header from "../components/Header";

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
    <>
      <Header header="Featured" />
      <main className="container">
        <FeaturedCard {...featuredPost} />

        <Header header="Latest" />
        <div class="row mb-2">
          {blogPosts.map((post) => {
            return <BlogCard key={post.id} {...post} />;
          })}
        </div>
      </main>
    </>
  );
};

export default BlogMain;
