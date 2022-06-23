import React, { useState } from 'react'

import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('All')
	const filterChangeHandler = (selectedYear) => {
		// console.log(selectedYear)
		setFilteredYear(selectedYear)
	}
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	return (
		<Card className='expenses'>
			<ExpensesFilter
				onChangeFilter={filterChangeHandler}
				selected={filteredYear}
			/>
			<ExpensesList items={filteredExpenses} />
		</Card>
	)
}

export default Expenses
