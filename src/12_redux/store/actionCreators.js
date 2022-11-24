import { CHANGE_COUNTER } from "./constants";

export const UPDATE_COUNTER = (counter) => ({
    type: CHANGE_COUNTER,
    counter
})