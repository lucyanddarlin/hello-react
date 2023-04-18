import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 200
  },
  reducers: {
    changeCount (state, { payload }) {
      state.counter += payload

    }
  }
})

export const { changeCount } = counterSlice.actions
export default counterSlice.reducer