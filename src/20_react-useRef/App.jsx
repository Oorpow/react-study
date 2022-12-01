import React, { forwardRef, memo, useCallback, useEffect, useRef, useState } from 'react'

const App = memo(() => {
    const [count, setCount] = useState(0)
    const countRef = useRef()

    countRef.current = count

    const addNum = useCallback(() => {
        setCount(countRef.current + 1)
    }, [])

	return <div>
        <span>{count}</span>
        <button onClick={addNum}>add num</button>
    </div>
})

export default App
