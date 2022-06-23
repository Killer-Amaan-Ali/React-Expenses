import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
	let arrayLength = props.arrayLength
	arrayLength = arrayLength + 1
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			// id: Math.random().toString(),
			id: `e${arrayLength++}`,
		}
		// console.log(expenseData, 'expenseData')
		props.onAddexpense(expenseData)
	}
	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	)
}

export default NewExpense
