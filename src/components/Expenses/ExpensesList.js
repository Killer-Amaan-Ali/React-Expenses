import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'
import './ExpenseItem.css'
import Card from '../UI/Card'
const ExpensesList = (props) => {
	// if (props.items.length === 0) {
	// 	return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
	// }
	// num = props.items.map((expense) => {
	// 	return (num += expense.amount)
	// })

	// for (let i = 0; i < props.items.length; i++) {
	// 	console.log(props.items[i].amount)
	// 	num += props.items[i].amount
	// }
	let num = 0
	props.items.map((expense) => {
		num += expense.amount
		return num
	})

	return (
		<ul className='expenses-list'>
			{props?.items?.map((expense) => (
				<ExpenseItem
					key={expense?.id}
					title={expense?.title}
					subTitle={expense?.subTitle}
					amount={expense?.amount}
					date={expense?.date}
				/>
			))}
			{props.items.length === 0 ? (
				<h2 className='expenses-list__fallback'>No Expenses Found</h2>
			) : (
				<Card className='expense-item'>
					<div className='expense-item__description'>
						<h2>Total</h2>
						<div className='expense-item__price'>₹ {num}</div>
					</div>
				</Card>
			)}
		</ul>
	)
}

export default ExpensesList
