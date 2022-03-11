import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface adultsState {
  value: number
}

const initialState: adultsState = {
  value: 2,
}

export const adultSlice = createSlice({
  name: 'adults',
  initialState,
  reducers: {
    addAdult: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },

    decreaseAdult: (state, action: PayloadAction<number>) => {
      if (state.value > 0) {
        state.value -= action.payload
      }
    },
  },
})

export const { addAdult, decreaseAdult } = adultSlice.actions

export const numberOfAdults = (state: RootState) => state.adults.value

export default adultSlice.reducer
