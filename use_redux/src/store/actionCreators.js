import { ACTION_TYPE } from "./constants";
import axios from 'axios'

export const changeCountAction = (count) => ({
  type: ACTION_TYPE.CHANGE_COUNT,
  count
})

export const changeBannersAction = (banners) => ({
  type: ACTION_TYPE.CHANGE_BANNERS,
  banners
})

export const fetchChangeBannersAction = () => {
  return function (dispatch, state) {
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const banners = res.data.data.banner.list
      dispatch(changeBannersAction(banners))
    })

  }
}