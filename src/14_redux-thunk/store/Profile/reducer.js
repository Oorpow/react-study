import { ACTION_GET_BANNERS } from "./constants";

const initialState = {
    banner: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_GET_BANNERS:
            return { ...state, banner: action.banner }
        default:
            return state;
    }
}

export default reducer