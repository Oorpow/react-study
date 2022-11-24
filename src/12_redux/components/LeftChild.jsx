import React, { PureComponent } from 'react'
import store from '../store'
import { UPDATE_COUNTER } from '../store/actionCreators'

export class LeftChild extends PureComponent {
    constructor() {
        super()

        this.state = {
            counter: store.getState().counter
        }
    }

	componentDidMount() {
        const unsubscribe = store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }

    changeCounter(num) {
        store.dispatch(UPDATE_COUNTER(num))
    }

	render() {
        const { counter } = this.state

		return (
			<div>
				<button onClick={e => this.changeCounter(3)}>3</button>
				<span>counter: {counter}</span>
			</div>
		)
	}
}

export default LeftChild
