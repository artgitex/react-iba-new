const NotFound = () => {
  return (
    <section className="help-layout">
      <h1>Page not found</h1>
      <img
        src={`https://fevgames.net/wp-content/uploads/pokemon/025.png`}
        className="pokemon"
        loading="lazy"
        alt=""
      />
      <span>404</span>
    </section>
  );
};

export default NotFound;
