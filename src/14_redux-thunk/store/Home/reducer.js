import { ACTION_CHANGE_NUM } from './constants'

const initialState = {
    counter: 5
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_CHANGE_NUM:
            return { ...state, counter: action.counter }
        default:
            return state
    }
}

export default reducer