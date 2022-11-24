import { CHANGE_NUM_ACTION } from "./constant"

export const changeNumAction = (num) => {
    return {
        type: CHANGE_NUM_ACTION,
        num
    }
}