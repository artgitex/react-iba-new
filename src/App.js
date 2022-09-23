import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPage from "./pages/AuthPage";
import SettingsPage from "./pages/SettingsPage";
import DetailsPage from "./pages/DetailsPage";
import "./App.css";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          {isLoggedIn && <HomePage />}
          {!isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/home/:cardId">
          <DetailsPage />
        </Route>
        <Route path="/auth" exact>
          <AuthPage />
        </Route>
        {isLoggedIn && (
          <Route path="/settings" exact>
            <SettingsPage />
          </Route>
        )}
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
