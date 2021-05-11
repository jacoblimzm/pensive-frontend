import { Link, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { slugName } = useParams();
  return (
    <div className="container">
      <img className="img-fluid" />
      <h1 className="display-3 fst-italic mb-2">{slugName}</h1>
      <h3 className="mb-4">
        {" "}
        Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt{" "}
      </h3>
      <h4 className="text-secondary"> Category: Something</h4>
      <h6>Month / Day</h6>
      
      <hr />
      <p>
        Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt
        Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt
        Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt
        Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt
        Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt Excerpt
      </p>
      <hr />
      <Link to="/">Back to Posts</Link>
    </div>
  );
};

export default BlogDetail;
