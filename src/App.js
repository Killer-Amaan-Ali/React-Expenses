import React, { useState } from 'react'
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'

const DUMMY = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 4.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: 'e2',
		title: 'Sand Paper',
		subTitle: 'Grind Faper',
		amount: 10.12,
		date: new Date(2019, 5, 14),
	},
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2022, 5, 12),
	},
]
const App = () => {
	const [expenses, setExpenses] = useState(DUMMY)
	const addExpenseHandler = (expense) => {
		// console.log(expense)
		// localStorage.setItem()
		// localStorage.setItem(expense.id, [
		// 	`title: ${expense.title}`,
		// 	`amount: ${expense.amount}`,
		// 	`date: ${expense.date}`,
		// ])
		setExpenses((previousExpenses) => {
			return [expense, ...previousExpenses]
		})
	}
	console.log(localStorage)
	return (
		<div>
			<NewExpense
				onAddexpense={addExpenseHandler}
				arrayLength={expenses.length}
			/>
			<Expenses items={expenses} />
		</div>
	)
}

export default App
