import React from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expenses = (props) => {
	return (
		<>
			<Card className='expenses'>
				<ExpensesFilter />
				{props.items.map((itemed) => (
					<ExpenseItem
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
