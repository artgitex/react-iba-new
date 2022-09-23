import React, { Fragment } from "react";
import classes from "./Body.module.css";

const Body = (props) => {
  const { isEdit, bodyText, onBodyEdit } = props;

  const renderBody = () => {
    let body = null;

    if (!isEdit) {
      body = <div className={classes.bodyshow}>{bodyText}</div>;
    } else {
      body = (
        <textarea
          className={classes.bodyedit}
          defaultValue={bodyText}
          onChange={onBodyEdit}
        />
      );
    }

    return body;
  };

  return <Fragment>{renderBody()}</Fragment>;
};

export default Body;
