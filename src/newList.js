import { Card } from "./comp/card";
import Expences from "./comp/expnces";
import { DUMMY_EXPENSES } from "./App";
export function List(props) {
  console.log(props.onlist);

  return (
    <Card>
      {props.onlist.map((expense) => (
        <Expences
          title={props.onlist.title}
          name={expense.id}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
/*

props.onlist.map((expense) => {
        <Expences
          title={props.onlist.title}
          name={expense.id}
          date={expense.date}
        />;

        */
