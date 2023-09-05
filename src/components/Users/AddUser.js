import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import { useState,useRef } from "react";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredUserAge=ageInputRef.current.value;
    const enteredCollegename=collegeInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredCollegename.trim().length===0) {
      setError({
        title: "Invalid input",
        message: "Please fill all fields",
      });
      return;
    } else if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Enter a valid number greater than 0.",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge,enteredCollegename);
    nameInputRef.current.value='';
    ageInputRef.current.value='';
    collegeInputRef.current.value='';
  };

  const errorHandler = (e) => {
    setError(undefined);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card classCustom={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age in years</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <label htmlFor="collegename">College name</label>
          <input
            type="text"
            id="collegename"
            ref={collegeInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
