import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('')
	const [enteredAmount, setEnteredAmount] = useState('')
	const [enteredDate, setEnteredDate] = useState('')

	const titleChangeHandler = event => {
		setEnteredTitle(event.target.value)
		// console.log(event.target.value)
	}
	const amountChangeHandler = event => {
		setEnteredAmount(event.target.value)
		// console.log(event.target.value)
	}
	const dateChangeHandler = event => {
		setEnteredDate(event.target.value)
	}

	const productDropHandler = event => {
		const selectedProduct = props.products.find(e => e.value === event.target.value)
		setEnteredTitle(selectedProduct?.name || '')
		setEnteredAmount(selectedProduct?.price || '')
	}

	const submitHandler = event => {
		event.preventDefault()

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		}
		// console.log(expenseData)
		props.onSaveExpenseData(expenseData)
		setEnteredTitle('')
		setEnteredAmount('')
		setEnteredDate('')
	}
	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={enteredTitle}
						onChange={titleChangeHandler}
						required={true}
					/>
					<select onChange={productDropHandler}>
						<option value=''>Select</option>
						{props?.products.map((d, i) => {
							return <option key={i} value={d?.value}>{d?.name}</option>
						})}
					</select>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={enteredAmount}
						onChange={amountChangeHandler}
						required={true}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						value={enteredDate}
						onChange={dateChangeHandler}
						// placeholder="YYYY-MM-DD"
						// pattern="\d{4}-\d{2}-\d{2}"
						required={true}
						min='2020-01-01'
						max='2030-12-31'
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='button' onClick={props.onCancel}>
					Cancel
				</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm
