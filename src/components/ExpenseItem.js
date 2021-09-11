import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const month = props.date.toLocaleString('en-US', { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', { day: "2-digit" });

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}c</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
