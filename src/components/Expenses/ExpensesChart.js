import React from 'react'

import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {
	const chartDataPoints = props.mode === 'month'
		? []
		: [
			{ label: 'Jan', value: 0 },
			{ label: 'Feb', value: 0 },
			{ label: 'Mar', value: 0 },
			{ label: 'Apr', value: 0 },
			{ label: 'May', value: 0 },
			{ label: 'Jun', value: 0 },
			{ label: 'Jul', value: 0 },
			{ label: 'Aug', value: 0 },
			{ label: 'Sep', value: 0 },
			{ label: 'Oct', value: 0 },
			{ label: 'Nov', value: 0 },
			{ label: 'Dec', value: 0 }
		]

	if (props.mode === 'month') {
		for (let i = 0; i <= 30; i++) {
			chartDataPoints[i] = {
				label: i + 1,
				value: 0
			}
		}
	}

	for (const expense of props.expenses) {
		const expenseMonth = props.mode === 'month'
			? expense.date.getDate() - 1
			: expense.date.getMonth()
		chartDataPoints[expenseMonth].value += expense.amount
	}

	return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart
