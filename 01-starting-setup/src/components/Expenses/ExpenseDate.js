import './ExpenseDate.css';

const ExpenseDate = (props) => {
  return (
    <div className="expense-date">
      <div className="expense-date__month">{props.date.toLocaleString("es-ES", { month: "long" })}</div>
      <div className="expense-date__year">{props.date.getFullYear()}</div>
      <div className="expense-date__day">{props.date.toLocaleString("es-ES", { day: "2-digit" })}</div>
    </div>
  );
}

export default ExpenseDate;