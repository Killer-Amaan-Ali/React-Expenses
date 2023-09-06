import React from 'react'

import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
	const years = props.years
	const dropdownChangeHandler = (event) => {
		// console.log(event.target.value)
		props.onChangeFilter(event.target.value)
	}
	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select onChange={dropdownChangeHandler} value={props.selected}>
					{years.map((value, key) => {
						return (
							<option key={key} value={value}>
								{value}
							</option>
						)
					})}
				</select>
			</div>
		</div>
	)
}

export default ExpensesFilter
