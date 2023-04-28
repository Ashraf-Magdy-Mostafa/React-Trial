import { ExpenseDate } from "./ExpenseDate";
import { Card } from "./card";
import "./ExpenseItem.css";
function Expences(props) {
  const expenseDate = new Date();
  const expenseTitle = "car insurance";
  const expenseAmount = 294.67;
  const ClickHandler = (event) => {
    console.log("clicked", event);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
      <button onClick={ClickHandler}>change title</button>
    </Card>
  );
}
export default Expences;
