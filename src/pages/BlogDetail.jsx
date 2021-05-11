import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { slugName } = useParams();
  return (
    <div className="container">
      <h1 className="fst-italic">{slugName}</h1>
    </div>
  );
};

export default BlogDetail;
