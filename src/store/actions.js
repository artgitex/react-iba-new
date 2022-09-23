import { cardActions } from "./card-slice";

export const fetchPokemonsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      const cardsList = data.slice(0, 15).map((card) => ({
        id: card.Number,
        headerText: card.Name,
        bodyText: card.About,
        source: "remote",
      }));

      return cardsList;
    };

    try {
      const cardData = await fetchData();

      dispatch(
        cardActions.fillCardList({
          items: cardData || [],
        })
      );
    } catch (error) {
      //some error handling
    }
  };
};
