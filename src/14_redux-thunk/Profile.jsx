import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { getBannerAction } from './store/Profile/action'

export class Profile extends PureComponent {
	componentDidMount() {
		this.props.getBannerList()
	}

	render() {
		const { banner } = this.props

		return (
			<div>
				profile 网络请求拿到的数据:
				<ul>
					{banner.map((item) => {
						return (
							<li key={item.id}>
								<span>{item.desc}</span>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	banner: state.profile.banner,
})

const mapDispatchToProps = (dispatch) => ({
	getBannerList() {
		dispatch(getBannerAction())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
