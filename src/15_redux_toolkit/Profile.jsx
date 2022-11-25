import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchBannerAction } from './store/Profile/profileSlice'

export class Profile extends PureComponent {
    componentDidMount() { 
        this.props.getBanner()
    }

	render() {
        const { banner } = this.props

		return <div>Profile拿到的banner数据: 
            <ul>
                {
                    banner.map(item => {
                        return <li key={item.id}>
                            <span>{item.desc}</span>
                        </li>
                    })
                }
            </ul>
        </div>
	}
}

const mapStateToProps = (state) => ({
    banner: state.profile.banner
})

const mapDispatchToProps = (dispatch) => ({
    getBanner() {
        dispatch(fetchBannerAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)