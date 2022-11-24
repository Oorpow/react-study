import React, { PureComponent } from 'react'
import LeftChild from './components/LeftChild'
import RightChild from './components/RightChild'

export class App extends PureComponent {
	render() {
		return (
			<div>
				<LeftChild />
				<br />
				<RightChild />
			</div>
		)
	}
}

export default App
