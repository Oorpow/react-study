import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
    name: 'countSlice',
    initialState: {
        counter: 10,
        msg: 'default msg'
    },
    reducers: {
        addCounterAction(state, { payload }) {
            state.counter = state.counter + payload
        },
        setMsgAction(state, { payload }) {
            state.msg = payload
        }
    },
})

export const { addCounterAction, setMsgAction } = countSlice.actions
export default countSlice.reducer