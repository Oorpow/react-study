import React from 'react'
import Home from '../Home'

const About = React.lazy(() => import('../About'))

const routes = [
	{ 
        path: '/', 
        element: <Home /> 
    },
	{
		path: '/about',
		element: <About />,
	},
]

export default routes