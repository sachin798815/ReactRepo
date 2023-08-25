import React,{useState} from "react"; 
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title,setTitle]=useState(props.title);
  const [expense,setExpense]=useState(props.amount);

  const clickHandler = () => {
    setTitle('updated!');
    console.log(title);
  };

  const expenseHandler = ()=>{
    setExpense('100');
  }

  const deleter = (e)=>{
    e.target.parentNode.style.display = 'none';
  }


  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={title}
        amount={expense}
        location={props.location}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={expenseHandler}>Expns chng</button>
      <button
      onClick={deleter}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
