import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allCategoriesPath } from "../constants/endpoints";
import { UserContext } from "../context/UserProvider";
import LogOutButton from "./LogOutButton";

const NavBar = () => {
  const userContext = useContext(UserContext);
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}${allCategoriesPath}`
      );

      setCategories(response.data);
    } catch (err) {}
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="container nav-container sticky-top">
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
            {userContext.state.isAuthenticated && (
              <Link className="btn btn-sm btn-outline-warning" to="/chat/room1">
                Chat
              </Link>
            )}
            {userContext.state.isAuthenticated && (
              <Link className="btn btn-sm btn-outline-primary mx-2" to="/new">
                New Post
              </Link>
            )}
            {userContext.state.isAuthenticated ? null : (
              <>
                <Link
                  className="btn btn-sm btn-outline-secondary mx-2"
                  to="/register"
                >
                  Register
                </Link>
                <Link className="btn btn-sm btn-outline-success" to="/login">
                  Login
                </Link>{" "}
              </>
            )}
            {userContext.state.isAuthenticated && <LogOutButton />}
          </div>
        </div>
      </header>
      <hr className="divider" />
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          {categories &&
            categories.map((category) => {
              return (
                <Link
                  key={category.id}
                  className="p-2 link-secondary"
                  to={`/category/${category.category_name}`}
                >
                  {category.category_name}
                </Link>
              );
            })}
        </nav>
      </div>
      <hr className="divider" />
    </div>
  );
};

export default NavBar;
