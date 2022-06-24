import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false)
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
		setIsEditing(false)
	}

	const startEditingHandler = () => {
		setIsEditing(true)
	}
	const stopEditingHandler = () => {
		setIsEditing(false)
	}
	return (
		<div className='new-expense'>
			{!isEditing && (
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	)
}

export default NewExpense
