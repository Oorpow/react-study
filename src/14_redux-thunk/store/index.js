import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import homeReducer from './Home/reducer'
import profileReducer from './Profile/reducer'

// 通过combineReducers连接多个模块的reducer，结合到一个store中
const rootReducer = combineReducers({
    home: homeReducer,
    profile: profileReducer
})

// 开启redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store