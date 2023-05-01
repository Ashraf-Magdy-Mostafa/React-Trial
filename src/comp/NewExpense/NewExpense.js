import React from "react";
import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = () => {
  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitFunction={expenseDataHandler} />
    </div>
  );
};