import React, { Component } from 'react'

export default class App extends Component {
	constructor() {
        super()

        this.state = {
            counter: 0
        }
    }

    changeCount() {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        // this.setState({
        //     counter: this.state.counter + 1
        // })

        this.setState((state) => {
            return {
                counter: state.counter + 1
            }
        })
        this.setState((state) => {
            console.log(this.state)
            return {
                counter: state.counter + 1
            }
        })
    }

	render() {
        const { counter } = this.state

		return (
			<div>
				<button onClick={e => this.changeCount()}>+</button>
				<span>counter: {counter}</span>
			</div>
		)
	}
}
