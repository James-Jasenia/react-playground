import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

// You can use an object in useSate, however, you will need to update every property in the object every single time regardless if the invidual propety changes or not.
//   const [userInput, setUserInput] = useState({
//       title: '',
//       amount: '',
//       date: ''
//   })

// const titleChangeHandler = (event) => {
//     setTitle({
//         ...userInput,
//         title: event.target.value
//     });
//   };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangedHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangedHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
