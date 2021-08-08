import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "../Expenses/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

import "../Expenses/Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeYearFilter={yearFilterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
