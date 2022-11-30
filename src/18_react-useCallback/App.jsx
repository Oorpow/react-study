import React, { memo, useCallback, useState } from 'react'

const Home = memo((props) => {
    // 当需要将一个函数传递给子组件时，最好使用useCallback进行优化，优化过后的函数只会在其依赖项发生变化时，重新渲染组件
    // 如果传入的是一个普通函数，那么只要父组件重新渲染了，子组件就一定会跟着重新渲染，因为父组件重新渲染会重新定义函数
    const { increment } = props
    console.log('chongxin xxuanr')

	return <div>
        <span>home子组件</span>
        <button onClick={increment}>add num</button>
    </div>
})

const App = memo(() => {
	const [count, setCount] = useState(0)
    const [msg, setMsg] = useState('default msg')

	//  useCallback让组件每次重新渲染时都返回同一个increment函数，让其不需要重新定义一次
	// 但是useCallback传入的回调，仍然会重新被定义一次，实际并没有做到性能优化
	const increment = useCallback(() => {
		setCount(count + 1)
	}, [count])

    // const changeMsg = useCallback(() => {
    //     setMsg('new msg')
    // }, [])

    // const increment = () => {
	// 	setCount(count + 1)
    // }

    const changeMsg = () => {
        setMsg('new msg')
    }

	return (
		<div>
			<span>count: {count}</span>
            <br />
            <span>msg: {msg}</span>
            <br />
			<button onClick={increment}>addNum</button>
			<button onClick={changeMsg}>change msg</button>
            <hr />
            <Home increment={increment} />
		</div>
	)
})

export default App
