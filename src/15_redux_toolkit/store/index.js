import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './Home/homeSlice'
import profileReducer from './Profile/profileSlice'

const store = configureStore({
    reducer: {
        home: homeReducer,
        profile: profileReducer
    },
})

export default store