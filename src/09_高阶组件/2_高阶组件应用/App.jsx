import React, { PureComponent } from 'react'
import VerifyLogin from './enhanceCpn'

const LoginCpn = VerifyLogin(function() {
    return <div>login组件</div>
})

export class App extends PureComponent {
	render() {
		return <div>
            <LoginCpn />
        </div>
	}
}

export default App
