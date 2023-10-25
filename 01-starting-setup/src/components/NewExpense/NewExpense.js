import React from 'react';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveNewExpenseHandler = (newExpense) => {
        let newExpenseWithId = {
            ...newExpense,
            id: Math.random().toString()
        }
        props.onAddNewExpense(newExpenseWithId);
    }

    return(
        <div className="new-expense">
            <NewExpenseForm onSaveNewExpense={saveNewExpenseHandler} />
        </div>
        
    );
};

export default NewExpense;