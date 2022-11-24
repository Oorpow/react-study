import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor() {
        super()

        this.state = {
            inputVal: ''
        }
    }

    changeVal(e) {
        this.setState({
            inputVal: e.target.value
        })
    }

	render() {
		return <div>
            <input type="text" value={this.state.inputVal} onChange={e => this.changeVal(e)} />
            <span>input的内容: {this.state.inputVal}</span>
        </div>
	}
}

export default App
