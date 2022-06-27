import React from 'react'

import './ChartBar.css'

const ChartBar = (props) => {
	let barFillHeightPer = '0%'
	let barFillHeight = '₹ 0'

	if (props.maxValue > 0) {
		barFillHeightPer = `${Math.round((props.value / props.maxValue) * 100)}%`
		barFillHeight = `₹ ${props.value}`
	}

	return (
		<div className='chart-bar'>
			<div title={barFillHeight} className='chart-bar__inner'>
				<div className='chart-bar__fill' style={{ height: barFillHeightPer }} />
			</div>
			<div className='chart-bar__label'>{props.label}</div>
		</div>
	)
}

export default ChartBar
