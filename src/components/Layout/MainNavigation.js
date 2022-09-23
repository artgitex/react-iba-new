import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADMIN_ROLE, USER_ROLE } from "../../constants/global";
import { authActions } from "../../store/auth-slice";
import { uiActions } from "../../store/ui_slice";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const cardsQuantity = useSelector((state) => state.card.totalQuantity);
  const userRole = useSelector((state) => state.auth.role);
  const isInSettings = useSelector((state) => state.ui.isInSettings);
  const isInDetails = useSelector((state) => state.ui.isInDetails);

  const reset = () => {
    dispatch(uiActions.setIsInSetting(false));
    dispatch(uiActions.setIsInDetails(false));
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
    reset();
  };

  const settingsHandler = () => {
    dispatch(uiActions.setIsInSetting(true));
  };

  const homeHandler = () => {
    reset();
  };

  const renderLogo = () => (
    <div className={classes.logocontainer}>
      <div>
        <img
          className={classes.img}
          alt=""
          src={require("../../assets/img/pikachu.png")}
        />
      </div>
      <div>
        <nav className={classes.nav}>
          <ul>
            {(userRole === ADMIN_ROLE && (isInSettings || isInDetails)) ||
            (userRole === USER_ROLE && isInDetails) ? (
              <li>
                <NavLink to="/home" onClick={homeHandler}>
                  Home
                </NavLink>
              </li>
            ) : null}
            {userRole === ADMIN_ROLE && !isInSettings ? (
              <li>
                <NavLink to="/settings" onClick={settingsHandler}>
                  Settings
                </NavLink>
              </li>
            ) : null}
            <li>
              <NavLink to="/auth" onClick={logoutHandler}>
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );  

  const renderTitle = () => (
    <div className={classes.title}>WORLD OF POKEMONS</div>
  );

  const renderCardCountButton = () => (
    <div className={classes.welcome}>
      <span>Welcome, astsepaniuk@gmail.com</span>
      <button className={classes.button}>
        <span>My Cards</span>
        <span className={classes.badge}>{cardsQuantity}</span>
      </button>
    </div>
  );

  return (
    <header className={classes.header}>
      {renderLogo()}
      {renderTitle()}
      {renderCardCountButton()}
    </header>
  );
};

export default MainNavigation;
