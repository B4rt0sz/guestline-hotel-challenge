import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

type starState = {
  value: number
}

const initialState: starState = {
  value: 3,
}

export const starSlice = createSlice({
  name: 'star',
  initialState,
  reducers: {
    filterStar: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { filterStar } = starSlice.actions

export const numberOfStar = (state: RootState) => state.star.value

export default starSlice.reducer
