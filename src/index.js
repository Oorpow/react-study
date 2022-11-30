import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import { HashRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'

// import store from './15_redux_toolkit/store'
import App from './19_react-useMemo/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	// <Provider store={store}>
	// <Suspense>
		// <HashRouter>
			<App />
		// </HashRouter>
	// </Suspense>
	// </Provider>
)
