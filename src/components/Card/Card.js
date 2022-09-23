import React from "react";
import CardSkin from "../UI/CardSkin";
import Actions from "./Actions";
import Header from "./Header";
import Body from "./Body";
import Pokemon from "./Pokemon";

import classes from "./Card.module.css";

const Card = (props) => {  
  const { id, headerText, bodyText, source } = props;
  const [isEdit, setIsEdit] = React.useState(false);
  const [tempCardData, setTempCardData] = React.useState({
    tempHeader: headerText,
    tempBody: bodyText,
  });

  const changeModeHandler = () => {
    return setIsEdit(!isEdit);
  };

  const headerChangeHandler = (event) => {
    setTempCardData((prevState) => {return { ...prevState, tempHeader: event.target.value }; });
  };

  const bodyChangeHandler = (event) => {
    setTempCardData((prevState) => {return { ...prevState, tempBody: event.target.value }; });
  };

  const refreshTempData = () => {
    setTempCardData((prevState) => {return { ...prevState, tempHeader: headerText, tempBody: bodyText }; });
    setIsEdit(!isEdit);
  }; 

  return (
    <CardSkin>
      <p className={classes.numpos}>{id}</p>
      <Actions
        isEdit={isEdit}
        id={id}
        tempData={tempCardData}
        onRefresh={refreshTempData}        
        onChangeMode={changeModeHandler}
      />
      <Header
        isEdit={isEdit}
        headerText={headerText}
        onHeaderEdit={headerChangeHandler}
      />
      <Body
        isEdit={isEdit}
        bodyText={bodyText}
        onBodyEdit={bodyChangeHandler}
      />
      {source === "remote" && <Pokemon isEdit={isEdit} pkmIndex={id} />}
    </CardSkin>
  );
};

export default Card;
