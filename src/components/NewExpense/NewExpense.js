import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = () => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		}
		console.log(
			'🚀 ~ file: NewExpense.js ~ line 9 ~ saveExpenseDataHandler ~ expenseData',
			expenseData
		)
	}
	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	)
}

export default NewExpense
