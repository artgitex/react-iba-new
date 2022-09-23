import { Fragment } from "react";
import classes from "./Pokemon.module.css";

const Pokemon = (props) => {
  const { isEdit } = props;

  return (
    <Fragment>
      {!isEdit && (
        <img          
          src={`https://fevgames.net/wp-content/uploads/pokemon/${props.pkmIndex}.png`}
          className={classes.pokemon}
          loading="lazy"
          alt=""
        />
      )}
    </Fragment>
  );
};

export default Pokemon;
