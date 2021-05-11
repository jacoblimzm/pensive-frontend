import { Link } from "react-router-dom";
import { capitalise } from "../constants/functions";



const BlogCard = ( {title, category, month, day, excerpt, slug, image} ) => {
    return ( 
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">
                {capitalise(category.category_name)}
              </strong>
              <h3 class="mb-0">{title}</h3>
              <div class="mb-1 text-muted">
                {month + " " + day}
              </div>
              <p class="card-text mb-auto">
                {excerpt}
              </p>
              <Link to={`/blog/${slug}`}>
                Continue...
              </Link>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img src={image} class="bd-placeholder-img" width="200" height="250" alt="post-img"/>
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
     );
}
 
export default BlogCard;