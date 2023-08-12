function ExpenseDetails(props) {
  const title = props.title;
  const amount = props.amount;
  const location = props.location;

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div>Location - {location}</div>
      <div className="expense-item__price">${amount}</div>
    </div>
  );
}

export default ExpenseDetails;
