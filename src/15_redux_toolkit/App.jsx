import React, { PureComponent } from 'react'
import Home from './Home'
import Profile from './Profile'

export class App extends PureComponent {
	render() {
		return <div>
            <Home />
            <br />
            <Profile />
        </div>
	}
}

export default App
