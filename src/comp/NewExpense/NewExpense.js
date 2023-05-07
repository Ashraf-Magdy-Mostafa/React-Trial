import React from "react";
import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = (props) => {
  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
    console.log(props.onAddExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitFunction={expenseDataHandler} />
    </div>
  );
};
