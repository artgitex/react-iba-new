import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import useInput from "../../hooks/use-input";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(
    (value) =>
      new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
        value.trim().toLowerCase()
      ) !== false
  );

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(
    (value) =>
      new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})").test(
        value.trim().toLowerCase()
      ) !== false
  );

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      resetEmailInput();
      resetPasswordInput();

      dispatch(
        authActions.login({ email: enteredEmail, password: enteredPassword })
      );
      history.replace("/");
    }
  };

  return (
    <section className={classes.auth}>
      <form onSubmit={submitHandler}>
        <img
          src={`https://fevgames.net/wp-content/uploads/pokemon/025.png`}
          className={classes.pokemon}
          loading="lazy"
          alt=""
        />
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailInputHasError && (
            <p className={classes["error-text"]}>Please enter a valid email.</p>
          )}
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordInputHasError && (
            <p className={classes["error-text"]}>
              Please enter a valid password.
            </p>
          )}
        </div>
        <div className={classes.actions}>
          <button disabled={!formIsValid}>Login</button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
