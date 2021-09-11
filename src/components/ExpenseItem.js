import "./ExpenseItem.css";
import ExpenseDateItem from './ExpenseDateItem';

const ExpenseItem = (props) => {
  
  return (
    <div className="expense-item">
      <ExpenseDateItem date = {props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}c</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
