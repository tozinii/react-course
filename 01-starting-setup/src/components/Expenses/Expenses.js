import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const expenses = props.expenses;

  const [expensesFilterYear, setExpensesFilterYear] = useState("2020");

  //Filtered expenses
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === expensesFilterYear
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

      <ExpensesList expenses={filteredExpenses} />

    </Card>
  );
};

export default Expenses;
