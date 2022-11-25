import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeNumAction } from './store/Home/homeSlice'

export class Home extends PureComponent {
    changeNum(num) {
        this.props.changeNum(num)
    }

	render() {
        const { counter } = this.props

		return <div>Home从store里拿到的数据: {counter}
            <button onClick={e => this.changeNum(5)}>change num</button>
        </div>
	}
}

const mapStateToProps = (state) => ({
    counter: state.home.counter
})

const mapDispatchToProps = (dispatch) => ({
    changeNum(num) {
        dispatch(changeNumAction(num))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
