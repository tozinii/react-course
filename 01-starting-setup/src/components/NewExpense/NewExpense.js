import React, { useState } from "react";
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [openNewExpenseForm, setOpenNewExpenseForm] = useState(false);

    const saveNewExpenseHandler = (newExpense) => {
        let newExpenseWithId = {
            ...newExpense,
            id: Math.random().toString()
        }
        props.onAddNewExpense(newExpenseWithId);
    }

    const handleOpenNewExpenseForm = () => {
        setOpenNewExpenseForm(true);
    }

    const handleCloseNewExpenseForm = () => {
        setOpenNewExpenseForm(false);
    }

    return(
        <div className="new-expense">
            {!openNewExpenseForm ? <button onClick={handleOpenNewExpenseForm}>Add new expense</button> : ''}
            {openNewExpenseForm ? <NewExpenseForm onSaveNewExpense={saveNewExpenseHandler} setCloseForm={handleCloseNewExpenseForm} /> : '' }
        </div>
        
    );
};

export default NewExpense;