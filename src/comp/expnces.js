import { ExpenseDate } from "./ExpenseDate";
import { Card } from "./card";
import "./ExpenseItem.css";
import { useState } from "react";

function Expences(props) {
  const [title, setTitle] = useState(props.title);
  const ClickHandler = (event) => {
    setTitle("changed");
    console.log("changed", title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={ClickHandler}>change title</button>
    </Card>
  );
}
export default Expences;
