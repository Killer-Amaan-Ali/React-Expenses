import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2022')
	const filterChangeHandler = (selectedYear) => {
		// console.log(selectedYear)
		setFilteredYear(selectedYear)
	}
	return (
		<>
			<Card className='expenses'>
				<ExpensesFilter
					onChangeFilter={filterChangeHandler}
					selected={filteredYear}
				/>
				{props.items.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						subTitle={expense.subTitle}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</>
	)
}

export default Expenses
