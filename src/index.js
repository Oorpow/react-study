import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import { HashRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
import { ThemeContext, MsgContext } from './22_react-customHooks/context'

// import store from './15_redux_toolkit/store'
import App from './22_react-customHooks/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	// <Provider store={store}>
	// <Suspense>
	// <HashRouter>
	<ThemeContext.Provider value={{ color: 'red' }}>
		<MsgContext.Provider value={'context msg'}>
			<App />
		</MsgContext.Provider>
	</ThemeContext.Provider>
	// </HashRouter>
	// </Suspense>
	// </Provider>
)
