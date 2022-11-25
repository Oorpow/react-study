import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    banner: []
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        changeBannerAction(state, { payload }) {
            state.banner = payload
        }
    },
    extraReducers: (builder) => {
        // 第二种写法: 官方推荐
        builder.addCase(fetchBannerAction.fulfilled, (state, { payload }) => {
            state.banner = payload
        })
    }
    // extraReducers: {
    //     // 第一种写法，通过对应的计算属性方法去监听异步请求的状态，rtk2.0将会移除
    //     [fetchBannerAction.fulfilled](state, { payload }) {
    //         state.banner = payload
    //     }
    // }
})

export const fetchBannerAction = createAsyncThunk('fetch/banner', async (extraInfo, { dispatch, getState }) => {
    // 第三种写法: 1. 发送网络请求
    const res = await axios.get('http://localhost:8000/carousel')
    // 2. 拿到结果后dispatch action去修改state里的数据
    dispatch(changeBannerAction(res.data.data))
    // 3. 返回结果，修改action状态为fulfilled
    return res.data.data
})

export const { changeBannerAction } = profileSlice.actions

export default profileSlice.reducer