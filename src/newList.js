import { Card } from "./comp/card";
import Expences from "./comp/expnces.js";

export function List(props) {
  console.log(props.onlist);

  return (
    <Card>
      {props.onlist.map((expense) => (
        <Expences
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
