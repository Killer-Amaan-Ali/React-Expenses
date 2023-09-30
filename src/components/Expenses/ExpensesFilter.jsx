import React from 'react'
import './ExpensesFilter.css'


const ExpensesFilter = (props) => {
	const filter = props.filter
	const dropdownChangeHandler = (event) => {
		props.onChangeFilter(event.target.value)
	}
	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by {props.mode}</label>
				<select onChange={dropdownChangeHandler} value={props.selected}>
					{filter.map((value, key) => {
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
