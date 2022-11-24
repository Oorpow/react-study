import React, { Component } from 'react'
import Dad from './Dad'
import AppContext from './context/AppContext'
import Child from './Child'

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			info: {
				name: 'app',
				info: 'app test',
			},
		}
	}

	render() {
		const { info } = this.state

		return (
			<div>
				<AppContext.Provider value={info}>
					<Dad />
				</AppContext.Provider>
                <Child />
			</div>
		)
	}
}
