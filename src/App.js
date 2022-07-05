import React, { useState } from 'react'
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'

let DUMMY = []
console.log(
	"🚀 ~ file: App.js ~ line 8 ~ JSON.parse(localStorage.getItem('data'))",
	JSON.parse(localStorage.getItem('data'))
)
DUMMY =
	// JSON.parse(localStorage.getItem('data')) ||
	[
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
localStorage.setItem('DUMMY', JSON.stringify(DUMMY))
const App = () => {
	const [expenses, setExpenses] = useState(DUMMY)
	const addExpenseHandler = (expense) => {
		setExpenses((previousExpenses) => {
			localStorage.setItem(
				'data',
				JSON.stringify([expense, ...previousExpenses])
			)
			return [expense, ...previousExpenses]
		})
	}
	console.log('storage', JSON.parse(localStorage.getItem('data')))
	console.log('dummy', DUMMY)
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
