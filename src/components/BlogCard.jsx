import { Link } from "react-router-dom";
import { capitalise } from "../constants/functions";



const BlogCard = ( {title, category, month, day, excerpt, slug, image} ) => {
    return ( 
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">
                {capitalise(category.category_name)}
              </strong>
              <h3 className="mb-0">{title}</h3>
              <div className="mb-1 text-muted">
                {month + " " + day}
              </div>
              <p className="card-text mb-auto">
                {excerpt}
              </p>
              <Link to={`/blog/${slug}`}>
                Continue...
              </Link>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src={image} className="bd-placeholder-img" width="200" height="250" alt="post-img"/>
            </div>
          </div>
        </div>
     );
}
 
export default BlogCard;