import { NewExpense } from "./comp/NewExpense/NewExpense";
import Expences from "./comp/expnces";
const DUMMY_EXPENSES = [
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
  return (
    <div>
      <NewExpense />
      <h2>Let's get star2ted!</h2>
      <Expences
        title={DUMMY_EXPENSES[0].title}
        name={DUMMY_EXPENSES[0].id}
        date={DUMMY_EXPENSES[0].date}
      ></Expences>
      <Expences
        title={DUMMY_EXPENSES[1].title}
        name={DUMMY_EXPENSES[1].id}
        date={DUMMY_EXPENSES[1].date}
      ></Expences>
      <Expences
        title={DUMMY_EXPENSES[2].title}
        name={DUMMY_EXPENSES[2].id}
        date={DUMMY_EXPENSES[2].date}
      ></Expences>
    </div>
  );
}

export default App;
