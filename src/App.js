import React from 'react'
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'

const App = () => {
	const expenses = [
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
			date: new Date(2017, 5, 14),
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
			date: new Date(2021, 5, 12),
		},
	]

	// return React.createElement(
	//   'div',
	//   {},
	//   React.createElement('h2', {}, "Let's get started!"),
	//   React.createElement(Expenses, { items: expenses })
	// );
	const addExpenseHandler = (expense) => {
		console.log(expense)
	}
	return (
		<div>
			<NewExpense onAddexpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	)
}

export default App
