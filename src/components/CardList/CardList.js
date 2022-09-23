import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonsData } from "../../store/actions";
import Card from "../Card/Card";

const CardList = () => {  
  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.card.items);  

  useEffect(() => {
    if(!cardList[0]) {
      dispatch(fetchPokemonsData());
    }
  }, [dispatch, cardList]);

  const cards = cardList.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      headerText={card.headerText}
      bodyText={card.bodyText}
      source={card.source}
    />
  ));

  return <Fragment>{cards}</Fragment>;
};

export default CardList;
