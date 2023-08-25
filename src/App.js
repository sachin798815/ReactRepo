import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import React,{useState} from "react";

const App = (props) => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Delhi",
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12), location:"Delhi"},
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

  const expenseDataHandler = (enteredDetails) => {
    const details = {
      ...enteredDetails,
      id: Math.random().toString(),
    };
    setEnteredExpenseDetails((prevDetails) => [...prevDetails, details]); // Add new details to the array
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseForm onSave={expenseDataHandler}></ExpenseForm>
      {enteredExpenseDetails.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.expense}
          date={e.date}
          location={e.location}
        />
      ))}
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;
