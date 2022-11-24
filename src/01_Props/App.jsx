import React, { Component } from 'react'
import Sub from './Sub'

export default class App extends Component {
	constructor() {
		super()

		this.state = {
			msg: '',
		}
	}

	getSubMsg(msg) {
		this.setState({
			msg,
		})
	}

	render() {
		const { msg } = this.state

		return (
			<div>
                {/*  */}
				<Sub title="test title" getSubMsg={(data) => this.getSubMsg(data)} />
				<span>msg from sub: {msg}</span>
			</div>
		)
	}
}
