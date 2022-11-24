import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeNumAction } from './store/Home/action'

export class Home extends PureComponent {
	changeNum(counter) {
		this.props.changeNum(counter)
	}

	render() {
		const { counter } = this.props

		return <div>
			Home num: {counter}
			<button onClick={e => this.changeNum(15)}>change num</button>
		</div>
	}
}

const mapStateToProps = (state) => ({
	counter: state.home.counter
})

const mapDispatchToProps = (dispatch) => ({
	changeNum(counter) {
		dispatch(changeNumAction(counter))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
