import { useState } from "react";

const ExpenseForm = () => {
  const[enteredTitle,setTitle]=useState('');
  const[enteredExpense ,setExpense] = useState ('');
  const[enteredDate,setDate]=useState('');
  const[enteredLocation,setLocation]=useState('');

//   const [userInput, setUserInput] = useState({
//     title: "",
//     expense: "",
//     date: "",
//     location: "",
//   });

  const titleHandler = (e) => {
    setTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value,
    // });
    // setUserInput((previousState)=>{
    //     return {
    //         ...previousState,title :  e.target.value
    //     }
    // })
  };
  const expenseHandler = (e) => {
    setExpense(e.target.value);
    // setUserInput({ ...userInput, expense: e.target.value });
    
  };
  const locationHandler = (e) => {
    setLocation(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   location: e.target.value,
    // });
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
    // setUserInput({ ...userInput, date: e.target.value });
  };

  return (
    <div>
      <form action="">
        <label htmlFor="dateInput">Expense date</label>
        <input
          type="date"
          id="dateInput"
          name="dateinput"
          onChange={dateHandler}
        />
        <label htmlFor="titleInput">Expense title</label>
        <input
          type="text"
          id="titleInput"
          name="titleInput"
          onChange={titleHandler}
        />
        <label htmlFor="expenseInput">Expense amount</label>
        <input
          type="number"
          id="expenseInput"
          name="expenseInput"
          onChange={expenseHandler}
        />
        <label htmlFor="locationInput">Expense location</label>
        <input
          type="text"
          id="locationInput"
          name="locationInput"
          onChange={locationHandler}
        />
        <input type="submit" onClick={() => {}} value="add" />
      </form>
    </div>
  );
};

export default ExpenseForm;
