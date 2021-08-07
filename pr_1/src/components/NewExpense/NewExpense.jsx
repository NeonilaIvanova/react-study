import React, { useState } from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAddingNewExpense, setIsAddingNewExpense] = useState(false);

  const addingNewExpenseHandler = () => {
    setIsAddingNewExpense(true);
  };

  const cancelAddingNewExpenseHandler = () => {
    setIsAddingNewExpense(false);
  };

  const saveNewExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsAddingNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!isAddingNewExpense && (
        <button onClick={addingNewExpenseHandler}>Add New Expense</button>
      )}
      {isAddingNewExpense && (
        <ExpenseForm
          onSaveNewExpense={saveNewExpenseHandler}
          onCancelNewExpense={cancelAddingNewExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
