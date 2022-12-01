import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './23_react-redux-hooks/store'
import { ThemeContext, MsgContext } from './22_react-customHooks/context'

import App from './23_react-redux-hooks/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<ThemeContext.Provider value={{ color: 'red' }}>
		<MsgContext.Provider value={'context msg'}>
			<Provider store={store}>
				<App />
			</Provider>
		</MsgContext.Provider>
	</ThemeContext.Provider>
)
