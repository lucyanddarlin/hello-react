import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchHomeMultiDataAction = createAsyncThunk('fetch/homeMultiData',
  async (_, { dispatch }) => {
    const res = await axios.get('http://123.207.32.32:8000/home/multidata')
    const banners = res.data.data.banner.list
    dispatch(changeBanners(banners))
    return { banners }
  })

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: []
  },
  reducers: {
    changeBanners (state, { payload }) {
      state.banners = payload
    }
  },
  extraReducers: {
    // [fetchHomeMultiDataAction.pending] (state, action) {
    //   console.log('pending',);
    // },
    // [fetchHomeMultiDataAction.fulfilled] (state, { payload }) {
    //   console.log('fulfilled',);
    //   state.banners = payload.banners
    // },
    // [fetchHomeMultiDataAction.rejected] (state, action) {
    //   console.log('rejected',);
    // },
  }
})

export const { changeBanners } = homeSlice.actions

export default homeSlice.reducer