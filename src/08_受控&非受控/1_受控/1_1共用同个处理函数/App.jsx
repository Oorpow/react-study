import React, { PureComponent } from 'react'

export class App extends PureComponent {
	constructor() {
		super()

		this.state = {
			userInfo: {
				username: '',
				password: '',
			},
		}
	}

	changeUserInfo(e) {
        const { userInfo } = this.state

        let newObj = {...userInfo}
        newObj[e.target.name] = e.target.value
        this.setState({
            userInfo: newObj
        })
    }

    getVal() {
        console.log(this.state.userInfo)
    }

	render() {
		const { userInfo } = this.state

		return (
			<div>
				<input
					type="text"
					name="username"
					value={userInfo.username}
					onChange={(e) => this.changeUserInfo(e)}
				/>
				<input
					type="password"
					name="password"
					value={userInfo.password}
					onChange={(e) => this.changeUserInfo(e)}
				/>
                <button onClick={e => this.getVal()}>get value</button>
			</div>
		)
	}
}

export default App
