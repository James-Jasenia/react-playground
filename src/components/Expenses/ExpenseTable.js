import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./ExpenseTable.css";

const ExpenseTable = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const onChangeFilter = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) =>
    expense.date.getFullYear().toString().includes(selectedYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onFilterYear={onChangeFilter}
        />
        {filteredExpenses.length === 0 ? (
          <p>No expense found.</p>
        ) : (
          filteredExpenses.map((filteredExpense) => (
            <ExpenseItem
              key={filteredExpense.id}
              title={filteredExpense.title}
              amount={filteredExpense.amount}
              date={filteredExpense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default ExpenseTable;
