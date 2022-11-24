import axios from 'axios'
import { ACTION_GET_BANNERS } from './constants'

export const getBannerAction = () => {
    return function(dispatch, getState) {
        axios.get('http://localhost:8000/carousel').then(res => {
            const bannerList = [].concat(res.data.data)
            dispatch({
                type: ACTION_GET_BANNERS,
                banner: bannerList
            })
        })
    }
}