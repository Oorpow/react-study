import React, { memo, useState, useMemo } from 'react'

const Profile = memo((props) => {
    return (
        <div>profile: {props.count}
            <span>{props.obj.name}</span>
        </div>
    )
})

function calcFn(count) {
    console.log('fn go')
    return count * 2
}

const App = memo(() => {
    const [count, setCount] = useState(0)

    const memoCount = useMemo(() => {
        return calcFn(count)
    }, [count])

    const memoObj = useMemo(() => ({
        name: 'a',
        age: 19
    }), [])

    const changeCount = () => {
        setCount(count + 1)
    }

	return <div>
        <button onClick={changeCount}>click</button>
        <Profile count={memoCount} obj={memoObj} />
    </div>
})

export default App
