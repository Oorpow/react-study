import { ACTION_CHANGE_NUM } from './constants'

export const changeNumAction = (counter) => ({
	type: ACTION_CHANGE_NUM,
    counter
})
