import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDateItem from "./ExpenseDateItem";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const buttonClicked = () => {
    setTitle("James");
  };

  return (
    <Card className="expense-item">
      <ExpenseDateItem date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}c</div>
      </div>
      <button onClick={buttonClicked}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
