import { Fragment } from "react";
import { useSelector } from "react-redux";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import SubNavigation from "./SubNavigation";

const Layout = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isInSettings = useSelector((state) => state.ui.isInSettings);
  const isInDetails = useSelector((state) => state.ui.isInDetails);

  return (
    <Fragment>
      {isLoggedIn && <MainNavigation />}
      {isLoggedIn && !isInSettings && !isInDetails && <SubNavigation />}
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
