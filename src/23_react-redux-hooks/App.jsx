import React, { memo, useEffect } from 'react'
import { connect, useDispatch, useSelector, useStore, shallowEqual } from 'react-redux'
import { addCounterAction } from './store/modules/count'

// memo包裹返回的组件，除非props发生改变，否则是不会重新渲染的
const Message = memo((props) => {
    console.log('msg render')

    const { msg } = useSelector((state) => ({
        msg: state.count.msg
    }), shallowEqual)
    
    return <div>
        <span>message: {msg}</span>
    </div>
})

const App = memo((props) => {
    const { count } = useSelector((state) => ({
        count: state.count.counter
    }), shallowEqual)

    const dispatch = useDispatch()

    const addCount = (count) => {
        dispatch(addCounterAction(count))
    }
    console.log('app render')

	return <div>
        <span>count: {count}</span>
        <button onClick={e => addCount(1)}>add count by 1</button>
        <Message />
    </div>
})

export default App
