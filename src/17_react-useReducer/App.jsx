import React, { memo, useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.counter}
        default:
            return state
    }
}

const App = memo(() => {
    const [state, dispatch] = useReducer(reducer, {
        counter: 0,
        list: []
    })

    const addNum = (counter) => {
        dispatch({
            type: 'increment',
            counter
        })
    }

	return <div>
        <span>current counter: {state.counter}</span>
        <button onClick={e => addNum(1)}>num + 1</button>
    </div>
})

export default App
