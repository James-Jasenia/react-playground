import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expenseContent = <p>No expense found.</p>;

  if (props.items.length > 0) {
    expenseContent = props.items.map((filteredExpense) => (
      <ExpenseItem
        key={filteredExpense.id}
        title={filteredExpense.title}
        amount={filteredExpense.amount}
        date={filteredExpense.date}
      />
    ));
  }

  return expenseContent;
};

export default ExpensesList;
