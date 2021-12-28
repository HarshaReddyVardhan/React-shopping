import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 12,28);
  const expenseName = "Car Insurance";
  const expenseAmount= 267.88; 
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseName}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
