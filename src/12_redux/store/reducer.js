import { CHANGE_COUNTER } from "./constants"

const initalState = {
	counter: 10,
}

function reducer(state = initalState, action) {
	switch (action.type) {
        case CHANGE_COUNTER:
            return { ...state, counter: state.counter + action.counter }
		default:
			return state
	}
}

export default reducer
