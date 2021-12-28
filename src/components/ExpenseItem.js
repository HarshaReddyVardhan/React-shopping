import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>27 Dec 2021</div>
      <div className="expense-item__description">
        <h2>Car Bike Insurance</h2>
        <div className="expense-item__price">$149.27</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
