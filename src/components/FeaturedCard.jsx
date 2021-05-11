import { Link } from "react-router-dom"

const FeaturedCard = ( {title, excerpt, slug} ) => {
  return (
    <div className="p-4 p-md-5 mb-4 text-white rounded bg-secondary" id="featured-div">
      <div className="col px-0">
        {/* <h2 style={{ textAlign: "center" }}>featured</h2> */}
        <h1 className="display-4 fst-italic">{title}</h1>
        <p className="lead my-3">{excerpt}</p>
        <p className="lead mb-0">
          <Link className="text-white fw-bold" to={`/blog/${slug}`}>
            Continue reading....
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
