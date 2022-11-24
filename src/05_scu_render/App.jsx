import React, { Component, PureComponent } from 'react'
import Sub from './Sub'

export default class App extends Component {
	constructor() {
        super()

        this.state = {
            message: 'test'
        }
    }

    changeMsg() {
        this.setState({
            message: 'test'
        })
    }
    
    render() {
        const { message } = this.state

		return <div>
            <button onClick={e => this.changeMsg()}>change msg</button>
            <Sub message={message} />
        </div>
	}
}
