import React, { useState,useReducer,useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if(action.type==='USER_INPUT'){
  return { value: action.val, isValid: action.val.includes('@') };
  }
  if(action.type==='INPUT_BLUR'){
    return { value: state.value, isValid: state.value.includes('@') };
    }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if(action.type==='USER_INPUT'){
  return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if(action.type==='INPUT_BLUR'){
    return { value: state.value, isValid: state.value.trim().length > 6 };
    }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [enteredCollege, setEnteredCollege] = useState("");
  const [collegeIsValid, setCollegeIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const {isValid:emailIsValid}=emailState;
  const {isValid:passwordIsValid}=passwordState;

  useEffect(() => {
    setFormIsValid(
      emailIsValid && passwordIsValid && enteredCollege.trim().length>0
    );
  }, [emailIsValid, passwordIsValid, enteredCollege]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT',val:event.target.value});

    setFormIsValid(
      event.target.value.includes("@") &&
        passwordState.isValid &&
        enteredCollege.trim().length > 0
    )
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_INPUT',val:event.target.value});
    
    setFormIsValid(
      emailState.isValid &&
        event.target.value.trim().length > 6 &&
        enteredCollege.trim().length > 0
    )
  };

  const collegeChangeHandler = (event) => {
    setEnteredCollege(event.target.value);
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'INPUT_BLUR',})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR',})
  };

  const validateCollegeHandler = () => {
    setCollegeIsValid(enteredCollege.trim().length > 0);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            collegeIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">College</label>
          <input
            type="text"
            id="college"
            value={enteredCollege}
            onChange={collegeChangeHandler}
            onBlur={validateCollegeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
