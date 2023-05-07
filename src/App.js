import { List } from "./newList";
import { useState } from "react";
import { NewExpense } from "./comp/NewExpense/NewExpense";
import Expences from "./comp/expnces";
import { Card } from "./comp/card";
export const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(),
  },
];
function App() {
  // const newArr = () => {};
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler} />
      <h2>Let's get star2ted!</h2>

      <List onlist={expenses} />
    </Card>
  );
}

export default App;
