import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allCategoriesPath } from "../constants/endpoints";

const NavBar = () => {

    const [categories, setCategories] = useState([])

    const getAllCategories = async () => {
        const response = await axios.get(allCategoriesPath);
        console.log(response.data)
        setCategories(response.data)
    }

    useEffect( () => {
        getAllCategories();
    },[])

  return (
    <div className="container nav-container">
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <Link className="link-secondary" to="/about">
              About
            </Link>
          </div>
          <div className="col-4 text-center">
            <Link id="blog-header" className="text-dark" to="/">
              pensive
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <Link className="btn btn-sm btn-outline-secondary" to="/login">
              Log In
            </Link>
          </div>
        </div>
      </header>
      <hr className="divider" />
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
        {categories.map( category => {
            return <Link key={category.id} className="p-2 link-secondary" to={`/category/${category.category_name}`}>{category.category_name}</Link>
        })}
        </nav>
      </div>
      <hr className="divider" />
    </div>
  );
};

export default NavBar;
