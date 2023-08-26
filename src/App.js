import ExpenseForm from "./components/Expenses/ExpenseForm";
import React, { useState } from "react";
import FilterExpense from "./components/Expenses/FilterExpense";
import ExpensesList from "./components/Expenses/ExpensesList";
import ExpensesChart from "./components/Expenses/ExpensesChart";

const App = (props) => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Delhi",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Delhi",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Delhi",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Delhi",
    },
  ];

  const [enteredExpenseDetails, setEnteredExpenseDetails] = useState([]);
  const [filteredYear, setFilteredYear] = useState("2021");
  const [isEditing,setIsEditing]=useState(false);

  const startEditingHandler = ()=>{
    setIsEditing(true);
  }

  const stopEditingHandler = ()=>{ 
    setIsEditing(false);
  }

  const expenseDataHandler = (enteredDetails) => {
    const details = {
      ...enteredDetails,
      id: Math.random().toString(),
    };
    setEnteredExpenseDetails((prevDetails) => [...prevDetails, details]); // Add new details to the array
    setIsEditing(false);
  };

  const filterFunction = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let dummy = [...expenses, ...enteredExpenseDetails];
  const filteredExpense = dummy.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <h2>Let's get started!</h2>
      {!isEditing&&<button onClick={startEditingHandler}>Add new Expense</button>}
      {isEditing&&<ExpenseForm onSave={expenseDataHandler} onCancel={stopEditingHandler}/>}
      <FilterExpense selected={filteredYear} onChangeFilter={filterFunction} />
      <ExpensesChart expenses={filteredExpense}></ExpensesChart>
      <ExpensesList items={filteredExpense}></ExpensesList>
    </div>
  );
};

export default App;
