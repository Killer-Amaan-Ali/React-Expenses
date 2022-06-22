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
				{props.items.map((itemed, key) => (
					<ExpenseItem
						key={key}
						title={itemed.title}
						subTitle={itemed.subTitle}
						amount={itemed.amount}
						date={itemed.date}
					/>
				))}
			</Card>
		</>
	)
}

export default Expenses
