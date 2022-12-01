import React, { memo, useEffect, useLayoutEffect, useState } from 'react'

const App = memo(() => {
	const [count, setCount] = useState(10)

	const changeCount = () => {
		setCount(0)
	}

    useLayoutEffect(() => {
        if (count === 0) {
			setCount(Math.random() + 99)
		}
    }, [count])

	// useEffect(() => {
	// 	if (count === 0) {
	// 		setCount(Math.random() + 99)
	// 	}
	// }, [count])

	return (
		<div>
            <span>current count: {count}</span>
			<button onClick={changeCount}>change count to 0</button>
		</div>
	)
})

export default App
