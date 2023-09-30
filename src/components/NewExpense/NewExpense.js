import React, { useState } from 'react'
import './NewExpense.css'
import BudgetForm from './BudgetForm.js'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false)
	const [budgetEditing, setBudgetEditing] = useState(false)
	const [budget, setBudget] = useState(localStorage.getItem('budget') || 0)
	let arrayLength = props.arrayLength
	arrayLength = arrayLength + 1

	const saveExpenseDataHandler = data => {
		const expenseData = {
			...data,
			// id: Math.random().toString(),
			id: `e${arrayLength++}`,
		}
		// console.log(expenseData, 'expenseData')
		props.onAddexpense(expenseData)
		setIsEditing(false)
	}

	const saveBudgetHandler = data => {
		setBudget(data)
		localStorage.setItem('budget', data)
		setBudgetEditing(false)
	}

	const startEditingHandler = () => {
		setIsEditing(true)
	}

	const budgetHandler = () => {
		setBudgetEditing(true)
	}

	const stopEditingHandler = () => {
		setIsEditing(false)
	}

	const stopBudgetHandler = () => {
		setBudgetEditing(false)
	}

	return (
		<div className='new-expense'>
			<div className='new-expense-wrapper' style={{ width: isEditing ? '100%' : 'auto' }}>
				{(!budgetEditing && !isEditing) && (
					<button onClick={startEditingHandler}>Add New Expense</button>
				)}
				{isEditing && (
					<ExpenseForm
						products={props.products}
						onSaveExpenseData={saveExpenseDataHandler}
						onCancel={stopEditingHandler}
					/>
				)}
			</div>
			<div className='budget-wrapper' style={{ width: budgetEditing ? '100%' : 'auto' }}>
				{(!budgetEditing && !isEditing) && (
					<>
						<button onClick={budgetHandler}>Edit Budget</button>
						<span>{budget}</span>
					</>
				)}
				{budgetEditing && (
					<BudgetForm
						onSaveExpenseData={saveBudgetHandler}
						onCancel={stopBudgetHandler}
					/>
				)}
			</div>
			<button onClick={() => {
				localStorage.clear()
				window.location.reload()
			}}>Delete everything!</button>
		</div>
	)
}

export default NewExpense
