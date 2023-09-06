import React, { useState } from 'react'
import './BudgetForm.css'

const BudgetForm = props => {
  const [enteredAmount, setEnteredAmount] = useState(3000)

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    console.log(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = +enteredAmount
    props.onSaveExpenseData(expenseData)
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChangeHandler}
            type='number'
            min='1'
            step='1'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Update Budget</button>
      </div>
    </form>
  )
}

export default BudgetForm
