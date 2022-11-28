import React, { PureComponent } from 'react'
import withRouter from './HOC/with_router'

export class Home extends PureComponent {
	navToRoute(path) {
		const { router } = this.props
		const { navigate } = router
		navigate(path)
	}

	render() {
		return <div>
			<button onClick={e => this.navToRoute('/')}>home</button>
			<button onClick={e => this.navToRoute('/about')}>about</button>
			<button onClick={e => this.navToRoute('/about/detail/1')}>about/detail</button>
		</div>
	}
}

export default withRouter(Home)
