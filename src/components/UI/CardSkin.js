import React from "react";
import classes from "./CardSkin.module.css";

const FormContainer = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.box}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
};
export default FormContainer;
