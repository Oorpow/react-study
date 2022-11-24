import { CHANGE_NUM_ACTION } from "./constant";

const initalState = {
    counter: 10
}

function reducer(state = initalState, action) {
    switch (action.type) {
        case CHANGE_NUM_ACTION:
            return { ...state, counter: action.num }    
        default:
            return state;
    }
}

export default reducer