import React, { PureComponent } from 'react'
import { EnhanceCpn, EnhanceClassCpn } from './enhanceCpn'

const Home = EnhanceCpn(function (props) {
	return <div>home: {props.home}</div>
})

const Pro = EnhanceClassCpn(function (props) {
	return <div>pro: {props.name}</div>
})

export class App extends PureComponent {
	render() {
		return (
			<div>
				<Home name="home" />
				<Pro />
			</div>
		)
	}
}

export default App
