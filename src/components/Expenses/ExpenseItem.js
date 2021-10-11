import "./ExpenseItem.css";
import Card from '../UI/Card'
import ExpenseDateItem from './ExpenseDateItem';

const ExpenseItem = (props) => {
  
  return (
    <Card className="expense-item">
      <ExpenseDateItem date = {props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}c</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
