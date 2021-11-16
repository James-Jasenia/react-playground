import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
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
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseTable;
