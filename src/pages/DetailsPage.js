import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const params = useParams();
  const { cardId } = params;

  return (
    <section className="help-layout">
      <h1>Some details about your favorite Pokemon</h1>
      <img
        src={`https://fevgames.net/wp-content/uploads/pokemon/${cardId}.png`}
        className="pokemon"
        loading="lazy"
        alt=""
      />
    </section>
  );
};

export default DetailsPage;
