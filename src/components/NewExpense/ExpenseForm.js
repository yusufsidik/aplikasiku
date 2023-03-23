import { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(){
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  }
  
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  }
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    console.log(expenseData);
    emptyInput();
  }

  const emptyInput = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={enteredDate} min="2019-01-01" step="2023-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add expense</button>
      </div>
    </form>

  )
}