import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Header from "../components/Header";
import { allCategoriesPath } from "../constants/endpoints";
import { capitalise } from "../constants/functions";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [categoryPosts, setCategoryPosts] = useState([]);

  const getIndividualCategory = async () => {
    const response = await axios.get(`${allCategoriesPath}${categoryName}`);
    console.log(response.data);

    setCategoryPosts(response.data.blogentries);
  };

  useEffect(() => {
    getIndividualCategory();
  }, [categoryName]);

  return (
    <>
      <Header header={capitalise(categoryName)} />
      <main class="container">
        <div class="row mb-2">
          {categoryPosts[0] ? categoryPosts.map((post) => {
            return <BlogCard {...post} key={post.id} />;
          }) : <h1 className="display-4 fst-italic">No Posts Yet...</h1>}
        </div>
      </main>
    </>
  );
};

export default CategoryPage;
