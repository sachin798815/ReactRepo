import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2>No expenses found</h2>;
  }
  return (
    <div>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
      {props.items.length===1&&<p>Only single Expense here. Please add more...</p>}
    </div>
  );
};

export default ExpensesList;
