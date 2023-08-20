import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("clicked");
  };

  const deleter = (e)=>{
    e.target.parentNode.style.display = 'none';
  }


  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button
      onClick={deleter}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
