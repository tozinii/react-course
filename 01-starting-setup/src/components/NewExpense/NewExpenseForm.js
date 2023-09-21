import React, { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {

    const [newExpenseTitle, setNewExpenseTitle] = useState('');
    const [newExpenseAmount, setNewExpenseAmount] = useState();
    const [newExpenseDate, setNewExpenseDate] = useState();

    /* USING ONE STATE INSTEAD OF ONE PER VARIABLE EXAMPLE: Prefer using one per variable, its easier*/
    /*const [userInput, setUserInput] = useState({
        newExpenseTitle: '',
        newExpenseAmount: '',
        newExpenseDate: ''
    });*/

    const titleChangeHandler = (e) => {
        setNewExpenseTitle(e.target.value);

        /*setUserInput({
            ...userInput,
            newExpenseTitle: e.target.value            
        });*/
    };
    const amountChangeHandler = (e) => {
        setNewExpenseAmount(e.target.value);
    };
    const dateChangeHandler = (e) => {
        setNewExpenseDate(e.target.value);
    };

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="sumbit">Add new expense</button>
            </div>
        </form>
    );
};

export default NewExpenseForm;