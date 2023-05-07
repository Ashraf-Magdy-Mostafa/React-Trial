import { useState } from "react";
import "./ExpenseForm.css";
export const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const handle = (event) => {
    event.preventDefault();
    //console.log("Submitted");
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSubmitFunction(expenseData);
    //console.log(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    //console.log(expenseData.date.toLocaleString("en-us", { month: "short" }));
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amoutChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  return (
    <form onSubmit={handle}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amoutChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2023-05-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
