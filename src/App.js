import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseTable from "./components/Expenses/ExpenseTable";

const INITIAL_EXPENSES = [
  { title: "Car Insurance", amount: 200.0, date: new Date(2021, 2, 20) },
  { title: "Health Insurance", amount: 150.0, date: new Date(2021, 9, 28) },
  { title: "House Insurance", amount: 3400.0, date: new Date(2021, 1, 28) },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpenses((previousExpenses) => {
      return [newExpense, ...previousExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseTable expenses={expenses} />
    </div>
  );
};

export default App;
