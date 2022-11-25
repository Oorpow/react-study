import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 10
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        changeNumAction(state, action) {
            state.counter = action.payload
        },
        // changeNumAction(state, { payload }) {
        //     state.counter = payload
        // }
    }
})

export const { changeNumAction } = homeSlice.actions
export default homeSlice.reducer