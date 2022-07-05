import React, { useState } from 'react'

import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('All')
	const filterChangeHandler = (selectedYear) => {
		// console.log(selectedYear)
		setFilteredYear(selectedYear)
	}
	const filteredExpenses = props.items.filter((expense) => {
		if (filteredYear === 'All') {
			return filteredYear
		} else {
			return expense.date.getFullYear().toString() === filteredYear
		}
	})
	console.log(
		'🚀 ~ file: Expenses.js ~ line 15 ~ filteredExpenses ~ props.items',
		props.items
	)

	return (
		<Card className='expenses'>
			<ExpensesFilter
				onChangeFilter={filterChangeHandler}
				selected={filteredYear}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	)
}

export default Expenses
