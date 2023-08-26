import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredExpense, setExpense] = useState("");
  const [enteredDate, setDate] = useState("");
  const [enteredLocation, setLocation] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const expenseHandler = (e) => {
    setExpense(e.target.value);
  };
  const locationHandler = (e) => {
    setLocation(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const submitFunction = (e) => {
    e.preventDefault();
    const obj = {
      title: enteredTitle,
      expense: enteredExpense,
      location: enteredLocation,
      date: new Date(enteredDate),
    };
    props.onSave(obj);
    setTitle("");
    setDate("");
    setExpense("");
    setLocation("");
  };


  return (
    <div>
      <form onSubmit={submitFunction}>
        <label htmlFor="dateInput">Expense date</label>
        <input
          type="date"
          id="dateInput"
          name="dateinput"
          value={enteredDate}
          onChange={dateHandler}
        />
        <label htmlFor="titleInput">Expense title</label>
        <input
          type="text"
          id="titleInput"
          name="titleInput"
          value={enteredTitle}
          onChange={titleHandler}
        />
        <label htmlFor="expenseInput">Expense amount</label>
        <input
          type="number"
          id="expenseInput"
          name="expenseInput"
          value={enteredExpense}
          onChange={expenseHandler}
        />
        <label htmlFor="locationInput">Expense location</label>
        <input
          type="text"
          id="locationInput"
          name="locationInput"
          value={enteredLocation}
          onChange={locationHandler}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
