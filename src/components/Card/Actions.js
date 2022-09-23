import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cardActions } from "../../store/card-slice";
import { uiActions } from "../../store/ui_slice";

import { MdEdit, MdSave, MdCancel, MdDetails } from "react-icons/md";
import classes from "./Actions.module.css";

const Actions = (props) => {
  const dispatch = useDispatch();
  const isViewOnly = useSelector((state) => state.ui.isViewOnly);
  const { id, isEdit, onChangeMode, onRefresh, tempData } = props;

  const cbCheckHandler = (event) => {
    if (event.target.checked) {
      dispatch(cardActions.addItemToRemoveList(id));
    } else {
      dispatch(cardActions.removeItemFromRemoveList(id));
    }
  };

  const detailsHandler = () => {
    dispatch(uiActions.setIsInDetails(true));
  };

  const saveChangesHandler = () => {
    dispatch(cardActions.updateExistingItem({ id, tempData }));
    onRefresh();
  };

  const cancelEventHandler = () => {
    onRefresh();
  };

  const renderActions = () => {
    return (
      <Fragment>
        {!isViewOnly && (
          <div>
            {!isEdit && (
              <div>
                <MdEdit className={classes.actions} onClick={onChangeMode} />
                <Link to={`/home/${props.id}`} className={classes.actions}>
                  <MdDetails onClick={detailsHandler} />
                </Link>
              </div>
            )}
            {isEdit && (
              <Fragment>
                <MdSave
                  className={classes.actions}
                  onClick={saveChangesHandler}
                />
                <MdCancel
                  className={classes.actions}
                  onClick={cancelEventHandler}
                />
              </Fragment>
            )}
          </div>
        )}
        <div>
          {!isEdit && <input type="checkbox" onChange={cbCheckHandler} />}
        </div>
      </Fragment>
    );
  };

  return <nav className={classes.nav}>{renderActions()}</nav>;
};

export default Actions;
