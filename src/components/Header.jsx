const Header = ({ header }) => {
  return (
    <div className="container">
      <h1 className="display-4 fst-italic">{header}</h1>
      <hr />
    </div>
  );
};

export default Header;
