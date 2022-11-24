import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeNumAction } from './store/action'

export class Home extends PureComponent {
	changeGlobalNum(num) {
		this.props.changeNum(num)
	}

	render() {
		const { counter } = this.props
		return <div>Home 从store中拿到的数据 {counter}
			<button onClick={e => this.changeGlobalNum(3)}>change store num</button>
		</div>
	}
}

const mapStateToProps = (state) => ({
	counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
	changeNum(num) {
		dispatch(changeNumAction(num))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
