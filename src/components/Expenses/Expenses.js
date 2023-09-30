import React, { useState } from 'react'

import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
const Expenses = props => {
	const [filteredUnit, setFilteredUnit] = useState(props.mode === 'month' ? props.filter[new Date().getMonth() + 1] : 'All')

	const filterChangeHandler = (selectedYear) => {
		setFilteredUnit(selectedYear)
	}
	const filteredExpenses = props.items.filter((expense) => {
		if (filteredUnit === 'All') {
			return filteredUnit
		} else {
			return props.mode === 'month'
				? props.filter[expense.date.getMonth() + 1] === filteredUnit
				: expense.date.getFullYear().toString() === filteredUnit
		}
	})

	return (
		<Card className='expenses'>
			<ExpensesFilter
				filter={props.filter}
				onChangeFilter={filterChangeHandler}
				selected={filteredUnit}
				mode={props.mode}
			/>
			<ExpensesChart mode={props.mode} expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	)
}

export default Expenses
