import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui_slice";
import classes from "./Settings.module.css";

const Settings = () => {  
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.ui.isViewOnly);

  const changeHandler = (event) => {
    dispatch(uiActions.setViewOnlySetting(event.target.checked));
  };

  return (
    <div className={classes.input}>
      <input
        type="checkbox"
        id="onlyView"
        name="onlyView"
        checked={checked}
        onChange={changeHandler}
      />
      <label className={classes.label} htmlFor="onlyView">
        view only
      </label>
    </div>
  );  
};

export default Settings;
