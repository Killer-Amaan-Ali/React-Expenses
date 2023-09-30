import React, { useState } from 'react'
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'

let DUMMY = []

// DUMMY = [
// 	{
// 		id: 'e1',
// 		title: 'Toilet Paper',
// 		amount: 4.12,
// 		date: new Date(2020, 7, 14),
// 	},
// 	{
// 		id: 'e2',
// 		title: 'Sand Paper',
// 		subTitle: 'Grind Faper',
// 		amount: 10.12,
// 		date: new Date(2019, 5, 14),
// 	},
// 	{
// 		id: 'e3',
// 		title: 'Car Insurance',
// 		amount: 294.67,
// 		date: new Date(2021, 2, 28),
// 	},
// 	{
// 		id: 'e4',
// 		title: 'New Desk (Wooden)',
// 		amount: 450,
// 		date: new Date(2022, 5, 12),
// 	},
// ]
const products = [
	{
		value: 'chocopie',
		price: 12,
		name: 'Chocopie'
	},
	{
		value: 'chickenChineseBhel',
		price: 50,
		name: 'Chicken Chinese Bhel'
	},
	{
		value: 'dahiPuri',
		price: 30,
		name: 'Dahi Puri'
	},
	{
		value: 'saltedChips',
		price: 10,
		name: 'Salted Chips'
	}
]
DUMMY = (JSON.parse(localStorage.getItem('data')) || []).map(d => {
	return {
		...d,
		date: new Date(d?.date)
	}
})

localStorage.setItem('DUMMY', JSON.stringify(DUMMY))
const App = () => {
	const [expenses, setExpenses] = useState(DUMMY)
	const mode =
		'month'
		// 'year'
	const years = ['All', 2022, 2023]
	const months = [
		'All',
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	]

	const addExpenseHandler = expense => {
		setExpenses(previousExpenses => {
			localStorage.setItem(
				'data',
				JSON.stringify([expense, ...previousExpenses])
			)
			return [expense, ...previousExpenses]
		})
	}

	return (
		<div>
			<NewExpense
				products={products}
				onAddexpense={addExpenseHandler}
				arrayLength={expenses.length}
			/>
			<Expenses filter={mode === 'month' ? months : years} items={expenses} mode={mode} />
		</div>
	)
}

export default App
