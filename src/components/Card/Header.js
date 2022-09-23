import React, { Fragment } from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  const { isEdit, headerText, onHeaderEdit } = props;

  const renderTitle = () => {
    let title = null;

    if (!isEdit) {
      title = <div className={classes.titleshow}>{headerText}</div>;
    } else {
      title = (
        <input
          className={classes.titleedit}
          maxLength="25"
          type="text"
          defaultValue={headerText}
          onChange={onHeaderEdit}
        />
      );
    }

    return title;
  };

  return <Fragment>{renderTitle()}</Fragment>;
};

export default Header;
