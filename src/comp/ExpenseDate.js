export function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-us", { month: "short" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  return (
    <div>
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </div>
  );
}
