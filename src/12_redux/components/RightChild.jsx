import React, { PureComponent } from 'react'
import store from '../store'
import { UPDATE_COUNTER } from '../store/actionCreators'

export class RightChild extends PureComponent {
	constructor() {
		super()

		this.state = {
			counter: store.getState().counter,
		}
	}

	componentDidMount() {
		store.subscribe(() => {
			this.setState({
				counter: store.getState().counter,
			})
		})
	}

	render() {
		const { counter } = this.state

		return <div>right child 从redux拿到的数据 {counter}</div>
	}
}

export default RightChild
