import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {

  const expenses = props.expenses;

  const [expensesFilterYear, setExpensesFilterYear] = useState("2020");
  
  //Filtered expenses
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.date.getFullYear().toString() === expensesFilterYear
  );

  const selectedExpensesFilterYearHandler = (selectedExpensesFilterYear) => {
    //Update year state
    setExpensesFilterYear(selectedExpensesFilterYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={expensesFilterYear}
        onChangeExpensesFilterYear={selectedExpensesFilterYearHandler}
        className="expenses-filter"
      />
      {filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
