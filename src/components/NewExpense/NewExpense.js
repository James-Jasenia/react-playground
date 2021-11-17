import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormVisiable, setFormVisibility] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
      tilly: "tilly",
    };

    props.onAddExpense(expenseData);
  };

  const cancelHandler = (props) => {
    setFormVisibility(props.value);
  };

  const addExpenseHandler = () => {
    setFormVisibility(true);
  };

  let formContent = <button type="submit">Add Expense</button>;

  return (
    <div className="new-expense">
      {isFormVisiable ? (
        <ExpenseForm
          onCancel={cancelHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={addExpenseHandler}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
