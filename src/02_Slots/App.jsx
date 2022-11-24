import React, { Component } from 'react'
import Sub from './Sub'

const TITLE = {
	LEFT: 'left',
	CENTER: 'center',
	RIGHT: 'right',
}

export default class App extends Component {
	renderSlot(res) {
		let el = null

		switch (res) {
			case TITLE.LEFT:
				el = <button>{res}</button>
				break
			case TITLE.CENTER:
				el = <h3>{res}</h3>
				break
			case TITLE.RIGHT:
				el = <i>{res}</i>
				break
			default:
				break
		}
		return el
	}

	render() {
		return (
			<div>
				{/* 子组件 */}
				<Sub renderSlot={(data) => this.renderSlot(data)}></Sub>
			</div>
		)
	}
}
