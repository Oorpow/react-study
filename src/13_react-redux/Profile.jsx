import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class Profile extends PureComponent {
	render() {
		return <div>Profile 从store拿到的数据: {this.props.counter}</div>
	}
}

const mapStateToProps = (state) => ({
	counter: state.counter
})

export default connect(mapStateToProps)(Profile)
