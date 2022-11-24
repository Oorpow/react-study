import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Sub.css'

const boxStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}

export default class Sub extends Component {
	constructor() {
		super()

		this.state = {
			navList: ['left', 'center', 'right'],
		}
	}

	render() {
		const { renderSlot } = this.props
        const { navList } = this.state

		return (
			<div style={boxStyle}>
                {
                    navList.map((item, index) => {
                        return <div className={`${item}`} key={index}>{renderSlot(item)}</div>
                    })
                }
			</div>
		)
	}
}

Sub.propTypes = {
	renderSlot: PropTypes.func,
}
