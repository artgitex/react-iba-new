import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardActions } from "../../store/card-slice";
import RemoveModal from "../UI/RemoveModal";
import classes from "./SubNavigation.module.css";

const SubNavigation = () => {
  const dispatch = useDispatch();
  const [warning, setWarning] = useState(null);
  const itemsToRemove = useSelector((state) => state.card.itemsToRemove);

  const removeItemsHandler = () => {
    if (itemsToRemove.length === 0) {
      setWarning({
        title: "Nothing to remove",
        message: "Please select at least one Pokemon card",
      });
    } else {
      dispatch(cardActions.removeItemsFromCardList());
    }
  };

  const warningHandler = () => {
    setWarning(null)
  }

  const addItemHandler = () => {
    dispatch(cardActions.addItemToCardList());    
  }

  return (
    <section className={classes.section}>
      {warning && (
        <RemoveModal
          title={warning.title}
          message={warning.message}
          onConfirm={warningHandler}
        />
      )}
      <div className={classes.buttons}>
        <button onClick={addItemHandler}>New Card</button>
        <button onClick={removeItemsHandler}>Remove Card</button>
      </div>
    </section>
  );
};

export default SubNavigation;
